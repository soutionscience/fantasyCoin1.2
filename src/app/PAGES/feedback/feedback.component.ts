import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../util/auth.service';
import { ApiServiceService } from '../../util/api-service.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedbackForm: FormGroup;
  feedback: String [];
  username: String;
  email:String;
  sender: String;
  showForm: Boolean;
  showLoading: Boolean;
  showThankYou: Boolean;
  showOffer: Boolean;
  constructor(private fb: FormBuilder,
    private auth: AuthService,
    private api: ApiServiceService) { }

  ngOnInit() {
    this.checkIfSngedIn()
    this.showForm = true;
    this.showLoading = false;
    this.showThankYou = false;
    this.showOffer = true;
  

  }
  checkIfSngedIn(){
    if(this.auth.isLoggedIn){
      this.username = this.auth.getUserName();
      this.sender = this.auth.getUserId()
      this.createForm()
    }else{
      this.username = '';
      this.sender=''
      this.createForm()
    }
  }

  createForm(){
    this.feedbackForm= this.fb.group({
      username: [this.username, [Validators.required]],
      email: ['',[Validators.email]],
      sender: [this.sender, [Validators.required]],
      title:['', [Validators.required]],
      message: ['', [Validators.required]]
    })
  }
  submit(){
    this.showForm = false;
    this.showLoading = true
  this.api.postResource('feedback', this.feedbackForm.value)
  .subscribe(resp=>{
    this.feedback = resp
    this.showThankYou = true;
    this.showLoading = false;
  })
    
  }
  done(){
    this.showForm = true;
    this.showLoading = false;
    this.showThankYou = false;
    this.feedbackForm.reset();
    this.checkIfSngedIn()

  }
  close(){
    this.showOffer = false;
  }
}

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Web3Service } from '../../util/web3.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServiceService } from '../../util/api-service.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create-portis',
  templateUrl: './create-portis.component.html',
  styleUrls: ['./create-portis.component.scss']
})
export class CreatePortisComponent implements OnInit {
  showLoading: Boolean;
  CreatAccountForm: FormGroup;
  usernameWarning: Boolean;
  emailWarning: Boolean;

  constructor(private web3: Web3Service, private fb: FormBuilder,
    private api: ApiServiceService, private matSnackBar: MatSnackBar, 
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.showLoading = false
    this.createForm();
    this.usernameWarning = false;
    this.emailWarning = false
  }

  submit(){
    this.showLoading = true;
    this.api.postResource('users', this.CreatAccountForm.value)
    .subscribe(resp=>{
      console.log('resp from server ', resp);
      this.web3.initializePortis(resp)
      this.showLoading = false;
    }, error=>{
      if(error.data.error == 'username in use'){
        this.setStatus("username already in use");
        this.usernameWarning = true;
        this.showLoading = false;
        this.CreatAccountForm.value.username ='';
        this.ref.detectChanges();

      }else if(error.data.error == 'email in use'){
        this.setStatus("email already in use");
        this.showLoading = false;
        this.emailWarning = true;
        this.ref.detectChanges();

      }
    })
    
  
  }
  createForm(){
    this.CreatAccountForm =this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      username: ['', [Validators.required]]
    })

  }
  setStatus(status){
    this.matSnackBar.open(status, null, {duration: 1000, horizontalPosition: 'center', verticalPosition: 'bottom'})
  }

}

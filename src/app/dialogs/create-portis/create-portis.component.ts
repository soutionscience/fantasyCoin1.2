import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Web3Service } from '../../util/web3.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServiceService } from '../../util/api-service.service';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../../util/auth.service';

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
  showForm: Boolean;
  showPortisText: Boolean; 
  showProgressBar: Boolean;
  showButton: Boolean;
  emailValue: String;

  constructor(private web3: Web3Service, private fb: FormBuilder,
    private api: ApiServiceService, private matSnackBar: MatSnackBar, 
    private ref: ChangeDetectorRef,
    private auth: AuthService) { }

  ngOnInit() {
    this.showLoading = false
    this.createForm();
    this.usernameWarning = false;
    this.emailWarning = false
    this.showPortisText = true;
    this.showButton = true;
  }

  loginWithPortis(){
    this.showButton = false;
    this.showProgressBar = true;
    this.web3.initializePortis();
    this.web3.checkIfPortisIsLoggedIn()
    .subscribe(resp=>{
 if(this.auth.getUserAdress()){ // if user address is in browser
     if(this.auth.getUserAdress() == resp.address){ //check if useraddress is same 
       console.log('user address save is same us browser')
     }else{
       console.log('dont match')
     }
 }else{
   console.log('no browsewr address');
   this.checkIfRegisterd(resp.address, resp.email)

 }
    })


  }
  checkIfRegisterd(address, userEmail){
    console.log('checking ', address)
    this.api.getSpecificResource('users', address)
    .subscribe(resp=>{
      console.log('is user registered?')

    }, error=>{
      this.CreatAccountForm.patchValue({email: userEmail})
      this.showForm = true;
      this.showPortisText = false;
      this.showProgressBar = false;
      this.ref.detectChanges();
      this.api.postResource('users', this.CreatAccountForm.value)
      .subscribe(resp=>{

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
     
    })

  }

  // submit(){
  //   this.showLoading = true;
  //   this.api.postResource('users', this.CreatAccountForm.value)
  //   .subscribe(resp=>{
  //     //console.log('resp from server ', resp);
  //     this.web3.initializePortis(resp)
  //     this.showLoading = false;
  //   }, error=>{
  //     if(error.data.error == 'username in use'){
  //       this.setStatus("username already in use");
  //       this.usernameWarning = true;
  //       this.showLoading = false;
  //       this.CreatAccountForm.value.username ='';
  //       this.ref.detectChanges();

  //     }else if(error.data.error == 'email in use'){
  //       this.setStatus("email already in use");
  //       this.showLoading = false;
  //       this.emailWarning = true;
  //       this.ref.detectChanges();

  //     }
  //   })
    
  
  // }
  createForm(){
    this.CreatAccountForm =this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      username: ['', [Validators.required]]
    })

  }
  setStatus(status){
    this.matSnackBar.open(status, null, {duration: 1000, horizontalPosition: 'center', verticalPosition: 'bottom'})
  }
  showPortis(){

  }

}

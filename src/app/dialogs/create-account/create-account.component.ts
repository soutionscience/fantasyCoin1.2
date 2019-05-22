import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Web3Service } from '../../util/web3.service';
import { ApiServiceService } from '../../util/api-service.service';
import { User } from '../../shared/user.model'
import { AuthService } from '../../util/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  CreatAccountForm: FormGroup
  AccountId: String;
  showForm: Boolean;
  showSignIn: Boolean;
  showLoading: Boolean
  showCreate: Boolean;
  registered: Boolean;
  user:User[];


  constructor(private dialogRef: MatDialogRef<CreateAccountComponent>,
    private fb: FormBuilder,
    private web3Service: Web3Service,
    private apiService: ApiServiceService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {

    this.showForm = true;
    this.showLoading = true;
    this.showSignIn= false;
    this.showCreate= false;
    this.getBaseAccount();
    this.createForm();
   
    // this.decideForm()
   
  }
  // decideForm(){ //check if user is registerd and show appropriate form
  //   console.log('get decide form')
  //   this.showLoading = true;
  //   console.log('register ',this.registered)
  //   if(this.registered){
  //     this.showSignIn = true;
  //   }
  //   else{
  //     this.showCreate= true
  //   }

  // }

  createAccount(){
  this.getBaseAccount; //get account address
    this.close();
  }
  close(){
    this.dialogRef.close()
  }
  createForm(){
    this.CreatAccountForm =this.fb.group({
      email: ['', [Validators.required]],
      username: ['', [Validators.required]]
    })

  }
  getBaseAccount(){
 this.web3Service.getCoinBase()
.subscribe(resp=>{
   this.AccountId = resp;
   this.checkifRegister(this.AccountId)
  
})
  }
  submit(){
    this.showLoading = true;
    this.showForm=false;
    this.CreatAccountForm.value.address = this.AccountId;
    this.apiService.postResource('users', this.CreatAccountForm.value)
   .subscribe(resp=>{
     this.user = resp
     this.showCreate = false;
     this.showSignIn = true;
   })
  }
  signIn(){
    // this.apiService.getSpecificResource('auth', this.AccountId)
    // .subscribe(resp=>{
    console.log('reso from server ', this.user)
      this.web3Service.signTransaction(this.user)
      .subscribe(resp=>{
        console.log('signed by ', resp.account)
        this.apiService.getTokenResource('auth', this.AccountId, resp.sign, resp.nonce )
        .subscribe(resp=>{
         this.authService.setToken(resp.token, resp.userName, resp.userId, this.user)
         this.router.navigate(['/teams'])
        })
     
    })
    this.dialogRef.close()
  }
  checkifRegister(id){
    // console.log('checking if registed', this.AccountId)
    this.apiService.getSpecificResource('users', id)
    .subscribe(resp=>{
      this.showLoading= false
      this.user = resp;
      this.showSignIn = true
      
    },
    error=>{
      console.log('user NOT Found')
      this.showLoading= false
      this.showCreate = true

    })
  }
}

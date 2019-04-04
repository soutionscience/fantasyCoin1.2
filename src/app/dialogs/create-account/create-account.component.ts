import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Web3Service } from '../../util/web3.service';
import { ApiServiceService } from '../../util/api-service.service';

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
  showCreate: Boolean


  constructor(private dialogRef: MatDialogRef<CreateAccountComponent>,
    private fb: FormBuilder,
    private web3Service: Web3Service,
    private apiService: ApiServiceService) { }

  ngOnInit() {

    this.showForm = true;
    this.showLoading = false;
    this.showSignIn= true;
    this.showCreate= false;
    this.getBaseAccount();
    this.createForm();
   
  }

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
      userName: ['', [Validators.required]]
    })

  }
  getBaseAccount(){
 this.web3Service.getCoinBase()
.subscribe(resp=>{
   this.AccountId = resp
  
})
  }
  submit(){
    this.showLoading = true;
    this.showForm=false;
    this.CreatAccountForm.value.address = this.AccountId;
    this.apiService.postResource('users', this.CreatAccountForm.value)
   .subscribe(resp=>{
     this.showCreate = false;
     this.showSignIn = true;
   })
  }
  signIn(){
    this.apiService.getSpecificResource('auth', this.AccountId)
    .subscribe(resp=>{
    console.log('reso from server ', resp)
      this.web3Service.signTransaction(resp)
      .subscribe(resp=>{
        console.log('signed by ', resp.account)
        this.apiService.getTokenResource('auth', resp.nounce, resp.sign )
        .subscribe(resp=>{
          console.log('responce from signature ', resp)
        })
      })
    })
  }
}

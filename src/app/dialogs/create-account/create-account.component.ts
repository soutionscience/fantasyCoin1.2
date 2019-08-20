import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Web3Service } from '../../util/web3.service';
import { ApiServiceService } from '../../util/api-service.service';
import { User } from '../../shared/user.model'
import { AuthService } from '../../util/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../../util/token.service';
import { MatSnackBar } from '@angular/material';


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
  loadingBall: Boolean;
  highlight: Boolean;
  usernameWarning: Boolean;
  emailWarning: Boolean;


  constructor(private dialogRef: MatDialogRef<CreateAccountComponent>,
    private fb: FormBuilder,
    private web3Service: Web3Service,
    private apiService: ApiServiceService,
    private authService: AuthService,
    private router: Router,
    private ref: ChangeDetectorRef,
    private zone: NgZone, 
    private tokenService: TokenService,
    private matSnackBar: MatSnackBar) { }

    // called when user has account but is not signed in

  ngOnInit() {
    // console.log('hitting  create account')
    this.showForm = true;
    this.showLoading = true;
    this.showSignIn= false;
    this.showCreate= false;
    this.getBaseAccount();
    this.createForm();
    this.ref.detectChanges();
    this.highlight = false;
    this.usernameWarning = false;
    this.emailWarning = false
    
  
   
    // this.decideForm()
   
  }
  

  createAccount(){
  this.getBaseAccount(); //get account address
    this.close();

    
  }
// gets base accoun and determins which form to show to user 
getBaseAccount(){
 
  this.web3Service.getCoinBase()
 .subscribe(resp=>{
    this.AccountId = resp;
    this.checkifRegister(this.AccountId)
   
 })
   }

   checkifRegister(id){

    console.log('checking if registed', this.AccountId)
    this.apiService.getSpecificResource('users', id)
    .subscribe(resp=>{
      this.showLoading= false
      this.user = resp;
      this.showSignIn = true;
      this.ref.detectChanges()
      
    },
    error=>{
      console.log('user NOT Found')
      this.showLoading= false
      this.showCreate = true
      this.ref.detectChanges();

    })
  }

  close(){
    this.dialogRef.close()
  }

  // form for creatring new account
  createForm(){
    this.CreatAccountForm =this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      username: ['', [Validators.required]]
    })

  }

  submit(){
    this.emailWarning = false;
    this.usernameWarning= false;
    this.showLoading = true;
    this.ref.detectChanges()
    this.showForm=false;
    this.CreatAccountForm.value.address = this.AccountId;
    this.CreatAccountForm.value.provider = 'metamask'
    this.apiService.postResource('users', this.CreatAccountForm.value)
   .subscribe(resp=>{
  //   console.log('resp from server ', resp)
     this.user = resp
     this.showCreate = false;
     this.showSignIn = true;
     this.ref.detectChanges();
     //this.apiService.postResource('messages', {"email": this.CreatAccountForm.value.email, "name": this.CreatAccountForm.value.username  }).subscribe()
   }, error=>{
     if(error.data.error == 'username in use'){
      this.setStatus("username already in use");
      this.showCreate = true;
      this.showLoading = false;
      this.showForm=true;
      this.usernameWarning = true;
      this.CreatAccountForm.value.username ='';
      this.ref.detectChanges();
     }else if(error.data.error == 'email in use'){
      this.setStatus("email already in use");
      this.showCreate = true;
      this.showLoading = false;
      this.showForm=true;
      this.emailWarning = true;
      this.ref.detectChanges();
     }
     
   })
  }
  signIn(){
// signs user in with new Authtoken
    console.log('reso from server ', this.user)
      this.web3Service.signTransaction(this.user)
      .subscribe(resp=>{
        console.log('signed by ', resp.account);
        this.apiService.getTokenResource('auth', this.AccountId, resp.sign, resp.nonce )
        .subscribe(resp=>{
        this.authService.setToken(resp.token, resp.userName, resp.userId, resp, resp.address, resp.active, resp.email, resp.provider);
        //this.apiService.postResource('messages', {"email": resp.email, "name": resp.userName  }).subscribe()
        this.tokenService.getTokenBalance(this.AccountId).subscribe(resp=>{
          this.showLoading = true;
         // console.log('responce ni ', resp);
          this.authService.isActive();
        
       
             // use zone to take care of issue with ngOninit not firring after navigate
        //this.zone.run(()=>this.router.navigateByUrl('/transfers'))// use 
        })
      
        })
     
    })
    this.dialogRef.close()
  }

  setStatus(status){
    this.matSnackBar.open(status, null, {duration: 1000, horizontalPosition: 'center', verticalPosition: 'bottom'})
  }

}

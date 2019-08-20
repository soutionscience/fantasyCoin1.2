import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { Web3Service } from '../../util/web3.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServiceService } from '../../util/api-service.service';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { AuthService } from '../../util/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../../util/token.service';
import { User } from '../../shared/user.model';
import { SignerService } from '../../util/signer.service';

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
  userId: String;
  user: User[];

  constructor(private web3: Web3Service, private fb: FormBuilder,
    private api: ApiServiceService, private matSnackBar: MatSnackBar, 
    private ref: ChangeDetectorRef,
    private auth: AuthService,
    private router: Router,
    private zone: NgZone,
    private dialogRef: MatDialogRef<CreatePortisComponent>,
    private tokenService: TokenService,
    private sign: SignerService) { }

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
    this.web3.checkWe3NetWork()
    this.web3.checkIfPortisIsLoggedIn()
    .subscribe(resp=>{
      this.userId = resp.address;
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
      console.log(' user is registered?')

    }, error=>{
      //user is not registered
      this.showProgressBar = false;
      this.showRegistrationForm(userEmail)

    })
     


  }

  showRegistrationForm(userEmail){
    this.CreatAccountForm.patchValue({email: userEmail})
    this.showForm = true;

  }

  submit(){
    this.showProgressBar = true;
    this.CreatAccountForm.value.address = this.userId;
    this.CreatAccountForm.value.provider = 'portis'
    this.api.postResource('users', this.CreatAccountForm.value)
    .subscribe(resp=>{
      //console.log('resp from server ', resp);
      // this.web3.initializePortis(resp)
      this.user = resp
      this.showForm = false;
      //this.api.postResource('messages', {"email": this.CreatAccountForm.value.email, "name": this.CreatAccountForm.value.username  })
      //.subscribe()
      this.sign.getmyToken(this.user, this.userId).
      subscribe(resp=>{

            // use zone to take care of issue with ngOninit not firring after navigate
         this.zone.run(()=>this.router.navigateByUrl('/transfers'))// use 
         this.dialogRef.close()
         
      })
      //console.log('sent to sign')

    }, error=>{
      if(error.data.error == 'username in use'){
        this.setStatus("username already in use");
        this.usernameWarning = true;
        this.showProgressBar = false;
        this.CreatAccountForm.value.username ='';
        this.ref.detectChanges();

      }else if(error.data.error == 'email in use'){
        this.setStatus("email already in use");
        this.showProgressBar = false;
        this.emailWarning = true;
        this.ref.detectChanges();

      }
    })
    
  
  }
  signIn(user){
   
    this.sign.getmyToken(user, this.userId)
   
    
  
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
  showPortis(){

  }

}

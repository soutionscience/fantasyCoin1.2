import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { Web3Service } from '../../util/web3.service';
import { AuthService } from '../../util/auth.service';
import { ApiServiceService } from '../../util/api-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar, MatDialogRef, MatDialog } from '@angular/material';
import { SignerService } from '../../util/signer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-portis',
  templateUrl: './create-portis.component.html',
  styleUrls: ['./create-portis.component.scss']
})
export class CreatePortisComponent implements OnInit {
  CreatAccountForm: FormGroup;
  emailValue: String;
  showProgressBar: Boolean;
  showButton: Boolean;
  progressText: String;
  showPortisText: Boolean;
  showForm: Boolean;
  userId: String;
  usernameWarning : Boolean;
  emailWarning: Boolean;
  WelcomeText: String;


  constructor(private web: Web3Service, private auth: AuthService, 
    private api: ApiServiceService,
    private fb: FormBuilder,
    private ref: ChangeDetectorRef,
    private matSnackBar: MatSnackBar,
    private signer: SignerService,
    private dialogRef: MatDialogRef<CreatePortisComponent>,
    private zone: NgZone,
    private router: Router) { }

  ngOnInit() {
    this.createForm()
    this.showButton = true
    this.showProgressBar = false;
    this.showPortisText = true;
    this.showForm = false;
    this.usernameWarning  = false;
    this.emailWarning = false;
    
  }


  loginWithPortis(){
    console.log('clicked bitch');
    this.showProgressBar = true;
    this.showButton = false;
    this.progressText = 'getting things ready....'
    this.web.initPortisAndGetAccount()
    .subscribe(resp=>{
     if(resp.email){
      this.progressText ="setting up your account..."
      this.ref.detectChanges()
       this.userId = resp.account;
       this.emailValue = resp.email
      this.checkBrowser(resp.account)

     }else{
       this.userId = resp;
       this.emailValue = '';
       this.checkBrowser(resp)
     }

    })
  }

  checkIfRegisterd(id){
   //console.log('looking for ', id)
   this.api.getSpecificResource('users', id)
  .subscribe(resp=>{
    this.progressText ="just a moment.."
   this.ref.detectChanges();
   //this.WelcomeText = `welcome back ${resp[0].username}`
  //console.log('user is registered ',);
  this.signer.getmyToken(resp, id).subscribe(resp=>{
    console.log('is it done?');
    this.zone.run(()=>this.router.navigateByUrl('/transfers'))
    this.dialogRef.close();
    this.ref.detectChanges();
    
  })

  }, error=>{
    this.progressText ="just a moment.."
  //  console.log('user does not exit, create account ');
    this.showPortisText = false
   this.CreatAccountForm.patchValue({email: this.emailValue})
    this.showForm = true;
    this.showProgressBar = false;
    this.ref.detectChanges();

  })
    
    
  }
  checkBrowser(address){
    this.progressText ="setting up your account..."
    this.ref.detectChanges()
    if(this.auth.getUserAdress()){
    //  console.log('user address in browser')
    }else{
     // console.log('no user address in browser');
      this.checkIfRegisterd(address)
    }

  }
  createForm(){
    this.CreatAccountForm =this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      username: ['', [Validators.required]]
    })

  }
  register(){
    this.CreatAccountForm.value.address = this.userId;
    this.CreatAccountForm.value.provider = 'portis';
    this.showProgressBar = false;
    this.progressText = "setting up your account"
   // this.ref.detectChanges()
    this.api.postResource('users', this.CreatAccountForm.value)
    .subscribe(resp=>{
      //console.log('registerd')
      this.showForm = false;
      this.showProgressBar = true;
      this.ref.detectChanges();
      this.signer.getmyToken(resp, this.userId)
      .subscribe(resp=>{
        this.api.postResource('messages', {"email": this.CreatAccountForm.value.email, "name": this.CreatAccountForm.value.username  })
      .subscribe();
      this.zone.run(()=>this.router.navigateByUrl('/transfers'))
      this.dialogRef.close();

      })
      


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

  setStatus(status){
    this.matSnackBar.open(status, null, {duration: 1000, horizontalPosition: 'center', verticalPosition: 'bottom'})
  }

}

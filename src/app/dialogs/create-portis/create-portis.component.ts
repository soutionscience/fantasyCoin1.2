import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Web3Service } from '../../util/web3.service';
import { AuthService } from '../../util/auth.service';
import { ApiServiceService } from '../../util/api-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  showForm: Boolean


  constructor(private web: Web3Service, private auth: AuthService, 
    private api: ApiServiceService,
    private fb: FormBuilder,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.createForm()
    this.showButton = true
    this.showProgressBar = false;
    this.showPortisText = true;
    this.showForm = false;
    
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
       console.log('with email ', resp)
       this.emailValue = resp.email
      this.checkBrowser(resp.account)

     }else{
       console.log('bila email ', resp)
       this.emailValue = '';
       this.checkBrowser(resp)
     }

    })
  }

  checkIfRegisterd(id){
   // console.log('looking for ', id)
   this.api.getSpecificResource('users', id)
  .subscribe(resp=>{
    this.progressText ="just a moment.."
   this.ref.detectChanges();
    console.log('user is registered ', resp)
  }, error=>{
    this.progressText ="just a moment.."
    console.log('user does not exit, create account ');
    this.showPortisText = false
    this.showForm = true;
    this.ref.detectChanges();

  })
    
    
  }
  checkBrowser(address){
    this.progressText ="setting up your account..."
    this.ref.detectChanges()
    if(this.auth.getUserAdress()){
      console.log('user address in browser')
    }else{
      console.log('no user address in browser');
      this.checkIfRegisterd(address)
    }

  }
  createForm(){
    this.CreatAccountForm =this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      username: ['', [Validators.required]]
    })

  }

}

import { Component, OnInit } from '@angular/core';
import { UnlockMetamaskComponent } from '../dialogs/unlock-metamask/unlock-metamask.component';
import { LoginMetamaskComponent } from '../dialogs/login-metamask/login-metamask.component';
import { InstallMetamaskComponent } from '../dialogs/install-metamask/install-metamask.component';
import {CreateAccountComponent} from '../dialogs/create-account/create-account.component'
import { Web3Service } from '../util/web3.service';
import { MatDialog } from '@angular/material';
import { ApiServiceService } from '../util/api-service.service';
import { AuthService } from '../util/auth.service';

@Component({
  selector: 'app-login-horizontal',
  templateUrl: './login-horizontal.component.html',
  styleUrls: ['./login-horizontal.component.scss']
})
export class LoginHorizontalComponent implements OnInit {
  coinBase: String;
  showButton: Boolean;

  constructor(private web3Service: Web3Service, private dialog: MatDialog,
    private apiService: ApiServiceService, private authService: AuthService) { }

  ngOnInit() {
  this.getCoinBase();
  this.showButton = false;
  this.checkIfToDisplayButton();

  }
  login(){
    this.web3Service.checkMetamask(this.coinBase)
    .subscribe(resp=>{
    if(resp ==1){
        console.log('web3 installed but not unlocked')
        this.dialog.open(UnlockMetamaskComponent)
      }
      if(resp == 2){
        console.log('web3 installed and unlocked');
        // this.dialog.open(CreateAccountComponent, {width: '350px', height: 'auto'})
        this.dialog.open(CreateAccountComponent, {width: '350px', height: 'auto'})
  
      }
      if(resp== 3){
        console.log('web3 not installed!!')
        this.dialog.open(InstallMetamaskComponent, {width: '600px' , height: 'auto'})
       
      }
    })
  
  }
  
  getCoinBase(){
 this.web3Service.getCoinBase().subscribe(resp=> this.coinBase = resp)
 console.log('coin base is ',this.coinBase)
}

checkIfToDisplayButton(){
  this.web3Service.checkMetamask(this.coinBase)
    .subscribe(resp=>{
    if(this.authService.isLoggedIn() ){ //web 3 installed unlocked and token key present
      console.log('user is singed in ')  
      this.showButton = false

      }
     else{
       console.log('not signed in ', resp )
        this.showButton = true;
      }
    })
}
}

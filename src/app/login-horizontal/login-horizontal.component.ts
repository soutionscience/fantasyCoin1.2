import { Component, OnInit } from '@angular/core';
import { UnlockMetamaskComponent } from '../dialogs/unlock-metamask/unlock-metamask.component';
import { LoginMetamaskComponent } from '../dialogs/login-metamask/login-metamask.component';
import { InstallMetamaskComponent } from '../dialogs/install-metamask/install-metamask.component';
import {CreateAccountComponent} from '../dialogs/create-account/create-account.component'
import { Web3Service } from '../util/web3.service';
import { MatDialog } from '@angular/material';
import { ApiServiceService } from '../util/api-service.service';

@Component({
  selector: 'app-login-horizontal',
  templateUrl: './login-horizontal.component.html',
  styleUrls: ['./login-horizontal.component.scss']
})
export class LoginHorizontalComponent implements OnInit {
  coinBase: Number;

  constructor(private web3Service: Web3Service, private dialog: MatDialog,
    private apiService: ApiServiceService) { }

  ngOnInit() {
  this.getCoinBase();
  }
  login(){
    this.web3Service.checkMetamask()
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
}

}

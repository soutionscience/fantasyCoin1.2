import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../../util/web3.service';
import { UnlockMetamaskComponent } from '../../dialogs/unlock-metamask/unlock-metamask.component';
import { LoginMetamaskComponent } from '../../dialogs/login-metamask/login-metamask.component';
import { InstallMetamaskComponent } from '../../dialogs/install-metamask/install-metamask.component';
import {CreateAccountComponent} from '../../dialogs/create-account/create-account.component'
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loading: Boolean;
  coinBase: Number;

  constructor(private web3Service: Web3Service, private dialog: MatDialog,
    private dialogRef: MatDialogRef<SignInComponent>) { }

  ngOnInit() {
    this.getCoinBase();
    this.loading = false
  }
  login(){
    this.loading = true
    this.web3Service.checkMetamask(this.coinBase)
    .subscribe(resp=>{
      console.log('what is the responce any way? ',resp)
    if(resp ==1){
        //console.log('web3 installed but not unlocked')
        this.dialog.open(UnlockMetamaskComponent)
      }
      if(resp == 2){
       // console.log('web3 installed and unlocked');
        // this.dialog.open(CreateAccountComponent, {width: '350px', height: 'auto'})
        this.dialog.open(CreateAccountComponent, {width: '350px', height: 'auto'})
  
      }
      if(resp== 3){
      //  console.log('web3 not installed!!')
        this.dialog.open(InstallMetamaskComponent, {width: '600px' , height: 'auto'})
       
      }
    })
    this.dialogRef.close()
  
  }
  getCoinBase(){
    this.web3Service.getCoinBase().subscribe(resp=> {this.coinBase = resp; console.log('coinbase is ', this.coinBase)})
   console.log('coin base is ',this.coinBase)
   }

}

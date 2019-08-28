import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../../util/web3.service';
import { AuthService } from '../../util/auth.service';
import { MatDialog } from '@angular/material';
import { ApiServiceService } from '../../util/api-service.service';
import {CreateAccountComponent} from '../../dialogs/create-account/create-account.component'
import { CreatePortisComponent } from '../../dialogs/create-portis/create-portis.component';
import { UnlockMetamaskComponent } from '../../dialogs/unlock-metamask/unlock-metamask.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  coinBase: String;
  showButton: Boolean;

  constructor(private web3Service: Web3Service, private authService: AuthService,
    private dialog: MatDialog, private apiService: ApiServiceService) { }

  ngOnInit() {
    this.getCoinBase();
    this.checkIfToDisplayButton()

  }

  getStarted(){
    this.web3Service.checkMetamask(this.coinBase)
    .subscribe(resp=>{
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
        this.dialog.open(CreatePortisComponent, {width: '600px' , height: 'auto'})
       
      }
    })
  }
  getCoinBase(){
    this.web3Service.getCoinBase().subscribe(resp=> {this.coinBase = resp; })
  }


  checkIfToDisplayButton(){
    if(this.coinBase && this.authService.isLoggedIn()){
      this.showButton = false
    }else{
      this.showButton = true;
    }
    
  }

}

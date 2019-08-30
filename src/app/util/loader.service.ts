import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { Web3Service } from './web3.service';
import { MatDialog } from '@angular/material';
import { CreateAccountComponent } from '../dialogs/create-account/create-account.component';
import { AuthService } from './auth.service';
import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoaded: Boolean;
  registered: Boolean;
  User: any;

  constructor(private api: ApiServiceService, private web3: Web3Service, private auth: AuthService,
     private dialog: MatDialog) { }
   // 3 options
   // registed and unlocked
   // unlocked but not registerd
   // unlocked but registerd
   //no web3 installed
   //web3 installed but wrong network
  checkIfReady(){
    this.isLoaded = false;
    this.registered = false;
    if(!this.auth.getUserAdress()){// check if there is NO user stuff in browser and just load
        this.isLoaded = true;
        console.log('no user stuff')
    } else{
       console.log('present')
       this.checkIfBrowserAddressMatch(this.auth.getUserAdress())
       
    }
    
    

  }
  checkIfBrowserAddressMatch(browserAddress){
    this.web3.checkWe3NetWork()
    this.web3.getCoinBase()
    .subscribe(resp=>{
      console.log('responce ', resp, 'browser address ', browserAddress)
      if(!resp){
        this.isLoaded = true
      }else{
        if(browserAddress == resp){
          this.auth.confirmExporation();
          this.checkifRegister(resp)
          this.isLoaded = true;

        }else{
          //this.auth.logOut()
          this.isLoaded = true;
        }
      }
    })

  }
  checkifRegister(id){
    console.log('checking if registed', id)
    this.api.getVerySpecificResource('users', id, 'active')
    .subscribe(resp=>{
     this.User = resp
      
     //console.log('setting status ', this.User.status )
      this.auth.setActiveStatus(this.User.status)
      
    },error=>{
      console.log('user NOT Found')
     

    })
  }
}

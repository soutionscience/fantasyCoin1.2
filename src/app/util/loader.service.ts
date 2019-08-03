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
    this.web3.getCoinBase()
    .subscribe(resp=>{
      this.web3.checkWe3NetWork() //not sure about this implementation
      if(!resp){
       console.log('no responce'); // cannot get coinbase, either it's locked or not web3
       this.isLoaded = true;
      }else{
        console.log('what is in ', this.auth. getUserAdress())
        if(this.auth.getUserAdress()){ // checks if the is  any user address stuff in browser
          console.log('storage present')
          if(this.auth.getUserAdress == resp){
            this.checkifRegister(resp)
            this.isLoaded = true;

          }else{
            this.auth.logOut();
          }


        }
        this.isLoaded = true;
        
        
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

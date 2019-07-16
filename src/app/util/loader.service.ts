import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { Web3Service } from './web3.service';
import { MatDialog } from '@angular/material';
import { CreateAccountComponent } from '../dialogs/create-account/create-account.component';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoaded: Boolean;
  registered: Boolean;

  constructor(private api: ApiServiceService, private web3: Web3Service, private dialog: MatDialog) { }
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
      if(!resp){
       console.log('no responce'); // cannot get coinbase, either it's locked or not web3
       this.isLoaded = true;
      }else{
        this.checkifRegister(resp)
        this.isLoaded = true;
      }
    })

  }
  checkifRegister(id){
    //console.log('checking if registed', this.AccountId)
    this.api.getSpecificResource('users', id)
    .subscribe(resp=>{
      
     this.dialog.open(CreateAccountComponent)
      
    },error=>{
      console.log('user NOT Found')
     

    })
  }
}

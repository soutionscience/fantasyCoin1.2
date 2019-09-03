import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
declare let require: any;


declare let window: any;
const Web3 = require('web3');

@Injectable({
  providedIn: 'root'
})
export class MyWeb3Service {
  private web3: any;

  constructor() { }


  checkAndInitWeb3():Observable<any>{
    return Observable.create(observer=>{
      if(typeof window.ethereum !== 'undefined'){
        // console.log('modern browser');
         this.web3 = new Web3(window.ethereum);
   
         try{
           window.ethereum.enable()
           //window.location.reload()
           
         }catch(error){
          // console.log('user denied')
         }
         observer.next('metamask');
         observer.complete()
   
       }else if(typeof window.web3 !== 'undefined') {


        console.warn(
         'using metamsk detected'
        );
        // Use Mist/MetaMask's provider
        this.web3 = new Web3(Web3.givenProvider);
        // account = this.getCoinBaseHere();
        // console.log('coinbase ', account)
       // this.getSingleAccount()
       observer.next('metamask');
       observer.complete()
      }else{
        observer.next('portis');
         observer.complete()
      }
    })
  }
}



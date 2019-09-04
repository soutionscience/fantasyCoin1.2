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
       
         this.web3 = new Web3(window.ethereum);
   
         try{
           window.ethereum.enable()
         
           
         }catch(error){
      
         }
         observer.next('metamask');
         observer.complete()
   
       }else if(typeof window.web3 !== 'undefined') {


      
    
        this.web3 = new Web3(Web3.givenProvider);

       observer.next('metamask');
       observer.complete()
      }else{
        observer.next('portis');
         observer.complete()
      }
    })
  }

  getCoinBase():Observable<any>{
    
    return Observable.create(observer=>{
      this.web3.eth.getAccounts((err, resp)=>{
      
        if(err) observer.next(err)
       
        observer.next(resp[0])
        observer.complete()
      })
    })
  }
  getMyCoinBase(){
  
     let account = this.web3.eth.getAccounts()
     return account;
   }



}



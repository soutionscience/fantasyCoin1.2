import { Injectable, } from '@angular/core';
import { Factory, League, Token} from '../shared/address';
import { Web3Service } from './web3.service';
import { Observable } from 'rxjs';

declare let require: any;
const Web3 = require('web3');
declare let window: any;
let tokenContract = require('../../../build/contracts/fantasyCoinV3.json')

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  userBalance: number

  constructor(private web3Service: Web3Service) { }



  getTokenBalance(account):Observable<any>{
   
    return Observable.create(observer=>{
      let instance = this.web3Service.createContractInstance(Token, tokenContract);
      //console.log('account nayo ', account)
      instance.methods.balanceOf(account).call((err, resp)=>{
        if(err){
         observer.next(err)
        }else{
         this.userBalance =  parseInt(resp);
         //console.log('resp ya token ni? ',resp)
         
         
         observer.next(resp);
         observer.complete()
        }
      })
    })
 
  }
  getTokenCount(){
  //console.log('user balance  ', this.userBalance)   
return this.userBalance
  }
  removeTokenCount(){
    this.userBalance =0;
  }
  reduceTokenCount(playerCost: number){
    
    this.userBalance-= playerCost
  }
  addTokenCount(playerCost){
   // console.log('player cons ', playerCost)
    this.userBalance += playerCost
  }
  enoughTokens(){
    // console.log('is it enough?, ', this.userBalance)
    if(this.userBalance < 0){
      return false;
    }else{
      return true;
    }
  }

}

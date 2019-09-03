import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

declare let window: any;
const Web3 = require('web3');

@Injectable({
  providedIn: 'root'
})
export class MyWeb3Service {

  constructor() { }


  checkAndInitWeb3():Observable<any>{
    return Observable.create(observer=>{
      console.log('checking web3')
    })
  }
}



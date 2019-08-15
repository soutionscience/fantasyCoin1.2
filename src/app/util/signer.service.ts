import { Injectable } from '@angular/core';
import { Web3Service } from './web3.service';

@Injectable({
  providedIn: 'root'
})
export class SignerService {

  constructor(private web3: Web3Service) { }

  getmyToken(user){
    this.web3.signTransaction(user)
    .subscribe(resp=> console.log('signature ', resp))

  }
}

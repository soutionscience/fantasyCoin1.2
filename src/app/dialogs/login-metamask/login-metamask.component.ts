import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import { Web3Service } from '../../util/web3.service';
import { ApiServiceService } from '../../util/api-service.service';
import { TokenService } from '../../util/token.service';

@Component({
  selector: 'app-login-metamask',
  templateUrl: './login-metamask.component.html',
  styleUrls: ['./login-metamask.component.scss']
})
export class LoginMetamaskComponent implements OnInit {
  coinBase: String
  challenge: String [];

  constructor(private web3Service: Web3Service,
    private apiService: ApiServiceService,
    private  dialogRef: MatDialogRef<LoginMetamaskComponent>,
    private tokenService: TokenService,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.getCoinBase()
  }

  getCoinBase(){
    this.web3Service.getCoinBase()
    .subscribe(resp=>{
    this.coinBase = resp
    })

  }


  login(){
    
   this.apiService.getSpecificResource('auth', this.coinBase)
   .subscribe(resp=>{
     this.challenge =resp
     console.log('what is the resp ', this.challenge)
     this.web3Service.signTransaction(this.challenge)
     .subscribe(resp=>{
        this.apiService.getTokenResource('auth',resp.nounce, resp.sign, resp.nonce)
       .subscribe(resp=>{console.log('am i geting token ', resp);
         this.tokenService.getTokenBalance(this.coinBase).subscribe() })
     })

   })
   this.ref.detectChanges()
    this.close();

  }
  close(){
    this.ref.detectChanges();
    this.dialogRef.close()
  }

}

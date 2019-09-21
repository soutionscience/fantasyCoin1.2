import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../util/auth.service';
import { TokenService } from '../util/token.service';
import { Web3Service } from '../util/web3.service';
import { MatDialog } from '@angular/material';
import { UnlockMetamaskComponent } from '../dialogs/unlock-metamask/unlock-metamask.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  userAccount: String;
  accountBal: Number;
  userName: String;
  coinBase: String;
  shown: Boolean;

  constructor(public authService: AuthService, private tokenService: TokenService,
    private ref: ChangeDetectorRef,
    private web3: Web3Service,
    private dialog: MatDialog) { }

  ngOnInit() {
    //this.getCoinBase()
    this.shown = false;
   
    this.userName = this.authService.getUserName()
    this.userAccount = this.authService.getUserAdress()
//     this.tokenService.getTokenBalance(this.userAccount)
//     .subscribe(resp=>{
//     this.accountBal = this.tokenService.getTokenCount();
// //console.log('account balance ', this.accountBal)
// })
  
    
      this.ref.detectChanges();
      
    // })
  }
  checkmetamask(){


  }
  toggle(){
    this.shown = !this.shown;
  }

  logOut(){
    this.authService.logOut();
    this.tokenService.removeTokenCount();
    this.ref.detectChanges();
  }


  getCoinBase(){
   this.web3.getCoinBase().subscribe(resp => {
     this.web3.checkMetamask(resp).subscribe(resp=>{
       if(resp==1){
         console.log('unlock metamask called once')
           //this.dialog.open(UnlockMetamaskComponent).afterClosed().subscribe(()=>console.log('closed??'))
       }
     })
   })
  
   
   }

}

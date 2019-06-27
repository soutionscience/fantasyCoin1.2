import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../util/auth.service';
import { TokenService } from '../util/token.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  userAccount: String;
  accountBal: Number;
  userName: String;

  constructor(private authService: AuthService, private tokenService: TokenService,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.userName = this.authService.getUserName()
    this.userAccount = this.authService.getUserAdress()
    this.tokenService.getTokenBalance(this.userAccount)
    .subscribe(resp=>{
      this.accountBal = this.tokenService.getTokenCount();

    console.log('account balance ', this.accountBal)

    })
  
    
      this.ref.detectChanges();
      
    // })
  }

  logOut(){
    this.authService.logOut();
    this.tokenService.removeTokenCount();
    this.ref.detectChanges();
  }

}

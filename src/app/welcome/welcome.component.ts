import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Web3Service } from '../util/web3.service';
import { AuthService } from '../util/auth.service';
import { MatDialog } from '@angular/material';
import { BetaComponent } from '../dialogs/beta/beta.component';
import { WarningBetaComponent } from '../dialogs/warning-beta/warning-beta.component';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private web3Service: Web3Service, private auth: AuthService,
    private dialog: MatDialog, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    console.log('loading ..', this.auth.checkExpiration())
    this.ref.detectChanges()
    this.checkIfNew()
  }
  checkIfNew(){
   setTimeout(()=>{if(this.auth.getNewUser()== null){
    this.dialog.open(WarningBetaComponent,{width: '450px', height: 'auto'})
   }}, 1000)
   }
  

}

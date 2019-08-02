import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Web3Service } from '../util/web3.service';
import { AuthService } from '../util/auth.service';
import { MatDialog } from '@angular/material';
//import { BetaComponent } from '../dialogs/beta/beta.component';
import { WarningBetaComponent } from '../dialogs/warning-beta/warning-beta.component';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';
import { LoaderService } from '../util/loader.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  hasLoaded: Boolean

  constructor(private web3Service: Web3Service, private auth: AuthService,
    private dialog: MatDialog, private ref: ChangeDetectorRef,
    public loader: LoaderService) { }

  ngOnInit() {
    this.loader.checkIfReady()
    console.log('loading ..', this.auth.checkExpiration())
    this.ref.detectChanges()
    this.checkIfNew();
    this.hasLoaded = false;
  }
  checkIfNew(){
   setTimeout(()=>{if(this.auth.getNewUser()== null){
    this.dialog.open(WarningBetaComponent,{width: '450px', height: 'auto'})
   }}, 1000)
   }
  

}

import { Component, OnInit } from '@angular/core';
import { MyWeb3Service } from '../../util/my-web3.service';
import { MatDialog } from '@angular/material';
import { CreatePortisComponent } from '../../dialogs/create-portis/create-portis.component';
import { WarningBetaComponent } from '../../dialogs/warning-beta/warning-beta.component';
import { AuthService } from '../../util/auth.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  loading: Boolean
  buttonText: String;
  coinBase: String;
  shown: Boolean

  constructor(private web3: MyWeb3Service, private dialog: MatDialog, 
    private auth: AuthService) { }

  ngOnInit() {
    this.buttonText = "Get Started";
    this.checkIfNew();
    this.shown = false;
  }
  login(){
    this.buttonText ="starting.."
    this.loading = true;
    this.getCoinBase()// check provider



  }
  getCoinBase(){
 this.web3.checkAndInitWeb3().subscribe(resp=>{
   this.buttonText = `launching ${resp} ..`;
 

     this.dialog.open(CreatePortisComponent, {width: '600px' , height: 'auto'})

 
 })
  
   }
   checkIfNew(){
    setTimeout(()=>{if(this.auth.getNewUser()== null){
     this.dialog.open(WarningBetaComponent,{width: '450px', height: 'auto'})
    }}, 1000)
  }
  toggle(){
    this.shown = !this.shown;
  }

}

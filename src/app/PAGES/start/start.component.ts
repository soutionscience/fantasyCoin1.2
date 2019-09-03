import { Component, OnInit } from '@angular/core';
import { MyWeb3Service } from '../../util/my-web3.service';
import { MatDialog } from '@angular/material';
import { CreatePortisComponent } from '../../dialogs/create-portis/create-portis.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  loading: Boolean
  buttonText: String;
  coinBase: String;

  constructor(private web3: MyWeb3Service, private dialog: MatDialog) { }

  ngOnInit() {
    this.buttonText = "Get Started"
  }
  login(){
    this.buttonText ="starting.."
    this.loading = true;
    this.getCoinBase()// check provider



  }
  getCoinBase(){
 this.web3.checkAndInitWeb3().subscribe(resp=>{
   this.buttonText = `launching ${resp} ..`;
   if(resp == 'portis'){
     //console.log('stating portis');
     this.dialog.open(CreatePortisComponent, {width: '600px' , height: 'auto'})

     
   }else{
     console.log('metamask client');
  this.web3.getCoinBase().subscribe(resp=>{this.coinBase = resp;
  console.log('do we hve a coinbase ', this.coinBase)})
    
   }
 })
  
   }

}

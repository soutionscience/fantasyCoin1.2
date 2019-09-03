import { Component, OnInit } from '@angular/core';
import { MyWeb3Service } from '../../util/my-web3.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  loading: Boolean
  buttonText: String;
  coinBase: String;

  constructor(private web3: MyWeb3Service) { }

  ngOnInit() {
    this.buttonText = "Get Started"
  }
  login(){
    this.buttonText ="starting.."
    this.loading = true;
    this.getCoinBase()



  }
  getCoinBase(){
this.web3.checkAndInitWeb3().subscribe()
  
   }

}

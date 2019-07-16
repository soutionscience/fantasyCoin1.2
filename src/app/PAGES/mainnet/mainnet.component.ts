import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../../util/web3.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainnet',
  templateUrl: './mainnet.component.html',
  styleUrls: ['./mainnet.component.scss']
})
export class MainnetComponent implements OnInit {

  constructor(private web3: Web3Service, private router: Router) { }

  ngOnInit() {
    this.changePage()
   
  }
  changePage(){
    if(this.web3.getNetWorkType() == 'main'){
      this.router.navigate(['/my-team'])
    }
  }

}

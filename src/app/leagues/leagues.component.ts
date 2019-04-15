import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Web3Service } from '../util/web3.service';
import { Factory } from '../shared/address';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {
 coinBase: string;
 leagueAddress: string;
 gas: string = '1000000'
 showLoading: boolean;
 competitions: string  []

  constructor(private web3Service: Web3Service, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    // this.showLoading = true
    this.competitions =[];
    this.initAllCompetitons();
  
  }
  getAllLeagues(account){ //gets leagues and calls its competitons
    this.web3Service.getAllLeagues(account, Factory, this.gas)
    .subscribe(resp=> {this.leagueAddress= resp[0]
                       this.getCompetions(this.leagueAddress)
                      })// leagues address
  }

  initAllCompetitons(){
    this.showLoading = true;
    this.web3Service.getCoinBase() // returns coinbase  and uses it to  get all leagues
    .subscribe(resp=>{
      this.coinBase = resp
      this.getAllLeagues(resp)
    })

  }
  getCompetions(leagueAddress){ //get all competions in this week's league

   this.web3Service.getAllCompetions(this.coinBase, leagueAddress, this.gas)
   .subscribe(resp=>{
     this.competitions.push(resp);
     this.showLoading = false;
    this.ref.detectChanges()
   })

  }

  getCompetitionCount(){
    this.web3Service.getCompeCount(this.web3Service, this.web3Service).
    subscribe(resp=>{
      console.log('number of competitions ', resp)
    })
  }
  

}

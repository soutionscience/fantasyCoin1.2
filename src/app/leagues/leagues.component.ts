import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Web3Service } from '../util/web3.service';
import { Factory } from '../shared/address';
import { ApiServiceService } from '../util/api-service.service';
import { AuthService } from '../util/auth.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {
 coinBase: String;
 leagueAddress: String;
 gas: String = '1000000'
 competitions: String  [];
 noCompetitions: String;
 showLoading: Boolean;
 dissabled: Boolean
 

  constructor(private web3Service: Web3Service, 
    private ref: ChangeDetectorRef, private api: ApiServiceService,
    private auth: AuthService) { }

  ngOnInit() {
    this.showLoading =false
    this.dissabled = false
    this.competitions =[];
    this.initAllCompetitons();
    this.coinBase = this.auth.getUserAdress()
    
  
  }
  initAllCompetitons(){
    this.showLoading = true;
   this.api.getResource('competitions')
   .subscribe(resp=>{
     if(resp.length == 0) this.noCompetitions = "Sorry there are no competitions running at the moment, please try again later"
     this.competitions = resp;
     this.showLoading = false;
   })
  }


joinCompe(index){
  this.showLoading = true;
  this.dissabled = true
  this.api.postUserTeam('competitions', index, 'teams', {"userId": this.auth.getUserId()})
  .subscribe(resp=>{
    console.log('entered competitions ', resp);
      this.web3Service.joinCompe(this.coinBase,this.gas, index)
    .subscribe(resp=> console.log('successfully joined league ',resp))

  
  })

}
}
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
 coinBase: string;
 leagueAddress: string;
 gas: string = '1000000'
 showLoading: boolean;
 competitions: string  [];
 noCompetitions: string;
 

  constructor(private web3Service: Web3Service, 
    private ref: ChangeDetectorRef, private api: ApiServiceService,
    private auth: AuthService) { }

  ngOnInit() {
    // this.showLoading = true
    this.competitions =[];
    this.initAllCompetitons();
    
  
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
  //   this.web3Service.joinCompe(this.coinBase,this.gas, index)
  //   .subscribe(resp=> console.log('successfully joined league ',resp))

  // }
  console.log('posting to league ', index)
  this.api.postUserTeam('competitions', index, 'teams', {"userId": this.auth.getUserId()})
  .subscribe(resp=>{
    console.log('entered competitions ', resp);
      this.web3Service.joinCompe(this.coinBase,this.gas, index)
    .subscribe(resp=> console.log('successfully joined league ',resp))

  
  })

}
}
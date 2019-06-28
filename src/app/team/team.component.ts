import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Generic } from '../shared/generic.model';
import { ApiServiceService } from '../util/api-service.service';
// import { Web3Service } from '../services/web3.service';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { RemovePlayerComponent } from '../dialogs/remove-player/remove-player.component';
import { Route } from '@angular/router';
import { DataService } from '../util/data.service';
import { MatSnackBar } from '@angular/material';
import { TokenService } from '../util/token.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  /// this component displays team and sends selected team to server
  allPlayers: String []
  specialPlayers: String[];
  SpecialKeepers: String [];
  SpecialMids: String[];
  SpecialDefs: String[];
  SpecialAttacks: String[];
  goalKeepers: String[];
  defenders: String [];
  mids: String[];
  attackers: String [];
  teams: String [];
  teamPlayers: String [];
  testPlayers: String [];
  selected: Boolean;
  showLoading: Boolean;

  constructor(private apiService: ApiServiceService,
  private ref: ChangeDetectorRef, private dialog:MatDialog,
  private data: DataService,
  private matSnackBar: MatSnackBar,
  private tokenService: TokenService) { }
  ngOnInit (){
    console.log('init')
    this.showLoading = true;
    this.getAllPlayers()
    this.getTeams();
    this.teamPlayers =[];
    this.testPlayers =[];
    this.selected = false;
    this.ref.detectChanges()

  }
  getAllPlayers(){ // and filter by position and rank
    this.apiService.getResource('players')
    .subscribe(resp=>{
      this.allPlayers = resp;
      this.showLoading = false;
    
      this.filterBYPosition(this.allPlayers)

    }, error=>{
      console.log('loading error')
    })
  }
  selectTeam(t){

    this.apiService.getTeams('players', t).subscribe(resp=>{
      this.allPlayers = resp;
      this.filterByTeam(this.allPlayers)
       this.ref.detectChanges();
    })


  }
  getTeams(){
    this.apiService.getResource('teams')
    .subscribe(resp=> this.teams =resp)
  }
  //filter by position sort and assing to special
  filterBYPosition(l){
    this.goalKeepers = this.filterList(l, 1);
  
    this.defenders = this.filterList(l, 2)
    this.mids = this.filterList(l, 3)
    this.attackers = this.filterList(l, 4)


    this.goalKeepers = this.pointsTotalSort(this.goalKeepers);
    this.defenders = this.pointsTotalSort(this.defenders)
    this.mids = this.pointsTotalSort(this.mids)
    this.attackers = this.pointsTotalSort(this.attackers)


    this.SpecialKeepers = this.goalKeepers.slice(0,3)
    this.SpecialDefs = this.defenders.slice(0,6)
    this.SpecialMids = this.mids.slice(0, 6)
    this.SpecialAttacks = this.attackers.slice(0, 6)

  }

  filterByTeam(l){
    this.goalKeepers = this.filterList(l, 1);
    this.defenders = this.filterList(l, 2)
    this.mids = this.filterList(l, 3)
    this.attackers = this.filterList(l, 4)


    this.SpecialKeepers = this.pointsTotalSort(this.goalKeepers);
    this.SpecialDefs  = this.pointsTotalSort(this.defenders)
    this.SpecialMids  = this.pointsTotalSort(this.mids)
    this.SpecialAttacks= this.pointsTotalSort(this.attackers)

  }
  //filter by position
  filterList(list, id){
   
  let myElement =[];
    list.forEach(element => {
     
    if(element.position == id){
      myElement.push(element);
    }
  });
 
  return myElement
  }

  //sort with pointsTotal
  pointsTotalSort(list){
 return list.sort((a,b)=>{return b.pointsTotal-a.pointsTotal})

  }
  selectPlayer(g){// select players to add to team
   if(this.data.getPlayers().length>= 11){
      console.log('team already full');
      this.setStatus('you have already selected 11 players')

   }else{
    if(this.data.checkIfAlreadyInTeam(g)){ //check if player is in team and start dialog to remove
      
      this.dialog.open(RemovePlayerComponent,{width: '350px', height: 'auto', data:{
        player: g
      }}).afterClosed().subscribe((p)=>{
       if(p == 'remove'){
         let index = this.teamPlayers.indexOf(g);

         //this.teamPlayers.splice(index, 1); //remove player
          
        this.data.removePlayers(g)
        this.tokenService.addTokenCount(g.now_cost);
        this.teamPlayers=this.data.getPlayers()
     
       
         this.ref.detectChanges();
       }

      })


    }else{
      console.log('now costs ', g)
       this.tokenService.reduceTokenCount(g.now_cost)
      this.data.addPlayers(g)
      this.teamPlayers=this.data.getPlayers()
     
      // this.teamPlayers.push(me)
   
    }

  }




  }
  checkIfPlayerisSelected(p){
    let team = this.data.getPlayers()
    //if(this.teamPlayers.indexOf(p)> -1){
      if(team.indexOf(p)>-1){
      return true;
    }else{
    return false;
    }
  }

  setStatus(status) {
    this.matSnackBar.open(status, null, {duration: 4000});
  }
}

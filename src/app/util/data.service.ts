import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  players: string ='players'
  userPlayers: any [] =[]
  userPlayerId: any []=[]
  userBalance: Number;
  userTeam: String [];

  constructor(private tokenService: TokenService, private api: ApiServiceService) { }
  addPlayers(player){
    this.userPlayers.push(player)
    this.userPlayerId.push(player._id)
    //localStorage.setItem(this.players, JSON.stringify(this.userPlayers));
  }
  getPlayers(){
  
    return this.userPlayers
  }
  getUserPlayerSize(){
    return this.userPlayers.length;
  }
  removePlayers(id){
    console.log('removing in service ', id);
    let index = this.userPlayers.indexOf(id);
    console.log('index are you removing ', index)
     this.userPlayers.splice(index, 1)
    // localStorage.setItem(this.players, JSON.stringify(this.userPlayers));
  }
  checkIfAlreadyInTeam(player){
    console.log('user players ', this.userPlayerId)
    console.log('check ', this.userPlayerId.indexOf(player._id))
    if(this.userPlayerId.indexOf(player._id)== -1 ){
      console.log('not in team add')
      return false;

    }else{
      console.log('in team, remove')
     return true;
    }
  }
  setUserBalance(balance){
  this.tokenService.getTokenBalance('takatak')
  .subscribe()

  }
  checkTeamsize(){
    if(this.userPlayers.length==11){
      return true
    }else{
      return false;
    }
  }
  reset(){
    this.userPlayers = [];
  }

  // transfers

  setUserTeam(team){
    this.userTeam =  team;
  }
  getUserTeam(){
    return this.userTeam
  }
  removePlayerFromTeam(id){
    console.log('removing in service ', id);
    let index = this.userTeam.indexOf(id);
    console.log('index are you removing ', index)
     this.userTeam.splice(index, 1)
  }
}

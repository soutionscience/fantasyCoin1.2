import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  players: string ='players'
  userPlayers: any [] =[]
  userPlayerId: any []=[]

  constructor() { }
  addPlayers(player){
    this.userPlayers.push(player)
    this.userPlayerId.push(player._id)
    //localStorage.setItem(this.players, JSON.stringify(this.userPlayers));
  }
  getPlayers(){
    return this.userPlayers
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
}

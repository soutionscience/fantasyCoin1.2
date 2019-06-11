import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  players: string ='players'
  userPlayers: any [] =[]

  constructor() { }
  addPlayers(id){
    this.userPlayers.push(id)
    localStorage.setItem(this.players, JSON.stringify(this.userPlayers));
  }
  getPlayers(){
    return localStorage.getItem(this.players)
  }
  removePlayers(id){
    
  }
}

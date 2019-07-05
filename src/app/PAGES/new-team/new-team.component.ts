import { Component, OnInit } from '@angular/core';
import { DataService } from '../../util/data.service';

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.scss'],

})
export class NewTeamComponent implements OnInit {
  teamPlayers: String [];
  user: String [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.teamPlayers =[];
  }
  addedNewPlayer(player){
    console.log('ati what child? ', player);
    console.log('team size' , this.data.getUserPlayerSize())
    this.teamPlayers = this.data.getPlayers()
    console.log('team players ', this.teamPlayers)

  }

}

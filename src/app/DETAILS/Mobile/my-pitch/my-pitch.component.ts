import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../util/api-service.service';


@Component({
  selector: 'app-my-pitch',
  templateUrl: './my-pitch.component.html',
  styleUrls: ['./my-pitch.component.scss']
})
export class MyPitchComponent implements OnInit {
  showLoading: Boolean;
  showPitch: Boolean;
  showSelect: Boolean;
  positionPlayers: String [];
  allPlayers: String[];
  allTeams: String [];

  constructor(private api: ApiServiceService) { }

  ngOnInit() {

    this.showLoading = true;
    this.getAllPlayers();
    // this.getAllTeams();

    this.showPitch = true;
    this.showSelect = false;
    
  }
  getAllPlayers(){
    this.api.getResource('players')
    .subscribe(resp=>{
      
      this.showLoading = false;
      this.allPlayers = resp;
      console.log('all players ', this.allPlayers)
      this.getAllTeams()
    })

  };
  getAllTeams(){
    this.api.getResource('teams')
    .subscribe(resp=>{ this.allTeams = resp;
     // this.selectKeeper(1)
    })
  }
  selectKeeper(l){
    console.log('keeper one');
    this.showPitch = false;
    this.showSelect = true;
    this.filterByPosition(l);
     console.log('test me ', this.positionPlayers)
  }

  filterByPosition(position){
    console.log('is this beign called? ', this.allPlayers)
    
    this.positionPlayers = this.filterList(this.allPlayers, position)

  }
  filterList(list, id){
   
    let myElement =[];
      list.forEach(element => {
       
      if(element.position == id){
        myElement.push(element);
      }
    });
   
    return myElement
    }
}

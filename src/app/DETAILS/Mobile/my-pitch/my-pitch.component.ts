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
  AllPlayers: String[]

  constructor(private api: ApiServiceService) { }

  ngOnInit() {
    this.showLoading = true;
    this.getAllPlayers();
    this.showPitch = true;
    this.showSelect = false
  }
  getAllPlayers(){
    this.api.getResource('players')
    .subscribe(resp=>{
      console.log('loaded')
      this.showLoading = false;
      this.AllPlayers = resp;
    })

  }
  selectKeeper(l){
    console.log('keeper one');
    this.showPitch = false;
    this.showSelect = true;
    this.filterByPosition(l);
    // console.log('test me ', this.positionPlayers)
  }

  filterByPosition(position){
    this.positionPlayers = this.filterList(this.AllPlayers, position)

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

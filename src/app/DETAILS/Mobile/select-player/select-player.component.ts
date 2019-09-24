import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-select-player',
  templateUrl: './select-player.component.html',
  styleUrls: ['./select-player.component.scss']
})
export class SelectPlayerComponent implements OnInit {
  @Input() players: any []
  @Input()teams: any []
  dropdownLable: String;
  showDropDown: Boolean

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit() {
    console.log('receiveing ', this.players);
    console.log('teams ', this.teams);
    this.dropdownLable = 'All'
    this.showDropDown = false;
  }
  selectTeam(code){
    console.log('selected ', code)
  }
  dropdownClick(){
    this.showDropDown =!this.showDropDown;
    this.ref.detectChanges()
  }


}

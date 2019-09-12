import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-player',
  templateUrl: './select-player.component.html',
  styleUrls: ['./select-player.component.scss']
})
export class SelectPlayerComponent implements OnInit {
  @Input() players: any []
  @Input()teams: any []

  constructor() { }

  ngOnInit() {
    console.log('receiveing ', this.players);
    console.log('teams ', this.teams)
  }
  selectTeam(code){
    console.log('selected ', code)
  }

}

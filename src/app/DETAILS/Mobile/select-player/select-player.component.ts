import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-player',
  templateUrl: './select-player.component.html',
  styleUrls: ['./select-player.component.scss']
})
export class SelectPlayerComponent implements OnInit {
  @Input() players: any []

  constructor() { }

  ngOnInit() {
    console.log('receiveing ', this.players)
  }

}

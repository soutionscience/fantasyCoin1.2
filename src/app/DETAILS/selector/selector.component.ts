import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-team',
  templateUrl: './user-team.component.html',
  styleUrls: ['./user-team.component.scss']
})
export class UserTeamComponent implements OnInit {
  @Input() userTeam: string [];

  constructor() { }

  ngOnInit() {
    console.log('received ', this.userTeam)
  }

}

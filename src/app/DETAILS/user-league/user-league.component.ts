import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../util/auth.service';

@Component({
  selector: 'app-user-league',
  templateUrl: './user-league.component.html',
  styleUrls: ['./user-league.component.scss']
})
export class UserLeagueComponent implements OnInit {
  @Input() league: String [];

  constructor(private auth: AuthService) { }

  ngOnInit() {
    console.log('leagues ', this.league)
    console.log('authSerive ', this.auth.getUserId())
  }

}

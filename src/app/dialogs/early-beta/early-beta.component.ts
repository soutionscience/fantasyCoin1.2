import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../util/auth.service';

@Component({
  selector: 'app-early-beta',
  templateUrl: './early-beta.component.html',
  styleUrls: ['./early-beta.component.scss']
})
export class EarlyBetaComponent implements OnInit {
  userName: String;
  userEmail: String;

  constructor( private auth: AuthService) { }

  ngOnInit() {
    this.userName = this.auth.getUserName();
    this.userEmail = this.auth.getUserEmail()
  }

}

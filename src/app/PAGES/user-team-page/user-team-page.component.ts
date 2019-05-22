import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../util/auth.service';
import { Web3Service } from '../../util/web3.service';
import { ApiServiceService } from '../../util/api-service.service';

@Component({
  selector: 'app-user-team-page',
  templateUrl: './user-team-page.component.html',
  styleUrls: ['./user-team-page.component.scss']
})
export class UserTeamPageComponent implements OnInit {
  userName: String;
  user: any []

  constructor(private auth: AuthService, private web3: Web3Service,
    private api: ApiServiceService) { }

  ngOnInit() {
    this.setUserName()
    this.getUser()
  }
  setUserName(){
    this.userName = this.auth.getUserName();
    // console.log('get username ', this.userName)
  }
  getUser(){
 this.user = JSON.parse(this.auth.getUserObj())
    


  }


}

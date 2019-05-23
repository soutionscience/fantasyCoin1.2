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
  user: any [];
  userTeam: string []

  constructor(private auth: AuthService, private web3: Web3Service,
    private api: ApiServiceService) { }

  ngOnInit() {
    this.setUserName()
    this.getUser();

  }
  setUserName(){
    this.userName = this.auth.getUserName();
    //  console.log('get username ', this.userName)
  }
  getUser(){
let address = this.auth.getUserAdress();
console.log('users ', address)
 this.api.getSpecificResource('users',address)
 .subscribe(resp=>{
   this.user = resp
   this.setUserTeam(this.user)
 })


  }
  setUserTeam(user){
this.userTeam =user.players;
// console.log('user team ', this.userTeam)
  }


}

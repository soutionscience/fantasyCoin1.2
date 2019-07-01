import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../util/api-service.service';
import { DataService } from '../../util/data.service';
import { AuthService } from '../../util/auth.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  userId: String;
  userTeam: String[]

  constructor(private api: ApiServiceService, private data: DataService, 
    private auth: AuthService) { }

  ngOnInit() {
    this.userId = this.auth.getUserAdress()
    this.getUserTeam(this.userId)
  }
  getUserTeam(id){
    this.api.getUserTeam('users', id, 'players')
    .subscribe(resp=>{this.data.setUserTeam(resp)})
  }

}

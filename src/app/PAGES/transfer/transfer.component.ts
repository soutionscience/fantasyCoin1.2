import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiServiceService } from '../../util/api-service.service';
import { DataService } from '../../util/data.service';
import { AuthService } from '../../util/auth.service';
import { MatDialog } from '@angular/material';
import { RemovePlayerComponent } from '../../dialogs/remove-player/remove-player.component';
import { TokenService } from '../../util/token.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  userId: String;
  userTeam: String[];
  user: any;

  constructor(private api: ApiServiceService, private data: DataService, 
    private auth: AuthService,
    private dialog: MatDialog,
    private ref: ChangeDetectorRef,
    private tokenService: TokenService) { }

  ngOnInit() {
    this.userId = this.auth.getUserAdress()
    this.getUserTeam(this.userId)
    
  }
  getUserTeam(id){
    console.log('user id ', id)
    this.api.getUserTeam('users', id, 'players')
    .subscribe(resp=>{this.data.setUserTeam(resp);
    this.getUserTeamData();
   this.api.getSpecificResource('users', id)
  .subscribe(resp=>{
    this.user = resp;
  })})
  }
  getUserTeamData(){
    this.userTeam = this.data.getUserTeam()
  }
  removePlayer(g){
    this.dialog.open(RemovePlayerComponent,{width: '350px', height: 'auto', data:{
      player: g
    }}).afterClosed().subscribe(p=>{
      if(p== 'remove'){
        console.log('remove')
        this.data.removePlayerFromTeam(g);
        this.getUserTeamData();
        this.ref.detectChanges()
      }
    })
  }

}

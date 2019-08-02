import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiServiceService } from '../../util/api-service.service';
import { DataService } from '../../util/data.service';
import { AuthService } from '../../util/auth.service';
import { MatDialog } from '@angular/material';
import { RemovePlayerComponent } from '../../dialogs/remove-player/remove-player.component';
import { TokenService } from '../../util/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  userId: String;
  userTeam: String[];
  user: any;
  showLoading: Boolean

  constructor(private api: ApiServiceService, public data: DataService, 
    private auth: AuthService,
    private dialog: MatDialog,
    private ref: ChangeDetectorRef,
    public tokenService: TokenService,
    private router: Router) { }

  ngOnInit() {
    this.userId = this.auth.getUserAdress()
    this.getUserTeam(this.userId);
    this.showLoading = false;
    
  }
  getUserTeam(id){
    this.api.getUserTeam('users', id, 'players')
    .subscribe(resp=>{
      this.data.setUserTeam(resp);
      this.userTeam = this.data.getPlayers()
      this.api.getSpecificResource('users', id)
      .subscribe(resp=>this.user = resp)
    })
  }

  removePlayer(g){
    this.dialog.open(RemovePlayerComponent, {width:'350px',height: 'auto', data:{
      player: g
    }}).afterClosed().subscribe((p)=>{
      if(p == 'remove'){
        let index = this.userTeam.indexOf(g);
        this.data.removePlayers(g)
        this.tokenService.addTokenCount(parseInt (g.now_cost));
        this.userTeam=this.data.getPlayers()
        this.ref.detectChanges();

      
      }
    })
  }

  submit(){
    this.showLoading = true;
    let userId = this.auth.getUserId();
    console.log('user id ', userId);
    let tokenCount = this.tokenService.getTokenCount()
    this.api.postUserTeam('users', userId, 'coins', {amount: tokenCount} ).subscribe(resp=>
      {
        this.api.postUserTeam('users', userId, 'players', this.userTeam).subscribe(resp=>{
          this.showLoading = false;
          this.router.navigate(['/leagues'])
     
     
        })
      })
 
  }
  reset(){
    this.data.reset();
    this.userTeam=this.data.getPlayers()


  }
 
 

}

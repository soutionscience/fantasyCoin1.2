import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ApiServiceService } from '../util/api-service.service';
import { AuthService } from '../util/auth.service';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialog } from '@angular/material';
import { RemovePlayerComponent } from '../dialogs/remove-player/remove-player.component';
//import { faCoffee } from '@fortawesome/free-solid-svg-core';

@Component({
  selector: 'app-pitch',
  templateUrl: './pitch.component.html',
  styleUrls: ['./pitch.component.scss']
})
export class PitchComponent implements OnInit {
  @Input() teamPlayers: any [];
  showLoading: Boolean
  incomplete: Boolean

  constructor(private apiService: ApiServiceService, private auth: AuthService,
    private router: Router,
    private dialog: MatDialog,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.showLoading = false;
    this.incomplete = true
  }
  completeTeam(){
    console.log(this.teamPlayers)

  }
  complete(){
    if(this.teamPlayers.length<=11){
      this.incomplete = true
      return true
    }else{
      this.incomplete = false
      return false
    }
  }
  submit(){
    this.showLoading = true;
    let userId = this.auth.getUserId();
    console.log('user id ', userId)
   this.apiService.postUserTeam('users', userId, 'players', this.teamPlayers).subscribe(resp=>{
     this.showLoading = false;
     this.router.navigate(['/leagues'])


   })



  }
  removePlayer(g){
    console.log('clicking')
    this.dialog.open(RemovePlayerComponent,{width: '350px', height: 'auto', data:{
      player: g
    }}).afterClosed().subscribe(p=>{
      if(p == 'remove'){
        let index = this.teamPlayers.indexOf(g)
        this.teamPlayers.splice(g, 1); //remove player
        console.log(this.teamPlayers.length)
        this.ref.detectChanges();
      }
    })
    
  }

}

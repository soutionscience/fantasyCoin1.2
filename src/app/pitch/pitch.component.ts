import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ApiServiceService } from '../util/api-service.service';
import { AuthService } from '../util/auth.service';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialog } from '@angular/material';
import { RemovePlayerComponent } from '../dialogs/remove-player/remove-player.component';
import { DataService } from '../util/data.service';
import { TokenService } from '../util/token.service';
//import { faCoffee } from '@fortawesome/free-solid-svg-core';

@Component({
  selector: 'app-pitch',
  templateUrl: './pitch.component.html',
  styleUrls: ['./pitch.component.scss']
})
export class PitchComponent implements OnInit {
  @Input() teamPlayers: any [];
  @Input()user: any [];
  showLoading: Boolean
  incomplete: Boolean
  buttonText: String
  playerCount: Number;
  tokenCount: Number

  constructor(private apiService: ApiServiceService, private auth: AuthService,
    private router: Router,
    private dialog: MatDialog,
    private playerData: DataService,
    private tokenService: TokenService,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.showLoading = false;
    this.incomplete = true
    //console.log('team players ', this.teamPlayers);
    this.buttonText ='';
    this.playerCount = this.teamPlayers.length;
    this.getTokenCount()
    console.log('token count ', this.tokenCount)
   
  }
  getTokenCount(){
    let userAddress = this.auth.getUserAdress()
     this.tokenService.getTokenBalance(userAddress)
     .subscribe(resp=>this.tokenCount = resp);
     this.ref.detectChanges();
    
  }
  completeTeam(){
    this.playerCount = this.teamPlayers.length
    //this.ref.detectChanges()
    return true;

  }
  complete(){
    if(this.playerData.getPlayers().length<=11){
      this.buttonText ='incomplete'
      return true
    }else{
      this.buttonText = 'submit'
      this.incomplete = false;
      this.ref.detectChanges()
      return false
    }

    
  }

  removePlayer(g){
    console.log('clicking')
    this.dialog.open(RemovePlayerComponent,{width: '350px', height: 'auto', data:{
      player: g
    }}).afterClosed().subscribe(p=>{
      if(p == 'remove'){
        let index = this.teamPlayers.indexOf(g)
        //this.teamPlayers.splice(g, 1); //remove player
        this.tokenService.addTokenCount(g.now_cost)
        this.playerData.removePlayers(g);
        this.teamPlayers = this.playerData.getPlayers()
        console.log(this.teamPlayers.length)
        this.ref.detectChanges();
      }
    })
    
  }
  reset(){
    this.playerData.reset()
  }
  submit(){
    this.showLoading = true;
    let userId = this.auth.getUserId();
    console.log('user id ', userId);
    let tokenCount = this.tokenService.getTokenCount()
    this.apiService.postUserTeam('users', userId, 'coins', {amount: tokenCount} ).subscribe(resp=>
      {
        this.apiService.postUserTeam('users', userId, 'players', this.teamPlayers).subscribe(resp=>{
          this.showLoading = false;
          this.router.navigate(['/leagues'])
     
     
        })
      })
 



  }

}

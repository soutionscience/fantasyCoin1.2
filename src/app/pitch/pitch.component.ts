import { Component, OnInit, Input } from '@angular/core';
import { ApiServiceService } from '../util/api-service.service';
import { AuthService } from '../util/auth.service';
import { Router } from '@angular/router';
import { injectComponentFactoryResolver } from '@angular/core/src/render3';

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
    private router: Router) { }

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
    let userId = this.auth.getUserId()
   this.apiService.postUserTeam('users', userId, 'players', this.teamPlayers).subscribe(resp=>{
     this.showLoading = false;
     this.router.navigate(['/leagues'])


   })



  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTeamComponent } from '../PAGES/MOBILE/new-team/new-team.component';
import { Routes, RouterModule } from '@angular/router';
import { MyPitchComponent } from '../DETAILS/Mobile/my-pitch/my-pitch.component';
import { SelectPlayerComponent } from '../DETAILS/Mobile/select-player/select-player.component';


const routes: Routes =[
  {path: '', component: NewTeamComponent}
]

@NgModule({
  declarations: [NewTeamComponent, MyPitchComponent, SelectPlayerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MobileNewTeamModule { }

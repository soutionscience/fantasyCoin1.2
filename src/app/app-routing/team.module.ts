import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from '../team/team.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { PitchComponent } from '../pitch/pitch.component';

const routes: Routes =[
  {path: '', component: TeamComponent}
]


@NgModule({
  declarations: [TeamComponent, PitchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TeamModule { }

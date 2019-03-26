import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from '../team/team.component';
import { Routes, RouterModule, Router } from '@angular/router';

const routes: Routes =[
  {path: '', component: TeamComponent}
]


@NgModule({
  declarations: [TeamComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TeamModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { LeagueComponent } from '../league/league.component';

const routes: Routes =[
  {path:' ', component: LeagueComponent}
]

@NgModule({
  declarations: [LeagueComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LeaguesModule { }

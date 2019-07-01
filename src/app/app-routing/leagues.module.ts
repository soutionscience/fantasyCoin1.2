import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaguesComponent } from '../leagues/leagues.component';
import { Routes, RouterModule } from '@angular/router';
import { UserLeagueComponent } from '../DETAILS/user-league/user-league.component';

const routes: Routes =[
  {path:'', component: LeaguesComponent}
]

@NgModule({
  declarations: [LeaguesComponent, UserLeagueComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LeaguesModule { }

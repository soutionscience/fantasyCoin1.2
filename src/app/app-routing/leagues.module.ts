import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaguesComponent } from '../leagues/leagues.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =[
  {path:'', component: LeaguesComponent}
]

@NgModule({
  declarations: [LeaguesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LeaguesModule { }

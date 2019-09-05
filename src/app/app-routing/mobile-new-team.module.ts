import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTeamComponent } from '../PAGES/MOBILE/new-team/new-team.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes =[
  {path: '', component: NewTeamComponent}
]

@NgModule({
  declarations: [NewTeamComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MobileNewTeamModule { }

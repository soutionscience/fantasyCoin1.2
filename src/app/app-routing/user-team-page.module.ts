import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserTeamPageComponent } from '../PAGES/user-team-page/user-team-page.component';
import { UserInfoComponent } from '../DETAILS/user-info/user-info.component';
import { UserTeamComponent } from '../DETAILS/user-team/user-team.component';

const routes: Routes =[
  {path:'', component: UserTeamPageComponent}
]

@NgModule({
  declarations: [UserTeamPageComponent, UserInfoComponent, UserTeamComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserTeamPageModule { }

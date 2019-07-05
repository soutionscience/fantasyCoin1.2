import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTeamComponent } from '../PAGES/new-team/new-team.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeModule } from './welcome.module';
import { TeamComponent } from '../team/team.component';
import { SharedModule } from './shared.module';



const routes: Routes =[
  {path: '', component: NewTeamComponent}
]
@NgModule({
  declarations: [NewTeamComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  
    
  ]
})
export class NewTeamModule { }

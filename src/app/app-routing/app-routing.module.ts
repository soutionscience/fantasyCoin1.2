import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router'
import { AppComponent } from '../app.component';
import { PitchComponent } from '../pitch/pitch.component';
import { TeamComponent } from '../team/team.component';
import { FooterComponent } from '../footer/footer.component';
import { LogosComponent } from '../logos/logos.component';

const routes : Routes=[
  {path: 'start', loadChildren: './start.module#StartModule'},
  {path: '', loadChildren: './welcome.module#WelcomeModule'}

]

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports:[
    RouterModule, AppComponent
  ]

})
export class AppRoutingModule { }

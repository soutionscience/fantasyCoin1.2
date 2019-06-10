import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router'
import { AppComponent } from '../app.component';
import { PitchComponent } from '../pitch/pitch.component';

const routes : Routes=[
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

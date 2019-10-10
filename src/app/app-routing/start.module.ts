import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from '../PAGES/start/start.component';
import { NewClientsComponent } from '../dialogs/new-clients/new-clients.component';

const routes: Routes =[
  {path: '', component: StartComponent}
]

@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  entryComponents:[]
})
export class StartModule { }

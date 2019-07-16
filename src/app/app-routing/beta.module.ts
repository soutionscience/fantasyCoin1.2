import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BetaComponent } from '../PAGES/beta/beta.component';

const routes: Routes =[
  {path: '', component: BetaComponent}
] 

@NgModule({
  declarations: [BetaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BetaModule { }

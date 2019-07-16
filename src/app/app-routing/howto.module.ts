import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowtoComponent } from '../PAGES/howto/howto.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =[
  {path: '', component: HowtoComponent}
]

@NgModule({
  declarations: [HowtoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HowtoModule { }

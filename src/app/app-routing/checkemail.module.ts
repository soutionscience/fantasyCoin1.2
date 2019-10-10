import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckemailComponent } from '../PAGES/checkemail/checkemail.component';
import { Routes, RouterModule } from '@angular/router';

const router: Routes =[
  {path: '', component: CheckemailComponent}
]

@NgModule({
  declarations: [CheckemailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class CheckemailModule { }

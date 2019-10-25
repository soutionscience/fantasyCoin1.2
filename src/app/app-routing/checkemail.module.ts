import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckemailComponent } from '../PAGES/checkemail/checkemail.component';
import { Routes, RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material';

const router: Routes =[
  {path: '', component: CheckemailComponent}
]

@NgModule({
  declarations: [CheckemailComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule.forChild(router)
  ]
})
export class CheckemailModule { }

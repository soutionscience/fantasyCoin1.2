import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CompeComponent } from '../compe/compe.component';

const routes: Routes =[
  {path: '', component: CompeComponent}
]

@NgModule({
  declarations: [CompeComponent],
 
  imports: [
   CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CompeModule { }

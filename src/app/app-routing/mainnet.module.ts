import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainnetComponent } from '../PAGES/mainnet/mainnet.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =[
  {path: '',  component: MainnetComponent}
]

@NgModule({
  declarations: [MainnetComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainnetModule { }

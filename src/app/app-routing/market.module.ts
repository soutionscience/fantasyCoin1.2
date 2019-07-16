import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketComponent } from '../PAGES/market/market.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =[
  {path: '', component: MarketComponent}
]

@NgModule({
  declarations: [MarketComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MarketModule { }

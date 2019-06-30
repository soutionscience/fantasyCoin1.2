import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingComponent } from '../PAGES/ranking/ranking.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =[
  {path: '', component: RankingComponent}
]

@NgModule({
  declarations: [RankingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RankingModule { }

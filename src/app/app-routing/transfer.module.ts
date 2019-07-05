import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferComponent } from '../PAGES/transfer/transfer.component';
import { Routes, RouterModule } from '@angular/router';
import { SelectorComponent } from '../DETAILS/selector/selector.component';
import { SharedModule } from './shared.module';


const routes: Routes=[
  {path: '', component:  TransferComponent}
]
@NgModule({
  declarations: [TransferComponent, SelectorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class TransferModule { }

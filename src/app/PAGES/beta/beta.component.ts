import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
//import { BetaComponent } from '../../dialogs/beta/beta.component';
import { EarlyBetaComponent } from '../../dialogs/early-beta/early-beta.component';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.scss']
})
export class BetaComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.dialog.open(EarlyBetaComponent)
  }

}

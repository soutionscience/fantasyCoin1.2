import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NewClientsComponent } from '../../dialogs/new-clients/new-clients.component';

@Component({
  selector: 'app-checkemail',
  templateUrl: './checkemail.component.html',
  styleUrls: ['./checkemail.component.scss']
})
export class CheckemailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.dialogRefNewClients.close()
  }

}

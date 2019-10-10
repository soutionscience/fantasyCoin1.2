import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NewClientsComponent } from 'src/app/dialogs/new-clients/new-clients.component';

@Component({
  selector: 'app-checkemail',
  templateUrl: './checkemail.component.html',
  styleUrls: ['./checkemail.component.scss']
})
export class CheckemailComponent implements OnInit {

  constructor(private dialogRefNewClients: MatDialogRef<NewClientsComponent> ) { }

  ngOnInit() {
    this.dialogRefNewClients.close()
  }

}

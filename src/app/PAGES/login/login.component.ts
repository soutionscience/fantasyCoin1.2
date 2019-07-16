import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SignInComponent } from '../../dialogs/sign-in/sign-in.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.dialog.open(SignInComponent)
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../util/auth.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.scss']
})
export class BetaComponent implements OnInit {
  userName: String;
  userEmail: String;

  constructor(private dialogRef: MatDialogRef<BetaComponent>,
    private auth: AuthService) { }

  ngOnInit() {
    this.userName = this.auth.getUserName();
    this.userEmail = this.auth.getUserEmail()
  }
  

}

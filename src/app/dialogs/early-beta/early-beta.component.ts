import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../util/auth.service';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-early-beta',
  templateUrl: './early-beta.component.html',
  styleUrls: ['./early-beta.component.scss']
})
export class EarlyBetaComponent implements OnInit {
  userName: String;
  userEmail: String;

  constructor( private auth: AuthService, private dialogRef: MatDialogRef<EarlyBetaComponent>,
    private router: Router) { }

  ngOnInit() {
    this.userName = this.auth.getUserName();
    this.userEmail = this.auth.getUserEmail()
  }
  close(){
    this.router.navigate(['/']);
    this.dialogRef.close()

  }
  howToplay(){
    this.router.navigate(['/howtoplay']);
    this.dialogRef.close()
  }

}

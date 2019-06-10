import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AuthService } from '../../util/auth.service';

@Component({
  selector: 'app-warning-beta',
  templateUrl: './warning-beta.component.html',
  styleUrls: ['./warning-beta.component.scss']
})
export class WarningBetaComponent implements OnInit {

  constructor(
     private dialogRef: MatDialogRef<WarningBetaComponent>,
    private ref: ChangeDetectorRef,
    private auth: AuthService) { }

  ngOnInit() {
    this.ref.detectChanges();
  }
  close(){
    this.auth.setNewUser()
    this.dialogRef.close();
  }

}

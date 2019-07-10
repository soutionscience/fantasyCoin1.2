import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-unlock-metamask',
  templateUrl: './unlock-metamask.component.html',
  styleUrls: ['./unlock-metamask.component.scss']
})
export class UnlockMetamaskComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<UnlockMetamaskComponent>) { }

  ngOnInit() {
    console.log('component whats up?')
  }
  close(kivici){
    
    this.dialogRef.close()
    console.log('closing ', kivici)

  }

}

import { Component, OnInit, Inject, Output, EventEmitter} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../../util/data.service';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-remove-player',
  templateUrl: './remove-player.component.html',
  styleUrls: ['./remove-player.component.scss']
})

// called by team component and more
export class RemovePlayerComponent implements OnInit {
  player: String [];
  @Output() removeEvent= new EventEmitter()

  constructor(private dialogRef: MatDialogRef<RemovePlayerComponent>,
    @Inject(MAT_DIALOG_DATA)public data: any,
    private teamData: DataService) { }

  ngOnInit() {
    console.log('what is this> ', this.data.player)
    this.player = this.data.player
  }
  removePlayer(p){
    // console.log('are we removing' , p)
    // this.teamData.removePlayers(p)
    this.removeEvent.emit(p)
    this.close('remove')
  }

  close(p){
    this.dialogRef.close(p);
  }

}

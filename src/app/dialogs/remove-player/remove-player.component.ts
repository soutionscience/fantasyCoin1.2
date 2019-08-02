import { Component, OnInit, Inject, Output, EventEmitter, ChangeDetectorRef} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../../util/data.service';
import { TokenService } from '../../util/token.service';
import { Player } from '../../shared/player.model';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-remove-player',
  templateUrl: './remove-player.component.html',
  styleUrls: ['./remove-player.component.scss']
})

// called by team component and more
export class RemovePlayerComponent implements OnInit {
 public player: any; //== changed hia to make is any instead of String[]
  @Output() removeEvent= new EventEmitter()

  constructor(private dialogRef: MatDialogRef<RemovePlayerComponent>,
    @Inject(MAT_DIALOG_DATA)public data: any,
    private teamData: DataService,
    private tokenService: TokenService,
    private ref: ChangeDetectorRef) { }

  ngOnInit() {
    //console.log('what is this> ', this.data.player)
    this.player = this.data.player
  }
  removePlayer(p){
    // console.log('are we removing' , p)
    // this.teamData.removePlayers(p)
    this.removeEvent.emit(p)
    this.close('remove');
    this.ref.detectChanges();
  }

  close(p){
    this.dialogRef.close(p);
  }

}

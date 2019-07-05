import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from '../team/team.component';
import { PitchComponent } from '../pitch/pitch.component';

@NgModule({
  declarations: [TeamComponent, PitchComponent],
  imports: [
    CommonModule
  ],
  exports: [TeamComponent, PitchComponent]
})
export class SharedModule { }

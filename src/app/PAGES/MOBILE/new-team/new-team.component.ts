import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../../util/api-service.service';

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.scss']
})
export class NewTeamComponent implements OnInit {


  constructor(private api: ApiServiceService) { }

  ngOnInit() {
  
  }



}

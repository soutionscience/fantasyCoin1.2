import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compe',
  templateUrl: './compe.component.html',
  styleUrls: ['./compe.component.scss']
})
export class CompeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('init compe')
  }

}

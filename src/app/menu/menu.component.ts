import { Component, OnInit } from '@angular/core';
import { AuthService } from '../util/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logOut(){
    this.authService.logOut()
  }

}

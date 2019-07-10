import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './util/auth.service';
import { MatDialog } from '@angular/material';
import {BetaComponent} from '../app/dialogs/beta/beta.component'

@Injectable({
  providedIn: 'root'
})
export class ActiveGuard implements CanActivate {
  constructor(private auth: AuthService, private dialog: MatDialog){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.auth.isActive()){
      return true

    }else{
      this.dialog.open(BetaComponent)
      return false;
    }
  }
  
}

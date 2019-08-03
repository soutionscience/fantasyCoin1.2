import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../util/auth.service';
import { MatDialog } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class ActiveGuard implements CanActivate {
  constructor(private auth: AuthService, private dialog: MatDialog, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.auth.isActive()){
     // console.log('is user active ? ', this.auth.isActive())
      return true

    }else{
      //this.dialog.open(BetaComponent);
     this.router.navigate(['/beta']);
      return false;
    }
  }
  
}

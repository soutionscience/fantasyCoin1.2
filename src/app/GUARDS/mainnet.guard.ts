import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Web3Service } from '../util/web3.service';

@Injectable({
  providedIn: 'root'
})
export class MainnetGuard implements CanActivate {
  constructor(private web3: Web3Service, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.web3.getNetWorkType() != "main"){
     console.log('this is not main net work ', this.web3.getNetWorkType());
      this.router.navigate(['/network'])
    return false;
    }else{
    //  console.log('main network')
    return true;
    }
  }
  
}

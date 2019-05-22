import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  storageKey: string = 'fantasy-coin-jwt'
  userName: string= 'userName'
  userId: string="userid"
  user: string= 'user'

  constructor(private router: Router) { }

  setToken(token: string, userName: string, userId: string, user: any){

    localStorage.setItem(this.storageKey, token)
    localStorage.setItem(this.userName, userName)
    localStorage.setItem(this.userId, userId)
    localStorage.setItem(this.user, JSON.stringify(user))
  }
  getToken(){
   return localStorage.getItem(this.storageKey)
  }
  getUserId(){
    return localStorage.getItem(this.userId)
  }
  isLoggedIn(){
return this.getToken() !== null;

  }
  getUserName(){
    return localStorage.getItem(this.userName)
  }
  getUserObj(){
    return localStorage.getItem(this.user)
  }
  logOut(){
    localStorage.removeItem (this.storageKey);
    this.router.navigate(['/'])


  }
}

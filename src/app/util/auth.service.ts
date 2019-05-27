import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  storageKey: string = 'fantasy-coin-jwt'
  userName: string= 'userName'
  userId: string="userid"
  user: string= 'user';
  userAdress: string ='address'

  constructor(private router: Router) { }

  setToken(token: string, userName: string, userId: string, user: any, address: string){

    localStorage.setItem(this.storageKey, token)
    localStorage.setItem(this.userName, userName)
    localStorage.setItem(this.userId, userId)
    localStorage.setItem(this.userAdress, address)
    // localStorage.setItem(this.user, JSON.stringify(user))
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
  getUserAdress(){
    return localStorage.getItem(this.userAdress)
  }
  logOut(){
    localStorage.removeItem (this.storageKey);
    localStorage.removeItem(this.userName)
    localStorage.removeItem(this.userId)
    localStorage.removeItem(this.userAdress)
    this.router.navigate(['/'])


  }
}

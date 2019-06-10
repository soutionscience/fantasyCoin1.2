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
  mydate: string = 'mydate'
  newUser: string = 'newUser'
  myDates: any [] =[]

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
  setNewUser(){
    localStorage.setItem(this.newUser, 'false')
  }
  getNewUser(){
  return  localStorage.getItem(this.newUser)
  }
  checkExpiration(){
  var myHour = new Date();
  myHour.setHours(myHour.getHours() + 1);
  this.myDates.push(myHour)
localStorage.setItem(this.mydate, JSON.stringify(this.myDates))

function confirmExporation(){
  var values = JSON.parse(localStorage.getItem('mydate'));
  console.log('values ', values[0]);
  if (values[0] < new Date()) {
    localStorage.removeItem("mydate");
    console.log('removed item')
    this.logout()
}
}

confirmExporation();

  }
}

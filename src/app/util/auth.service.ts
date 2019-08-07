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
  myDates: any [] =[];
  active: Boolean;
  userEmail: String

  constructor(private router: Router) { }

  setToken(token: string, userName: string, userId: string, user: any, address: string, active: Boolean, email: String){

    localStorage.setItem(this.storageKey, token)
    localStorage.setItem(this.userName, userName)
    localStorage.setItem(this.userId, userId)
    localStorage.setItem(this.userAdress, address)
    this.active = active;
    this.userEmail = email;
    this.checkExpiration();
    window.location.reload()
  }
  getToken(){
   return localStorage.getItem(this.storageKey)
  }
  getUserId(){
    return localStorage.getItem(this.userId)
  }
  setActiveStatus(status){
    console.log('are we calling set active status?')
    this.active = status;

  }
  getActiveStatus(){
    return this.active
  }
  getUserEmail(){
    return this.userEmail;
  }
  isActive(){
  if(this.active){
    console.log('user is active ', this.active)
    return true
  }else{
   console.log('user is not active')
    return false
  }
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
 public logOut(){
    localStorage.removeItem (this.storageKey);
    localStorage.removeItem(this.userName)
    localStorage.removeItem(this.userId)
    localStorage.removeItem(this.userAdress)
    this.router.navigate(['/']).then(function(){window.location.reload()})



  }
  setNewUser(){
    localStorage.setItem(this.newUser, 'false')
  }
  getNewUser(){
  return  localStorage.getItem(this.newUser)
  }

  checkExpiration(){
  console.log('checking exploration')
  var myHour = new Date();
  myHour.setHours(myHour.getHours() + 1);
  this.myDates.push(myHour)
  console.log('time' , this.myDates)
localStorage.setItem(this.mydate, JSON.stringify(this.myDates))
}


  confirmExporation(){
    console.log('checking to see if expired')
    var values = JSON.parse(localStorage.getItem('mydate'));
    var oldate  = new Date(values[0])
    console.log('values ', oldate);
    if (oldate < new Date()) {
     localStorage.removeItem("mydate");
    this.logOut()
  }
  }
}

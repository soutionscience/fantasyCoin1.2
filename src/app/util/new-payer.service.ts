import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewPayerService {
  userId: string="newUserId"

  constructor() { }
  setNewUserId(id){
   
   localStorage.setItem(this.userId, id._id)

  }
  hasRegistered(){
    console.log('what is ', this.getNewUserId() !== null)
    return this.getNewUserId() !== null;

  }
  getNewUserId(){
    return localStorage.getItem(this.userId)
  }
}

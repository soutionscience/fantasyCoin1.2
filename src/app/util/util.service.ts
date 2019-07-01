import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  teams: any [] =[]

  constructor(private api: ApiServiceService) { }

  //find user is in league
  isUserInLeague(teams, userId){
  
     if(teams.map(item => item.address).indexOf(userId)>-1){
      //  console.log('user in league');
       return true;
     }else{
       return false;
     }


  }
}

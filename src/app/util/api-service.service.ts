import { Injectable } from '@angular/core';
import {Restangular} from 'ngx-restangular'
import { Observable } from 'rxjs';
import { League } from '../shared/address';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private restangular: Restangular) { }


  getResource(apiRoute):Observable<any[]>{
    return this.restangular.all(apiRoute).getList()

  }
  getTeams(apiRoute, teamCode): Observable<any[]>{
    return this.restangular.all(apiRoute).getList({team_code: teamCode})
  }
  postResource(apiRoute, team): Observable<any[]>{
   return this.restangular.all(apiRoute).post(team);
  }
  // postSpecific(apiRoute, resource, item): Observable<any[]>{
  //   return this.restangular.one(apiRoute, resource).post()
  // }
  postUserTeam(apiRoute, LeagueEtherId:string, item, message):Observable<any[]>{
     return this.restangular.one(apiRoute, LeagueEtherId).all(item).post(message)
  
  }
  
  getSpecificResource(apiRoute, id): Observable<any[]>{
    return this.restangular.one(apiRoute, id).get()
  }
  getTokenResource(apiRoute,id, sign, nonce):Observable<any>{
    console.log('received ', apiRoute , id,'/', sign)
    return this.restangular.one(apiRoute,id,).one(sign, nonce).get()
  }
}

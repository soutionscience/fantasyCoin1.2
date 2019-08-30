import { Injectable, NgZone } from '@angular/core';
import { Web3Service } from './web3.service';
import { ApiServiceService } from './api-service.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignerService {

  constructor(private web3: Web3Service, private apiService: ApiServiceService,
    private auth: AuthService, private router: Router, private zone: NgZone) { } 

    getmyToken(user, id):Observable<any[]>{
      return Observable.create(observer=>{
        
        this.web3.signTransaction(user)
        .subscribe(resp=> this.apiService.getTokenResource('auth', id, resp.sign, resp.nonce)
        .subscribe(resp=>{
        
          this.auth.setToken(resp.token, resp.userName, resp.userId, resp, resp.address, resp.active, resp.email, resp.provider);
          
    
                 // use zone to take care of issue with ngOninit not firring after navigate
           // this.zone.run(()=>this.router.navigateByUrl('/transfers'))// use 
           window.location.reload()
  
          observer.next(resp)
          observer.complete()
    
        }))
  
      })
    
     
  
    }

}

import { Component, OnInit } from '@angular/core';
import { Web3Service } from '../../util/web3.service';
import { AuthService } from '../../util/auth.service';
import { ApiServiceService } from '../../util/api-service.service';

@Component({
  selector: 'app-create-portis',
  templateUrl: './create-portis.component.html',
  styleUrls: ['./create-portis.component.scss']
})
export class CreatePortisComponent implements OnInit {
  emailValue: String;

  constructor(private web: Web3Service, private auth: AuthService, 
    private api: ApiServiceService) { }

  ngOnInit() {
  }


  loginWithPortis(){
    console.log('clicked bitch');
    this.web.initPortisAndGetAccount()
    .subscribe(resp=>{
     if(resp.email){
       this.emailValue = resp.email
      this.checkBrowser(resp.address)

     }else{
       this.emailValue = '';
       this.checkBrowser(resp)
     }

    })
  }

  checkIfRegisterd(id){
  this.api.getSpecificResource('users', id)
  .subscribe(resp=>{
    console.log('user is registered')
  }, error=>{
    console.log('user does not exit')
  })
    
    
  }
  checkBrowser(address){
    if(this.auth.getUserAdress()){
      console.log('user address in browser')
    }else{
      console.log('no user address in browser');
      this.checkIfRegisterd(address)
    }

  }

}

import {Injectable} from '@angular/core';
import contract from 'truffle-contract';
import {Subject, Observable, observable} from 'rxjs';
import { Factory, League } from '../shared/address';
import { ObserversModule } from '@angular/cdk/observers';
import { TokenService } from './token.service';
import { AuthService } from './auth.service';
import Portis from '@portis/web3';


declare let require: any;
const Web3 = require('web3');
// const web3= Web3();

const portis = new Portis('8b3ef407-9c59-4306-a90e-34f22c89f485', 'mainnet', { scope: ['email'], registerPageByDefault: true  });



declare let window: any;
let account : string;
let factoryJson = require('../../../build/contracts/LeagueFactory.json');
let leagueJson = require('../../../build/contracts/League.json')
let compeJson = require('../../../build/contracts/Competitions.json')

@Injectable()
export class Web3Service {
  private web3: any;
  private accounts: string[];
  private account: any;
  public ready = false;
  netWorkType: String
 

  public accountsObservable = new Subject<string[]>();

  constructor(private authService: AuthService) {
  
    this.checkAndInstatiateWeb3()
    this.getCoinBase().subscribe((resp)=>{
      this.account = resp
     // this.checkMetamask(this.account).subscribe()
     this.checkAccountChange(this.account)
     
    
    })
  
     

    // });
  }
  checkAndInstatiateWeb3 = () => {
    if(typeof window.ethereum !== 'undefined'){
     // console.log('modern browser');
      this.web3 = new Web3(window.ethereum);

      try{
        window.ethereum.enable()
        //window.location.reload()
        
      }catch(error){
       // console.log('user denied')
      }

    }
 else if (typeof window.web3 !== 'undefined') {


      console.warn(
       'using metamsk detected'
      );
      // Use Mist/MetaMask's provider
      this.web3 = new Web3(Web3.givenProvider);
      // account = this.getCoinBaseHere();
      // console.log('coinbase ', account)
     // this.getSingleAccount()
      return this.web3;
    } else {
  console.warn(
        'No web3 detected'
      );
      // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
      // needs to be changed to better fall back plan
      this.web3 = new Web3();

      return null;
    }

  }

  checkWe3NetWork(){
    this.web3.eth.net.getNetworkType((err, netId) => {
      if(err){
        throw err;
      }else{
        this.netWorkType = netId;
      }
    })
  }
  getNetWorkType(){
    return this.netWorkType
  }

  loggoutUser(){
   // console.log('are you logging out?')
    this.authService.logOut();

  }
  checkAccountChange(myaccount){ // check to see if account has changed/ network is ok
    //let account = this.web3.accounts[0]
    
if(myaccount){
    myaccount = myaccount.toLowerCase()
    this.web3.currentProvider.publicConfigStore.on('update', function(responce){
      let newAccount = responce.selectedAddress;
      console.log('responce has ',newAccount, ' and accounts ', myaccount)
      if(newAccount !== myaccount){
        setTimeout(function(){  window.location.reload(); }, 500);
        //this.tokenService.getTokenBalance(myaccount).subscribe()
        // this.authService.logOut()
        // this.loggoutUser()
      
     
        
      }
    });
  }
  }

  // log out user


  checkMetamask(account):Observable<any>{
    return Observable.create(observer=>{
      if(typeof window.web3 !== 'undefined'){ //web 3 installed
      
        //console.log('what is in accounts? ', account)

        if(account){ // if account then metamask is unlocked is unlocked return 2

          observer.next(2)
          observer.complete()

        }else{
          observer.next(1)// else not unlocked
          observer.complete()

        }


      }else{
        observer.next(3)
        observer.complete()
      }

    })

  }

  //portis 

  initPortisAndGetAccount(): Observable<any>{
    console.log('are we getting this')
    this.web3 = new Web3(portis.provider);
    return Observable.create(observer=>{
      portis.onLogin((walletAddress, email, reputation)=>{
        let obj = {
          account: walletAddress,
          email: email
        }
        observer.next(obj)
        observer.complete()
      })
      this.getCoinBase().subscribe(resp=>{
        this.account = resp
        observer.next(resp);
        observer.complete()
      })
    })

  }
  getCoinBase():Observable<any>{
    //console.log('calling get accounts')
    return Observable.create(observer=>{
      this.web3.eth.getAccounts((err, resp)=>{
        if(err) observer.next(err)
        //console.log('get coinBase resp ', resp)
        observer.next(resp[0])
        observer.complete()
      })
    })
  }

 getSingleAccount(web3){
web3.eth.getAccounts((err, resp)=>{
   //this.account = resp[0];
   return resp;
   
  })
 }
 getMyCoinBase(){
   let account = this.web3.eth.getAccounts()
   return account;
 }

 signTransaction(nonce):Observable<any>{
  // nounce= this.web3.utils.toHex( nounce.challenge)
 // console.log('received ', nonce)

  let nonceValue = nonce.nonce
//  console.log('signing nounce ', nonceValue)

  let from = this.account
  
   
   return Observable.create(observer=>{
  
  
    this.web3.eth.personal.sign(this.web3.utils.fromUtf8(`I am signing my one-time nonce: ${nonceValue}`), from,(err, result)=>{
		
      if(err){ 
        //console.log('error signing the token');
            observer.next(err)}
            else{
             // console.log('SIGNED ', result)
              let signedObject={
                nonce: nonceValue,
                sign: result
              }
            observer.next(signedObject)
            observer.complete()
            }
    })

   })
 }

 // create contract instance
 createContractInstance(addr, contractJson){
   let instance;
   let abi =contractJson.abi;
   instance = new this.web3.eth.Contract(abi, addr);
   //console.log("TCL: createContractInstance -> instance ", instance )
   return instance
}
// all depolyed getLeagues

getAllLeagues(account, addr, gasToUse):Observable<any>{
  return Observable.create(observer=>{
    let instance = this.createContractInstance(addr, factoryJson);
    let transactionObject = {
      from: account,
      gas: gasToUse
    }
    instance.methods.GetAllLeagues().call(transactionObject, (err, result) => {
      if (err) {
        
        observer.error(err)
      } else {

        observer.next(result);
        observer.complete()
      }

    })

  })

}
//get all comeptions in this weeks league
getAllCompetions(account, addr, gasToUse):Observable<any>{

  return Observable.create(observer=>{
    let instance = this.createContractInstance(addr, leagueJson);
    let transactionObject = {
      from: account,
      gas: gasToUse
    }
    let compe =[];
    instance.methods.getCompetitionCount().call(transactionObject,(err, result)=>{
      if(err) throw err;
      if(result<1){
        //console.log('no competitions in this league', result)
      }else{
        //console.log('number of competioins is ', result)
        for (let index = 0; index < result; index++) {
				
          
          instance.methods.competitions(index).call(transactionObject, (err, result)=>{
            if (err) {
     
              observer.error(err)
            }
            else{
          let obj ={
                prizeMoney: this.web3.utils.fromWei(result.prizeMoney, 'ether'),
                Title: "10 Ethereum weekend jackpot",
                maxPlayers: result.maxPlayers
        
              }
              compe.push(obj)


            }
            observer.next(compe)
            observer.complete()

          })
         
          
        }
      }
    })
  
  

  })
}



joinCompe(acc, gas, compeId):Observable<any>{
  //console.log('acc ', acc)
  return Observable.create(observer=>{
    let transactionObject={
      from: acc,
      gas: gas

    }
    let instance = this.createContractInstance(compeId, compeJson);
    instance.methods.joinCompetition().send(transactionObject, (err, resp)=>{
     // console.log('this works ', compeId)
      if(err) {
        observer.error(err)
      }else{
      //  console.log('this also works')
     observer.next(resp);
     observer.complete()
      }
    })

  })

}


  
}

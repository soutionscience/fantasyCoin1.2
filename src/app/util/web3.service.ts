import {Injectable} from '@angular/core';
import contract from 'truffle-contract';
import {Subject, Observable} from 'rxjs';
declare let require: any;
const Web3 = require('web3');


declare let window: any;
let account : string;

@Injectable()
export class Web3Service {
  private web3: any;
  private accounts: string[];
  private account: string;
  public ready = false;

  public accountsObservable = new Subject<string[]>();

  constructor() {
    window.addEventListener('load', (event) => {
      this.bootstrapWeb3();
      this.getSingleAccount();
      // this.checkMetamask();

    });
  }

  public bootstrapWeb3() {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      this.web3 = new Web3(window.web3.currentProvider);

    } else {
      console.log('No web3? You should consider trying MetaMask!');

      // Hack to provide backwards compatibility for Truffle, which uses web3js 0.20.x
      // Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
      // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
      // this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    }

    setInterval(() => 1000);
  }

  checkMetamask():Observable<any>{
    return Observable.create(observer=>{
      if(typeof window.web3 !== 'undefined'){ //web 3 installed
        // let accounts = this.getCoinBaseHere()
        console.log('what is in accounts? ', account)

        if(account){ // if account is unlocked return 2

          observer.next(2)
          observer.complete()

        }else{
          observer.next(1)// no web3 installed
          observer.complete()

        }


      }else{
        observer.next(3)
        observer.complete()
      }

    })

  }
  getCoinBase():Observable<any>{
    console.log('calling get accounts')
    return Observable.create(observer=>{
      this.web3.eth.getAccounts((err, resp)=>{
        if(err) observer.next(err)
        observer.next(resp[0])
        observer.complete()
      })
    })
  }

 getSingleAccount(){
 this.web3.eth.getAccounts((err, resp)=>{
   account = resp[0];
  })
 }

 signTransaction(nounce):Observable<any>{
  // nounce= this.web3.utils.toHex( nounce.challenge)
  // console.log('nounce ', nounce)
  nounce = nounce.challenge;
   
   return Observable.create(observer=>{
    let from = account
    console.log('TCL: Web3Service -> nounce', nounce)
    this.web3.eth.personal.sign(nounce, from, (err, result)=>{
			console.log("TCL: Web3Service -> from", from)
      if(err){ console.log('error signing the token');
            observer.next(err)}
            else{
              console.log('SIGNED ', result)
              let signedObject={
                nounce: nounce,
                sign: result
              }
            observer.next(signedObject)
            observer.complete()
            }
    })

   })
 }


  
}

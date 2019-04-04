import {Injectable} from '@angular/core';
import contract from 'truffle-contract';
import {Subject, Observable} from 'rxjs';
declare let require: any;
const Web3 = require('web3');
// const web3= Web3();


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
    // window.addEventListener('load', (event) => {
     this.checkAndInstatiateWeb3();
      this.checkMetamask();
      this.getSingleAccount();
     

    // });
  }
  checkAndInstatiateWeb3 = () => {
    // console.log('what is in json??' , campaignFactory)
     // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof window.web3 !== 'undefined') {


      console.warn(
       'using metamsk detected'
      );
      // Use Mist/MetaMask's provider
      this.web3 = new Web3(Web3.givenProvider);
      // account = this.getCoinBaseHere();
      // console.log('coinbase ', account)
      return this.web3;
    } else {

      // const provider = new Web3.providers.HttpProvider(
      //   'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
      // );
      // this.web3 = new Web3(provider);
      console.warn(
        'No web3 detected'
      );
      // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
      // needs to be changed to better fall back plan
      // this.web3 = new Web3();

      return null;
    }

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

  let nounceValue = nounce[1].value
  let from = account
  
   
   return Observable.create(observer=>{
  
  
    this.web3.eth.personal.sign(nounceValue, from,(err, result)=>{
		
      if(err){ console.log('error signing the token');
            observer.next(err)}
            else{
              console.log('SIGNED ', result)
              let signedObject={
                nounce: nounceValue,
                sign: result
              }
            observer.next(signedObject)
            observer.complete()
            }
    })

   })
 }


  
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// declare var window: any;

@Injectable({
  providedIn: 'root'
})
export class BrowserDetectionService {



  constructor() { }

  detectBrowser():Observable<any>{
    return Observable.create(observer=>{
       console.log('what is window ', window)
      if((!! window['opr'] && !!window['opr'].addons) || !!window['opera'] || navigator.userAgent.indexOf(' OPR/') >= 0){
        observer.next('isOpera')
        observer.complete();

      }
      if(typeof window['InstallTrigger'] !== 'undefined'){
        observer.next('isFireFox')
        observer.complete()

      }
      //!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)
      if(!!window['chrome'] && !!window['chrome']['webstore']){
        observer.next('isChrome')
        observer.complete()

      }
      if(!window['safari'] || window['safari'].pushNotification){
        console.log('actually safari?' )
        observer.next('isSafari')
        observer.complete()
      }
      else{
        observer.next('unKnown')
        observer.complete()
      }

    })
  }
}

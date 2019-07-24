import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BrowserDetectionService } from '../../util/browser-detection.service';


@Component({
  selector: 'app-install-metamask',
  templateUrl: './install-metamask.component.html',
  styleUrls: ['./install-metamask.component.scss']
})
export class InstallMetamaskComponent implements OnInit {
  buttonText: String
  buttonLink: String
  buttonImage: String

  constructor(private browserDetect: BrowserDetectionService, private dialogRef: MatDialogRef<InstallMetamaskComponent>) { }

  ngOnInit() {
    this.detect()
    console.log('what is button link? ', this.buttonLink)
  }
  detect(){
    let browser;
    this.browserDetect.detectBrowser()
    .subscribe(resp=>{
      console.log('browser is ', resp)

      if(resp == 'isOpera'){
        this.buttonText = "Get Metamask from Opera Store"
        this.buttonLink="https://addons.opera.com/en/extensions/details/metamask/"
        this.buttonImage="fab fa-opera"
      }
      if(resp == 'isChrome'){
        this.buttonText = "Get Metamask from Chrome Store"
        this.buttonLink="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
        this.buttonImage="fab fa-chrome"
      }
      if(resp == 'isFireFox'){
        this.buttonText = "Get Metamask from FireFox Store"
        this.buttonLink="https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/"
        this.buttonImage="fab fa-firefox"
      }
      if(resp == 'unKnown'){
        this.buttonText = "Get Metamask from Chrome Store"
        this.buttonLink="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
        this.buttonImage="fab fa-chrome"
      }
      if(resp == 'isSafari'){
        this.buttonText = "Get Metamask from Chrome Store"
        this.buttonLink="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
        this.buttonImage="fab fa-chrome"

      }
    })
  }
  close(){
    this.dialogRef.close()
  }

}

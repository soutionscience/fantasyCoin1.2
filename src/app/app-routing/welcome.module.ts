import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from '../welcome/welcome.component';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { LogosComponent } from '../logos/logos.component';
import { BannerComponent } from '../banner/banner.component';
import { BrandingComponent } from '../branding/branding.component';

const routes : Routes =[{
  path: '', component: WelcomeComponent
}

]

@NgModule({
  declarations: [WelcomeComponent, MenuComponent, LogosComponent, BannerComponent, BrandingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WelcomeModule { }

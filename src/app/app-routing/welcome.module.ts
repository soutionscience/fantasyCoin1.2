import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from '../welcome/welcome.component';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { LogosComponent } from '../logos/logos.component';
import { BannerComponent } from '../banner/banner.component';
import { BrandingComponent } from '../branding/branding.component';
import { LoginHorizontalComponent } from '../login-horizontal/login-horizontal.component';
import { AuthGuard } from '../auth.guard';
import { PitchComponent } from '../pitch/pitch.component';
import { TeamModule } from './team.module';

const routes : Routes =[{
  path: '', component: WelcomeComponent, children:[
    {path: 'teams', loadChildren: './team.module#TeamModule'},
    {path: 'leagues', loadChildren: './leagues.module#LeaguesModule'},
   {path: 'compe', loadChildren: './compe.module#CompeModule'},
   {path: 'my-team', loadChildren: './user-team-page.module#UserTeamPageModule'}
  ]
}

]

@NgModule({
  declarations: [WelcomeComponent, MenuComponent, LogosComponent,
    BannerComponent, BrandingComponent, LoginHorizontalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    

  ]
})
export class WelcomeModule { }

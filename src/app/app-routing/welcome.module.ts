import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from '../welcome/welcome.component';
import { Routes, RouterModule , CanActivate} from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { LogosComponent } from '../logos/logos.component';
import { BannerComponent } from '../banner/banner.component';
import { BrandingComponent } from '../branding/branding.component';
import { LoginHorizontalComponent } from '../login-horizontal/login-horizontal.component';
import { AuthGuard } from '../auth.guard';
import { PitchComponent } from '../pitch/pitch.component';
import { TeamModule } from './team.module';
import { FooterComponent } from '../footer/footer.component';

const routes : Routes =[{
  path: '', component: WelcomeComponent, children:[
    {path: '', loadChildren:'./home.module#HomeModule'},
    {path: 'teams', loadChildren: './team.module#TeamModule'},
    {path: 'leagues', loadChildren: './leagues.module#LeaguesModule', canActivate:[AuthGuard]},
   {path: 'transfers', loadChildren: './transfer.module#TransferModule'},
   {path: 'my-team', loadChildren: './user-team-page.module#UserTeamPageModule'},
   {path: 'login', loadChildren:'./login.module#LoginModule',},
   {path: 'feedback', loadChildren: './feedback.module#FeedbackModule'},
   {path: 'rankings', loadChildren: './ranking.module#RankingModule'}
  ]
}

]

@NgModule({
  declarations: [WelcomeComponent, MenuComponent, LogosComponent,
    BannerComponent, BrandingComponent, LoginHorizontalComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    

  ]
})
export class WelcomeModule { }

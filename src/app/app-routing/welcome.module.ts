import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from '../welcome/welcome.component';
import { Routes, RouterModule , CanActivate} from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { LogosComponent } from '../logos/logos.component';
import { BannerComponent } from '../banner/banner.component';
import { BrandingComponent } from '../branding/branding.component';
import { LoginHorizontalComponent } from '../login-horizontal/login-horizontal.component';
import { PitchComponent } from '../pitch/pitch.component';
import { TeamModule } from './team.module';
import { FooterComponent } from '../footer/footer.component';
import { UserLeagueComponent } from '../DETAILS/user-league/user-league.component';
import { TeamComponent } from '../team/team.component';
import { ActiveGuard } from '../GUARDS/active.guard';
import { MainnetGuard } from '../GUARDS/mainnet.guard';
import { AuthGuard } from '../GUARDS/auth.guard';

const routes : Routes =[{
  path: '', component: WelcomeComponent, children:[
   {path: '', loadChildren:'./home.module#HomeModule'},
   {path: 'teams', loadChildren: './team.module#TeamModule',  canActivate:[AuthGuard, ActiveGuard]},
   {path: 'leagues', loadChildren: './leagues.module#LeaguesModule',  canActivate:[ActiveGuard]},
   {path: 'transfers', loadChildren: './transfer.module#TransferModule', canActivate:[ActiveGuard, MainnetGuard, AuthGuard]},
   {path: 'my-team', loadChildren: './user-team-page.module#UserTeamPageModule',canActivate:[AuthGuard, MainnetGuard, ActiveGuard]},
   {path: 'login', loadChildren:'./login.module#LoginModule'},
   {path: 'beta', loadChildren: './beta.module#BetaModule', canActivate: [AuthGuard]},
   {path: 'network', loadChildren: './mainnet.module#MainnetModule'},
   {path: 'feedback', loadChildren: './feedback.module#FeedbackModule'},
   {path: 'rankings', loadChildren: './ranking.module#RankingModule', canActivate:[AuthGuard, ActiveGuard]},
   {path: 'new-team', loadChildren: './new-team.module#NewTeamModule', canActivate:[MainnetGuard,  AuthGuard, ActiveGuard]}
  ]
}

]

@NgModule({
  declarations: [WelcomeComponent, MenuComponent, LogosComponent,
    BannerComponent, BrandingComponent, LoginHorizontalComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
],
  exports: []
})
export class WelcomeModule { }

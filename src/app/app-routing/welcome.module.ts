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
import { RemovePlayerComponent } from '../dialogs/remove-player/remove-player.component';
import { MatDialogModule } from '@angular/material';

const routes : Routes =[{
  path: '', component: WelcomeComponent, children:[
   {path: '', loadChildren:'./home.module#HomeModule'},
   {path: 'teams', loadChildren: './team.module#TeamModule',  canActivate:[AuthGuard, ActiveGuard]},
   {path: 'leagues', loadChildren: './leagues.module#LeaguesModule',  canActivate:[ActiveGuard, MainnetGuard, AuthGuard]},
   {path: 'transfers', loadChildren: './transfer.module#TransferModule'},
   {path: 'my-team', loadChildren: './user-team-page.module#UserTeamPageModule'},
   {path: 'login', loadChildren:'./login.module#LoginModule'},
   {path: 'beta', loadChildren: './beta.module#BetaModule', canActivate: [AuthGuard]},
   {path: 'network', loadChildren: './mainnet.module#MainnetModule'},
   {path: 'feedback', loadChildren: './feedback.module#FeedbackModule'},
   {path: 'markets', loadChildren: './market.module#MarketModule'},
   {path:'howto', loadChildren: './howto.module#HowtoModule'},
   {path: 'rankings', loadChildren: './ranking.module#RankingModule', canActivate:[AuthGuard, ActiveGuard]},
   {path: 'new-team', loadChildren: './new-team.module#NewTeamModule', canActivate:[MainnetGuard,  AuthGuard, ActiveGuard]}
  ]
}

]

@NgModule({
  declarations: [RemovePlayerComponent, WelcomeComponent, MenuComponent, LogosComponent,
    BannerComponent, BrandingComponent, LoginHorizontalComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDialogModule
],
entryComponents:[RemovePlayerComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }

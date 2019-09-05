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
import { UserLeagueComponent } from '../DETAILS/user-league/user-league.component';
import { TeamComponent } from '../team/team.component';
import { ActiveGuard } from '../GUARDS/active.guard';
import { MainnetGuard } from '../GUARDS/mainnet.guard';
import { AuthGuard } from '../GUARDS/auth.guard';
import { RemovePlayerComponent } from '../dialogs/remove-player/remove-player.component';
import { MatDialogModule } from '@angular/material';
import { InstallMetamaskComponent } from '../dialogs/install-metamask/install-metamask.component';
import { UnlockMetamaskComponent } from '../dialogs/unlock-metamask/unlock-metamask.component';
import { LoginMetamaskComponent } from '../dialogs/login-metamask/login-metamask.component';
import { CreateAccountComponent } from '../dialogs/create-account/create-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Web3Service } from '../util/web3.service';
import { BuyMoreComponent } from '../dialogs/buy-more/buy-more.component';
import { FooterComponent } from '../footer/footer.component';

const routes : Routes =[{
  path: '', component: WelcomeComponent, children:[
   {path: '', loadChildren:'./home.module#HomeModule'},
   {path: 'teams', loadChildren: './team.module#TeamModule',  canActivate:[AuthGuard, ActiveGuard]},
   {path: 'leagues', loadChildren: './leagues.module#LeaguesModule',  canActivate:[ActiveGuard, MainnetGuard, AuthGuard]},
   {path: 'transfers', loadChildren: './transfer.module#TransferModule', canActivate:[ActiveGuard, MainnetGuard, AuthGuard]},
   {path: 'my-team', loadChildren: './user-team-page.module#UserTeamPageModule', canActivate:[ActiveGuard, MainnetGuard, AuthGuard]},
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
  declarations: [CreateAccountComponent, RemovePlayerComponent, WelcomeComponent, MenuComponent, LogosComponent,
    BannerComponent, BrandingComponent, LoginHorizontalComponent, InstallMetamaskComponent, 
    UnlockMetamaskComponent, LoginMetamaskComponent, BuyMoreComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
],
providers:[AuthGuard, ActiveGuard, MainnetGuard, Web3Service],
entryComponents:[CreateAccountComponent, RemovePlayerComponent, InstallMetamaskComponent, UnlockMetamaskComponent, LoginMetamaskComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }

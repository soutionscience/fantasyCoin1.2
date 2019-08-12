import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RestangularModule } from 'ngx-restangular';
import { restangularConfigFactory } from './shared/restangular.config';
import { RemovePlayerComponent } from './dialogs/remove-player/remove-player.component';
import { UnlockMetamaskComponent } from './dialogs/unlock-metamask/unlock-metamask.component';
import { LoginMetamaskComponent } from './dialogs/login-metamask/login-metamask.component';
import { InstallMetamaskComponent } from './dialogs/install-metamask/install-metamask.component';
import { CreateAccountComponent } from './dialogs/create-account/create-account.component';
import { Web3Service } from './util/web3.service';
import { AuthService } from './util/auth.service';
import { MainnetGuard } from './GUARDS/mainnet.guard';
import { AuthGuard } from './GUARDS/auth.guard';
import {ActiveGuard} from './GUARDS/active.guard';
import { PitchComponent } from './pitch/pitch.component';
//import { BetaComponent } from './dialogs/beta/beta.component';
import { WarningBetaComponent } from './dialogs/warning-beta/warning-beta.component';

 import { TeamComponent } from './team/team.component';
import { BuyMoreComponent } from './dialogs/buy-more/buy-more.component';
import { SignInComponent } from './dialogs/sign-in/sign-in.component';
import { EarlyBetaComponent } from './dialogs/early-beta/early-beta.component';
import { CreatePortisComponent } from './dialogs/create-portis/create-portis.component';



@NgModule({
  declarations: [ RemovePlayerComponent, UnlockMetamaskComponent, CreateAccountComponent,
    LoginMetamaskComponent, InstallMetamaskComponent, WarningBetaComponent, BuyMoreComponent, SignInComponent, EarlyBetaComponent, CreatePortisComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RestangularModule.forRoot(restangularConfigFactory),
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [Web3Service, AuthService, AuthGuard, ActiveGuard, MainnetGuard],
  entryComponents: [RemovePlayerComponent, UnlockMetamaskComponent, CreateAccountComponent,
     LoginMetamaskComponent, InstallMetamaskComponent, WarningBetaComponent,SignInComponent,
    EarlyBetaComponent, CreatePortisComponent],
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule { }

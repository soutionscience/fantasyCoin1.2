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
import { AuthGuard } from './auth.guard';
import { PitchComponent } from './pitch/pitch.component';
import { BetaComponent } from './dialogs/beta/beta.component';
import { WarningBetaComponent } from './dialogs/warning-beta/warning-beta.component';
//import { LoadingComponent } from './dialogs/loading/loading.component';
//import { BuyMoreComponent } from './dialogs/buy-more/buy-more.component';

@NgModule({
  declarations: [ RemovePlayerComponent, UnlockMetamaskComponent, CreateAccountComponent,
    LoginMetamaskComponent, InstallMetamaskComponent, BetaComponent, WarningBetaComponent],
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
  providers: [Web3Service, AuthService, AuthGuard],
  entryComponents: [RemovePlayerComponent, UnlockMetamaskComponent, CreateAccountComponent,
     LoginMetamaskComponent, InstallMetamaskComponent, WarningBetaComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

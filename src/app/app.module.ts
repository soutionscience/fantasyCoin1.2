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
import { UnlockMetamaskComponent } from './dialogs/unlock-metamask/unlock-metamask.component';
import { LoginMetamaskComponent } from './dialogs/login-metamask/login-metamask.component';
import { InstallMetamaskComponent } from './dialogs/install-metamask/install-metamask.component';
import { CreateAccountComponent } from './dialogs/create-account/create-account.component';
import { Web3Service } from './util/web3.service';
import { AuthService } from './util/auth.service';
import { WarningBetaComponent } from './dialogs/warning-beta/warning-beta.component';
import { SignInComponent } from './dialogs/sign-in/sign-in.component';
import { EarlyBetaComponent } from './dialogs/early-beta/early-beta.component';
import { CreatePortisComponent } from './dialogs/create-portis/create-portis.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [ WarningBetaComponent, SignInComponent, EarlyBetaComponent, CreatePortisComponent],
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
  providers: [AuthService, Web3Service],
  entryComponents: [WarningBetaComponent,SignInComponent,
    EarlyBetaComponent, CreatePortisComponent],
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule { }

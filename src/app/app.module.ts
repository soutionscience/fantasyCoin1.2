import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {MetaModule} from './meta/meta.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatDialogModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RestangularModule } from 'ngx-restangular';
import { restangularConfigFactory } from './shared/restangular.config';
import { RemovePlayerComponent } from './dialogs/remove-player/remove-player.component';
import { UnlockMetamaskComponent } from './dialogs/unlock-metamask/unlock-metamask.component';
import { LoginMetamaskComponent } from './dialogs/login-metamask/login-metamask.component';
import { InstallMetamaskComponent } from './dialogs/install-metamask/install-metamask.component';
import { CreateAccountComponent } from './dialogs/create-account/create-account.component';

@NgModule({
  declarations: [ RemovePlayerComponent, UnlockMetamaskComponent, CreateAccountComponent,
    LoginMetamaskComponent, InstallMetamaskComponent],
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
    HttpClientModule,
    MetaModule,
    RestangularModule.forRoot(restangularConfigFactory),
    MatDialogModule
  ],
  providers: [],
  entryComponents: [RemovePlayerComponent, UnlockMetamaskComponent, CreateAccountComponent,
     LoginMetamaskComponent, InstallMetamaskComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CaptainComponent } from './captain/captain.component';

import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { TreasureChestComponent } from './treasure-chest/treasure-chest.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http'
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './shared/auth/login/login.component';
import { SignoutComponent } from './shared/auth/signout/signout.component';
import { AuthInterceptorService } from './shared/services/auth-interceptor.service';
import { AuthService } from './shared/services/auth.service';
import { LocalStorageService } from './shared/services/local-storage.service';


@NgModule({
  declarations: [
    AppComponent,
    CaptainComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    TreasureChestComponent,
    LoginComponent,
    SignoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
    AuthService,
    LocalStorageService,
  {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptorService,
  multi: true
  }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

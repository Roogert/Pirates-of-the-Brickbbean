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
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CaptainComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    TreasureChestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

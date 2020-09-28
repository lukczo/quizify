import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { WelcomeComponent } from './core/welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { StartComponent } from './game/start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@Angular/forms'

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { WelcomeComponent } from './core/welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { StartComponent } from './game/start/start.component';
import { FlashcardComponent } from './game/flashcard/flashcard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    StartComponent,
    FlashcardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

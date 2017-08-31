import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeroesModule } from './heroes/heroes.module';
//import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule
    //FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

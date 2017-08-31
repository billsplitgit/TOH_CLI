import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from "./heroes.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [HeroesComponent
    ,HeroDetailComponent]
})
export class HeroesModule { }

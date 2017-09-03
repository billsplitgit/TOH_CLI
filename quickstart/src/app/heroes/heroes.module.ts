import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from "./heroes.component";
import { HeroService } from "./hero.service";
import { UserService } from './user.service';
import {HttpModule} from '@angular/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [HeroesComponent
    ,HeroDetailComponent],
    
  providers:[HeroService, UserService]
})
export class HeroesModule { }

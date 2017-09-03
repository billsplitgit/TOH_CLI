import { Component, OnInit } from '@angular/core';
import {Hero} from './hero';
import { HeroService } from './hero.service';
import {UserService} from './user.service';
import { Router, RouterModule } from '@angular/router';
import { Iusers } from "./mock-users";

@Component({

  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  providers:[]
})

export class HeroesComponent implements OnInit {

  selectedHero: Hero; 
  heroes : Hero[];
  users : Iusers[];

  constructor(private _heroService: HeroService,
  private _router: Router, private _userService :UserService) { }

  getHeroes() : void{
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  getUsers() : void{
    this._userService.getUsers().then(usrs => this.users = usrs);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this._router.navigate(['/detail', this.selectedHero.id]);
  }
}




import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import {Http} from '@angular/http';

@Injectable()
export class HeroService {
  
  heroesUrl = '';

  constructor(private http: Http) { }

  getHeroes() : Promise<Hero[]>{
    return Promise.resolve(HEROES) ;
  }

  // getHeroes(): Promise<Hero[]> {
  //   return this.http.get(this.heroesUrl)
  //              .toPromise()
  //              .then(response => response.json().data as Hero[]);
               
  // }

  getHero(id: number): Promise<Hero> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
}

  

}

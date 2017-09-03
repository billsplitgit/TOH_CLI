import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Iusers } from "./mock-users";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

@Injectable()
export class UserService {

    private userUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _http : Http) { }

  getUsers() : Promise<Iusers[]>{
    return this._http.get(this.userUrl)
    .toPromise()
    .then(response => response.json().data as Iusers[]).catch(this.handleError)
    
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  /*getUser(id: number): Promise<Iusers> {
    return this.getUsers().then(heroes => heroes.find(hero => hero.id === id));
  }*/
}

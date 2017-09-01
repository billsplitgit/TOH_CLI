import { Component, OnInit, Input } from '@angular/core';
import {Hero} from './hero';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { HeroService } from './hero.service';


import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-detail',
  templateUrl: "hero-detail.component.html",
  styleUrls: ['heroes.component.css','hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private _heroService: HeroService,
    private _route: ActivatedRoute,
    private _location: Location
  ) {}

  
  ngOnInit() {
    this._route.paramMap.switchMap((params: ParamMap) => this._heroService.getHero(+params.get('id')))
    .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this._location.back();
  }

  @Input() hero: Hero;

}

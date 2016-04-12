import {Component} from 'angular2/core';
import {Hero} from './hero';
import { RouteParams } from 'angular2/router';
import { HeroService } from './hero.service';
import { Component, Input, OnInit } from 'angular2/core';
@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
inputs: ['hero']
})
ngOnInit() {
   let id = +this._routeParams.get('id');
   this._heroService.getHero(id)
     .then(hero => this.hero = hero);
 }
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  goBack() {
    window.history.back();
  }
}

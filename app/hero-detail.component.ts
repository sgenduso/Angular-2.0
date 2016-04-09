import {Component} from 'angular2/core';
import {Hero} from './hero';
import { RouteParams } from 'angular2/router';
import { HeroService } from './hero.service';
import { Component, Input, OnInit } from 'angular2/core';
@Component({
  selector: 'my-hero-detail',
  template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
  </div>
`,
inputs: ['hero']
})
ngOnInit() {
   let id = +this._routeParams.get('id');
   this._heroService.getHero(id)
     .then(hero => this.hero = hero);
 }
export class HeroDetailComponent implements OnInit {
  hero: Hero;
}

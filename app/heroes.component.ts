import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';
constructor(private _heroService: HeroService) { }
@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls:  ['app/heroes.component.css'],
  directives: [HeroDetailComponent],
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes = Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero) { this.selectedHero = hero; };
  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  };
  ngOnInit() {
    this.getHeroes();
  };
  getHeroesSlowly() {
  return new Promise<Hero[]>(resolve =>
    setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
    );
  }
}

// import statements reference the things we need.
import {Component} from 'angular2/core';

interface Hero {
  id: number;
  name: string;
}

// @Component tells Angular what template to use and how to create the component.
@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <div><input [(ngModel)]="hero.name" placeholder="name"></div>
      </div>
      `
})
// component class controls the appearance and behavior of a view through its template.
export class AppComponent {
  public title = 'Tour of Heroes';
  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}

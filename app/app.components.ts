// import statements reference the things we need.
import {Component} from 'angular2/core';

// @Component tells Angular what template to use and how to create the component.
@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})
// component class controls the appearance and behavior of a view through its template.
export class AppComponent { }

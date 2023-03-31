import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { FilmsActions } from './+state/films/films.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-star-wars-catalog';
  private readonly store = inject(Store);
  constructor() {
    this.store.dispatch(FilmsActions.loadAll());
  }
}

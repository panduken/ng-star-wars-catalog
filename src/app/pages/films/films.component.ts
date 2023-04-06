import { CommonModule, NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { FilmsActions } from 'src/app/+state/films/films.actions';
import * as fromFilms from '../../+state/films/films.selectors';
import { FilmCardComponent } from './components/film-card/film-card.component';
@Component({
  selector: 'app-films',
  standalone: true,
  imports: [CommonModule, FilmCardComponent],
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmsComponent implements OnInit {
  private readonly store = inject(Store);

  films$ = this.store.select(fromFilms.selectAllFilms);

  ngOnInit(): void {}
}

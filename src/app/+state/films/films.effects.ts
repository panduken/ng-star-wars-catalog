import { inject, Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { FilmsService } from 'src/app/pages/films/films.service';
import { FilmsActions } from './films.actions';

@Injectable()
export class FilmsEffects {
  private readonly actions$ = inject(Actions);
  private readonly filmsService = inject(FilmsService);
  loadFilms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FilmsActions.loadAll),
      exhaustMap(() =>
        this.filmsService.films$.pipe(
          map((films) => FilmsActions.loadAllSuccess({ films })),
          catchError((error) =>
            of(
              FilmsActions.loadAllFailure({
                error,
              })
            )
          )
        )
      )
    )
  );
}

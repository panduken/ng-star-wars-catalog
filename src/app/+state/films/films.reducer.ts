import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { FilmsActions } from './films.actions';
import { FilmsEntity } from './films.models';

export interface FilmsState extends EntityState<FilmsEntity> {}

export const filmsAdapter: EntityAdapter<FilmsEntity> =
  createEntityAdapter<FilmsEntity>({
    selectId: (filmsEntity) => filmsEntity.episode_id,
  });

export const filmsReducer = createReducer(
  filmsAdapter.getInitialState(),
  on(FilmsActions.loadAllSuccess, (state, { films }) =>
    filmsAdapter.setMany(films, state)
  )
);

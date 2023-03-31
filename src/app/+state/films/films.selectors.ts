import { createFeatureSelector, createSelector } from '@ngrx/store';
import { filmsAdapter, FilmsState } from './films.reducer';

const filmsFeature = createFeatureSelector<FilmsState>('films');

export const selectors = filmsAdapter.getSelectors();

export const selectAllFilms = createSelector(filmsFeature, selectors.selectAll);

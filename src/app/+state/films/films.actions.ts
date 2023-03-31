import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';

import { FilmsEntity } from './films.models';

export const FilmsActions = createActionGroup({
  source: 'Films',
  events: {
    'Load All': emptyProps(),
    'Load All Success': props<{ films: FilmsEntity[] }>(),
    'Load All Failure': props<{ error: any }>(),
  },
});

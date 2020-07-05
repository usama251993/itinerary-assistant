
import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromReducer from '../ia-reducer/ia-core.reducer';
import * as fromStore from '..';

const selectFeature = createFeatureSelector(fromStore.FEATURE_NAME);

export const selectCore = createSelector(
  selectFeature,
  (state: fromStore.State) => fromReducer.IA_ENTITY_SELECTOR(state.core)
);
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';

import * as fromActions from '@ia-core/state/ia-action/ia-navbar.action';

import { NAVBAR_ACTIONS } from '@ia-core/state/ia-type/ia-navbar.type';
import { IaNavbarModel } from '@ia-core/models/ia-navbar.model';

@Injectable()
export class IaNavbarEffects {
  constructor(private _actions$: Actions) { }

  @Effect()
  eLoadNavbar$ = this._actions$.pipe(
    ofType<fromActions.NAVBAR_ACTIONS_TYPES>(NAVBAR_ACTIONS.LOAD),
    map((action: fromActions.IaNavbarLoadAction) => {
      const navbarAsset: IaNavbarModel = {
        id: action.payload.id,
        state: {
          bIsOpen: false
        },
        trigger: {
          open: {
            icon: {
              style: 'fas',
              name: 'bars'
            }
          },
          close: {
            icon: {
              style: 'fas',
              name: 'times'
            }
          }
        },
        items: [
          {
            icon: {
              style: 'fas',
              name: 'columns',
              morph: { size: '2x' }
            },
            label: 'Dashboard',
            children: []
          },
          {
            icon: {
              style: 'fas',
              name: 'passport',
              morph: { size: '2x' }
            },
            label: 'Trips',
            children: []
          },
          {
            icon: {
              style: 'fas',
              name: 'chart-line',
              morph: { size: '2x' }
            },
            label: 'Travel Trend',
            children: []
          },
          {
            icon: {
              style: 'fas',
              name: 'lightbulb',
              morph: { size: '2x' }
            },
            label: 'Tips and Tricks',
            children: []
          },
          {
            icon: {
              style: 'fas',
              name: 'compass',
              morph: { size: '2x' }
            },
            label: 'Explore',
            children: []
          },
          {
            icon: {
              style: 'fas',
              name: 'user',
              morph: { size: '2x' }
            },
            label: 'Profile',
            children: []
          }
        ]
      };
      return new fromActions.IaNavbarLoadActionSuccess(navbarAsset);
    }),
    catchError((err: Error) => of(new fromActions.IaNavbarLoadActionFail(err)))
  );

  @Effect()
  eToggleNavbar$ = this._actions$.pipe(
    ofType<fromActions.NAVBAR_ACTIONS_TYPES>(NAVBAR_ACTIONS.TOGGLE),
    map((action: fromActions.IaNavbarToggleAction) => {
      let updatedState: Update<IaNavbarModel> = {
        id: action.payload.id,
        changes: { state: { bIsOpen: !action.payload.state.bIsOpen } }
      }
      return new fromActions.IaNavbarToggleActionSuccess(updatedState);
    })
  )
}

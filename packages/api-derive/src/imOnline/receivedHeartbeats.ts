// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, SessionIndex } from '@polkadot/types/interfaces';
import { DerivedHeartbeats } from '../types';

import { of, Observable, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Bytes, Vec } from '@polkadot/types';

import { drr } from '../util/drr';

/**
 * @description Return a boolean array indicating whether the passed accounts had received heartbeats in the current session
 */
export function receivedHeartbeats (api: ApiInterfaceRx): () => Observable<DerivedHeartbeats> {
  return (): Observable<DerivedHeartbeats> => {
    return api.query.imOnline && api.query.imOnline.receivedHeartbeats
      ? api.queryMulti<[Vec<AccountId>, SessionIndex]>([
        api.query.session.validators,
        api.query.session.currentIndex
      ]).pipe(
        switchMap(([validators, currentIndex]): Observable<[AccountId[], Bytes[]]> =>
          combineLatest([
            of(validators),
            api.query.imOnline.receivedHeartbeats.multi<Bytes>(
              validators.map((_address, index): [SessionIndex, number] => [currentIndex, index])
            )
          ])
        ),
        map(([validators, heartbeats]): DerivedHeartbeats =>
          validators.reduce((result: DerivedHeartbeats, validator, index): DerivedHeartbeats => ({
            ...result,
            [validator.toString()]: !!heartbeats[index] && !heartbeats[index].isEmpty
          }), {})
        ),
        drr()
      )
      : of({});
  };
}

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
        api.query.imOnline.keys,
        api.query.session.currentIndex
      ]).pipe(
        switchMap(([keys, currentIndex]): Observable<[AccountId[], Bytes[]]> =>
          combineLatest([
            of(keys),
            api.query.imOnline.receivedHeartbeats.multi<Bytes>(
              keys.map((_address, index): [SessionIndex, number] => [currentIndex, index])
            )
          ])
        ),
        map(([keys, heartbeats]): DerivedHeartbeats =>
          keys.reduce((result: DerivedHeartbeats, key, index): DerivedHeartbeats => ({
            ...result,
            [key.toString()]: !!heartbeats[index] && !heartbeats[index].isEmpty
          }), {})
        ),
        drr()
      )
      : of({});
  };
}

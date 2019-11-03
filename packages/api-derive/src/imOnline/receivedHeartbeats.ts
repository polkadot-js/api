// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, SessionIndex } from '@polkadot/types/interfaces';
import { DerivedHeartbeats } from '../types';

import { of, Observable, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Bytes, Option, u32 } from '@polkadot/types';

import { overview as stakingOverview } from '../staking';
import { drr, memo } from '../util';

/**
 * @description Return a boolean array indicating whether the passed accounts had received heartbeats in the current session
 */
export const receivedHeartbeats = memo((api: ApiInterfaceRx): () => Observable<DerivedHeartbeats> => {
  const stakingOverviewvCall = stakingOverview(api);

  return memo((): Observable<DerivedHeartbeats> =>
    api.query.imOnline && api.query.imOnline.receivedHeartbeats && api.query.imOnline.authoredBlocks
      ? stakingOverviewvCall().pipe(
        switchMap(({ currentIndex, validators }): Observable<[AccountId[], Option<Bytes>[], u32[]]> =>
          combineLatest([
            of(validators),
            api.query.imOnline.receivedHeartbeats.multi<Option<Bytes>>(validators.map((_address, index): [SessionIndex, number] => [currentIndex, index])),
            api.query.imOnline.authoredBlocks.multi<u32>(validators.map((address): [SessionIndex, AccountId] => [currentIndex, address]))
          ])
        ),
        map(([validators, heartbeats, numBlocks]): DerivedHeartbeats =>
          validators.reduce((result: DerivedHeartbeats, validator, index): DerivedHeartbeats => ({
            ...result,
            [validator.toString()]: {
              blockCount: numBlocks[index],
              hasMessage: !heartbeats[index].isEmpty,
              isOnline: !heartbeats[index].isEmpty || numBlocks[index].gtn(0)
            }
          }), {})
        ),
        drr()
      )
      : of({}));
}, true);

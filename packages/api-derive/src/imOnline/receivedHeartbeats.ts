// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId } from '@polkadot/types/interfaces';
import { DeriveHeartbeats } from '../types';

import { Observable, of, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Bytes, Option, u32 } from '@polkadot/types';

import { memo } from '../util';

/**
 * @description Return a boolean array indicating whether the passed accounts had received heartbeats in the current session
 */
export function receivedHeartbeats (api: ApiInterfaceRx): () => Observable<DeriveHeartbeats> {
  return memo((): Observable<DeriveHeartbeats> =>
    api.query.imOnline?.receivedHeartbeats
      ? api.derive.staking.overview().pipe(
        switchMap(({ currentIndex, validators }): Observable<[AccountId[], Option<Bytes>[], u32[]]> =>
          combineLatest([
            of(validators),
            api.query.imOnline.receivedHeartbeats.multi<Option<Bytes>>(
              validators.map((_address, index) => [currentIndex, index])),
            api.query.imOnline.authoredBlocks.multi<u32>(
              validators.map((address) => [currentIndex, address]))
          ])
        ),
        map(([validators, heartbeats, numBlocks]): DeriveHeartbeats =>
          validators.reduce((result: DeriveHeartbeats, validator, index): DeriveHeartbeats => ({
            ...result,
            [validator.toString()]: {
              blockCount: numBlocks[index],
              hasMessage: !heartbeats[index].isEmpty,
              isOnline: !heartbeats[index].isEmpty || numBlocks[index].gtn(0)
            }
          }), {})
        )
      )
      : of({}));
}

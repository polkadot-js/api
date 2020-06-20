// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId } from '@polkadot/types/interfaces';
import { DeriveStakingQuery, DeriveStakingWaiting } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { memo } from '../util';

export function waitingInfo (api: ApiInterfaceRx): () => Observable<DeriveStakingWaiting> {
  return memo((): Observable<DeriveStakingWaiting> =>
    api.derive.staking.validators().pipe(
      switchMap(({ nextElected, validators }): Observable<[AccountId[], DeriveStakingQuery[]]> => {
        const elected = nextElected.map((a) => a.toString());
        const waiting = validators.filter((v) => !elected.includes(v.toString()));

        return combineLatest([
          of(waiting),
          combineLatest(
            waiting.map((accountId) => api.derive.staking.query(accountId))
          )
        ]);
      }),
      map(([waiting, info]): DeriveStakingWaiting => ({
        info,
        waiting
      }))
    )
  );
}

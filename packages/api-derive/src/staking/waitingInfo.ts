// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveStakingWaiting } from '../types';

import { Observable, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { memo } from '../util';

export function waitingInfo (api: ApiInterfaceRx): () => Observable<DeriveStakingWaiting> {
  return memo((): Observable<DeriveStakingWaiting> =>
    combineLatest([
      api.derive.staking.validators(),
      api.derive.staking.stashes()
    ]).pipe(
      switchMap(([{ nextElected }, stashes]): Observable<DeriveStakingWaiting> => {
        const elected = nextElected.map((a) => a.toString());
        const waiting = stashes.filter((v) => !elected.includes(v.toString()));

        return api.derive.staking.queryMulti(waiting).pipe(
          map((info): DeriveStakingWaiting => ({
            info,
            waiting
          }))
        );
      })
    )
  );
}

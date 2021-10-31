// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { AccountId } from '@polkadot/types/interfaces';
import type { DeriveStakingWaiting, StakingQueryFlags } from '../types';

import { combineLatest, map, switchMap } from 'rxjs';

import { memo } from '../util';

const DEFAULT_FLAGS = { withController: true, withPrefs: true };

export function waitingInfo (instanceId: string, api: ApiInterfaceRx): (flags?: StakingQueryFlags) => Observable<DeriveStakingWaiting> {
  return memo(instanceId, (flags: StakingQueryFlags = DEFAULT_FLAGS): Observable<DeriveStakingWaiting> =>
    combineLatest([
      api.derive.staking.validators(),
      api.derive.staking.stashes()
    ]).pipe(
      switchMap(([{ nextElected }, stashes]): Observable<DeriveStakingWaiting> => {
        const elected = nextElected.map((a) => a.toString());
        const filterElected = (v: AccountId) => !elected.includes(v.toString());
        const waiting = stashes.filter(filterElected);

        return api.derive.staking.queryMulti(waiting, flags).pipe(
          map((info): DeriveStakingWaiting => ({
            info,
            waiting
          }))
        );
      })
    )
  );
}

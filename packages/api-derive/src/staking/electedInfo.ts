// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveStakingElected } from '../types';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { memo } from '../util';

export function electedInfo (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveStakingElected> {
  return memo(instanceId, (): Observable<DeriveStakingElected> =>
    api.derive.staking.validators().pipe(
      switchMap(({ nextElected }): Observable<DeriveStakingElected> =>
        api.derive.staking.queryMulti(nextElected).pipe(
          map((info): DeriveStakingElected => ({
            info,
            nextElected
          }))
        )
      )
    )
  );
}

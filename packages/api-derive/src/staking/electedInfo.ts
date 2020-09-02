// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveStakingElected } from '../types';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { memo } from '../util';

export function electedInfo (api: ApiInterfaceRx): () => Observable<DeriveStakingElected> {
  return memo((): Observable<DeriveStakingElected> =>
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

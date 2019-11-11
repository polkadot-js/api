// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { EraIndex, SessionIndex } from '@polkadot/types/interfaces';
import { DeriveSessionIndexes } from '../types';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { createType, u32 as U32 } from '@polkadot/types';

import { memo } from '../util';

export function indexes (api: ApiInterfaceRx): () => Observable<DeriveSessionIndexes> {
  return memo((): Observable<DeriveSessionIndexes> =>
    (
      // Some chains (eg. very limited node-template), does not have session
      api.query.session && api.query.staking
        ? api.queryMulti<[SessionIndex, EraIndex, U32]>([
          api.query.session.currentIndex,
          api.query.staking.currentEra,
          api.query.staking.validatorCount
        ])
        : of([createType('SessionIndex', 1), createType('EraIndex', 1), new U32()])
    ).pipe(
      map(([currentIndex, currentEra, validatorCount]): DeriveSessionIndexes => ({
        currentIndex, currentEra, validatorCount
      }))
    ));
}

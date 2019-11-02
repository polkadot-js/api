// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { EraIndex, SessionIndex } from '@polkadot/types/interfaces';
import { DeriveSessionIndexes } from '../types';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';

import { drr } from '../util';

export function indexes (api: ApiInterfaceRx): () => Observable<DeriveSessionIndexes> {
  return (): Observable<DeriveSessionIndexes> =>
    api.queryMulti<[SessionIndex, EraIndex]>([
      api.query.session.currentIndex,
      api.query.staking.currentEra
    ]).pipe(
      map(([currentIndex, currentEra]): DeriveSessionIndexes => ({
        currentIndex, currentEra
      })),
      drr()
    );
}

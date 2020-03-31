// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { ReferendumIndex } from '@polkadot/types/interfaces';
import { DeriveReferendum } from '../types';

import BN from 'bn.js';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { memo } from '../util';

export function referendumsActive (api: ApiInterfaceRx): () => Observable<DeriveReferendum[]> {
  return memo((): Observable<DeriveReferendum[]> =>
    api.query.democracy?.lowestUnbaked
      ? api.queryMulti<[ReferendumIndex, ReferendumIndex]>([
        api.query.democracy.lowestUnbaked,
        api.query.democracy.referendumCount
      ]).pipe(
        switchMap(([first, total]): Observable<DeriveReferendum[]> =>
          total.gt(first)
            ? api.derive.democracy.referendumsInfo(
              [...Array(total.sub(first).toNumber())].map((_, i): BN => first.addn(i))
            )
            : of([])
        )
      )
      : of([])
  );
}

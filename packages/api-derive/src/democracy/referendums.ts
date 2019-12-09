// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ReferendumIndex } from '@polkadot/types/interfaces/democracy';
import { DerivedReferendum } from '../types';

import BN from 'bn.js';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';

import { memo } from '../util';

export function referendums (api: ApiInterfaceRx): () => Observable<DerivedReferendum[]> {
  return memo((): Observable<DerivedReferendum[]> =>
    api.query.democracy?.nextTally
      ? api.queryMulti<[ReferendumIndex, ReferendumIndex]>([
        api.query.democracy.nextTally,
        api.query.democracy.referendumCount
      ]).pipe(
        switchMap(([nextTally, referendumCount]): Observable<DerivedReferendum[]> =>
          referendumCount?.gt(nextTally) && referendumCount?.gtn(0)
            ? api.derive.democracy.referendumInfos(
              [...Array(referendumCount.sub(nextTally).toNumber())].map((_, i): BN =>
                nextTally.addn(i)
              )
            )
            : of([])
        )
      )
      : of([] as DerivedReferendum[])
  );
}

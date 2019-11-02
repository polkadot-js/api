// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ReferendumIndex } from '@polkadot/types/interfaces/democracy';

import BN from 'bn.js';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Option } from '@polkadot/types';

import { ReferendumInfoExtended } from '../type';
import { drr, memo } from '../util';
import { referendumInfos } from './referendumInfos';

export const referendums = memo((api: ApiInterfaceRx): () => Observable<Option<ReferendumInfoExtended>[]> => {
  const referendumInfosCall = referendumInfos(api);

  return memo((): Observable<Option<ReferendumInfoExtended>[]> =>
    (api.queryMulti([
      api.query.democracy.nextTally,
      api.query.democracy.referendumCount
    ]) as Observable<[ReferendumIndex?, ReferendumIndex?]>).pipe(
      switchMap(([nextTally, referendumCount]): Observable<Option<ReferendumInfoExtended>[]> =>
        referendumCount && nextTally && referendumCount.gt(nextTally) && referendumCount.gtn(0)
          ? referendumInfosCall(
            [...Array(referendumCount.sub(nextTally).toNumber())].map((_, i): BN =>
              nextTally.addn(i)
            )
          )
          : of([])
      ),
      drr()
    )
  );
}, true);

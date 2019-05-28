// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { Option, ReferendumIndex } from '@polkadot/types';

import { ReferendumInfoExtended } from '../type';
import { drr } from '../util/drr';
import { referendumInfos } from './referendumInfos';

export function referendums (api: ApiInterface$Rx) {
  return (): Observable<Array<Option<ReferendumInfoExtended>>> =>
    (api.queryMulti([
      api.query.democracy.nextTally,
      api.query.democracy.referendumCount
    ]) as any as Observable<[ReferendumIndex?, ReferendumIndex?]>).pipe(
      switchMap(([nextTally, referendumCount]) =>
        referendumCount && nextTally && referendumCount.gt(nextTally) && referendumCount.gtn(0)
          ? referendumInfos(api)(
            [...Array(referendumCount.sub(nextTally).toNumber())].map((_, i) =>
              nextTally.addn(i)
            )
          )
          : of([])
      ),
      drr()
    );
}

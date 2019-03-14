// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { BlockNumber, Option } from '@polkadot/types';

import { bestNumber } from '../chain';
import { drr } from '../util/drr';

export function sessionProgress (api: ApiInterface$Rx) {
  return (): Observable<BN> =>
    combineLatest(
      bestNumber(api)(),
      api.query.session.sessionLength(),
      api.query.session.lastLengthChange()
    ).pipe(
      map(
        ([bestNumber, sessionLength, lastLengthChange]) =>
          (bestNumber || new BN(0))
            .sub((lastLengthChange as Option<BlockNumber>).unwrapOr(new BN(0)))
            .add(sessionLength as BlockNumber || new BN(1))
            .mod(sessionLength as BlockNumber || new BN(1))
      ),
      drr()
    );
}

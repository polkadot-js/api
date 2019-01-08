// Copyright 2017-2019 @polkadot/ui-react-rx authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import ApiRx from '@polkadot/api/rx';
import { BlockNumber } from '@polkadot/types/index';
import BN from 'bn.js';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { bestNumber } from '../chain';

export function sessionProgress (api: ApiRx) {
  return (): Observable<BN> =>
    combineLatest([
      bestNumber(api)(),
      api.query.session.sessionLength(),
      api.query.session.lastLengthChange()
    ]).pipe(map(
      ([bestNumber, sessionLength, lastLengthChange]) =>
        (bestNumber as BlockNumber || new BN(0) as BN)
          .sub(lastLengthChange as BlockNumber || new BN(0))
          .add(sessionLength as BlockNumber || new BN(1))
          .mod(sessionLength as BlockNumber || new BN(1))
    ));
}

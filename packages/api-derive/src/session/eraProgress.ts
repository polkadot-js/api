// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import ApiRx from '@polkadot/api/rx';
import { BlockNumber } from '@polkadot/types/index';

import { sessionProgress } from './sessionProgress';
import { drr } from '../util/drr';

export function eraProgress (api: ApiRx) {
  return (): Observable<BN> =>
    (combineLatest([
      sessionProgress(api)(),
      api.query.session.currentIndex,
      api.query.session.sessionLength,
      api.query.staking.lastEraLengthChange,
      api.query.staking.sessionsPerEra
    ]) as Observable<[BN, BlockNumber?, BlockNumber?, BlockNumber?, BlockNumber?]>).pipe(
      map(
        ([sessionProgress, currentIndex, sessionLength, lastEraLengthChange, sessionsPerEra]) =>
          (currentIndex || new BN(0))
            .sub(lastEraLengthChange || new BN(0))
            .mod(sessionsPerEra || new BN(1))
            .mul(sessionLength || new BN(1))
            .add(sessionProgress || new BN(0)
            )

      ),
      drr()
    );
}

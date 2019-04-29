// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterface$Rx } from '@plugnet/api/types';
import { BlockNumber } from '@plugnet/types';

import { drr } from '../util/drr';

export function eraLength (api: ApiInterface$Rx) {
  return (): Observable<BN> =>
    (combineLatest([
      api.query.session.sessionLength(),
      api.query.staking.sessionsPerEra()
    ]) as Observable<[BlockNumber?, BlockNumber?]>).pipe(
      map(
        ([sessionLength, sessionsPerEra]) =>
          (sessionLength || new BN(1)).mul(sessionsPerEra || new BN(1))
      ),
      drr()
    );
}

// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DerivedSessionInfo } from '../types';

import BN from 'bn.js';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { BlockNumber, Option } from '@polkadot/types';

import { drr } from '../util/drr';
import { bestNumber } from '../chain';

type Result = [BN, [BlockNumber, Option<BlockNumber>, BlockNumber, BlockNumber, BlockNumber]];

const ZERO = new BN(0);

// internal helper to just split the logic - take all inputs, do the calculations and combine
function createDerived ([bestNumber, [currentIndex, _lastLengthChange, sessionLength, lastEraLengthChange, sessionsPerEra]]: Result): DerivedSessionInfo {
  const eraLength = sessionLength.mul(sessionsPerEra);
  const lastLengthChange = _lastLengthChange
    ? _lastLengthChange.unwrapOr(ZERO)
    : ZERO;
  const sessionProgress = bestNumber
    .sub(lastLengthChange)
    .add(sessionLength)
    .mod(sessionLength);
  const eraProgress = (currentIndex)
    .sub(lastEraLengthChange)
    .mod(sessionsPerEra)
    .mul(sessionLength)
    .add(sessionProgress);

  return {
    currentIndex,
    eraLength,
    eraProgress,
    lastEraLengthChange,
    lastLengthChange,
    sessionLength,
    sessionsPerEra,
    sessionProgress
  };
}

/**
 * @description Retrieves all the session and era info and calculates specific valus on it sunh as the length of the session and eras
 */
export function info (api: ApiInterface$Rx) {
  return (): Observable<DerivedSessionInfo> =>
    // This is a much more optimal way to calculate since we only make a single call to the RPC backend
    // instead of making a subscription for each of the params (this means all others in session use)
    (combineLatest([
      bestNumber(api)(),
      api.queryMulti([
        api.query.session.currentIndex,
        api.query.session.lastLengthChange,
        api.query.session.sessionLength,
        api.query.staking.lastEraLengthChange,
        api.query.staking.sessionsPerEra
      ])
    ]) as any as Observable<Result>).pipe(
      map(createDerived),
      drr()
    );
}

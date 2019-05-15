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

const ZERO = new BN(0);
const ONE = new BN(1);

function createDerived ([bestNumber, [currentIndex, lastLengthChange, sessionLength, lastEraLengthChange, sessionsPerEra]]: [BN, [BlockNumber?, Option<BlockNumber>?, BlockNumber?, BlockNumber?, BlockNumber?]]): DerivedSessionInfo {
  const eraLength = (sessionLength || ONE).mul(sessionsPerEra || ONE);
  const sessionProgress = (bestNumber || ZERO)
    .sub(lastLengthChange ? (lastLengthChange).unwrapOr(ZERO) : ZERO)
    .add(sessionLength || ONE)
    .mod(sessionLength || ONE);
  const eraProgress = (currentIndex || ZERO)
    .sub(lastEraLengthChange || ZERO)
    .mod(sessionsPerEra || ONE)
    .mul(sessionLength || ONE)
    .add(sessionProgress || ZERO);

  return {
    currentIndex,
    eraLength,
    eraProgress,
    lastEraLengthChange,
    lastLengthChange: lastLengthChange
      ? lastLengthChange.unwrapOr(null)
      : undefined,
    sessionLength,
    sessionsPerEra,
    sessionProgress
  };
}

/**
 * @description Retrieves all the serrion and era info and calculates specific valus on it sunh as the length of the session and eras
 */
export function info (api: ApiInterface$Rx) {
  return (): Observable<DerivedSessionInfo> =>
    // This is a much more optimal way to calculate since we only make a single call to the RPC backend
    // instead of making a subscription for each of the params
    (combineLatest([
      bestNumber(api)(),
      api.queryMulti([
        api.query.session.currentIndex,
        api.query.session.lastLengthChange,
        api.query.session.sessionLength,
        api.query.staking.lastEraLengthChange,
        api.query.staking.sessionsPerEra
      ])
    ]) as any as Observable<[BN, [BlockNumber?, Option<BlockNumber>?, BlockNumber?, BlockNumber?, BlockNumber?]]>).pipe(
      map(createDerived),
      drr()
    );
}

// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DerivedSessionInfo } from '../types';

import BN from 'bn.js';
import { Observable, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { BlockNumber, Option } from '@polkadot/types';

import { drr } from '../util/drr';
import { bestNumber } from '../chain';

type Result0to94 = [BN, [BN, Option<BlockNumber>, BN, BN, BN]];
type Result = [BN, [BN, BN]];

const ZERO = new BN(0);

// internal helper to just split the logic - take all inputs, do the calculations and combine
function createDerived0to94 ([bestNumber, [currentIndex, _lastLengthChange, sessionLength, lastEraLengthChange, sessionsPerEra]]: Result0to94): DerivedSessionInfo {
  const eraLength = sessionLength.mul(sessionsPerEra);
  const lastLengthChange = _lastLengthChange
    ? _lastLengthChange.unwrapOr(ZERO)
    : ZERO;
  const sessionProgress = bestNumber
    .sub(lastLengthChange)
    .add(sessionLength)
    .mod(sessionLength);
  const currentEra = (currentIndex)
    .sub(lastEraLengthChange)
    .mod(sessionsPerEra);
  const eraProgress = currentEra
    .mul(sessionLength)
    .add(sessionProgress);

  return {
    currentEra,
    currentIndex,
    eraLength,
    eraProgress,
    lastEraLengthChange,
    lastLengthChange,
    sessionLength,
    sessionsPerEra,
    sessionProgress
  } as unknown as DerivedSessionInfo;
}

function createDerived ([sessionsPerEra, [currentIndex, currentEra]]: Result): DerivedSessionInfo {
  const eraProgress = (currentIndex).mod(sessionsPerEra);

  return {
    currentEra,
    currentIndex,
    eraLength: ZERO,
    eraProgress,
    lastEraLengthChange: ZERO,
    lastLengthChange: ZERO,
    sessionLength: ZERO,
    sessionsPerEra,
    sessionProgress: ZERO
  } as unknown as DerivedSessionInfo;
}

/**
 * @description Retrieves all the session and era info and calculates specific values on it as the length of the session and eras
 */
export function info (api: ApiInterfaceRx): () => Observable<DerivedSessionInfo> {
  return (): Observable<DerivedSessionInfo> => {
    // With substrate `spec_version 94`, the era and session has been explicitly exposed as `parameter_types`.
    // pre-94 we had more info and needed to calculate (handle old/Alex first)
    // https://github.com/paritytech/substrate/commit/dbf322620948935d2bbae214504e6c668c3073ed#diff-c29f42d6b931fa93ba038dbbbfec3055
    return api.query.session.lastLengthChange
      ? (
        combineLatest([
          bestNumber(api)(),
          api.queryMulti([
            api.query.session.currentIndex,
            api.query.session.lastLengthChange,
            api.query.session.sessionLength,
            api.query.staking.lastEraLengthChange,
            api.query.staking.sessionsPerEra
          ])
        ]) as any as Observable<Result0to94>
      ).pipe(
        map(createDerived0to94),
        drr()
      )
      : (
        combineLatest([
          // sessionsPerEra:
          // substrate spec_version >= 94 : get from parameter_types exposed as api.consts
          // https://github.com/paritytech/substrate/pull/2802/files#diff-5e5e1c3aec9ddfde0a9054d062ab3db9R156
          of(api.consts.staking.sessionsPerEra),
          api.queryMulti([
            api.query.session.currentIndex,
            api.query.staking.currentEra
          ])
        ]) as unknown as Observable<Result>
      ).pipe(
        map(createDerived),
        drr()
      );
  };
}

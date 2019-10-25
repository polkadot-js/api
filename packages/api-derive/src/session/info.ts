// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BlockNumber, EraIndex, SessionIndex } from '@polkadot/types/interfaces';
import { DerivedSessionInfo } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Option, u64, createType } from '@polkadot/types';

import { drr } from '../util/drr';
import { bestNumber } from '../chain';

type Result94Session = [SessionIndex, Option<BlockNumber>, BlockNumber, BlockNumber, SessionIndex];
type Result94 = [BlockNumber, Result94Session];

type ResultIndex = [SessionIndex, EraIndex];
type ResultSlots = [u64, u64, u64];
type ResultType = [boolean, boolean, u64, SessionIndex];
type Result = [ResultType, ResultSlots, ResultIndex];

// internal helper to just split the logic - take all inputs, do the calculations and combine
function createDerived94 ([bestNumber, [currentIndex, _lastLengthChange, sessionLength, lastEraLengthChange, sessionsPerEra]]: Result94): DerivedSessionInfo {
  const lastLengthChange = (_lastLengthChange && _lastLengthChange.unwrapOr(null)) || createType('BlockNumber');
  const sessionProgress = bestNumber
    .sub(lastLengthChange)
    .add(sessionLength)
    .mod(sessionLength);
  const currentEra = currentIndex
    .sub(lastEraLengthChange)
    .mod(sessionsPerEra);
  const eraProgress = currentEra
    .mul(sessionLength)
    .add(sessionProgress);

  return {
    currentEra: createType('EraIndex', currentEra),
    currentIndex,
    eraLength: createType('BlockNumber', sessionLength.mul(sessionsPerEra)),
    eraProgress: createType('BlockNumber', eraProgress),
    isEpoch: false,
    lastEraLengthChange,
    lastLengthChange,
    sessionLength,
    sessionsPerEra,
    sessionProgress: createType('BlockNumber', sessionProgress)
  };
}

function createDerivedLatest ([[hasBabe, isGenesisSlot, epochDuration, sessionsPerEra], [currentSlot, epochIndex, epochOrGenesisStartSlot], [currentIndex, currentEra]]: Result): DerivedSessionInfo {
  const epochStartSlot = isGenesisSlot
    ? epochIndex
      .mul(epochDuration)
      .add(epochOrGenesisStartSlot)
    : epochOrGenesisStartSlot;
  const sessionProgress = currentSlot.sub(epochStartSlot);
  const eraProgress = epochIndex
    .mod(sessionsPerEra)
    .mul(epochDuration)
    .add(sessionProgress);

  return {
    currentEra,
    currentIndex,
    eraLength: createType('BlockNumber', sessionsPerEra.mul(epochDuration)),
    eraProgress: createType('BlockNumber', eraProgress),
    isEpoch: hasBabe,
    lastEraLengthChange: createType('BlockNumber'),
    lastLengthChange: createType('BlockNumber', epochStartSlot),
    sessionLength: epochDuration,
    sessionsPerEra,
    sessionProgress: createType('BlockNumber', sessionProgress)
  };
}

function info94 (api: ApiInterfaceRx): Observable<DerivedSessionInfo> {
  return combineLatest([
    bestNumber(api)(),
    api.queryMulti<Result94Session>([
      api.query.session.currentIndex,
      api.query.session.lastLengthChange,
      api.query.session.sessionLength,
      api.query.staking.lastEraLengthChange,
      api.query.staking.sessionsPerEra
    ])
  ]).pipe(
    map(createDerived94),
    drr()
  );
}

function infoLatest (api: ApiInterfaceRx): Observable<DerivedSessionInfo> {
  const hasBabe = !!api.consts.babe;

  return combineLatest([
    of([
      hasBabe,
      hasBabe && !!api.query.babe.genesisSlot,
      hasBabe
        ? api.consts.babe.epochDuration as u64
        : createType('u64', 1),
      api.consts.staking.sessionsPerEra as SessionIndex
    ] as ResultType),
    hasBabe
      ? api.queryMulti<ResultSlots>([
        api.query.babe.currentSlot,
        api.query.babe.epochIndex,
        api.query.babe.genesisSlot
          ? api.query.babe.genesisSlot
          : api.query.babe.epochStartSlot
      ])
      : of([createType('u64', 1), createType('u64', 1), createType('u64', 1)] as ResultSlots),
    api.queryMulti<ResultIndex>([
      api.query.session.currentIndex,
      api.query.staking.currentEra
    ])
  ]).pipe(
    map(createDerivedLatest),
    drr()
  );
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
      ? info94(api) // 1.x
      : infoLatest(api); // 2.x
  };
}

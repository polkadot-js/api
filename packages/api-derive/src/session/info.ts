// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BlockNumber, SessionIndex } from '@polkadot/types/interfaces';
import { DerivedSessionInfo, DeriveSessionIndexes } from '../types';

import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Option, u64, createType } from '@polkadot/types';

import { drr } from '../util';
import { bestNumber } from '../chain';
import { indexes } from './indexes';

type ResultV1Session = [Option<BlockNumber>, BlockNumber, BlockNumber, SessionIndex];
type ResultV1 = [BlockNumber, DeriveSessionIndexes, ResultV1Session];

type ResultSlots = [u64, u64, u64, SessionIndex];
type ResultType = [boolean, u64, SessionIndex];
type Result = [ResultType, DeriveSessionIndexes, ResultSlots];

interface Calls {
  bestNumberCall (): Observable<BlockNumber>;
  indexesCall (): Observable<DeriveSessionIndexes>;
}

// internal helper to just split the logic - take all inputs, do the calculations and combine
function createDerivedV1 ([bestNumber, { currentIndex }, [_lastLengthChange, sessionLength, lastEraLengthChange, sessionsPerEra]]: ResultV1): DerivedSessionInfo {
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

function createDerivedLatest ([[hasBabe, epochDuration, sessionsPerEra], { currentIndex, currentEra }, [currentSlot, epochIndex, epochOrGenesisStartSlot, currentEraStartSessionIndex]]: Result): DerivedSessionInfo {
  const epochStartSlot = epochIndex.mul(epochDuration).add(epochOrGenesisStartSlot);
  const sessionProgress = currentSlot.sub(epochStartSlot);
  const eraProgress = currentIndex.sub(currentEraStartSessionIndex).add(sessionProgress);

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

function infoV1 (api: ApiInterfaceRx, { bestNumberCall, indexesCall }: Calls): Observable<DerivedSessionInfo> {
  return combineLatest([
    bestNumberCall(),
    indexesCall(),
    api.queryMulti<ResultV1Session>([
      api.query.session.lastLengthChange,
      api.query.session.sessionLength,
      api.query.staking.lastEraLengthChange,
      api.query.staking.sessionsPerEra
    ])
  ]).pipe(
    map(createDerivedV1),
    drr()
  );
}

function infoLatestAura (api: ApiInterfaceRx, { indexesCall }: Calls): Observable<DerivedSessionInfo> {
  return indexesCall().pipe(
    map((indexes): DerivedSessionInfo =>
      createDerivedLatest([
        [false, createType('u64', 1), api.consts.staking.sessionsPerEra as SessionIndex],
        indexes,
        [createType('u64', 1), createType('u64', 1), createType('u64', 1), createType('SessionIndex', 1)]
      ])
    ),
    drr()
  );
}

function infoLatestBabe (api: ApiInterfaceRx, { indexesCall }: Calls): Observable<DerivedSessionInfo> {
  return combineLatest([
    indexesCall(),
    api.queryMulti<ResultSlots>([
      api.query.babe.currentSlot,
      api.query.babe.epochIndex,
      api.query.babe.genesisSlot,
      api.query.staking.currentEraStartSessionIndex
    ])
  ]).pipe(
    map(([indexes, slots]: [DeriveSessionIndexes, ResultSlots]): DerivedSessionInfo =>
      createDerivedLatest([
        [true, api.consts.babe.epochDuration as u64, api.consts.staking.sessionsPerEra as SessionIndex],
        indexes,
        slots
      ])
    ),
    drr()
  );
}

/**
 * @description Retrieves all the session and era info and calculates specific values on it as the length of the session and eras
 */
export function info (api: ApiInterfaceRx): () => Observable<DerivedSessionInfo> {
  const calls = {
    bestNumberCall: bestNumber(api),
    indexesCall: indexes(api)
  };

  return (): Observable<DerivedSessionInfo> => {
    return api.consts.staking
      ? api.consts.babe
        ? infoLatestBabe(api, calls) // 2.x with Babe
        : infoLatestAura(api, calls) // 2.x with Aura (not all info there)
      : infoV1(api, calls); // 1.x
  };
}

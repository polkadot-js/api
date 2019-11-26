// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BlockNumber, SessionIndex } from '@polkadot/types/interfaces';
import { DerivedSessionInfo, DeriveSessionIndexes } from '../types';

import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Option, u64, createType } from '@polkadot/types';

import { memo } from '../util';

type ResultV1Session = [Option<BlockNumber>, BlockNumber, BlockNumber, SessionIndex];
type ResultV1 = [BlockNumber, DeriveSessionIndexes, ResultV1Session];

type ResultSlots = [u64, u64, u64, SessionIndex];
type ResultType = [boolean, u64, SessionIndex];
type Result = [ResultType, DeriveSessionIndexes, ResultSlots];

// internal helper to just split the logic - take all inputs, do the calculations and combine
function createDerivedV1 (api: ApiInterfaceRx, [bestNumber, { currentIndex, validatorCount }, [_lastLengthChange, sessionLength, lastEraLengthChange, sessionsPerEra]]: ResultV1): DerivedSessionInfo {
  const lastLengthChange = _lastLengthChange?.unwrapOr(null) || createType(api.registry, 'BlockNumber');
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
    currentEra: createType(api.registry, 'EraIndex', currentEra),
    currentIndex,
    eraLength: createType(api.registry, 'BlockNumber', sessionLength.mul(sessionsPerEra)),
    eraProgress: createType(api.registry, 'BlockNumber', eraProgress),
    isEpoch: false,
    sessionLength,
    sessionsPerEra,
    sessionProgress: createType(api.registry, 'BlockNumber', sessionProgress),
    validatorCount
  };
}

function createDerivedLatest (api: ApiInterfaceRx, [[hasBabe, epochDuration, sessionsPerEra], { currentIndex, currentEra, validatorCount }, [currentSlot, epochIndex, epochOrGenesisStartSlot, currentEraStartSessionIndex]]: Result): DerivedSessionInfo {
  const epochStartSlot = epochIndex.mul(epochDuration).add(epochOrGenesisStartSlot);
  const sessionProgress = currentSlot.sub(epochStartSlot);
  const eraProgress = currentIndex.sub(currentEraStartSessionIndex).mul(epochDuration).add(sessionProgress);

  return {
    currentEra,
    currentIndex,
    eraLength: createType(api.registry, 'BlockNumber', sessionsPerEra.mul(epochDuration)),
    eraProgress: createType(api.registry, 'BlockNumber', eraProgress),
    isEpoch: hasBabe,
    sessionLength: epochDuration,
    sessionsPerEra,
    sessionProgress: createType(api.registry, 'BlockNumber', sessionProgress),
    validatorCount
  };
}

function infoV1 (api: ApiInterfaceRx): Observable<DerivedSessionInfo> {
  return combineLatest([
    api.derive.chain.bestNumber(),
    api.derive.session.indexes(),
    api.queryMulti<ResultV1Session>([
      api.query.session.lastLengthChange,
      api.query.session.sessionLength,
      api.query.staking.lastEraLengthChange,
      api.query.staking.sessionsPerEra
    ])
  ]).pipe(
    map((result): DerivedSessionInfo => createDerivedV1(api, result))
  );
}

function infoLatestAura (api: ApiInterfaceRx): Observable<DerivedSessionInfo> {
  return api.derive.session.indexes().pipe(
    map((indexes): DerivedSessionInfo =>
      createDerivedLatest(api, [
        [false, createType(api.registry, 'u64', 1), api.consts.staking.sessionsPerEra],
        indexes,
        [createType(api.registry, 'u64', 1), createType(api.registry, 'u64', 1), createType(api.registry, 'u64', 1), createType(api.registry, 'SessionIndex', 1)]
      ])
    )
  );
}

function infoLatestBabe (api: ApiInterfaceRx): Observable<DerivedSessionInfo> {
  return combineLatest([
    api.derive.session.indexes(),
    api.queryMulti<ResultSlots>([
      api.query.babe.currentSlot,
      api.query.babe.epochIndex,
      api.query.babe.genesisSlot,
      api.query.staking.currentEraStartSessionIndex
    ])
  ]).pipe(
    map(([indexes, slots]: [DeriveSessionIndexes, ResultSlots]): DerivedSessionInfo =>
      createDerivedLatest(api, [
        [true, api.consts.babe.epochDuration, api.consts.staking.sessionsPerEra],
        indexes,
        slots
      ])
    )
  );
}

/**
 * @description Retrieves all the session and era info and calculates specific values on it as the length of the session and eras
 */
export function info (api: ApiInterfaceRx): () => Observable<DerivedSessionInfo> {
  const query = api.consts.staking
    ? api.consts.babe
      ? infoLatestBabe // 2.x with Babe
      : infoLatestAura // 2.x with Aura (not all info there)
    : infoV1;

  return memo((): Observable<DerivedSessionInfo> =>
    query(api));
}

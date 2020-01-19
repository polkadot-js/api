// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { SessionIndex } from '@polkadot/types/interfaces';
import { DerivedSessionInfo, DeriveSessionIndexes } from '../types';

import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { u64, createType } from '@polkadot/types';

import { memo } from '../util';

type ResultSlots = [u64, u64, u64, SessionIndex];
type ResultType = [boolean, u64, SessionIndex];
type Result = [ResultType, DeriveSessionIndexes, ResultSlots];

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

function infoLatestAura (api: ApiInterfaceRx): Observable<DerivedSessionInfo> {
  return api.derive.session.indexes().pipe(
    map((indexes): DerivedSessionInfo =>
      createDerivedLatest(api, [
        [false, createType(api.registry, 'u64', 1), api.consts.staking?.sessionsPerEra || createType(api.registry, 'SessionIndex', 1)],
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
  const query = api.consts.babe
    ? infoLatestBabe // 2.x with Babe
    : infoLatestAura; // 2.x with Aura (not all info there)

  return memo((): Observable<DerivedSessionInfo> =>
    query(api));
}

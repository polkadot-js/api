// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { SessionIndex } from '@polkadot/types/interfaces';
import { DerivedSessionInfo, DeriveSessionIndexes } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Option, u64 } from '@polkadot/types';

import { memo } from '../util';

type ResultSlots = [u64, u64, u64, Option<SessionIndex>];
type ResultSlotsFlat = [u64, u64, u64, SessionIndex];
type ResultType = [boolean, u64, SessionIndex];
type Result = [ResultType, DeriveSessionIndexes, ResultSlotsFlat];

function createDerived (api: ApiInterfaceRx, [[hasBabe, epochDuration, sessionsPerEra], { activeEra, activeEraStart, currentEra, currentIndex, validatorCount }, [currentSlot, epochIndex, epochOrGenesisStartSlot, activeEraStartSessionIndex]]: Result): DerivedSessionInfo {
  const epochStartSlot = epochIndex.mul(epochDuration).add(epochOrGenesisStartSlot);
  const sessionProgress = currentSlot.sub(epochStartSlot);
  const eraProgress = currentIndex.sub(activeEraStartSessionIndex).mul(epochDuration).add(sessionProgress);

  return {
    activeEra,
    activeEraStart,
    currentEra,
    currentIndex,
    eraLength: api.registry.createType('BlockNumber', sessionsPerEra.mul(epochDuration)),
    eraProgress: api.registry.createType('BlockNumber', eraProgress),
    isEpoch: hasBabe,
    sessionLength: epochDuration,
    sessionsPerEra,
    sessionProgress: api.registry.createType('BlockNumber', sessionProgress),
    validatorCount
  };
}

function queryAura (api: ApiInterfaceRx): Observable<DerivedSessionInfo> {
  return api.derive.session.indexes().pipe(
    map((indexes): DerivedSessionInfo =>
      createDerived(api, [
        [
          false,
          api.registry.createType('u64', 1),
          api.consts.staking?.sessionsPerEra || api.registry.createType('SessionIndex', 1)
        ],
        indexes,
        [
          api.registry.createType('u64', 1),
          api.registry.createType('u64', 1),
          api.registry.createType('u64', 1),
          api.registry.createType('SessionIndex', 1)
        ]
      ])
    )
  );
}

function queryBabe (api: ApiInterfaceRx): Observable<[DeriveSessionIndexes, ResultSlotsFlat]> {
  return api.derive.session.indexes().pipe(
    switchMap((indexes): Observable<[DeriveSessionIndexes, ResultSlots]> =>
      combineLatest([
        of(indexes),
        api.queryMulti<ResultSlots>([
          api.query.babe.currentSlot,
          api.query.babe.epochIndex,
          api.query.babe.genesisSlot,
          [api.query.staking.erasStartSessionIndex, indexes.activeEra]
        ])
      ])
    ),
    map(([indexes, [currentSlot, epochIndex, genesisSlot, optStartIndex]]): [DeriveSessionIndexes, ResultSlotsFlat] => [
      indexes, [currentSlot, epochIndex, genesisSlot, optStartIndex.unwrapOr(api.registry.createType('SessionIndex', 1))]
    ])
  );
}

function queryBabeNoHistory (api: ApiInterfaceRx): Observable<[DeriveSessionIndexes, ResultSlotsFlat]> {
  return combineLatest([
    api.derive.session.indexes(),
    api.queryMulti<ResultSlotsFlat>([
      api.query.babe.currentSlot,
      api.query.babe.epochIndex,
      api.query.babe.genesisSlot,
      api.query.staking.currentEraStartSessionIndex
    ])
  ]);
}

/**
 * @description Retrieves all the session and era query and calculates specific values on it as the length of the session and eras
 */
export function info (api: ApiInterfaceRx): () => Observable<DerivedSessionInfo> {
  return memo((): Observable<DerivedSessionInfo> =>
    api.consts.babe
      ? (api.query.staking.erasStartSessionIndex
        ? queryBabe(api) // 2.x with Babe
        : queryBabeNoHistory(api)
      ).pipe(
        map(([indexes, slots]: [DeriveSessionIndexes, ResultSlotsFlat]): DerivedSessionInfo =>
          createDerived(api, [
            [true, api.consts.babe.epochDuration, api.consts.staking.sessionsPerEra],
            indexes,
            slots
          ])
        )
      )
      : queryAura(api)
  );
}

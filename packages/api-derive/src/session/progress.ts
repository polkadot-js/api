// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { SessionIndex } from '@polkadot/types/interfaces';
import { DeriveSessionInfo, DeriveSessionProgress } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Option, u64 } from '@polkadot/types';
import { isFunction } from '@polkadot/util';

import { memo } from '../util';

type ResultSlots = [u64, u64, u64, Option<SessionIndex>];
type ResultSlotsFlat = [u64, u64, u64, SessionIndex];

function createDerive (api: ApiInterfaceRx, info: DeriveSessionInfo, [currentSlot, epochIndex, epochOrGenesisStartSlot, activeEraStartSessionIndex]: ResultSlotsFlat): DeriveSessionProgress {
  const epochStartSlot = epochIndex.mul(info.sessionLength).iadd(epochOrGenesisStartSlot);
  const sessionProgress = currentSlot.sub(epochStartSlot);
  const eraProgress = info.currentIndex.sub(activeEraStartSessionIndex).imul(info.sessionLength).iadd(sessionProgress);

  return {
    ...info,
    eraProgress: api.registry.createType('BlockNumber', eraProgress),
    sessionProgress: api.registry.createType('BlockNumber', sessionProgress)
  };
}

function queryAura (api: ApiInterfaceRx): Observable<DeriveSessionProgress> {
  return api.derive.session.info().pipe(
    map((info): DeriveSessionProgress => ({
      ...info,
      eraProgress: api.registry.createType('BlockNumber'),
      sessionProgress: api.registry.createType('BlockNumber')
    }))
  );
}

function queryBabe (api: ApiInterfaceRx): Observable<[DeriveSessionInfo, ResultSlotsFlat]> {
  return api.derive.session.info().pipe(
    switchMap((info): Observable<[DeriveSessionInfo, ResultSlots]> =>
      combineLatest([
        of(info),
        api.queryMulti<ResultSlots>([
          api.query.babe.currentSlot,
          api.query.babe.epochIndex,
          api.query.babe.genesisSlot,
          [api.query.staking.erasStartSessionIndex, info.activeEra]
        ])
      ])
    ),
    map(([info, [currentSlot, epochIndex, genesisSlot, optStartIndex]]): [DeriveSessionInfo, ResultSlotsFlat] => [
      info, [currentSlot, epochIndex, genesisSlot, optStartIndex.unwrapOr(api.registry.createType('SessionIndex', 1))]
    ])
  );
}

function queryBabeNoHistory (api: ApiInterfaceRx): Observable<[DeriveSessionInfo, ResultSlotsFlat]> {
  return combineLatest([
    api.derive.session.info(),
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
export function progress (api: ApiInterfaceRx): () => Observable<DeriveSessionProgress> {
  return memo((): Observable<DeriveSessionProgress> =>
    api.consts.babe
      ? (
        isFunction(api.query.staking.erasStartSessionIndex)
          ? queryBabe(api) // 2.x with Babe
          : queryBabeNoHistory(api)
      ).pipe(
        map(([info, slots]: [DeriveSessionInfo, ResultSlotsFlat]): DeriveSessionProgress =>
          createDerive(api, info, slots)
        )
      )
      : queryAura(api)
  );
}

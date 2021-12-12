// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Option, u64 } from '@polkadot/types';
import type { BlockNumber, SessionIndex } from '@polkadot/types/interfaces';
import type { DeriveSessionInfo, DeriveSessionProgress } from '../types';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { memo } from '../util';

type ResultSlotsNoSession = [u64, u64, u64];
type ResultSlots = [u64, u64, u64, Option<SessionIndex>];
type ResultSlotsFlat = [u64, u64, u64, SessionIndex];

function withProgressField (field: 'eraLength' | 'eraProgress' | 'sessionProgress'): (instanceId: string, api: ApiInterfaceRx) => () => Observable<BlockNumber> {
  return (instanceId: string, api: ApiInterfaceRx) =>
    memo(instanceId, (): Observable<BlockNumber> =>
      api.derive.session.progress().pipe(
        map((info) => info[field])
      )
    );
}

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
    switchMap((info): Observable<[DeriveSessionInfo, ResultSlots | ResultSlotsNoSession]> =>
      combineLatest([
        of(info),
        // we may have no staking, but have babe (permissioned)
        api.query.staking?.erasStartSessionIndex
          ? api.queryMulti<ResultSlots>([
            api.query.babe.currentSlot,
            api.query.babe.epochIndex,
            api.query.babe.genesisSlot,
            [api.query.staking.erasStartSessionIndex, info.activeEra]
          ])
          : api.queryMulti<ResultSlotsNoSession>([
            api.query.babe.currentSlot,
            api.query.babe.epochIndex,
            api.query.babe.genesisSlot
          ])
      ])
    ),
    map(([info, [currentSlot, epochIndex, genesisSlot, optStartIndex]]): [DeriveSessionInfo, ResultSlotsFlat] => [
      info, [currentSlot, epochIndex, genesisSlot, optStartIndex && optStartIndex.isSome ? optStartIndex.unwrap() : api.registry.createType('SessionIndex', 1)]
    ])
  );
}

/**
 * @description Retrieves all the session and era query and calculates specific values on it as the length of the session and eras
 */
export function progress (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveSessionProgress> {
  return memo(instanceId, (): Observable<DeriveSessionProgress> =>
    api.query.babe
      ? queryBabe(api).pipe(
        map(([info, slots]: [DeriveSessionInfo, ResultSlotsFlat]): DeriveSessionProgress =>
          createDerive(api, info, slots)
        )
      )
      : queryAura(api)
  );
}

export const eraLength = withProgressField('eraLength');
export const eraProgress = withProgressField('eraProgress');
export const sessionProgress = withProgressField('sessionProgress');

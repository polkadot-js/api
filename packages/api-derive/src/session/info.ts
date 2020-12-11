// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { u64 } from '@polkadot/types';
import type { SessionIndex } from '@polkadot/types/interfaces';
import type { Observable } from '@polkadot/x-rxjs';
import type { DeriveSessionIndexes, DeriveSessionInfo } from '../types';

import { map } from '@polkadot/x-rxjs/operators';

import { memo } from '../util';

type ResultType = [boolean, u64, SessionIndex];
type Result = [ResultType, DeriveSessionIndexes];

function createDerive (api: ApiInterfaceRx, [[hasBabe, epochDuration, sessionsPerEra], { activeEra, activeEraStart, currentEra, currentIndex, validatorCount }]: Result): DeriveSessionInfo {
  return {
    activeEra,
    activeEraStart,
    currentEra,
    currentIndex,
    eraLength: api.registry.createType('BlockNumber', sessionsPerEra.mul(epochDuration)),
    isEpoch: hasBabe,
    sessionLength: epochDuration,
    sessionsPerEra,
    validatorCount
  };
}

function queryAura (api: ApiInterfaceRx): Observable<DeriveSessionInfo> {
  return api.derive.session.indexes().pipe(
    map((indexes): DeriveSessionInfo =>
      createDerive(api, [
        [
          false,
          api.registry.createType('u64', 1),
          api.consts.staking?.sessionsPerEra || api.registry.createType('SessionIndex', 1)
        ],
        indexes
      ])
    )
  );
}

function queryBabe (api: ApiInterfaceRx): Observable<DeriveSessionInfo> {
  return api.derive.session.indexes().pipe(
    map((indexes) =>
      createDerive(api, [
        [
          true,
          api.consts.babe.epochDuration,
          api.consts.staking.sessionsPerEra
        ],
        indexes
      ])
    )
  );
}

/**
 * @description Retrieves all the session and era query and calculates specific values on it as the length of the session and eras
 */
export function info (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveSessionInfo> {
  return memo(instanceId, (): Observable<DeriveSessionInfo> =>
    api.consts.babe
      ? queryBabe(api)
      : queryAura(api)
  );
}

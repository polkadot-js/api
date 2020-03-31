// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { SessionIndex } from '@polkadot/types/interfaces';
import { DeriveSessionInfo, DeriveSessionIndexes } from '../types';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { u64 } from '@polkadot/types';

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
export function info (api: ApiInterfaceRx): () => Observable<DeriveSessionInfo> {
  return memo((): Observable<DeriveSessionInfo> =>
    api.consts.babe
      ? queryBabe(api)
      : queryAura(api)
  );
}

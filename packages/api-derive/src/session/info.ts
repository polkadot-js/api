// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { u32, u64 } from '@polkadot/types-codec';
import type { DeriveApi, DeriveSessionInfo } from '../types';

import { map } from 'rxjs';

import { memo } from '../util';

/**
 * @description Retrieves all the session and era query and calculates specific values on it as the length of the session and eras
 */
export function info (instanceId: string, api: DeriveApi): () => Observable<DeriveSessionInfo> {
  return memo(instanceId, (): Observable<DeriveSessionInfo> =>
    api.derive.session.indexes().pipe(
      map((indexes) => {
        const sessionLength = (api.consts?.babe?.epochDuration as u64) || api.registry.createType('u64', 1);
        const sessionsPerEra = (api.consts?.staking?.sessionsPerEra as u32) || api.registry.createType('SessionIndex', 1);

        return {
          ...indexes,
          eraLength: api.registry.createType('BlockNumber', sessionsPerEra.mul(sessionLength)),
          isEpoch: !!api.query.babe,
          sessionLength,
          sessionsPerEra
        };
      })
    )
  );
}

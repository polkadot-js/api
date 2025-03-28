// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Option, u32 } from '@polkadot/types';
import type { ActiveEraInfo, EraIndex, Moment, SessionIndex } from '@polkadot/types/interfaces';
import type { DeriveApi, DeriveSessionIndexes } from '../types.js';

import { map, of } from 'rxjs';

import { memo } from '../util/index.js';

// parse into Indexes
function parse ([currentIndex, activeEra, activeEraStart, currentEra, validatorCount]: [SessionIndex, EraIndex, Option<Moment>, EraIndex, u32]): DeriveSessionIndexes {
  return {
    activeEra,
    activeEraStart,
    currentEra,
    currentIndex,
    validatorCount
  };
}

// query based on latest
function queryStaking (api: DeriveApi): Observable<DeriveSessionIndexes> {
  return api.queryMulti<[SessionIndex, Option<ActiveEraInfo>, Option<EraIndex>, u32]>([
    api.query.session.currentIndex,
    api.query.staking.activeEra,
    api.query.staking.currentEra,
    api.query.staking.validatorCount
  ]).pipe(
    map(([currentIndex, activeOpt, currentEra, validatorCount]): DeriveSessionIndexes => {
      const { index, start } = activeOpt.unwrapOrDefault();

      return parse([
        currentIndex,
        index,
        start,
        currentEra.unwrapOrDefault(),
        validatorCount
      ]);
    })
  );
}

// query based on latest
function querySession (api: DeriveApi): Observable<DeriveSessionIndexes> {
  return api.query.session.currentIndex().pipe(
    map((currentIndex): DeriveSessionIndexes => parse([
      currentIndex,
      api.registry.createType('EraIndex'),
      api.registry.createType('Option<Moment>'),
      api.registry.createType('EraIndex'),
      api.registry.createType('u32')
    ]))
  );
}

// empty set when none is available
function empty (api: DeriveApi): Observable<DeriveSessionIndexes> {
  return of(parse([
    api.registry.createType('SessionIndex', 1),
    api.registry.createType('EraIndex'),
    api.registry.createType('Option<Moment>'),
    api.registry.createType('EraIndex'),
    api.registry.createType('u32')
  ]));
}

/**
 * @name indexes
 * @description Retrieves session-related index data, adapting to whether
 * the chain has staking enabled.
 * @example
 * ```javascript
 * api.derive.session.indexes((indexes) => {
 *   console.log(`Current session index: ${indexes.currentIndex}`);
 *   console.log(`Validator count: ${indexes.validatorCount}`);
 * });
 * ```
 */
export function indexes (instanceId: string, api: DeriveApi): () => Observable<DeriveSessionIndexes> {
  return memo(instanceId, (): Observable<DeriveSessionIndexes> =>
    api.query.session
      ? api.query.staking
        ? queryStaking(api)
        : querySession(api)
      : empty(api)
  );
}

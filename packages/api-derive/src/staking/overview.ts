// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { DeriveApi, DeriveStakingOverview } from '../types.js';

import { combineLatest, map } from 'rxjs';

import { objectSpread } from '@polkadot/util';

import { memo } from '../util/index.js';

/**
 * @name overview
 * @description Retrieve the staking overview, including elected validators and points earned.
 * @example
 * ```javascript
 * const {
 *   activeEra,
 *   activeEraStart,
 *   currentEra,
 *   currentIndex,
 *   nextElected,
 *   validatorCount,
 *   validators,
 * } = await api.derive.staking.overview();
 * ```
 */
export function overview (instanceId: string, api: DeriveApi): () => Observable<DeriveStakingOverview> {
  return memo(instanceId, (): Observable<DeriveStakingOverview> =>
    combineLatest([
      api.derive.session.indexes(),
      api.derive.staking.validators()
    ]).pipe(
      map(([indexes, { nextElected, validators }]): DeriveStakingOverview =>
        objectSpread({}, indexes, {
          nextElected,
          validators
        })
      )
    ));
}

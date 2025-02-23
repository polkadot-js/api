// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { PalletStakingEraRewardPoints } from '@polkadot/types/lookup';
import type { DeriveApi } from '../types.js';

import { switchMap } from 'rxjs';

import { memo } from '../util/index.js';

/**
 * @name currentPoints
 * @description Retrieve the staking overview, including elected and points earned
 * @example
 * ```javascript
 * const currentPoints = await api.derive.staking.currentPoints();
 * console.log(currentPoints.toHuman());
 * ```
 */
export function currentPoints (instanceId: string, api: DeriveApi): () => Observable<PalletStakingEraRewardPoints> {
  return memo(instanceId, (): Observable<PalletStakingEraRewardPoints> =>
    api.derive.session.indexes().pipe(
      switchMap(({ activeEra }) =>
        api.query.staking.erasRewardPoints(activeEra)
      )
    ));
}

// Copyright 2017-2026 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { QueryableStorageEntry } from '@polkadot/api-base/types';
import type { Option } from '@polkadot/types';
import type { Balance, EraIndex } from '@polkadot/types/interfaces';
import type { DeriveApi, DeriveEraRewards } from '../types.js';

import { combineLatest, map, of } from 'rxjs';

import { memo } from '../util/index.js';
import { filterCachedEras, getEraMultiCache, setEraMultiCache } from './cache.js';
import { erasHistoricApply, filterEras } from './util.js';

const CACHE_KEY = 'eraRewards';

function mapRewards (api: DeriveApi, eras: EraIndex[], optRewards: Option<Balance>[], budgets: Balance[]): DeriveEraRewards[] {
  return eras.map((era, index): DeriveEraRewards => ({
    era,
    eraReward: api.registry.createType('Balance', optRewards[index].unwrapOrDefault().add(budgets[index]))
  }));
}

export function _erasRewards (instanceId: string, api: DeriveApi): (eras: EraIndex[], withActive: boolean) => Observable<DeriveEraRewards[]> {
  return memo(instanceId, (eras: EraIndex[], withActive: boolean): Observable<DeriveEraRewards[]> => {
    if (!eras.length) {
      return of([]);
    }

    const cached = getEraMultiCache<DeriveEraRewards>(CACHE_KEY, eras, withActive);
    const remaining = filterEras(eras, cached);

    if (!remaining.length) {
      return of(cached);
    }

    // pallet-staking-async pays validators from a second pot, `ErasValidatorIncentiveBudget`.
    // When that storage is present, add the incentive budget to the era reward so derived
    // totals are not short on the self-stake incentive stream. Non-async and pre-rollout
    // chains have no such storage (or a zero budget), in which case the era reward is
    // unchanged.
    const optIncentive = (api.query.staking as unknown as Record<string, QueryableStorageEntry<'rxjs'>>)['erasValidatorIncentiveBudget'];
    const budgets = optIncentive
      ? optIncentive.multi<Balance>(remaining)
      : of(remaining.map(() => api.registry.createType('Balance')));

    return combineLatest([
      api.query.staking.erasValidatorReward.multi(remaining),
      budgets
    ]).pipe(
      map(([rewards, budgets]) =>
        filterCachedEras(eras, cached, setEraMultiCache(CACHE_KEY, withActive, mapRewards(api, remaining, rewards, budgets)))
      )
    );
  });
}

/**
 * @name erasRewards
 * @description Retrieves rewards for historical eras.
 * @param {boolean} withActive? (Optional) Whether to include the active era in the result.
 * @example
 * ```javascript
 * const rewards = await api.derive.staking.erasRewards(true);
 * ```
 */
export const erasRewards = /*#__PURE__*/ erasHistoricApply('_erasRewards');

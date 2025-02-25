// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { EraIndex } from '@polkadot/types/interfaces';
import type { PalletStakingEraRewardPoints } from '@polkadot/types/lookup';
import type { DeriveApi, DeriveEraPoints, DeriveEraValPoints } from '../types.js';

import { map, of } from 'rxjs';

import { BN_ZERO } from '@polkadot/util';

import { memo } from '../util/index.js';
import { filterCachedEras, getEraMultiCache, setEraMultiCache } from './cache.js';
import { erasHistoricApply, filterEras } from './util.js';

const CACHE_KEY = 'eraPoints';

function mapValidators ({ individual }: PalletStakingEraRewardPoints): DeriveEraValPoints {
  return [...individual.entries()]
    .filter(([, points]) => points.gt(BN_ZERO))
    .reduce((result: DeriveEraValPoints, [validatorId, points]): DeriveEraValPoints => {
      result[validatorId.toString()] = points;

      return result;
    }, {});
}

function mapPoints (eras: EraIndex[], points: PalletStakingEraRewardPoints[]): DeriveEraPoints[] {
  return eras.map((era, index): DeriveEraPoints => ({
    era,
    eraPoints: points[index].total,
    validators: mapValidators(points[index])
  }));
}

export function _erasPoints (instanceId: string, api: DeriveApi): (eras: EraIndex[], withActive: boolean) => Observable<DeriveEraPoints[]> {
  return memo(instanceId, (eras: EraIndex[], withActive: boolean): Observable<DeriveEraPoints[]> => {
    if (!eras.length) {
      return of([]);
    }

    const cached = getEraMultiCache<DeriveEraPoints>(CACHE_KEY, eras, withActive);
    const remaining = filterEras(eras, cached);

    return !remaining.length
      ? of(cached)
      : api.query.staking.erasRewardPoints.multi(remaining).pipe(
        map((p) => filterCachedEras(eras, cached, setEraMultiCache(CACHE_KEY, withActive, mapPoints(remaining, p))))
      );
  });
}

/**
 * @name erasPoints
 * @description Retrieves historical era points with its validators.
 * @param {boolean} withActive? (Optional) Whether to include the active era in the result.
 * @example
 * ```javascrip
 * const points = await api.derive.staking.erasPoints(true);
 * console.log(
 *   "Validator points:",
 *   points.map(({ era, eraPoints }) => `Era: ${era}, points ${eraPoints}`)
 * );
 * ```
 */
export const erasPoints = /*#__PURE__*/ erasHistoricApply('_erasPoints');

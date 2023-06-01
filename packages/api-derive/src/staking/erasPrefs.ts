// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { StorageKey } from '@polkadot/types';
import type { EraIndex } from '@polkadot/types/interfaces';
import type { PalletStakingValidatorPrefs } from '@polkadot/types/lookup';
import type { DeriveApi, DeriveEraPrefs, DeriveEraValPrefs } from '../types.js';

import { map, of } from 'rxjs';

import { memo } from '../util/index.js';
import { getEraCache, setEraCache } from './cache.js';
import { combineEras, erasHistoricApply, singleEra } from './util.js';

const CACHE_KEY = 'eraPrefs';

function mapPrefs (era: EraIndex, all: [StorageKey, PalletStakingValidatorPrefs][]): DeriveEraPrefs {
  const validators: DeriveEraValPrefs = {};

  all.forEach(([key, prefs]): void => {
    validators[key.args[1].toString()] = prefs;
  });

  return { era, validators };
}

export function _eraPrefs (instanceId: string, api: DeriveApi): (era: EraIndex, withActive?: boolean) => Observable<DeriveEraPrefs> {
  return memo(instanceId, (era: EraIndex, withActive?: boolean): Observable<DeriveEraPrefs> => {
    const [cacheKey, cached] = getEraCache<DeriveEraPrefs>(CACHE_KEY, era, withActive);

    return cached
      ? of(cached)
      : api.query.staking.erasValidatorPrefs.entries(era).pipe(
        map((r) => setEraCache(cacheKey, mapPrefs(era, r), withActive))
      );
  });
}

export const eraPrefs = /*#__PURE__*/ singleEra('_eraPrefs');
export const _erasPrefs = /*#__PURE__*/ combineEras('_eraPrefs');
export const erasPrefs = /*#__PURE__*/ erasHistoricApply('_erasPrefs');

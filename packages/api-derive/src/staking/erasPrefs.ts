// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { StorageKey } from '@polkadot/types';
import type { EraIndex } from '@polkadot/types/interfaces';
import type { PalletStakingValidatorPrefs } from '@polkadot/types/lookup';
import type { DeriveEraPrefs, DeriveEraValPrefs } from '../types';

import { combineLatest, map, of } from 'rxjs';

import { deriveCache, memo } from '../util';
import { getEraCache } from './cache';

const CACHE_KEY = 'eraPrefs';

function mapPrefs (era: EraIndex, all: [StorageKey, PalletStakingValidatorPrefs][]): DeriveEraPrefs {
  const validators: DeriveEraValPrefs = {};

  all.forEach(([key, prefs]): void => {
    validators[key.args[1].toString()] = prefs;
  });

  return { era, validators };
}

export function _eraPrefs (instanceId: string, api: ApiInterfaceRx): (era: EraIndex, withActive: boolean) => Observable<DeriveEraPrefs> {
  return memo(instanceId, (era: EraIndex, withActive: boolean): Observable<DeriveEraPrefs> => {
    const [cacheKey, cached] = getEraCache<DeriveEraPrefs>(CACHE_KEY, era, withActive);

    return cached
      ? of(cached)
      : api.query.staking.erasValidatorPrefs.entries(era).pipe(
        map((prefs): DeriveEraPrefs => {
          const value = mapPrefs(era, prefs);

          !withActive && deriveCache.set(cacheKey, value);

          return value;
        })
      );
  });
}

export function eraPrefs (instanceId: string, api: ApiInterfaceRx): (era: EraIndex) => Observable<DeriveEraPrefs> {
  return memo(instanceId, (era: EraIndex): Observable<DeriveEraPrefs> =>
    api.derive.staking._eraPrefs(era, true)
  );
}

export function _erasPrefs (instanceId: string, api: ApiInterfaceRx): (eras: EraIndex[], withActive: boolean) => Observable<DeriveEraPrefs[]> {
  return memo(instanceId, (eras: EraIndex[], withActive: boolean): Observable<DeriveEraPrefs[]> =>
    eras.length
      ? combineLatest(eras.map((era) => api.derive.staking._eraPrefs(era, withActive)))
      : of([])
  );
}

export function erasPrefs (instanceId: string, api: ApiInterfaceRx): (withActive?: boolean) => Observable<DeriveEraPrefs[]> {
  return memo(instanceId, (withActive = false) =>
    api.derive.staking._eraHistoricApply<DeriveEraPrefs[]>(withActive, api.derive.staking._erasPrefs)
  );
}

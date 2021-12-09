// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Option, StorageKey } from '@polkadot/types';
import type { BalanceOf, EraIndex, Perbill } from '@polkadot/types/interfaces';
import type { ITuple } from '@polkadot/types/types';
import type { DeriveEraSlashes, DeriveEraValSlash } from '../types';

import { combineLatest, map, of } from 'rxjs';

import { deriveCache, memo } from '../util';
import { getEraCache } from './cache';
import { combineEras, erasHistoricApply } from './util';

const CACHE_KEY = 'eraSlashes';

function mapSlashes (era: EraIndex, noms: [StorageKey, Option<BalanceOf>][], vals: [StorageKey, Option<ITuple<[Perbill, BalanceOf]>>][]): DeriveEraSlashes {
  const nominators: DeriveEraValSlash = {};
  const validators: DeriveEraValSlash = {};

  noms.forEach(([key, optBalance]): void => {
    nominators[key.args[1].toString()] = optBalance.unwrap();
  });

  vals.forEach(([key, optRes]): void => {
    validators[key.args[1].toString()] = optRes.unwrapOrDefault()[1];
  });

  return { era, nominators, validators };
}

export function _eraSlashes (instanceId: string, api: ApiInterfaceRx): (era: EraIndex, withActive: boolean) => Observable<DeriveEraSlashes> {
  return memo(instanceId, (era: EraIndex, withActive: boolean): Observable<DeriveEraSlashes> => {
    const [cacheKey, cached] = getEraCache<DeriveEraSlashes>(CACHE_KEY, era, withActive);

    return cached
      ? of(cached)
      : combineLatest([
        api.query.staking.nominatorSlashInEra.entries(era),
        api.query.staking.validatorSlashInEra.entries(era)
      ]).pipe(
        map(([noms, vals]): DeriveEraSlashes => {
          const value = mapSlashes(era, noms, vals);

          !withActive && deriveCache.set(cacheKey, value);

          return value;
        })
      );
  });
}

export function eraSlashes (instanceId: string, api: ApiInterfaceRx): (era: EraIndex) => Observable<DeriveEraSlashes> {
  return memo(instanceId, (era: EraIndex): Observable<DeriveEraSlashes> =>
    api.derive.staking._eraSlashes(era, true)
  );
}

export const _erasSlashes = combineEras('_eraSlashes');
export const erasSlashes = erasHistoricApply('_erasSlashes');

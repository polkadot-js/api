// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Option, StorageKey } from '@polkadot/types';
import type { BalanceOf, EraIndex, Perbill } from '@polkadot/types/interfaces';
import type { ITuple } from '@polkadot/types/types';
import type { DeriveApi, DeriveEraSlashes, DeriveEraValSlash } from '../types.js';

import { combineLatest, map, of } from 'rxjs';

import { memo } from '../util/index.js';
import { getEraCache, setEraCache } from './cache.js';
import { combineEras, erasHistoricApply, singleEra } from './util.js';

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

export function _eraSlashes (instanceId: string, api: DeriveApi): (era: EraIndex, withActive: boolean) => Observable<DeriveEraSlashes> {
  return memo(instanceId, (era: EraIndex, withActive: boolean): Observable<DeriveEraSlashes> => {
    const [cacheKey, cached] = getEraCache<DeriveEraSlashes>(CACHE_KEY, era, withActive);

    return cached
      ? of(cached)
      : combineLatest([
        api.query.staking.nominatorSlashInEra.entries(era),
        api.query.staking.validatorSlashInEra.entries(era)
      ]).pipe(
        map(([n, v]) => setEraCache(cacheKey, withActive, mapSlashes(era, n, v)))
      );
  });
}

export const eraSlashes = /*#__PURE__*/ singleEra('_eraSlashes');
export const _erasSlashes = /*#__PURE__*/ combineEras('_eraSlashes');
export const erasSlashes = /*#__PURE__*/ erasHistoricApply('_erasSlashes');

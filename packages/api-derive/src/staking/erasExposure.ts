// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { StorageKey } from '@polkadot/types';
import type { AccountId, EraIndex } from '@polkadot/types/interfaces';
import type { PalletStakingExposure } from '@polkadot/types/lookup';
import type { DeriveApi, DeriveEraExposure, DeriveEraNominatorExposure, DeriveEraValidatorExposure } from '../types.js';

import { map, of } from 'rxjs';

import { memo } from '../util/index.js';
import { getEraCache, setEraCache } from './cache.js';
import { combineEras, erasHistoricApply, singleEra } from './util.js';

type KeysAndExposures = [StorageKey<[EraIndex, AccountId]>, PalletStakingExposure][];

const CACHE_KEY = 'eraExposure';

function mapStakers (era: EraIndex, stakers: KeysAndExposures): DeriveEraExposure {
  const nominators: DeriveEraNominatorExposure = {};
  const validators: DeriveEraValidatorExposure = {};

  stakers.forEach(([key, exposure]): void => {
    const validatorId = key.args[1].toString();

    validators[validatorId] = exposure;

    exposure.others.forEach(({ who }, validatorIndex): void => {
      const nominatorId = who.toString();

      nominators[nominatorId] = nominators[nominatorId] || [];
      nominators[nominatorId].push({ validatorId, validatorIndex });
    });
  });

  return { era, nominators, validators };
}

export function _eraExposure (instanceId: string, api: DeriveApi): (era: EraIndex, withActive?: boolean) => Observable<DeriveEraExposure> {
  return memo(instanceId, (era: EraIndex, withActive = false): Observable<DeriveEraExposure> => {
    const [cacheKey, cached] = getEraCache<DeriveEraExposure>(CACHE_KEY, era, withActive);

    return cached
      ? of(cached)
      : api.query.staking.erasStakersClipped.entries(era).pipe(
        map((r) => setEraCache(cacheKey, withActive, mapStakers(era, r)))
      );
  });
}

export const eraExposure = /*#__PURE__*/ singleEra('_eraExposure');
export const _erasExposure = /*#__PURE__*/ combineEras('_eraExposure');
export const erasExposure = /*#__PURE__*/ erasHistoricApply('_erasExposure');

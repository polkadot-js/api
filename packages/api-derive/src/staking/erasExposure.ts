// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { StorageKey } from '@polkadot/types';
import type { AccountId, EraIndex } from '@polkadot/types/interfaces';
import type { PalletStakingExposure } from '@polkadot/types/lookup';
import type { DeriveEraExposure, DeriveEraNominatorExposure, DeriveEraValidatorExposure } from '../types';

import { map, of } from 'rxjs';

import { deriveCache, memo } from '../util';
import { getEraCache } from './cache';
import { combineEras, erasHistoricApply } from './util';

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

export function _eraExposure (instanceId: string, api: ApiInterfaceRx): (era: EraIndex, withActive: boolean) => Observable<DeriveEraExposure> {
  return memo(instanceId, (era: EraIndex, withActive: boolean): Observable<DeriveEraExposure> => {
    const [cacheKey, cached] = getEraCache<DeriveEraExposure>(CACHE_KEY, era, withActive);

    return cached
      ? of(cached)
      : api.query.staking.erasStakersClipped.entries(era).pipe(
        map((stakers): DeriveEraExposure => {
          const value = mapStakers(era, stakers);

          !withActive && deriveCache.set(cacheKey, value);

          return value;
        })
      );
  });
}

export function eraExposure (instanceId: string, api: ApiInterfaceRx): (era: EraIndex) => Observable<DeriveEraExposure> {
  return memo(instanceId, (era: EraIndex): Observable<DeriveEraExposure> =>
    api.derive.staking._eraExposure(era, true)
  );
}

export const _erasExposure = combineEras('_eraExposure');
export const erasExposure = erasHistoricApply('_erasExposure');

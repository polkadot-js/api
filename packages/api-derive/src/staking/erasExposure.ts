// Copyright 2017-2024 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Option, StorageKey, u32 } from '@polkadot/types';
import type { AccountId, AccountId32, EraIndex } from '@polkadot/types/interfaces';
import type { PalletStakingExposure, SpStakingExposurePage } from '@polkadot/types/lookup';
import type { DeriveApi, DeriveEraExposurePaged, DeriveEraNominatorExposure, DeriveEraValidatorExposure, DeriveEraValidatorExposurePaged } from '../types.js';

import { map, of } from 'rxjs';

import { memo } from '../util/index.js';
import { getEraCache, setEraCache } from './cache.js';
import { combineEras, erasHistoricApply, singleEra } from './util.js';

type KeysAndExposures = [StorageKey<[EraIndex, AccountId]>, PalletStakingExposure][];
type KeysAndExposuresPaged = [StorageKey<[u32, AccountId32, u32]>, Option<SpStakingExposurePage>][];

const CACHE_KEY = 'eraExposure';

// Legacy usage for erasStakersClipped. Giving support for compatibility.
function mapStakersClipped (era: EraIndex, stakers: KeysAndExposures): DeriveEraExposurePaged {
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

function mapStakersPaged (era: EraIndex, stakers: KeysAndExposuresPaged): DeriveEraExposurePaged {
  const nominators: DeriveEraNominatorExposure = {};
  const validators: DeriveEraValidatorExposurePaged = {};

  stakers.forEach(([key, exposureOpt]): void => {
    if (exposureOpt.isSome) {
      const validatorId = key.args[1].toString();
      const exposure = exposureOpt.unwrap();

      validators[validatorId] = exposure;

      exposure.others.forEach(({ who }, validatorIndex): void => {
        const nominatorId = who.toString();

        nominators[nominatorId] = nominators[nominatorId] || [];
        nominators[nominatorId].push({ validatorId, validatorIndex });
      });
    }
  });

  return { era, nominators, validators };
}

/**
 * erasStakersClipped will be deprecated and replaced with erasStakersPaged. Therefore support is given for both
 * storage queries until erasStakersClipped has been completely out of use.
 */
export function _eraExposure (instanceId: string, api: DeriveApi): (era: EraIndex, withActive?: boolean) => Observable<DeriveEraExposurePaged> {
  return memo(instanceId, (era: EraIndex, withActive = false): Observable<DeriveEraExposurePaged> => {
    const [cacheKey, cached] = getEraCache<DeriveEraExposurePaged>(CACHE_KEY, era, withActive);

    return cached
      ? of(cached)
      : api.query.staking.erasStakersPaged
        ? api.query.staking.erasStakersPaged.entries<Option<SpStakingExposurePage>>(era).pipe(
          map((r) => setEraCache(cacheKey, withActive, mapStakersPaged(era, r)))
        )
        : api.query.staking.erasStakersClipped.entries(era).pipe(
          map((r) => setEraCache(cacheKey, withActive, mapStakersClipped(era, r)))
        );
  });
}

export const eraExposure = /*#__PURE__*/ singleEra('_eraExposure');
export const _erasExposure = /*#__PURE__*/ combineEras('_eraExposure');
export const erasExposure = /*#__PURE__*/ erasHistoricApply('_erasExposure');

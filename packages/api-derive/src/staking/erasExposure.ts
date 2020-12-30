// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { StorageKey } from '@polkadot/types';
import type { EraIndex, Exposure } from '@polkadot/types/interfaces';
import type { Observable } from '@polkadot/x-rxjs';
import type { DeriveEraExposure, DeriveEraNominatorExposure, DeriveEraValidatorExposure } from '../types';

import { combineLatest, of } from '@polkadot/x-rxjs';
import { map, switchMap } from '@polkadot/x-rxjs/operators';

import { deriveCache, memo } from '../util';

type KeysAndExposures = [StorageKey, Exposure][];

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
    const cacheKey = `${CACHE_KEY}-${era.toString()}`;
    const cached = withActive
      ? undefined
      : deriveCache.get<DeriveEraExposure>(cacheKey);

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

export function _erasExposure (instanceId: string, api: ApiInterfaceRx): (eras: EraIndex[], withActive: boolean) => Observable<DeriveEraExposure[]> {
  return memo(instanceId, (eras: EraIndex[], withActive: boolean): Observable<DeriveEraExposure[]> =>
    eras.length
      ? combineLatest(eras.map((era) => api.derive.staking._eraExposure(era, withActive)))
      : of([])
  );
}

export function erasExposure (instanceId: string, api: ApiInterfaceRx): (withActive?: boolean) => Observable<DeriveEraExposure[]> {
  return memo(instanceId, (withActive = false): Observable<DeriveEraExposure[]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._erasExposure(eras, withActive))
    )
  );
}

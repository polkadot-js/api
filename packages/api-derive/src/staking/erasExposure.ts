// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { EraIndex, Exposure } from '@polkadot/types/interfaces';
import { DeriveEraExposure, DeriveEraNominatorExposure, DeriveEraValidatorExposure } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { StorageKey } from '@polkadot/types';

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

export function _eraExposure (api: ApiInterfaceRx): (era: EraIndex, withActive: boolean) => Observable<DeriveEraExposure> {
  return memo((era: EraIndex, withActive: boolean): Observable<DeriveEraExposure> => {
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

export function eraExposure (api: ApiInterfaceRx): (era: EraIndex) => Observable<DeriveEraExposure> {
  return memo((era: EraIndex): Observable<DeriveEraExposure> =>
    api.derive.staking._eraExposure(era, true)
  );
}

export function _erasExposure (api: ApiInterfaceRx): (eras: EraIndex[], withActive: boolean) => Observable<DeriveEraExposure[]> {
  return memo((eras: EraIndex[], withActive: boolean): Observable<DeriveEraExposure[]> =>
    eras.length
      ? combineLatest(eras.map((era) => api.derive.staking._eraExposure(era, withActive)))
      : of([])
  );
}

export function erasExposure (api: ApiInterfaceRx): (withActive?: boolean) => Observable<DeriveEraExposure[]> {
  return memo((withActive = false): Observable<DeriveEraExposure[]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._erasExposure(eras, withActive))
    )
  );
}

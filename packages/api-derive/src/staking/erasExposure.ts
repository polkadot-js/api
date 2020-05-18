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

const CACHE_KEY = '_erasExposure';

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

export function eraExposure (api: ApiInterfaceRx): (era: EraIndex) => Observable<DeriveEraExposure> {
  return memo((era: EraIndex): Observable<DeriveEraExposure> =>
    api.query.staking.erasStakersClipped.entries(era).pipe(
      map((stakers) => mapStakers(era, stakers))
    )
  );
}

export function _erasExposure (api: ApiInterfaceRx): (eras: EraIndex[], withActive: boolean) => Observable<DeriveEraExposure[]> {
  return memo((_eras: EraIndex[], withActive: boolean): Observable<DeriveEraExposure[]> => {
    if (!_eras.length) {
      return of([]);
    }

    const cached: DeriveEraExposure[] = deriveCache.get(CACHE_KEY) || [];
    const eras = withActive
      ? _eras
      : _eras.filter((era) => !cached.some((cached) => era.eq(cached.era)));

    if (!eras.length) {
      return of(
        _eras
          .map((era) => cached.find((cached) => era.eq(cached.era)))
          .filter((value): value is DeriveEraExposure => !!value)
      );
    }

    return combineLatest(eras.map((era) => api.derive.staking.eraExposure(era))).pipe(
      map((retrieved) => deriveCache.set(
        CACHE_KEY,
        _eras
          .map((era) =>
            cached.find((cached) => era.eq(cached.era)) ||
            retrieved.find((retrieved) => era.eq(retrieved.era))
          )
          .filter((value): value is DeriveEraExposure => !!value)
      ))
    );
  });
}

export function erasExposure (api: ApiInterfaceRx): (withActive?: boolean) => Observable<DeriveEraExposure[]> {
  return memo((withActive = false): Observable<DeriveEraExposure[]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._erasExposure(eras, withActive))
    )
  );
}

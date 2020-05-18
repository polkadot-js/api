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

interface DeriveEraExposureJSON {
  era: string;
  nominators: DeriveEraNominatorExposure;
  validators: Record<string, string>;
}

type KeysAndExposures = [StorageKey, Exposure][];

const CACHE_KEY = '_eraExposure';

function deserialize ({ registry }: ApiInterfaceRx, { era, nominators, validators }: DeriveEraExposureJSON): DeriveEraExposure {
  return {
    era: registry.createType('EraIndex', era),
    nominators,
    validators: Object.keys(validators).reduce((result: Record<string, Exposure>, id: string): Record<string, Exposure> => {
      result[id] = registry.createType('Exposure', validators[id]);

      return result;
    }, {})
  };
}

function serialize ({ era, nominators, validators }: DeriveEraExposure): DeriveEraExposureJSON {
  return {
    era: era.toHex(),
    nominators,
    validators: Object.keys(validators).reduce((result: Record<string, string>, id: string): Record<string, string> => {
      result[id] = validators[id].toHex();

      return result;
    }, {})
  };
}

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

export function _eraExposure (api: ApiInterfaceRx): (era: EraIndex, withCache: boolean) => Observable<DeriveEraExposure> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return memo((era: EraIndex, withCache: boolean): Observable<DeriveEraExposure> => {
    const cacheKey = `${CACHE_KEY}-${era}`;
    const cached = withCache
      ? deriveCache.get<DeriveEraExposureJSON>(cacheKey)
      : undefined;

    return cached
      ? of(deserialize(api, cached))
      : api.query.staking.erasStakersClipped.entries(era).pipe(
        map((stakers): DeriveEraExposure => {
          const value = mapStakers(era, stakers);

          if (withCache) {
            deriveCache.set(cacheKey, serialize(value));
          }

          return value;
        })
      );
  });
}

export function eraExposure (api: ApiInterfaceRx): (era: EraIndex) => Observable<DeriveEraExposure> {
  return memo((era: EraIndex): Observable<DeriveEraExposure> =>
    api.derive.staking._eraExposure(era, false)
  );
}

export function _erasExposure (api: ApiInterfaceRx): (eras: EraIndex[], withActive: boolean) => Observable<DeriveEraExposure[]> {
  return memo((eras: EraIndex[], withActive: boolean): Observable<DeriveEraExposure[]> =>
    eras.length
      ? combineLatest(eras.map((era) => api.derive.staking._eraExposure(era, !withActive)))
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

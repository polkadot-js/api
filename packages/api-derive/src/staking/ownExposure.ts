// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { EraIndex, Exposure } from '@polkadot/types/interfaces';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveOwnExposure } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { deriveCache, memo } from '../util';

const CACHE_KEY = 'ownExposure';

export function _ownExposure (api: ApiInterfaceRx): (accountId: Uint8Array | string, era: EraIndex, withActive: boolean) => Observable<DeriveOwnExposure> {
  return memo((accountId: Uint8Array | string, era: EraIndex, withActive: boolean): Observable<DeriveOwnExposure> => {
    const cacheKey = `${CACHE_KEY}-${era.toString()}-${accountId.toString()}`;
    const cached = withActive
      ? undefined
      : deriveCache.get<DeriveOwnExposure>(cacheKey);

    return cached
      ? of(cached)
      : api.queryMulti<[Exposure, Exposure]>([
        [api.query.staking.erasStakersClipped, [era, accountId]],
        [api.query.staking.erasStakers, [era, accountId]]
      ]).pipe(
        map(([clipped, exposure]): DeriveOwnExposure => {
          const value = { clipped, era, exposure };

          !withActive && deriveCache.set(cacheKey, value);

          return value;
        })
      );
  });
}

export function ownExposure (api: ApiInterfaceRx): (accountId: Uint8Array | string, era: EraIndex) => Observable<DeriveOwnExposure> {
  return memo((accountId: Uint8Array | string, era: EraIndex): Observable<DeriveOwnExposure> =>
    api.derive.staking._ownExposure(accountId, era, true)
  );
}

export function _ownExposures (api: ApiInterfaceRx): (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean) => Observable<DeriveOwnExposure[]> {
  return memo((accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean): Observable<DeriveOwnExposure[]> =>
    eras.length
      ? combineLatest(
        eras.map((era) => api.derive.staking._ownExposure(accountId, era, withActive))
      )
      : of([])
  );
}

export function ownExposures (api: ApiInterfaceRx): (accountId: Uint8Array | string, withActive?: boolean) => Observable<DeriveOwnExposure[]> {
  return memo((accountId: Uint8Array | string, withActive = false): Observable<DeriveOwnExposure[]> => {
    return api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) =>
        api.derive.staking._ownExposures(accountId, eras, withActive)
      )
    );
  });
}

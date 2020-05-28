// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { BalanceOf, EraIndex, Perbill } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { DeriveStakerSlashes } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Option } from '@polkadot/types';

import { deriveCache, memo } from '../util';

const CACHE_KEY = 'ownSlash';

export function _ownSlash (api: ApiInterfaceRx): (accountId: Uint8Array | string, era: EraIndex, withActive: boolean) => Observable<DeriveStakerSlashes> {
  return memo((accountId: Uint8Array | string, era: EraIndex, withActive: boolean): Observable<DeriveStakerSlashes> => {
    const cacheKey = `${CACHE_KEY}-${era.toString()}-${accountId.toString()}`;
    const cached = withActive
      ? undefined
      : deriveCache.get<DeriveStakerSlashes>(cacheKey);

    return cached
      ? of(cached)
      : api.queryMulti<[Option<BalanceOf>, Option<ITuple<[Perbill, BalanceOf]>>]>([
        [api.query.staking.nominatorSlashInEra, [era, accountId]],
        [api.query.staking.validatorSlashInEra, [era, accountId]]
      ]).pipe(
        map(([optNom, optVal]): DeriveStakerSlashes => {
          const value = {
            era,
            total: optVal.isSome
              ? optVal.unwrap()[1]
              : optNom.unwrapOrDefault()
          };

          !withActive && deriveCache.set(cacheKey, value);

          return value;
        })
      );
  });
}

export function ownSlash (api: ApiInterfaceRx): (accountId: Uint8Array | string, era: EraIndex) => Observable<DeriveStakerSlashes> {
  return memo((accountId: Uint8Array | string, era: EraIndex): Observable<DeriveStakerSlashes> =>
    api.derive.staking._ownSlash(accountId, era, true)
  );
}

export function _ownSlashes (api: ApiInterfaceRx): (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean) => Observable<DeriveStakerSlashes[]> {
  return memo((accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean): Observable<DeriveStakerSlashes[]> =>
    eras.length
      ? combineLatest(
        eras.map((era) => api.derive.staking._ownSlash(accountId, era, withActive))
      )
      : of([])
  );
}

export function ownSlashes (api: ApiInterfaceRx): (accountId: Uint8Array | string, withActive?: boolean) => Observable<DeriveStakerSlashes[]> {
  return memo((accountId: Uint8Array | string, withActive = false): Observable<DeriveStakerSlashes[]> => {
    return api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) =>
        api.derive.staking._ownSlashes(accountId, eras, withActive)
      )
    );
  });
}

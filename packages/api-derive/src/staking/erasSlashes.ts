// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { BalanceOf, EraIndex, Perbill } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { DeriveEraSlashes, DeriveEraValSlash } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Option, StorageKey } from '@polkadot/types';

import { deriveCache, memo } from '../util';

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

export function _eraSlashes (api: ApiInterfaceRx): (era: EraIndex, withActive: boolean) => Observable<DeriveEraSlashes> {
  return memo((era: EraIndex, withActive: boolean): Observable<DeriveEraSlashes> => {
    const cacheKey = `${CACHE_KEY}-${era.toString()}`;
    const cached = withActive
      ? undefined
      : deriveCache.get<DeriveEraSlashes>(cacheKey);

    return cached
      ? of(cached)
      : combineLatest([
        api.query.staking.nominatorSlashInEra.entries(era),
        api.query.staking.validatorSlashInEra.entries(era)
      ]).pipe(
        map(([noms, vals]): DeriveEraSlashes => {
          const value = mapSlashes(era, noms, vals);

          !withActive && deriveCache.set(cacheKey, value);

          return value;
        })
      );
  });
}

export function eraSlashes (api: ApiInterfaceRx): (era: EraIndex) => Observable<DeriveEraSlashes> {
  return memo((era: EraIndex): Observable<DeriveEraSlashes> =>
    api.derive.staking._eraSlashes(era, true)
  );
}

export function _erasSlashes (api: ApiInterfaceRx): (eras: EraIndex[], withActive: boolean) => Observable<DeriveEraSlashes[]> {
  return memo((eras: EraIndex[], withActive: boolean): Observable<DeriveEraSlashes[]> =>
    eras.length
      ? combineLatest(
        eras.map((era) => api.derive.staking._eraSlashes(era, withActive))
      )
      : of([])
  );
}

export function erasSlashes (api: ApiInterfaceRx): (withActive?: boolean) => Observable<DeriveEraSlashes[]> {
  return memo((withActive = false): Observable<DeriveEraSlashes[]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._erasSlashes(eras, withActive))
    )
  );
}

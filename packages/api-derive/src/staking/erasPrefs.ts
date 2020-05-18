// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { EraIndex, ValidatorPrefs } from '@polkadot/types/interfaces';
import { DeriveEraPrefs, DeriveEraValPrefs } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { StorageKey } from '@polkadot/types';

import { deriveCache, memo } from '../util';

const CACHE_KEY = '_erasPrefs';

function mapPrefs (era: EraIndex, all: [StorageKey, ValidatorPrefs][]): DeriveEraPrefs {
  const validators: DeriveEraValPrefs = {};

  all.forEach(([key, prefs]): void => {
    validators[key.args[1].toString()] = prefs;
  });

  return { era, validators };
}

export function eraPrefs (api: ApiInterfaceRx): (era: EraIndex) => Observable<DeriveEraPrefs> {
  return memo((era: EraIndex): Observable<DeriveEraPrefs> =>
    api.query.staking.erasValidatorPrefs.entries(era).pipe(
      map((prefs) => mapPrefs(era, prefs))
    )
  );
}

export function _erasPrefs (api: ApiInterfaceRx): (eras: EraIndex[], withActive: boolean) => Observable<DeriveEraPrefs[]> {
  return memo((_eras: EraIndex[], withActive: boolean): Observable<DeriveEraPrefs[]> => {
    if (!_eras.length) {
      return of([]);
    }

    const cached: DeriveEraPrefs[] = deriveCache.get(CACHE_KEY) || [];
    const eras = withActive
      ? _eras
      : _eras.filter((era) => !cached.some((cached) => era.eq(cached.era)));

    if (!eras.length) {
      return of(
        _eras
          .map((era) => cached.find((cached) => era.eq(cached.era)))
          .filter((value): value is DeriveEraPrefs => !!value)
      );
    }

    return combineLatest(eras.map((era) => api.derive.staking.eraPrefs(era))).pipe(
      map((retrieved) => deriveCache.set(
        CACHE_KEY,
        _eras
          .map((era) =>
            cached.find((cached) => era.eq(cached.era)) ||
            retrieved.find((retrieved) => era.eq(retrieved.era))
          )
          .filter((value): value is DeriveEraPrefs => !!value)
      ))
    );
  });
}

export function erasPrefs (api: ApiInterfaceRx): (withActive?: boolean) => Observable<DeriveEraPrefs[]> {
  return memo((withActive = false): Observable<DeriveEraPrefs[]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._erasPrefs(eras, withActive))
    )
  );
}

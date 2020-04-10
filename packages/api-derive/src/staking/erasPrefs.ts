// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { EraIndex, ValidatorPrefs } from '@polkadot/types/interfaces';
import { DeriveEraPrefs, DeriveEraValPrefs } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { StorageKey } from '@polkadot/types';

import { memo } from '../util';

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

export function _erasPrefs (api: ApiInterfaceRx): (eras: EraIndex[]) => Observable<DeriveEraPrefs[]> {
  return memo((eras: EraIndex[]): Observable<DeriveEraPrefs[]> =>
    eras.length
      ? combineLatest(eras.map((era) => api.derive.staking.eraPrefs(era)))
      : of([])
  );
}

export function erasPrefs (api: ApiInterfaceRx): (withActive?: boolean) => Observable<DeriveEraPrefs[]> {
  return memo((withActive?: boolean): Observable<DeriveEraPrefs[]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._erasPrefs(eras))
    )
  );
}

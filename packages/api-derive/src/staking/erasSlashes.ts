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

import { memo } from '../util';

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

export function eraSlashes (api: ApiInterfaceRx): (era: EraIndex) => Observable<DeriveEraSlashes> {
  return memo((era: EraIndex): Observable<DeriveEraSlashes> =>
    combineLatest([
      api.query.staking.nominatorSlashInEra.entries(era),
      api.query.staking.validatorSlashInEra.entries(era)
    ]).pipe(
      map(([noms, vals]) => mapSlashes(era, noms, vals))
    )
  );
}

export function _erasSlashes (api: ApiInterfaceRx): (eras: EraIndex[]) => Observable<DeriveEraSlashes[]> {
  return memo((eras: EraIndex[]): Observable<DeriveEraSlashes[]> =>
    eras.length
      ? combineLatest(
        eras.map((era) => api.derive.staking.eraSlashes(era))
      )
      : of([])
  );
}

export function erasSlashes (api: ApiInterfaceRx): (withActive?: boolean) => Observable<DeriveEraSlashes[]> {
  return memo((withActive?: boolean): Observable<DeriveEraSlashes[]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._erasSlashes(eras))
    )
  );
}

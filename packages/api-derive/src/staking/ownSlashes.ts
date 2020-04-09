// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveStakerSlashes } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { memo } from '../util';

export function ownSlashes (api: ApiInterfaceRx): (accountId: Uint8Array | string, withActive?: boolean) => Observable<DeriveStakerSlashes[]> {
  return memo((accountId: Uint8Array | string, withActive?: boolean): Observable<DeriveStakerSlashes[]> => {
    return api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) =>
        eras.length
          ? combineLatest(
            eras.map((era) => combineLatest([
              of(era),
              api.query.staking.nominatorSlashInEra(era, accountId),
              api.query.staking.validatorSlashInEra(era, accountId)
            ]))
          )
          : of([])
      ),
      map((result): DeriveStakerSlashes[] =>
        result.map(([era, optNom, optVal]): DeriveStakerSlashes => ({
          era,
          total: optVal.isSome
            ? optVal.unwrap()[1]
            : optNom.unwrapOrDefault()
        }))
      )
    );
  });
}

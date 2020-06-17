// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { EraIndex } from '@polkadot/types/interfaces';
import { DeriveStakerSlashes } from '../types';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { memo } from '../util';

export function _stakerSlashes (api: ApiInterfaceRx): (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean) => Observable<DeriveStakerSlashes[]> {
  return memo((accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean): Observable<DeriveStakerSlashes[]> => {
    const stakerId = api.registry.createType('AccountId', accountId).toString();

    return api.derive.staking._erasSlashes(eras, withActive).pipe(
      map((slashes): DeriveStakerSlashes[] =>
        slashes.map(({ era, nominators, validators }): DeriveStakerSlashes => ({
          era,
          total: nominators[stakerId] || validators[stakerId] || api.registry.createType('Balance')
        }))
      )
    );
  });
}

export function stakerSlashes (api: ApiInterfaceRx): (accountId: Uint8Array | string, withActive?: boolean) => Observable<DeriveStakerSlashes[]> {
  return memo((accountId: Uint8Array | string, withActive = false): Observable<DeriveStakerSlashes[]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._stakerSlashes(accountId, eras, withActive))
    )
  );
}

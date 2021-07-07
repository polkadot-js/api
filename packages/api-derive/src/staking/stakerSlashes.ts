// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { EraIndex } from '@polkadot/types/interfaces';
import type { DeriveStakerSlashes } from '../types';

import { map, switchMap } from 'rxjs';

import { memo } from '../util';

export function _stakerSlashes (instanceId: string, api: ApiInterfaceRx): (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean) => Observable<DeriveStakerSlashes[]> {
  return memo(instanceId, (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean): Observable<DeriveStakerSlashes[]> => {
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

export function stakerSlashes (instanceId: string, api: ApiInterfaceRx): (accountId: Uint8Array | string, withActive?: boolean) => Observable<DeriveStakerSlashes[]> {
  return memo(instanceId, (accountId: Uint8Array | string, withActive = false): Observable<DeriveStakerSlashes[]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._stakerSlashes(accountId, eras, withActive))
    )
  );
}

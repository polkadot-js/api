// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { EraIndex } from '@polkadot/types/interfaces';
import { DeriveStakerPoints } from '../types';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { memo } from '../util';

export function _stakerPoints (api: ApiInterfaceRx): (accountId: Uint8Array | string, eras: EraIndex[]) => Observable<DeriveStakerPoints[]> {
  return memo((accountId: Uint8Array | string, eras: EraIndex[]): Observable<DeriveStakerPoints[]> => {
    const stakerId = api.registry.createType('AccountId', accountId).toString();

    return api.derive.staking._erasPoints(eras).pipe(
      map((points): DeriveStakerPoints[] =>
        points.map(({ era, eraPoints, validators }): DeriveStakerPoints => ({
          era,
          eraPoints,
          points: validators[stakerId] || api.registry.createType('RewardPoint')
        }))
      )
    );
  });
}

export function stakerPoints (api: ApiInterfaceRx): (accountId: Uint8Array | string, withActive?: boolean) => Observable<DeriveStakerPoints[]> {
  return memo((accountId: Uint8Array | string, withActive?: boolean): Observable<DeriveStakerPoints[]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._stakerPoints(accountId, eras))
    )
  );
}

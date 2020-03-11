// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveStakerPoints } from '../types';

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { memo } from '../util';

export function stakerPoints (api: ApiInterfaceRx): (accountId: Uint8Array | string, withActive?: boolean | BN | number) => Observable<DeriveStakerPoints[]> {
  return memo((accountId: Uint8Array | string, withActive?: boolean | BN | number): Observable<DeriveStakerPoints[]> => {
    const stakerId = api.registry.createType('AccountId', accountId).toString();

    return api.derive.staking.erasPoints(withActive).pipe(
      map((points): DeriveStakerPoints[] =>
        points.map(({ era, eraPoints, validators }): DeriveStakerPoints => ({
          era,
          eraPoints,
          points: validators[stakerId]
            ? validators[stakerId]
            : api.registry.createType('RewardPoint')
        }))
      )
    );
  });
}

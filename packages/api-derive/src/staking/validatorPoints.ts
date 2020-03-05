// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveEraPoints } from '../types';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { memo } from '../util';

export function validatorPoints (api: ApiInterfaceRx): (accountId: Uint8Array | string) => Observable<DeriveEraPoints[]> {
  return memo((_accountId: Uint8Array | string): Observable<DeriveEraPoints[]> => {
    const accountId = api.registry.createType('AccountId', _accountId).toString();

    return api.derive.staking.erasPoints().pipe(
      map((all): DeriveEraPoints[] =>
        all.map(({ all, era, total }): DeriveEraPoints => ({
          era,
          own: all[accountId] || api.registry.createType('RewardPoint'),
          total
        }))
      )
    );
  });
}

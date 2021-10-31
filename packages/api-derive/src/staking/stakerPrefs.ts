// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { EraIndex } from '@polkadot/types/interfaces';
import type { DeriveStakerPrefs } from '../types';

import { map, switchMap } from 'rxjs';

import { memo } from '../util';

export function _stakerPrefs (instanceId: string, api: ApiInterfaceRx): (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean) => Observable<DeriveStakerPrefs[]> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return memo(instanceId, (accountId: Uint8Array | string, eras: EraIndex[], _withActive: boolean): Observable<DeriveStakerPrefs[]> =>
    api.query.staking.erasValidatorPrefs.multi(eras.map((era) => [era, accountId])).pipe(
      map((all): DeriveStakerPrefs[] => {
        const result = new Array<DeriveStakerPrefs>(all.length);

        for (let i = 0; i < all.length; i++) {
          result[i] = { era: eras[i], validatorPrefs: all[i] };
        }

        return result;
      })
    )
  );
}

export function stakerPrefs (instanceId: string, api: ApiInterfaceRx): (accountId: Uint8Array | string, withActive?: boolean) => Observable<DeriveStakerPrefs[]> {
  return memo(instanceId, (accountId: Uint8Array | string, withActive = false): Observable<DeriveStakerPrefs[]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._stakerPrefs(accountId, eras, withActive))
    )
  );
}

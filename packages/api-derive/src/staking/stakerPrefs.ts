// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiInterfaceRx } from '@polkadot/api/types';
import { EraIndex, ValidatorPrefs } from '@polkadot/types/interfaces';
import { DeriveStakerPrefs } from '../types';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { memo } from '../util';

export function _stakerPrefs (instanceId: string, api: ApiInterfaceRx): (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean) => Observable<DeriveStakerPrefs[]> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return memo(instanceId, (accountId: Uint8Array | string, eras: EraIndex[], _withActive: boolean): Observable<DeriveStakerPrefs[]> => {
    return api.query.staking.erasValidatorPrefs.multi<ValidatorPrefs>(eras.map((era) => [era, accountId])).pipe(
      map((all): DeriveStakerPrefs[] =>
        all.map((validatorPrefs, index): DeriveStakerPrefs => ({
          era: eras[index],
          validatorPrefs
        }))
      )
    );
  });
}

export function stakerPrefs (instanceId: string, api: ApiInterfaceRx): (accountId: Uint8Array | string, withActive?: boolean) => Observable<DeriveStakerPrefs[]> {
  return memo(instanceId, (accountId: Uint8Array | string, withActive = false): Observable<DeriveStakerPrefs[]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._stakerPrefs(accountId, eras, withActive))
    )
  );
}

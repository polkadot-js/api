// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveOwnExposure } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { memo } from '../util';

export function ownExposure (api: ApiInterfaceRx): (accountId: Uint8Array | string, withActive?: boolean) => Observable<DeriveOwnExposure[]> {
  return memo((accountId: Uint8Array | string, withActive?: boolean): Observable<DeriveOwnExposure[]> => {
    return api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) =>
        eras.length
          ? combineLatest(
            eras.map((era) => combineLatest([
              of(era),
              api.query.staking.erasStakersClipped(era, accountId),
              api.query.staking.erasStakers(era, accountId)
            ]))
          )
          : of([])
      ),
      map((result): DeriveOwnExposure[] =>
        result.map(([era, clipped, exposure]): DeriveOwnExposure => ({
          clipped,
          era,
          exposure
        }))
      )
    );
  });
}

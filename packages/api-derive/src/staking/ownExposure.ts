// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx, QueryableStorageMultiArg } from '@polkadot/api/types';
import type { EraIndex, Exposure } from '@polkadot/types/interfaces';
import type { Observable } from '@polkadot/x-rxjs';
import type { DeriveOwnExposure } from '../types';

import { of } from '@polkadot/x-rxjs';
import { map, switchMap } from '@polkadot/x-rxjs/operators';

import { memo } from '../util';

export function _ownExposures (instanceId: string, api: ApiInterfaceRx): (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean) => Observable<DeriveOwnExposure[]> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return memo(instanceId, (accountId: Uint8Array | string, eras: EraIndex[], _withActive: boolean): Observable<DeriveOwnExposure[]> =>
    eras.length
      ? api.queryMulti<Exposure[]>([
        ...eras.map((era): QueryableStorageMultiArg<'rxjs'> => [api.query.staking.erasStakersClipped, [era, accountId]]),
        ...eras.map((era): QueryableStorageMultiArg<'rxjs'> => [api.query.staking.erasStakers, [era, accountId]])
      ]).pipe(
        map((all): DeriveOwnExposure[] =>
          eras.map((era, index) => ({ clipped: all[index], era, exposure: all[eras.length + index] }))
        )
      )
      : of([])
  );
}

export function ownExposure (instanceId: string, api: ApiInterfaceRx): (accountId: Uint8Array | string, era: EraIndex) => Observable<DeriveOwnExposure> {
  return memo(instanceId, (accountId: Uint8Array | string, era: EraIndex): Observable<DeriveOwnExposure> =>
    api.derive.staking._ownExposures(accountId, [era], true).pipe(
      map(([first]) => first)
    )
  );
}

export function ownExposures (instanceId: string, api: ApiInterfaceRx): (accountId: Uint8Array | string, withActive?: boolean) => Observable<DeriveOwnExposure[]> {
  return memo(instanceId, (accountId: Uint8Array | string, withActive = false): Observable<DeriveOwnExposure[]> => {
    return api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) =>
        api.derive.staking._ownExposures(accountId, eras, withActive)
      )
    );
  });
}

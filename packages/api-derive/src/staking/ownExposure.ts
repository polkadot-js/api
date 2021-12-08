// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx, QueryableStorageMultiArg } from '@polkadot/api/types';
import type { EraIndex } from '@polkadot/types/interfaces';
import type { PalletStakingExposure } from '@polkadot/types/lookup';
import type { DeriveOwnExposure } from '../types';

import { map, of } from 'rxjs';

import { memo } from '../util';
import { erasHistoricApplyAccount } from './util';

export function _ownExposures (instanceId: string, api: ApiInterfaceRx): (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean) => Observable<DeriveOwnExposure[]> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return memo(instanceId, (accountId: Uint8Array | string, eras: EraIndex[], _withActive: boolean): Observable<DeriveOwnExposure[]> =>
    eras.length
      ? api.queryMulti<PalletStakingExposure[]>([
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

export const ownExposures = erasHistoricApplyAccount<DeriveOwnExposure[]>('_ownExposures');

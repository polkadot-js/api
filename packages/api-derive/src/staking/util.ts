// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { EraIndex } from '@polkadot/types/interfaces';
import type { ExactDerive } from '../bundle';

import { switchMap } from 'rxjs';

import { memo } from '../util';

type ApplyReturn<T extends keyof ExactDerive['staking']> = ReturnType<ExactDerive['staking'][T]>;

export function filterEras <T extends { era: EraIndex }> (eras: EraIndex[], list: T[]): EraIndex[] {
  return eras.filter((era) => !list.some((entry) => era.eq(entry.era)));
}

export function erasHistoricApply <F extends '_erasExposure' | '_erasPoints' | '_erasPrefs' | '_erasRewards' | '_erasSlashes'> (fn: F): (instanceId: string, api: ApiInterfaceRx) => (withActive?: boolean) => ApplyReturn<F> {
  return (instanceId: string, api: ApiInterfaceRx) =>
    // Cannot quite get the typing right, but it is right in the code
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    memo(instanceId, (withActive = false) =>
      api.derive.staking.erasHistoric(withActive).pipe(
        switchMap((eras) => api.derive.staking[fn](eras, withActive))
      )
    ) as any;
}

export function erasHistoricApplyAccount <F extends '_ownExposures' | '_ownSlashes' | '_stakerPoints' | '_stakerPrefs' | '_stakerSlashes'> (fn: F): (instanceId: string, api: ApiInterfaceRx) => (accountId: string | Uint8Array, withActive?: boolean) => ApplyReturn<F> {
  return (instanceId: string, api: ApiInterfaceRx) =>
    // Cannot quite get the typing right, but it is right in the code
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    memo(instanceId, (accountId: string | Uint8Array, withActive = false) =>
      api.derive.staking.erasHistoric(withActive).pipe(
        switchMap((eras) => api.derive.staking[fn](accountId, eras, withActive))
      )
    ) as any;
}

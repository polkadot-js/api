// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { EraIndex } from '@polkadot/types/interfaces';

import { switchMap } from 'rxjs';

import { memo } from '../util';

export function filterEras <T extends { era: EraIndex }> (eras: EraIndex[], list: T[]): EraIndex[] {
  return eras.filter((era) => !list.some((entry) => era.eq(entry.era)));
}

export function erasHistoricApply <T> (fn: '_erasExposure' | '_erasPoints' | '_erasPrefs' | '_erasRewards' | '_erasSlashes'): (instanceId: string, api: ApiInterfaceRx) => (withActive?: boolean) => Observable<T> {
  return (instanceId: string, api: ApiInterfaceRx) =>
    memo(instanceId, (withActive = false) =>
      api.derive.staking.erasHistoric(withActive).pipe(
        switchMap((eras) => api.derive.staking[fn](eras, withActive))
      )
    );
}

export function erasHistoricApplyAccount <T> (fn: '_ownExposures' | '_ownSlashes' | '_stakerPoints' | '_stakerPrefs' | '_stakerSlashes'): (instanceId: string, api: ApiInterfaceRx) => (accountId: string | Uint8Array, withActive?: boolean) => Observable<T> {
  return (instanceId: string, api: ApiInterfaceRx) =>
    memo(instanceId, (accountId: string | Uint8Array, withActive = false) =>
      api.derive.staking.erasHistoric(withActive).pipe(
        switchMap((eras) => api.derive.staking[fn](accountId, eras, withActive))
      )
    );
}

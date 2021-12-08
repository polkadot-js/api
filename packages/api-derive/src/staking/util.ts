// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { EraIndex } from '@polkadot/types/interfaces';

import { switchMap } from 'rxjs';

export function filterEras <T extends { era: EraIndex }> (eras: EraIndex[], list: T[]): EraIndex[] {
  return eras.filter((era) => !list.some((entry) => era.eq(entry.era)));
}

export function erasHistoricApply <T, F extends (eras: EraIndex[], withActive: boolean) => Observable<T>> (api: ApiInterfaceRx, fn: F): (withActive?: boolean) => Observable<T> {
  return (withActive = false) =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => fn(eras, withActive))
    );
}

export function eraHistoricApplyAccount <T, F extends (accountId: string | Uint8Array, eras: EraIndex[], withActive: boolean) => Observable<T>> (api: ApiInterfaceRx, fn: F): (accountId: string | Uint8Array, withActive: boolean) => Observable<T> {
  return (accountId: string | Uint8Array, withActive = false) =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => fn(accountId, eras, withActive))
    );
}

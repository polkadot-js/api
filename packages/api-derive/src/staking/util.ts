// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ObsInnerType } from '@polkadot/api-base/types';
import type { EraIndex } from '@polkadot/types/interfaces';
import type { ExactDerive } from '../derive';
import type { DeriveApi } from '../types';

import { combineLatest, of, switchMap } from 'rxjs';

import { memo } from '../util';

type ApplyReturn<T extends keyof ExactDerive['staking']> = ReturnType<ExactDerive['staking'][T]>;

export function filterEras <T extends { era: EraIndex }> (eras: EraIndex[], list: T[]): EraIndex[] {
  return eras.filter((e) => !list.some(({ era }) => e.eq(era)));
}

export function erasHistoricApply <F extends '_erasExposure' | '_erasPoints' | '_erasPrefs' | '_erasRewards' | '_erasSlashes'> (fn: F): (instanceId: string, api: DeriveApi) => (withActive?: boolean) => ApplyReturn<F> {
  return (instanceId: string, api: DeriveApi) =>
    // Cannot quite get the typing right, but it is right in the code
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    memo(instanceId, (withActive = false) =>
      api.derive.staking.erasHistoric(withActive).pipe(
        switchMap((e) => api.derive.staking[fn](e, withActive))
      )
    ) as any;
}

export function erasHistoricApplyAccount <F extends '_ownExposures' | '_ownSlashes' | '_stakerPoints' | '_stakerPrefs' | '_stakerSlashes'> (fn: F): (instanceId: string, api: DeriveApi) => (accountId: string | Uint8Array, withActive?: boolean) => ApplyReturn<F> {
  return (instanceId: string, api: DeriveApi) =>
    // Cannot quite get the typing right, but it is right in the code
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    memo(instanceId, (accountId: string | Uint8Array, withActive = false) =>
      api.derive.staking.erasHistoric(withActive).pipe(
        switchMap((e) => api.derive.staking[fn](accountId, e, withActive))
      )
    ) as any;
}

export function singleEra <F extends '_eraExposure' | '_eraPrefs' | '_eraSlashes'> (fn: F): (instanceId: string, api: DeriveApi) => (era: EraIndex) => ApplyReturn<F> {
  return (instanceId: string, api: DeriveApi) =>
    // Cannot quite get the typing right, but it is right in the code
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    memo(instanceId, (era: EraIndex) =>
      api.derive.staking[fn](era, true)
    ) as any;
}

export function combineEras <F extends '_eraExposure' | '_eraPrefs' | '_eraSlashes'> (fn: F): (instanceId: string, api: DeriveApi) => (eras: EraIndex[], withActive: boolean) => Observable<ObsInnerType<ApplyReturn<F>>[]> {
  return (instanceId: string, api: DeriveApi) =>
    // Cannot quite get the typing right, but it is right in the code
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    memo(instanceId, (eras: EraIndex[], withActive: boolean) =>
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      eras.length
        ? combineLatest(eras.map((e) => api.derive.staking[fn](e, withActive)))
        : of([])
    ) as any;
}

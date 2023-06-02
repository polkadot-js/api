// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ObsInnerType } from '@polkadot/api-base/types';
import type { EraIndex } from '@polkadot/types/interfaces';
import type { ExactDerive } from '../derive.js';
import type { DeriveApi } from '../types.js';

import { BehaviorSubject, combineLatest, map, of, switchMap, tap, toArray } from 'rxjs';

import { arrayChunk, arrayFlatten, nextTick } from '@polkadot/util';

import { memo } from '../util/index.js';

type ApplyReturn<T extends keyof ExactDerive['staking']> = ReturnType<ExactDerive['staking'][T]>;

// only retrieve a maximum of 14 eras (84 / 6) at a time
// (This is not empirically calculated. Rather smaller sizes take longer
// time due to the serial nature, large sizes may tie up the RPCs)
const ERA_CHUNK_SIZE = 14;

/** @internal */
function chunkEras <T> (eras: EraIndex[], fn: (eras: EraIndex[]) => Observable<T[]>): Observable<T[]> {
  const chunked = arrayChunk(eras, ERA_CHUNK_SIZE);
  let index = 0;
  const subject = new BehaviorSubject<EraIndex[]>(chunked[index]);

  return subject.pipe(
    switchMap(fn),
    tap((): void => {
      nextTick((): void => {
        index++;

        index === chunked.length
          ? subject.complete()
          : subject.next(chunked[index]);
      });
    }),
    toArray(),
    map(arrayFlatten)
  );
}

export function filterEras <T extends { era: EraIndex }> (eras: EraIndex[], list: T[]): EraIndex[] {
  return eras.filter((e) => !list.some(({ era }) => e.eq(era)));
}

export function erasHistoricApply <F extends '_erasExposure' | '_erasPoints' | '_erasPrefs' | '_erasRewards' | '_erasSlashes'> (fn: F): (instanceId: string, api: DeriveApi) => (withActive?: boolean) => ApplyReturn<F> {
  return (instanceId: string, api: DeriveApi) =>
    memo(instanceId, (withActive?: boolean) =>
      api.derive.staking.erasHistoric(withActive).pipe(
        switchMap((eras) => api.derive.staking[fn](eras, withActive))
      ) as ApplyReturn<F>
    );
}

export function erasHistoricApplyAccount <F extends '_ownExposures' | '_ownSlashes' | '_stakerPoints' | '_stakerPrefs' | '_stakerSlashes'> (fn: F): (instanceId: string, api: DeriveApi) => (accountId: string | Uint8Array, withActive?: boolean) => ApplyReturn<F> {
  return (instanceId: string, api: DeriveApi) =>
    memo(instanceId, (accountId: string | Uint8Array, withActive?: boolean) =>
      api.derive.staking.erasHistoric(withActive).pipe(
        switchMap((eras) => api.derive.staking[fn](accountId, eras, withActive))
      ) as ApplyReturn<F>
    );
}

export function singleEra <F extends '_eraExposure' | '_eraPrefs' | '_eraSlashes'> (fn: F): (instanceId: string, api: DeriveApi) => (era: EraIndex) => ApplyReturn<F> {
  return (instanceId: string, api: DeriveApi) =>
    memo(instanceId, (era: EraIndex) =>
      api.derive.staking[fn](era, true) as ApplyReturn<F>
    );
}

export function combineEras <F extends '_eraExposure' | '_eraPrefs' | '_eraSlashes'> (fn: F): (instanceId: string, api: DeriveApi) => (eras: EraIndex[], withActive?: boolean) => Observable<ObsInnerType<ApplyReturn<F>>[]> {
  return (instanceId: string, api: DeriveApi) =>
    memo(instanceId, (eras: EraIndex[], withActive?: boolean) =>
      (!eras.length
        ? of([])
        : chunkEras(eras, (eras) =>
          combineLatest(
            eras.map((era) => api.derive.staking[fn](era, withActive))
          )
        )
      ) as Observable<ObsInnerType<ApplyReturn<F>>[]>
    );
}

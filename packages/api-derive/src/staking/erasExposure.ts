// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, EraIndex, Exposure } from '@polkadot/types/interfaces';
import { DeriveEraExposure, DeriveEraPointsAll } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { StorageKey } from '@polkadot/types';

import { memo } from '../util';

function queryClipped (api: ApiInterfaceRx): Observable<[EraIndex, [AccountId, Exposure][]][]> {
  return api.derive.staking.erasPoints().pipe(
    switchMap((allPoints): Observable<[DeriveEraPointsAll[], [StorageKey, Exposure][][]]> =>
      combineLatest([
        of(allPoints),
        combineLatest(
          // we could just do entries over the full set, however the resultset can be quite large - split it into
          // batches - may need to re-visit this, or alternatively use pages keys for exceptionally large sets
          allPoints.map(({ era }): Observable<[StorageKey, Exposure][]> =>
            api.query.staking.erasStakersClipped.entries(era)
          )
        )
      ])
    ),
    map(([allPoints, erasStakers]): [EraIndex, [AccountId, Exposure][]][] =>
      allPoints.map(({ era }, index): [EraIndex, [AccountId, Exposure][]] => [
        era,
        erasStakers[index].map(([key, exposure]): [AccountId, Exposure] => [
          key.args[1] as AccountId,
          exposure
        ])
      ])
    )
  );
}

export function erasExposure (api: ApiInterfaceRx): () => Observable<DeriveEraExposure[]> {
  return memo((): Observable<DeriveEraExposure[]> =>
    queryClipped(api).pipe(
      map((clipped): DeriveEraExposure[] =>
        clipped.map(([era, validators]): DeriveEraExposure => ({
          all: validators.reduce((all: Record<string, Exposure>, [validtorId, exposure]): Record<string, Exposure> => {
            all[validtorId.toString()] = exposure;

            return all;
          }, {}),
          era
        }))
      )
    )
  );
}

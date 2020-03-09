// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { Exposure } from '@polkadot/types/interfaces';
import { DeriveEraExposure, DeriveEraExposures, DeriveEraPointsAll, DeriveEraValPoints } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { StorageKey } from '@polkadot/types';

import { memo } from '../util';

function mapValidators (stakers: [StorageKey, Exposure][], validators: DeriveEraValPoints): DeriveEraExposures {
  return stakers.reduce((result: DeriveEraExposures, [key, exposure]): DeriveEraExposures => {
    const validatorId = key.args[1].toString();

    result[validatorId] = {
      exposure,
      points: validators[validatorId]
    };

    return result;
  }, {});
}

export function erasExposure (api: ApiInterfaceRx): (withActive?: boolean) => Observable<DeriveEraExposure[]> {
  return memo((withActive?: boolean): Observable<DeriveEraExposure[]> =>
    api.derive.staking.erasPoints(withActive).pipe(
      switchMap((allPoints): Observable<[DeriveEraPointsAll[], [StorageKey, Exposure][][]]> =>
        combineLatest([
          of(allPoints),
          combineLatest(
            // we could just do entries over the full set, however the set can be quite large - split it into
            // batches - may need to re-visit this, or alternatively use pages keys for exceptionally large sets
            allPoints.map(({ era }): Observable<[StorageKey, Exposure][]> =>
              api.query.staking.erasStakers.entries(era)
            )
          )
        ])
      ),
      map(([allPoints, erasStakers]): DeriveEraExposure[] =>
        allPoints.map(({ era, eraPoints, eraReward, validators }, index): DeriveEraExposure => ({
          era,
          eraPoints,
          eraReward,
          validators: mapValidators(erasStakers[index], validators)
        }))
      )
    )
  );
}

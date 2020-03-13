// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { EraIndex, EraRewardPoints } from '@polkadot/types/interfaces';
import { DeriveEraPoints, DeriveEraValPoints } from '../types';

import BN from 'bn.js';
import { Observable, asyncScheduler, combineLatest, of } from 'rxjs';
import { map, observeOn, switchMap } from 'rxjs/operators';

import { memo } from '../util';

function mapValidators ({ individual }: EraRewardPoints): DeriveEraValPoints {
  return [...individual.entries()]
    .filter(([, points]): boolean => points.gtn(0))
    .reduce((result: DeriveEraValPoints, [validatorId, points]): DeriveEraValPoints => {
      result[validatorId.toString()] = points;

      return result;
    }, {});
}

export function erasPoints (api: ApiInterfaceRx): (withActive?: boolean | BN | number) => Observable<DeriveEraPoints[]> {
  return memo((withActive?: boolean | number): Observable<DeriveEraPoints[]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      observeOn(asyncScheduler),
      switchMap((eras): Observable<[EraIndex[], EraRewardPoints[]]> =>
        combineLatest([
          of(eras),
          eras.length
            ? api.query.staking.erasRewardPoints.multi<EraRewardPoints>(eras)
            : of([])
        ])
      ),
      observeOn(asyncScheduler),
      map(([eras, points]): DeriveEraPoints[] =>
        eras.map((era, index): DeriveEraPoints => ({
          era,
          eraPoints: points[index].total,
          validators: mapValidators(points[index])
        }))
      )
    )
  );
}

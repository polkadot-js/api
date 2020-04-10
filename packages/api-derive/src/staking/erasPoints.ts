// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { EraIndex, EraRewardPoints } from '@polkadot/types/interfaces';
import { DeriveEraPoints, DeriveEraValPoints } from '../types';

import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { memo } from '../util';

function mapValidators ({ individual }: EraRewardPoints): DeriveEraValPoints {
  return [...individual.entries()]
    .filter(([, points]): boolean => points.gtn(0))
    .reduce((result: DeriveEraValPoints, [validatorId, points]): DeriveEraValPoints => {
      result[validatorId.toString()] = points;

      return result;
    }, {});
}

export function _erasPoints (api: ApiInterfaceRx): (eras: EraIndex[]) => Observable<DeriveEraPoints[]> {
  return memo((eras: EraIndex[]): Observable<DeriveEraPoints[]> =>
    eras.length
      ? api.query.staking.erasRewardPoints.multi<EraRewardPoints>(eras).pipe(
        map((points) =>
          eras.map((era, index): DeriveEraPoints => ({
            era,
            eraPoints: points[index].total,
            validators: mapValidators(points[index])
          }))
        )
      )
      : of([])
  );
}

export function erasPoints (api: ApiInterfaceRx): (withActive?: boolean) => Observable<DeriveEraPoints[]> {
  return memo((withActive?: boolean): Observable<DeriveEraPoints[]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._erasPoints(eras))
    )
  );
}

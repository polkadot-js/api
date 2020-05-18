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

function mapPoints (eras: EraIndex[], points: EraRewardPoints[]): DeriveEraPoints[] {
  return eras.map((era, index): DeriveEraPoints => ({
    era,
    eraPoints: points[index].total,
    validators: mapValidators(points[index])
  }));
}

export function _erasPoints (api: ApiInterfaceRx): (eras: EraIndex[], withActive: boolean) => Observable<DeriveEraPoints[]> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return memo((eras: EraIndex[], withActive: boolean): Observable<DeriveEraPoints[]> =>
    eras.length
      ? api.query.staking.erasRewardPoints.multi<EraRewardPoints>(eras).pipe(
        map((points) => mapPoints(eras, points))
      )
      : of([])
  );
}

export function erasPoints (api: ApiInterfaceRx): (withActive?: boolean) => Observable<DeriveEraPoints[]> {
  return memo((withActive = false): Observable<DeriveEraPoints[]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._erasPoints(eras, withActive))
    )
  );
}

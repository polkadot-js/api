// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { EraIndex, Exposure } from '@polkadot/types/interfaces';
import { DeriveEraExposure, DeriveEraNominatorExposure, DeriveEraValidatorExposure } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { StorageKey } from '@polkadot/types';

import { memo } from '../util';

type KeysAndExposures = [StorageKey, Exposure][];

function mapStakers (era: EraIndex, stakers: KeysAndExposures): DeriveEraExposure {
  const nominators: DeriveEraNominatorExposure = {};
  const validators: DeriveEraValidatorExposure = {};

  stakers.forEach(([key, exposure]): void => {
    const validatorId = key.args[1].toString();

    validators[validatorId] = exposure;

    exposure.others.forEach(({ who }, validatorIndex): void => {
      const nominatorId = who.toString();

      nominators[nominatorId] = nominators[nominatorId] || [];
      nominators[nominatorId].push({ validatorId, validatorIndex });
    });
  });

  return { era, nominators, validators };
}

export function eraExposure (api: ApiInterfaceRx): (era: EraIndex) => Observable<DeriveEraExposure> {
  return memo((era: EraIndex): Observable<DeriveEraExposure> =>
    api.query.staking.erasStakersClipped.entries(era).pipe(
      map((stakers) => mapStakers(era, stakers))
    )
  );
}

export function _erasExposure (api: ApiInterfaceRx): (eras: EraIndex[]) => Observable<DeriveEraExposure[]> {
  return memo((eras: EraIndex[]): Observable<DeriveEraExposure[]> =>
    eras.length
      ? combineLatest(eras.map((era) => api.derive.staking.eraExposure(era)))
      : of([])
  );
}

export function erasExposure (api: ApiInterfaceRx): (withActive?: boolean) => Observable<DeriveEraExposure[]> {
  return memo((withActive?: boolean): Observable<DeriveEraExposure[]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._erasExposure(eras))
    )
  );
}

// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { EraIndex, Exposure } from '@polkadot/types/interfaces';
import { DeriveEraExposure, DeriveEraNominatorExposure, DeriveEraValidatorExposure } from '../types';

import BN from 'bn.js';
import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { StorageKey } from '@polkadot/types';

import { memo } from '../util';

function mapStakers (era: EraIndex, stakers: [StorageKey, Exposure][]): DeriveEraExposure {
  const nominators: DeriveEraNominatorExposure = {};
  const validators: DeriveEraValidatorExposure = {};

  stakers.forEach(([key, exposure]): void => {
    const validatorId = key.args[1].toString();

    validators[validatorId] = exposure;

    exposure.others.forEach(({ who }, index): void => {
      const nominatorId = who.toString();

      nominators[nominatorId] = nominators[nominatorId] || [];
      nominators[nominatorId].push([validatorId, index]);
    });
  });

  return { era, nominators, validators };
}

export function erasExposure (api: ApiInterfaceRx): (withActive?: boolean | BN | number) => Observable<DeriveEraExposure[]> {
  return memo((withActive?: boolean | BN | number): Observable<DeriveEraExposure[]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras): Observable<[EraIndex[], [StorageKey, Exposure][][]]> =>
        combineLatest([
          of(eras),
          eras.length
            ? combineLatest(
              // we could just do entries over the full set, however the set can be quite large - split it into
              // batches - may need to re-visit this, or alternatively use pages keys for exceptionally large sets
              eras.map((era): Observable<[StorageKey, Exposure][]> =>
                api.query.staking.erasStakersClipped.entries(era).pipe(take(1))
              )
            )
            : of([])
        ])
      ),
      map(([eras, erasStakers]): DeriveEraExposure[] =>
        eras.map((era, index): DeriveEraExposure =>
          mapStakers(era, erasStakers[index])
        )
      )
    )
  );
}

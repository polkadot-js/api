// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { Balance, EraIndex } from '@polkadot/types/interfaces';
import { DeriveEraRewards } from '../types';

import BN from 'bn.js';
import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Option } from '@polkadot/types';

import { memo } from '../util';

export function erasRewards (api: ApiInterfaceRx): (withActive?: boolean | BN | number) => Observable<DeriveEraRewards[]> {
  return memo((withActive?: boolean | BN | number): Observable<DeriveEraRewards[]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras): Observable<[EraIndex[], Option<Balance>[]]> =>
        combineLatest([
          of(eras),
          eras.length
            ? api.query.staking.erasValidatorReward.multi<Option<Balance>>(eras)
            : of([])
        ])
      ),
      map(([eras, rewards]): DeriveEraRewards[] =>
        eras.map((era, index): DeriveEraRewards => ({
          era,
          eraReward: rewards[index].unwrapOrDefault()
        }))
      )
    )
  );
}

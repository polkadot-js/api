// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { Balance, EraIndex } from '@polkadot/types/interfaces';
import { DeriveEraRewards } from '../types';

import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Option } from '@polkadot/types';

import { memo } from '../util';

function mapRewards (eras: EraIndex[], optRewards: Option<Balance>[]): DeriveEraRewards[] {
  return eras.map((era, index): DeriveEraRewards => ({
    era,
    eraReward: optRewards[index].unwrapOrDefault()
  }));
}

export function _erasRewards (api: ApiInterfaceRx): (eras: EraIndex[], withActive: boolean) => Observable<DeriveEraRewards[]> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return memo((eras: EraIndex[], withActive: boolean): Observable<DeriveEraRewards[]> =>
    eras.length
      ? api.query.staking.erasValidatorReward.multi<Option<Balance>>(eras).pipe(
        map((optRewards) => mapRewards(eras, optRewards))
      )
      : of([])
  );
}

export function erasRewards (api: ApiInterfaceRx): (withActive?: boolean) => Observable<DeriveEraRewards[]> {
  return memo((withActive = false): Observable<DeriveEraRewards[]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._erasRewards(eras, false))
    )
  );
}

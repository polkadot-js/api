// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, ValidatorPrefs } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';

import { Observable, combineLatest, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Option, Vec } from '@polkadot/types';

import { memo } from '../util';

type DeriveControllers = [AccountId[], Option<AccountId>[]];

/**
 * @description From the list of stash accounts, retrieve the list of controllers
 */
export function controllers (api: ApiInterfaceRx): () => Observable<DeriveControllers> {
  return memo((): Observable<[AccountId[], Option<AccountId>[]]> =>
    api.query.staking.validators<ITuple<[Vec<AccountId>, Vec<ValidatorPrefs>]>>().pipe(
      switchMap(([stashIds]): Observable<DeriveControllers> =>
        combineLatest([
          of(stashIds),
          // for V2, don't return all the controllers, we call bonded at a later point
          api.consts.session
            ? of([])
            : api.query.staking.bonded.multi<Option<AccountId>>(stashIds)
        ])
      )
    ));
}

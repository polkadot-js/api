// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable, combineLatest, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, Option } from '@polkadot/types';

import { drr } from '../util/drr';

/**
 * @description From the list of stash accounts, retrieve the list of controllers
 */
export function controllers (api: ApiInterfaceRx): () => Observable<[AccountId[], Option<AccountId>[]]> {
  return (): Observable<[AccountId[], Option<AccountId>[]]> =>
    (api.query.staking.validators() as any as Observable<[AccountId[], any]>)
      .pipe(
        switchMap(([stashIds]): Observable<[AccountId[], Option<AccountId>[]]> =>
          combineLatest([
            of(stashIds),
            api.query.staking.bonded.multi(stashIds) as Observable<Option<AccountId>[]>
          ])
        ),
        drr()
      );
}

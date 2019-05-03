// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable, combineLatest, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { AccountId, Option } from '@polkadot/types';

import { drr } from '../../util/drr';

function allBonds (api: ApiInterface$Rx, stashIds: Array<AccountId>) {
  return combineLatest(
    // FIXME Convert to multi
    stashIds.map((id) =>
      (api.query.staking.bonded(id) as Observable<Option<AccountId>>)
    )
  );
}

/**
 * @description From the list of stash accounts, retrieve the list of controllers
 */
export function controllers (api: ApiInterface$Rx) {
  console.log('V3 CONTROLLER')
  return (): Observable<[Array<AccountId>, Array<Option<AccountId>>]> =>
    (api.query.staking.validators() as any as Observable<[Array<AccountId>, any]>)
      .pipe(
        switchMap(([stashIds]) =>
          combineLatest([
            of(stashIds),
            allBonds(api, stashIds)
          ])
        ),
        drr()
      );
}

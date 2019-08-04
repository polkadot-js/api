// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId } from '@polkadot/types/interfaces';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Option } from '@polkadot/types';
import { DerivedRecentlyOffline, DerivedStakingAccount, DerivedStakingAccounts } from '../types';

import { recentlyOffline } from './recentlyOffline';
import { drr } from '../util/drr';
import { addOnlineStatusToStakingAccount } from '../util/addOnlineStatusToStakingAccount';

/**
 * @description From the list of stash accounts, retrieve the list of controllers
 */
export function controllers (api: ApiInterfaceRx): () => Observable<[DerivedStakingAccounts, Option<AccountId>[]]> {
  return (): Observable<[DerivedStakingAccounts, Option<AccountId>[]]> =>
    combineLatest([
      recentlyOffline(api)(),
      (api.query.staking.validators() as any as Observable<[AccountId[], any]>)
    ])
      .pipe(
        switchMap(([recentlyOffline, [stashIds]]): Observable<[DerivedRecentlyOffline, AccountId[], Option<AccountId>[]]> =>
          combineLatest([
            of(recentlyOffline),
            of(stashIds),
            api.query.staking.bonded.multi(stashIds) as Observable<Option<AccountId>[]>
          ])
        ),
        map(([recentlyOffline, stashIds, controllerIds]): [DerivedStakingAccounts, Option<AccountId>[]] =>
          [
            stashIds.map(
              (stashId): DerivedStakingAccount =>
                addOnlineStatusToStakingAccount(recentlyOffline)(stashId)
            ),
            controllerIds
          ]
        ),
        drr()
      );
}

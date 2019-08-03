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
import { receivedHeartbeats } from '../imOnline/receivedHeartbeats';
import { drr } from '../util/drr';
import { addOnlineStatusToStakingAccount } from '../util/addOnlineStatusToStakingAccount';

/**
 * @description From the list of stash accounts, retrieve the list of controllers
 */
export function controllers (api: ApiInterfaceRx): () => Observable<[DerivedStakingAccounts, DerivedStakingAccounts]> {
  return (): Observable<[DerivedStakingAccounts, DerivedStakingAccounts]> =>
    combineLatest([
      recentlyOffline(api)(),
      (api.query.staking.validators() as any as Observable<[AccountId[], any]>)
    ])
      .pipe(
        switchMap(([recentlyOffline, [stashIds]]): Observable<[DerivedRecentlyOffline, AccountId[], boolean[], Option<AccountId>[]]> =>
          combineLatest([
            of(recentlyOffline),
            of(stashIds),
            receivedHeartbeats(api)(stashIds),
            api.query.staking.bonded.multi(stashIds) as Observable<Option<AccountId>[]>
          ])
        ),
        map(([recentlyOffline, stashIds, stashHeartbeats, controllerOptions]): [DerivedStakingAccounts, DerivedStakingAccounts] => {
          const controllerIds = controllerOptions.map((option): AccountId | null => option.unwrapOr(null));

          return [
            stashIds.map(
              (stashId, index): DerivedStakingAccount =>
                addOnlineStatusToStakingAccount(recentlyOffline)(
                  stashId,
                  stashHeartbeats[index]
                )
            ),
            controllerIds.map(
              (controllerId): DerivedStakingAccount =>
                addOnlineStatusToStakingAccount(recentlyOffline)(controllerId)
            )
          ];
        }
        ),
        drr()
      );
}

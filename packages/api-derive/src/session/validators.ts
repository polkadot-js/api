// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId } from '@polkadot/types/interfaces';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { DerivedRecentlyOffline, DerivedStakingAccount, DerivedStakingAccounts } from '../types';

import { receivedHeartbeats } from '../imOnline';
import { recentlyOffline } from '../staking';
import { drr } from '../util/drr';
import { addOnlineStatusToStakingAccount } from '../util/addOnlineStatusToStakingAccount';

/**
 * @description From the list of stash accounts, retrieve the list of controllers
 */
export function validators (api: ApiInterfaceRx): () => Observable<DerivedStakingAccounts> {
  return (): Observable<DerivedStakingAccounts> =>
    combineLatest([
      recentlyOffline(api)(),
      api.query.session.validators() as any as Observable<AccountId[]>
    ])
      .pipe(
        switchMap(([recentlyOffline, validatorIds]): Observable<[DerivedRecentlyOffline, AccountId[], boolean[]]> =>
          combineLatest([
            of(recentlyOffline),
            of(validatorIds),
            receivedHeartbeats(api)(validatorIds)
          ])
        ),
        map(([recentlyOffline, validatorIds, validatorHeartbeats]): DerivedStakingAccounts =>
          validatorIds.map(
            (validatorId, index): DerivedStakingAccount =>
              addOnlineStatusToStakingAccount(recentlyOffline)(
                validatorId,
                validatorHeartbeats[index]
              )
          )
        ),
        drr()
      );
}

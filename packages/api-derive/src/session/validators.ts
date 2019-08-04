// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId } from '@polkadot/types/interfaces';

import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { DerivedStakingAccount, DerivedStakingAccounts } from '../types';

import { recentlyOffline } from '../staking';
import { drr } from '../util/drr';
import { addOnlineStatusToStakingAccount } from '../util/addOnlineStatusToStakingAccount';

/**
 * @description Retrieve the current session validators and any offline status reports
 */
export function validators (api: ApiInterfaceRx): () => Observable<DerivedStakingAccounts> {
  return (): Observable<DerivedStakingAccounts> =>
    combineLatest([
      recentlyOffline(api)(),
      api.query.session.validators() as any as Observable<AccountId[]>
    ])
      .pipe(
        map(([recentlyOffline, validatorIds]): DerivedStakingAccounts =>
          validatorIds.map(
            (validatorId): DerivedStakingAccount =>
              addOnlineStatusToStakingAccount(recentlyOffline)(validatorId)
          )
        ),
        drr()
      );
}

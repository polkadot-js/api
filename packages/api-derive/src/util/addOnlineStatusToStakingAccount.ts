// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId } from '@polkadot/types/interfaces';

import { DerivedStakingAccount, DerivedRecentlyOffline } from '../types';

export function addOnlineStatusToStakingAccount (recentlyOffline: DerivedRecentlyOffline): (account: AccountId | null, isOnline: boolean) => DerivedStakingAccount {
  return (account: AccountId | null, isOnline: boolean): DerivedStakingAccount => {
    return [
      account,
      !account
        ? {}
        : {
          online: {
            isOnline
          },
          ...(
            recentlyOffline && recentlyOffline[account.toString()]
              ? { offline: recentlyOffline[account.toString()] }
              : {}
          )
        }
    ];
  };
}

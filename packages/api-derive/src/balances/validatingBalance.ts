// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { AccountId, AccountIndex, Address, Balance } from '@polkadot/types';

import { DerivedBalances } from '../types';
import { drr } from '../util/drr';
import { votingBalance } from './votingBalance';
import { votingBalancesNominatorsFor } from './votingBalancesNominatorsFor';

export function validatingBalance (api: ApiInterface$Rx) {
  return (address: AccountId | AccountIndex | Address | string): Observable<DerivedBalances> => {
    return combineLatest([
      votingBalance(api)(address),
      votingBalancesNominatorsFor(api)(address)
    ]).pipe(
      map(([balance, nominators]) => {
        const nominatedBalance = nominators.reduce(
          (total: BN, nominatorBalance: DerivedBalances) =>
            total.add(nominatorBalance.votingBalance),
          new BN(0)
        );

        return {
          ...balance,
          nominators,
          nominatedBalance: new Balance(nominatedBalance),
          stakingBalance: new Balance(
            nominatedBalance.add(balance.votingBalance)
          )
        };
      }),
      drr()
    );
  };
}

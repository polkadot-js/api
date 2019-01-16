// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { AccountId } from '@polkadot/types/index';

import { DerivedBalancesMap } from '../types';
import { validatingBalances } from '../balances';
import { drr } from '../util/drr';

/**
 * Get the latest block number.
 */
export function intentionsBalances (api: ApiInterface$Rx) {
  return (): Observable<DerivedBalancesMap> =>
    (api.query.staking.intentions() as any as Observable<Array<AccountId>>)
      .pipe(
        switchMap(validatingBalances(api)),
        drr()
      ) as Observable<DerivedBalancesMap>;
}

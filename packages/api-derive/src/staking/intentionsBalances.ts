// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { Vector } from '@polkadot/types/codec';
import { AccountId } from '@polkadot/types/index';

import { DerivedBalancesMap } from '../types';
import { validatingBalances } from '../balances';
import { drr } from '../util/drr';

/**
 * Get the balances for all intentions and their nominators
 */
export function intentionsBalances (api: ApiInterface$Rx) {
  return (): Observable<DerivedBalancesMap> =>
    // tslint:disable-next-line
    (api.query.staking.intentions() as Observable<Vector<AccountId>>)
      .pipe(
        switchMap(validatingBalances(api)),
        drr()
      ) as Observable<DerivedBalancesMap>;
}

// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { combineLatest, Observable } from 'rxjs';
import ApiRx from '@polkadot/api/rx';
import { AccountId, AccountIndex } from '@polkadot/types/index';

import { DerivedBalances } from '../types';
import { votingBalance } from './votingBalance';

export function votingBalances (api: ApiRx) {
  return (...params: Array<any>): Observable<Array<DerivedBalances>> => {
    const addresses: Array<AccountIndex | AccountId | string> = params.slice(0, params.length - 1);
    return combineLatest(...addresses.map(votingBalance(api)));
  };
}

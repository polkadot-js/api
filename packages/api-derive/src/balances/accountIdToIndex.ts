// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import ApiRx from '@polkadot/api/rx';
import { AccountId, AccountIndex } from '@polkadot/types/index';

import { accountIndexes, AccountIndexes } from './accountIndexes';
import { drr } from '../util/drr';

export function accountIdToIndex (api: ApiRx) {
  return (accountId: AccountId | string): Observable<AccountIndex> =>
    accountIndexes(api)()
      .pipe(
        map((indexes: AccountIndexes) => (indexes || {})[accountId.toString()]),
        drr()
      );
}

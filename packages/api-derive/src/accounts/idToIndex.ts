// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { AccountId, AccountIndex } from '@polkadot/types';

import { indexes, AccountIndexes } from './indexes';
import { drr } from '../util/drr';

export function idToIndex (api: ApiInterface$Rx) {
  return (accountId: AccountId | string): Observable<AccountIndex | undefined> =>
    indexes(api)()
      .pipe(
        startWith({}),
        map((indexes: AccountIndexes) => (indexes || {})[accountId.toString()]),
        drr()
      );
}

// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, BlockNumber } from '@polkadot/types/interfaces';
import { Codec } from '@polkadot/types/types';

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { DerivedRecentlyOffline } from '../types';

import { drr } from '../util/drr';

/**
 * @description Retrieve a keyed record of accounts recently reported to be offline
 */
export function recentlyOffline (api: ApiInterfaceRx): () => Observable<DerivedRecentlyOffline> {
  return (): Observable<DerivedRecentlyOffline> =>
    api.query.staking
      .recentlyOffline<[AccountId, BlockNumber, BN][] & Codec>()
      .pipe(
        map((recentlyOffline): DerivedRecentlyOffline =>
          recentlyOffline.reduce((result: DerivedRecentlyOffline, [accountId, blockNumber, count]): DerivedRecentlyOffline => {
            const key = accountId.toString();

            if (!result[key]) {
              result[key] = [];
            }

            result[key].push({
              blockNumber,
              count
            });

            return result;
          },
          {})
        ),
        drr()
      );
}

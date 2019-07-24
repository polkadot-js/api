// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, Vector } from '@polkadot/types';
import { DerivedVoterPositions } from '../types';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { drr } from '../util/drr';
import { voterPositions } from './voterPositions';

/**
 * @name voters
 * @returns An array of all current voters from all sets.
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.elections.voters((voters) => {
 *   console.log(`There are ${voters.length} current voters.`);
 * });
 * ```
 */
export function voters (api: ApiInterfaceRx): () => Observable<Vector<AccountId>> {
  return (): Observable<Vector<AccountId>> =>
    voterPositions(api)().pipe(
      map(
        (voterPositions: DerivedVoterPositions): Vector<AccountId> =>
          new Vector(
            AccountId,
            Object.entries(voterPositions)
              .sort((a, b): 0 | 1 | -1 => a[1].globalIndex.cmp(b[1].globalIndex))
              .map(([accountId]): AccountId => new AccountId(accountId))
          )
      ),
      drr()
    );
}

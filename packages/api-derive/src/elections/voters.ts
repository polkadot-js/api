// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId } from '@polkadot/types/interfaces';
import { DerivedVoterPositions } from '../types';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { createType, Vec } from '@polkadot/types';

import { memo } from '../util';

function queryElections (api: ApiInterfaceRx): Observable<AccountId[]> {
  return api.derive.elections.voterPositions().pipe(
    map((voterPositions: DerivedVoterPositions): Vec<AccountId> =>
      createType(
        'Vec<AccountId>',
        Object.entries(voterPositions)
          .sort((a, b): number => a[1].globalIndex.cmp(b[1].globalIndex))
          .map(([accountId]): AccountId => createType('AccountId', accountId))
      )
    )
  );
}
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
export function voters (api: ApiInterfaceRx): () => Observable<AccountId[]> {
  return memo((): Observable<AccountId[]> =>
    api.query.elections
      ? queryElections(api)
      : of([])
  );
}

// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { DeriveApi, DeriveReferendumExt } from '../types.js';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { objectSpread } from '@polkadot/util';

import { memo } from '../util/index.js';

/**
 * @name referendums
 * @description Retrieves information about all active referendums, including their details and associated votes.
 * @example
 * ```javascript
 * const referendums = await api.derive.democracy.referendums();
 * ```
 */
export function referendums (instanceId: string, api: DeriveApi): () => Observable<DeriveReferendumExt[]> {
  return memo(instanceId, (): Observable<DeriveReferendumExt[]> =>
    api.derive.democracy.referendumsActive().pipe(
      switchMap((referendums) =>
        referendums.length
          ? combineLatest([
            of(referendums),
            api.derive.democracy._referendumsVotes(referendums)
          ])
          : of([[], []])
      ),
      map(([referendums, votes]) =>
        referendums.map((referendum, index): DeriveReferendumExt =>
          objectSpread({}, referendum, votes[index])
        )
      )
    )
  );
}

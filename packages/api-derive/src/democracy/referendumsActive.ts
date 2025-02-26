// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { DeriveApi, DeriveReferendum } from '../types.js';

import { of, switchMap } from 'rxjs';

import { memo } from '../util/index.js';

/**
 * @name referendumsActive
 * @description Retrieves information about active referendums.
 * @example
 * ```javascript
 * const referendums = await api.derive.democracy.referendumsActive();
 * console.log("Active Referendums:", referendums);
 * ```
 */
export function referendumsActive (instanceId: string, api: DeriveApi): () => Observable<DeriveReferendum[]> {
  return memo(instanceId, (): Observable<DeriveReferendum[]> =>
    api.derive.democracy.referendumIds().pipe(
      switchMap((ids): Observable<DeriveReferendum[]> =>
        ids.length
          ? api.derive.democracy.referendumsInfo(ids)
          : of([])
      )
    )
  );
}

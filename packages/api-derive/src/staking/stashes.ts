// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AccountId } from '@polkadot/types/interfaces';
import type { DeriveApi } from '../types.js';

import { map, startWith, switchMap } from 'rxjs';

import { drr, memo } from '../util/index.js';

function onBondedEvent (api: DeriveApi): Observable<number> {
  let current = Date.now();

  return api.query.system.events().pipe(
    map((events): number => {
      current = events.filter(({ event, phase }): boolean => {
        try {
          return phase.isApplyExtrinsic &&
            event.section === 'staking' &&
            event.method === 'Bonded';
        } catch {
          return false;
        }
      })
        ? Date.now()
        : current;

      return current;
    }),
    startWith(current),
    drr({ skipTimeout: true })
  );
}

/**
 * @name stashes
 * @description Retrieve the list of all validator stashes.
 * @example
 * ```javascript
 * const stashes = await api.derive.staking.stashes();
 * console.log(
 *   "Validator Stashes:",
 *   stashes.map((s) => s.toString())
 * );
 * ```
 */
export function stashes (instanceId: string, api: DeriveApi): () => Observable<AccountId[]> {
  return memo(instanceId, (): Observable<AccountId[]> =>
    onBondedEvent(api).pipe(
      switchMap(() => api.query.staking.validators.keys()),
      map((keys) => keys.map(({ args: [v] }) => v).filter((a) => a))
    )
  );
}

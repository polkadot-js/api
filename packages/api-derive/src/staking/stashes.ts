// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AccountId } from '@polkadot/types/interfaces';
import type { ApiInterfaceRx } from '../../types';

import { map, startWith, switchMap } from 'rxjs';

import { drr, memo } from '../util';

function onBondedEvent (api: ApiInterfaceRx): Observable<number> {
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
 * @description Retrieve the list of all validator stashes
 */
export function stashes (instanceId: string, api: ApiInterfaceRx): () => Observable<AccountId[]> {
  return memo(instanceId, (): Observable<AccountId[]> =>
    onBondedEvent(api).pipe(
      switchMap(() => api.query.staking.validators.keys()),
      map((keys) => keys.map(({ args: [validatorId] }) => validatorId).filter((a) => a))
    )
  );
}

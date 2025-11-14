// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { BN } from '@polkadot/util';
import type { DeriveApi, DeriveOwnContributions } from '../types.js';

import { combineLatest, EMPTY, map, of, startWith, switchMap } from 'rxjs';

import { objectSpread } from '@polkadot/util';

import { memo } from '../util/index.js';
import { extractContributed } from './util.js';

function _getValues (api: DeriveApi, childKey: string, keys: string[]): Observable<DeriveOwnContributions> {
  // We actually would love to use multi-keys https://github.com/paritytech/substrate/issues/9203
  return combineLatest(keys.map((k) => api.rpc.childstate.getStorage(childKey, k))).pipe(
    map((values) =>
      values
        .map((v) => api.registry.createType('Option<StorageData>', v))
        .map((o) =>
          o.isSome
            ? api.registry.createType('Balance', o.unwrap())
            : api.registry.createType('Balance', 0)
        )
        .reduce((all: DeriveOwnContributions, b, index): DeriveOwnContributions =>
          objectSpread(all, { [keys[index]]: b }), {})
    )
  );
}

function _watchOwnChanges (api: DeriveApi, paraId: string | number | BN, childkey: string, keys: string[]): Observable<DeriveOwnContributions> {
  return api.query.system.events().pipe(
    switchMap((events): Observable<DeriveOwnContributions> => {
      const changes = extractContributed(paraId, events);
      const filtered = keys.filter((k) =>
        changes.added.includes(k) ||
        changes.removed.includes(k)
      );

      return filtered.length
        ? _getValues(api, childkey, filtered)
        : EMPTY;
    }),
    startWith({})
  );
}

function _contributions (api: DeriveApi, paraId: string | number | BN, childKey: string, keys: string[]): Observable<DeriveOwnContributions> {
  return combineLatest([
    _getValues(api, childKey, keys),
    _watchOwnChanges(api, paraId, childKey, keys)
  ]).pipe(
    map(([all, latest]) =>
      objectSpread({}, all, latest)
    )
  );
}

/**
 * @name ownContributions
 * @description Retrieves the contribution amounts made by specific accounts (`keys`) to a given parachain crowdloan (`paraId`).
 * @param {string | number | BN} paraId The parachain ID for which contributions are being queried.
 * @param {string[]} keys An array of account addresses whose contributions are to be fetched.
 * @example
 * ```javascript
 * const contributions = await api.derive.crowdloan.ownContributions(2000, ['5Ff...PqV', '5Gg...XyZ']);
 * console.log("Own Contributions:", contributions);
 * ```
 */
export function ownContributions (instanceId: string, api: DeriveApi): (paraId: string | number | BN, keys: string[]) => Observable<DeriveOwnContributions> {
  return memo(instanceId, (paraId: string | number | BN, keys: string[]): Observable<DeriveOwnContributions> =>
    api.derive.crowdloan.childKey(paraId).pipe(
      switchMap((childKey) =>
        childKey && keys.length
          ? _contributions(api, paraId, childKey, keys)
          : of({})
      )
    )
  );
}

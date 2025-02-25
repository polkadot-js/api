// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { BalanceOf, EraIndex, Perbill } from '@polkadot/types/interfaces';
import type { ITuple } from '@polkadot/types/types';
import type { DeriveApi, DeriveStakerSlashes } from '../types.js';

import { combineLatest, map, of } from 'rxjs';

import { firstMemo, memo } from '../util/index.js';
import { erasHistoricApplyAccount } from './util.js';

export function _ownSlashes (instanceId: string, api: DeriveApi): (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean) => Observable<DeriveStakerSlashes[]> {
  return memo(instanceId, (accountId: Uint8Array | string, eras: EraIndex[], _withActive: boolean): Observable<DeriveStakerSlashes[]> =>
    eras.length
      ? combineLatest([
        combineLatest(eras.map((e) => api.query.staking.validatorSlashInEra(e, accountId))),
        combineLatest(eras.map((e) => api.query.staking.nominatorSlashInEra(e, accountId)))
      ]).pipe(
        map(([vals, noms]): DeriveStakerSlashes[] =>
          eras.map((era, index) => ({
            era,
            total: vals[index].isSome
              ? (vals[index].unwrap() as ITuple<[Perbill, BalanceOf]>)[1]
              : (noms[index].unwrapOrDefault() as BalanceOf)
          }))
        )
      )
      : of([])
  );
}

/**
 * @name ownSlash
 * @description Retrieves the slashes applied to a specific account in a given era.
 * @param { Uint8Array | string } accountId The validator stash account.
 * @param {EraIndex} era The staking era to query.
 * @example
 * ```javascript
 * const era = api.createType("EraIndex", 1000);
 * const slashedAmount = await api.derive.staking.ownSlash(
 *   ALICE,
 *   era
 * );
 * console.log(`Era: ${slashedAmount.era}, total ${slashedAmount.total}`);
 * ```
 */
export const ownSlash = /*#__PURE__*/ firstMemo(
  (api: DeriveApi, accountId: Uint8Array | string, era: EraIndex) =>
    api.derive.staking._ownSlashes(accountId, [era], true)
);

/**
 * @name ownSlashes
 * @description Retrieves the slashes for a specific account across all historic eras.
 * @param { Uint8Array | string } accountId The validator stash account.
 * @param { boolean } withActive Whether to include the active era.
 * @example
 * ```javascript
 * const slashes = await api.derive.staking.ownSlashes(
 *   ALICE,
 *   true
 * );
 * console.log(slashes);
 * ```
 */
export const ownSlashes = /*#__PURE__*/ erasHistoricApplyAccount('_ownSlashes');

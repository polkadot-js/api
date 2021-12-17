// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AccountId, Header } from '@polkadot/types/interfaces';
import type { Registry } from '@polkadot/types/types';
import type { HeaderExtended } from '../type/types';
import type { DeriveApi } from '../types';

import { combineLatest, map, of } from 'rxjs';

import { createHeaderExtended } from '../type';
import { memo } from '../util';

/**
 * @name subscribeNewHeads
 * @returns A header with the current header (including extracted author)
 * @description An observable of the current block header and it's author
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.chain.subscribeNewHeads((header) => {
 *   console.log(`block #${header.number} was authored by ${header.author}`);
 * });
 * ```
 */
export function subscribeNewHeads (instanceId: string, api: DeriveApi): () => Observable<HeaderExtended> {
  return memo(instanceId, (): Observable<HeaderExtended> =>
    combineLatest([
      api.rpc.chain.subscribeNewHeads<Header>(),
      api.query.session
        ? api.query.session.validators<AccountId[]>()
        : of(undefined)
    ]).pipe(
      map(([header, validators]): HeaderExtended => {
        header.createdAtHash = header.hash;

        return createHeaderExtended(header.registry as Registry, header, validators);
      })
    )
  );
}

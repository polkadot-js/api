// Copyright 2017-2024 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { HeaderExtended } from '../type/types.js';
import type { DeriveApi } from '../types.js';

import { map, switchMap } from 'rxjs';

import { createHeaderExtended } from '../type/index.js';
import { memo } from '../util/index.js';
import { getAuthorDetails } from './util.js';

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
    api.rpc.chain.subscribeNewHeads().pipe(
      switchMap((header) =>
        getAuthorDetails(api, header)
      ),
      map(([header, validators, author]): HeaderExtended => {
        header.createdAtHash = header.hash;

        return createHeaderExtended(header.registry, header, validators, author);
      })
    )
  );
}

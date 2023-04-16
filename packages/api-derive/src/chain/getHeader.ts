// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { HeaderExtended } from '../type/types.js';
import type { DeriveApi } from '../types.js';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { createHeaderExtended } from '../type/index.js';
import { memo } from '../util/index.js';
import { getAuthorDetails } from './util.js';

/**
 * @name getHeader
 * @param {( Uint8Array | string )} hash - A block hash as U8 array or string.
 * @returns An array containing the block header and the block author
 * @description Get a specific block header and extend it with the author
 * @example
 * <BR>
 *
 * ```javascript
 * const { author, number } = await api.derive.chain.getHeader('0x123...456');
 *
 * console.log(`block #${number} was authored by ${author}`);
 * ```
 */
export function getHeader (instanceId: string, api: DeriveApi): (blockHash: Uint8Array | string) => Observable<HeaderExtended> {
  return memo(instanceId, (blockHash: Uint8Array | string): Observable<HeaderExtended> =>
    api.rpc.chain.getHeader(blockHash).pipe(
      switchMap((header) =>
        combineLatest([
          of(header),
          // For on-chain state, we need to retrieve it as per the start
          // of the block being constructed, i.e. session validators would
          // be at the point of the block construction, not when all operations
          // has been supplied.
          //
          // However for the first block (no parentHash available), we would
          // just use the as-is
          api.queryAt(
            header.parentHash.isEmpty
              ? blockHash
              : header.parentHash
          )
        ])
      ),
      switchMap(([header, queryAt]) =>
        getAuthorDetails(header, queryAt)
      ),
      map(([header, validators, author]) =>
        createHeaderExtended((validators || header).registry, header, validators, author)
      )
    )
  );
}

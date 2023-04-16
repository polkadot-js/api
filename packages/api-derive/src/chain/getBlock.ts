// Copyright 2017-2023 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { SignedBlockExtended } from '../type/types.js';
import type { DeriveApi } from '../types.js';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { createSignedBlockExtended } from '../type/index.js';
import { memo } from '../util/index.js';
import { getAuthorDetails } from './util.js';

/**
 * @name getBlock
 * @param {( Uint8Array | string )} hash - A block hash as U8 array or string.
 * @description Get a specific block (e.g. rpc.chain.getBlock) and extend it with the author
 * @example
 * <BR>
 *
 * ```javascript
 * const { author, block } = await api.derive.chain.getBlock('0x123...456');
 *
 * console.log(`block #${block.header.number} was authored by ${author}`);
 * ```
 */
export function getBlock (instanceId: string, api: DeriveApi): (hash: Uint8Array | string) => Observable<SignedBlockExtended> {
  return memo(instanceId, (blockHash: Uint8Array | string): Observable<SignedBlockExtended> =>
    api.rpc.chain.getBlock(blockHash).pipe(
      switchMap((signedBlock) =>
        combineLatest([
          of(signedBlock),
          signedBlock.block.header.parentHash.isEmpty
            ? of(null)
            : api.queryAt(signedBlock.block.header.parentHash),
          api.queryAt(blockHash)
        ])
      ),
      switchMap(([signedBlock, parentAt, blockAt]) =>
        combineLatest([
          of(signedBlock),
          blockAt.system.events(),
          // For on-chain state, we need to retrieve it as per the start
          // of the block being constructed, i.e. session validators would
          // be at the point of the block construction, not when all operations
          // has been supplied.
          //
          // However for the first block (no parentHash available), we would
          // just use the as-is
          getAuthorDetails(signedBlock.block.header, parentAt || blockAt)
        ])
      ),
      map(([signedBlock, events, [, validators, author]]) =>
        createSignedBlockExtended(events.registry, signedBlock, events, validators, author)
      )
    )
  );
}

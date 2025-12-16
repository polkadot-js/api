// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { SignedBlockExtended } from '../type/types.js';
import type { DeriveApi } from '../types.js';

import { mergeMap } from 'rxjs';

import { memo } from '../util/index.js';

/**
 * @name subscribeFinalizedBlocks
 * @description Retrieves the finalized block & events for that block
 * @example
 * ```javascript
 * const unsub = await api.derive.chain.subscribeFinalizedBlocks((finalizedBlock) => {
 *  console.log(`# Finalized block ${finalizedBlock.block.hash}`);
 * });
 * ```
 */
export function subscribeFinalizedBlocks (instanceId: string, api: DeriveApi): () => Observable<SignedBlockExtended> {
  return memo(instanceId, (): Observable<SignedBlockExtended> =>
    api.derive.chain.subscribeFinalizedHeads().pipe(
      mergeMap((header) =>
        api.derive.chain.getBlock(header.createdAtHash || header.hash)
      )
    )
  );
}

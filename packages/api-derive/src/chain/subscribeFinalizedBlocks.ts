// Copyright 2017-2024 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { SignedBlockExtended } from '../type/types.js';
import type { DeriveApi } from '../types.js';

import { concatMap } from 'rxjs';

import { memo } from '../util/index.js';

/**
 * @name subscribeFinalizedBlocks
 * @returns The finalized block & events for that block
 */
export function subscribeFinalizedBlocks (instanceId: string, api: DeriveApi): () => Observable<SignedBlockExtended> {
  return memo(instanceId, (): Observable<SignedBlockExtended> =>
    api.derive.chain.subscribeFinalizedHeads().pipe(
      concatMap((header) =>
        api.derive.chain.getBlock(header.createdAtHash || header.hash)
      )
    )
  );
}

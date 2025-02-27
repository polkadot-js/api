// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { EventRecord, Hash, SignedBlock } from '@polkadot/types/interfaces';
import type { DeriveApi } from '../types.js';

import { combineLatest, map, switchMap } from 'rxjs';

import { memo } from '../util/index.js';

interface Result {
  block: SignedBlock;
  events: EventRecord[];
}

/**
 * @name events
 * @param {Hash} at Block hash to query at.
 * @description Retrieves the block information alongside its events at a given block hash
 * @example
 * ```javascript
 * const blockHash = api.registry.createType(
 *   "Hash",
 *   "0xf1dc2efe8265be67deea5e91b05a98a7f9f81f66854e92825cf36f541beb7af6"
 * );
 * const { events, block } = await api.derive.tx.events(blockHash);
 * ```
 */
export function events (instanceId: string, api: DeriveApi): (at: Hash) => Observable<Result> {
  return memo(instanceId, (blockHash: Hash) =>
    combineLatest([
      api.rpc.chain.getBlock(blockHash),
      api.queryAt(blockHash).pipe(
        switchMap((queryAt) =>
          queryAt.system.events()
        )
      )
    ]).pipe(
      map(([block, events]) => ({ block, events }))
    )
  );
}

// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { EventRecord, Hash, SignedBlock } from '@polkadot/types/interfaces';
import type { Observable } from '@polkadot/x-rxjs';
import type { FullNewBlock } from '../types';

import { combineLatest, of } from '@polkadot/x-rxjs';
import { map, switchMap } from '@polkadot/x-rxjs/operators';

import { memo } from '../util';

/**
 * @name subscribeNewBlocks
 * @returns The latest block & events for that block
 */
export function subscribeNewBlocks (instanceId: string, api: ApiInterfaceRx): () => Observable<FullNewBlock> {
  return memo(instanceId, (): Observable<FullNewBlock> =>
    api.derive.chain.subscribeNewHeads().pipe(
      switchMap((header): Observable<[Hash, EventRecord[], SignedBlock]> => {
        const blockHash = header.hash;

        return combineLatest(
          of(blockHash),
          api.query.system.events.at(blockHash),
          api.rpc.chain.getBlock(header.hash)
        );
      }),
      map(([blockHash, events, block]) => ({ block: block.block, blockHash, blockNumber: block.block.header.number.unwrap(), events, justification: block.justification }))
    )
  );
}

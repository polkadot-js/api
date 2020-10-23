// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiInterfaceRx } from '@polkadot/api/types';
import { EventRecord, Hash, SignedBlock } from '@polkadot/types/interfaces';
import { FullNewBlock } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

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

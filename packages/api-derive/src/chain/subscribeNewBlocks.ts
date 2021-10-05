// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { SignedBlockExtended } from '../type/types';

import { map, switchMap } from 'rxjs';

import { createSignedBlockExtended } from '../type';
import { memo } from '../util';

/**
 * @name subscribeNewBlocks
 * @returns The latest block & events for that block
 */
export function subscribeNewBlocks (instanceId: string, api: ApiInterfaceRx): () => Observable<SignedBlockExtended> {
  return memo(instanceId, (): Observable<SignedBlockExtended> =>
    api.derive.chain.subscribeNewHeads().pipe(
      switchMap((header) => {
        const blockHash = header.createdAtHash || header.hash;

        // we get the block first, setting up the registry
        return api.rpc.chain.getBlock(blockHash).pipe(
          switchMap((block) =>
            api.query.system.events.at(blockHash).pipe(
              map((events) =>
                createSignedBlockExtended(block.registry, block, events, header.validators)
              )
            )
          )
        );
      })
    )
  );
}

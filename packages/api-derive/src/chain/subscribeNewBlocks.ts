// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Registry } from '@polkadot/types/types';
import type { SignedBlockExtended } from '../type/types';
import type { DeriveApi } from '../types';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { createSignedBlockExtended } from '../type';
import { memo } from '../util';

/**
 * @name subscribeNewBlocks
 * @returns The latest block & events for that block
 */
export function subscribeNewBlocks (instanceId: string, api: DeriveApi): () => Observable<SignedBlockExtended> {
  return memo(instanceId, (): Observable<SignedBlockExtended> =>
    api.derive.chain.subscribeNewHeads().pipe(
      switchMap((header) => {
        const blockHash = header.createdAtHash || header.hash;

        // we get the block first, setting up the registry
        return combineLatest([
          of(header),
          api.rpc.chain.getBlock(blockHash),
          api.queryAt(blockHash).pipe(
            switchMap((queryAt) =>
              queryAt.system.events()
            )
          )
        ]);
      }),
      map(([header, block, events]) =>
        createSignedBlockExtended(block.registry as Registry, block, events, header.validators)
      )
    )
  );
}

// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Vec } from '@polkadot/types';
import type { EventRecord, SignedBlock } from '@polkadot/types/interfaces';
import type { Observable } from '@polkadot/x-rxjs';
import type { HeaderExtended } from '../type';

import { combineLatest, of } from '@polkadot/x-rxjs';
import { map, switchMap } from '@polkadot/x-rxjs/operators';

import { SignedBlockExtended } from '../type';
import { memo } from '../util';

/**
 * @name subscribeNewBlocks
 * @returns The latest block & events for that block
 */
export function subscribeNewBlocks (instanceId: string, api: ApiInterfaceRx): () => Observable<SignedBlockExtended> {
  return memo(instanceId, (): Observable<SignedBlockExtended> =>
    api.derive.chain.subscribeNewHeads().pipe(
      switchMap((header): Observable<[SignedBlock, Vec<EventRecord>, HeaderExtended]> => {
        const blockHash = header.createdAtHash || header.hash;

        return combineLatest(
          api.rpc.chain.getBlock(blockHash),
          api.query.system.events.at(blockHash),
          of(header)
        );
      }),
      map(([block, events, header]) =>
        new SignedBlockExtended(api.registry, block, events, header.validators)
      )
    )
  );
}

// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { SignedBlockExtended } from '../type/types';

import { catchError, combineLatest, map, of } from 'rxjs';

import { createSignedBlockExtended } from '../type';
import { memo } from '../util';

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
export function getBlock (instanceId: string, api: ApiInterfaceRx): (hash: Uint8Array | string) => Observable<SignedBlockExtended | undefined> {
  return memo(instanceId, (hash: Uint8Array | string): Observable<SignedBlockExtended | undefined> =>
    combineLatest([
      api.rpc.chain.getBlock(hash),
      api.query.system.events.at(hash),
      api.query.session
        ? api.query.session.validators.at(hash)
        : of([])
    ]).pipe(
      map(([signedBlock, events, validators]): SignedBlockExtended =>
        createSignedBlockExtended(api.registry, signedBlock, events, validators)
      ),
      catchError((): Observable<undefined> =>
        // where rpc.chain.getHeader throws, we will land here - it can happen that
        // we supplied an invalid hash. (Due to defaults, storage will have an
        // empty value, so only the RPC is affected). So return undefined
        of()
      )
    ));
}

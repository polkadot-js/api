// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { SignedBlockExtended } from '../type/types';
import type { DeriveApi } from '../types';

import { catchError, combineLatest, map, of, switchMap } from 'rxjs';

import { createSignedBlockExtended } from '../type';
import { memo } from '../util';

/**
 * Returns an extended block decorated with events & authors. You would generally want to use
 * the getBlock variant, this is internal and may throw errors when an invalid hash is supplied.
 */
export function _getBlock (instanceId: string, api: DeriveApi): (hash: Uint8Array | string) => Observable<SignedBlockExtended> {
  return memo(instanceId, (blockHash: Uint8Array | string): Observable<SignedBlockExtended> =>
    combineLatest([
      api.rpc.chain.getBlock(blockHash),
      api.queryAt(blockHash).pipe(
        switchMap((queryAt) =>
          combineLatest([
            queryAt.system.events(),
            queryAt.session
              ? queryAt.session.validators()
              : of([])
          ])
        )
      )
    ]).pipe(
      map(([signedBlock, [events, validators]]) =>
        createSignedBlockExtended(api.registry, signedBlock, events, validators)
      )
    )
  );
}

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
export function getBlock (instanceId: string, api: DeriveApi): (hash: Uint8Array | string) => Observable<SignedBlockExtended | undefined> {
  return memo(instanceId, (blockHash: Uint8Array | string): Observable<SignedBlockExtended | undefined> =>
    api.derive.chain._getBlock(blockHash).pipe(
      catchError((): Observable<undefined> =>
        // where rpc.chain.getHeader throws, we will land here - it can happen that
        // we supplied an invalid hash. (Due to defaults, storage will have an
        // empty value, so only the RPC is affected). So return undefined
        of()
      )
    ));
}

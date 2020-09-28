// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ApiInterfaceRx } from '@polkadot/api/types';

import { Observable, combineLatest, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { SignedBlockExtended } from '../type';
import { memo } from '../util';

/**
 * @name getBlock
 * @param {( Uint8Array | string )} hash - A block hash as U8 array or string.
 * @description Get a specific block (e.g. rpc.chain.getBlock) and extend it with the author
 * @example
 * <BR>
 *
 * ```javascript
 * const { author, number } = await api.derive.chain.getHeader('0x123...456');
 *
 * console.log(`block #${number} was authored by ${author}`);
 * ```
 */
export function getHeader (instanceId: string, api: ApiInterfaceRx): (hash: Uint8Array | string) => Observable<SignedBlockExtended | undefined> {
  return memo(instanceId, (hash: Uint8Array | string): Observable<SignedBlockExtended | undefined> =>
    combineLatest([
      api.rpc.chain.getBlock(hash),
      api.query.session
        ? api.query.session.validators.at(hash)
        : of([])
    ]).pipe(
      map(([signedBlock, validators]): SignedBlockExtended =>
        new SignedBlockExtended(api.registry, signedBlock, validators)
      ),
      catchError((): Observable<undefined> =>
        // where rpc.chain.getHeader throws, we will land here - it can happen that
        // we supplied an invalid hash. (Due to defaults, storeage will have an
        // empty value, so only the RPC is affected). So return undefined
        of()
      )
    ));
}

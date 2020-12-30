// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Observable } from '@polkadot/x-rxjs';

import { combineLatest, of } from '@polkadot/x-rxjs';
import { catchError, map } from '@polkadot/x-rxjs/operators';

import { HeaderExtended } from '../type';
import { memo } from '../util';

/**
 * @name getHeader
 * @param {( Uint8Array | string )} hash - A block hash as U8 array or string.
 * @returns An array containing the block header and the block author
 * @description Get a specific block header and extend it with the author
 * @example
 * <BR>
 *
 * ```javascript
 * const { author, number } = await api.derive.chain.getHeader('0x123...456');
 *
 * console.log(`block #${number} was authored by ${author}`);
 * ```
 */
export function getHeader (instanceId: string, api: ApiInterfaceRx): (hash: Uint8Array | string) => Observable<HeaderExtended | undefined> {
  return memo(instanceId, (hash: Uint8Array | string): Observable<HeaderExtended | undefined> =>
    combineLatest([
      api.rpc.chain.getHeader(hash),
      api.query.session
        ? api.query.session.validators.at(hash)
        : of([])
    ]).pipe(
      map(([header, validators]): HeaderExtended =>
        new HeaderExtended(api.registry, header, validators)
      ),
      catchError((): Observable<undefined> =>
        // where rpc.chain.getHeader throws, we will land here - it can happen that
        // we supplied an invalid hash. (Due to defaults, storeage will have an
        // empty value, so only the RPC is affected). So return undefined
        of()
      )
    ));
}

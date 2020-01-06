// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId } from '@polkadot/types/interfaces';
import { ApiInterfaceRx } from '@polkadot/api/types';

import { Observable, combineLatest, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Vec } from '@polkadot/types';

import { HeaderExtended } from '../type';
import { memo } from '../util';

/**
 * @name bestNumberFinalized
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
export function getHeader (api: ApiInterfaceRx): (hash: Uint8Array | string) => Observable<HeaderExtended | undefined> {
  return memo((hash: Uint8Array | string): Observable<HeaderExtended | undefined> =>
    combineLatest([
      api.rpc.chain.getHeader(hash),
      api.query.session
        ? api.query.session.validators.at(hash) as Observable<Vec<AccountId>>
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

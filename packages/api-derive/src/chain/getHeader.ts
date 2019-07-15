// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable, combineLatest, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Header } from '@polkadot/types';

import { HeaderExtended } from '../type';
import { drr } from '../util/drr';
import { HeaderAndValidators } from './subscribeNewHead';

/**
 * @name bestNumberFinalized
 * @param {( Uint8Array | string )} hash - A block hash as U8 array or string.
 * @returns An array containing the block header and the block author
 * @description Get a specific block header and extend it with the author
 * @example
 * <BR>
 *
 * ```javascript
 * const { author, blockNumber } = await api.derive.chain.getHeader('0x123...456');
 *
 * console.log(`block #${blockNumber} was authored by ${author}`);
 * ```
 */
export function getHeader (api: ApiInterfaceRx): (hash: Uint8Array | string) => Observable<HeaderExtended | undefined> {
  return (hash: Uint8Array | string): Observable<HeaderExtended | undefined> =>
    // tslint:disable-next-line
    (combineLatest([
      api.rpc.chain.getHeader(hash) as Observable<Header>,
      api.query.session
        ? api.query.session.validators.at(hash)
        : of([])
    ]) as Observable<HeaderAndValidators>).pipe(
      map(([header, validators]): HeaderExtended =>
        new HeaderExtended(header, validators)
      ),
      catchError((): Observable<undefined> =>
        // where rpc.chain.getHeader throws, we will land here - it can happen that
        // we supplied an invalid hash. (Due to defaults, storeage will have an
        // empty value, so only the RPC is affected). So return undefined
        // tslint:disable-next-line
        of() as Observable<undefined>
      ),
      drr()
    );
}

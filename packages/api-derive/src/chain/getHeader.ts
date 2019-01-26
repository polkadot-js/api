// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable, combineLatest, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { AccountId, Header } from '@polkadot/types/index';
import { HeaderExtended } from '@polkadot/types/Header';

import { drr } from '../util/drr';
import { HeaderAndValidators } from './subscribeNewHead';

/**
 * @description Get the a specific block header and extend it with the author
 * @param hash: Uint8Array | string
 * @example
 * <BR>
 *
 * ```javascript
 * const { author, blockNumber } = await api.derive.chain.getHeader('0x123...456');
 *
 * console.log(`block #${blockNumber} was authored by ${author}`);
 * ```
 */
export function getHeader (api: ApiInterface$Rx) {
  return (hash: Uint8Array | string): Observable<HeaderExtended | undefined> =>
    combineLatest(
      api.rpc.chain.getHeader(hash) as Observable<Header>,
      api.query.session
        ? api.query.session.validators.at(hash) as any as Observable<Array<AccountId>>
        : of([])
    ).pipe(
      map(([header, validators]: HeaderAndValidators) =>
        new HeaderExtended(header, validators)
      ),
      catchError(() =>
        // where rpc.chain.getHeader throws, we will land here - it can happen that
        // we supplied an invalid hash. (Due to defaults, storeage will have an
        // empty value, so only the RPC is affected). So return undefined
        // tslint:disable-next-line
        of() as Observable<undefined>
      ),
      drr()
    );
}

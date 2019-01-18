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
 * Get the a specific block header and extend it with the author
 */
export function getHeader (api: ApiInterface$Rx) {
  return (hash: Uint8Array | string): Observable<HeaderExtended | undefined> =>
    combineLatest(
      api.rpc.chain.getHeader(hash) as Observable<Header>,
      api.query.session.validators.at(hash) as any as Observable<Array<AccountId>>
    ).pipe(
      map(([header, validators]: HeaderAndValidators) =>
        new HeaderExtended(header, validators)
      ),
      catchError(() =>
        // where rpc.chain.getHeader throws, we will land here - it can happen that
        // we supplied an invalid hash. (Due to defaults, storeage will have an
        // empty value, so only the RPC is affected). So return undefined
        of() as Observable<undefined>
      ),
      drr()
    );
}

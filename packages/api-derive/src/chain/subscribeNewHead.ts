// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable, combineLatest, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, Header } from '@polkadot/types';

import { HeaderExtended } from '../type';
import { drr } from '../util/drr';

export type HeaderAndValidators = [Header, AccountId[]];

/**
 * @name subscribeNewHead
 * @returns An array containing the block header and the block author
 * @description An observable of the current block header and it's author
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.chain.subscribeNewHead(({ author, blockNumber }) => {
 *   console.log(`block #${blockNumber} was authored by ${author}`);
 * });
 * ```
 */
export function subscribeNewHead (api: ApiInterfaceRx): () => Observable<HeaderExtended> {
  return (): Observable<HeaderExtended> =>
    (api.rpc.chain.subscribeNewHead() as Observable<Header>)
      .pipe(
        filter((header: Header): boolean => !!header && !!header.blockNumber),
        switchMap((header: Header): Observable<HeaderAndValidators> =>
          (combineLatest([
            of(header),
            // theoretically we could combine at the first call with session.validators(), however
            // we make 100% sure we actually get the validators at a specific block so when these
            // change at an era boundary, we have the previous values to ensure our indexes are correct
            api.query.session
              ? api.query.session.validators.at(header.hash)
              : of([])
          ]) as Observable<HeaderAndValidators>)
        ),
        map(([header, validators]): HeaderExtended =>
          new HeaderExtended(header, validators)
        ),
        drr()
      );
}

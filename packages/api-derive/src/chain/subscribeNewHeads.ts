// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, Header } from '@polkadot/types/interfaces';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { HeaderExtended } from '../type';
import { drr } from '../util';

export type HeaderAndValidators = [Header, AccountId[]];

/**
 * @name subscribeNewHeads
 * @returns An array containing the block header and the block author
 * @description An observable of the current block header and it's author
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.chain.subscribeNewHeads((header) => {
 *   console.log(`block #${header.number} was authored by ${header.author}`);
 * });
 * ```
 */
export function subscribeNewHeads (api: ApiInterfaceRx): () => Observable<HeaderExtended> {
  return (): Observable<HeaderExtended> =>
    api.rpc.chain.subscribeNewHeads().pipe(
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

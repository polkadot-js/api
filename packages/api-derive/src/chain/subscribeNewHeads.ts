// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';

import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { HeaderExtended } from '../type';
import { drr } from '../util';

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
    combineLatest([
      api.rpc.chain.subscribeNewHeads(),
      api.derive.staking.validators() as Observable<any>
      // api.query.session
      //   ? api.query.session.validators<Vec<AccountId>>()
      //   : of([])
    ]).pipe(
      // map(([header, validators]): HeaderExtended =>
      map(([header, { validators }]): HeaderExtended =>
        new HeaderExtended(header, validators)
      ),
      drr()
    );
}

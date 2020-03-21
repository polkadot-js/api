// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';

import { Observable, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { HeaderExtended } from '../type';
import { memo } from '../util';

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
  return memo((): Observable<HeaderExtended> =>
    combineLatest([
      api.rpc.chain.subscribeNewHeads(),
      api.query.session
        ? api.query.session.validators()
        : of([])
    ]).pipe(
      map(([header, validators]): HeaderExtended =>
        new HeaderExtended(api.registry, header, validators)
      )
    ));
}

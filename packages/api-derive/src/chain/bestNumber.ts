// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BlockNumber, Header } from '@polkadot/types/interfaces';

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';

import { drr } from '../util/drr';

/**
 * @name bestNumber
 * @returns The latest block number.
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.chain.bestNumber((blockNumber) => {
 *   console.log(`the current best block is #${blockNumber}`);
 * });
 * ```
 */
export function bestNumber (api: ApiInterfaceRx): () => Observable<BlockNumber> {
  return (): Observable<BlockNumber> =>
    (api.rpc.chain.subscribeNewHead())
      .pipe(
        filter((header: Header): boolean => !!header && !!header.number),
        map((header: Header): BlockNumber => header.number.unwrap()),
        drr()
      );
}

// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { BlockNumber, Header } from '@polkadot/types';

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
export function bestNumber (api: ApiInterface$Rx) {
  return (): Observable<BlockNumber> =>
    (api.rpc.chain.subscribeNewHead() as Observable<Header>)
      .pipe(
        filter((header: Header) => header && !!header.blockNumber),
        map(({ blockNumber }: Header) => blockNumber),
        drr()
      );
}

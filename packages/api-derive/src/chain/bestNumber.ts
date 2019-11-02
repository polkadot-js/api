// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BlockNumber } from '@polkadot/types/interfaces';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';

import { drr, memo } from '../util';

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
export const bestNumber = memo((api: ApiInterfaceRx): () => Observable<BlockNumber> => {
  return memo((): Observable<BlockNumber> =>
    api.rpc.chain.subscribeNewHeads().pipe(
      map((header): BlockNumber => header.number.unwrap()),
      drr()
    )
  );
}, true);

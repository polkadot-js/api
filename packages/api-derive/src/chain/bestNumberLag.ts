// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BlockNumber } from '@polkadot/types/interfaces';

import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';

import { memo } from '../util';

/**
 * @name bestNumberLag
 * @returns A number of blocks
 * @description Calculates the lag between finalized head and best head
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.chain.bestNumberLag((lag) => {
 *   console.log(`finalized is ${lag} blocks behind head`);
 * });
 * ```
 */
export function bestNumberLag (api: ApiInterfaceRx): () => Observable<BlockNumber> {
  return memo((): Observable<BlockNumber> =>
    combineLatest([
      api.derive.chain.bestNumber(),
      api.derive.chain.bestNumberFinalized()
    ]).pipe(
      map(([bestNumber, bestNumberFinalized]): BlockNumber =>
        api.registry.createType('BlockNumber', bestNumber.sub(bestNumberFinalized))
      )
    ));
}

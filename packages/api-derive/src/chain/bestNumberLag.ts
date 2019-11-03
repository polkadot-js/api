// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BlockNumber } from '@polkadot/types/interfaces';

import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { createType } from '@polkadot/types';

import { drr, memo } from '../util';
import { bestNumber } from './bestNumber';
import { bestNumberFinalized } from './bestNumberFinalized';

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
export const bestNumberLag = memo((api: ApiInterfaceRx): () => Observable<BlockNumber> => {
  const bestNumberCall = bestNumber(api);
  const bestNumberFinalizedCall = bestNumberFinalized(api);

  return memo((): Observable<BlockNumber> =>
    combineLatest([
      bestNumberCall(),
      bestNumberFinalizedCall()
    ]).pipe(
      map(([bestNumber, bestNumberFinalized]): BlockNumber =>
        createType('BlockNumber', bestNumber.sub(bestNumberFinalized))
      ),
      drr()
    ));
}, true);

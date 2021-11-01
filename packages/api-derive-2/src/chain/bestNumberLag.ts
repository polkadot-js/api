// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { BlockNumber } from '@polkadot/types/interfaces';

import { combineLatest, map } from 'rxjs';

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
export function bestNumberLag (instanceId: string, api: ApiInterfaceRx): () => Observable<BlockNumber> {
  return memo(instanceId, (): Observable<BlockNumber> =>
    combineLatest([
      api.derive.chain.bestNumber(),
      api.derive.chain.bestNumberFinalized()
    ]).pipe(
      map(([bestNumber, bestNumberFinalized]): BlockNumber =>
        api.registry.createType('BlockNumber', bestNumber.sub(bestNumberFinalized))
      )
    ));
}

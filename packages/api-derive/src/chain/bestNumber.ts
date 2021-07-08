// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { BlockNumber } from '@polkadot/types/interfaces';

import { map } from 'rxjs';

import { memo } from '../util';

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
export function bestNumber (instanceId: string, api: ApiInterfaceRx): () => Observable<BlockNumber> {
  return memo(instanceId, (): Observable<BlockNumber> =>
    api.derive.chain.subscribeNewHeads().pipe(
      map((header) => header.number.unwrap())
    ));
}

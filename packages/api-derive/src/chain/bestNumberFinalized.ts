// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { BlockNumber } from '@polkadot/types/interfaces';

import { map } from 'rxjs';

import { memo } from '../util';

/**
 * @name bestNumberFinalized
 * @returns A BlockNumber
 * @description Get the latest finalized block number.
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.chain.bestNumberFinalized((blockNumber) => {
 *   console.log(`the current finalized block is #${blockNumber}`);
 * });
 * ```
 */
export function bestNumberFinalized (instanceId: string, api: ApiInterfaceRx): () => Observable<BlockNumber> {
  return memo(instanceId, (): Observable<BlockNumber> =>
    api.rpc.chain.subscribeFinalizedHeads().pipe(
      map((header) => header.number.unwrap())
    ));
}

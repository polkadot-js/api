// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { BlockNumber, Header } from '@polkadot/types';

import { drr } from '../util/drr';

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
export function bestNumberFinalized (api: ApiInterfaceRx): () => Observable<BlockNumber> {
  return (): Observable<BlockNumber> =>
    (api.rpc.chain.subscribeFinalizedHeads() as Observable<Header>)
      .pipe(
        filter((header: Header): boolean => !!header && !!header.blockNumber),
        map(({ blockNumber }: Header): BlockNumber => blockNumber),
        drr()
      );
}

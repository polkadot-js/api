// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import ApiRx from '@polkadot/api/rx';
import { BlockNumber, Header } from '@polkadot/types/index';

import { drr } from '../util/drr';

/**
 * Get the latest block number.
 */
export function bestNumber (api: ApiRx) {
  return (): Observable<BlockNumber> =>
    (api.rpc.chain.subscribeNewHead() as Observable<Header>)
      .pipe(
        filter((header: Header) => header && !!header.blockNumber),
        map(({ blockNumber }: Header) => blockNumber),
        drr()
      );
}

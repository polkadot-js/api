// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { BlockNumber, Balance } from '@polkadot/types/index';

import { drr } from '../util/drr';
import { bestNumber } from './bestNumber';
import { bestNumberFinalised } from './bestNumberFinalised';

/**
 * @description Calculates the lag between finalised head and best head
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.chain.bestNumberLag((lag) => {
 *   console.log(`finalised is ${lag} blocks behind head`);
 * });
 * ```
 */
export function bestNumberLag (api: ApiInterface$Rx) {
  return (): Observable<BlockNumber> =>
    combineLatest(
      bestNumber(api)(),
      bestNumberFinalised(api)()
    ).pipe(
      map(([bestNumber, bestNumberFinalised]) =>
        new Balance(bestNumber.sub(bestNumberFinalised))
      ),
      drr()
    );
}

// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { Balance } from '@polkadot/types/interfaces';
import { DeriveFees } from '../types';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { memo } from '../util';

/**
 * @name fees
 * @returns An object containing the combined results of the storage queries for
 * all relevant fees as declared in the substrate chain spec.
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.balances.fees(({ creationFee, transferFee }) => {
 *   console.log(`The fee for creating a new account on this chain is ${creationFee} units. The fee required for making a transfer is ${transferFee} units.`);
 * });
 * ```
 */
export function fees (api: ApiInterfaceRx): () => Observable<DeriveFees> {
  return memo((): Observable<DeriveFees> =>
    of([
      // deprecated - remove
      (api.consts.balances?.creationFee as unknown as Balance) || api.registry.createType('Balance'),
      (api.consts.balances?.transferFee as unknown as Balance) || api.registry.createType('Balance'),

      // current
      (api.consts.balances?.existentialDeposit as Balance) || api.registry.createType('Balance'),
      (api.consts.transactionPayment?.transactionBaseFee as unknown as Balance) || api.registry.createType('Balance'),
      (api.consts.transactionPayment?.transactionByteFee as Balance) || api.registry.createType('Balance')
    ]).pipe(
      map(([creationFee, transferFee, existentialDeposit, transactionBaseFee, transactionByteFee]): DeriveFees => ({
        creationFee,
        existentialDeposit,
        transactionBaseFee,
        transactionByteFee,
        transferFee
      }))
    ));
}

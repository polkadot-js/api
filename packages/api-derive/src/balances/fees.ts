// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ApiInterfaceRx } from '@polkadot/api/types';
import type { Balance } from '@polkadot/types/interfaces';
import type { Observable } from '@polkadot/x-rxjs';
import type { DeriveFees } from '../types';

import { of } from '@polkadot/x-rxjs';
import { map } from '@polkadot/x-rxjs/operators';

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
export function fees (instanceId: string, api: ApiInterfaceRx): () => Observable<DeriveFees> {
  return memo(instanceId, (): Observable<DeriveFees> =>
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

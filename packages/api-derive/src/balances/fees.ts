// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterface$Rx } from '@polkadot/api/types';
import { DerivedFees } from '../types';

import { Observable, of } from 'rxjs';

/**
 * @name fees
 * @returns An object containing the combined results of the storage queries for
 * all relevant fees as declared in the substrate chain spec.
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.balances.fees(([creationFee, transferFee]) => {
 *   console.log(`The fee for creating a new account on this chain is ${creationFee} units. The fee required for making a transfer is ${transferFee} units.`);
 * });
 * ```
 */
export function fees (api: ApiInterface$Rx) {
  return (): Observable<DerivedFees> => {
    const {
      creationFee,
      existentialDeposit,
      transactionBaseFee,
      transactionByteFee,
      transferFee
    } = api.consts.balances;

    return of({
      creationFee,
      existentialDeposit,
      transactionBaseFee,
      transactionByteFee,
      transferFee
    }) as any as Observable<DerivedFees>;
  };
}

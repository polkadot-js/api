// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveContractFees } from '../types';

import BN from 'bn.js';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { memo } from '../util';

type ResultV2 = [BN, BN, BN, BN, BN, BN, BN, BN, BN];

// query via constants (current applicable path)
function queryConstants (api: ApiInterfaceRx): Observable<ResultV2> {
  return of([
    // deprecated
    api.consts.contracts.creationFee || api.registry.createType('Balance'),
    api.consts.contracts.transferFee || api.registry.createType('Balance'),

    // current
    api.consts.contracts.callBaseFee,
    api.consts.contracts.contractFee,
    api.consts.contracts.rentByteFee,
    api.consts.contracts.rentDepositOffset,
    api.consts.contracts.tombstoneDeposit,
    api.consts.contracts.transactionBaseFee,
    api.consts.contracts.transactionByteFee
  ]) as unknown as Observable<ResultV2>;
}

/**
 * @name fees
 * @returns An object containing the combined results of the queries for
 * all relevant contract fees as declared in the substrate chain spec.
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.contracts.fees(([creationFee, transferFee]) => {
 *   console.log(`The fee for creating a new contract on this chain is ${creationFee} units. The fee required to call this contract is ${transferFee} units.`);
 * });
 * ```
 */
export function fees (api: ApiInterfaceRx): () => Observable<DeriveContractFees> {
  return memo((): Observable<DeriveContractFees> => {
    return queryConstants(api).pipe(
      map(([creationFee, transferFee, callBaseFee, contractFee, rentByteFee, rentDepositOffset, tombstoneDeposit, transactionBaseFee, transactionByteFee]): DeriveContractFees => ({
        callBaseFee,
        contractFee,
        creationFee,
        rentByteFee,
        rentDepositOffset,
        tombstoneDeposit,
        transactionBaseFee,
        transactionByteFee,
        transferFee
      }))
    );
  });
}

// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveContractFees } from '../types';

import BN from 'bn.js';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { memo } from '../util';

type ResultV2 = [BN, BN, BN, BN, BN, BN, BN, BN, BN, BN];

// query via constants (current applicable path)
function queryConstants (api: ApiInterfaceRx): Observable<ResultV2> {
  return of([
    // deprecated
    api.consts.contracts.callBaseFee || api.registry.createType('Balance'),
    api.consts.contracts.contractFee || api.registry.createType('Balance'),
    api.consts.contracts.creationFee || api.registry.createType('Balance'),
    api.consts.contracts.transactionBaseFee || api.registry.createType('Balance'),
    api.consts.contracts.transactionByteFee || api.registry.createType('Balance'),
    api.consts.contracts.transferFee || api.registry.createType('Balance'),

    // current
    api.consts.contracts.rentByteFee,
    api.consts.contracts.rentDepositOffset,
    api.consts.contracts.surchargeReward,
    api.consts.contracts.tombstoneDeposit
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
      map(([callBaseFee, contractFee, creationFee, transactionBaseFee, transactionByteFee, transferFee, rentByteFee, rentDepositOffset, surchargeReward, tombstoneDeposit]): DeriveContractFees => ({
        callBaseFee,
        contractFee,
        creationFee,
        rentByteFee,
        rentDepositOffset,
        surchargeReward,
        tombstoneDeposit,
        transactionBaseFee,
        transactionByteFee,
        transferFee
      }))
    );
  });
}

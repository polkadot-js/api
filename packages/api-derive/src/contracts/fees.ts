// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { BN } from '@polkadot/util';
import type { DeriveApi, DeriveContractFees } from '../types';

import { map, of } from 'rxjs';

import { memo } from '../util';

type ResultV2 = [BN, BN, BN, BN, BN, BN, BN, BN, BN, BN];

// query via constants (current applicable path)
function queryConstants (api: DeriveApi): Observable<ResultV2> {
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
export function fees (instanceId: string, api: DeriveApi): () => Observable<DeriveContractFees> {
  return memo(instanceId, (): Observable<DeriveContractFees> => {
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

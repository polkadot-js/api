// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterface$Rx } from '@polkadot/api/types';
import { DerivedContractFees } from '../types';

import BN from 'bn.js';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { drr } from '../util/drr';
import {
  v6callBaseFee,
  v6contractFee,
  v6createBaseFee,
  v6contractCreationFee,
  v6rentByteFee,
  v6rentDepositOffset,
  v6contractTransactionBaseFee,
  v6contractTransactionByteFee,
  v6contractTransferFee,
  v6tombstoneDeposit
} from '../util/v6consts';

/**
 * @name fees
 * @returns An object containing the combined results of the queries for
 * all relevant contract fees as declared in the substrate chain spec.
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.contracts.fees(([creationFee, transferFee]) => {
 *   // console.log(`The fee for creating a new contract on this chain is ${creationFee} units. The fee required to call this contract is ${transferFee} units.`);
 * });
 * ```
 */
export function fees (api: ApiInterface$Rx) {
  return (): Observable<DerivedContractFees> => {
    const queryBase = api.query.contracts || api.query.contract;

    // // rentByteFee, rentDepositOffset, tombstoneDeposit are not available in substrate 1.0.

    const obs = of(

    );

    if (queryBase && !queryBase.rentByteFee) {
      console.log('1.0 checkskdvahkashdf');
      return (api.queryMulti([
        queryBase.callBaseFee,
        queryBase.contractFee,
        queryBase.createBaseFee,
        queryBase.creationFee,
        queryBase.transactionBaseFee,
        queryBase.transactionByteFee,
        queryBase.transferFee
      ])).pipe(
        map(([callBaseFee, contractFee, createBaseFee, creationFee, transactionBaseFee, transactionByteFee, transferFee]) => ({
          callBaseFee,
          contractFee,
          createBaseFee,
          creationFee,
          v6rentByteFee,
          v6rentDepositOffset,
          transactionBaseFee,
          transactionByteFee,
          transferFee,
          v6tombstoneDeposit
        } as DerivedContractFees)),
        drr().concat()
      );
    }

    return (queryBase.contractFee
      ? api.queryMulti([
        queryBase.callBaseFee,
        queryBase.contractFee,
        queryBase.createBaseFee,
        queryBase.creationFee,
        queryBase.rentByteFee,
        queryBase.rentDepositOffset,
        queryBase.transactionBaseFee,
        queryBase.transactionByteFee,
        queryBase.transferFee,
        queryBase.tombstoneDeposit
      ]) as any as Observable<Array<BN>>
    : of([
      // @TODO replace this with calls to `api.consts` once implemented
      v6callBaseFee,
      v6contractFee,
      v6createBaseFee,
      v6contractCreationFee,
      v6rentByteFee,
      v6rentDepositOffset,
      v6contractTransactionBaseFee,
      v6contractTransactionByteFee,
      v6contractTransferFee,
      v6tombstoneDeposit
    ]) as any as Observable<Array<BN>>).pipe(
      map(([callBaseFee, contractFee, createBaseFee, creationFee, rentByteFee, rentDepositOffset, transactionBaseFee, transactionByteFee, transferFee, tombstoneDeposit]) => ({
        callBaseFee,
        contractFee,
        createBaseFee,
        creationFee,
        rentByteFee,
        rentDepositOffset,
        transactionBaseFee,
        transactionByteFee,
        transferFee,
        tombstoneDeposit
      } as DerivedContractFees)),
      drr()
    );
  };
}
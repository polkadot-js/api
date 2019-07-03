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
  callBaseFee,
  contractFee,
  createBaseFee,
  contractCreationFee,
  rentByteFee,
  rentDepositOffset,
  contractTransactionBaseFee,
  contractTransactionByteFee,
  contractTransferFee,
  tombstoneDeposit
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
 *   console.log(`The fee for creating a new contract on this chain is ${creationFee} units. The fee required to call this contract is ${transferFee} units.`);
 * });
 * ```
 */
export function fees (api: ApiInterface$Rx) {
  return (): Observable<DerivedContractFees> => {
    const queryBase = api.query.contracts || api.query.contract;

    // FIXME A number of these are being moved https://github.com/paritytech/substrate/pull/2883
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
      callBaseFee.toNumber(),
      contractFee.toNumber(),
      createBaseFee.toNumber(),
      contractCreationFee.toNumber(),
      rentByteFee.toNumber(),
      rentDepositOffset.toNumber(),
      contractTransactionBaseFee.toNumber(),
      contractTransactionByteFee.toNumber(),
      contractTransferFee.toNumber(),
      tombstoneDeposit.toNumber()
    ]) as any as Observable<[BN, BN, BN, BN, BN]>).pipe(
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

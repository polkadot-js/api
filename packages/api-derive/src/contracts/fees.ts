// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterface$Rx } from '@polkadot/api/types';
import { DerivedContractFees } from '../types';

import BN from 'bn.js';
import { combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { drr } from '../util/drr';

// get values from api.const for substrate versions post spec_version: 101
// https://github.com/paritytech/substrate/pull/2883/files#diff-5e5e1c3aec9ddfde0a9054d062ab3db9R131
const contractFees = (api) => {
  const {
    callBaseFee,
    contractFee,
    createBaseFee,
    creationFee,
    rentByteFee,
    rentDepositOffset,
    tombstoneDeposit,
    transactionBaseFee,
    transactionByteFee,
    transferFee
  } = api.consts.contracts;

  return [
    callBaseFee,
    contractFee,
    createBaseFee,
    creationFee,
    rentByteFee,
    rentDepositOffset,
    tombstoneDeposit,
    transactionBaseFee,
    transactionByteFee,
    transferFee
  ];
};

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

    if (api.query.contract && !api.query.contract.rentByteFee) {
      // Only for 1.0 support. rentByteFee, rentDepositOffset, tombstoneDeposit are not available in substrate 1.0.
      // @TODO remove this once 1.0 support is dropped
      return (combineLatest([
        of(new BN(0)),
        of(new BN(0)),
        of(new BN(0)),
        api.queryMulti([
          queryBase.callBaseFee,
          queryBase.contractFee,
          queryBase.createBaseFee,
          queryBase.creationFee,
          queryBase.transactionBaseFee,
          queryBase.transactionByteFee,
          queryBase.transferFee
        ])
      ]) as any as Observable<>).pipe(
        map(([
          rentByteFee,
          rentDepositOffset,
          tombstoneDeposit,
          [
            callBaseFee,
            contractFee,
            createBaseFee,
            creationFee,
            transactionBaseFee,
            transactionByteFee,
            transferFee
          ]]) => ({
            callBaseFee,
            contractFee,
            createBaseFee,
            creationFee,
            rentByteFee,
            rentDepositOffset,
            tombstoneDeposit,
            transactionBaseFee,
            transactionByteFee,
            transferFee
          } as DerivedContractFees)),
        drr()
      );
    }

    return (api.consts.contracts
      // Substrate versions supporting parameter_types
      ? of(contractFees(api)) as any as Observable<Array<BN>>
      // Support versions pre spec_version 101 and get values from storage
      : api.queryMulti([
        queryBase.callBaseFee,
        queryBase.contractFee,
        queryBase.createBaseFee,
        queryBase.creationFee,
        queryBase.rentByteFee,
        queryBase.rentDepositOffset,
        queryBase.tombstoneDeposit,
        queryBase.transactionBaseFee,
        queryBase.transactionByteFee,
        queryBase.transferFee
      ]) as any as Observable<Array<BN>>).pipe(
      map(
        ([callBaseFee, contractFee, createBaseFee, creationFee, rentByteFee, rentDepositOffset, tombstoneDeposit, transactionBaseFee, transactionByteFee, transferFee]) => ({
          callBaseFee,
          contractFee,
          createBaseFee,
          creationFee,
          rentByteFee,
          rentDepositOffset,
          tombstoneDeposit,
          transactionBaseFee,
          transactionByteFee,
          transferFee
        } as DerivedContractFees)
      ),
      drr()
    );
  };
}
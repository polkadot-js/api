// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DerivedContractFees } from '../types';

import BN from 'bn.js';
import { combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { drr } from '../util/drr';

const ZERO = new BN(0);

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
export function fees (api: ApiInterfaceRx): () => Observable<DerivedContractFees> {
  return (): Observable<DerivedContractFees> => {
    const queryBase = api.query.contracts || api.query.contract;

    if (api.query.contract && !api.query.contract.rentByteFee) {
      // Only for 1.0 support. rentByteFee, rentDepositOffset, tombstoneDeposit are not available in substrate 1.0.
      // @TODO remove this once 1.0 support is dropped
      return (combineLatest([
        of([ZERO, ZERO, ZERO]),
        api.queryMulti([
          queryBase.callBaseFee,
          queryBase.contractFee,
          queryBase.createBaseFee,
          queryBase.creationFee,
          queryBase.transactionBaseFee,
          queryBase.transactionByteFee,
          queryBase.transferFee
        ])
      ]) as unknown as Observable<BN[][]>).pipe(
        map(([
          [rentByteFee, rentDepositOffset, tombstoneDeposit],
          [callBaseFee, contractFee, createBaseFee, creationFee, transactionBaseFee, transactionByteFee, transferFee]
        ]): DerivedContractFees => ({
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
        } as unknown as DerivedContractFees)),
        drr()
      );
    }

    return (
      api.consts.contracts
      // get values from api.const for substrate versions post spec_version: 101
      // https://github.com/paritytech/substrate/pull/2883/files#diff-5e5e1c3aec9ddfde0a9054d062ab3db9R131
        ? of([
          api.consts.contracts.callBaseFee,
          api.consts.contracts.contractFee,
          api.consts.contracts.createBaseFee,
          api.consts.contracts.creationFee,
          api.consts.contracts.rentByteFee,
          api.consts.contracts.rentDepositOffset,
          api.consts.contracts.tombstoneDeposit,
          api.consts.contracts.transactionBaseFee,
          api.consts.contracts.transactionByteFee,
          api.consts.contracts.transferFee
        ]) as unknown as Observable<BN[]>
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
        ]) as unknown as Observable<BN[]>
    ).pipe(
      map(
        ([callBaseFee, contractFee, createBaseFee, creationFee, rentByteFee, rentDepositOffset, tombstoneDeposit, transactionBaseFee, transactionByteFee, transferFee]): DerivedContractFees => ({
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
        } as unknown as DerivedContractFees)
      ),
      drr()
    );
  };
}

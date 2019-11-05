// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DerivedContractFees } from '../types';

import BN from 'bn.js';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { drr } from '../util';

type ResultV2 = [BN, BN, BN, BN, BN, BN, BN, BN, BN, BN];

const ZERO = new BN(0);

// parse the result
function parseResult ([callBaseFee, contractFee, createBaseFee, creationFee, rentByteFee, rentDepositOffset, tombstoneDeposit, transactionBaseFee, transactionByteFee, transferFee]: ResultV2): DerivedContractFees {
  return {
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
  };
}

// Only for 1.0 support. rentByteFee, rentDepositOffset, tombstoneDeposit are not available in substrate 1.0.
// TODO remove this once 1.0 support is dropped
function queryV1 (api: ApiInterfaceRx): Observable<DerivedContractFees> {
  return (
    api.queryMulti([
      api.query.contract.callBaseFee,
      api.query.contract.contractFee,
      api.query.contract.createBaseFee,
      api.query.contract.creationFee,
      api.query.contract.transactionBaseFee,
      api.query.contract.transactionByteFee,
      api.query.contract.transferFee
    ]) as unknown as Observable<BN[]>
  ).pipe(
    map(([callBaseFee, contractFee, createBaseFee, creationFee, transactionBaseFee, transactionByteFee, transferFee]): DerivedContractFees =>
      // We've done this on purpose, i.e. so we can  just copy the name/order from the parse above and
      // see gaps, in this case those are filled with `ZERO`
      parseResult([
        callBaseFee, contractFee, createBaseFee, creationFee, ZERO, ZERO, ZERO, transactionBaseFee, transactionByteFee, transferFee
      ])
    ),
    drr()
  );
}

// query via query (early v2, non-current, support to be dropped])
function queryQuery (api: ApiInterfaceRx): Observable<ResultV2> {
  const queryBase = api.query.contracts || api.query.contract;

  return api.queryMulti([
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
  ]) as unknown as Observable<ResultV2>;
}

// query via constants (current applicable path)
function queryConstants (api: ApiInterfaceRx): Observable<ResultV2> {
  return of([
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
export function fees (api: ApiInterfaceRx): () => Observable<DerivedContractFees> {
  return (): Observable<DerivedContractFees> => {
    if (api.query.contract && !api.query.contract.rentByteFee) {
      return queryV1(api);
    }

    return (
      api.consts.contracts
        ? queryConstants(api)
        : queryQuery(api)
    ).pipe(
      map(([callBaseFee, contractFee, createBaseFee, creationFee, rentByteFee, rentDepositOffset, tombstoneDeposit, transactionBaseFee, transactionByteFee, transferFee]): DerivedContractFees =>
        // We've done this on purpose, i.e. so we can  just copy the name/order from the parse above and see gaps
        parseResult([
          callBaseFee, contractFee, createBaseFee, creationFee, rentByteFee, rentDepositOffset, tombstoneDeposit, transactionBaseFee, transactionByteFee, transferFee
        ])
      ),
      drr()
    );
  };
}

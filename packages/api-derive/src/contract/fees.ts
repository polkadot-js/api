// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterface$Rx, QueryableStorageFunctionBase } from '@plugnet/api/types';
import { Codec } from '@plugnet/types/types';
import { DerivedContractFees } from '../types';

import BN from 'bn.js';
import { Observable, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { drr } from '../util/drr';

// TODO The contracts API is still in flux, so some of these may disappear or re-appear or get replaced. Instead of
// failing here, do best effort - if something does not exist, return 0 for the specific value. Should be removed
// when actually stable and no more changes expected
function nonexistentZero (fn: QueryableStorageFunctionBase<Observable<Codec>, Observable<Codec>>): Observable<BN> {
  return fn
    ? fn() as any as Observable<BN>
    : of(new BN(0));
}

/**
 * Get the balances for all intentions and their nominators
 */
export function fees (api: ApiInterface$Rx) {
  // TODO Once we have muti support for disjointed queries, add here (so we make a single
  // query for all these to the node).
  return (): Observable<DerivedContractFees> => {
    return (combineLatest([
      nonexistentZero(api.query.contract.callBaseFee),
      nonexistentZero(api.query.contract.contractFee),
      nonexistentZero(api.query.contract.createBaseFee),
      nonexistentZero(api.query.contract.creationFee),
      nonexistentZero(api.query.contract.rentByteFee),
      nonexistentZero(api.query.contract.rentDepositOffset),
      nonexistentZero(api.query.contract.transactionBaseFee),
      nonexistentZero(api.query.contract.transactionByteFee),
      nonexistentZero(api.query.contract.transferFee),
      nonexistentZero(api.query.contract.tombstoneDeposit)
    ]) as any as Observable<Array<BN>>).pipe(
      map(([callBaseFee, contractFee, createBaseFee, creationFee, rentByteFee, rentDepositOffset, transactionBaseFee, transactionByteFee, transferFee, tombstoneDeposit]) => {
        return {
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
        };
      }),
      drr()
    );
  };
}

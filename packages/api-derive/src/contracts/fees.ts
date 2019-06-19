// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterface$Rx } from '@polkadot/api/types';
import { DerivedContractFees } from '../types';

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { drr } from '../util/drr';

/**
 * Retrieves all the contract fees
 */
export function fees (api: ApiInterface$Rx) {
  return (): Observable<DerivedContractFees> => {
    const queryBase = api.query.contracts || api.query.contract;

    // FIXME A numnber of these are being moved https://github.com/paritytech/substrate/pull/2883
    return (api.queryMulti([
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

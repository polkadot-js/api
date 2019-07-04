// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterface$Rx } from '@polkadot/api/types';
import { Observable, of } from 'rxjs';

import { DerivedContractFees } from '../types';

/**
 * Retrieves all the contract fees
 */
export function fees (api: ApiInterface$Rx) {
  return (): Observable<DerivedContractFees> => {
    const {
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
    } = api.consts.contracts;

    return of({
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
    } as any as DerivedContractFees);
  };
}

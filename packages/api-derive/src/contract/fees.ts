// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterface$Rx } from '@plugnet/api/types';
import { DerivedContractFees } from '../types';

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StructAny } from '@plugnet/types';

import { drr } from '../util/drr';

/**
 * Retrieves all the contract fees
 */
export function fees (api: ApiInterface$Rx) {
  return (): Observable<DerivedContractFees> => {
    return (api.queryMulti([
      api.query.contract.callBaseFee,
      api.query.contract.contractFee,
      api.query.contract.createBaseFee,
      api.query.contract.creationFee,
      api.query.contract.rentByteFee,
      api.query.contract.rentDepositOffset,
      api.query.contract.transactionBaseFee,
      api.query.contract.transactionByteFee,
      api.query.contract.transferFee,
      api.query.contract.tombstoneDeposit
    ]) as any as Observable<Array<BN>>).pipe(
      map(([callBaseFee, contractFee, createBaseFee, creationFee, rentByteFee, rentDepositOffset, transactionBaseFee, transactionByteFee, transferFee, tombstoneDeposit]) =>
        new StructAny({
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
        }) as DerivedContractFees
      ),
      drr()
    );
  };
}

// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiInterface$Rx } from '@polkadot/api/types';

import BN from 'bn.js';
import { DerivedFees } from '../types';
import { drr } from '../util/drr';

export function fees (api: ApiInterface$Rx) {
  return (): Observable<DerivedFees> => {
    // FIXME Remove fees checks, only use balances (fees is a removed module now)
    return (combineLatest([
      api.query.balances.creationFee(),
      api.query.balances.existentialDeposit(),
      api.query.fees
        ? api.query.fees.transactionBaseFee()
        : api.query.balances.transactionBaseFee(),
      api.query.fees
        ? api.query.fees.transactionByteFee()
        : api.query.balances.transactionByteFee(),
      api.query.balances.transferFee()
    ]) as any as Observable<[BN, BN, BN, BN, BN]>).pipe(
      map(([creationFee, existentialDeposit, transactionBaseFee, transactionByteFee, transferFee]) => ({
        creationFee,
        existentialDeposit,
        transactionBaseFee,
        transactionByteFee,
        transferFee
      })),
      drr()
    ) ;
  };
}

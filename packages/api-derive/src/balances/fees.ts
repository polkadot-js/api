// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import ApiRx from '@polkadot/api/rx';

import { drr } from '../util/drr';

export function fees (api: ApiRx) {
  return () =>
    combineLatest(
      api.query.balances.creationFee(),
      api.query.balances.existentialDeposit(),
      api.query.balances.transactionBaseFee(),
      api.query.balances.transactionByteFee(),
      api.query.balances.transferFee()
    ).pipe(
      map(([creationFee, existentialDeposit, transactionBaseFee, transactionByteFee, transferFee]) => ({
        creationFee: creationFee || new BN(0),
        existentialDeposit: existentialDeposit || new BN(0),
        transactionBaseFee: transactionBaseFee || new BN(0),
        transactionByteFee: transactionByteFee || new BN(0),
        transferFee: transferFee || new BN(0)
      })),
      drr()
    );
}

// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterface$Rx } from '@polkadot/api/types';
import { Balance } from '@polkadot/types';
import { DerivedFees } from '../types';

import BN from 'bn.js';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { drr } from '../util/drr';
import { v6creationFee, v6existentialDeposit, v6transactionBaseFee, v6transactionByteFee, v6transferFee } from '../util/v6consts';

/**
 * @name fees
 * @returns An object containing the combined results of the storage queries for
 * all relevant fees as declared in the substrate chain spec.
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.balances.fees(([creationFee, transferFee]) => {
 *   // console.log(`The fee for creating a new account on this chain is ${creationFee} units. The fee required for making a transfer is ${transferFee} units.`);
 * });
 * ```
 */
export function fees (api: ApiInterface$Rx) {
  return (): Observable<DerivedFees> => {
    return (api.query.balances.transactionBaseFee
      ? api.queryMulti([
        api.query.balances.creationFee,
        api.query.balances.existentialDeposit,
        api.query.balances.transactionBaseFee,
        api.query.balances.transactionByteFee,
        api.query.balances.transferFee
      ]) as any as Observable<[BN, BN, BN, BN, BN]>
    : of([
      // @TODO replace this with calls to `api.consts` once implemented
      v6creationFee,
      v6existentialDeposit,
      v6transactionBaseFee,
      v6transactionByteFee,
      v6transferFee
    ]) as any as Observable<[BN, BN, BN, BN, BN]>).pipe(
      map(([creationFee, existentialDeposit, transactionBaseFee, transactionByteFee, transferFee]) => ({
        creationFee,
        existentialDeposit,
        transactionBaseFee,
        transactionByteFee,
        transferFee
      } as DerivedFees)),
      drr()
    );
  };
}
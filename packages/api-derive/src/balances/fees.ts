// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterface$Rx } from '@polkadot/api/types';
import { DerivedFees } from '../types';

import BN from 'bn.js';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { drr } from '../util/drr';

const ZERO = new BN(0);

/**
 * @name fees
 * @returns An object containing the combined results of the storage queries for
 * all relevant fees as declared in the substrate chain spec.
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.balances.fees(([creationFee, transferFee]) => {
 *   console.log(`The fee for creating a new account on this chain is ${creationFee} units. The fee required for making a transfer is ${transferFee} units.`);
 * });
 * ```
 */
export function fees (api: ApiInterface$Rx) {
  return (): Observable<DerivedFees> => {
    return (
      // HACK This is a very quick fix to actually get the types in to continue with
      // other work - so as of now, the fees are completely broken
      api.query.balances.creationFee
        ? api.queryMulti([
          api.query.balances.creationFee,
          api.query.balances.existentialDeposit,
          api.query.balances.transactionBaseFee,
          api.query.balances.transactionByteFee,
          api.query.balances.transferFee
        ]) as any as Observable<[BN, BN, BN, BN, BN]>
      : of([ZERO, ZERO, ZERO, ZERO, ZERO])
    ).pipe(
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

// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { DerivedFees } from '../types';

import BN from 'bn.js';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { drr } from '../util/drr';

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
export function fees (api: ApiInterfaceRx): () => Observable<DerivedFees> {
  return (): Observable<DerivedFees> => {
    return (
      api.consts.balances
        ? of([
          // get values from api.const for substrate versions post spec_version: 101
          // https://github.com/paritytech/substrate/pull/2883/files#diff-5e5e1c3aec9ddfde0a9054d062ab3db9R131
          api.consts.balances.creationFee,
          api.consts.balances.existentialDeposit,
          api.consts.balances.transactionBaseFee,
          api.consts.balances.transactionByteFee,
          api.consts.balances.transferFee
        ]) as any as Observable<[BN, BN, BN, BN, BN]>
        : api.queryMulti([
          // Support older versions and get values from storage
          api.query.balances.creationFee,
          api.query.balances.existentialDeposit,
          api.query.balances.transactionBaseFee,
          api.query.balances.transactionByteFee,
          api.query.balances.transferFee
        ]) as any as Observable<[BN, BN, BN, BN, BN]>
    ).pipe(
      map(([creationFee, existentialDeposit, transactionBaseFee, transactionByteFee, transferFee]): DerivedFees => ({
        creationFee,
        existentialDeposit,
        transactionBaseFee,
        transactionByteFee,
        transferFee
      } as unknown as DerivedFees)),
      drr()
    );
  };
}

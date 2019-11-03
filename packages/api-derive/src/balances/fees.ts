// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiInterfaceRx } from '@polkadot/api/types';
import { Balance } from '@polkadot/types/interfaces';
import { DerivedFees } from '../types';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { drr } from '../util';

type Result = [Balance, Balance, Balance, Balance, Balance];

function queryV2 (api: ApiInterfaceRx): Observable<Result> {
  const paymentBase = api.consts.transactionPayment || api.consts.balances;

  return of([
    // get values from api.const for substrate versions post spec_version: 101
    // https://github.com/paritytech/substrate/pull/2883/files#diff-5e5e1c3aec9ddfde0a9054d062ab3db9R131
    api.consts.balances.creationFee as Balance,
    api.consts.balances.existentialDeposit as Balance,
    api.consts.balances.transferFee as Balance,
    paymentBase.transactionBaseFee as Balance,
    paymentBase.transactionByteFee as Balance
  ]);
}

function queryV1 (api: ApiInterfaceRx): Observable<Result> {
  return api.queryMulti<Result>([
    // Support older versions and get values from storage
    api.query.balances.creationFee,
    api.query.balances.existentialDeposit,
    api.query.balances.transferFee,
    api.query.balances.transactionBaseFee,
    api.query.balances.transactionByteFee
  ]);
}

/**
 * @name fees
 * @returns An object containing the combined results of the storage queries for
 * all relevant fees as declared in the substrate chain spec.
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.balances.fees(({ creationFee, transferFee }) => {
 *   console.log(`The fee for creating a new account on this chain is ${creationFee} units. The fee required for making a transfer is ${transferFee} units.`);
 * });
 * ```
 */
export function fees (api: ApiInterfaceRx): () => Observable<DerivedFees> {
  const query = api.consts.balances
    ? queryV2
    : queryV1;

  return (): Observable<DerivedFees> => {
    return query(api).pipe(
      map(([creationFee, existentialDeposit, transferFee, transactionBaseFee, transactionByteFee]): DerivedFees => ({
        creationFee,
        existentialDeposit,
        transactionBaseFee,
        transactionByteFee,
        transferFee
      })),
      drr()
    );
  };
}

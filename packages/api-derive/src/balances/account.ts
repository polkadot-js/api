// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, AccountData, AccountIndex, Address, Balance, Index } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { DerivedBalancesAccount } from '../types';

import { combineLatest, of, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { createType } from '@polkadot/types';

import { memo } from '../util';

type Result = [Balance, Balance, Balance, Balance, Index];

function calcBalances (api: ApiInterfaceRx, [accountId, [freeBalance, reservedBalance, frozenFee, frozenMisc, accountNonce]]: [AccountId, Result]): DerivedBalancesAccount {
  return {
    accountId,
    accountNonce,
    freeBalance,
    frozenFee,
    frozenMisc,
    reservedBalance,
    votingBalance: createType(api.registry, 'Balance', freeBalance.add(reservedBalance))
  };
}

// old
function queryOld (api: ApiInterfaceRx, accountId: AccountId): Observable<Result> {
  return api.queryMulti<[Balance, Balance, Index]>([
    [api.query.balances.freeBalance, accountId],
    [api.query.balances.reservedBalance, accountId],
    [api.query.system.accountNonce, accountId]
  ]).pipe(
    map(([freeBalance, reservedBalance, accountNonce]): Result =>
      [freeBalance, reservedBalance, createType(api.registry, 'Balance'), createType(api.registry, 'Balance'), accountNonce]
    )
  );
}

function queryCurrentOldNonce (api: ApiInterfaceRx, accountId: AccountId): Observable<Result> {
  return api.queryMulti<[AccountData, Index]>([
    [api.query.balances.account, accountId],
    [api.query.system.accountNonce, accountId]
  ]).pipe(
    map(([{ free, reserved, miscFrozen, feeFrozen }, accountNonce]): Result =>
      [free, reserved, feeFrozen, miscFrozen, accountNonce]
    )
  );
}

function queryCurrent (api: ApiInterfaceRx, accountId: AccountId): Observable<Result> {
  return api.queryMulti<[AccountData, ITuple<[Index, AccountData]>]>([
    [api.query.balances.account, accountId],
    [api.query.system.account, accountId]
  ]).pipe(
    map(([{ free, reserved, miscFrozen, feeFrozen }, [accountNonce]]): Result =>
      [free, reserved, feeFrozen, miscFrozen, accountNonce]
    )
  );
}

/**
 * @name account
 * @param {( AccountIndex | AccountId | Address | string )} address - An accounts Id in different formats.
 * @returns An object containing the results of various balance queries
 * @example
 * <BR>
 *
 * ```javascript
 * const ALICE = 'F7Hs';
 *
 * api.derive.balances.all(ALICE, ({ accountId, lockedBalance }) => {
 *   console.log(`The account ${accountId} has a locked balance ${lockedBalance} units.`);
 * });
 * ```
 */
export function account (api: ApiInterfaceRx): (address: AccountIndex | AccountId | Address | string) => Observable<DerivedBalancesAccount> {
  return memo((address: AccountIndex | AccountId | Address | string): Observable<DerivedBalancesAccount> =>
    api.derive.accounts.info(address).pipe(
      switchMap(({ accountId }): Observable<[AccountId, Result]> =>
        (accountId
          ? combineLatest([
            of(accountId),
            api.query.balances.account
              ? api.query.system.account
                ? queryCurrent(api, accountId)
                : queryCurrentOldNonce(api, accountId)
              : queryOld(api, accountId)
          ])
          : of([createType(api.registry, 'AccountId'), [createType(api.registry, 'Balance'), createType(api.registry, 'Balance'), createType(api.registry, 'Balance'), createType(api.registry, 'Balance'), createType(api.registry, 'Index')]])
        )
      ),
      map((result): DerivedBalancesAccount => calcBalances(api, result))
    ));
}

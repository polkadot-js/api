// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, AccountData, AccountIndex, AccountInfo, Address, Balance, Index } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { DeriveBalancesAccount } from '../types';

import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { isFunction } from '@polkadot/util';

import { memo } from '../util';

type Result = [Balance, Balance, Balance, Balance, Index];

function calcBalances (api: ApiInterfaceRx, [accountId, [freeBalance, reservedBalance, frozenFee, frozenMisc, accountNonce]]: [AccountId, Result]): DeriveBalancesAccount {
  return {
    accountId,
    accountNonce,
    freeBalance,
    frozenFee,
    frozenMisc,
    reservedBalance,
    votingBalance: api.registry.createType('Balance', freeBalance.add(reservedBalance))
  };
}

// old
function queryBalancesFree (api: ApiInterfaceRx, accountId: AccountId): Observable<Result> {
  return api.queryMulti<[Balance, Balance, Index]>([
    [api.query.balances.freeBalance, accountId],
    [api.query.balances.reservedBalance, accountId],
    [api.query.system.accountNonce, accountId]
  ]).pipe(
    map(([freeBalance, reservedBalance, accountNonce]): Result =>
      [freeBalance, reservedBalance, api.registry.createType('Balance'), api.registry.createType('Balance'), accountNonce]
    )
  );
}

function queryBalancesAccount (api: ApiInterfaceRx, accountId: AccountId): Observable<Result> {
  return api.queryMulti<[AccountData, Index]>([
    [api.query.balances.account, accountId],
    [api.query.system.accountNonce, accountId]
  ]).pipe(
    map(([{ feeFrozen, free, miscFrozen, reserved }, accountNonce]): Result =>
      [free, reserved, feeFrozen, miscFrozen, accountNonce]
    )
  );
}

function queryCurrent (api: ApiInterfaceRx, accountId: AccountId): Observable<Result> {
  // AccountInfo is current, support old, eg. Edgeware
  return api.query.system.account<AccountInfo | ITuple<[Index, AccountData]>>(accountId).pipe(
    map((infoOrTuple): Result => {
      const { feeFrozen, free, miscFrozen, reserved } = (infoOrTuple as AccountInfo).nonce
        ? (infoOrTuple as AccountInfo).data
        : (infoOrTuple as [Index, AccountData])[1];
      const accountNonce = (infoOrTuple as AccountInfo).nonce || (infoOrTuple as [Index, AccountData])[0];

      return [free, reserved, feeFrozen, miscFrozen, accountNonce];
    })
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
export function account (api: ApiInterfaceRx): (address: AccountIndex | AccountId | Address | string) => Observable<DeriveBalancesAccount> {
  return memo((address: AccountIndex | AccountId | Address | string): Observable<DeriveBalancesAccount> =>
    api.derive.accounts.info(address).pipe(
      switchMap(({ accountId }): Observable<[AccountId, Result]> =>
        (accountId
          ? combineLatest([
            of(accountId),
            isFunction(api.query.system.account)
              ? queryCurrent(api, accountId)
              : isFunction(api.query.balances.account)
                ? queryBalancesAccount(api, accountId)
                : queryBalancesFree(api, accountId)
          ])
          : of([api.registry.createType('AccountId'), [api.registry.createType('Balance'), api.registry.createType('Balance'), api.registry.createType('Balance'), api.registry.createType('Balance'), api.registry.createType('Index')]])
        )
      ),
      map((result): DeriveBalancesAccount => calcBalances(api, result))
    ));
}

// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { QueryableStorageEntry } from '@polkadot/api-base/types';
import type { AccountData, AccountId, AccountIndex, AccountInfo, Address, Balance, Index } from '@polkadot/types/interfaces';
import type { ITuple } from '@polkadot/types/types';
import type { DeriveApi, DeriveBalancesAccount, DeriveBalancesAccountData } from '../types';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { isFunction } from '@polkadot/util';

import { memo } from '../util';

type BalanceResult = [Balance, Balance, Balance, Balance];

type Result = [Index, BalanceResult[]];

type DeriveCustomAccount = DeriveApi['derive'] & {
  [custom: string]: {
    customAccount?: DeriveApi['query']['balances']['account']
  }
}

function zeroBalance (api: DeriveApi) {
  return api.registry.createType('Balance');
}

function getBalance (api: DeriveApi, [freeBalance, reservedBalance, frozenFee, frozenMisc]: BalanceResult): DeriveBalancesAccountData {
  const votingBalance = api.registry.createType('Balance', freeBalance.toBn());

  return {
    freeBalance,
    frozenFee,
    frozenMisc,
    reservedBalance,
    votingBalance
  };
}

function calcBalances (api: DeriveApi, [accountId, [accountNonce, [primary, ...additional]]]: [AccountId, Result]): DeriveBalancesAccount {
  return {
    accountId,
    accountNonce,
    additional: additional.map((b) => getBalance(api, b)),
    ...getBalance(api, primary)
  };
}

// old
function queryBalancesFree (api: DeriveApi, accountId: AccountId): Observable<Result> {
  return combineLatest([
    api.query.balances.freeBalance<Balance>(accountId),
    api.query.balances.reservedBalance<Balance>(accountId),
    api.query.system.accountNonce<Index>(accountId)
  ]).pipe(
    map(([freeBalance, reservedBalance, accountNonce]): Result => [
      accountNonce,
      [[freeBalance, reservedBalance, zeroBalance(api), zeroBalance(api)]]
    ])
  );
}

function queryNonceOnly (api: DeriveApi, accountId: AccountId): Observable<Result> {
  const fill = (nonce: Index): Result => [
    nonce,
    [[zeroBalance(api), zeroBalance(api), zeroBalance(api), zeroBalance(api)]]
  ];

  return isFunction(api.query.system.account)
    ? api.query.system.account(accountId).pipe(
      map(({ nonce }) => fill(nonce))
    )
    : isFunction(api.query.system.accountNonce)
      ? api.query.system.accountNonce<Index>(accountId).pipe(
        map((nonce) => fill(nonce))
      )
      : of(fill(api.registry.createType('Index')));
}

function queryBalancesAccount (api: DeriveApi, accountId: AccountId, modules: string[] = ['balances']): Observable<Result> {
  const balances = modules
    .map((m): QueryableStorageEntry<'rxjs'> => (api.derive as DeriveCustomAccount)[m]?.customAccount || api.query[m]?.account)
    .filter((q) => isFunction(q));

  const extract = (nonce: Index, data: AccountData[]): Result => [
    nonce,
    data.map(({ feeFrozen, free, miscFrozen, reserved }): BalanceResult => [free, reserved, feeFrozen, miscFrozen])
  ];

  // NOTE this is for the first case where we do have instances specified
  return balances.length
    ? isFunction(api.query.system.account)
      ? combineLatest([
        api.query.system.account(accountId),
        ...balances.map((c) => c(accountId))
      ]).pipe(
        map(([{ nonce }, ...balances]) => extract(nonce, balances as unknown as AccountData[]))
      )
      : combineLatest([
        api.query.system.accountNonce<Index>(accountId),
        ...balances.map((c) => c(accountId))
      ]).pipe(
        map(([nonce, ...balances]) => extract(nonce, balances as unknown as AccountData[]))
      )
    : queryNonceOnly(api, accountId);
}

function querySystemAccount (api: DeriveApi, accountId: AccountId): Observable<Result> {
  // AccountInfo is current, support old, eg. Edgeware
  return api.query.system.account<AccountInfo | ITuple<[Index, AccountData]>>(accountId).pipe(
    map((infoOrTuple): Result => {
      const data = (infoOrTuple as AccountInfo).nonce
        ? (infoOrTuple as AccountInfo).data
        : (infoOrTuple as [Index, AccountData])[1];

      const nonce = (infoOrTuple as AccountInfo).nonce || (infoOrTuple as [Index, AccountData])[0];

      if (!data || data.isEmpty) {
        return [
          nonce,
          [[zeroBalance(api), zeroBalance(api), zeroBalance(api), zeroBalance(api)]]
        ];
      }

      const { feeFrozen, free, miscFrozen, reserved } = data;

      return [
        nonce,
        [[free, reserved, feeFrozen, miscFrozen]]
      ];
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
export function account (instanceId: string, api: DeriveApi): (address: AccountIndex | AccountId | Address | string) => Observable<DeriveBalancesAccount> {
  const balanceInstances = api.registry.getModuleInstances(api.runtimeVersion.specName, 'balances');

  return memo(instanceId, (address: AccountIndex | AccountId | Address | string): Observable<DeriveBalancesAccount> =>
    api.derive.accounts.accountId(address).pipe(
      switchMap((accountId): Observable<[AccountId, Result]> =>
        (accountId
          ? combineLatest([
            of(accountId),
            balanceInstances
              ? queryBalancesAccount(api, accountId, balanceInstances)
              : isFunction(api.query.system?.account)
                ? querySystemAccount(api, accountId)
                : isFunction(api.query.balances?.account)
                  ? queryBalancesAccount(api, accountId)
                  : isFunction(api.query.balances?.freeBalance)
                    ? queryBalancesFree(api, accountId)
                    : queryNonceOnly(api, accountId)
          ])
          : of([api.registry.createType('AccountId'), [
            api.registry.createType('Index'),
            [[zeroBalance(api), zeroBalance(api), zeroBalance(api), zeroBalance(api)]]
          ]])
        )
      ),
      map((result): DeriveBalancesAccount => calcBalances(api, result))
    ));
}

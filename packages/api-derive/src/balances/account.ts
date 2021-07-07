// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ApiInterfaceRx, QueryableStorageMultiArg } from '@polkadot/api/types';
import type { AccountData, AccountId, AccountIndex, AccountInfo, Address, Balance, Index } from '@polkadot/types/interfaces';
import type { ITuple } from '@polkadot/types/types';
import type { DeriveBalancesAccount, DeriveBalancesAccountData } from '../types';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { assert, isFunction } from '@polkadot/util';

import { memo } from '../util';

type BalanceResult = [Balance, Balance, Balance, Balance];

type Result = [Index, BalanceResult[]];

type DeriveCustomAccount = ApiInterfaceRx['derive'] & {
  [custom: string]: {
    customAccount?: ApiInterfaceRx['query']['balances']['account']
  }
}

function zeroBalance (api: ApiInterfaceRx) {
  return api.registry.createType('Balance');
}

function getBalance (api: ApiInterfaceRx, [freeBalance, reservedBalance, frozenFee, frozenMisc]: BalanceResult): DeriveBalancesAccountData {
  const votingBalance = api.registry.createType('Balance', freeBalance.toBn());

  return {
    freeBalance,
    frozenFee,
    frozenMisc,
    reservedBalance,
    votingBalance
  };
}

function calcBalances (api: ApiInterfaceRx, [accountId, [accountNonce, balances]]: [AccountId, Result]): DeriveBalancesAccount {
  const primary = balances[0];

  assert(primary, 'No balances retrieved for account');

  return {
    accountId,
    accountNonce,
    additional: balances.filter((_, index) => index !== 0).map((b) => getBalance(api, b)),
    ...getBalance(api, primary)
  };
}

// old
function queryBalancesFree (api: ApiInterfaceRx, accountId: AccountId): Observable<Result> {
  return api.queryMulti<[Balance, Balance, Index]>([
    [api.query.balances.freeBalance, accountId],
    [api.query.balances.reservedBalance, accountId],
    [api.query.system.accountNonce, accountId]
  ]).pipe(
    map(([freeBalance, reservedBalance, accountNonce]): Result => [
      accountNonce,
      [[freeBalance, reservedBalance, zeroBalance(api), zeroBalance(api)]]
    ])
  );
}

function querySystemNonce (api: ApiInterfaceRx, accountId: AccountId): Observable<Result> {
  return api.query.system.accountNonce<Index>(accountId).pipe(
    map((accountNonce): Result => [
      accountNonce,
      [[zeroBalance(api), zeroBalance(api), zeroBalance(api), zeroBalance(api)]]
    ])
  );
}

function queryBalancesAccount (api: ApiInterfaceRx, accountId: AccountId, modules: string[] = ['balances']): Observable<Result> {
  const balances = modules.map(
    (m): QueryableStorageMultiArg<'rxjs'> => [
      (api.derive as DeriveCustomAccount)[m]?.customAccount || api.query[m].account,
      accountId
    ]
  );

  const extract = (data: AccountData[]) =>
    data.map(({ feeFrozen, free, miscFrozen, reserved }): BalanceResult => [free, reserved, feeFrozen, miscFrozen]);

  // NOTE this is for the first case where we do have instances specified
  return isFunction(api.query.system.account)
    ? api.queryMulti<[AccountInfo, ...(AccountData[])]>([[api.query.system.account, accountId], ...balances]).pipe(
      map(([{ nonce }, ...balances]): Result => [nonce, extract(balances)])
    )
    : api.queryMulti<[Index, ...(AccountData[])]>([[api.query.system.accountNonce, accountId], ...balances]).pipe(
      map(([nonce, ...balances]): Result => [nonce, extract(balances)])
    );
}

function querySystemAccount (api: ApiInterfaceRx, accountId: AccountId): Observable<Result> {
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
export function account (instanceId: string, api: ApiInterfaceRx): (address: AccountIndex | AccountId | Address | string) => Observable<DeriveBalancesAccount> {
  const balanceInstances = api.registry.getModuleInstances(api.runtimeVersion.specName.toString(), 'balances');
  const empty: Result = [
    api.registry.createType('Index'),
    [[zeroBalance(api), zeroBalance(api), zeroBalance(api), zeroBalance(api)]]
  ];

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
                    : isFunction(api.query.system?.accountNonce)
                      ? querySystemNonce(api, accountId)
                      : of(empty)
          ])
          : of([api.registry.createType('AccountId'), empty])
        )
      ),
      map((result): DeriveBalancesAccount => calcBalances(api, result))
    ));
}

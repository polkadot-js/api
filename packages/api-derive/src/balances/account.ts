// Copyright 2017-2024 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { QueryableStorageEntry } from '@polkadot/api-base/types';
import type { AccountData, AccountId, AccountIndex, AccountInfo, Address, Balance, Index } from '@polkadot/types/interfaces';
import type { FrameSystemAccountInfo, PalletBalancesAccountData } from '@polkadot/types/lookup';
import type { ITuple } from '@polkadot/types/types';
import type { DeriveApi, DeriveBalancesAccount, DeriveBalancesAccountData } from '../types.js';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { isFunction, objectSpread } from '@polkadot/util';

import { memo } from '../util/index.js';

type BalanceResult = [Balance, Balance, Balance, Balance];

type Result = [Index, BalanceResult[], AccountType];

interface AccountType { isFrameAccountData: boolean }

type DeriveCustomAccount = DeriveApi['derive'] & Record<string, {
  customAccount?: DeriveApi['query']['balances']['account']
}>

function zeroBalance (api: DeriveApi) {
  return api.registry.createType('Balance');
}

function getBalance (api: DeriveApi, [freeBalance, reservedBalance, frozenFeeOrFrozen, frozenMiscOrFlags]: BalanceResult, accType: AccountType): DeriveBalancesAccountData {
  const votingBalance = api.registry.createType('Balance', freeBalance.toBn());

  if (accType.isFrameAccountData) {
    return {
      frameSystemAccountInfo: {
        flags: frozenMiscOrFlags,
        frozen: frozenFeeOrFrozen
      },
      freeBalance,
      frozenFee: api.registry.createType('Balance', 0),
      frozenMisc: api.registry.createType('Balance', 0),
      reservedBalance,
      votingBalance
    };
  }

  return {
    freeBalance,
    frozenFee: frozenFeeOrFrozen,
    frozenMisc: frozenMiscOrFlags,
    reservedBalance,
    votingBalance
  };
}

function calcBalances (api: DeriveApi, [accountId, [accountNonce, [primary, ...additional], accType]]: [AccountId, Result]): DeriveBalancesAccount {
  return objectSpread({
    accountId,
    accountNonce,
    additional: additional.map((b) => getBalance(api, b, accType))
  }, getBalance(api, primary, accType));
}

// old
function queryBalancesFree (api: DeriveApi, accountId: AccountId): Observable<Result> {
  return combineLatest([
    api.query.balances['freeBalance']<Balance>(accountId),
    api.query.balances['reservedBalance']<Balance>(accountId),
    api.query.system['accountNonce']<Index>(accountId)
  ]).pipe(
    map(([freeBalance, reservedBalance, accountNonce]): Result => [
      accountNonce,
      [[freeBalance, reservedBalance, zeroBalance(api), zeroBalance(api)]],
      { isFrameAccountData: false }
    ])
  );
}

function queryNonceOnly (api: DeriveApi, accountId: AccountId): Observable<Result> {
  const fill = (nonce: Index): Result => [
    nonce,
    [[zeroBalance(api), zeroBalance(api), zeroBalance(api), zeroBalance(api)]],
    { isFrameAccountData: false }
  ];

  return isFunction(api.query.system.account)
    ? api.query.system.account(accountId).pipe(
      map(({ nonce }) => fill(nonce))
    )
    : isFunction(api.query.system['accountNonce'])
      ? api.query.system['accountNonce']<Index>(accountId).pipe(
        map((nonce) => fill(nonce))
      )
      : of(fill(api.registry.createType('Index')));
}

function queryBalancesAccount (api: DeriveApi, accountId: AccountId, modules: string[] = ['balances']): Observable<Result> {
  const balances = modules
    .map((m): QueryableStorageEntry<'rxjs'> => (api.derive as DeriveCustomAccount)[m]?.customAccount || api.query[m as 'balances']?.account)
    .filter((q) => isFunction(q));

  const extract = (nonce: Index, data: AccountData[]): Result => [
    nonce,
    data.map(({ feeFrozen, free, miscFrozen, reserved }): BalanceResult => [free, reserved, feeFrozen, miscFrozen]),
    { isFrameAccountData: false }
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
        api.query.system['accountNonce']<Index>(accountId),
        ...balances.map((c) => c(accountId))
      ]).pipe(
        map(([nonce, ...balances]) => extract(nonce, balances as unknown as AccountData[]))
      )
    : queryNonceOnly(api, accountId);
}

function querySystemAccount (api: DeriveApi, accountId: AccountId): Observable<Result> {
  // AccountInfo is current, support old, eg. Edgeware
  return api.query.system.account<AccountInfo | FrameSystemAccountInfo | ITuple<[Index, AccountData]>>(accountId).pipe(
    map((infoOrTuple): Result => {
      const data = (infoOrTuple as AccountInfo).nonce
        ? (infoOrTuple as AccountInfo).data
        : (infoOrTuple as [Index, AccountData])[1];

      const nonce = (infoOrTuple as AccountInfo).nonce || (infoOrTuple as [Index, AccountData])[0];

      if (!data || data.isEmpty) {
        return [
          nonce,
          [[zeroBalance(api), zeroBalance(api), zeroBalance(api), zeroBalance(api)]],
          { isFrameAccountData: false }
        ];
      }

      const isFrameType = !!(infoOrTuple as FrameSystemAccountInfo).data.frozen;

      if (isFrameType) {
        const { flags, free, frozen, reserved } = (data as unknown as PalletBalancesAccountData);

        return [
          nonce,
          [[free, reserved, frozen, flags]],
          { isFrameAccountData: true }
        ];
      } else {
        const { feeFrozen, free, miscFrozen, reserved } = data;

        return [
          nonce,
          [[free, reserved, feeFrozen, miscFrozen]],
          { isFrameAccountData: false }
        ];
      }
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
  const nonDefaultBalances = balanceInstances && balanceInstances[0] !== 'balances';

  return memo(instanceId, (address: AccountIndex | AccountId | Address | string): Observable<DeriveBalancesAccount> =>
    api.derive.accounts.accountId(address).pipe(
      switchMap((accountId): Observable<[AccountId, Result]> =>
        (accountId
          ? combineLatest([
            of(accountId),
            nonDefaultBalances
              ? queryBalancesAccount(api, accountId, balanceInstances)
              : isFunction(api.query.system?.account)
                ? querySystemAccount(api, accountId)
                : isFunction(api.query.balances?.account)
                  ? queryBalancesAccount(api, accountId)
                  : isFunction(api.query.balances?.['freeBalance'])
                    ? queryBalancesFree(api, accountId)
                    : queryNonceOnly(api, accountId)
          ])
          : of([api.registry.createType('AccountId'), [
            api.registry.createType('Index'),
            [[zeroBalance(api), zeroBalance(api), zeroBalance(api), zeroBalance(api)]],
            { isFrameAccountData: false }
          ]])
        )
      ),
      map((result): DeriveBalancesAccount => calcBalances(api, result))
    ));
}

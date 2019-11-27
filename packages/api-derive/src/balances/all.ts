// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, AccountIndex, Address, Balance, BalanceLock, BlockNumber, Index, VestingSchedule } from '@polkadot/types/interfaces';
import { DerivedBalances } from '../types';

import BN from 'bn.js';
import { combineLatest, of, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Option, Vec, createType } from '@polkadot/types';
import { bnMax } from '@polkadot/util';

import { memo } from '../util';

type ResultBalance = [Balance, Balance, BalanceLock[], Option<VestingSchedule>];
type Result = [AccountId, BlockNumber, ResultBalance, Index];

function calcBalances (api: ApiInterfaceRx, [accountId, bestNumber, [freeBalance, reservedBalance, locks, vesting], accountNonce]: Result): DerivedBalances {
  let lockedBalance = createType(api.registry, 'Balance');
  let lockedBreakdown: BalanceLock[] = [];

  if (Array.isArray(locks)) {
    // only get the locks that are valid until passed the current block
    lockedBreakdown = locks.filter(({ until }): boolean => bestNumber && until.gt(bestNumber));

    // get the maximum of the locks according to https://github.com/paritytech/substrate/blob/master/srml/balances/src/lib.rs#L699
    if (lockedBreakdown.length) {
      lockedBalance = createType(api.registry, 'Balance', bnMax(...lockedBreakdown.map(({ amount }): Balance => amount)));
    }
  }

  // Calculate the vesting balances,
  //  - offset = balance locked at genesis,
  //  - perBlock is the unlock amount
  const { offset: vestingTotal, perBlock } = vesting.unwrapOr(createType(api.registry, 'VestingSchedule'));
  const vestedBalance = createType(api.registry, 'Balance', perBlock.mul(bestNumber));
  const isVesting = vestedBalance.lt(vestingTotal);

  // The available balance & vested has an interplay here
  // "
  // vesting is a guarantee that the account's balance will never go below a certain amount. so it functions in the opposite way, a bit like a lock that is monotonically decreasing rather than a liquid amount that is monotonically increasing.
  // locks function as the same guarantee - that a balance will not be lower than a particular amount.
  // because of this you can see that if there is a "vesting lock" that guarantees the balance cannot go below 200, and a "staking lock" that guarantees the balance cannot drop below 300, then we just have two guarantees of which the first is irrelevant.
  // i.e. (balance >= 200 && balance >= 300) == (balance >= 300)
  // ""
  const floating = freeBalance.sub(lockedBalance);
  const availableBalance = createType(api.registry, 'Balance', bnMax(new BN(0), isVesting && floating.gt(vestedBalance) ? vestedBalance : floating));

  return {
    accountId,
    accountNonce,
    availableBalance,
    freeBalance,
    isVesting,
    lockedBalance,
    lockedBreakdown,
    reservedBalance,
    vestedBalance,
    vestingTotal,
    votingBalance: createType(api.registry, 'Balance', freeBalance.add(reservedBalance))
  };
}

function queryBalances (api: ApiInterfaceRx, accountId: AccountId): Observable<ResultBalance> {
  return api.queryMulti<[Balance, Balance, Vec<BalanceLock>, Option<VestingSchedule>]>([
    [api.query.balances.freeBalance, accountId],
    [api.query.balances.reservedBalance, accountId],
    [api.query.balances.locks, accountId],
    [api.query.balances.vesting, accountId]
  ]);
}

/**
 * @name all
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
export function all (api: ApiInterfaceRx): (address: AccountIndex | AccountId | Address | string) => Observable<DerivedBalances> {
  return memo((address: AccountIndex | AccountId | Address | string): Observable<DerivedBalances> =>
    api.derive.accounts.info(address).pipe(
      switchMap(({ accountId }): Observable<Result> =>
        (accountId
          ? combineLatest([
            of(accountId),
            api.derive.chain.bestNumber(),
            queryBalances(api, accountId),
            // FIXME This is having issues with Kusama, only use accountNonce atm
            // api.rpc.account && api.rpc.account.nextIndex
            //   ? api.rpc.account.nextIndex(accountId)
            //   // otherwise we end up with this: type 'Codec | Index' is not assignable to type 'Index'.
            //   : api.query.system.accountNonce<Index>(accountId)
            api.query.system.accountNonce<Index>(accountId)
          ])
          : of([createType(api.registry, 'AccountId'), createType(api.registry, 'BlockNumber'), [createType(api.registry, 'Balance'), createType(api.registry, 'Balance'), createType(api.registry, 'Vec<BalanceLock>'), createType(api.registry, 'Option<VestingSchedule>', null)], createType(api.registry, 'Index')])
        )
      ),
      map((result): DerivedBalances => calcBalances(api, result))
    ));
}

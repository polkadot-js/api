// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { combineLatest, of, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, AccountIndex, Address, Balance, BalanceLock, BlockNumber, Index, Option, VestingSchedule } from '@polkadot/types';
import { bnMax } from '@polkadot/util';

import { idAndIndex } from '../accounts/idAndIndex';
import { bestNumber } from '../chain/bestNumber';
import { DerivedBalances } from '../types';
import { drr } from '../util/drr';

type Result = [AccountId | undefined, BlockNumber | undefined, [Balance?, Balance?, BalanceLock[]?, Option<VestingSchedule>?, Index?]];

const EMPTY_ACCOUNT = new AccountId();
const ZERO = new Balance(0);

function calcBalances ([accountId = EMPTY_ACCOUNT, bestNumber = ZERO, [freeBalance = ZERO, reservedBalance = ZERO, locks = [], vesting = new Option<VestingSchedule>(VestingSchedule, null), accountNonce = ZERO]]: Result): DerivedBalances {
  let lockedBalance = ZERO;

  if (Array.isArray(locks)) {
    // only get the locks that are valid until passed the current block
    const totals = locks.filter((value): boolean => bestNumber && value.until.gt(bestNumber));
    // get the maximum of the locks according to https://github.com/paritytech/substrate/blob/master/srml/balances/src/lib.rs#L699
    lockedBalance = totals[0]
      ? bnMax(...totals.map(({ amount }): Balance => amount)) as Balance
      : ZERO;
  }

  // offset = balance locked at genesis, perBlock is the unlock amount
  const { offset, perBlock } = vesting.unwrapOr(new VestingSchedule());
  const vestedNow: BN = perBlock.mul(bestNumber);
  const vestedBalance: BN = vestedNow.gt(offset)
    ? freeBalance
    : freeBalance.sub(offset).add(vestedNow);

  // NOTE Workaround for this account on Alex (one of a couple reported) -
  //   5F7BJL6Z4m8RLtK7nXEqqpEqhBbd535Z3CZeYF6ccvaQAY6N
  // The locked is > the vested and ended up with the locked > free,
  // i.e. related to https://github.com/paritytech/polkadot/issues/225
  // (most probably due to movements from stash -> controller -> free)
  const availableBalance: BN = bnMax(ZERO, vestedBalance.sub(lockedBalance));

  return {
    accountId,
    accountNonce,
    availableBalance,
    freeBalance,
    lockedBalance,
    reservedBalance,
    vestedBalance,
    votingBalance: freeBalance.add(reservedBalance)
  } as unknown as DerivedBalances;
}

/**
 * @name all
 * @param {( AccountIndex | AccountId | Address | string )} address - An accounts Id in different formats.
 * @returns An object containing the combined results of the storage queries for
 * all relevant fees as declared in the substrate chain spec.
 * @example
 * <BR>
 *
 * ```javascript
 * const ALICE = 'F7Hs';
 *
 * api.derive.balances.all(ALICE, ([accountId, lockedBalance]) => {
 *   console.log(`The account ${accountId} has a locked balance ${lockedBalance} units.`);
 * });
 * ```
 */
export function all (api: ApiInterfaceRx): (address: AccountIndex | AccountId | Address | string) => Observable<DerivedBalances> {
  return (address: AccountIndex | AccountId | Address | string): Observable<DerivedBalances> => {
    return idAndIndex(api)(address).pipe(
      switchMap(([accountId]): Observable<Result> =>
        (accountId
          ? combineLatest([
            of(accountId),
            bestNumber(api)(),
            api.queryMulti([
              [api.query.balances.freeBalance, accountId],
              [api.query.balances.reservedBalance, accountId],
              [api.query.balances.locks, accountId],
              [api.query.balances.vesting, accountId],
              [api.query.system.accountNonce, accountId]
            ])
          ])
          : of([undefined, undefined, [undefined, undefined, undefined, undefined, undefined]])
        ) as Observable<Result>
      ),
      map(calcBalances),
      drr()
    );
  };
}

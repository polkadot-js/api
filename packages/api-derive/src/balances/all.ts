// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { combineLatest, of, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterface$Rx } from '@polkadot/api/types';
import { AccountId, AccountIndex, Address, Balance, BalanceLock, BlockNumber, Index, StructAny, Option, VestingSchedule } from '@polkadot/types';
import { bnMax } from '@polkadot/util';

import { idAndIndex } from '../accounts/idAndIndex';
import { DerivedBalances } from '../types';
import { drr } from '../util/drr';

type Result = [AccountId | undefined, BlockNumber | undefined, [Balance?, Balance?, Array<BalanceLock>?, Option<VestingSchedule>?, Index?]];

const EMPTY_ACCOUNT = new AccountId();

function calcBalances ([accountId = EMPTY_ACCOUNT, bestNumber = new BlockNumber(0), [freeBalance = new Balance(0), reservedBalance = new Balance(0), locks = [], vesting = new Option<VestingSchedule>(VestingSchedule, null), accountNonce = new Index(0)]]: Result): DerivedBalances {
  let lockedBalance = new Balance(0);

  if (Array.isArray(locks)) {
    // only get the locks that are valid until passed the current block
    const totals = locks.filter((value) => bestNumber && value.until.gt(bestNumber));
    // get the maximum of the locks according to https://github.com/paritytech/substrate/blob/master/srml/balances/src/lib.rs#L699
    lockedBalance = totals[0]
      ? bnMax(...totals.map(({ amount }) => amount)) as Balance
      : new Balance(0);
  }

  const { offset, perBlock } = vesting.unwrapOr(new VestingSchedule());
  const vestedBalance = new Balance(perBlock.mul(bestNumber).add(freeBalance.sub(offset)));
  const availableBalance = new Balance(vestedBalance.sub(lockedBalance));

  return new StructAny({
    accountId,
    accountNonce,
    availableBalance,
    freeBalance,
    lockedBalance,
    reservedBalance,
    vestedBalance: vestedBalance.lt(new Balance(0))
      ? new Balance(0)
      : vestedBalance,
    votingBalance: new Balance(freeBalance.add(reservedBalance))
  }) as DerivedBalances;
}

/**
 * @name all
 * @param {( ccountIndex | AccountId | Address | string )} address - An accounts Id in different formats.
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
export function all (api: ApiInterface$Rx) {
  return (address: AccountIndex | AccountId | Address | string): Observable<DerivedBalances> => {
    return idAndIndex(api)(address).pipe(
      switchMap(([accountId]) =>
        (accountId
          ? combineLatest([
            of(accountId),
            api.derive.chain.bestNumber(),
            api.queryMulti([
              [api.query.balances.freeBalance, accountId],
              [api.query.balances.reservedBalance, accountId],
              [api.query.balances.locks, accountId],
              [api.query.balances.vesting, accountId],
              [api.query.system.accountNonce, accountId]
            ])
          ])
          : of([undefined, undefined, [undefined, undefined, undefined, undefined, undefined]])
        ) as any as Observable<Result>
      ),
      map(calcBalances),
      drr()
    );
  };
}

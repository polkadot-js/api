// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { combineLatest, of, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterface$Rx } from '@plugnet/api/types';
import { AccountId, AccountIndex, Address, Balance, BalanceLock, BlockNumber, Option, VestingSchedule } from '@plugnet/types';
import { bnMax } from '@plugnet/util';

import { idAndIndex } from '../accounts/idAndIndex';
import { DerivedBalances } from '../types';
import { drr } from '../util/drr';

const EMPTY_ACCOUNT = new AccountId();

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
            api.query.balances.freeBalance(accountId),
            api.query.balances.reservedBalance(accountId),
            api.query.balances.locks(accountId),
            api.query.balances.vesting(accountId)
          ])
          : of([undefined, undefined, undefined, undefined, undefined, undefined])
        ) as Observable<[AccountId?, BlockNumber?, Balance?, Balance?, Array<BalanceLock>?, Option<VestingSchedule>?]>
      ),
      map(([accountId = EMPTY_ACCOUNT, bestNumber = new BlockNumber(0), freeBalance = new Balance(0), reservedBalance = new Balance(0), locks = [], vesting = new Option<VestingSchedule>(VestingSchedule, null)]) => {
        let lockedBalance = new Balance(0);

        if (Array.isArray(locks)) {
          // only get the locks that are valid until passed the current block
          const totals = locks.filter((value) => bestNumber && value.until.gt(bestNumber));
          // get the maximum of the locks according to https://github.com/paritytech/substrate/blob/master/srml/balances/src/lib.rs#L699
          lockedBalance = totals[0] ? bnMax(...totals.map(({ amount }) => amount)) as Balance : new Balance(0);
        }

        const { offset, perBlock } = vesting.unwrapOr({
          offset: new Balance(0),
          perBlock: new Balance(0)
        } as VestingSchedule);

        const vestedBalance = new Balance(perBlock.mul(bestNumber).add(freeBalance.sub(offset)));

        // const availableBalance = lockedBalance.eq(new BlockNumber('0xffffffffffffffffffffffffffffffff')) ? new Balance(0) : freeBalance && new Balance(freeBalance.sub(lockedBalance));
        const availableBalance = new Balance(vestedBalance.sub(lockedBalance));

        return {
          accountId,
          freeBalance,
          reservedBalance,
          votingBalance: new Balance(
            freeBalance.add(reservedBalance)
          ),
          availableBalance,
          lockedBalance,
          vestedBalance: vestedBalance.lt(new Balance(0)) ? new Balance(0) : vestedBalance
        };
      }),
      drr()
    );
  };
}

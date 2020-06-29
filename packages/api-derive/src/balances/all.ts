// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, AccountIndex, Address, Balance, BalanceLock, BalanceLockTo212, BlockNumber, VestingInfo, VestingSchedule } from '@polkadot/types/interfaces';
import { DeriveBalancesAccount, DeriveBalancesAll } from '../types';

import BN from 'bn.js';
import { Observable, combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Option, Vec } from '@polkadot/types';
import { bnMax, isFunction } from '@polkadot/util';

import { memo } from '../util';

type ResultBalance = [VestingInfo | null, (BalanceLock | BalanceLockTo212)[]];
type Result = [DeriveBalancesAccount, BlockNumber, ResultBalance];

function calcBalances (api: ApiInterfaceRx, [{ accountId, accountNonce, freeBalance, frozenFee, frozenMisc, reservedBalance, votingBalance }, bestNumber, [vesting, locks]]: Result): DeriveBalancesAll {
  let lockedBalance = api.registry.createType('Balance');
  let lockedBreakdown: (BalanceLock | BalanceLockTo212)[] = [];
  let vestingLocked = api.registry.createType('Balance');
  let allLocked = false;

  if (Array.isArray(locks)) {
    // only get the locks that are valid until passed the current block
    lockedBreakdown = (locks as BalanceLockTo212[]).filter(({ until }): boolean => !until || (bestNumber && until.gt(bestNumber)));

    const notAll = lockedBreakdown.filter(({ amount }) => !amount.isMax());

    allLocked = lockedBreakdown.some(({ amount }) => amount.isMax());
    vestingLocked = api.registry.createType('Balance', lockedBreakdown.filter(({ id }) => id.eq('0x76657374696e6720')).reduce((result: BN, { amount }) => result.iadd(amount), new BN(0)));

    // get the maximum of the locks according to https://github.com/paritytech/substrate/blob/master/srml/balances/src/lib.rs#L699
    if (notAll.length) {
      lockedBalance = api.registry.createType('Balance', bnMax(...notAll.map(({ amount }): Balance => amount)));
    }
  }

  // Calculate the vesting balances,
  //  - offset = balance locked at startingBlock
  //  - perBlock is the unlock amount
  const { locked: vestingTotal, perBlock, startingBlock } = vesting || api.registry.createType('VestingInfo');
  const isStarted = bestNumber.gt(startingBlock);
  const vestedNow = isStarted ? perBlock.mul(bestNumber.sub(startingBlock)) : new BN(0);
  const vestedBalance = vestedNow.gt(vestingTotal) ? vestingTotal : api.registry.createType('Balance', vestedNow);
  const isVesting = isStarted && !vestingLocked.isZero();
  const vestedClaimable = api.registry.createType('Balance', isVesting ? vestingLocked.sub(vestingTotal.sub(vestedBalance)) : 0);
  const availableBalance = api.registry.createType('Balance', allLocked ? 0 : bnMax(new BN(0), freeBalance.sub(lockedBalance)));

  return {
    accountId,
    accountNonce,
    availableBalance,
    freeBalance,
    frozenFee,
    frozenMisc,
    isVesting,
    lockedBalance,
    lockedBreakdown,
    reservedBalance,
    vestedBalance,
    vestedClaimable,
    vestingLocked,
    vestingTotal,
    votingBalance
  };
}

// old
function queryOld (api: ApiInterfaceRx, accountId: AccountId): Observable<ResultBalance> {
  return api.queryMulti<[Vec<BalanceLock>, Option<VestingSchedule>]>([
    [api.query.balances.locks, accountId],
    [api.query.balances.vesting, accountId]
  ]).pipe(
    map(([locks, optVesting]): ResultBalance => {
      let vestingNew = null;

      if (optVesting.isSome) {
        const { offset: locked, perBlock, startingBlock } = optVesting.unwrap();

        vestingNew = api.registry.createType('VestingInfo', { locked, perBlock, startingBlock });
      }

      return [vestingNew, locks];
    })
  );
}

// current (balances  vesting)
function queryCurrent (api: ApiInterfaceRx, accountId: AccountId): Observable<ResultBalance> {
  return (
    api.query.vesting?.vesting
      ? api.queryMulti<[Vec<BalanceLock>, Option<VestingInfo>]>([
        [api.query.balances.locks, accountId],
        [api.query.vesting.vesting, accountId]
      ])
      : api.query.balances.locks(accountId).pipe(
        map((locks): [Vec<BalanceLock>, Option<VestingInfo>] =>
          [locks, api.registry.createType('Option<VestingInfo>')]
        )
      )
  ).pipe(
    map(([locks, optVesting]): ResultBalance =>
      [optVesting.unwrapOr(null), locks]
    )
  );
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
export function all (api: ApiInterfaceRx): (address: AccountIndex | AccountId | Address | string) => Observable<DeriveBalancesAll> {
  return memo((address: AccountIndex | AccountId | Address | string): Observable<DeriveBalancesAll> =>
    api.derive.balances.account(address).pipe(
      switchMap((account): Observable<Result> =>
        (!account.accountId.isEmpty
          ? combineLatest([
            of(account),
            api.derive.chain.bestNumber(),
            isFunction(api.query.balances.account)
              ? queryCurrent(api, account.accountId)
              : queryOld(api, account.accountId)
          ])
          : of([account, api.registry.createType('BlockNumber'), [null, api.registry.createType('Vec<BalanceLock>')]])
        )
      ),
      map((result): DeriveBalancesAll => calcBalances(api, result))
    ));
}

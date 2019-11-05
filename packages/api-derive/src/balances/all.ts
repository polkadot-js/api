// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, AccountIndex, Address, Balance, BalanceLock, BlockNumber, Index, VestingSchedule } from '@polkadot/types/interfaces';

import BN from 'bn.js';
import { combineLatest, of, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiInterfaceRx } from '@polkadot/api/types';
import { Option, Vec, createType } from '@polkadot/types';
import { bnMax } from '@polkadot/util';

import { info } from '../accounts/info';
import { bestNumber } from '../chain/bestNumber';
import { DerivedBalances } from '../types';
import { drr, memo } from '../util';

type ResultBalance = [Balance, Balance, BalanceLock[], Option<VestingSchedule>];
type Result = [AccountId, BlockNumber, ResultBalance, Index];

function calcBalances ([accountId, bestNumber, [freeBalance, reservedBalance, locks, vesting], accountNonce]: Result): DerivedBalances {
  let lockedBalance = createType('Balance');
  let lockedBreakdown: BalanceLock[] = [];

  if (Array.isArray(locks)) {
    // only get the locks that are valid until passed the current block
    lockedBreakdown = locks.filter(({ until }): boolean => bestNumber && until.gt(bestNumber));

    // get the maximum of the locks according to https://github.com/paritytech/substrate/blob/master/srml/balances/src/lib.rs#L699
    if (lockedBreakdown.length) {
      lockedBalance = createType('Balance', bnMax(...lockedBreakdown.map(({ amount }): Balance => amount)));
    }
  }

  // offset = balance locked at genesis, perBlock is the unlock amount
  const { offset: vestingTotal, perBlock } = vesting.unwrapOr(createType('VestingSchedule'));
  const vestedNow = createType('Balance', perBlock.mul(bestNumber));
  const vestedBalance = createType('Balance', vestedNow.gt(vestingTotal) ? new BN(0) : bnMax(new BN(0), freeBalance.sub(vestingTotal).add(vestedNow)));
  const availableBalance = createType('Balance', bnMax(new BN(0), (vestedBalance.gtn(0) ? vestedBalance : freeBalance).sub(lockedBalance)));

  return {
    accountId,
    accountNonce,
    availableBalance,
    freeBalance,
    lockedBalance,
    lockedBreakdown,
    reservedBalance,
    vestedBalance,
    vestingTotal,
    votingBalance: createType('Balance', freeBalance.add(reservedBalance))
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
export const all = memo((api: ApiInterfaceRx): (address: AccountIndex | AccountId | Address | string) => Observable<DerivedBalances> => {
  const bestNumberCall = bestNumber(api);
  const infoCall = info(api);

  return (address: AccountIndex | AccountId | Address | string): Observable<DerivedBalances> =>
    infoCall(address).pipe(
      switchMap(({ accountId }): Observable<Result> =>
        (accountId
          ? combineLatest([
            of(accountId),
            bestNumberCall(),
            queryBalances(api, accountId),
            // FIXME This is having issues with Kusama, only use accountNonce atm
            // api.rpc.account && api.rpc.account.nextIndex
            //   ? api.rpc.account.nextIndex(accountId)
            //   // otherwise we end up with this: type 'Codec | Index' is not assignable to type 'Index'.
            //   : api.query.system.accountNonce<Index>(accountId)
            api.query.system.accountNonce<Index>(accountId)
          ])
          : of([createType('AccountId'), createType('BlockNumber'), [createType('Balance'), createType('Balance'), createType('Vec<BalanceLock>'), createType('Option<VestingSchedule>', null)], createType('Index')])
        )
      ),
      map(calcBalances),
      drr()
    );
}, true);

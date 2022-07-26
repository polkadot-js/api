// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Option, Vec } from '@polkadot/types';
import type { AccountId, Balance, BalanceLockTo212, BlockNumber, VestingSchedule } from '@polkadot/types/interfaces';
import type { PalletBalancesBalanceLock, PalletBalancesReserveData, PalletVestingVestingInfo } from '@polkadot/types/lookup';
import type { DeriveApi, DeriveBalancesAccount, DeriveBalancesAccountData, DeriveBalancesAll, DeriveBalancesAllAccountData, DeriveBalancesAllVesting } from '../types';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { BN, BN_ZERO, bnMax, bnMin, isFunction, objectSpread } from '@polkadot/util';

import { memo } from '../util';

type ResultBalance = [PalletVestingVestingInfo[] | null, ((PalletBalancesBalanceLock | BalanceLockTo212)[])[], PalletBalancesReserveData[][]];
type Result = [DeriveBalancesAccount, ResultBalance, BlockNumber];

interface AllLocked {
  allLocked: boolean,
  lockedBalance: Balance,
  lockedBreakdown: (PalletBalancesBalanceLock | BalanceLockTo212)[],
  vestingLocked: Balance
}

type DeriveCustomLocks = DeriveApi['derive'] & {
  [custom: string]: {
    customLocks?: DeriveApi['query']['balances']['locks']
  }
}

const VESTING_ID = '0x76657374696e6720';

function calcLocked (api: DeriveApi, bestNumber: BlockNumber, locks: (PalletBalancesBalanceLock | BalanceLockTo212)[]): AllLocked {
  let lockedBalance = api.registry.createType('Balance');
  let lockedBreakdown: (PalletBalancesBalanceLock | BalanceLockTo212)[] = [];
  let vestingLocked = api.registry.createType('Balance');
  let allLocked = false;

  if (Array.isArray(locks)) {
    // only get the locks that are valid until passed the current block
    lockedBreakdown = (locks as BalanceLockTo212[]).filter(({ until }): boolean => !until || (bestNumber && until.gt(bestNumber)));
    allLocked = lockedBreakdown.some(({ amount }) => amount && amount.isMax());
    vestingLocked = api.registry.createType('Balance', lockedBreakdown.filter(({ id }) => id.eq(VESTING_ID)).reduce((result: BN, { amount }) => result.iadd(amount), new BN(0)));

    // get the maximum of the locks according to https://github.com/paritytech/substrate/blob/master/srml/balances/src/lib.rs#L699
    const notAll = lockedBreakdown.filter(({ amount }) => amount && !amount.isMax());

    if (notAll.length) {
      lockedBalance = api.registry.createType('Balance', bnMax(...notAll.map(({ amount }): Balance => amount)));
    }
  }

  return { allLocked, lockedBalance, lockedBreakdown, vestingLocked };
}

function calcShared (api: DeriveApi, bestNumber: BlockNumber, data: DeriveBalancesAccountData, locks: (PalletBalancesBalanceLock | BalanceLockTo212)[]): DeriveBalancesAllAccountData {
  const { allLocked, lockedBalance, lockedBreakdown, vestingLocked } = calcLocked(api, bestNumber, locks);

  return objectSpread({}, data, {
    availableBalance: api.registry.createType('Balance', allLocked ? 0 : bnMax(new BN(0), data.freeBalance.sub(lockedBalance))),
    lockedBalance,
    lockedBreakdown,
    vestingLocked
  });
}

function calcVesting (bestNumber: BlockNumber, shared: DeriveBalancesAllAccountData, _vesting: PalletVestingVestingInfo[] | null): DeriveBalancesAllVesting {
  // Calculate the vesting balances,
  //  - offset = balance locked at startingBlock
  //  - perBlock is the unlock amount
  const vesting = _vesting || [];
  const isVesting = !shared.vestingLocked.isZero();
  const vestedBalances = vesting.map(({ locked, perBlock, startingBlock }) =>
    bestNumber.gt(startingBlock)
      ? bnMin(locked, perBlock.mul(bestNumber.sub(startingBlock)))
      : BN_ZERO
  );
  const vestedBalance = vestedBalances.reduce<BN>((all, value) => all.iadd(value), new BN(0));
  const vestingTotal = vesting.reduce<BN>((all, { locked }) => all.iadd(locked), new BN(0));

  return {
    isVesting,
    vestedBalance,
    vestedClaimable: isVesting
      ? shared.vestingLocked.sub(vestingTotal.sub(vestedBalance))
      : BN_ZERO,
    vesting: vesting
      .map(({ locked, perBlock, startingBlock }, index) => ({
        endBlock: locked.div(perBlock).iadd(startingBlock),
        locked,
        perBlock,
        startingBlock,
        vested: vestedBalances[index]
      }))
      .filter(({ locked }) => !locked.isZero()),
    vestingTotal
  };
}

function calcBalances (api: DeriveApi, [data, [vesting, allLocks, namedReserves], bestNumber]: Result): DeriveBalancesAll {
  const shared = calcShared(api, bestNumber, data, allLocks[0]);

  return objectSpread(shared, calcVesting(bestNumber, shared, vesting), {
    accountId: data.accountId,
    accountNonce: data.accountNonce,
    additional: allLocks
      .slice(1)
      .map((l, index) => calcShared(api, bestNumber, data.additional[index], l)),
    namedReserves
  });
}

// old
function queryOld (api: DeriveApi, accountId: AccountId | string): Observable<ResultBalance> {
  return combineLatest([
    api.query.balances.locks(accountId),
    api.query.balances.vesting<Option<VestingSchedule>>(accountId)
  ]).pipe(
    map(([locks, optVesting]): ResultBalance => {
      let vestingNew = null;

      if (optVesting.isSome) {
        const { offset: locked, perBlock, startingBlock } = optVesting.unwrap();

        vestingNew = api.registry.createType<PalletVestingVestingInfo>('VestingInfo', { locked, perBlock, startingBlock });
      }

      return [
        vestingNew
          ? [vestingNew]
          : null,
        [locks],
        []
      ];
    })
  );
}

const isNonNullable = <T>(nullable: T): nullable is NonNullable<T> => !!nullable;

function createCalls <T> (calls: (((a: unknown) => Observable<T>) | null | undefined)[]): [boolean[], ((a: unknown) => Observable<T>)[]] {
  return [
    calls.map((c) => !c),
    calls.filter(isNonNullable)
  ];
}

// current (balances, vesting)
function queryCurrent (api: DeriveApi, accountId: AccountId | string, balanceInstances: string[] = ['balances']): Observable<ResultBalance> {
  const [lockEmpty, lockQueries] = createCalls<Vec<PalletBalancesBalanceLock>>(
    balanceInstances.map((m) =>
      (api.derive as DeriveCustomLocks)[m]?.customLocks || api.query[m as 'balances']?.locks
    )
  );
  const [reserveEmpty, reserveQueries] = createCalls<Vec<PalletBalancesReserveData>>(
    balanceInstances.map((m) =>
      api.query[m as 'balances']?.reserves
    )
  );

  return combineLatest([
    api.query.vesting?.vesting
      ? api.query.vesting.vesting(accountId)
      : of(api.registry.createType('Option<VestingInfo>')),
    lockQueries.length
      ? combineLatest(lockQueries.map((c) => c(accountId)))
      : of([] as Vec<PalletBalancesBalanceLock>[]),
    reserveQueries.length
      ? combineLatest(reserveQueries.map((c) => c(accountId)))
      : of([] as Vec<PalletBalancesReserveData>[])
  ]).pipe(
    map(([opt, locks, reserves]): ResultBalance => {
      let offsetLock = -1;
      let offsetReserve = -1;
      const vesting = opt.unwrapOr(null);

      return [
        vesting
          ? Array.isArray(vesting)
            ? vesting
            : [vesting as PalletVestingVestingInfo]
          : null,
        lockEmpty.map((e) =>
          e ? api.registry.createType<Vec<PalletBalancesBalanceLock>>('Vec<BalanceLock>') : locks[++offsetLock]
        ),
        reserveEmpty.map((e) =>
          e ? api.registry.createType<Vec<PalletBalancesReserveData>>('Vec<PalletBalancesReserveData>') : reserves[++offsetReserve]
        )
      ];
    })
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
export function all (instanceId: string, api: DeriveApi): (address: AccountId | string) => Observable<DeriveBalancesAll> {
  const balanceInstances = api.registry.getModuleInstances(api.runtimeVersion.specName, 'balances');

  return memo(instanceId, (address: AccountId | string): Observable<DeriveBalancesAll> =>
    combineLatest([
      api.derive.balances.account(address),
      isFunction(api.query.system?.account) || isFunction(api.query.balances?.account)
        ? queryCurrent(api, address, balanceInstances)
        : queryOld(api, address)
    ]).pipe(
      switchMap(([account, locks]) =>
        combineLatest([
          of(account),
          of(locks),
          api.derive.chain.bestNumber()
        ])
      ),
      map((result) => calcBalances(api, result))
    ));
}

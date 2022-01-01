// Copyright 2017-2022 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { QueryableStorageMultiArg } from '@polkadot/api-base/types';
import type { Option, Vec } from '@polkadot/types';
import type { AccountId, AccountIndex, Address, Balance, BalanceLockTo212, BlockNumber, VestingSchedule } from '@polkadot/types/interfaces';
import type { PalletBalancesBalanceLock, PalletVestingVestingInfo } from '@polkadot/types/lookup';
import type { DeriveApi, DeriveBalancesAccount, DeriveBalancesAccountData, DeriveBalancesAll, DeriveBalancesAllAccountData, DeriveBalancesAllVesting } from '../types';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { BN, BN_ZERO, bnMax, bnMin, isFunction } from '@polkadot/util';

import { memo } from '../util';

type BalanceLocksEntry = Vec<PalletBalancesBalanceLock | BalanceLockTo212>;
type BalanceLocks = BalanceLocksEntry[];
type ResultBalance = [PalletVestingVestingInfo[] | null, ((PalletBalancesBalanceLock | BalanceLockTo212)[])[]];
type Result = [DeriveBalancesAccount, BlockNumber, ResultBalance];

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

  return {
    ...data,
    availableBalance: api.registry.createType('Balance', allLocked ? 0 : bnMax(new BN(0), data.freeBalance.sub(lockedBalance))),
    lockedBalance,
    lockedBreakdown,
    vestingLocked
  };
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
    vestedClaimable: isVesting ? shared.vestingLocked.sub(vestingTotal.sub(vestedBalance)) : BN_ZERO,
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

function calcBalances (api: DeriveApi, [data, bestNumber, [vesting, allLocks]]: Result): DeriveBalancesAll {
  const shared = calcShared(api, bestNumber, data, allLocks[0]);

  return {
    ...shared,
    ...calcVesting(bestNumber, shared, vesting),
    accountId: data.accountId,
    accountNonce: data.accountNonce,
    additional: allLocks
      .filter((_, index) => index !== 0)
      .map((l, index) => calcShared(api, bestNumber, data.additional[index], l))
  };
}

// old
function queryOld (api: DeriveApi, accountId: AccountId): Observable<ResultBalance> {
  return api.queryMulti<[Vec<PalletBalancesBalanceLock>, Option<VestingSchedule>]>([
    [api.query.balances.locks, accountId],
    [api.query.balances.vesting, accountId]
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
        [locks]
      ];
    })
  );
}

const isNonNullable = <T>(nullable: T): nullable is NonNullable<T> => !!nullable;

// current (balances, vesting)
function queryCurrent (api: DeriveApi, accountId: AccountId, balanceInstances: string[] = ['balances']): Observable<ResultBalance> {
  const calls = balanceInstances.map((m): DeriveApi['query']['balances']['locks'] | undefined =>
    (api.derive as DeriveCustomLocks)[m]?.customLocks || api.query[m as 'balances']?.locks
  );
  const lockEmpty = calls.map((c) => !c);
  const queries = calls.filter(isNonNullable).map((c): QueryableStorageMultiArg<'rxjs'> => [c, accountId]);

  return (
    api.query.vesting?.vesting
      ? api.queryMulti<[Option<PalletVestingVestingInfo> | Option<Vec<PalletVestingVestingInfo>>, ...BalanceLocks]>([[api.query.vesting.vesting, accountId], ...queries])
      // TODO We need to check module instances here as well, not only the balances module
      : queries.length
        ? api.queryMulti<[...(Vec<PalletBalancesBalanceLock>)[]]>(queries).pipe(
          map((r): [Option<PalletVestingVestingInfo>, ...BalanceLocks] => [api.registry.createType('Option<VestingInfo>'), ...r])
        )
        : of([api.registry.createType('Option<VestingInfo>')] as [Option<PalletVestingVestingInfo>])
  ).pipe(
    map(([opt, ...locks]): ResultBalance => {
      let offset = -1;
      const vesting = opt.unwrapOr(null);

      return [
        vesting
          ? Array.isArray(vesting) ? vesting : [vesting]
          : null,
        lockEmpty.map((e) => e ? api.registry.createType<Vec<PalletBalancesBalanceLock>>('Vec<BalanceLock>') : locks[++offset])
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
export function all (instanceId: string, api: DeriveApi): (address: AccountIndex | AccountId | Address | string) => Observable<DeriveBalancesAll> {
  const balanceInstances = api.registry.getModuleInstances(api.runtimeVersion.specName.toString(), 'balances');

  return memo(instanceId, (address: AccountIndex | AccountId | Address | string): Observable<DeriveBalancesAll> =>
    api.derive.balances.account(address).pipe(
      switchMap((account): Observable<Result> =>
        (!account.accountId.isEmpty
          ? combineLatest([
            of(account),
            api.derive.chain.bestNumber(),
            isFunction(api.query.system?.account) || isFunction(api.query.balances?.account)
              ? queryCurrent(api, account.accountId, balanceInstances)
              : queryOld(api, account.accountId)
          ])
          : of([account, api.registry.createType('BlockNumber'), [null, []]])
        )
      ),
      map((result): DeriveBalancesAll => calcBalances(api, result))
    ));
}

// Copyright 2017-2024 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, Balance, BalanceLockTo212, Index } from '@polkadot/types/interfaces';
import type { PalletBalancesBalanceLock, PalletBalancesReserveData } from '@polkadot/types/lookup';
import type { BN } from '@polkadot/util';

export interface DeriveBalancesAccountData {
  frameSystemAccountInfo?: {
    frozen: Balance;
    flags: Balance;
  }
  freeBalance: Balance;
  frozenFee: Balance;
  frozenMisc: Balance;
  reservedBalance: Balance;
  votingBalance: Balance;
}

export interface DeriveBalancesAccount extends DeriveBalancesAccountData {
  accountId: AccountId;
  accountNonce: Index;
  additional: DeriveBalancesAccountData[];
}

export interface DeriveBalancesAllAccountData extends DeriveBalancesAccountData {
  /**
   * Calculated available balance. This uses the formula: max(0, free - locked)
   * This is only correct when the return type of `api.query.system.account` is `AccountInfo` which was replaced by `FrameSystemAccountInfo`.
   * See `transferable` for the correct balance calculation.
   *
   * ref: https://github.com/paritytech/substrate/pull/12951
   */
  availableBalance: Balance;
  /**
   * The amount of balance locked away.
   */
  lockedBalance: Balance;
  /**
   * The breakdown of locked balances.
   */
  lockedBreakdown: (PalletBalancesBalanceLock | BalanceLockTo212)[];
  /**
   * Calculated transferable balance. This uses the formula: free - max(0, frozen - reserve)
   * This is only correct when the return type of `api.query.system.account` is `FrameSystemAccountInfo`.
   * Which is the most up to date calulcation for transferrable balances.
   *
   * ref: https://github.com/paritytech/polkadot-sdk/issues/1833
   */
  transferable: Balance | null;
  /**
   * Amount locked in vesting.
   */
  vestingLocked: Balance;
}

export interface DeriveBalancesVesting {
  startingBlock: BN;
  endBlock: BN;
  perBlock: BN;
  locked: BN;
  vested: BN;
}

export interface DeriveBalancesAllVesting {
  isVesting: boolean;
  vestedBalance: BN;
  vestedClaimable: BN;
  vesting: DeriveBalancesVesting[];
  vestingTotal: BN;
}

export interface DeriveBalancesAll extends DeriveBalancesAccount, DeriveBalancesAllAccountData, DeriveBalancesAllVesting {
  additional: DeriveBalancesAllAccountData[];
  namedReserves: PalletBalancesReserveData[][];
}

export type DeriveBalancesMap = Record<string, DeriveBalancesAll>;

// Copyright 2017-2024 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, Balance, BalanceLockTo212, Index } from '@polkadot/types/interfaces';
import type { PalletBalancesBalanceLock, PalletBalancesReserveData } from '@polkadot/types/lookup';
import type { BN } from '@polkadot/util';

export interface DeriveBalancesAccountData {
  freeBalance: Balance;
  frozenFee: Balance;
  frozenMisc: Balance;
  reservedBalance: Balance;
  votingBalance: Balance;
  newFrameData: {
    frozen?: Balance;
    flags?: Balance;
  }
}

export interface DeriveBalancesAccount extends DeriveBalancesAccountData {
  accountId: AccountId;
  accountNonce: Index;
  additional: DeriveBalancesAccountData[];
}

export interface DeriveBalancesAllAccountData extends DeriveBalancesAccountData {
  availableBalance: Balance;
  lockedBalance: Balance;
  lockedBreakdown: (PalletBalancesBalanceLock | BalanceLockTo212)[];
  vestingLocked: Balance;
  transferable: Balance;
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

// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, Balance, BalanceLockTo212, BlockNumber, Index } from '@polkadot/types/interfaces';
import type { PalletBalancesBalanceLock } from '@polkadot/types/lookup';

export interface DeriveBalancesAccountData {
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
  availableBalance: Balance;
  lockedBalance: Balance;
  lockedBreakdown: (PalletBalancesBalanceLock | BalanceLockTo212)[];
  vestingLocked: Balance;
}

export interface DeriveBalancesVesting {
  isVesting: boolean;
  vestedBalance: Balance;
  vestedClaimable: Balance;
  vestingEndBlocks: BlockNumber[];
  vestingPerBlocks: Balance[];
  vestingTotal: Balance;
  vestingTotals: Balance[];
}

export interface DeriveBalancesAll extends DeriveBalancesAccount, DeriveBalancesAllAccountData, DeriveBalancesVesting {
  additional: DeriveBalancesAllAccountData[];
}

export type DeriveBalancesMap = Record<string, DeriveBalancesAll>;

// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { AccountId, Balance, Exposure, Index, RewardDestination, StakingLedger, ValidatorPrefs, Vote } from '@polkadot/types';

export interface DerivedBalances {
  accountId: AccountId;
  accountNonce: Index;
  freeBalance: BN;
  lockedBalance: BN;
  availableBalance: BN;
  reservedBalance: BN;
  votingBalance: BN;
  vestedBalance: BN;
}

export type DerivedBalancesMap = {
  [index: string]: DerivedBalances
};

export interface DerivedContractFees {
  callBaseFee: BN;
  contractFee: BN;
  createBaseFee: BN;
  creationFee: BN;
  rentByteFee: BN;
  rentDepositOffset: BN;
  transactionBaseFee: BN;
  transactionByteFee: BN;
  transferFee: BN;
  tombstoneDeposit: BN;
}

export interface DerivedFees {
  creationFee: BN;
  existentialDeposit: BN;
  transactionBaseFee: BN;
  transactionByteFee: BN;
  transferFee: BN;
}

export interface DerivedReferendumVote {
  accountId: AccountId;
  balance: Balance;
  vote: Vote;
}

export interface DerivedSessionInfo {
  currentEra: BN;
  currentIndex: BN;
  eraLength: BN;
  eraProgress: BN;
  lastEraLengthChange: BN;
  lastLengthChange: BN;
  sessionLength: BN;
  sessionsPerEra: BN;
  sessionProgress: BN;
}

export interface DerivedStaking {
  accountId: AccountId;
  controllerId?: AccountId;
  nextSessionId?: AccountId;
  nominators?: Array<AccountId>;
  redeemable?: BN;
  rewardDestination?: RewardDestination;
  stakers?: Exposure;
  stakingLedger?: StakingLedger;
  stashId?: AccountId;
  unlocking?: DerivedUnlocking;
  validatorPrefs?: ValidatorPrefs;
}

export type DerivedUnlocking = Array<{remainingBlocks: BN, value: BN}>;

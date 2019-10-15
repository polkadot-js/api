// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Balance, BlockNumber, Exposure, Index, RewardDestination, SetIndex, StakingLedger, ValidatorPrefs, Vote, VoteIndex } from '@polkadot/types/interfaces';

import BN from 'bn.js';

export interface DerivedBalances {
  accountId: AccountId;
  accountNonce: Index;
  freeBalance: Balance;
  lockedBalance: Balance;
  availableBalance: Balance;
  reservedBalance: Balance;
  votingBalance: Balance;
  vestedBalance: Balance;
}

export type DerivedBalancesMap = Record<string, DerivedBalances>;

export interface DerivedContractFees {
  callBaseFee: BN;
  contractFee: BN;
  createBaseFee: BN;
  creationFee: BN;
  rentByteFee: BN;
  rentDepositOffset: BN;
  tombstoneDeposit: BN;
  transactionBaseFee: BN;
  transactionByteFee: BN;
  transferFee: BN;
}

export interface DerivedElectionsInfo {
  members: Record<string, BlockNumber>;
  candidates: AccountId[];
  candidateCount: BN;
  desiredSeats: BN;
  nextVoterSet: SetIndex;
  termDuration: BlockNumber;
  voteCount: VoteIndex;
  voterCount: SetIndex;
}

export interface DerivedFees {
  creationFee: BN;
  existentialDeposit: BN;
  transactionBaseFee: BN;
  transactionByteFee: BN;
  transferFee: BN;
}

export interface RecentlyOffline {
  blockNumber: BlockNumber;
  count: BN;
}

export type DerivedRecentlyOffline = Record<string, RecentlyOffline[]>;

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
  isEpoch: boolean;
  lastEraLengthChange: BN;
  lastLengthChange: BN;
  sessionLength: BN;
  sessionsPerEra: BN;
  sessionProgress: BN;
}

export type DerivedStakingAccount = [AccountId, DerivedStakingOnlineStatus];

export type DerivedStakingAccounts = DerivedStakingAccount[];

export interface DerivedStakingOnlineStatus {
  online?: {
    isOnline: boolean;
    blockNumber?: BlockNumber;
  };
  offline?: {
    blockNumber: BlockNumber;
    count: BN;
  }[];
}

export interface DerivedStaking extends DerivedStakingOnlineStatus {
  accountId: AccountId;
  controllerId?: AccountId;
  // @deprecated Use nextSessionIds instead
  nextSessionId?: AccountId;
  nextSessionIds: AccountId[];
  nominators?: AccountId[];
  redeemable?: BN;
  rewardDestination?: RewardDestination;
  // @deprecated Use sessionIds instead
  sessionId?: AccountId;
  sessionIds: AccountId[];
  stakers?: Exposure;
  stakingLedger?: StakingLedger;
  stashId?: AccountId;
  unlocking?: DerivedUnlocking;
  validatorPrefs?: ValidatorPrefs;
}

export type DerivedUnlocking = { remainingBlocks: BN; value: BN }[];

export interface VoterPosition {
  globalIndex: BN;
  index: BN;
  setIndex: SetIndex;
}

export type DerivedVoterPositions = Record<string, VoterPosition>;

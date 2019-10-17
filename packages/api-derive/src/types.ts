// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Balance, BlockNumber, EraIndex, Exposure, Index, RewardDestination, SessionIndex, SetIndex, StakingLedger, ValidatorPrefs, Vote, VoteIndex } from '@polkadot/types/interfaces';

import BN from 'bn.js';
import { u32 } from '@polkadot/types';

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
  candidateCount: u32;
  desiredSeats: u32;
  nextVoterSet: SetIndex;
  termDuration: BlockNumber;
  voteCount: VoteIndex;
  voterCount: SetIndex;
}

export interface DerivedFees {
  creationFee: Balance;
  existentialDeposit: Balance;
  transactionBaseFee: Balance;
  transactionByteFee: Balance;
  transferFee: Balance;
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
  currentEra: EraIndex;
  currentIndex: SessionIndex;
  eraLength: BlockNumber;
  eraProgress: BlockNumber;
  isEpoch: boolean;
  lastEraLengthChange: BlockNumber;
  lastLengthChange: BlockNumber;
  sessionLength: BlockNumber;
  sessionsPerEra: SessionIndex;
  sessionProgress: BlockNumber;
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
  redeemable?: Balance;
  rewardDestination?: RewardDestination;
  // @deprecated Use sessionIds instead
  sessionId?: AccountId;
  sessionIds: AccountId[];
  stakers?: Exposure;
  stakingLedger?: StakingLedger;
  stashId?: AccountId;
  unlocking?: DerivedUnlocking[];
  validatorPrefs?: ValidatorPrefs;
}

export type DerivedUnlocking = { remainingBlocks: BlockNumber; value: Balance };

export interface VoterPosition {
  globalIndex: BN;
  index: BN;
  setIndex: SetIndex;
}

export type DerivedVoterPositions = Record<string, VoterPosition>;

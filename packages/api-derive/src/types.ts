// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, AccountIndex, Balance, BalanceLock, BlockNumber, EraIndex, EraPoints, Exposure, Index, Keys, RewardDestination, SessionIndex, SetIndex, StakingLedger, ValidatorPrefs, Vote, VoteIndex } from '@polkadot/types/interfaces';

import BN from 'bn.js';
import { u32 } from '@polkadot/types';

export type AccountIndexes = Record<string, AccountIndex>;

export interface DeriveAccountInfo {
  accountId?: AccountId;
  accountIndex?: AccountIndex;
  nickname?: string;
}

export interface DerivedBalances {
  accountId: AccountId;
  accountNonce: Index;
  freeBalance: Balance;
  isVesting: boolean;
  lockedBalance: Balance;
  lockedBreakdown: BalanceLock[];
  availableBalance: Balance;
  reservedBalance: Balance;
  votingBalance: Balance;
  vestedBalance: Balance;
  vestingTotal: Balance;
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
  candidates: AccountId[];
  candidateCount: u32;
  candidacyBond?: Balance;
  desiredSeats: u32;
  members: [AccountId, Balance][];
  nextVoterSet?: SetIndex;
  runnersUp: [AccountId, Balance][];
  termDuration: BlockNumber;
  voteCount?: VoteIndex;
  voterCount?: SetIndex;
  votingBond?: Balance;
}

export interface DerivedFees {
  creationFee: Balance;
  existentialDeposit: Balance;
  transactionBaseFee: Balance;
  transactionByteFee: Balance;
  transferFee: Balance;
}

export interface DerivedHeartbeatAuthor {
  blockCount: u32;
  hasMessage: boolean;
  isOnline: boolean;
}

export type DerivedHeartbeats = Record<string, DerivedHeartbeatAuthor>;

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

export interface DeriveSessionIndexes {
  currentEra: EraIndex;
  currentIndex: SessionIndex;
  validatorCount: u32;
}

export interface DerivedSessionInfo extends DeriveSessionIndexes {
  eraLength: BlockNumber;
  eraProgress: BlockNumber;
  isEpoch: boolean;
  sessionLength: BlockNumber;
  sessionsPerEra: SessionIndex;
  sessionProgress: BlockNumber;
}

export type DerivedStakingAccount = [AccountId, DerivedStakingOnlineStatus];

export type DerivedStakingAccounts = DerivedStakingAccount[];

export interface DerivedStakingElected {
  currentElected: AccountId[];
  info: DerivedStaking[];
}

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

export interface DeriveStakingValidators {
  currentElected: AccountId[];
  validators: AccountId[];
}

export interface DerivedStakingStash {
  controllerId?: AccountId;
  nominators?: AccountId[];
  rewardDestination?: RewardDestination;
  nextKeys?: Keys;
  stakers?: Exposure;
  stashId?: AccountId;
  validatorPrefs?: ValidatorPrefs;
}

export interface DerivedStaking extends DerivedStakingOnlineStatus, DerivedStakingStash {
  accountId: AccountId;
  nextSessionIds: AccountId[];
  redeemable?: Balance;
  sessionIds: AccountId[];
  stakingLedger?: StakingLedger;
  unlocking?: DerivedUnlocking[];
}

export interface DerivedStakingOverview extends DeriveSessionIndexes {
  currentElected: AccountId[];
  eraPoints: EraPoints;
  validators: AccountId[];
}

export type DerivedUnlocking = { remainingBlocks: BlockNumber; value: Balance };

export interface VoterPosition {
  globalIndex: BN;
  index: BN;
  setIndex: SetIndex;
}

export type DerivedVoterPositions = Record<string, VoterPosition>;

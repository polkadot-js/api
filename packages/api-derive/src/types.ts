// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, AccountIndex, Balance, BalanceLock, BlockNumber, EraIndex, EraPoints, Exposure, Hash, Index, Keys, Proposal, PropIndex, ProposalIndex, ReferendumInfo, RewardDestination, SessionIndex, SetIndex, StakingLedger, TreasuryProposal, ValidatorPrefs, Vote, Votes, VoteIndex } from '@polkadot/types/interfaces';

import BN from 'bn.js';
import { u32, Vec } from '@polkadot/types';

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

export interface DerivedCollectiveProposal {
  hash: Hash;
  proposal: Proposal;
  votes: Votes | null;
}

export type DerivedCollectiveProposals = DerivedCollectiveProposal[];

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

export interface DeriveProposalPreImage {
  at: BlockNumber;
  balance: Balance;
  proposer: AccountId;
}

export interface DeriveProposal {
  balance?: Balance;
  hash: Hash;
  index: PropIndex;
  preimage?: DeriveProposalPreImage;
  proposal?: Proposal;
  proposer: AccountId;
  seconds: Vec<AccountId>;
}

export interface DerivedReferendum {
  hash: Hash;
  index: PropIndex;
  info: ReferendumInfo;
  preimage?: DeriveProposalPreImage;
  proposal?: Proposal;
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

export interface DerivedStakingElected {
  currentElected: AccountId[];
  info: DerivedStakingQuery[];
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

export interface DerivedStakingQuery extends DerivedStakingStash {
  accountId: AccountId;
  nextSessionIds: AccountId[];
  sessionIds: AccountId[];
  stakingLedger?: StakingLedger;
}

export interface DerivedStakingAccount extends DerivedStakingQuery {
  redeemable?: Balance;
  unlocking?: DerivedUnlocking[];
}

export interface DerivedStakingOverview extends DeriveSessionIndexes {
  currentElected: AccountId[];
  eraPoints: EraPoints;
  validators: AccountId[];
}

export interface DerivedTreasuryProposal {
  council: DerivedCollectiveProposal[];
  id: ProposalIndex;
  proposal: TreasuryProposal;
}

export interface DerivedTreasuryProposals {
  approvals: DerivedTreasuryProposal[];
  proposalCount: ProposalIndex;
  proposals: DerivedTreasuryProposal[];
}

export type DerivedUnlocking = {
  remainingBlocks: BlockNumber;
  value: Balance;
};

export interface VoterPosition {
  globalIndex: BN;
  index: BN;
  setIndex: SetIndex;
}

export type DerivedVoterPositions = Record<string, VoterPosition>;

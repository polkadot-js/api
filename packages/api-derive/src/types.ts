// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import type BN from 'bn.js';
import { AccountId, Balance, BalanceLock, BalanceLockTo212, BalanceOf, Bid, BidKind, BlockNumber, Hash, Index, Proposal, ProposalIndex, SetIndex, SocietyVote, StrikeCount, TreasuryProposal, Votes, VoteIndex, VouchingStatus } from '@polkadot/types/interfaces';

import { u32 } from '@polkadot/types';

export * from './accounts/types';
export * from './council/types';
export * from './democracy/types';
export * from './parachains/types';
export * from './session/types';
export * from './staking/types';

export interface DeriveBalancesAccount {
  accountId: AccountId;
  accountNonce: Index;
  freeBalance: Balance;
  frozenFee: Balance;
  frozenMisc: Balance;
  reservedBalance: Balance;
  votingBalance: Balance;
}

export interface DeriveBalancesAll extends DeriveBalancesAccount {
  isVesting: boolean;
  lockedBalance: Balance;
  lockedBreakdown: (BalanceLock | BalanceLockTo212)[];
  availableBalance: Balance;
  votingBalance: Balance;
  vestedBalance: Balance;
  vestedClaimable: Balance;
  vestingLocked: Balance;
  vestingTotal: Balance;
}

export type DeriveBalancesMap = Record<string, DeriveBalancesAll>;

export interface DeriveContractFees {
  callBaseFee: BN;
  contractFee: BN;
  creationFee: BN;
  rentByteFee: BN;
  rentDepositOffset: BN;
  surchargeReward: BN;
  tombstoneDeposit: BN;
  transactionBaseFee: BN;
  transactionByteFee: BN;
  transferFee: BN;
}

export interface DeriveCollectiveProposal {
  hash: Hash;
  proposal: Proposal;
  votes: Votes | null;
}

export type DeriveCollectiveProposals = DeriveCollectiveProposal[];

export interface DeriveElectionsInfo {
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

export interface DeriveFees {
  creationFee: Balance;
  existentialDeposit: Balance;
  transactionBaseFee: Balance;
  transactionByteFee: Balance;
  transferFee: Balance;
}

export interface DeriveHeartbeatAuthor {
  blockCount: u32;
  hasMessage: boolean;
  isOnline: boolean;
}

export type DeriveHeartbeats = Record<string, DeriveHeartbeatAuthor>;

export interface RecentlyOffline {
  blockNumber: BlockNumber;
  count: BN;
}

export type DeriveRecentlyOffline = Record<string, RecentlyOffline[]>;

export interface DeriveSociety {
  bids: Bid[];
  defender?: AccountId;
  hasDefender: boolean;
  head?: AccountId;
  founder?: AccountId;
  maxMembers: u32;
  pot: BalanceOf;
}

export interface DeriveSocietyCandidate {
  accountId: AccountId;
  kind: BidKind;
  value: Balance;
  isSuspended: boolean;
}

export interface DeriveSocietyMember {
  accountId: AccountId;
  isSuspended: boolean;
  payouts: [BlockNumber, Balance][];
  strikes: StrikeCount;
  vote?: SocietyVote;
  vouching?: VouchingStatus;
}

export interface DeriveTreasuryProposal {
  council: DeriveCollectiveProposal[];
  id: ProposalIndex;
  proposal: TreasuryProposal;
}

export interface DeriveTreasuryProposals {
  approvals: DeriveTreasuryProposal[];
  proposalCount: ProposalIndex;
  proposals: DeriveTreasuryProposal[];
}

export interface VoterPosition {
  globalIndex: BN;
  index: BN;
  setIndex: SetIndex;
}

export type DeriveVoterPositions = Record<string, VoterPosition>;

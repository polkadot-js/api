// Copyright 2017-2021 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { u32 } from '@polkadot/types';
import type { AccountId, Balance, BalanceLock, BalanceLockTo212, BalanceOf, Bid, BidKind, BlockNumber, Bounty, BountyIndex, Hash, Index, Proposal, ProposalIndex, SetIndex, SocietyVote, StrikeCount, TreasuryProposal, Votes, VouchingStatus } from '@polkadot/types/interfaces';
import type { BN } from '@polkadot/util';

export * from './accounts/types';
export * from './council/types';
export * from './crowdloan/types';
export * from './democracy/types';
export * from './elections/types';
export * from './parachains/types';
export * from './session/types';
export * from './staking/types';
export * from './type/types';

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
  lockedBreakdown: (BalanceLock | BalanceLockTo212)[];
  vestingLocked: Balance;
}

export interface DeriveBalancesAll extends DeriveBalancesAccount, DeriveBalancesAllAccountData {
  additional: DeriveBalancesAllAccountData[];
  isVesting: boolean;
  vestedBalance: Balance;
  vestedClaimable: Balance;
  vestingEndBlock: BlockNumber;
  vestingPerBlock: Balance;
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
  isDefenderVoter: boolean;
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

export interface DeriveBounty {
  bounty: Bounty;
  description: string;
  index: BountyIndex;
  proposals: DeriveCollectiveProposal[];
}

export type DeriveBounties = DeriveBounty[];

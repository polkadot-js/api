// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, AccountIndex, Balance, BalanceLock, BalanceLockTo212, BalanceOf, Bid, BidKind, BlockNumber, Hash, Index, Proposal, PropIndex, ProposalIndex, ReferendumInfoTo239, ReferendumStatus, RegistrationJudgement, SetIndex, SocietyVote, StrikeCount, TreasuryProposal, Vote, Votes, VoteIndex, VouchingStatus } from '@polkadot/types/interfaces';

import BN from 'bn.js';
import { u32, Vec } from '@polkadot/types';

export * from './parachains/types';
export * from './session/types';
export * from './staking/types';

export type AccountIndexes = Record<string, AccountIndex>;

export interface DeriveAccountRegistration {
  display?: string;
  displayParent?: string;
  email?: string;
  image?: string;
  legal?: string;
  other?: Record<string, string>;
  parent?: AccountId;
  pgp?: string;
  riot?: string;
  twitter?: string;
  web?: string;
  judgements: RegistrationJudgement[];
}

export interface DeriveAccountFlags {
  isCouncil: boolean;
  isSociety: boolean;
  isSudo: boolean;
  isTechCommittee: boolean;
}

export interface DeriveAccountInfo extends DeriveAccountFlags {
  accountId?: AccountId;
  accountIndex?: AccountIndex;
  identity: DeriveAccountRegistration;
  nickname?: string;
}

export interface DerivedBalancesAccount {
  accountId: AccountId;
  accountNonce: Index;
  freeBalance: Balance;
  frozenFee: Balance;
  frozenMisc: Balance;
  reservedBalance: Balance;
  votingBalance: Balance;
}

export interface DerivedBalancesAll extends DerivedBalancesAccount {
  isVesting: boolean;
  lockedBalance: Balance;
  lockedBreakdown: (BalanceLock | BalanceLockTo212)[];
  availableBalance: Balance;
  votingBalance: Balance;
  vestedBalance: Balance;
  vestingTotal: Balance;
}

export type DerivedBalancesMap = Record<string, DerivedBalancesAll>;

export interface DerivedContractFees {
  callBaseFee: BN;
  contractFee: BN;
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
  preimage?: DeriveProposalPreImage;
  proposal?: Proposal;
  status: ReferendumStatus | ReferendumInfoTo239;
}

export type DerivedRecentlyOffline = Record<string, RecentlyOffline[]>;

export interface DerivedReferendumVote {
  accountId: AccountId;
  balance: Balance;
  vote: Vote;
}

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

export interface VoterPosition {
  globalIndex: BN;
  index: BN;
  setIndex: SetIndex;
}

export type DerivedVoterPositions = Record<string, VoterPosition>;

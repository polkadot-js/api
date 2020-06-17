// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import type BN from 'bn.js';
import { AccountId, Balance, BlockNumber, Hash, Proposal, PropIndex, ReferendumInfoTo239, ReferendumStatus, Vote, ReferendumIndex, VoteThreshold } from '@polkadot/types/interfaces';

import { Vec } from '@polkadot/types';

export interface DeriveDemocracyLock {
  balance: Balance;
  isFinished: boolean;
  referendumId: ReferendumIndex;
  unlockAt: BN;
  vote: Vote;
}

export interface DeriveDispatch {
  at: BlockNumber;
  index: ReferendumIndex;
  imageHash: Hash;
  image?: DeriveProposalImage;
}

export interface DeriveProposalImage {
  at: BlockNumber;
  balance: Balance;
  proposal?: Proposal;
  proposer: AccountId;
}

export interface DeriveProposal {
  balance?: Balance;
  index: PropIndex;
  image?: DeriveProposalImage;
  imageHash: Hash;
  proposer: AccountId;
  seconds: Vec<AccountId>;
}

export interface DeriveProposalExternal {
  image?: DeriveProposalImage;
  imageHash: Hash;
  threshold: VoteThreshold;
}

export interface DeriveReferendum {
  index: ReferendumIndex;
  image?: DeriveProposalImage;
  imageHash: Hash;
  status: ReferendumStatus | ReferendumInfoTo239;
}

export interface DeriveReferendumVote {
  accountId: AccountId;
  balance: Balance;
  isDelegating: boolean;
  vote: Vote;
}

export interface DeriveReferendumVoteState {
  allAye: DeriveReferendumVote[];
  allNay: DeriveReferendumVote[];
  voteCount: number;
  voteCountAye: number;
  voteCountNay: number;
  votedAye: BN;
  votedNay: BN;
  votedTotal: BN;
}

export interface DeriveReferendumVotes extends DeriveReferendumVoteState {
  isPassing: boolean;
  votes: DeriveReferendumVote[];
}

export interface DeriveReferendumExt extends DeriveReferendum, DeriveReferendumVotes {
}

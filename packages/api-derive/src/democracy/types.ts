// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Balance, BlockNumber, Hash, Proposal, PropIndex, ReferendumInfoTo239, ReferendumStatus, Vote } from '@polkadot/types/interfaces';

import BN from 'bn.js';
import { Vec } from '@polkadot/types';

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

export interface DeriveReferendum {
  hash: Hash;
  index: PropIndex;
  preimage?: DeriveProposalPreImage;
  proposal?: Proposal;
  status: ReferendumStatus | ReferendumInfoTo239;
}

export interface DeriveReferendumVote {
  accountId: AccountId;
  balance: Balance;
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

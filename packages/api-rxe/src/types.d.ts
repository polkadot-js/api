// Copyright 2017-2018 @polkadot/ui-react-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { AccountId, Balance, BlockNumber, Header, PropIndex, Proposal, ReferendumIndex, u32, VoteThreshold } from '@polkadot/api-codec/index';
import ObservableApi from './index';

export type RxBalance = {
  address: AccountId,
  freeBalance: Balance,
  nominatedBalance: Balance,
  reservedBalance: Balance,
  votingBalance: Balance,
  stakingBalance: Balance,
  nominators?: Array<RxBalance>
}

export type RxFees = {
  baseFee: Balance,
  byteFee: Balance,
  creationFee: Balance,
  existentialDeposit: Balance,
  transferFee: Balance,
};

export type RxProposal = {
  address: AccountId,
  id: PropIndex,
  proposal: Proposal
};

export type RxProposalDeposits = {
  balance: Balance,
  addresses: Array<AccountId>
}

export type RxReferendum = {
  blockNumber: BlockNumber,
  id: ReferendumIndex,
  proposal: Proposal,
  voteThreshold: VoteThreshold
}

export type RxReferendumVote = {
  address: AccountId,
  balance: Balance,
  vote: boolean
};

export type RxBalanceMap = {
  [index: string]: RxBalance
}

export type ObservableApiNames = keyof ObservableApi;

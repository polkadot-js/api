// Copyright 2017-2018 @polkadot/ui-react-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { Observable } from 'rxjs';
import { AccountId, Balance, BlockNumber, Bool, Header, PropIndex, Proposal, ReferendumIndex, u32, VoteThreshold } from '@polkadot/api-codec/index';
import { Tuple } from '@polkadot/api-codec/codec';
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

export type RxReferendumVote = {
  address: AccountId,
  balance: Balance,
  vote: Bool
};

export type RxBalanceMap = {
  [index: string]: RxBalance
}

export type ObservableApiNames = keyof ObservableApi;

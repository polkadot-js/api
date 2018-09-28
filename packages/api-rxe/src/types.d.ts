// Copyright 2017-2018 @polkadot/ui-react-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { BlockDecoded, ExtrinsicDecoded, SectionItem } from '@polkadot/params/types';
import { Balance, BlockNumber, Header } from '@polkadot/api-codec/index';
import ObservableApi from './index';

export type RxBalance = {
  address: string,
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
  address: string,
  id: BN,
  proposal: ExtrinsicDecoded
};

export type RxProposalDeposits = {
  balance: Balance,
  addresses: Array<string>
}

export type RxReferendum = {
  blockNumber: BlockNumber,
  id: BN,
  proposal: ExtrinsicDecoded,
  voteThreshold: number
}

export type RxReferendumVote = {
  address: string,
  balance: BN,
  vote: boolean
};

export type RxBalanceMap = {
  [index: string]: RxBalance
}

export type ObservableApiNames = keyof ObservableApi;

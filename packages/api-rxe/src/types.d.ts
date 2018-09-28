// Copyright 2017-2018 @polkadot/ui-react-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import BN from 'bn.js';
import { Observable } from 'rxjs';
import { BlockDecoded, ExtrinsicDecoded, SectionItem } from '@polkadot/params/types';
import { Header } from '@polkadot/primitives/header';
import ObservableApi from './index';

export type RxBalance = {
  address: string,
  freeBalance: BN,
  nominatedBalance: BN,
  reservedBalance: BN,
  votingBalance: BN,
  stakingBalance: BN,
  nominators?: Array<RxBalance>
}

export type RxFees = {
  baseFee: BN,
  byteFee: BN,
  creationFee: BN,
  existentialDeposit: BN,
  transferFee: BN,
};

export type RxProposal = {
  address: string,
  id: BN,
  proposal: ExtrinsicDecoded
};

export type RxProposalDeposits = {
  balance: BN,
  addresses: Array<string>
}

export type RxReferendum = {
  blockNumber: BN,
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

export type KeyWithoutParams = [SectionItem<Storages>];
export type KeyWithParams = [SectionItem<Storages>, any];

export type ObservableApiNames = keyof ObservableApi;

// Copyright 2017-2018 @polkadot/api-observable authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Balance, bool as Bool } from '@polkadot/types/index';

import ApiBase from './Base';
import ApiCalls from './Calls';
import ApiCombined from './Combined';
import ApiQueries from './Queries';

export type ApiFunctions = keyof ApiBase | keyof ApiCalls | keyof ApiCombined | keyof ApiQueries;

export type RxBalance = {
  address: AccountId,
  freeBalance: Balance,
  nominatedBalance: Balance,
  reservedBalance: Balance,
  votingBalance: Balance,
  stakingBalance: Balance,
  nominators?: Array<RxBalance>
};

export type RxFees = {
  baseFee: Balance,
  byteFee: Balance,
  creationFee: Balance,
  existentialDeposit: Balance,
  transferFee: Balance
};

export type RxReferendumVote = {
  address: AccountId,
  balance: Balance,
  vote: Bool
};

export type RxBalanceMap = {
  [index: string]: RxBalance
};

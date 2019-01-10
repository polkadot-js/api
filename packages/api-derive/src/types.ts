// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Balance, Vote } from '@polkadot/types/index';

export type DerivedBalances = {
  accountId: AccountId,
  freeBalance: Balance,
  nominatedBalance: Balance,
  reservedBalance: Balance,
  votingBalance: Balance,
  stakingBalance: Balance,
  nominators?: Array<DerivedBalances>
};

export type DerivedBalancesMap = {
  [index: string]: DerivedBalances
};

export type DerivedReferendumVote = {
  accountId: AccountId,
  balance: Balance,
  vote: Vote
};

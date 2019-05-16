// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { AccountId, Balance, BlockNumber, Vote } from '@polkadot/types';

export type DerivedBalances = {
  accountId: AccountId,
  freeBalance: Balance,
  lockedBalance: Balance,
  availableBalance: Balance,
  reservedBalance: Balance,
  votingBalance: Balance,
  vestedBalance: Balance
};

export type DerivedFees = {
  creationFee: BN,
  existentialDeposit: BN,
  transactionBaseFee: BN,
  transactionByteFee: BN,
  transferFee: BN
};

export type DerivedBalancesMap = {
  [index: string]: DerivedBalances
};

export type DerivedReferendumVote = {
  accountId: AccountId,
  balance: Balance,
  vote: Vote
};

export type DerivedContractFees = {
  callBaseFee: BN,
  contractFee: BN,
  createBaseFee: BN,
  creationFee: BN,
  rentByteFee: BN,
  rentDepositOffset: BN,
  transactionBaseFee: BN,
  transactionByteFee: BN,
  transferFee: BN,
  tombstoneDeposit: BN
};

export type DerivedSessionInfo = {
  currentIndex: BlockNumber,
  eraLength: BN,
  eraProgress: BN,
  lastEraLengthChange: BlockNumber,
  lastLengthChange: BN,
  sessionLength: BlockNumber,
  sessionsPerEra: BlockNumber,
  sessionProgress: BN
};

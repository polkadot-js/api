// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import { AccountId, Balance, BlockNumber, Exposure, Index, RewardDestination, StakingLedger, StructAny, ValidatorPrefs, Vote } from '@polkadot/types';

export interface DerivedBalances extends StructAny {
  accountId: AccountId;
  accountNonce: Index;
  freeBalance: BN;
  lockedBalance: BN;
  availableBalance: BN;
  reservedBalance: BN;
  votingBalance: BN;
  vestedBalance: BN;
}

export type DerivedBalancesMap = {
  [index: string]: DerivedBalances
};

export interface DerivedContractFees extends StructAny {
  callBaseFee: BN;
  contractFee: BN;
  createBaseFee: BN;
  creationFee: BN;
  rentByteFee: BN;
  rentDepositOffset: BN;
  transactionBaseFee: BN;
  transactionByteFee: BN;
  transferFee: BN;
  tombstoneDeposit: BN;
}

export interface DerivedFees extends StructAny {
  creationFee: BN;
  existentialDeposit: BN;
  transactionBaseFee: BN;
  transactionByteFee: BN;
  transferFee: BN;
}

export interface DerivedReferendumVote extends StructAny {
  accountId: AccountId;
  balance: Balance;
  vote: Vote;
}

export interface DerivedSessionInfo extends StructAny {
  currentIndex: BlockNumber;
  eraLength: BN;
  eraProgress: BN;
  lastEraLengthChange: BlockNumber;
  lastLengthChange: BN;
  sessionLength: BlockNumber;
  sessionsPerEra: BlockNumber;
  sessionProgress: BN;
}

export interface DerivedStaking extends StructAny {
  accountId: AccountId;
  controllerId?: AccountId;
  nextSessionId?: AccountId;
  nominators?: Array<AccountId>;
  redeemable?: BN;
  rewardDestination?: RewardDestination;
  stakers?: Exposure;
  stakingLedger?: StakingLedger;
  stashId?: AccountId;
  unlocking?: DerivedUnlocking;
  validatorPrefs?: ValidatorPrefs;
}

export type DerivedUnlocking = Array<{remainingBlocks: BN, value: BN}>;

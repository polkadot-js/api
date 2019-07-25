// Copyright 2017-2019 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { SetIndex, VoteIndex } from '@polkadot/types/srml/elections/types';
import { Balance, BlockNumber, Index } from '@polkadot/types/srml/runtime/types';
import { Exposure, RewardDestination, StakingLedger, ValidatorPrefs } from '@polkadot/types/srml/staking/types';

import BN from 'bn.js';
import { AccountId, Vote } from '@polkadot/types';

export interface DerivedBalances {
  accountId: AccountId;
  accountNonce: Index;
  freeBalance: BN;
  lockedBalance: BN;
  availableBalance: BN;
  reservedBalance: BN;
  votingBalance: BN;
  vestedBalance: BN;
}

export type DerivedBalancesMap = Record<string, DerivedBalances>;

export interface DerivedContractFees {
  callBaseFee: BN;
  contractFee: BN;
  createBaseFee: BN;
  creationFee: BN;
  rentByteFee: BN;
  rentDepositOffset: BN;
  tombstoneDeposit: BN;
  transactionBaseFee: BN;
  transactionByteFee: BN;
  transferFee: BN;
}

export interface DerivedElectionsInfo {
  members: Record<string, BlockNumber>;
  candidates: AccountId[];
  candidateCount: BN;
  desiredSeats: BN;
  nextVoterSet: SetIndex;
  termDuration: BlockNumber;
  voteCount: VoteIndex;
  voterCount: SetIndex;
}

export interface DerivedFees {
  creationFee: BN;
  existentialDeposit: BN;
  transactionBaseFee: BN;
  transactionByteFee: BN;
  transferFee: BN;
}

export interface DerivedReferendumVote {
  accountId: AccountId;
  balance: Balance;
  vote: Vote;
}

export interface DerivedSessionInfo {
  currentEra: BN;
  currentIndex: BN;
  eraLength: BN;
  eraProgress: BN;
  lastEraLengthChange: BN;
  lastLengthChange: BN;
  sessionLength: BN;
  sessionsPerEra: BN;
  sessionProgress: BN;
}

export interface DerivedStaking {
  accountId: AccountId;
  controllerId?: AccountId;
  nextSessionId?: AccountId;
  nominators?: AccountId[];
  redeemable?: BN;
  rewardDestination?: RewardDestination;
  sessionId?: AccountId;
  stakers?: Exposure;
  stakingLedger?: StakingLedger;
  stashId?: AccountId;
  unlocking?: DerivedUnlocking;
  validatorPrefs?: ValidatorPrefs;
}

export type DerivedUnlocking = { remainingBlocks: BN; value: BN }[];

export interface VoterPosition {
  globalIndex: BN;
  index: BN;
  setIndex: SetIndex;
}

export type DerivedVoterPositions = Record<string, VoterPosition>;

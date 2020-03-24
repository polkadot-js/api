// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AccountId, Balance, BlockNumber, EraIndex, EraRewardPoints, Exposure, Keys, RewardDestination, RewardPoint, StakingLedger, ValidatorPrefs } from '@polkadot/types/interfaces';
import { DeriveSessionIndexes } from '../session/types';

export type DeriveEraValPoints = Record<string, RewardPoint>;

export type DeriveEraValPrefs = Record<string, ValidatorPrefs>;

export type DeriveEraValSlash = Record<string, Balance>;

export interface DeriveEraPoints {
  era: EraIndex;
  eraPoints: RewardPoint;
  validators: DeriveEraValPoints;
}

export interface DeriveEraPrefs {
  era: EraIndex;
  validators: DeriveEraValPrefs;
}

export interface DeriveEraRewards {
  era: EraIndex;
  eraReward: Balance;
}

export interface DeriveEraSlashes {
  era: EraIndex;
  nominators: DeriveEraValSlash;
  validators: DeriveEraValSlash;
}

export interface DeriveStakerPoints {
  era: EraIndex;
  eraPoints: RewardPoint;
  points: RewardPoint;
}

export type DeriveEraNominatorExposure = Record<string, [string, number][]>;

export type DeriveEraValidatorExposure = Record<string, Exposure>;

export interface DeriveEraExposure {
  era: EraIndex;
  nominators: DeriveEraNominatorExposure;
  validators: DeriveEraValidatorExposure;
}

export interface DeriveOwnExposure {
  clipped: Exposure;
  era: EraIndex;
  exposure: Exposure;
}

export type DeriveOwnSlashes = DeriveStakerSlashes;

export interface DeriveStakerExposure {
  era: EraIndex;
  isEmpty: boolean;
  isValidator: boolean;
  nominating: [string, number][];
  validators: DeriveEraValidatorExposure;
}

export interface DeriveStakerReward {
  era: EraIndex;
  isEmpty: boolean;
  isValidator: boolean;
  nominating: [string, number][];
  validators: Record<string, Balance>;
  total: Balance;
}

export interface DeriveStakerSlashes {
  era: EraIndex;
  total: Balance;
}

export interface DerivedStakingElected {
  nextElected: AccountId[];
  info: DerivedStakingQuery[];
}

export interface DeriveStakingValidators {
  nextElected: AccountId[];
  validators: AccountId[];
}

export interface DerivedStakingStash {
  controllerId?: AccountId;
  exposure?: Exposure;
  nominators?: AccountId[];
  nominateAt?: EraIndex;
  rewardDestination?: RewardDestination;
  nextKeys?: Keys;
  stashId?: AccountId;
  validatorPrefs?: ValidatorPrefs;
}

export interface DerivedStakingQuery extends DerivedStakingStash {
  accountId: AccountId;
  nextSessionIds: AccountId[];
  sessionIds: AccountId[];
  stakingLedger?: StakingLedger;
}

export interface DerivedStakingAccount extends DerivedStakingQuery {
  redeemable?: Balance;
  unlocking?: DerivedUnlocking[];
}

export interface DerivedStakingOverview extends DeriveSessionIndexes {
  eraPoints: EraRewardPoints;
  nextElected: AccountId[];
  validators: AccountId[];
}

export type DerivedUnlocking = {
  remainingBlocks: BlockNumber;
  value: Balance;
};

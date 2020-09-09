// Copyright 2017-2020 @polkadot/api-derive authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import type BN from 'bn.js';
import { AccountId, Balance, EraIndex, Exposure, RewardDestination, RewardPoint, StakingLedger, ValidatorPrefs } from '@polkadot/types/interfaces';
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

export interface DeriveOwnExposure {
  clipped: Exposure;
  era: EraIndex;
  exposure: Exposure;
}

export interface DeriveEraExposureNominating {
  validatorId: string;
  validatorIndex: number;
}

export type DeriveEraNominatorExposure = Record<string, DeriveEraExposureNominating[]>;

export type DeriveEraValidatorExposure = Record<string, Exposure>;

export interface DeriveEraExposure {
  era: EraIndex;
  nominators: DeriveEraNominatorExposure;
  validators: DeriveEraValidatorExposure;
}

export interface DeriveStakerExposure {
  era: EraIndex;
  isEmpty: boolean;
  isValidator: boolean;
  nominating: DeriveEraExposureNominating[];
  validators: DeriveEraValidatorExposure;
}

export interface DeriveStakerPrefs {
  era: EraIndex;
  validatorPrefs: ValidatorPrefs;
}

export interface DeriveStakerRewardValidator {
  total: Balance;
  value: Balance;
}

export interface DeriveStakerReward {
  era: EraIndex;
  eraReward: Balance;
  isStakerPayout?: boolean;
  isEmpty: boolean;
  isValidator: boolean;
  nominating: DeriveEraExposureNominating[];
  validators: Record<string, DeriveStakerRewardValidator>;
}

export interface DeriveStakerSlashes {
  era: EraIndex;
  total: Balance;
}

export type DeriveOwnSlashes = DeriveStakerSlashes;

export interface DeriveStakingKeys {
  nextSessionIds: AccountId[];
  sessionIds: AccountId[];
}

export interface DeriveStakingValidators {
  nextElected: AccountId[];
  validators: AccountId[];
}

export interface DeriveStakingStash {
  controllerId: AccountId | null;
  exposure: Exposure;
  nominators: AccountId[];
  rewardDestination: RewardDestination;
  stashId: AccountId;
  validatorPrefs: ValidatorPrefs;
}

export interface DeriveStakingQuery extends DeriveStakingStash {
  accountId: AccountId;
  stakingLedger: StakingLedger;
}

export interface DeriveStakingElected {
  nextElected: AccountId[];
  info: DeriveStakingQuery[];
}

export interface DeriveStakingWaiting {
  info: DeriveStakingQuery[];
  waiting: AccountId[];
}

export interface DeriveUnlocking {
  remainingEras: BN;
  value: Balance;
}

export interface DeriveStakingAccount extends DeriveStakingQuery, DeriveStakingKeys {
  redeemable?: Balance;
  unlocking?: DeriveUnlocking[];
}

export interface DeriveStakingOverview extends DeriveSessionIndexes {
  nextElected: AccountId[];
  validators: AccountId[];
}

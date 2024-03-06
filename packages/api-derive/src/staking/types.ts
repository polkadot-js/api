// Copyright 2017-2024 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountId, Balance, EraIndex, RewardPoint } from '@polkadot/types/interfaces';
import type { PalletStakingExposure, PalletStakingRewardDestination, PalletStakingStakingLedger, PalletStakingValidatorPrefs } from '@polkadot/types/lookup';
import type { BN } from '@polkadot/util';
import type { DeriveSessionIndexes } from '../session/types.js';

export type DeriveEraValPoints = Record<string, RewardPoint>;

export type DeriveEraValPrefs = Record<string, PalletStakingValidatorPrefs>;

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
  clipped: PalletStakingExposure;
  era: EraIndex;
  exposure: PalletStakingExposure;
}

export interface DeriveEraExposureNominating {
  validatorId: string;
  validatorIndex: number;
}

export type DeriveEraNominatorExposure = Record<string, DeriveEraExposureNominating[]>;

export type DeriveEraValidatorExposure = Record<string, PalletStakingExposure>;

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
  validatorPrefs: PalletStakingValidatorPrefs;
}

export interface DeriveStakerRewardValidator {
  total: Balance;
  value: Balance;
}

export interface DeriveStakerReward {
  era: EraIndex;
  eraReward: Balance;
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
  exposure: PalletStakingExposure;
  nominators: AccountId[];
  rewardDestination: PalletStakingRewardDestination | null;
  stashId: AccountId;
  validatorPrefs: PalletStakingValidatorPrefs;
}

export interface DeriveStakingQuery extends DeriveStakingStash {
  accountId: AccountId;
  stakingLedger: PalletStakingStakingLedger;
}

export interface DeriveStakingElected {
  info: DeriveStakingQuery[];
  nextElected: AccountId[];
  validators: AccountId[];
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

export interface StakingQueryFlags {
  withController?: boolean;
  withDestination?: boolean;
  withExposure?: boolean;
  withLedger?: boolean;
  withNominations?: boolean;
  withPrefs?: boolean;
}

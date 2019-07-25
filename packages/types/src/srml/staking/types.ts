/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Compact, Enum, Struct, Vector } from '../../codec';
import { AccountId, u32 } from '../../primitive';
import { Balance, BlockNumber } from '../runtime/types';

export interface EraIndex extends u32 {}

export interface EraRewards extends Struct {
  readonly total: u32;
  readonly rewards: Vector<u32>;
}

export interface Exposure extends Struct {
  readonly total: Compact<Balance>;
  readonly own: Compact<Balance>;
  readonly others: Vector<IndividualExposure>;
}

export interface IndividualExposure extends Struct {
  readonly who: AccountId;
  readonly value: Compact<Balance>;
}

export interface RewardDestination extends Enum {
  /**
   * @description 0:: Staked
   */
  readonly isStaked: boolean;
  /**
   * @description 1:: Stash
   */
  readonly isStash: boolean;
  /**
   * @description 2:: Controller
   */
  readonly isController: boolean;
}

export interface StakingLedger extends Struct {
  readonly stash: AccountId;
  readonly total: Compact<Balance>;
  readonly active: Compact<Balance>;
  readonly unlocking: Vector<UnlockChunk>;
}

export interface UnlockChunk extends Struct {
  readonly value: Compact<Balance>;
  readonly era: Compact<BlockNumber>;
}

export interface ValidatorPrefs extends Struct {
  readonly unstakeThreshold: Compact<u32>;
  readonly validatorPayment: Compact<Balance>;
}

/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Compact, Enum, Set, Struct, Vector } from '../../codec';
import { AccountId, Balance, u32 } from '../../primitive';

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

export interface ValidatorPrefs extends Struct {
  readonly unstakeThreshold: Compact<u32>;
  readonly validatorPayment: Compact<Balance>;
}

export interface WithdrawReasons extends Set {
  readonly isTransactionPayment: boolean;
  readonly isTransfer: boolean;
  readonly isReserve: boolean;
  readonly isFee: boolean;
}

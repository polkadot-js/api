// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Compact, Enum, Struct, Vec } from '../../codec';
import { u32 } from '../../primitive';
import { AccountId, Balance, BlockNumber, Moment } from '../runtime';

/** u32 */
export type EraIndex = u32;

/** Struct */
export interface EraRewards extends Struct {
  /** u32 */
  readonly total: u32;
  /** Vec<u32> */
  readonly rewards: Vec<u32>;
}

/** Struct */
export interface Exposure extends Struct {
  /** Compact<Balance> */
  readonly total: Compact<Balance>;
  /** Compact<Balance> */
  readonly own: Compact<Balance>;
  /** Vec<IndividualExposure> */
  readonly others: Vec<IndividualExposure>;
}

/** Enum */
export interface Forcing extends Enum {
  /** 0:: NotForcing */
  readonly isNotForcing: boolean;
  /** 1:: ForceNew */
  readonly isForceNew: boolean;
  /** 2:: ForceNone */
  readonly isForceNone: boolean;
}

/** Struct */
export interface IndividualExposure extends Struct {
  /** AccountId */
  readonly who: AccountId;
  /** Compact<Balance> */
  readonly value: Compact<Balance>;
}

/** Moment */
export type MomentOf = Moment;

/** Enum */
export interface RewardDestination extends Enum {
  /** 0:: Staked */
  readonly isStaked: boolean;
  /** 1:: Stash */
  readonly isStash: boolean;
  /** 2:: Controller */
  readonly isController: boolean;
}

/** Struct */
export interface SlashJournalEntry extends Struct {
  /** AccountId */
  readonly who: AccountId;
  /** Balance */
  readonly amount: Balance;
  /** Balance */
  readonly ownSlash: Balance;
}

/** Struct */
export interface StakingLedger extends Struct {
  /** AccountId */
  readonly stash: AccountId;
  /** Compact<Balance> */
  readonly total: Compact<Balance>;
  /** Compact<Balance> */
  readonly active: Compact<Balance>;
  /** Vec<UnlockChunk> */
  readonly unlocking: Vec<UnlockChunk>;
}

/** Struct */
export interface UnlockChunk extends Struct {
  /** Compact<Balance> */
  readonly value: Compact<Balance>;
  /** Compact<BlockNumber> */
  readonly era: Compact<BlockNumber>;
}

/** Struct */
export interface ValidatorPrefs extends Struct {
  /** Compact<Balance> */
  readonly validatorPayment: Compact<Balance>;
}

/** Struct */
export interface ValidatorPrefs0to145 extends Struct {
  /** Compact<u32> */
  readonly unstakeThreshold: Compact<u32>;
  /** Compact<Balance> */
  readonly validatorPayment: Compact<Balance>;
}

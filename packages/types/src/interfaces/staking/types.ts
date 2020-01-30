// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ITuple } from '@polkadot/types/types';
import { Compact, Enum, Struct, Vec } from '@polkadot/types/codec';
import { bool, u32 } from '@polkadot/types/primitive';
import { AccountId, Balance, BlockNumber, Moment, Perbill } from '@polkadot/types/interfaces/runtime';

/**
 * @name EraIndex
 * @description extends [[u32]]
 */
export interface EraIndex extends u32 {}

/**
 * @name EraPoints
 * @description extends [[Struct]]
 */
export interface EraPoints extends Struct {
  readonly total: Points;
  readonly individual: Vec<Points>;
}

/**
 * @name EraRewards
 * @description extends [[Struct]]
 */
export interface EraRewards extends Struct {
  readonly total: u32;
  readonly rewards: Vec<u32>;
}

/**
 * @name Exposure
 * @description extends [[Struct]]
 */
export interface Exposure extends Struct {
  readonly total: Compact<Balance>;
  readonly own: Compact<Balance>;
  readonly others: Vec<IndividualExposure>;
}

/**
 * @name Forcing
 * @description extends [[Enum]]
 */
export interface Forcing extends Enum {
  readonly isNotForcing: boolean;
  readonly isForceNew: boolean;
  readonly isForceNone: boolean;
  readonly isForceAlways: boolean;
}

/**
 * @name IndividualExposure
 * @description extends [[Struct]]
 */
export interface IndividualExposure extends Struct {
  readonly who: AccountId;
  readonly value: Compact<Balance>;
}

/**
 * @name MomentOf
 * @description extends [[Moment]]
 */
export interface MomentOf extends Moment {}

/**
 * @name Nominations
 * @description extends [[Struct]]
 */
export interface Nominations extends Struct {
  readonly targets: Vec<AccountId>;
  readonly submittedIn: EraIndex;
  readonly suppressed: bool;
}

/**
 * @name Points
 * @description extends [[u32]]
 */
export interface Points extends u32 {}

/**
 * @name RewardDestination
 * @description extends [[Enum]]
 */
export interface RewardDestination extends Enum {
  readonly isStaked: boolean;
  readonly isStash: boolean;
  readonly isController: boolean;
}

/**
 * @name SlashingSpans
 * @description extends [[Struct]]
 */
export interface SlashingSpans extends Struct {
  readonly spanIndex: SpanIndex;
  readonly lastStart: EraIndex;
  readonly lastNonzeroSlash: EraIndex;
  readonly prior: Vec<EraIndex>;
}

/**
 * @name SlashingSpansTo204
 * @description extends [[Struct]]
 */
export interface SlashingSpansTo204 extends Struct {
  readonly spanIndex: SpanIndex;
  readonly lastStart: EraIndex;
  readonly prior: Vec<EraIndex>;
}

/**
 * @name SlashJournalEntry
 * @description extends [[Struct]]
 */
export interface SlashJournalEntry extends Struct {
  readonly who: AccountId;
  readonly amount: Balance;
  readonly ownSlash: Balance;
}

/**
 * @name SpanIndex
 * @description extends [[u32]]
 */
export interface SpanIndex extends u32 {}

/**
 * @name SpanRecord
 * @description extends [[Struct]]
 */
export interface SpanRecord extends Struct {
  readonly slashed: Balance;
  readonly paidOut: Balance;
}

/**
 * @name StakingLedger
 * @description extends [[Struct]]
 */
export interface StakingLedger extends Struct {
  readonly stash: AccountId;
  readonly total: Compact<Balance>;
  readonly active: Compact<Balance>;
  readonly unlocking: Vec<UnlockChunk>;
}

/**
 * @name UnappliedSlash
 * @description extends [[Struct]]
 */
export interface UnappliedSlash extends Struct {
  readonly validator: AccountId;
  readonly own: Balance;
  readonly others: Vec<UnappliedSlashOther>;
  readonly reporters: Vec<AccountId>;
  readonly payout: Balance;
}

/**
 * @name UnappliedSlashOther
 * @description extends [[ITuple<[AccountId, Balance]>]]
 */
export interface UnappliedSlashOther extends ITuple<[AccountId, Balance]> {}

/**
 * @name UnlockChunk
 * @description extends [[Struct]]
 */
export interface UnlockChunk extends Struct {
  readonly value: Compact<Balance>;
  readonly era: Compact<BlockNumber>;
}

/**
 * @name ValidatorPrefs
 * @description extends [[Struct]]
 */
export interface ValidatorPrefs extends Struct {
  readonly commission: Compact<Perbill>;
}

/**
 * @name ValidatorPrefsTo145
 * @description extends [[Struct]]
 */
export interface ValidatorPrefsTo145 extends Struct {
  readonly unstakeThreshold: Compact<u32>;
  readonly validatorPayment: Compact<Balance>;
}

/**
 * @name ValidatorPrefsTo196
 * @description extends [[Struct]]
 */
export interface ValidatorPrefsTo196 extends Struct {
  readonly validatorPayment: Compact<Balance>;
}

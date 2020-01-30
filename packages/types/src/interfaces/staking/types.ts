// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ITuple } from '@polkadot/types/types';
import { Compact, Enum, Struct, Vec } from '@polkadot/types/codec';
import { bool, u32 } from '@polkadot/types/primitive';
import { AccountId, Balance, BlockNumber, Moment, Perbill } from '@polkadot/types/interfaces/runtime';

/** @name EraIndex */
export interface EraIndex extends u32 {}

/** @name EraPoints */
export interface EraPoints extends Struct {
  readonly total: Points;
  readonly individual: Vec<Points>;
}

/** @name EraRewards */
export interface EraRewards extends Struct {
  readonly total: u32;
  readonly rewards: Vec<u32>;
}

/** @name Exposure */
export interface Exposure extends Struct {
  readonly total: Compact<Balance>;
  readonly own: Compact<Balance>;
  readonly others: Vec<IndividualExposure>;
}

/** @name Forcing */
export interface Forcing extends Enum {
  readonly isNotForcing: boolean;
  readonly isForceNew: boolean;
  readonly isForceNone: boolean;
  readonly isForceAlways: boolean;
}

/** @name IndividualExposure */
export interface IndividualExposure extends Struct {
  readonly who: AccountId;
  readonly value: Compact<Balance>;
}

/** @name MomentOf */
export interface MomentOf extends Moment {}

/** @name Nominations */
export interface Nominations extends Struct {
  readonly targets: Vec<AccountId>;
  readonly submittedIn: EraIndex;
  readonly suppressed: bool;
}

/** @name Points */
export interface Points extends u32 {}

/** @name RewardDestination */
export interface RewardDestination extends Enum {
  readonly isStaked: boolean;
  readonly isStash: boolean;
  readonly isController: boolean;
}

/** @name SlashingSpans */
export interface SlashingSpans extends Struct {
  readonly spanIndex: SpanIndex;
  readonly lastStart: EraIndex;
  readonly lastNonzeroSlash: EraIndex;
  readonly prior: Vec<EraIndex>;
}

/** @name SlashingSpansTo204 */
export interface SlashingSpansTo204 extends Struct {
  readonly spanIndex: SpanIndex;
  readonly lastStart: EraIndex;
  readonly prior: Vec<EraIndex>;
}

/** @name SlashJournalEntry */
export interface SlashJournalEntry extends Struct {
  readonly who: AccountId;
  readonly amount: Balance;
  readonly ownSlash: Balance;
}

/** @name SpanIndex */
export interface SpanIndex extends u32 {}

/** @name SpanRecord */
export interface SpanRecord extends Struct {
  readonly slashed: Balance;
  readonly paidOut: Balance;
}

/** @name StakingLedger */
export interface StakingLedger extends Struct {
  readonly stash: AccountId;
  readonly total: Compact<Balance>;
  readonly active: Compact<Balance>;
  readonly unlocking: Vec<UnlockChunk>;
}

/** @name UnappliedSlash */
export interface UnappliedSlash extends Struct {
  readonly validator: AccountId;
  readonly own: Balance;
  readonly others: Vec<UnappliedSlashOther>;
  readonly reporters: Vec<AccountId>;
  readonly payout: Balance;
}

/** @name UnappliedSlashOther */
export interface UnappliedSlashOther extends ITuple<[AccountId, Balance]> {}

/** @name UnlockChunk */
export interface UnlockChunk extends Struct {
  readonly value: Compact<Balance>;
  readonly era: Compact<BlockNumber>;
}

/** @name ValidatorPrefs */
export interface ValidatorPrefs extends Struct {
  readonly commission: Compact<Perbill>;
}

/** @name ValidatorPrefsTo145 */
export interface ValidatorPrefsTo145 extends Struct {
  readonly unstakeThreshold: Compact<u32>;
  readonly validatorPayment: Compact<Balance>;
}

/** @name ValidatorPrefsTo196 */
export interface ValidatorPrefsTo196 extends Struct {
  readonly validatorPayment: Compact<Balance>;
}

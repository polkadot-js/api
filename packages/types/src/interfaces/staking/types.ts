// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ITuple } from '@polkadot/types/types';
import { Compact, Enum, Struct, Vec } from '@polkadot/types/codec';
import { bool, u32 } from '@polkadot/types/primitive';
import { AccountId, Balance, BlockNumber, Moment, Perbill } from '@polkadot/types/interfaces/runtime';

/** u32 */
export interface EraIndex extends u32 {}

/** Struct */
export interface EraPoints extends Struct {
  /** Points */
  readonly total: Points;
  /** Vec<Points> */
  readonly individual: Vec<Points>;
}

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
  /** 3:: ForceAlways */
  readonly isForceAlways: boolean;
}

/** Struct */
export interface IndividualExposure extends Struct {
  /** AccountId */
  readonly who: AccountId;
  /** Compact<Balance> */
  readonly value: Compact<Balance>;
}

/** Moment */
export interface MomentOf extends Moment {}

/** Struct */
export interface Nominations extends Struct {
  /** Vec<AccountId> */
  readonly targets: Vec<AccountId>;
  /** EraIndex */
  readonly submittedIn: EraIndex;
  /** bool */
  readonly suppressed: bool;
}

/** u32 */
export interface Points extends u32 {}

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
export interface SlashingSpans extends Struct {
  /** SpanIndex */
  readonly spanIndex: SpanIndex;
  /** EraIndex */
  readonly lastStart: EraIndex;
  /** EraIndex */
  readonly lastNonzeroSlash: EraIndex;
  /** Vec<EraIndex> */
  readonly prior: Vec<EraIndex>;
}

/** Struct */
export interface SlashingSpansTo204 extends Struct {
  /** SpanIndex */
  readonly spanIndex: SpanIndex;
  /** EraIndex */
  readonly lastStart: EraIndex;
  /** Vec<EraIndex> */
  readonly prior: Vec<EraIndex>;
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

/** u32 */
export interface SpanIndex extends u32 {}

/** Struct */
export interface SpanRecord extends Struct {
  /** Balance */
  readonly slashed: Balance;
  /** Balance */
  readonly paidOut: Balance;
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
export interface UnappliedSlash extends Struct {
  /** AccountId */
  readonly validator: AccountId;
  /** Balance */
  readonly own: Balance;
  /** Vec<UnappliedSlashOther> */
  readonly others: Vec<UnappliedSlashOther>;
  /** Vec<AccountId> */
  readonly reporters: Vec<AccountId>;
  /** Balance */
  readonly payout: Balance;
}

/** ITuple<[AccountId, Balance]> */
export interface UnappliedSlashOther extends ITuple<[AccountId, Balance]> {}

/** Struct */
export interface UnlockChunk extends Struct {
  /** Compact<Balance> */
  readonly value: Compact<Balance>;
  /** Compact<BlockNumber> */
  readonly era: Compact<BlockNumber>;
}

/** Struct */
export interface ValidatorPrefs extends Struct {
  /** Compact<Perbill> */
  readonly commission: Compact<Perbill>;
}

/** Struct */
export interface ValidatorPrefsTo145 extends Struct {
  /** Compact<u32> */
  readonly unstakeThreshold: Compact<u32>;
  /** Compact<Balance> */
  readonly validatorPayment: Compact<Balance>;
}

/** Struct */
export interface ValidatorPrefsTo196 extends Struct {
  /** Compact<Balance> */
  readonly validatorPayment: Compact<Balance>;
}

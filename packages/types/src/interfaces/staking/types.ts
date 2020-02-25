// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ITuple } from '@polkadot/types/types';
import { BTreeMap, Compact, Enum, Struct, Vec } from '@polkadot/types/codec';
import { bool, u128, u16, u32 } from '@polkadot/types/primitive';
import { AccountId, Balance, BlockNumber, Moment, Perbill } from '@polkadot/types/interfaces/runtime';

/** @name CompactAssignments */
export interface CompactAssignments extends Struct {
  readonly votes1: Vec<ITuple<[AccountId, Vec<CompactScore>, AccountId]>>;
  readonly votes2: Vec<ITuple<[AccountId, Vec<CompactScore>, AccountId]>>;
  readonly votes3: Vec<ITuple<[AccountId, Vec<CompactScore>, AccountId]>>;
  readonly votes4: Vec<ITuple<[AccountId, Vec<CompactScore>, AccountId]>>;
  readonly votes5: Vec<ITuple<[AccountId, Vec<CompactScore>, AccountId]>>;
  readonly votes6: Vec<ITuple<[AccountId, Vec<CompactScore>, AccountId]>>;
  readonly votes7: Vec<ITuple<[AccountId, Vec<CompactScore>, AccountId]>>;
  readonly votes8: Vec<ITuple<[AccountId, Vec<CompactScore>, AccountId]>>;
  readonly votes9: Vec<ITuple<[AccountId, Vec<CompactScore>, AccountId]>>;
  readonly votes10: Vec<ITuple<[AccountId, Vec<CompactScore>, AccountId]>>;
  readonly votes11: Vec<ITuple<[AccountId, Vec<CompactScore>, AccountId]>>;
  readonly votes12: Vec<ITuple<[AccountId, Vec<CompactScore>, AccountId]>>;
  readonly votes13: Vec<ITuple<[AccountId, Vec<CompactScore>, AccountId]>>;
  readonly votes14: Vec<ITuple<[AccountId, Vec<CompactScore>, AccountId]>>;
  readonly votes15: Vec<ITuple<[AccountId, Vec<CompactScore>, AccountId]>>;
  readonly votes16: Vec<ITuple<[AccountId, Vec<CompactScore>, AccountId]>>;
}

/** @name CompactScore */
export interface CompactScore extends ITuple<[AccountId, u128]> {}

/** @name ElectionCompute */
export interface ElectionCompute extends Enum {
  readonly isOnChain: boolean;
  readonly isSigned: boolean;
  readonly isAuthority: boolean;
}

/** @name ElectionResult */
export interface ElectionResult extends Struct {
  readonly compute: ElectionCompute;
  readonly slotStake: Balance;
  readonly electedStashes: Vec<AccountId>;
  readonly exposures: Vec<ITuple<[AccountId, Exposure]>>;
}

/** @name ElectionStatus */
export interface ElectionStatus extends Enum {
  readonly isClose: boolean;
  readonly isOpen: boolean;
  readonly asOpen: BlockNumber;
}

/** @name EraIndex */
export interface EraIndex extends u32 {}

/** @name EraPoints */
export interface EraPoints extends Struct {
  readonly total: Points;
  readonly individual: Vec<Points>;
}

/** @name EraRewardPoints */
export interface EraRewardPoints extends Struct {
  readonly total: RewardPoint;
  readonly individual: BTreeMap<AccountId, RewardPoint>;
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

/** @name KeyType */
export interface KeyType extends AccountId {}

/** @name MomentOf */
export interface MomentOf extends Moment {}

/** @name Nominations */
export interface Nominations extends Struct {
  readonly targets: Vec<AccountId>;
  readonly submittedIn: EraIndex;
  readonly suppressed: bool;
}

/** @name PhragmenScore */
export interface PhragmenScore extends Vec<u128> {}

/** @name Points */
export interface Points extends u32 {}

/** @name RewardDestination */
export interface RewardDestination extends Enum {
  readonly isStaked: boolean;
  readonly isStash: boolean;
  readonly isController: boolean;
}

/** @name RewardPoint */
export interface RewardPoint extends u32 {}

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
export interface StakingLedger extends StakingLedgerTo223 {}

/** @name StakingLedgerNew */
export interface StakingLedgerNew extends Struct {
  readonly stash: AccountId;
  readonly total: Compact<Balance>;
  readonly active: Compact<Balance>;
  readonly unlocking: Vec<UnlockChunk>;
  readonly nextReward: EraIndex;
}

/** @name StakingLedgerTo223 */
export interface StakingLedgerTo223 extends Struct {
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

/** @name ValidatorIndex */
export interface ValidatorIndex extends u16 {}

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

// Auto-generated via `yarn build:interfaces`, do not edit

import { Compact, Enum, Option, Struct, Vec } from '../../codec';
import { AccountId, Moment, u32 } from '../../primitive';
import { Balance, BlockNumber } from '../runtime';

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
  /** Compact<u32> */
  readonly unstakeThreshold: Compact<u32>;
  /** Compact<Balance> */
  readonly validatorPayment: Compact<Balance>;
}

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    EraIndex: EraIndex;
    'Compact<EraIndex>': Compact<EraIndex>;
    'Option<EraIndex>': Option<EraIndex>;
    'Vec<EraIndex>': Vec<EraIndex>;
    EraRewards: EraRewards;
    'Option<EraRewards>': Option<EraRewards>;
    'Vec<EraRewards>': Vec<EraRewards>;
    IndividualExposure: IndividualExposure;
    'Option<IndividualExposure>': Option<IndividualExposure>;
    'Vec<IndividualExposure>': Vec<IndividualExposure>;
    Exposure: Exposure;
    'Option<Exposure>': Option<Exposure>;
    'Vec<Exposure>': Vec<Exposure>;
    MomentOf: MomentOf;
    'Option<MomentOf>': Option<MomentOf>;
    'Vec<MomentOf>': Vec<MomentOf>;
    RewardDestination: RewardDestination;
    'Option<RewardDestination>': Option<RewardDestination>;
    'Vec<RewardDestination>': Vec<RewardDestination>;
    UnlockChunk: UnlockChunk;
    'Option<UnlockChunk>': Option<UnlockChunk>;
    'Vec<UnlockChunk>': Vec<UnlockChunk>;
    StakingLedger: StakingLedger;
    'Option<StakingLedger>': Option<StakingLedger>;
    'Vec<StakingLedger>': Vec<StakingLedger>;
    ValidatorPrefs: ValidatorPrefs;
    'Option<ValidatorPrefs>': Option<ValidatorPrefs>;
    'Vec<ValidatorPrefs>': Vec<ValidatorPrefs>;
  }
}

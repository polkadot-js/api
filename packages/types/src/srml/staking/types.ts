/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Compact, Enum, Option, Struct, Vec } from '../../codec';
import { AccountId, Moment, u32 } from '../../primitive';
import { Balance, BlockNumber } from '../runtime/types';

export interface EraIndex extends u32 {}

export interface EraRewards extends Struct {
  readonly total: u32;
  readonly rewards: Vec<u32>;
}

export interface Exposure extends Struct {
  readonly total: Compact<Balance>;
  readonly own: Compact<Balance>;
  readonly others: Vec<IndividualExposure>;
}

export interface IndividualExposure extends Struct {
  readonly who: AccountId;
  readonly value: Compact<Balance>;
}

export interface MomentOf extends Moment {}

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
  readonly unlocking: Vec<UnlockChunk>;
}

export interface UnlockChunk extends Struct {
  readonly value: Compact<Balance>;
  readonly era: Compact<BlockNumber>;
}

export interface ValidatorPrefs extends Struct {
  readonly unstakeThreshold: Compact<u32>;
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

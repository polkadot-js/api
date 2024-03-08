// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Compact, Enum, Null, Option, Struct, Vec, u128, u16, u32 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { PerU16 } from '@polkadot/types/interfaces/runtime';

declare module '@polkadot/types/lookup' {
  /** @name StagingKusamaRuntimeSessionKeys (121) */
  interface StagingKusamaRuntimeSessionKeys extends Struct {
    readonly grandpa: SpConsensusGrandpaAppPublic;
    readonly babe: SpConsensusBabeAppPublic;
    readonly paraValidator: PolkadotPrimitivesV6ValidatorAppPublic;
    readonly paraAssignment: PolkadotPrimitivesV6AssignmentAppPublic;
    readonly authorityDiscovery: SpAuthorityDiscoveryAppPublic;
    readonly beefy: SpConsensusBeefyEcdsaCryptoPublic;
  }

  /** @name StagingKusamaRuntimeOriginCaller (148) */
  interface StagingKusamaRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isVoid: boolean;
    readonly isOrigins: boolean;
    readonly asOrigins: StagingKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin;
    readonly isParachainsOrigin: boolean;
    readonly asParachainsOrigin: PolkadotRuntimeParachainsOriginPalletOrigin;
    readonly isXcmPallet: boolean;
    readonly asXcmPallet: PalletXcmOrigin;
    readonly type: 'System' | 'Void' | 'Origins' | 'ParachainsOrigin' | 'XcmPallet';
  }

  /** @name StagingKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin (150) */
  interface StagingKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin extends Enum {
    readonly isStakingAdmin: boolean;
    readonly isTreasurer: boolean;
    readonly isFellowshipAdmin: boolean;
    readonly isGeneralAdmin: boolean;
    readonly isAuctionAdmin: boolean;
    readonly isLeaseAdmin: boolean;
    readonly isReferendumCanceller: boolean;
    readonly isReferendumKiller: boolean;
    readonly isSmallTipper: boolean;
    readonly isBigTipper: boolean;
    readonly isSmallSpender: boolean;
    readonly isMediumSpender: boolean;
    readonly isBigSpender: boolean;
    readonly isWhitelistedCaller: boolean;
    readonly isFellowshipInitiates: boolean;
    readonly isFellows: boolean;
    readonly isFellowshipExperts: boolean;
    readonly isFellowshipMasters: boolean;
    readonly isFellowship1Dan: boolean;
    readonly isFellowship2Dan: boolean;
    readonly isFellowship3Dan: boolean;
    readonly isFellowship4Dan: boolean;
    readonly isFellowship5Dan: boolean;
    readonly isFellowship6Dan: boolean;
    readonly isFellowship7Dan: boolean;
    readonly isFellowship8Dan: boolean;
    readonly isFellowship9Dan: boolean;
    readonly isWishForChange: boolean;
    readonly type: 'StakingAdmin' | 'Treasurer' | 'FellowshipAdmin' | 'GeneralAdmin' | 'AuctionAdmin' | 'LeaseAdmin' | 'ReferendumCanceller' | 'ReferendumKiller' | 'SmallTipper' | 'BigTipper' | 'SmallSpender' | 'MediumSpender' | 'BigSpender' | 'WhitelistedCaller' | 'FellowshipInitiates' | 'Fellows' | 'FellowshipExperts' | 'FellowshipMasters' | 'Fellowship1Dan' | 'Fellowship2Dan' | 'Fellowship3Dan' | 'Fellowship4Dan' | 'Fellowship5Dan' | 'Fellowship6Dan' | 'Fellowship7Dan' | 'Fellowship8Dan' | 'Fellowship9Dan' | 'WishForChange';
  }

  /** @name StagingKusamaRuntimeProxyType (224) */
  interface StagingKusamaRuntimeProxyType extends Enum {
    readonly isAny: boolean;
    readonly isNonTransfer: boolean;
    readonly isGovernance: boolean;
    readonly isStaking: boolean;
    readonly isIdentityJudgement: boolean;
    readonly isCancelProxy: boolean;
    readonly isAuction: boolean;
    readonly isSociety: boolean;
    readonly isNominationPools: boolean;
    readonly type: 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | 'IdentityJudgement' | 'CancelProxy' | 'Auction' | 'Society' | 'NominationPools';
  }

  /** @name StagingKusamaRuntimeNposCompactSolution24 (234) */
  interface StagingKusamaRuntimeNposCompactSolution24 extends Struct {
    readonly votes1: Vec<ITuple<[Compact<u32>, Compact<u16>]>>;
    readonly votes2: Vec<ITuple<[Compact<u32>, ITuple<[Compact<u16>, Compact<PerU16>]>, Compact<u16>]>>;
    readonly votes3: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes4: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes5: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes6: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes7: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes8: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes9: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes10: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes11: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes12: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes13: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes14: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes15: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes16: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes17: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes18: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes19: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes20: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes21: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes22: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes23: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes24: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
  }

  /** @name PolkadotRuntimeParachainsAssignerOnDemandPalletCall (391) */
  interface PolkadotRuntimeParachainsAssignerOnDemandPalletCall extends Enum {
    readonly isPlaceOrderAllowDeath: boolean;
    readonly asPlaceOrderAllowDeath: {
      readonly maxAmount: u128;
      readonly paraId: u32;
    } & Struct;
    readonly isPlaceOrderKeepAlive: boolean;
    readonly asPlaceOrderKeepAlive: {
      readonly maxAmount: u128;
      readonly paraId: u32;
    } & Struct;
    readonly type: 'PlaceOrderAllowDeath' | 'PlaceOrderKeepAlive';
  }

  /** @name PolkadotRuntimeParachainsCoretimePalletCall (399) */
  interface PolkadotRuntimeParachainsCoretimePalletCall extends Enum {
    readonly isRequestCoreCount: boolean;
    readonly asRequestCoreCount: {
      readonly count: u16;
    } & Struct;
    readonly isAssignCore: boolean;
    readonly asAssignCore: {
      readonly core: u16;
      readonly begin: u32;
      readonly assignment: Vec<ITuple<[PalletBrokerCoretimeInterfaceCoreAssignment, u16]>>;
      readonly endHint: Option<u32>;
    } & Struct;
    readonly type: 'RequestCoreCount' | 'AssignCore';
  }

  /** @name PolkadotRuntimeParachainsAssignerOnDemandPalletEvent (543) */
  interface PolkadotRuntimeParachainsAssignerOnDemandPalletEvent extends Enum {
    readonly isOnDemandOrderPlaced: boolean;
    readonly asOnDemandOrderPlaced: {
      readonly paraId: u32;
      readonly spotPrice: u128;
    } & Struct;
    readonly isSpotTrafficSet: boolean;
    readonly asSpotTrafficSet: {
      readonly traffic: u128;
    } & Struct;
    readonly type: 'OnDemandOrderPlaced' | 'SpotTrafficSet';
  }

  /** @name PolkadotRuntimeParachainsCoretimePalletEvent (548) */
  interface PolkadotRuntimeParachainsCoretimePalletEvent extends Enum {
    readonly isRevenueInfoRequested: boolean;
    readonly asRevenueInfoRequested: {
      readonly when: u32;
    } & Struct;
    readonly isCoreAssigned: boolean;
    readonly asCoreAssigned: {
      readonly core: u32;
    } & Struct;
    readonly type: 'RevenueInfoRequested' | 'CoreAssigned';
  }

  /** @name StagingKusamaRuntimeRuntimeHoldReason (600) */
  interface StagingKusamaRuntimeRuntimeHoldReason extends Enum {
    readonly isPreimage: boolean;
    readonly asPreimage: PalletPreimageHoldReason;
    readonly isNis: boolean;
    readonly asNis: PalletNisHoldReason;
    readonly isStateTrieMigration: boolean;
    readonly asStateTrieMigration: PalletStateTrieMigrationHoldReason;
    readonly type: 'Preimage' | 'Nis' | 'StateTrieMigration';
  }

  /** @name StagingKusamaRuntimeRuntimeFreezeReason (607) */
  interface StagingKusamaRuntimeRuntimeFreezeReason extends Enum {
    readonly isNominationPools: boolean;
    readonly asNominationPools: PalletNominationPoolsFreezeReason;
    readonly type: 'NominationPools';
  }

  /** @name PalletBalancesIdAmount (800) */
  interface PalletBalancesIdAmount extends Struct {
    readonly id: Null;
    readonly amount: u128;
  }

  /** @name PolkadotRuntimeParachainsAssignerOnDemandEnqueuedOrder (899) */
  interface PolkadotRuntimeParachainsAssignerOnDemandEnqueuedOrder extends Struct {
    readonly paraId: u32;
  }

  /** @name PolkadotRuntimeParachainsAssignerOnDemandCoreAffinityCount (900) */
  interface PolkadotRuntimeParachainsAssignerOnDemandCoreAffinityCount extends Struct {
    readonly coreIdx: u32;
    readonly count: u32;
  }

  /** @name PolkadotRuntimeParachainsAssignerOnDemandPalletError (901) */
  interface PolkadotRuntimeParachainsAssignerOnDemandPalletError extends Enum {
    readonly isInvalidParaId: boolean;
    readonly isQueueFull: boolean;
    readonly isSpotPriceHigherThanMaxAmount: boolean;
    readonly type: 'InvalidParaId' | 'QueueFull' | 'SpotPriceHigherThanMaxAmount';
  }

  /** @name PolkadotRuntimeParachainsAssignerCoretimeSchedule (903) */
  interface PolkadotRuntimeParachainsAssignerCoretimeSchedule extends Struct {
    readonly assignments: Vec<ITuple<[PalletBrokerCoretimeInterfaceCoreAssignment, u16]>>;
    readonly endHint: Option<u32>;
    readonly nextSchedule: Option<u32>;
  }

  /** @name PolkadotRuntimeParachainsAssignerCoretimeCoreDescriptor (904) */
  interface PolkadotRuntimeParachainsAssignerCoretimeCoreDescriptor extends Struct {
    readonly queue: Option<PolkadotRuntimeParachainsAssignerCoretimeQueueDescriptor>;
    readonly currentWork: Option<PolkadotRuntimeParachainsAssignerCoretimeWorkState>;
  }

  /** @name PolkadotRuntimeParachainsAssignerCoretimeQueueDescriptor (906) */
  interface PolkadotRuntimeParachainsAssignerCoretimeQueueDescriptor extends Struct {
    readonly first: u32;
    readonly last: u32;
  }

  /** @name PolkadotRuntimeParachainsAssignerCoretimeWorkState (908) */
  interface PolkadotRuntimeParachainsAssignerCoretimeWorkState extends Struct {
    readonly assignments: Vec<ITuple<[PalletBrokerCoretimeInterfaceCoreAssignment, PolkadotRuntimeParachainsAssignerCoretimeAssignmentState]>>;
    readonly endHint: Option<u32>;
    readonly pos: u16;
    readonly step: u16;
  }

  /** @name PolkadotRuntimeParachainsAssignerCoretimeAssignmentState (911) */
  interface PolkadotRuntimeParachainsAssignerCoretimeAssignmentState extends Struct {
    readonly ratio: u16;
    readonly remaining: u16;
  }

  /** @name PolkadotRuntimeParachainsAssignerCoretimePalletError (912) */
  interface PolkadotRuntimeParachainsAssignerCoretimePalletError extends Enum {
    readonly isAssignmentsEmpty: boolean;
    readonly isOverScheduled: boolean;
    readonly isUnderScheduled: boolean;
    readonly isDisallowedInsert: boolean;
    readonly isDuplicateInsert: boolean;
    readonly isAssignmentsNotSorted: boolean;
    readonly type: 'AssignmentsEmpty' | 'OverScheduled' | 'UnderScheduled' | 'DisallowedInsert' | 'DuplicateInsert' | 'AssignmentsNotSorted';
  }

  /** @name PolkadotRuntimeParachainsCoretimePalletError (926) */
  interface PolkadotRuntimeParachainsCoretimePalletError extends Enum {
    readonly isNotBroker: boolean;
    readonly type: 'NotBroker';
  }

  /** @name StagingKusamaRuntimeRuntime (972) */
  type StagingKusamaRuntimeRuntime = Null;

} // declare module

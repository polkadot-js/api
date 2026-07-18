// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Bytes, Compact, Enum, Null, Option, Struct, U8aFixed, Vec, u128, u16, u32, u64 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, MultiAddress, PerU16, Permill, Perquintill } from '@polkadot/types/interfaces/runtime';

declare module '@polkadot/types/lookup' {
  /** @name AssetHubKusamaRuntimeRuntimeTask (15) */
  type AssetHubKusamaRuntimeRuntimeTask = Null;

  /** @name AssetHubKusamaRuntimeRuntimeParameters (65) */
  interface AssetHubKusamaRuntimeRuntimeParameters extends Enum {
    readonly isIssuance: boolean;
    readonly asIssuance: AssetHubKusamaRuntimeDynamicParamsIssuanceParameters;
    readonly isTreasury: boolean;
    readonly asTreasury: AssetHubKusamaRuntimeDynamicParamsTreasuryParameters;
    readonly isStakingElection: boolean;
    readonly asStakingElection: AssetHubKusamaRuntimeDynamicParamsStakingElectionParameters;
    readonly isScheduler: boolean;
    readonly asScheduler: AssetHubKusamaRuntimeDynamicParamsSchedulerParameters;
    readonly isMessageQueue: boolean;
    readonly asMessageQueue: AssetHubKusamaRuntimeDynamicParamsMessageQueueParameters;
    readonly type: 'Issuance' | 'Treasury' | 'StakingElection' | 'Scheduler' | 'MessageQueue';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsIssuanceParameters (66) */
  interface AssetHubKusamaRuntimeDynamicParamsIssuanceParameters extends Enum {
    readonly isMinInflation: boolean;
    readonly asMinInflation: ITuple<[AssetHubKusamaRuntimeDynamicParamsIssuanceMinInflation, Option<Perquintill>]>;
    readonly isMaxInflation: boolean;
    readonly asMaxInflation: ITuple<[AssetHubKusamaRuntimeDynamicParamsIssuanceMaxInflation, Option<Perquintill>]>;
    readonly isIdealStake: boolean;
    readonly asIdealStake: ITuple<[AssetHubKusamaRuntimeDynamicParamsIssuanceIdealStake, Option<Perquintill>]>;
    readonly isFalloff: boolean;
    readonly asFalloff: ITuple<[AssetHubKusamaRuntimeDynamicParamsIssuanceFalloff, Option<Perquintill>]>;
    readonly type: 'MinInflation' | 'MaxInflation' | 'IdealStake' | 'Falloff';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsIssuanceMinInflation (67) */
  type AssetHubKusamaRuntimeDynamicParamsIssuanceMinInflation = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsIssuanceMaxInflation (70) */
  type AssetHubKusamaRuntimeDynamicParamsIssuanceMaxInflation = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsIssuanceIdealStake (71) */
  type AssetHubKusamaRuntimeDynamicParamsIssuanceIdealStake = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsIssuanceFalloff (72) */
  type AssetHubKusamaRuntimeDynamicParamsIssuanceFalloff = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsTreasuryParameters (73) */
  interface AssetHubKusamaRuntimeDynamicParamsTreasuryParameters extends Enum {
    readonly isBurnPortion: boolean;
    readonly asBurnPortion: ITuple<[AssetHubKusamaRuntimeDynamicParamsTreasuryBurnPortion, Option<Permill>]>;
    readonly isBurnDestination: boolean;
    readonly asBurnDestination: ITuple<[AssetHubKusamaRuntimeDynamicParamsTreasuryBurnDestination, Option<AssetHubKusamaRuntimeTreasuryBurnDestinationAccount>]>;
    readonly type: 'BurnPortion' | 'BurnDestination';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsTreasuryBurnPortion (74) */
  type AssetHubKusamaRuntimeDynamicParamsTreasuryBurnPortion = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsTreasuryBurnDestination (77) */
  type AssetHubKusamaRuntimeDynamicParamsTreasuryBurnDestination = Null;

  /** @name AssetHubKusamaRuntimeTreasuryBurnDestinationAccount (79) */
  interface AssetHubKusamaRuntimeTreasuryBurnDestinationAccount extends Option<AccountId32> {}

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionParameters (81) */
  interface AssetHubKusamaRuntimeDynamicParamsStakingElectionParameters extends Enum {
    readonly isSignedPhase: boolean;
    readonly asSignedPhase: ITuple<[AssetHubKusamaRuntimeDynamicParamsStakingElectionSignedPhase, Option<u32>]>;
    readonly isMaxSignedSubmissions: boolean;
    readonly asMaxSignedSubmissions: ITuple<[AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxSignedSubmissions, Option<u32>]>;
    readonly isUnsignedPhase: boolean;
    readonly asUnsignedPhase: ITuple<[AssetHubKusamaRuntimeDynamicParamsStakingElectionUnsignedPhase, Option<u32>]>;
    readonly isMinerPages: boolean;
    readonly asMinerPages: ITuple<[AssetHubKusamaRuntimeDynamicParamsStakingElectionMinerPages, Option<u32>]>;
    readonly isMaxElectingVoters: boolean;
    readonly asMaxElectingVoters: ITuple<[AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxElectingVoters, Option<u32>]>;
    readonly isTargetSnapshotPerBlock: boolean;
    readonly asTargetSnapshotPerBlock: ITuple<[AssetHubKusamaRuntimeDynamicParamsStakingElectionTargetSnapshotPerBlock, Option<u32>]>;
    readonly isMaxEraDuration: boolean;
    readonly asMaxEraDuration: ITuple<[AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxEraDuration, Option<u64>]>;
    readonly type: 'SignedPhase' | 'MaxSignedSubmissions' | 'UnsignedPhase' | 'MinerPages' | 'MaxElectingVoters' | 'TargetSnapshotPerBlock' | 'MaxEraDuration';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionSignedPhase (82) */
  type AssetHubKusamaRuntimeDynamicParamsStakingElectionSignedPhase = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxSignedSubmissions (83) */
  type AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxSignedSubmissions = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionUnsignedPhase (84) */
  type AssetHubKusamaRuntimeDynamicParamsStakingElectionUnsignedPhase = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionMinerPages (85) */
  type AssetHubKusamaRuntimeDynamicParamsStakingElectionMinerPages = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxElectingVoters (86) */
  type AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxElectingVoters = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionTargetSnapshotPerBlock (87) */
  type AssetHubKusamaRuntimeDynamicParamsStakingElectionTargetSnapshotPerBlock = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxEraDuration (88) */
  type AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxEraDuration = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsSchedulerParameters (90) */
  interface AssetHubKusamaRuntimeDynamicParamsSchedulerParameters extends Enum {
    readonly isMaxScheduledPerBlock: boolean;
    readonly asMaxScheduledPerBlock: ITuple<[AssetHubKusamaRuntimeDynamicParamsSchedulerMaxScheduledPerBlock, Option<u32>]>;
    readonly isMaximumWeight: boolean;
    readonly asMaximumWeight: ITuple<[AssetHubKusamaRuntimeDynamicParamsSchedulerMaximumWeight, Option<SpWeightsWeightV2Weight>]>;
    readonly type: 'MaxScheduledPerBlock' | 'MaximumWeight';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsSchedulerMaxScheduledPerBlock (91) */
  type AssetHubKusamaRuntimeDynamicParamsSchedulerMaxScheduledPerBlock = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsSchedulerMaximumWeight (92) */
  type AssetHubKusamaRuntimeDynamicParamsSchedulerMaximumWeight = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsMessageQueueParameters (95) */
  interface AssetHubKusamaRuntimeDynamicParamsMessageQueueParameters extends Enum {
    readonly isMaxOnInitWeight: boolean;
    readonly asMaxOnInitWeight: ITuple<[AssetHubKusamaRuntimeDynamicParamsMessageQueueMaxOnInitWeight, Option<Option<SpWeightsWeightV2Weight>>]>;
    readonly isMaxOnIdleWeight: boolean;
    readonly asMaxOnIdleWeight: ITuple<[AssetHubKusamaRuntimeDynamicParamsMessageQueueMaxOnIdleWeight, Option<Option<SpWeightsWeightV2Weight>>]>;
    readonly type: 'MaxOnInitWeight' | 'MaxOnIdleWeight';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsMessageQueueMaxOnInitWeight (96) */
  type AssetHubKusamaRuntimeDynamicParamsMessageQueueMaxOnInitWeight = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsMessageQueueMaxOnIdleWeight (98) */
  type AssetHubKusamaRuntimeDynamicParamsMessageQueueMaxOnIdleWeight = Null;

  /** @name AssetHubKusamaRuntimeSessionKeys (117) */
  interface AssetHubKusamaRuntimeSessionKeys extends Struct {
    readonly aura: SpConsensusAuraSr25519AppSr25519Public;
  }

  /** @name SpConsensusAuraSr25519AppSr25519Public (118) */
  interface SpConsensusAuraSr25519AppSr25519Public extends U8aFixed {}

  /** @name AssetHubKusamaRuntimeOriginCaller (255) */
  interface AssetHubKusamaRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PalletXcmOrigin;
    readonly isCumulusXcm: boolean;
    readonly asCumulusXcm: CumulusPalletXcmOrigin;
    readonly isRevive: boolean;
    readonly asRevive: PalletReviveOrigin;
    readonly isOrigins: boolean;
    readonly asOrigins: AssetHubKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin;
    readonly type: 'System' | 'PolkadotXcm' | 'CumulusXcm' | 'Revive' | 'Origins';
  }

  /** @name AssetHubKusamaRuntimeRuntime (260) */
  type AssetHubKusamaRuntimeRuntime = Null;

  /** @name AssetHubKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin (261) */
  interface AssetHubKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin extends Enum {
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

  /** @name AssetHubKusamaRuntimeProxyType (267) */
  interface AssetHubKusamaRuntimeProxyType extends Enum {
    readonly isAny: boolean;
    readonly isNonTransfer: boolean;
    readonly isCancelProxy: boolean;
    readonly isAssets: boolean;
    readonly isAssetOwner: boolean;
    readonly isAssetManager: boolean;
    readonly isCollator: boolean;
    readonly isGovernance: boolean;
    readonly isStaking: boolean;
    readonly isNominationPools: boolean;
    readonly isAuction: boolean;
    readonly isParaRegistration: boolean;
    readonly isSociety: boolean;
    readonly isSpokesperson: boolean;
    readonly isStakingOperator: boolean;
    readonly type: 'Any' | 'NonTransfer' | 'CancelProxy' | 'Assets' | 'AssetOwner' | 'AssetManager' | 'Collator' | 'Governance' | 'Staking' | 'NominationPools' | 'Auction' | 'ParaRegistration' | 'Society' | 'Spokesperson' | 'StakingOperator';
  }

  /** @name PalletRemoteProxyCall (268) */
  interface PalletRemoteProxyCall extends Enum {
    readonly isRemoteProxy: boolean;
    readonly asRemoteProxy: {
      readonly real: MultiAddress;
      readonly forceProxyType: Option<AssetHubKusamaRuntimeProxyType>;
      readonly call: Call;
      readonly proof: PalletRemoteProxyRemoteProxyProof;
    } & Struct;
    readonly isRegisterRemoteProxyProof: boolean;
    readonly asRegisterRemoteProxyProof: {
      readonly proof: PalletRemoteProxyRemoteProxyProof;
    } & Struct;
    readonly isRemoteProxyWithRegisteredProof: boolean;
    readonly asRemoteProxyWithRegisteredProof: {
      readonly real: MultiAddress;
      readonly forceProxyType: Option<AssetHubKusamaRuntimeProxyType>;
      readonly call: Call;
    } & Struct;
    readonly type: 'RemoteProxy' | 'RegisterRemoteProxyProof' | 'RemoteProxyWithRegisteredProof';
  }

  /** @name PalletRemoteProxyRemoteProxyProof (269) */
  interface PalletRemoteProxyRemoteProxyProof extends Enum {
    readonly isRelayChain: boolean;
    readonly asRelayChain: {
      readonly proof: Vec<Bytes>;
      readonly block: u32;
    } & Struct;
    readonly type: 'RelayChain';
  }

  /** @name PalletRecoveryFriendGroup (315) */
  interface PalletRecoveryFriendGroup extends Struct {
    readonly friends: Vec<AccountId32>;
    readonly friendsNeeded: u32;
    readonly inheritor: AccountId32;
    readonly inheritanceDelay: u32;
    readonly inheritancePriority: u32;
    readonly cancelDelay: u32;
  }

  /** @name AssetHubKusamaRuntimeStakingNposCompactSolution24 (370) */
  interface AssetHubKusamaRuntimeStakingNposCompactSolution24 extends Struct {
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

  /** @name AssetHubKusamaRuntimeRuntimeParametersKey (524) */
  interface AssetHubKusamaRuntimeRuntimeParametersKey extends Enum {
    readonly isIssuance: boolean;
    readonly asIssuance: AssetHubKusamaRuntimeDynamicParamsIssuanceParametersKey;
    readonly isTreasury: boolean;
    readonly asTreasury: AssetHubKusamaRuntimeDynamicParamsTreasuryParametersKey;
    readonly isStakingElection: boolean;
    readonly asStakingElection: AssetHubKusamaRuntimeDynamicParamsStakingElectionParametersKey;
    readonly isScheduler: boolean;
    readonly asScheduler: AssetHubKusamaRuntimeDynamicParamsSchedulerParametersKey;
    readonly isMessageQueue: boolean;
    readonly asMessageQueue: AssetHubKusamaRuntimeDynamicParamsMessageQueueParametersKey;
    readonly type: 'Issuance' | 'Treasury' | 'StakingElection' | 'Scheduler' | 'MessageQueue';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsIssuanceParametersKey (525) */
  interface AssetHubKusamaRuntimeDynamicParamsIssuanceParametersKey extends Enum {
    readonly isMinInflation: boolean;
    readonly isMaxInflation: boolean;
    readonly isIdealStake: boolean;
    readonly isFalloff: boolean;
    readonly type: 'MinInflation' | 'MaxInflation' | 'IdealStake' | 'Falloff';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsTreasuryParametersKey (526) */
  interface AssetHubKusamaRuntimeDynamicParamsTreasuryParametersKey extends Enum {
    readonly isBurnPortion: boolean;
    readonly isBurnDestination: boolean;
    readonly type: 'BurnPortion' | 'BurnDestination';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionParametersKey (527) */
  interface AssetHubKusamaRuntimeDynamicParamsStakingElectionParametersKey extends Enum {
    readonly isSignedPhase: boolean;
    readonly isMaxSignedSubmissions: boolean;
    readonly isUnsignedPhase: boolean;
    readonly isMinerPages: boolean;
    readonly isMaxElectingVoters: boolean;
    readonly isTargetSnapshotPerBlock: boolean;
    readonly isMaxEraDuration: boolean;
    readonly type: 'SignedPhase' | 'MaxSignedSubmissions' | 'UnsignedPhase' | 'MinerPages' | 'MaxElectingVoters' | 'TargetSnapshotPerBlock' | 'MaxEraDuration';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsSchedulerParametersKey (528) */
  interface AssetHubKusamaRuntimeDynamicParamsSchedulerParametersKey extends Enum {
    readonly isMaxScheduledPerBlock: boolean;
    readonly isMaximumWeight: boolean;
    readonly type: 'MaxScheduledPerBlock' | 'MaximumWeight';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsMessageQueueParametersKey (529) */
  interface AssetHubKusamaRuntimeDynamicParamsMessageQueueParametersKey extends Enum {
    readonly isMaxOnInitWeight: boolean;
    readonly isMaxOnIdleWeight: boolean;
    readonly type: 'MaxOnInitWeight' | 'MaxOnIdleWeight';
  }

  /** @name AssetHubKusamaRuntimeRuntimeParametersValue (531) */
  interface AssetHubKusamaRuntimeRuntimeParametersValue extends Enum {
    readonly isIssuance: boolean;
    readonly asIssuance: AssetHubKusamaRuntimeDynamicParamsIssuanceParametersValue;
    readonly isTreasury: boolean;
    readonly asTreasury: AssetHubKusamaRuntimeDynamicParamsTreasuryParametersValue;
    readonly isStakingElection: boolean;
    readonly asStakingElection: AssetHubKusamaRuntimeDynamicParamsStakingElectionParametersValue;
    readonly isScheduler: boolean;
    readonly asScheduler: AssetHubKusamaRuntimeDynamicParamsSchedulerParametersValue;
    readonly isMessageQueue: boolean;
    readonly asMessageQueue: AssetHubKusamaRuntimeDynamicParamsMessageQueueParametersValue;
    readonly type: 'Issuance' | 'Treasury' | 'StakingElection' | 'Scheduler' | 'MessageQueue';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsIssuanceParametersValue (532) */
  interface AssetHubKusamaRuntimeDynamicParamsIssuanceParametersValue extends Enum {
    readonly isMinInflation: boolean;
    readonly asMinInflation: Perquintill;
    readonly isMaxInflation: boolean;
    readonly asMaxInflation: Perquintill;
    readonly isIdealStake: boolean;
    readonly asIdealStake: Perquintill;
    readonly isFalloff: boolean;
    readonly asFalloff: Perquintill;
    readonly type: 'MinInflation' | 'MaxInflation' | 'IdealStake' | 'Falloff';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsTreasuryParametersValue (533) */
  interface AssetHubKusamaRuntimeDynamicParamsTreasuryParametersValue extends Enum {
    readonly isBurnPortion: boolean;
    readonly asBurnPortion: Permill;
    readonly isBurnDestination: boolean;
    readonly asBurnDestination: AssetHubKusamaRuntimeTreasuryBurnDestinationAccount;
    readonly type: 'BurnPortion' | 'BurnDestination';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionParametersValue (534) */
  interface AssetHubKusamaRuntimeDynamicParamsStakingElectionParametersValue extends Enum {
    readonly isSignedPhase: boolean;
    readonly asSignedPhase: u32;
    readonly isMaxSignedSubmissions: boolean;
    readonly asMaxSignedSubmissions: u32;
    readonly isUnsignedPhase: boolean;
    readonly asUnsignedPhase: u32;
    readonly isMinerPages: boolean;
    readonly asMinerPages: u32;
    readonly isMaxElectingVoters: boolean;
    readonly asMaxElectingVoters: u32;
    readonly isTargetSnapshotPerBlock: boolean;
    readonly asTargetSnapshotPerBlock: u32;
    readonly isMaxEraDuration: boolean;
    readonly asMaxEraDuration: u64;
    readonly type: 'SignedPhase' | 'MaxSignedSubmissions' | 'UnsignedPhase' | 'MinerPages' | 'MaxElectingVoters' | 'TargetSnapshotPerBlock' | 'MaxEraDuration';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsSchedulerParametersValue (535) */
  interface AssetHubKusamaRuntimeDynamicParamsSchedulerParametersValue extends Enum {
    readonly isMaxScheduledPerBlock: boolean;
    readonly asMaxScheduledPerBlock: u32;
    readonly isMaximumWeight: boolean;
    readonly asMaximumWeight: SpWeightsWeightV2Weight;
    readonly type: 'MaxScheduledPerBlock' | 'MaximumWeight';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsMessageQueueParametersValue (536) */
  interface AssetHubKusamaRuntimeDynamicParamsMessageQueueParametersValue extends Enum {
    readonly isMaxOnInitWeight: boolean;
    readonly asMaxOnInitWeight: Option<SpWeightsWeightV2Weight>;
    readonly isMaxOnIdleWeight: boolean;
    readonly asMaxOnIdleWeight: Option<SpWeightsWeightV2Weight>;
    readonly type: 'MaxOnInitWeight' | 'MaxOnIdleWeight';
  }

  /** @name AssetHubKusamaRuntimeRuntimeHoldReason (539) */
  interface AssetHubKusamaRuntimeRuntimeHoldReason extends Enum {
    readonly isPreimage: boolean;
    readonly asPreimage: PalletPreimageHoldReason;
    readonly isSession: boolean;
    readonly asSession: PalletSessionHoldReason;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PalletXcmHoldReason;
    readonly isNftFractionalization: boolean;
    readonly asNftFractionalization: PalletNftFractionalizationHoldReason;
    readonly isRecovery: boolean;
    readonly asRecovery: PalletRecoveryHoldReason;
    readonly isRevive: boolean;
    readonly asRevive: PalletReviveHoldReason;
    readonly isStateTrieMigration: boolean;
    readonly asStateTrieMigration: PalletStateTrieMigrationHoldReason;
    readonly isDelegatedStaking: boolean;
    readonly asDelegatedStaking: PalletDelegatedStakingHoldReason;
    readonly isStakingRcClient: boolean;
    readonly asStakingRcClient: PalletStakingAsyncRcClientHoldReason;
    readonly isMultiBlockElectionSigned: boolean;
    readonly asMultiBlockElectionSigned: PalletElectionProviderMultiBlockSignedPalletHoldReason;
    readonly isStaking: boolean;
    readonly asStaking: PalletStakingAsyncPalletHoldReason;
    readonly isMultiAssetBounties: boolean;
    readonly asMultiAssetBounties: PalletMultiAssetBountiesHoldReason;
    readonly type: 'Preimage' | 'Session' | 'PolkadotXcm' | 'NftFractionalization' | 'Recovery' | 'Revive' | 'StateTrieMigration' | 'DelegatedStaking' | 'StakingRcClient' | 'MultiBlockElectionSigned' | 'Staking' | 'MultiAssetBounties';
  }

  /** @name PalletRecoveryHoldReason (544) */
  interface PalletRecoveryHoldReason extends Enum {
    readonly isFriendGroupsStorage: boolean;
    readonly isAttemptStorage: boolean;
    readonly isInheritorStorage: boolean;
    readonly isSecurityDeposit: boolean;
    readonly type: 'FriendGroupsStorage' | 'AttemptStorage' | 'InheritorStorage' | 'SecurityDeposit';
  }

  /** @name AssetHubKusamaRuntimeRuntimeFreezeReason (704) */
  interface AssetHubKusamaRuntimeRuntimeFreezeReason extends Enum {
    readonly isRevive: boolean;
    readonly asRevive: PalletReviveFreezeReason;
    readonly isNominationPools: boolean;
    readonly asNominationPools: PalletNominationPoolsFreezeReason;
    readonly type: 'Revive' | 'NominationPools';
  }

  /** @name PalletRemoteProxyError (798) */
  interface PalletRemoteProxyError extends Enum {
    readonly isCouldNotConvertLocalToRemoteAccountId: boolean;
    readonly isUnknownProofAnchorBlock: boolean;
    readonly isInvalidProof: boolean;
    readonly isProxyDefinitionDecodingFailed: boolean;
    readonly isUnannounced: boolean;
    readonly isDidNotFindMatchingProxyDefinition: boolean;
    readonly isProxyProofNotRegistered: boolean;
    readonly type: 'CouldNotConvertLocalToRemoteAccountId' | 'UnknownProofAnchorBlock' | 'InvalidProof' | 'ProxyDefinitionDecodingFailed' | 'Unannounced' | 'DidNotFindMatchingProxyDefinition' | 'ProxyProofNotRegistered';
  }

  /** @name PalletRecoveryAttempt (864) */
  interface PalletRecoveryAttempt extends Struct {
    readonly friendGroupIndex: u32;
    readonly initiator: AccountId32;
    readonly initBlock: u32;
    readonly lastApprovalBlock: u32;
    readonly approvals: PalletRecoveryBitfield;
  }

  /** @name PalletRecoveryBitfield (865) */
  interface PalletRecoveryBitfield extends Vec<u16> {}

  /** @name FrameSupportStorageFootprint (868) */
  interface FrameSupportStorageFootprint extends Struct {
    readonly count: u64;
    readonly size_: u64;
  }

  /** @name PalletRecoveryIdentifiedConsideration (872) */
  interface PalletRecoveryIdentifiedConsideration extends Struct {
    readonly depositor: AccountId32;
    readonly ticket: Option<u128>;
  }

  /** @name AssetHubKusamaRuntimeRuntimeError (1209) */
  interface AssetHubKusamaRuntimeRuntimeError extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSystemError;
    readonly isParachainSystem: boolean;
    readonly asParachainSystem: CumulusPalletParachainSystemError;
    readonly isMultiBlockMigrations: boolean;
    readonly asMultiBlockMigrations: PalletMigrationsError;
    readonly isPreimage: boolean;
    readonly asPreimage: PalletPreimageError;
    readonly isScheduler: boolean;
    readonly asScheduler: PalletSchedulerError;
    readonly isBalances: boolean;
    readonly asBalances: PalletBalancesError;
    readonly isVesting: boolean;
    readonly asVesting: PalletVestingError;
    readonly isClaims: boolean;
    readonly asClaims: PolkadotRuntimeCommonClaimsPalletError;
    readonly isCollatorSelection: boolean;
    readonly asCollatorSelection: PalletCollatorSelectionError;
    readonly isSession: boolean;
    readonly asSession: PalletSessionError;
    readonly isXcmpQueue: boolean;
    readonly asXcmpQueue: CumulusPalletXcmpQueueError;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PalletXcmError;
    readonly isMessageQueue: boolean;
    readonly asMessageQueue: PalletMessageQueueError;
    readonly isUtility: boolean;
    readonly asUtility: PalletUtilityError;
    readonly isMultisig: boolean;
    readonly asMultisig: PalletMultisigError;
    readonly isProxy: boolean;
    readonly asProxy: PalletProxyError;
    readonly isRemoteProxyRelayChain: boolean;
    readonly asRemoteProxyRelayChain: PalletRemoteProxyError;
    readonly isIndices: boolean;
    readonly asIndices: PalletIndicesError;
    readonly isAssets: boolean;
    readonly asAssets: PalletAssetsError;
    readonly isUniques: boolean;
    readonly asUniques: PalletUniquesError;
    readonly isNfts: boolean;
    readonly asNfts: PalletNftsError;
    readonly isForeignAssets: boolean;
    readonly asForeignAssets: PalletAssetsError;
    readonly isNftFractionalization: boolean;
    readonly asNftFractionalization: PalletNftFractionalizationError;
    readonly isPoolAssets: boolean;
    readonly asPoolAssets: PalletAssetsError;
    readonly isAssetConversion: boolean;
    readonly asAssetConversion: PalletAssetConversionError;
    readonly isRecovery: boolean;
    readonly asRecovery: PalletRecoveryError;
    readonly isSociety: boolean;
    readonly asSociety: PalletSocietyError;
    readonly isRevive: boolean;
    readonly asRevive: PalletReviveError;
    readonly isAssetsPrecompilesPermit: boolean;
    readonly asAssetsPrecompilesPermit: PalletAssetsPrecompilesPermitPalletError;
    readonly isStateTrieMigration: boolean;
    readonly asStateTrieMigration: PalletStateTrieMigrationError;
    readonly isNominationPools: boolean;
    readonly asNominationPools: PalletNominationPoolsError;
    readonly isVoterList: boolean;
    readonly asVoterList: PalletBagsListError;
    readonly isDelegatedStaking: boolean;
    readonly asDelegatedStaking: PalletDelegatedStakingError;
    readonly isStakingRcClient: boolean;
    readonly asStakingRcClient: PalletStakingAsyncRcClientError;
    readonly isMultiBlockElection: boolean;
    readonly asMultiBlockElection: PalletElectionProviderMultiBlockError;
    readonly isMultiBlockElectionSigned: boolean;
    readonly asMultiBlockElectionSigned: PalletElectionProviderMultiBlockSignedPalletError;
    readonly isStaking: boolean;
    readonly asStaking: PalletStakingAsyncPalletError;
    readonly isTreasury: boolean;
    readonly asTreasury: PalletTreasuryError;
    readonly isConvictionVoting: boolean;
    readonly asConvictionVoting: PalletConvictionVotingError;
    readonly isReferenda: boolean;
    readonly asReferenda: PalletReferendaError;
    readonly isWhitelist: boolean;
    readonly asWhitelist: PalletWhitelistError;
    readonly isBounties: boolean;
    readonly asBounties: PalletBountiesError;
    readonly isChildBounties: boolean;
    readonly asChildBounties: PalletChildBountiesError;
    readonly isAssetRate: boolean;
    readonly asAssetRate: PalletAssetRateError;
    readonly isMultiAssetBounties: boolean;
    readonly asMultiAssetBounties: PalletMultiAssetBountiesError;
    readonly isAhOps: boolean;
    readonly asAhOps: PalletAhOpsError;
    readonly type: 'System' | 'ParachainSystem' | 'MultiBlockMigrations' | 'Preimage' | 'Scheduler' | 'Balances' | 'Vesting' | 'Claims' | 'CollatorSelection' | 'Session' | 'XcmpQueue' | 'PolkadotXcm' | 'MessageQueue' | 'Utility' | 'Multisig' | 'Proxy' | 'RemoteProxyRelayChain' | 'Indices' | 'Assets' | 'Uniques' | 'Nfts' | 'ForeignAssets' | 'NftFractionalization' | 'PoolAssets' | 'AssetConversion' | 'Recovery' | 'Society' | 'Revive' | 'AssetsPrecompilesPermit' | 'StateTrieMigration' | 'NominationPools' | 'VoterList' | 'DelegatedStaking' | 'StakingRcClient' | 'MultiBlockElection' | 'MultiBlockElectionSigned' | 'Staking' | 'Treasury' | 'ConvictionVoting' | 'Referenda' | 'Whitelist' | 'Bounties' | 'ChildBounties' | 'AssetRate' | 'MultiAssetBounties' | 'AhOps';
  }

} // declare module

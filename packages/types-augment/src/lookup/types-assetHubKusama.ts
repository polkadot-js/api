// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { BTreeMap, Bytes, Compact, Enum, Null, Option, Struct, U256, U8aFixed, Vec, bool, u128, u16, u32, u64 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H160, H256, MultiAddress, PerU16, Permill, Perquintill } from '@polkadot/types/interfaces/runtime';

declare module '@polkadot/types/lookup' {
  /** @name AssetHubKusamaRuntimeRuntimeTask (32) */
  type AssetHubKusamaRuntimeRuntimeTask = Null;

  /** @name AssetHubKusamaRuntimeRuntimeParametersKey (43) */
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

  /** @name AssetHubKusamaRuntimeDynamicParamsIssuanceParametersKey (44) */
  interface AssetHubKusamaRuntimeDynamicParamsIssuanceParametersKey extends Enum {
    readonly isMinInflation: boolean;
    readonly isMaxInflation: boolean;
    readonly isIdealStake: boolean;
    readonly isFalloff: boolean;
    readonly type: 'MinInflation' | 'MaxInflation' | 'IdealStake' | 'Falloff';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsIssuanceMinInflation (45) */
  type AssetHubKusamaRuntimeDynamicParamsIssuanceMinInflation = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsIssuanceMaxInflation (46) */
  type AssetHubKusamaRuntimeDynamicParamsIssuanceMaxInflation = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsIssuanceIdealStake (47) */
  type AssetHubKusamaRuntimeDynamicParamsIssuanceIdealStake = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsIssuanceFalloff (48) */
  type AssetHubKusamaRuntimeDynamicParamsIssuanceFalloff = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsTreasuryParametersKey (49) */
  interface AssetHubKusamaRuntimeDynamicParamsTreasuryParametersKey extends Enum {
    readonly isBurnPortion: boolean;
    readonly isBurnDestination: boolean;
    readonly type: 'BurnPortion' | 'BurnDestination';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsTreasuryBurnPortion (50) */
  type AssetHubKusamaRuntimeDynamicParamsTreasuryBurnPortion = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsTreasuryBurnDestination (51) */
  type AssetHubKusamaRuntimeDynamicParamsTreasuryBurnDestination = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionParametersKey (52) */
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

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionSignedPhase (53) */
  type AssetHubKusamaRuntimeDynamicParamsStakingElectionSignedPhase = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxSignedSubmissions (54) */
  type AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxSignedSubmissions = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionUnsignedPhase (55) */
  type AssetHubKusamaRuntimeDynamicParamsStakingElectionUnsignedPhase = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionMinerPages (56) */
  type AssetHubKusamaRuntimeDynamicParamsStakingElectionMinerPages = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxElectingVoters (57) */
  type AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxElectingVoters = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionTargetSnapshotPerBlock (58) */
  type AssetHubKusamaRuntimeDynamicParamsStakingElectionTargetSnapshotPerBlock = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxEraDuration (59) */
  type AssetHubKusamaRuntimeDynamicParamsStakingElectionMaxEraDuration = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsSchedulerParametersKey (60) */
  interface AssetHubKusamaRuntimeDynamicParamsSchedulerParametersKey extends Enum {
    readonly isMaxScheduledPerBlock: boolean;
    readonly isMaximumWeight: boolean;
    readonly type: 'MaxScheduledPerBlock' | 'MaximumWeight';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsSchedulerMaxScheduledPerBlock (61) */
  type AssetHubKusamaRuntimeDynamicParamsSchedulerMaxScheduledPerBlock = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsSchedulerMaximumWeight (62) */
  type AssetHubKusamaRuntimeDynamicParamsSchedulerMaximumWeight = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsMessageQueueParametersKey (63) */
  interface AssetHubKusamaRuntimeDynamicParamsMessageQueueParametersKey extends Enum {
    readonly isMaxOnInitWeight: boolean;
    readonly isMaxOnIdleWeight: boolean;
    readonly type: 'MaxOnInitWeight' | 'MaxOnIdleWeight';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsMessageQueueMaxOnInitWeight (64) */
  type AssetHubKusamaRuntimeDynamicParamsMessageQueueMaxOnInitWeight = Null;

  /** @name AssetHubKusamaRuntimeDynamicParamsMessageQueueMaxOnIdleWeight (65) */
  type AssetHubKusamaRuntimeDynamicParamsMessageQueueMaxOnIdleWeight = Null;

  /** @name AssetHubKusamaRuntimeRuntimeParametersValue (67) */
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

  /** @name AssetHubKusamaRuntimeDynamicParamsIssuanceParametersValue (68) */
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

  /** @name AssetHubKusamaRuntimeDynamicParamsTreasuryParametersValue (70) */
  interface AssetHubKusamaRuntimeDynamicParamsTreasuryParametersValue extends Enum {
    readonly isBurnPortion: boolean;
    readonly asBurnPortion: Permill;
    readonly isBurnDestination: boolean;
    readonly asBurnDestination: AssetHubKusamaRuntimeTreasuryBurnDestinationAccount;
    readonly type: 'BurnPortion' | 'BurnDestination';
  }

  /** @name AssetHubKusamaRuntimeTreasuryBurnDestinationAccount (72) */
  interface AssetHubKusamaRuntimeTreasuryBurnDestinationAccount extends Option<AccountId32> {}

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionParametersValue (74) */
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

  /** @name AssetHubKusamaRuntimeDynamicParamsSchedulerParametersValue (75) */
  interface AssetHubKusamaRuntimeDynamicParamsSchedulerParametersValue extends Enum {
    readonly isMaxScheduledPerBlock: boolean;
    readonly asMaxScheduledPerBlock: u32;
    readonly isMaximumWeight: boolean;
    readonly asMaximumWeight: SpWeightsWeightV2Weight;
    readonly type: 'MaxScheduledPerBlock' | 'MaximumWeight';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsMessageQueueParametersValue (76) */
  interface AssetHubKusamaRuntimeDynamicParamsMessageQueueParametersValue extends Enum {
    readonly isMaxOnInitWeight: boolean;
    readonly asMaxOnInitWeight: Option<SpWeightsWeightV2Weight>;
    readonly isMaxOnIdleWeight: boolean;
    readonly asMaxOnIdleWeight: Option<SpWeightsWeightV2Weight>;
    readonly type: 'MaxOnInitWeight' | 'MaxOnIdleWeight';
  }

  /** @name AssetHubKusamaRuntimeProxyType (193) */
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
    readonly type: 'Any' | 'NonTransfer' | 'CancelProxy' | 'Assets' | 'AssetOwner' | 'AssetManager' | 'Collator' | 'Governance' | 'Staking' | 'NominationPools' | 'Auction' | 'ParaRegistration' | 'Society' | 'Spokesperson';
  }

  /** @name AssetHubKusamaRuntimeRuntime (220) */
  type AssetHubKusamaRuntimeRuntime = Null;

  /** @name AssetHubKusamaRuntimeRuntimeParameters (308) */
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

  /** @name AssetHubKusamaRuntimeDynamicParamsIssuanceParameters (309) */
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

  /** @name AssetHubKusamaRuntimeDynamicParamsTreasuryParameters (311) */
  interface AssetHubKusamaRuntimeDynamicParamsTreasuryParameters extends Enum {
    readonly isBurnPortion: boolean;
    readonly asBurnPortion: ITuple<[AssetHubKusamaRuntimeDynamicParamsTreasuryBurnPortion, Option<Permill>]>;
    readonly isBurnDestination: boolean;
    readonly asBurnDestination: ITuple<[AssetHubKusamaRuntimeDynamicParamsTreasuryBurnDestination, Option<AssetHubKusamaRuntimeTreasuryBurnDestinationAccount>]>;
    readonly type: 'BurnPortion' | 'BurnDestination';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsStakingElectionParameters (314) */
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

  /** @name AssetHubKusamaRuntimeDynamicParamsSchedulerParameters (315) */
  interface AssetHubKusamaRuntimeDynamicParamsSchedulerParameters extends Enum {
    readonly isMaxScheduledPerBlock: boolean;
    readonly asMaxScheduledPerBlock: ITuple<[AssetHubKusamaRuntimeDynamicParamsSchedulerMaxScheduledPerBlock, Option<u32>]>;
    readonly isMaximumWeight: boolean;
    readonly asMaximumWeight: ITuple<[AssetHubKusamaRuntimeDynamicParamsSchedulerMaximumWeight, Option<SpWeightsWeightV2Weight>]>;
    readonly type: 'MaxScheduledPerBlock' | 'MaximumWeight';
  }

  /** @name AssetHubKusamaRuntimeDynamicParamsMessageQueueParameters (316) */
  interface AssetHubKusamaRuntimeDynamicParamsMessageQueueParameters extends Enum {
    readonly isMaxOnInitWeight: boolean;
    readonly asMaxOnInitWeight: ITuple<[AssetHubKusamaRuntimeDynamicParamsMessageQueueMaxOnInitWeight, Option<Option<SpWeightsWeightV2Weight>>]>;
    readonly isMaxOnIdleWeight: boolean;
    readonly asMaxOnIdleWeight: ITuple<[AssetHubKusamaRuntimeDynamicParamsMessageQueueMaxOnIdleWeight, Option<Option<SpWeightsWeightV2Weight>>]>;
    readonly type: 'MaxOnInitWeight' | 'MaxOnIdleWeight';
  }

  /** @name AssetHubKusamaRuntimeSessionKeys (333) */
  interface AssetHubKusamaRuntimeSessionKeys extends Struct {
    readonly aura: SpConsensusAuraSr25519AppSr25519Public;
  }

  /** @name SpConsensusAuraSr25519AppSr25519Public (334) */
  interface SpConsensusAuraSr25519AppSr25519Public extends U8aFixed {}

  /** @name AssetHubKusamaRuntimeOriginCaller (385) */
  interface AssetHubKusamaRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PalletXcmOrigin;
    readonly isCumulusXcm: boolean;
    readonly asCumulusXcm: CumulusPalletXcmOrigin;
    readonly isOrigins: boolean;
    readonly asOrigins: AssetHubKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin;
    readonly type: 'System' | 'PolkadotXcm' | 'CumulusXcm' | 'Origins';
  }

  /** @name AssetHubKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin (389) */
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

  /** @name PalletRemoteProxyCall (394) */
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

  /** @name PalletRemoteProxyRemoteProxyProof (395) */
  interface PalletRemoteProxyRemoteProxyProof extends Enum {
    readonly isRelayChain: boolean;
    readonly asRelayChain: {
      readonly proof: Vec<Bytes>;
      readonly block: u32;
    } & Struct;
    readonly type: 'RelayChain';
  }

  /** @name AssetHubKusamaRuntimeStakingNposCompactSolution24 (466) */
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

  /** @name PalletProxyProxyDefinitionKusamaRuntimeConstantsProxyProxyType (598) */
  interface PalletProxyProxyDefinitionKusamaRuntimeConstantsProxyProxyType extends Struct {
    readonly delegate: AccountId32;
    readonly proxyType: KusamaRuntimeConstantsProxyProxyType;
    readonly delay: u32;
  }

  /** @name AssetHubKusamaRuntimeAhMigrationRcPalletsOrigin (650) */
  interface AssetHubKusamaRuntimeAhMigrationRcPalletsOrigin extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isOrigins: boolean;
    readonly asOrigins: AssetHubKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin;
    readonly type: 'System' | 'Origins';
  }

  /** @name PalletRcMigratorRecoveryPortableRecoveryMessage (746) */
  interface PalletRcMigratorRecoveryPortableRecoveryMessage extends Enum {
    readonly isRecoverable: boolean;
    readonly asRecoverable: ITuple<[AccountId32, PalletRcMigratorRecoveryPortableRecoveryConfig]>;
    readonly isActiveRecoveries: boolean;
    readonly asActiveRecoveries: ITuple<[AccountId32, AccountId32, PalletRcMigratorRecoveryPortableActiveRecovery]>;
    readonly isProxy: boolean;
    readonly asProxy: ITuple<[AccountId32, AccountId32]>;
    readonly type: 'Recoverable' | 'ActiveRecoveries' | 'Proxy';
  }

  /** @name PalletRcMigratorRecoveryPortableRecoveryConfig (748) */
  interface PalletRcMigratorRecoveryPortableRecoveryConfig extends Struct {
    readonly delayPeriod: u32;
    readonly deposit: u128;
    readonly friends: PalletRcMigratorRecoveryPortableRecoveryFriends;
    readonly threshold: u16;
  }

  /** @name PalletRcMigratorRecoveryPortableRecoveryFriends (749) */
  interface PalletRcMigratorRecoveryPortableRecoveryFriends extends Struct {
    readonly friends: Vec<AccountId32>;
  }

  /** @name PalletRcMigratorRecoveryPortableActiveRecovery (752) */
  interface PalletRcMigratorRecoveryPortableActiveRecovery extends Struct {
    readonly created: u32;
    readonly deposit: u128;
    readonly friends: PalletRcMigratorRecoveryPortableRecoveryFriends;
  }

  /** @name PalletRcMigratorSocietyPortableSocietyMessage (755) */
  interface PalletRcMigratorSocietyPortableSocietyMessage extends Enum {
    readonly isValues: boolean;
    readonly asValues: PalletRcMigratorSocietySocietyValues;
    readonly isMember: boolean;
    readonly asMember: ITuple<[AccountId32, PalletRcMigratorSocietyPortableMemberRecord]>;
    readonly isPayout: boolean;
    readonly asPayout: ITuple<[AccountId32, PalletRcMigratorSocietyPortablePayoutRecord]>;
    readonly isMemberByIndex: boolean;
    readonly asMemberByIndex: ITuple<[u32, AccountId32]>;
    readonly isSuspendedMembers: boolean;
    readonly asSuspendedMembers: ITuple<[AccountId32, PalletRcMigratorSocietyPortableMemberRecord]>;
    readonly isCandidates: boolean;
    readonly asCandidates: ITuple<[AccountId32, PalletRcMigratorSocietyPortableCandidacy]>;
    readonly isVotes: boolean;
    readonly asVotes: ITuple<[AccountId32, AccountId32, PalletRcMigratorSocietyPortableVote]>;
    readonly isVoteClearCursor: boolean;
    readonly asVoteClearCursor: ITuple<[AccountId32, Bytes]>;
    readonly isDefenderVotes: boolean;
    readonly asDefenderVotes: ITuple<[u32, AccountId32, PalletRcMigratorSocietyPortableVote]>;
    readonly type: 'Values' | 'Member' | 'Payout' | 'MemberByIndex' | 'SuspendedMembers' | 'Candidates' | 'Votes' | 'VoteClearCursor' | 'DefenderVotes';
  }

  /** @name PalletRcMigratorSocietySocietyValues (756) */
  interface PalletRcMigratorSocietySocietyValues extends Struct {
    readonly parameters: Option<PalletRcMigratorSocietyPortableGroupParams>;
    readonly pot: Option<u128>;
    readonly founder: Option<AccountId32>;
    readonly head: Option<AccountId32>;
    readonly rules: Option<H256>;
    readonly memberCount: Option<u32>;
    readonly roundCount: Option<u32>;
    readonly bids: Option<Vec<PalletRcMigratorSocietyPortableBid>>;
    readonly sceptic: Option<AccountId32>;
    readonly nextHead: Option<PalletRcMigratorSocietyPortableIntakeRecord>;
    readonly challengeRoundCount: Option<u32>;
    readonly defending: Option<ITuple<[AccountId32, AccountId32, PalletRcMigratorSocietyPortableTally]>>;
    readonly nextIntakeAt: Option<u32>;
    readonly nextChallengeAt: Option<u32>;
  }

  /** @name PalletRcMigratorSocietyPortableGroupParams (758) */
  interface PalletRcMigratorSocietyPortableGroupParams extends Struct {
    readonly maxMembers: u32;
    readonly maxIntake: u32;
    readonly maxStrikes: u32;
    readonly candidateDeposit: u128;
  }

  /** @name PalletRcMigratorSocietyPortableBid (761) */
  interface PalletRcMigratorSocietyPortableBid extends Struct {
    readonly who: AccountId32;
    readonly kind: PalletRcMigratorSocietyPortableBidKind;
    readonly value: u128;
  }

  /** @name PalletRcMigratorSocietyPortableBidKind (762) */
  interface PalletRcMigratorSocietyPortableBidKind extends Enum {
    readonly isDeposit: boolean;
    readonly asDeposit: u128;
    readonly isVouch: boolean;
    readonly asVouch: ITuple<[AccountId32, u128]>;
    readonly type: 'Deposit' | 'Vouch';
  }

  /** @name PalletRcMigratorSocietyPortableIntakeRecord (764) */
  interface PalletRcMigratorSocietyPortableIntakeRecord extends Struct {
    readonly who: AccountId32;
    readonly bid: u128;
    readonly round: u32;
  }

  /** @name PalletRcMigratorSocietyPortableTally (767) */
  interface PalletRcMigratorSocietyPortableTally extends Struct {
    readonly approvals: u32;
    readonly rejections: u32;
  }

  /** @name PalletRcMigratorSocietyPortableMemberRecord (768) */
  interface PalletRcMigratorSocietyPortableMemberRecord extends Struct {
    readonly rank: u32;
    readonly strikes: u32;
    readonly vouching: Option<PalletRcMigratorSocietyPortableVouchingStatus>;
    readonly index: u32;
  }

  /** @name PalletRcMigratorSocietyPortableVouchingStatus (770) */
  interface PalletRcMigratorSocietyPortableVouchingStatus extends Enum {
    readonly isVouching: boolean;
    readonly isBanned: boolean;
    readonly type: 'Vouching' | 'Banned';
  }

  /** @name PalletRcMigratorSocietyPortablePayoutRecord (771) */
  interface PalletRcMigratorSocietyPortablePayoutRecord extends Struct {
    readonly paid: u128;
    readonly payouts: Vec<ITuple<[u32, u128]>>;
  }

  /** @name PalletRcMigratorSocietyPortableCandidacy (772) */
  interface PalletRcMigratorSocietyPortableCandidacy extends Struct {
    readonly round: u32;
    readonly kind: PalletRcMigratorSocietyPortableBidKind;
    readonly bid: u128;
    readonly tally: PalletRcMigratorSocietyPortableTally;
    readonly skepticStruck: bool;
  }

  /** @name PalletRcMigratorSocietyPortableVote (773) */
  interface PalletRcMigratorSocietyPortableVote extends Struct {
    readonly approve: bool;
    readonly weight: u32;
  }

  /** @name AssetHubKusamaRuntimeRuntimeHoldReason (853) */
  interface AssetHubKusamaRuntimeRuntimeHoldReason extends Enum {
    readonly isPreimage: boolean;
    readonly asPreimage: PalletPreimageHoldReason;
    readonly isSession: boolean;
    readonly asSession: PalletSessionHoldReason;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PalletXcmHoldReason;
    readonly isNftFractionalization: boolean;
    readonly asNftFractionalization: PalletNftFractionalizationHoldReason;
    readonly isRevive: boolean;
    readonly asRevive: PalletReviveHoldReason;
    readonly isStateTrieMigration: boolean;
    readonly asStateTrieMigration: PalletStateTrieMigrationHoldReason;
    readonly isDelegatedStaking: boolean;
    readonly asDelegatedStaking: PalletDelegatedStakingHoldReason;
    readonly isMultiBlockElectionSigned: boolean;
    readonly asMultiBlockElectionSigned: PalletElectionProviderMultiBlockSignedPalletHoldReason;
    readonly isStaking: boolean;
    readonly asStaking: PalletStakingAsyncPalletHoldReason;
    readonly type: 'Preimage' | 'Session' | 'PolkadotXcm' | 'NftFractionalization' | 'Revive' | 'StateTrieMigration' | 'DelegatedStaking' | 'MultiBlockElectionSigned' | 'Staking';
  }

  /** @name AssetHubKusamaRuntimeRuntimeFreezeReason (861) */
  interface AssetHubKusamaRuntimeRuntimeFreezeReason extends Enum {
    readonly isNominationPools: boolean;
    readonly asNominationPools: PalletNominationPoolsFreezeReason;
    readonly type: 'NominationPools';
  }

  /** @name PalletProxyProxyDefinitionAssetHubKusamaRuntimeProxyType (939) */
  interface PalletProxyProxyDefinitionAssetHubKusamaRuntimeProxyType extends Struct {
    readonly delegate: AccountId32;
    readonly proxyType: AssetHubKusamaRuntimeProxyType;
    readonly delay: u32;
  }

  /** @name PalletRemoteProxyError (947) */
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

  /** @name PalletReviveVmCodeInfo (1023) */
  interface PalletReviveVmCodeInfo extends Struct {
    readonly owner: AccountId32;
    readonly deposit: Compact<u128>;
    readonly refcount: Compact<u64>;
    readonly codeLen: u32;
    readonly behaviourVersion: u32;
  }

  /** @name PalletReviveStorageAccountInfo (1024) */
  interface PalletReviveStorageAccountInfo extends Struct {
    readonly accountType: PalletReviveStorageAccountType;
    readonly dust: u32;
  }

  /** @name PalletReviveStorageAccountType (1025) */
  interface PalletReviveStorageAccountType extends Enum {
    readonly isContract: boolean;
    readonly asContract: PalletReviveStorageContractInfo;
    readonly isEoa: boolean;
    readonly type: 'Contract' | 'Eoa';
  }

  /** @name PalletReviveEvmApiDebugRpcTypesPrestateTracerConfig (1233) */
  interface PalletReviveEvmApiDebugRpcTypesPrestateTracerConfig extends Struct {
    readonly diffMode: bool;
    readonly disableStorage: bool;
    readonly disableCode: bool;
  }

  /** @name PalletReviveEvmApiDebugRpcTypesPrestateTrace (1242) */
  interface PalletReviveEvmApiDebugRpcTypesPrestateTrace extends Enum {
    readonly isPrestate: boolean;
    readonly asPrestate: BTreeMap<H160, PalletReviveEvmApiDebugRpcTypesPrestateTraceInfo>;
    readonly isDiffMode: boolean;
    readonly asDiffMode: {
      readonly pre: BTreeMap<H160, PalletReviveEvmApiDebugRpcTypesPrestateTraceInfo>;
      readonly post: BTreeMap<H160, PalletReviveEvmApiDebugRpcTypesPrestateTraceInfo>;
    } & Struct;
    readonly type: 'Prestate' | 'DiffMode';
  }

  /** @name PalletReviveEvmApiDebugRpcTypesPrestateTraceInfo (1244) */
  interface PalletReviveEvmApiDebugRpcTypesPrestateTraceInfo extends Struct {
    readonly balance: Option<U256>;
    readonly nonce: Option<u32>;
    readonly code: Option<Bytes>;
    readonly storage: BTreeMap<Bytes, Option<Bytes>>;
  }

  /** @name AssetHubKusamaRuntimeRuntimeError (1252) */
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
    readonly isStateTrieMigration: boolean;
    readonly asStateTrieMigration: PalletStateTrieMigrationError;
    readonly isNominationPools: boolean;
    readonly asNominationPools: PalletNominationPoolsError;
    readonly isVoterList: boolean;
    readonly asVoterList: PalletBagsListError;
    readonly isDelegatedStaking: boolean;
    readonly asDelegatedStaking: PalletDelegatedStakingError;
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
    readonly isAhOps: boolean;
    readonly asAhOps: PalletAhOpsError;
    readonly isAhMigrator: boolean;
    readonly asAhMigrator: PalletAhMigratorError;
    readonly type: 'System' | 'ParachainSystem' | 'MultiBlockMigrations' | 'Preimage' | 'Scheduler' | 'Balances' | 'Vesting' | 'Claims' | 'CollatorSelection' | 'Session' | 'XcmpQueue' | 'PolkadotXcm' | 'MessageQueue' | 'Utility' | 'Multisig' | 'Proxy' | 'RemoteProxyRelayChain' | 'Indices' | 'Assets' | 'Uniques' | 'Nfts' | 'ForeignAssets' | 'NftFractionalization' | 'PoolAssets' | 'AssetConversion' | 'Recovery' | 'Society' | 'Revive' | 'StateTrieMigration' | 'NominationPools' | 'VoterList' | 'DelegatedStaking' | 'MultiBlockElection' | 'MultiBlockElectionSigned' | 'Staking' | 'Treasury' | 'ConvictionVoting' | 'Referenda' | 'Whitelist' | 'Bounties' | 'ChildBounties' | 'AssetRate' | 'AhOps' | 'AhMigrator';
  }

} // declare module

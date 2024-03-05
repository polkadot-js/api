// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Data } from '@polkadot/types';
import type { BTreeMap, BitVec, Bytes, Compact, Enum, Null, Option, Result, Set, Struct, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { EthereumAddress } from '@polkadot/types/interfaces/eth';
import type { AccountId32, H256, PerU16, Perbill } from '@polkadot/types/interfaces/runtime';

declare module '@polkadot/types/lookup' {
  /** @name PalletStakingExposure (59) */
  interface PalletStakingExposure extends Struct {
    readonly total: Compact<u128>;
    readonly own: Compact<u128>;
    readonly others: Vec<PalletStakingIndividualExposure>;
  }

  /** @name PalletStakingIndividualExposure (62) */
  interface PalletStakingIndividualExposure extends Struct {
    readonly who: AccountId32;
    readonly value: Compact<u128>;
  }

  /** @name PolkadotRuntimeSessionKeys (103) */
  interface PolkadotRuntimeSessionKeys extends Struct {
    readonly grandpa: SpConsensusGrandpaAppPublic;
    readonly babe: SpConsensusBabeAppPublic;
    readonly imOnline: PalletImOnlineSr25519AppSr25519Public;
    readonly paraValidator: PolkadotPrimitivesV5ValidatorAppPublic;
    readonly paraAssignment: PolkadotPrimitivesV5AssignmentAppPublic;
    readonly authorityDiscovery: SpAuthorityDiscoveryAppPublic;
  }

  /** @name PolkadotPrimitivesV5ValidatorAppPublic (104) */
  interface PolkadotPrimitivesV5ValidatorAppPublic extends SpCoreSr25519Public {}

  /** @name PolkadotPrimitivesV5AssignmentAppPublic (105) */
  interface PolkadotPrimitivesV5AssignmentAppPublic extends SpCoreSr25519Public {}

  /** @name PolkadotRuntimeOriginCaller (130) */
  interface PolkadotRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isVoid: boolean;
    readonly isOrigins: boolean;
    readonly asOrigins: PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin;
    readonly isParachainsOrigin: boolean;
    readonly asParachainsOrigin: PolkadotRuntimeParachainsOriginPalletOrigin;
    readonly isXcmPallet: boolean;
    readonly asXcmPallet: PalletXcmOrigin;
    readonly type: 'System' | 'Void' | 'Origins' | 'ParachainsOrigin' | 'XcmPallet';
  }

  /** @name PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin (132) */
  interface PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin extends Enum {
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
    readonly type: 'StakingAdmin' | 'Treasurer' | 'FellowshipAdmin' | 'GeneralAdmin' | 'AuctionAdmin' | 'LeaseAdmin' | 'ReferendumCanceller' | 'ReferendumKiller' | 'SmallTipper' | 'BigTipper' | 'SmallSpender' | 'MediumSpender' | 'BigSpender' | 'WhitelistedCaller';
  }

  /** @name PolkadotRuntimeParachainsOriginPalletOrigin (133) */
  interface PolkadotRuntimeParachainsOriginPalletOrigin extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: u32;
    readonly type: 'Parachain';
  }

  /** @name PalletXcmOrigin (135) */
  interface PalletXcmOrigin extends Enum {
    readonly isXcm: boolean;
    readonly asXcm: XcmV3MultiLocation;
    readonly isResponse: boolean;
    readonly asResponse: XcmV3MultiLocation;
    readonly type: 'Xcm' | 'Response';
  }

  /** @name XcmV3MultiLocation (136) */
  interface XcmV3MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: XcmV3Junctions;
  }

  /** @name XcmV3Junctions (137) */
  interface XcmV3Junctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: XcmV3Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[XcmV3Junction, XcmV3Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name XcmV3Junction (138) */
  interface XcmV3Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: Option<XcmV3JunctionNetworkId>;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: Option<XcmV3JunctionNetworkId>;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: Option<XcmV3JunctionNetworkId>;
      readonly key: U8aFixed;
    } & Struct;
    readonly isPalletInstance: boolean;
    readonly asPalletInstance: u8;
    readonly isGeneralIndex: boolean;
    readonly asGeneralIndex: Compact<u128>;
    readonly isGeneralKey: boolean;
    readonly asGeneralKey: {
      readonly length: u8;
      readonly data: U8aFixed;
    } & Struct;
    readonly isOnlyChild: boolean;
    readonly isPlurality: boolean;
    readonly asPlurality: {
      readonly id: XcmV3JunctionBodyId;
      readonly part: XcmV3JunctionBodyPart;
    } & Struct;
    readonly isGlobalConsensus: boolean;
    readonly asGlobalConsensus: XcmV3JunctionNetworkId;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality' | 'GlobalConsensus';
  }

  /** @name XcmV3JunctionNetworkId (140) */
  interface XcmV3JunctionNetworkId extends Enum {
    readonly isByGenesis: boolean;
    readonly asByGenesis: U8aFixed;
    readonly isByFork: boolean;
    readonly asByFork: {
      readonly blockNumber: u64;
      readonly blockHash: U8aFixed;
    } & Struct;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly isWestend: boolean;
    readonly isRococo: boolean;
    readonly isWococo: boolean;
    readonly isEthereum: boolean;
    readonly asEthereum: {
      readonly chainId: Compact<u64>;
    } & Struct;
    readonly isBitcoinCore: boolean;
    readonly isBitcoinCash: boolean;
    readonly type: 'ByGenesis' | 'ByFork' | 'Polkadot' | 'Kusama' | 'Westend' | 'Rococo' | 'Wococo' | 'Ethereum' | 'BitcoinCore' | 'BitcoinCash';
  }

  /** @name XcmV3JunctionBodyId (141) */
  interface XcmV3JunctionBodyId extends Enum {
    readonly isUnit: boolean;
    readonly isMoniker: boolean;
    readonly asMoniker: U8aFixed;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u32>;
    readonly isExecutive: boolean;
    readonly isTechnical: boolean;
    readonly isLegislative: boolean;
    readonly isJudicial: boolean;
    readonly isDefense: boolean;
    readonly isAdministration: boolean;
    readonly isTreasury: boolean;
    readonly type: 'Unit' | 'Moniker' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
  }

  /** @name XcmV3JunctionBodyPart (142) */
  interface XcmV3JunctionBodyPart extends Enum {
    readonly isVoice: boolean;
    readonly isMembers: boolean;
    readonly asMembers: {
      readonly count: Compact<u32>;
    } & Struct;
    readonly isFraction: boolean;
    readonly asFraction: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isAtLeastProportion: boolean;
    readonly asAtLeastProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isMoreThanProportion: boolean;
    readonly asMoreThanProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
  }

  /** @name PolkadotRuntimeCommonClaimsPalletCall (147) */
  interface PolkadotRuntimeCommonClaimsPalletCall extends Enum {
    readonly isClaim: boolean;
    readonly asClaim: {
      readonly dest: AccountId32;
      readonly ethereumSignature: PolkadotRuntimeCommonClaimsEcdsaSignature;
    } & Struct;
    readonly isMintClaim: boolean;
    readonly asMintClaim: {
      readonly who: EthereumAddress;
      readonly value: u128;
      readonly vestingSchedule: Option<ITuple<[u128, u128, u32]>>;
      readonly statement: Option<PolkadotRuntimeCommonClaimsStatementKind>;
    } & Struct;
    readonly isClaimAttest: boolean;
    readonly asClaimAttest: {
      readonly dest: AccountId32;
      readonly ethereumSignature: PolkadotRuntimeCommonClaimsEcdsaSignature;
      readonly statement: Bytes;
    } & Struct;
    readonly isAttest: boolean;
    readonly asAttest: {
      readonly statement: Bytes;
    } & Struct;
    readonly isMoveClaim: boolean;
    readonly asMoveClaim: {
      readonly old: EthereumAddress;
      readonly new_: EthereumAddress;
      readonly maybePreclaim: Option<AccountId32>;
    } & Struct;
    readonly type: 'Claim' | 'MintClaim' | 'ClaimAttest' | 'Attest' | 'MoveClaim';
  }

  /** @name PolkadotRuntimeCommonClaimsEcdsaSignature (148) */
  interface PolkadotRuntimeCommonClaimsEcdsaSignature extends U8aFixed {}

  /** @name PolkadotRuntimeCommonClaimsStatementKind (154) */
  interface PolkadotRuntimeCommonClaimsStatementKind extends Enum {
    readonly isRegular: boolean;
    readonly isSaft: boolean;
    readonly type: 'Regular' | 'Saft';
  }

  /** @name PalletIdentityIdentityInfo (161) */
  interface PalletIdentityIdentityInfo extends Struct {
    readonly additional: Vec<ITuple<[Data, Data]>>;
    readonly display: Data;
    readonly legal: Data;
    readonly web: Data;
    readonly riot: Data;
    readonly email: Data;
    readonly pgpFingerprint: Option<U8aFixed>;
    readonly image: Data;
    readonly twitter: Data;
  }

  /** @name PalletIdentityBitFlags (198) */
  interface PalletIdentityBitFlags extends Set {
    readonly isDisplay: boolean;
    readonly isLegal: boolean;
    readonly isWeb: boolean;
    readonly isRiot: boolean;
    readonly isEmail: boolean;
    readonly isPgpFingerprint: boolean;
    readonly isImage: boolean;
    readonly isTwitter: boolean;
  }

  /** @name PalletIdentityIdentityField (199) */
  interface PalletIdentityIdentityField extends Enum {
    readonly isDisplay: boolean;
    readonly isLegal: boolean;
    readonly isWeb: boolean;
    readonly isRiot: boolean;
    readonly isEmail: boolean;
    readonly isPgpFingerprint: boolean;
    readonly isImage: boolean;
    readonly isTwitter: boolean;
    readonly type: 'Display' | 'Legal' | 'Web' | 'Riot' | 'Email' | 'PgpFingerprint' | 'Image' | 'Twitter';
  }

  /** @name PolkadotRuntimeProxyType (203) */
  interface PolkadotRuntimeProxyType extends Enum {
    readonly isAny: boolean;
    readonly isNonTransfer: boolean;
    readonly isGovernance: boolean;
    readonly isStaking: boolean;
    readonly isIdentityJudgement: boolean;
    readonly isCancelProxy: boolean;
    readonly isAuction: boolean;
    readonly isNominationPools: boolean;
    readonly type: 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | 'IdentityJudgement' | 'CancelProxy' | 'Auction' | 'NominationPools';
  }

  /** @name PolkadotRuntimeNposCompactSolution16 (211) */
  interface PolkadotRuntimeNposCompactSolution16 extends Struct {
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
  }

  /** @name PolkadotRuntimeParachainsConfigurationPalletCall (284) */
  interface PolkadotRuntimeParachainsConfigurationPalletCall extends Enum {
    readonly isSetValidationUpgradeCooldown: boolean;
    readonly asSetValidationUpgradeCooldown: {
      readonly new_: u32;
    } & Struct;
    readonly isSetValidationUpgradeDelay: boolean;
    readonly asSetValidationUpgradeDelay: {
      readonly new_: u32;
    } & Struct;
    readonly isSetCodeRetentionPeriod: boolean;
    readonly asSetCodeRetentionPeriod: {
      readonly new_: u32;
    } & Struct;
    readonly isSetMaxCodeSize: boolean;
    readonly asSetMaxCodeSize: {
      readonly new_: u32;
    } & Struct;
    readonly isSetMaxPovSize: boolean;
    readonly asSetMaxPovSize: {
      readonly new_: u32;
    } & Struct;
    readonly isSetMaxHeadDataSize: boolean;
    readonly asSetMaxHeadDataSize: {
      readonly new_: u32;
    } & Struct;
    readonly isSetOnDemandCores: boolean;
    readonly asSetOnDemandCores: {
      readonly new_: u32;
    } & Struct;
    readonly isSetOnDemandRetries: boolean;
    readonly asSetOnDemandRetries: {
      readonly new_: u32;
    } & Struct;
    readonly isSetGroupRotationFrequency: boolean;
    readonly asSetGroupRotationFrequency: {
      readonly new_: u32;
    } & Struct;
    readonly isSetParasAvailabilityPeriod: boolean;
    readonly asSetParasAvailabilityPeriod: {
      readonly new_: u32;
    } & Struct;
    readonly isSetSchedulingLookahead: boolean;
    readonly asSetSchedulingLookahead: {
      readonly new_: u32;
    } & Struct;
    readonly isSetMaxValidatorsPerCore: boolean;
    readonly asSetMaxValidatorsPerCore: {
      readonly new_: Option<u32>;
    } & Struct;
    readonly isSetMaxValidators: boolean;
    readonly asSetMaxValidators: {
      readonly new_: Option<u32>;
    } & Struct;
    readonly isSetDisputePeriod: boolean;
    readonly asSetDisputePeriod: {
      readonly new_: u32;
    } & Struct;
    readonly isSetDisputePostConclusionAcceptancePeriod: boolean;
    readonly asSetDisputePostConclusionAcceptancePeriod: {
      readonly new_: u32;
    } & Struct;
    readonly isSetNoShowSlots: boolean;
    readonly asSetNoShowSlots: {
      readonly new_: u32;
    } & Struct;
    readonly isSetNDelayTranches: boolean;
    readonly asSetNDelayTranches: {
      readonly new_: u32;
    } & Struct;
    readonly isSetZerothDelayTrancheWidth: boolean;
    readonly asSetZerothDelayTrancheWidth: {
      readonly new_: u32;
    } & Struct;
    readonly isSetNeededApprovals: boolean;
    readonly asSetNeededApprovals: {
      readonly new_: u32;
    } & Struct;
    readonly isSetRelayVrfModuloSamples: boolean;
    readonly asSetRelayVrfModuloSamples: {
      readonly new_: u32;
    } & Struct;
    readonly isSetMaxUpwardQueueCount: boolean;
    readonly asSetMaxUpwardQueueCount: {
      readonly new_: u32;
    } & Struct;
    readonly isSetMaxUpwardQueueSize: boolean;
    readonly asSetMaxUpwardQueueSize: {
      readonly new_: u32;
    } & Struct;
    readonly isSetMaxDownwardMessageSize: boolean;
    readonly asSetMaxDownwardMessageSize: {
      readonly new_: u32;
    } & Struct;
    readonly isSetMaxUpwardMessageSize: boolean;
    readonly asSetMaxUpwardMessageSize: {
      readonly new_: u32;
    } & Struct;
    readonly isSetMaxUpwardMessageNumPerCandidate: boolean;
    readonly asSetMaxUpwardMessageNumPerCandidate: {
      readonly new_: u32;
    } & Struct;
    readonly isSetHrmpOpenRequestTtl: boolean;
    readonly asSetHrmpOpenRequestTtl: {
      readonly new_: u32;
    } & Struct;
    readonly isSetHrmpSenderDeposit: boolean;
    readonly asSetHrmpSenderDeposit: {
      readonly new_: u128;
    } & Struct;
    readonly isSetHrmpRecipientDeposit: boolean;
    readonly asSetHrmpRecipientDeposit: {
      readonly new_: u128;
    } & Struct;
    readonly isSetHrmpChannelMaxCapacity: boolean;
    readonly asSetHrmpChannelMaxCapacity: {
      readonly new_: u32;
    } & Struct;
    readonly isSetHrmpChannelMaxTotalSize: boolean;
    readonly asSetHrmpChannelMaxTotalSize: {
      readonly new_: u32;
    } & Struct;
    readonly isSetHrmpMaxParachainInboundChannels: boolean;
    readonly asSetHrmpMaxParachainInboundChannels: {
      readonly new_: u32;
    } & Struct;
    readonly isSetHrmpChannelMaxMessageSize: boolean;
    readonly asSetHrmpChannelMaxMessageSize: {
      readonly new_: u32;
    } & Struct;
    readonly isSetHrmpMaxParachainOutboundChannels: boolean;
    readonly asSetHrmpMaxParachainOutboundChannels: {
      readonly new_: u32;
    } & Struct;
    readonly isSetHrmpMaxMessageNumPerCandidate: boolean;
    readonly asSetHrmpMaxMessageNumPerCandidate: {
      readonly new_: u32;
    } & Struct;
    readonly isSetPvfVotingTtl: boolean;
    readonly asSetPvfVotingTtl: {
      readonly new_: u32;
    } & Struct;
    readonly isSetMinimumValidationUpgradeDelay: boolean;
    readonly asSetMinimumValidationUpgradeDelay: {
      readonly new_: u32;
    } & Struct;
    readonly isSetBypassConsistencyCheck: boolean;
    readonly asSetBypassConsistencyCheck: {
      readonly new_: bool;
    } & Struct;
    readonly isSetAsyncBackingParams: boolean;
    readonly asSetAsyncBackingParams: {
      readonly new_: PolkadotPrimitivesVstagingAsyncBackingParams;
    } & Struct;
    readonly isSetExecutorParams: boolean;
    readonly asSetExecutorParams: {
      readonly new_: PolkadotPrimitivesV5ExecutorParams;
    } & Struct;
    readonly isSetOnDemandBaseFee: boolean;
    readonly asSetOnDemandBaseFee: {
      readonly new_: u128;
    } & Struct;
    readonly isSetOnDemandFeeVariability: boolean;
    readonly asSetOnDemandFeeVariability: {
      readonly new_: Perbill;
    } & Struct;
    readonly isSetOnDemandQueueMaxSize: boolean;
    readonly asSetOnDemandQueueMaxSize: {
      readonly new_: u32;
    } & Struct;
    readonly isSetOnDemandTargetQueueUtilization: boolean;
    readonly asSetOnDemandTargetQueueUtilization: {
      readonly new_: Perbill;
    } & Struct;
    readonly isSetOnDemandTtl: boolean;
    readonly asSetOnDemandTtl: {
      readonly new_: u32;
    } & Struct;
    readonly type: 'SetValidationUpgradeCooldown' | 'SetValidationUpgradeDelay' | 'SetCodeRetentionPeriod' | 'SetMaxCodeSize' | 'SetMaxPovSize' | 'SetMaxHeadDataSize' | 'SetOnDemandCores' | 'SetOnDemandRetries' | 'SetGroupRotationFrequency' | 'SetParasAvailabilityPeriod' | 'SetSchedulingLookahead' | 'SetMaxValidatorsPerCore' | 'SetMaxValidators' | 'SetDisputePeriod' | 'SetDisputePostConclusionAcceptancePeriod' | 'SetNoShowSlots' | 'SetNDelayTranches' | 'SetZerothDelayTrancheWidth' | 'SetNeededApprovals' | 'SetRelayVrfModuloSamples' | 'SetMaxUpwardQueueCount' | 'SetMaxUpwardQueueSize' | 'SetMaxDownwardMessageSize' | 'SetMaxUpwardMessageSize' | 'SetMaxUpwardMessageNumPerCandidate' | 'SetHrmpOpenRequestTtl' | 'SetHrmpSenderDeposit' | 'SetHrmpRecipientDeposit' | 'SetHrmpChannelMaxCapacity' | 'SetHrmpChannelMaxTotalSize' | 'SetHrmpMaxParachainInboundChannels' | 'SetHrmpChannelMaxMessageSize' | 'SetHrmpMaxParachainOutboundChannels' | 'SetHrmpMaxMessageNumPerCandidate' | 'SetPvfVotingTtl' | 'SetMinimumValidationUpgradeDelay' | 'SetBypassConsistencyCheck' | 'SetAsyncBackingParams' | 'SetExecutorParams' | 'SetOnDemandBaseFee' | 'SetOnDemandFeeVariability' | 'SetOnDemandQueueMaxSize' | 'SetOnDemandTargetQueueUtilization' | 'SetOnDemandTtl';
  }

  /** @name PolkadotPrimitivesVstagingAsyncBackingParams (285) */
  interface PolkadotPrimitivesVstagingAsyncBackingParams extends Struct {
    readonly maxCandidateDepth: u32;
    readonly allowedAncestryLen: u32;
  }

  /** @name PolkadotPrimitivesV5ExecutorParams (286) */
  interface PolkadotPrimitivesV5ExecutorParams extends Vec<PolkadotPrimitivesV5ExecutorParamsExecutorParam> {}

  /** @name PolkadotPrimitivesV5ExecutorParamsExecutorParam (288) */
  interface PolkadotPrimitivesV5ExecutorParamsExecutorParam extends Enum {
    readonly isMaxMemoryPages: boolean;
    readonly asMaxMemoryPages: u32;
    readonly isStackLogicalMax: boolean;
    readonly asStackLogicalMax: u32;
    readonly isStackNativeMax: boolean;
    readonly asStackNativeMax: u32;
    readonly isPrecheckingMaxMemory: boolean;
    readonly asPrecheckingMaxMemory: u64;
    readonly isPvfPrepTimeout: boolean;
    readonly asPvfPrepTimeout: ITuple<[PolkadotPrimitivesV5PvfPrepTimeoutKind, u64]>;
    readonly isPvfExecTimeout: boolean;
    readonly asPvfExecTimeout: ITuple<[PolkadotPrimitivesV5PvfExecTimeoutKind, u64]>;
    readonly isWasmExtBulkMemory: boolean;
    readonly type: 'MaxMemoryPages' | 'StackLogicalMax' | 'StackNativeMax' | 'PrecheckingMaxMemory' | 'PvfPrepTimeout' | 'PvfExecTimeout' | 'WasmExtBulkMemory';
  }

  /** @name PolkadotPrimitivesV5PvfPrepTimeoutKind (289) */
  interface PolkadotPrimitivesV5PvfPrepTimeoutKind extends Enum {
    readonly isPrecheck: boolean;
    readonly isLenient: boolean;
    readonly type: 'Precheck' | 'Lenient';
  }

  /** @name PolkadotPrimitivesV5PvfExecTimeoutKind (290) */
  interface PolkadotPrimitivesV5PvfExecTimeoutKind extends Enum {
    readonly isBacking: boolean;
    readonly isApproval: boolean;
    readonly type: 'Backing' | 'Approval';
  }

  /** @name PolkadotRuntimeParachainsSharedPalletCall (291) */
  type PolkadotRuntimeParachainsSharedPalletCall = Null;

  /** @name PolkadotRuntimeParachainsInclusionPalletCall (292) */
  type PolkadotRuntimeParachainsInclusionPalletCall = Null;

  /** @name PolkadotRuntimeParachainsParasInherentPalletCall (293) */
  interface PolkadotRuntimeParachainsParasInherentPalletCall extends Enum {
    readonly isEnter: boolean;
    readonly asEnter: {
      readonly data: PolkadotPrimitivesV5InherentData;
    } & Struct;
    readonly type: 'Enter';
  }

  /** @name PolkadotPrimitivesV5InherentData (294) */
  interface PolkadotPrimitivesV5InherentData extends Struct {
    readonly bitfields: Vec<PolkadotPrimitivesV5SignedUncheckedSigned>;
    readonly backedCandidates: Vec<PolkadotPrimitivesV5BackedCandidate>;
    readonly disputes: Vec<PolkadotPrimitivesV5DisputeStatementSet>;
    readonly parentHeader: SpRuntimeHeader;
  }

  /** @name PolkadotPrimitivesV5SignedUncheckedSigned (296) */
  interface PolkadotPrimitivesV5SignedUncheckedSigned extends Struct {
    readonly payload: BitVec;
    readonly validatorIndex: u32;
    readonly signature: PolkadotPrimitivesV5ValidatorAppSignature;
  }

  /** @name BitvecOrderLsb0 (299) */
  type BitvecOrderLsb0 = Null;

  /** @name PolkadotPrimitivesV5ValidatorAppSignature (301) */
  interface PolkadotPrimitivesV5ValidatorAppSignature extends SpCoreSr25519Signature {}

  /** @name PolkadotPrimitivesV5BackedCandidate (303) */
  interface PolkadotPrimitivesV5BackedCandidate extends Struct {
    readonly candidate: PolkadotPrimitivesV5CommittedCandidateReceipt;
    readonly validityVotes: Vec<PolkadotPrimitivesV5ValidityAttestation>;
    readonly validatorIndices: BitVec;
  }

  /** @name PolkadotPrimitivesV5CommittedCandidateReceipt (304) */
  interface PolkadotPrimitivesV5CommittedCandidateReceipt extends Struct {
    readonly descriptor: PolkadotPrimitivesV5CandidateDescriptor;
    readonly commitments: PolkadotPrimitivesV5CandidateCommitments;
  }

  /** @name PolkadotPrimitivesV5CandidateDescriptor (305) */
  interface PolkadotPrimitivesV5CandidateDescriptor extends Struct {
    readonly paraId: u32;
    readonly relayParent: H256;
    readonly collator: PolkadotPrimitivesV5CollatorAppPublic;
    readonly persistedValidationDataHash: H256;
    readonly povHash: H256;
    readonly erasureRoot: H256;
    readonly signature: PolkadotPrimitivesV5CollatorAppSignature;
    readonly paraHead: H256;
    readonly validationCodeHash: H256;
  }

  /** @name PolkadotPrimitivesV5CollatorAppPublic (306) */
  interface PolkadotPrimitivesV5CollatorAppPublic extends SpCoreSr25519Public {}

  /** @name PolkadotPrimitivesV5CollatorAppSignature (307) */
  interface PolkadotPrimitivesV5CollatorAppSignature extends SpCoreSr25519Signature {}

  /** @name PolkadotPrimitivesV5CandidateCommitments (309) */
  interface PolkadotPrimitivesV5CandidateCommitments extends Struct {
    readonly upwardMessages: Vec<Bytes>;
    readonly horizontalMessages: Vec<PolkadotCorePrimitivesOutboundHrmpMessage>;
    readonly newValidationCode: Option<Bytes>;
    readonly headData: Bytes;
    readonly processedDownwardMessages: u32;
    readonly hrmpWatermark: u32;
  }

  /** @name PolkadotCorePrimitivesOutboundHrmpMessage (312) */
  interface PolkadotCorePrimitivesOutboundHrmpMessage extends Struct {
    readonly recipient: u32;
    readonly data: Bytes;
  }

  /** @name PolkadotPrimitivesV5ValidityAttestation (318) */
  interface PolkadotPrimitivesV5ValidityAttestation extends Enum {
    readonly isImplicit: boolean;
    readonly asImplicit: PolkadotPrimitivesV5ValidatorAppSignature;
    readonly isExplicit: boolean;
    readonly asExplicit: PolkadotPrimitivesV5ValidatorAppSignature;
    readonly type: 'Implicit' | 'Explicit';
  }

  /** @name PolkadotPrimitivesV5DisputeStatementSet (320) */
  interface PolkadotPrimitivesV5DisputeStatementSet extends Struct {
    readonly candidateHash: H256;
    readonly session: u32;
    readonly statements: Vec<ITuple<[PolkadotPrimitivesV5DisputeStatement, u32, PolkadotPrimitivesV5ValidatorAppSignature]>>;
  }

  /** @name PolkadotPrimitivesV5DisputeStatement (324) */
  interface PolkadotPrimitivesV5DisputeStatement extends Enum {
    readonly isValid: boolean;
    readonly asValid: PolkadotPrimitivesV5ValidDisputeStatementKind;
    readonly isInvalid: boolean;
    readonly asInvalid: PolkadotPrimitivesV5InvalidDisputeStatementKind;
    readonly type: 'Valid' | 'Invalid';
  }

  /** @name PolkadotPrimitivesV5ValidDisputeStatementKind (325) */
  interface PolkadotPrimitivesV5ValidDisputeStatementKind extends Enum {
    readonly isExplicit: boolean;
    readonly isBackingSeconded: boolean;
    readonly asBackingSeconded: H256;
    readonly isBackingValid: boolean;
    readonly asBackingValid: H256;
    readonly isApprovalChecking: boolean;
    readonly type: 'Explicit' | 'BackingSeconded' | 'BackingValid' | 'ApprovalChecking';
  }

  /** @name PolkadotPrimitivesV5InvalidDisputeStatementKind (326) */
  interface PolkadotPrimitivesV5InvalidDisputeStatementKind extends Enum {
    readonly isExplicit: boolean;
    readonly type: 'Explicit';
  }

  /** @name PolkadotRuntimeParachainsParasPalletCall (327) */
  interface PolkadotRuntimeParachainsParasPalletCall extends Enum {
    readonly isForceSetCurrentCode: boolean;
    readonly asForceSetCurrentCode: {
      readonly para: u32;
      readonly newCode: Bytes;
    } & Struct;
    readonly isForceSetCurrentHead: boolean;
    readonly asForceSetCurrentHead: {
      readonly para: u32;
      readonly newHead: Bytes;
    } & Struct;
    readonly isForceScheduleCodeUpgrade: boolean;
    readonly asForceScheduleCodeUpgrade: {
      readonly para: u32;
      readonly newCode: Bytes;
      readonly relayParentNumber: u32;
    } & Struct;
    readonly isForceNoteNewHead: boolean;
    readonly asForceNoteNewHead: {
      readonly para: u32;
      readonly newHead: Bytes;
    } & Struct;
    readonly isForceQueueAction: boolean;
    readonly asForceQueueAction: {
      readonly para: u32;
    } & Struct;
    readonly isAddTrustedValidationCode: boolean;
    readonly asAddTrustedValidationCode: {
      readonly validationCode: Bytes;
    } & Struct;
    readonly isPokeUnusedValidationCode: boolean;
    readonly asPokeUnusedValidationCode: {
      readonly validationCodeHash: H256;
    } & Struct;
    readonly isIncludePvfCheckStatement: boolean;
    readonly asIncludePvfCheckStatement: {
      readonly stmt: PolkadotPrimitivesV5PvfCheckStatement;
      readonly signature: PolkadotPrimitivesV5ValidatorAppSignature;
    } & Struct;
    readonly isForceSetMostRecentContext: boolean;
    readonly asForceSetMostRecentContext: {
      readonly para: u32;
      readonly context: u32;
    } & Struct;
    readonly type: 'ForceSetCurrentCode' | 'ForceSetCurrentHead' | 'ForceScheduleCodeUpgrade' | 'ForceNoteNewHead' | 'ForceQueueAction' | 'AddTrustedValidationCode' | 'PokeUnusedValidationCode' | 'IncludePvfCheckStatement' | 'ForceSetMostRecentContext';
  }

  /** @name PolkadotPrimitivesV5PvfCheckStatement (328) */
  interface PolkadotPrimitivesV5PvfCheckStatement extends Struct {
    readonly accept: bool;
    readonly subject: H256;
    readonly sessionIndex: u32;
    readonly validatorIndex: u32;
  }

  /** @name PolkadotRuntimeParachainsInitializerPalletCall (329) */
  interface PolkadotRuntimeParachainsInitializerPalletCall extends Enum {
    readonly isForceApprove: boolean;
    readonly asForceApprove: {
      readonly upTo: u32;
    } & Struct;
    readonly type: 'ForceApprove';
  }

  /** @name PolkadotRuntimeParachainsHrmpPalletCall (330) */
  interface PolkadotRuntimeParachainsHrmpPalletCall extends Enum {
    readonly isHrmpInitOpenChannel: boolean;
    readonly asHrmpInitOpenChannel: {
      readonly recipient: u32;
      readonly proposedMaxCapacity: u32;
      readonly proposedMaxMessageSize: u32;
    } & Struct;
    readonly isHrmpAcceptOpenChannel: boolean;
    readonly asHrmpAcceptOpenChannel: {
      readonly sender: u32;
    } & Struct;
    readonly isHrmpCloseChannel: boolean;
    readonly asHrmpCloseChannel: {
      readonly channelId: PolkadotParachainPrimitivesHrmpChannelId;
    } & Struct;
    readonly isForceCleanHrmp: boolean;
    readonly asForceCleanHrmp: {
      readonly para: u32;
      readonly inbound: u32;
      readonly outbound: u32;
    } & Struct;
    readonly isForceProcessHrmpOpen: boolean;
    readonly asForceProcessHrmpOpen: {
      readonly channels: u32;
    } & Struct;
    readonly isForceProcessHrmpClose: boolean;
    readonly asForceProcessHrmpClose: {
      readonly channels: u32;
    } & Struct;
    readonly isHrmpCancelOpenRequest: boolean;
    readonly asHrmpCancelOpenRequest: {
      readonly channelId: PolkadotParachainPrimitivesHrmpChannelId;
      readonly openRequests: u32;
    } & Struct;
    readonly isForceOpenHrmpChannel: boolean;
    readonly asForceOpenHrmpChannel: {
      readonly sender: u32;
      readonly recipient: u32;
      readonly maxCapacity: u32;
      readonly maxMessageSize: u32;
    } & Struct;
    readonly type: 'HrmpInitOpenChannel' | 'HrmpAcceptOpenChannel' | 'HrmpCloseChannel' | 'ForceCleanHrmp' | 'ForceProcessHrmpOpen' | 'ForceProcessHrmpClose' | 'HrmpCancelOpenRequest' | 'ForceOpenHrmpChannel';
  }

  /** @name PolkadotParachainPrimitivesHrmpChannelId (331) */
  interface PolkadotParachainPrimitivesHrmpChannelId extends Struct {
    readonly sender: u32;
    readonly recipient: u32;
  }

  /** @name PolkadotRuntimeParachainsDisputesPalletCall (332) */
  interface PolkadotRuntimeParachainsDisputesPalletCall extends Enum {
    readonly isForceUnfreeze: boolean;
    readonly type: 'ForceUnfreeze';
  }

  /** @name PolkadotRuntimeParachainsDisputesSlashingPalletCall (333) */
  interface PolkadotRuntimeParachainsDisputesSlashingPalletCall extends Enum {
    readonly isReportDisputeLostUnsigned: boolean;
    readonly asReportDisputeLostUnsigned: {
      readonly disputeProof: PolkadotPrimitivesV5SlashingDisputeProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly type: 'ReportDisputeLostUnsigned';
  }

  /** @name PolkadotPrimitivesV5SlashingDisputeProof (334) */
  interface PolkadotPrimitivesV5SlashingDisputeProof extends Struct {
    readonly timeSlot: PolkadotPrimitivesV5SlashingDisputesTimeSlot;
    readonly kind: PolkadotPrimitivesV5SlashingSlashingOffenceKind;
    readonly validatorIndex: u32;
    readonly validatorId: PolkadotPrimitivesV5ValidatorAppPublic;
  }

  /** @name PolkadotPrimitivesV5SlashingDisputesTimeSlot (335) */
  interface PolkadotPrimitivesV5SlashingDisputesTimeSlot extends Struct {
    readonly sessionIndex: u32;
    readonly candidateHash: H256;
  }

  /** @name PolkadotPrimitivesV5SlashingSlashingOffenceKind (336) */
  interface PolkadotPrimitivesV5SlashingSlashingOffenceKind extends Enum {
    readonly isForInvalid: boolean;
    readonly isAgainstValid: boolean;
    readonly type: 'ForInvalid' | 'AgainstValid';
  }

  /** @name PolkadotRuntimeCommonParasRegistrarPalletCall (337) */
  interface PolkadotRuntimeCommonParasRegistrarPalletCall extends Enum {
    readonly isRegister: boolean;
    readonly asRegister: {
      readonly id: u32;
      readonly genesisHead: Bytes;
      readonly validationCode: Bytes;
    } & Struct;
    readonly isForceRegister: boolean;
    readonly asForceRegister: {
      readonly who: AccountId32;
      readonly deposit: u128;
      readonly id: u32;
      readonly genesisHead: Bytes;
      readonly validationCode: Bytes;
    } & Struct;
    readonly isDeregister: boolean;
    readonly asDeregister: {
      readonly id: u32;
    } & Struct;
    readonly isSwap: boolean;
    readonly asSwap: {
      readonly id: u32;
      readonly other: u32;
    } & Struct;
    readonly isRemoveLock: boolean;
    readonly asRemoveLock: {
      readonly para: u32;
    } & Struct;
    readonly isReserve: boolean;
    readonly isAddLock: boolean;
    readonly asAddLock: {
      readonly para: u32;
    } & Struct;
    readonly isScheduleCodeUpgrade: boolean;
    readonly asScheduleCodeUpgrade: {
      readonly para: u32;
      readonly newCode: Bytes;
    } & Struct;
    readonly isSetCurrentHead: boolean;
    readonly asSetCurrentHead: {
      readonly para: u32;
      readonly newHead: Bytes;
    } & Struct;
    readonly type: 'Register' | 'ForceRegister' | 'Deregister' | 'Swap' | 'RemoveLock' | 'Reserve' | 'AddLock' | 'ScheduleCodeUpgrade' | 'SetCurrentHead';
  }

  /** @name PolkadotRuntimeCommonSlotsPalletCall (338) */
  interface PolkadotRuntimeCommonSlotsPalletCall extends Enum {
    readonly isForceLease: boolean;
    readonly asForceLease: {
      readonly para: u32;
      readonly leaser: AccountId32;
      readonly amount: u128;
      readonly periodBegin: u32;
      readonly periodCount: u32;
    } & Struct;
    readonly isClearAllLeases: boolean;
    readonly asClearAllLeases: {
      readonly para: u32;
    } & Struct;
    readonly isTriggerOnboard: boolean;
    readonly asTriggerOnboard: {
      readonly para: u32;
    } & Struct;
    readonly type: 'ForceLease' | 'ClearAllLeases' | 'TriggerOnboard';
  }

  /** @name PolkadotRuntimeCommonAuctionsPalletCall (339) */
  interface PolkadotRuntimeCommonAuctionsPalletCall extends Enum {
    readonly isNewAuction: boolean;
    readonly asNewAuction: {
      readonly duration: Compact<u32>;
      readonly leasePeriodIndex: Compact<u32>;
    } & Struct;
    readonly isBid: boolean;
    readonly asBid: {
      readonly para: Compact<u32>;
      readonly auctionIndex: Compact<u32>;
      readonly firstSlot: Compact<u32>;
      readonly lastSlot: Compact<u32>;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isCancelAuction: boolean;
    readonly type: 'NewAuction' | 'Bid' | 'CancelAuction';
  }

  /** @name PolkadotRuntimeCommonCrowdloanPalletCall (341) */
  interface PolkadotRuntimeCommonCrowdloanPalletCall extends Enum {
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly index: Compact<u32>;
      readonly cap: Compact<u128>;
      readonly firstPeriod: Compact<u32>;
      readonly lastPeriod: Compact<u32>;
      readonly end: Compact<u32>;
      readonly verifier: Option<SpRuntimeMultiSigner>;
    } & Struct;
    readonly isContribute: boolean;
    readonly asContribute: {
      readonly index: Compact<u32>;
      readonly value: Compact<u128>;
      readonly signature: Option<SpRuntimeMultiSignature>;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly who: AccountId32;
      readonly index: Compact<u32>;
    } & Struct;
    readonly isRefund: boolean;
    readonly asRefund: {
      readonly index: Compact<u32>;
    } & Struct;
    readonly isDissolve: boolean;
    readonly asDissolve: {
      readonly index: Compact<u32>;
    } & Struct;
    readonly isEdit: boolean;
    readonly asEdit: {
      readonly index: Compact<u32>;
      readonly cap: Compact<u128>;
      readonly firstPeriod: Compact<u32>;
      readonly lastPeriod: Compact<u32>;
      readonly end: Compact<u32>;
      readonly verifier: Option<SpRuntimeMultiSigner>;
    } & Struct;
    readonly isAddMemo: boolean;
    readonly asAddMemo: {
      readonly index: u32;
      readonly memo: Bytes;
    } & Struct;
    readonly isPoke: boolean;
    readonly asPoke: {
      readonly index: u32;
    } & Struct;
    readonly isContributeAll: boolean;
    readonly asContributeAll: {
      readonly index: Compact<u32>;
      readonly signature: Option<SpRuntimeMultiSignature>;
    } & Struct;
    readonly type: 'Create' | 'Contribute' | 'Withdraw' | 'Refund' | 'Dissolve' | 'Edit' | 'AddMemo' | 'Poke' | 'ContributeAll';
  }

  /** @name SpRuntimeMultiSigner (343) */
  interface SpRuntimeMultiSigner extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Public;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Public;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaPublic;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name PalletXcmCall (349) */
  interface PalletXcmCall extends Enum {
    readonly isSend: boolean;
    readonly asSend: {
      readonly dest: XcmVersionedMultiLocation;
      readonly message: XcmVersionedXcm;
    } & Struct;
    readonly isTeleportAssets: boolean;
    readonly asTeleportAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
    } & Struct;
    readonly isReserveTransferAssets: boolean;
    readonly asReserveTransferAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly message: XcmVersionedXcm;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isForceXcmVersion: boolean;
    readonly asForceXcmVersion: {
      readonly location: XcmV3MultiLocation;
      readonly version: u32;
    } & Struct;
    readonly isForceDefaultXcmVersion: boolean;
    readonly asForceDefaultXcmVersion: {
      readonly maybeXcmVersion: Option<u32>;
    } & Struct;
    readonly isForceSubscribeVersionNotify: boolean;
    readonly asForceSubscribeVersionNotify: {
      readonly location: XcmVersionedMultiLocation;
    } & Struct;
    readonly isForceUnsubscribeVersionNotify: boolean;
    readonly asForceUnsubscribeVersionNotify: {
      readonly location: XcmVersionedMultiLocation;
    } & Struct;
    readonly isLimitedReserveTransferAssets: boolean;
    readonly asLimitedReserveTransferAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isLimitedTeleportAssets: boolean;
    readonly asLimitedTeleportAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isForceSuspension: boolean;
    readonly asForceSuspension: {
      readonly suspended: bool;
    } & Struct;
    readonly type: 'Send' | 'TeleportAssets' | 'ReserveTransferAssets' | 'Execute' | 'ForceXcmVersion' | 'ForceDefaultXcmVersion' | 'ForceSubscribeVersionNotify' | 'ForceUnsubscribeVersionNotify' | 'LimitedReserveTransferAssets' | 'LimitedTeleportAssets' | 'ForceSuspension';
  }

  /** @name XcmVersionedMultiLocation (350) */
  interface XcmVersionedMultiLocation extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2MultiLocation;
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiLocation;
    readonly type: 'V2' | 'V3';
  }

  /** @name XcmV2MultiLocation (351) */
  interface XcmV2MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: XcmV2MultilocationJunctions;
  }

  /** @name XcmV2MultilocationJunctions (352) */
  interface XcmV2MultilocationJunctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: XcmV2Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[XcmV2Junction, XcmV2Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name XcmV2Junction (353) */
  interface XcmV2Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: XcmV2NetworkId;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: XcmV2NetworkId;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: XcmV2NetworkId;
      readonly key: U8aFixed;
    } & Struct;
    readonly isPalletInstance: boolean;
    readonly asPalletInstance: u8;
    readonly isGeneralIndex: boolean;
    readonly asGeneralIndex: Compact<u128>;
    readonly isGeneralKey: boolean;
    readonly asGeneralKey: Bytes;
    readonly isOnlyChild: boolean;
    readonly isPlurality: boolean;
    readonly asPlurality: {
      readonly id: XcmV2BodyId;
      readonly part: XcmV2BodyPart;
    } & Struct;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality';
  }

  /** @name XcmV2NetworkId (354) */
  interface XcmV2NetworkId extends Enum {
    readonly isAny: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly type: 'Any' | 'Named' | 'Polkadot' | 'Kusama';
  }

  /** @name XcmV2BodyId (356) */
  interface XcmV2BodyId extends Enum {
    readonly isUnit: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u32>;
    readonly isExecutive: boolean;
    readonly isTechnical: boolean;
    readonly isLegislative: boolean;
    readonly isJudicial: boolean;
    readonly isDefense: boolean;
    readonly isAdministration: boolean;
    readonly isTreasury: boolean;
    readonly type: 'Unit' | 'Named' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
  }

  /** @name XcmV2BodyPart (357) */
  interface XcmV2BodyPart extends Enum {
    readonly isVoice: boolean;
    readonly isMembers: boolean;
    readonly asMembers: {
      readonly count: Compact<u32>;
    } & Struct;
    readonly isFraction: boolean;
    readonly asFraction: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isAtLeastProportion: boolean;
    readonly asAtLeastProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isMoreThanProportion: boolean;
    readonly asMoreThanProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
  }

  /** @name XcmVersionedXcm (358) */
  interface XcmVersionedXcm extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2Xcm;
    readonly isV3: boolean;
    readonly asV3: XcmV3Xcm;
    readonly type: 'V2' | 'V3';
  }

  /** @name XcmV2Xcm (359) */
  interface XcmV2Xcm extends Vec<XcmV2Instruction> {}

  /** @name XcmV2Instruction (361) */
  interface XcmV2Instruction extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: XcmV2MultiassetMultiAssets;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: XcmV2MultiassetMultiAssets;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: XcmV2MultiassetMultiAssets;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: XcmV2Response;
      readonly maxWeight: Compact<u64>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: XcmV2MultiassetMultiAssets;
      readonly beneficiary: XcmV2MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: XcmV2MultiassetMultiAssets;
      readonly dest: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originType: XcmV2OriginKind;
      readonly requireWeightAtMost: Compact<u64>;
      readonly call: XcmDoubleEncoded;
    } & Struct;
    readonly isHrmpNewChannelOpenRequest: boolean;
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>;
      readonly maxMessageSize: Compact<u32>;
      readonly maxCapacity: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelAccepted: boolean;
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelClosing: boolean;
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>;
      readonly sender: Compact<u32>;
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isClearOrigin: boolean;
    readonly isDescendOrigin: boolean;
    readonly asDescendOrigin: XcmV2MultilocationJunctions;
    readonly isReportError: boolean;
    readonly asReportError: {
      readonly queryId: Compact<u64>;
      readonly dest: XcmV2MultiLocation;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly maxAssets: Compact<u32>;
      readonly beneficiary: XcmV2MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly maxAssets: Compact<u32>;
      readonly dest: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: XcmV2MultiassetMultiAssetFilter;
      readonly receive: XcmV2MultiassetMultiAssets;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly reserve: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly dest: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isQueryHolding: boolean;
    readonly asQueryHolding: {
      readonly queryId: Compact<u64>;
      readonly dest: XcmV2MultiLocation;
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: XcmV2MultiAsset;
      readonly weightLimit: XcmV2WeightLimit;
    } & Struct;
    readonly isRefundSurplus: boolean;
    readonly isSetErrorHandler: boolean;
    readonly asSetErrorHandler: XcmV2Xcm;
    readonly isSetAppendix: boolean;
    readonly asSetAppendix: XcmV2Xcm;
    readonly isClearError: boolean;
    readonly isClaimAsset: boolean;
    readonly asClaimAsset: {
      readonly assets: XcmV2MultiassetMultiAssets;
      readonly ticket: XcmV2MultiLocation;
    } & Struct;
    readonly isTrap: boolean;
    readonly asTrap: Compact<u64>;
    readonly isSubscribeVersion: boolean;
    readonly asSubscribeVersion: {
      readonly queryId: Compact<u64>;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isUnsubscribeVersion: boolean;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'QueryHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion';
  }

  /** @name XcmV2MultiassetMultiAssets (362) */
  interface XcmV2MultiassetMultiAssets extends Vec<XcmV2MultiAsset> {}

  /** @name XcmV2MultiAsset (364) */
  interface XcmV2MultiAsset extends Struct {
    readonly id: XcmV2MultiassetAssetId;
    readonly fun: XcmV2MultiassetFungibility;
  }

  /** @name XcmV2MultiassetAssetId (365) */
  interface XcmV2MultiassetAssetId extends Enum {
    readonly isConcrete: boolean;
    readonly asConcrete: XcmV2MultiLocation;
    readonly isAbstract: boolean;
    readonly asAbstract: Bytes;
    readonly type: 'Concrete' | 'Abstract';
  }

  /** @name XcmV2MultiassetFungibility (366) */
  interface XcmV2MultiassetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: XcmV2MultiassetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV2MultiassetAssetInstance (367) */
  interface XcmV2MultiassetAssetInstance extends Enum {
    readonly isUndefined: boolean;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u128>;
    readonly isArray4: boolean;
    readonly asArray4: U8aFixed;
    readonly isArray8: boolean;
    readonly asArray8: U8aFixed;
    readonly isArray16: boolean;
    readonly asArray16: U8aFixed;
    readonly isArray32: boolean;
    readonly asArray32: U8aFixed;
    readonly isBlob: boolean;
    readonly asBlob: Bytes;
    readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32' | 'Blob';
  }

  /** @name XcmV2Response (368) */
  interface XcmV2Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: XcmV2MultiassetMultiAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, XcmV2TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version';
  }

  /** @name XcmV2TraitsError (371) */
  interface XcmV2TraitsError extends Enum {
    readonly isOverflow: boolean;
    readonly isUnimplemented: boolean;
    readonly isUntrustedReserveLocation: boolean;
    readonly isUntrustedTeleportLocation: boolean;
    readonly isMultiLocationFull: boolean;
    readonly isMultiLocationNotInvertible: boolean;
    readonly isBadOrigin: boolean;
    readonly isInvalidLocation: boolean;
    readonly isAssetNotFound: boolean;
    readonly isFailedToTransactAsset: boolean;
    readonly isNotWithdrawable: boolean;
    readonly isLocationCannotHold: boolean;
    readonly isExceedsMaxMessageSize: boolean;
    readonly isDestinationUnsupported: boolean;
    readonly isTransport: boolean;
    readonly isUnroutable: boolean;
    readonly isUnknownClaim: boolean;
    readonly isFailedToDecode: boolean;
    readonly isMaxWeightInvalid: boolean;
    readonly isNotHoldingFees: boolean;
    readonly isTooExpensive: boolean;
    readonly isTrap: boolean;
    readonly asTrap: u64;
    readonly isUnhandledXcmVersion: boolean;
    readonly isWeightLimitReached: boolean;
    readonly asWeightLimitReached: u64;
    readonly isBarrier: boolean;
    readonly isWeightNotComputable: boolean;
    readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'MultiLocationFull' | 'MultiLocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable';
  }

  /** @name XcmV2OriginKind (372) */
  interface XcmV2OriginKind extends Enum {
    readonly isNative: boolean;
    readonly isSovereignAccount: boolean;
    readonly isSuperuser: boolean;
    readonly isXcm: boolean;
    readonly type: 'Native' | 'SovereignAccount' | 'Superuser' | 'Xcm';
  }

  /** @name XcmDoubleEncoded (373) */
  interface XcmDoubleEncoded extends Struct {
    readonly encoded: Bytes;
  }

  /** @name XcmV2MultiassetMultiAssetFilter (374) */
  interface XcmV2MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: XcmV2MultiassetMultiAssets;
    readonly isWild: boolean;
    readonly asWild: XcmV2MultiassetWildMultiAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name XcmV2MultiassetWildMultiAsset (375) */
  interface XcmV2MultiassetWildMultiAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: XcmV2MultiassetAssetId;
      readonly fun: XcmV2MultiassetWildFungibility;
    } & Struct;
    readonly type: 'All' | 'AllOf';
  }

  /** @name XcmV2MultiassetWildFungibility (376) */
  interface XcmV2MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV2WeightLimit (377) */
  interface XcmV2WeightLimit extends Enum {
    readonly isUnlimited: boolean;
    readonly isLimited: boolean;
    readonly asLimited: Compact<u64>;
    readonly type: 'Unlimited' | 'Limited';
  }

  /** @name XcmV3Xcm (378) */
  interface XcmV3Xcm extends Vec<XcmV3Instruction> {}

  /** @name XcmV3Instruction (380) */
  interface XcmV3Instruction extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: XcmV3MultiassetMultiAssets;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: XcmV3MultiassetMultiAssets;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: XcmV3MultiassetMultiAssets;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: XcmV3Response;
      readonly maxWeight: SpWeightsWeightV2Weight;
      readonly querier: Option<XcmV3MultiLocation>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: XcmV3MultiassetMultiAssets;
      readonly beneficiary: XcmV3MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: XcmV3MultiassetMultiAssets;
      readonly dest: XcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originKind: XcmV2OriginKind;
      readonly requireWeightAtMost: SpWeightsWeightV2Weight;
      readonly call: XcmDoubleEncoded;
    } & Struct;
    readonly isHrmpNewChannelOpenRequest: boolean;
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>;
      readonly maxMessageSize: Compact<u32>;
      readonly maxCapacity: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelAccepted: boolean;
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelClosing: boolean;
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>;
      readonly sender: Compact<u32>;
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isClearOrigin: boolean;
    readonly isDescendOrigin: boolean;
    readonly asDescendOrigin: XcmV3Junctions;
    readonly isReportError: boolean;
    readonly asReportError: XcmV3QueryResponseInfo;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly beneficiary: XcmV3MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly dest: XcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: XcmV3MultiassetMultiAssetFilter;
      readonly want: XcmV3MultiassetMultiAssets;
      readonly maximal: bool;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly reserve: XcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly dest: XcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isReportHolding: boolean;
    readonly asReportHolding: {
      readonly responseInfo: XcmV3QueryResponseInfo;
      readonly assets: XcmV3MultiassetMultiAssetFilter;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: XcmV3MultiAsset;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isRefundSurplus: boolean;
    readonly isSetErrorHandler: boolean;
    readonly asSetErrorHandler: XcmV3Xcm;
    readonly isSetAppendix: boolean;
    readonly asSetAppendix: XcmV3Xcm;
    readonly isClearError: boolean;
    readonly isClaimAsset: boolean;
    readonly asClaimAsset: {
      readonly assets: XcmV3MultiassetMultiAssets;
      readonly ticket: XcmV3MultiLocation;
    } & Struct;
    readonly isTrap: boolean;
    readonly asTrap: Compact<u64>;
    readonly isSubscribeVersion: boolean;
    readonly asSubscribeVersion: {
      readonly queryId: Compact<u64>;
      readonly maxResponseWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isUnsubscribeVersion: boolean;
    readonly isBurnAsset: boolean;
    readonly asBurnAsset: XcmV3MultiassetMultiAssets;
    readonly isExpectAsset: boolean;
    readonly asExpectAsset: XcmV3MultiassetMultiAssets;
    readonly isExpectOrigin: boolean;
    readonly asExpectOrigin: Option<XcmV3MultiLocation>;
    readonly isExpectError: boolean;
    readonly asExpectError: Option<ITuple<[u32, XcmV3TraitsError]>>;
    readonly isExpectTransactStatus: boolean;
    readonly asExpectTransactStatus: XcmV3MaybeErrorCode;
    readonly isQueryPallet: boolean;
    readonly asQueryPallet: {
      readonly moduleName: Bytes;
      readonly responseInfo: XcmV3QueryResponseInfo;
    } & Struct;
    readonly isExpectPallet: boolean;
    readonly asExpectPallet: {
      readonly index: Compact<u32>;
      readonly name: Bytes;
      readonly moduleName: Bytes;
      readonly crateMajor: Compact<u32>;
      readonly minCrateMinor: Compact<u32>;
    } & Struct;
    readonly isReportTransactStatus: boolean;
    readonly asReportTransactStatus: XcmV3QueryResponseInfo;
    readonly isClearTransactStatus: boolean;
    readonly isUniversalOrigin: boolean;
    readonly asUniversalOrigin: XcmV3Junction;
    readonly isExportMessage: boolean;
    readonly asExportMessage: {
      readonly network: XcmV3JunctionNetworkId;
      readonly destination: XcmV3Junctions;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isLockAsset: boolean;
    readonly asLockAsset: {
      readonly asset: XcmV3MultiAsset;
      readonly unlocker: XcmV3MultiLocation;
    } & Struct;
    readonly isUnlockAsset: boolean;
    readonly asUnlockAsset: {
      readonly asset: XcmV3MultiAsset;
      readonly target: XcmV3MultiLocation;
    } & Struct;
    readonly isNoteUnlockable: boolean;
    readonly asNoteUnlockable: {
      readonly asset: XcmV3MultiAsset;
      readonly owner: XcmV3MultiLocation;
    } & Struct;
    readonly isRequestUnlock: boolean;
    readonly asRequestUnlock: {
      readonly asset: XcmV3MultiAsset;
      readonly locker: XcmV3MultiLocation;
    } & Struct;
    readonly isSetFeesMode: boolean;
    readonly asSetFeesMode: {
      readonly jitWithdraw: bool;
    } & Struct;
    readonly isSetTopic: boolean;
    readonly asSetTopic: U8aFixed;
    readonly isClearTopic: boolean;
    readonly isAliasOrigin: boolean;
    readonly asAliasOrigin: XcmV3MultiLocation;
    readonly isUnpaidExecution: boolean;
    readonly asUnpaidExecution: {
      readonly weightLimit: XcmV3WeightLimit;
      readonly checkOrigin: Option<XcmV3MultiLocation>;
    } & Struct;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'ReportHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion' | 'BurnAsset' | 'ExpectAsset' | 'ExpectOrigin' | 'ExpectError' | 'ExpectTransactStatus' | 'QueryPallet' | 'ExpectPallet' | 'ReportTransactStatus' | 'ClearTransactStatus' | 'UniversalOrigin' | 'ExportMessage' | 'LockAsset' | 'UnlockAsset' | 'NoteUnlockable' | 'RequestUnlock' | 'SetFeesMode' | 'SetTopic' | 'ClearTopic' | 'AliasOrigin' | 'UnpaidExecution';
  }

  /** @name XcmV3MultiassetMultiAssets (381) */
  interface XcmV3MultiassetMultiAssets extends Vec<XcmV3MultiAsset> {}

  /** @name XcmV3MultiAsset (383) */
  interface XcmV3MultiAsset extends Struct {
    readonly id: XcmV3MultiassetAssetId;
    readonly fun: XcmV3MultiassetFungibility;
  }

  /** @name XcmV3MultiassetAssetId (384) */
  interface XcmV3MultiassetAssetId extends Enum {
    readonly isConcrete: boolean;
    readonly asConcrete: XcmV3MultiLocation;
    readonly isAbstract: boolean;
    readonly asAbstract: U8aFixed;
    readonly type: 'Concrete' | 'Abstract';
  }

  /** @name XcmV3MultiassetFungibility (385) */
  interface XcmV3MultiassetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: XcmV3MultiassetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV3MultiassetAssetInstance (386) */
  interface XcmV3MultiassetAssetInstance extends Enum {
    readonly isUndefined: boolean;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u128>;
    readonly isArray4: boolean;
    readonly asArray4: U8aFixed;
    readonly isArray8: boolean;
    readonly asArray8: U8aFixed;
    readonly isArray16: boolean;
    readonly asArray16: U8aFixed;
    readonly isArray32: boolean;
    readonly asArray32: U8aFixed;
    readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32';
  }

  /** @name XcmV3Response (387) */
  interface XcmV3Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: XcmV3MultiassetMultiAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, XcmV3TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly isPalletsInfo: boolean;
    readonly asPalletsInfo: Vec<XcmV3PalletInfo>;
    readonly isDispatchResult: boolean;
    readonly asDispatchResult: XcmV3MaybeErrorCode;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version' | 'PalletsInfo' | 'DispatchResult';
  }

  /** @name XcmV3TraitsError (390) */
  interface XcmV3TraitsError extends Enum {
    readonly isOverflow: boolean;
    readonly isUnimplemented: boolean;
    readonly isUntrustedReserveLocation: boolean;
    readonly isUntrustedTeleportLocation: boolean;
    readonly isLocationFull: boolean;
    readonly isLocationNotInvertible: boolean;
    readonly isBadOrigin: boolean;
    readonly isInvalidLocation: boolean;
    readonly isAssetNotFound: boolean;
    readonly isFailedToTransactAsset: boolean;
    readonly isNotWithdrawable: boolean;
    readonly isLocationCannotHold: boolean;
    readonly isExceedsMaxMessageSize: boolean;
    readonly isDestinationUnsupported: boolean;
    readonly isTransport: boolean;
    readonly isUnroutable: boolean;
    readonly isUnknownClaim: boolean;
    readonly isFailedToDecode: boolean;
    readonly isMaxWeightInvalid: boolean;
    readonly isNotHoldingFees: boolean;
    readonly isTooExpensive: boolean;
    readonly isTrap: boolean;
    readonly asTrap: u64;
    readonly isExpectationFalse: boolean;
    readonly isPalletNotFound: boolean;
    readonly isNameMismatch: boolean;
    readonly isVersionIncompatible: boolean;
    readonly isHoldingWouldOverflow: boolean;
    readonly isExportError: boolean;
    readonly isReanchorFailed: boolean;
    readonly isNoDeal: boolean;
    readonly isFeesNotMet: boolean;
    readonly isLockError: boolean;
    readonly isNoPermission: boolean;
    readonly isUnanchored: boolean;
    readonly isNotDepositable: boolean;
    readonly isUnhandledXcmVersion: boolean;
    readonly isWeightLimitReached: boolean;
    readonly asWeightLimitReached: SpWeightsWeightV2Weight;
    readonly isBarrier: boolean;
    readonly isWeightNotComputable: boolean;
    readonly isExceedsStackLimit: boolean;
    readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'LocationFull' | 'LocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'ExpectationFalse' | 'PalletNotFound' | 'NameMismatch' | 'VersionIncompatible' | 'HoldingWouldOverflow' | 'ExportError' | 'ReanchorFailed' | 'NoDeal' | 'FeesNotMet' | 'LockError' | 'NoPermission' | 'Unanchored' | 'NotDepositable' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable' | 'ExceedsStackLimit';
  }

  /** @name XcmV3PalletInfo (392) */
  interface XcmV3PalletInfo extends Struct {
    readonly index: Compact<u32>;
    readonly name: Bytes;
    readonly moduleName: Bytes;
    readonly major: Compact<u32>;
    readonly minor: Compact<u32>;
    readonly patch: Compact<u32>;
  }

  /** @name XcmV3MaybeErrorCode (395) */
  interface XcmV3MaybeErrorCode extends Enum {
    readonly isSuccess: boolean;
    readonly isError: boolean;
    readonly asError: Bytes;
    readonly isTruncatedError: boolean;
    readonly asTruncatedError: Bytes;
    readonly type: 'Success' | 'Error' | 'TruncatedError';
  }

  /** @name XcmV3QueryResponseInfo (398) */
  interface XcmV3QueryResponseInfo extends Struct {
    readonly destination: XcmV3MultiLocation;
    readonly queryId: Compact<u64>;
    readonly maxWeight: SpWeightsWeightV2Weight;
  }

  /** @name XcmV3MultiassetMultiAssetFilter (399) */
  interface XcmV3MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: XcmV3MultiassetMultiAssets;
    readonly isWild: boolean;
    readonly asWild: XcmV3MultiassetWildMultiAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name XcmV3MultiassetWildMultiAsset (400) */
  interface XcmV3MultiassetWildMultiAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: XcmV3MultiassetAssetId;
      readonly fun: XcmV3MultiassetWildFungibility;
    } & Struct;
    readonly isAllCounted: boolean;
    readonly asAllCounted: Compact<u32>;
    readonly isAllOfCounted: boolean;
    readonly asAllOfCounted: {
      readonly id: XcmV3MultiassetAssetId;
      readonly fun: XcmV3MultiassetWildFungibility;
      readonly count: Compact<u32>;
    } & Struct;
    readonly type: 'All' | 'AllOf' | 'AllCounted' | 'AllOfCounted';
  }

  /** @name XcmV3MultiassetWildFungibility (401) */
  interface XcmV3MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV3WeightLimit (402) */
  interface XcmV3WeightLimit extends Enum {
    readonly isUnlimited: boolean;
    readonly isLimited: boolean;
    readonly asLimited: SpWeightsWeightV2Weight;
    readonly type: 'Unlimited' | 'Limited';
  }

  /** @name XcmVersionedMultiAssets (403) */
  interface XcmVersionedMultiAssets extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2MultiassetMultiAssets;
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiassetMultiAssets;
    readonly type: 'V2' | 'V3';
  }

  /** @name PolkadotRuntimeParachainsInclusionAggregateMessageOrigin (413) */
  interface PolkadotRuntimeParachainsInclusionAggregateMessageOrigin extends Enum {
    readonly isUmp: boolean;
    readonly asUmp: PolkadotRuntimeParachainsInclusionUmpQueueId;
    readonly type: 'Ump';
  }

  /** @name PolkadotRuntimeParachainsInclusionUmpQueueId (414) */
  interface PolkadotRuntimeParachainsInclusionUmpQueueId extends Enum {
    readonly isPara: boolean;
    readonly asPara: u32;
    readonly type: 'Para';
  }

  /** @name PolkadotRuntimeCommonClaimsPalletEvent (422) */
  interface PolkadotRuntimeCommonClaimsPalletEvent extends Enum {
    readonly isClaimed: boolean;
    readonly asClaimed: {
      readonly who: AccountId32;
      readonly ethereumAddress: EthereumAddress;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Claimed';
  }

  /** @name PolkadotRuntimeParachainsInclusionPalletEvent (437) */
  interface PolkadotRuntimeParachainsInclusionPalletEvent extends Enum {
    readonly isCandidateBacked: boolean;
    readonly asCandidateBacked: ITuple<[PolkadotPrimitivesV5CandidateReceipt, Bytes, u32, u32]>;
    readonly isCandidateIncluded: boolean;
    readonly asCandidateIncluded: ITuple<[PolkadotPrimitivesV5CandidateReceipt, Bytes, u32, u32]>;
    readonly isCandidateTimedOut: boolean;
    readonly asCandidateTimedOut: ITuple<[PolkadotPrimitivesV5CandidateReceipt, Bytes, u32]>;
    readonly isUpwardMessagesReceived: boolean;
    readonly asUpwardMessagesReceived: {
      readonly from: u32;
      readonly count: u32;
    } & Struct;
    readonly type: 'CandidateBacked' | 'CandidateIncluded' | 'CandidateTimedOut' | 'UpwardMessagesReceived';
  }

  /** @name PolkadotPrimitivesV5CandidateReceipt (438) */
  interface PolkadotPrimitivesV5CandidateReceipt extends Struct {
    readonly descriptor: PolkadotPrimitivesV5CandidateDescriptor;
    readonly commitmentsHash: H256;
  }

  /** @name PolkadotRuntimeParachainsParasPalletEvent (441) */
  interface PolkadotRuntimeParachainsParasPalletEvent extends Enum {
    readonly isCurrentCodeUpdated: boolean;
    readonly asCurrentCodeUpdated: u32;
    readonly isCurrentHeadUpdated: boolean;
    readonly asCurrentHeadUpdated: u32;
    readonly isCodeUpgradeScheduled: boolean;
    readonly asCodeUpgradeScheduled: u32;
    readonly isNewHeadNoted: boolean;
    readonly asNewHeadNoted: u32;
    readonly isActionQueued: boolean;
    readonly asActionQueued: ITuple<[u32, u32]>;
    readonly isPvfCheckStarted: boolean;
    readonly asPvfCheckStarted: ITuple<[H256, u32]>;
    readonly isPvfCheckAccepted: boolean;
    readonly asPvfCheckAccepted: ITuple<[H256, u32]>;
    readonly isPvfCheckRejected: boolean;
    readonly asPvfCheckRejected: ITuple<[H256, u32]>;
    readonly type: 'CurrentCodeUpdated' | 'CurrentHeadUpdated' | 'CodeUpgradeScheduled' | 'NewHeadNoted' | 'ActionQueued' | 'PvfCheckStarted' | 'PvfCheckAccepted' | 'PvfCheckRejected';
  }

  /** @name PolkadotRuntimeParachainsHrmpPalletEvent (442) */
  interface PolkadotRuntimeParachainsHrmpPalletEvent extends Enum {
    readonly isOpenChannelRequested: boolean;
    readonly asOpenChannelRequested: ITuple<[u32, u32, u32, u32]>;
    readonly isOpenChannelCanceled: boolean;
    readonly asOpenChannelCanceled: ITuple<[u32, PolkadotParachainPrimitivesHrmpChannelId]>;
    readonly isOpenChannelAccepted: boolean;
    readonly asOpenChannelAccepted: ITuple<[u32, u32]>;
    readonly isChannelClosed: boolean;
    readonly asChannelClosed: ITuple<[u32, PolkadotParachainPrimitivesHrmpChannelId]>;
    readonly isHrmpChannelForceOpened: boolean;
    readonly asHrmpChannelForceOpened: ITuple<[u32, u32, u32, u32]>;
    readonly type: 'OpenChannelRequested' | 'OpenChannelCanceled' | 'OpenChannelAccepted' | 'ChannelClosed' | 'HrmpChannelForceOpened';
  }

  /** @name PolkadotRuntimeParachainsDisputesPalletEvent (443) */
  interface PolkadotRuntimeParachainsDisputesPalletEvent extends Enum {
    readonly isDisputeInitiated: boolean;
    readonly asDisputeInitiated: ITuple<[H256, PolkadotRuntimeParachainsDisputesDisputeLocation]>;
    readonly isDisputeConcluded: boolean;
    readonly asDisputeConcluded: ITuple<[H256, PolkadotRuntimeParachainsDisputesDisputeResult]>;
    readonly isRevert: boolean;
    readonly asRevert: u32;
    readonly type: 'DisputeInitiated' | 'DisputeConcluded' | 'Revert';
  }

  /** @name PolkadotRuntimeParachainsDisputesDisputeLocation (444) */
  interface PolkadotRuntimeParachainsDisputesDisputeLocation extends Enum {
    readonly isLocal: boolean;
    readonly isRemote: boolean;
    readonly type: 'Local' | 'Remote';
  }

  /** @name PolkadotRuntimeParachainsDisputesDisputeResult (445) */
  interface PolkadotRuntimeParachainsDisputesDisputeResult extends Enum {
    readonly isValid: boolean;
    readonly isInvalid: boolean;
    readonly type: 'Valid' | 'Invalid';
  }

  /** @name PolkadotRuntimeCommonParasRegistrarPalletEvent (446) */
  interface PolkadotRuntimeCommonParasRegistrarPalletEvent extends Enum {
    readonly isRegistered: boolean;
    readonly asRegistered: {
      readonly paraId: u32;
      readonly manager: AccountId32;
    } & Struct;
    readonly isDeregistered: boolean;
    readonly asDeregistered: {
      readonly paraId: u32;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly paraId: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly isSwapped: boolean;
    readonly asSwapped: {
      readonly paraId: u32;
      readonly otherId: u32;
    } & Struct;
    readonly type: 'Registered' | 'Deregistered' | 'Reserved' | 'Swapped';
  }

  /** @name PolkadotRuntimeCommonSlotsPalletEvent (447) */
  interface PolkadotRuntimeCommonSlotsPalletEvent extends Enum {
    readonly isNewLeasePeriod: boolean;
    readonly asNewLeasePeriod: {
      readonly leasePeriod: u32;
    } & Struct;
    readonly isLeased: boolean;
    readonly asLeased: {
      readonly paraId: u32;
      readonly leaser: AccountId32;
      readonly periodBegin: u32;
      readonly periodCount: u32;
      readonly extraReserved: u128;
      readonly totalAmount: u128;
    } & Struct;
    readonly type: 'NewLeasePeriod' | 'Leased';
  }

  /** @name PolkadotRuntimeCommonAuctionsPalletEvent (448) */
  interface PolkadotRuntimeCommonAuctionsPalletEvent extends Enum {
    readonly isAuctionStarted: boolean;
    readonly asAuctionStarted: {
      readonly auctionIndex: u32;
      readonly leasePeriod: u32;
      readonly ending: u32;
    } & Struct;
    readonly isAuctionClosed: boolean;
    readonly asAuctionClosed: {
      readonly auctionIndex: u32;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly bidder: AccountId32;
      readonly extraReserved: u128;
      readonly totalAmount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly bidder: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveConfiscated: boolean;
    readonly asReserveConfiscated: {
      readonly paraId: u32;
      readonly leaser: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBidAccepted: boolean;
    readonly asBidAccepted: {
      readonly bidder: AccountId32;
      readonly paraId: u32;
      readonly amount: u128;
      readonly firstSlot: u32;
      readonly lastSlot: u32;
    } & Struct;
    readonly isWinningOffset: boolean;
    readonly asWinningOffset: {
      readonly auctionIndex: u32;
      readonly blockNumber: u32;
    } & Struct;
    readonly type: 'AuctionStarted' | 'AuctionClosed' | 'Reserved' | 'Unreserved' | 'ReserveConfiscated' | 'BidAccepted' | 'WinningOffset';
  }

  /** @name PolkadotRuntimeCommonCrowdloanPalletEvent (449) */
  interface PolkadotRuntimeCommonCrowdloanPalletEvent extends Enum {
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly paraId: u32;
    } & Struct;
    readonly isContributed: boolean;
    readonly asContributed: {
      readonly who: AccountId32;
      readonly fundIndex: u32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrew: boolean;
    readonly asWithdrew: {
      readonly who: AccountId32;
      readonly fundIndex: u32;
      readonly amount: u128;
    } & Struct;
    readonly isPartiallyRefunded: boolean;
    readonly asPartiallyRefunded: {
      readonly paraId: u32;
    } & Struct;
    readonly isAllRefunded: boolean;
    readonly asAllRefunded: {
      readonly paraId: u32;
    } & Struct;
    readonly isDissolved: boolean;
    readonly asDissolved: {
      readonly paraId: u32;
    } & Struct;
    readonly isHandleBidResult: boolean;
    readonly asHandleBidResult: {
      readonly paraId: u32;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isEdited: boolean;
    readonly asEdited: {
      readonly paraId: u32;
    } & Struct;
    readonly isMemoUpdated: boolean;
    readonly asMemoUpdated: {
      readonly who: AccountId32;
      readonly paraId: u32;
      readonly memo: Bytes;
    } & Struct;
    readonly isAddedToNewRaise: boolean;
    readonly asAddedToNewRaise: {
      readonly paraId: u32;
    } & Struct;
    readonly type: 'Created' | 'Contributed' | 'Withdrew' | 'PartiallyRefunded' | 'AllRefunded' | 'Dissolved' | 'HandleBidResult' | 'Edited' | 'MemoUpdated' | 'AddedToNewRaise';
  }

  /** @name PalletXcmEvent (450) */
  interface PalletXcmEvent extends Enum {
    readonly isAttempted: boolean;
    readonly asAttempted: {
      readonly outcome: XcmV3TraitsOutcome;
    } & Struct;
    readonly isSent: boolean;
    readonly asSent: {
      readonly origin: XcmV3MultiLocation;
      readonly destination: XcmV3MultiLocation;
      readonly message: XcmV3Xcm;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isUnexpectedResponse: boolean;
    readonly asUnexpectedResponse: {
      readonly origin: XcmV3MultiLocation;
      readonly queryId: u64;
    } & Struct;
    readonly isResponseReady: boolean;
    readonly asResponseReady: {
      readonly queryId: u64;
      readonly response: XcmV3Response;
    } & Struct;
    readonly isNotified: boolean;
    readonly asNotified: {
      readonly queryId: u64;
      readonly palletIndex: u8;
      readonly callIndex: u8;
    } & Struct;
    readonly isNotifyOverweight: boolean;
    readonly asNotifyOverweight: {
      readonly queryId: u64;
      readonly palletIndex: u8;
      readonly callIndex: u8;
      readonly actualWeight: SpWeightsWeightV2Weight;
      readonly maxBudgetedWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isNotifyDispatchError: boolean;
    readonly asNotifyDispatchError: {
      readonly queryId: u64;
      readonly palletIndex: u8;
      readonly callIndex: u8;
    } & Struct;
    readonly isNotifyDecodeFailed: boolean;
    readonly asNotifyDecodeFailed: {
      readonly queryId: u64;
      readonly palletIndex: u8;
      readonly callIndex: u8;
    } & Struct;
    readonly isInvalidResponder: boolean;
    readonly asInvalidResponder: {
      readonly origin: XcmV3MultiLocation;
      readonly queryId: u64;
      readonly expectedLocation: Option<XcmV3MultiLocation>;
    } & Struct;
    readonly isInvalidResponderVersion: boolean;
    readonly asInvalidResponderVersion: {
      readonly origin: XcmV3MultiLocation;
      readonly queryId: u64;
    } & Struct;
    readonly isResponseTaken: boolean;
    readonly asResponseTaken: {
      readonly queryId: u64;
    } & Struct;
    readonly isAssetsTrapped: boolean;
    readonly asAssetsTrapped: {
      readonly hash_: H256;
      readonly origin: XcmV3MultiLocation;
      readonly assets: XcmVersionedMultiAssets;
    } & Struct;
    readonly isVersionChangeNotified: boolean;
    readonly asVersionChangeNotified: {
      readonly destination: XcmV3MultiLocation;
      readonly result: u32;
      readonly cost: XcmV3MultiassetMultiAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isSupportedVersionChanged: boolean;
    readonly asSupportedVersionChanged: {
      readonly location: XcmV3MultiLocation;
      readonly version: u32;
    } & Struct;
    readonly isNotifyTargetSendFail: boolean;
    readonly asNotifyTargetSendFail: {
      readonly location: XcmV3MultiLocation;
      readonly queryId: u64;
      readonly error: XcmV3TraitsError;
    } & Struct;
    readonly isNotifyTargetMigrationFail: boolean;
    readonly asNotifyTargetMigrationFail: {
      readonly location: XcmVersionedMultiLocation;
      readonly queryId: u64;
    } & Struct;
    readonly isInvalidQuerierVersion: boolean;
    readonly asInvalidQuerierVersion: {
      readonly origin: XcmV3MultiLocation;
      readonly queryId: u64;
    } & Struct;
    readonly isInvalidQuerier: boolean;
    readonly asInvalidQuerier: {
      readonly origin: XcmV3MultiLocation;
      readonly queryId: u64;
      readonly expectedQuerier: XcmV3MultiLocation;
      readonly maybeActualQuerier: Option<XcmV3MultiLocation>;
    } & Struct;
    readonly isVersionNotifyStarted: boolean;
    readonly asVersionNotifyStarted: {
      readonly destination: XcmV3MultiLocation;
      readonly cost: XcmV3MultiassetMultiAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isVersionNotifyRequested: boolean;
    readonly asVersionNotifyRequested: {
      readonly destination: XcmV3MultiLocation;
      readonly cost: XcmV3MultiassetMultiAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isVersionNotifyUnrequested: boolean;
    readonly asVersionNotifyUnrequested: {
      readonly destination: XcmV3MultiLocation;
      readonly cost: XcmV3MultiassetMultiAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isFeesPaid: boolean;
    readonly asFeesPaid: {
      readonly paying: XcmV3MultiLocation;
      readonly fees: XcmV3MultiassetMultiAssets;
    } & Struct;
    readonly isAssetsClaimed: boolean;
    readonly asAssetsClaimed: {
      readonly hash_: H256;
      readonly origin: XcmV3MultiLocation;
      readonly assets: XcmVersionedMultiAssets;
    } & Struct;
    readonly type: 'Attempted' | 'Sent' | 'UnexpectedResponse' | 'ResponseReady' | 'Notified' | 'NotifyOverweight' | 'NotifyDispatchError' | 'NotifyDecodeFailed' | 'InvalidResponder' | 'InvalidResponderVersion' | 'ResponseTaken' | 'AssetsTrapped' | 'VersionChangeNotified' | 'SupportedVersionChanged' | 'NotifyTargetSendFail' | 'NotifyTargetMigrationFail' | 'InvalidQuerierVersion' | 'InvalidQuerier' | 'VersionNotifyStarted' | 'VersionNotifyRequested' | 'VersionNotifyUnrequested' | 'FeesPaid' | 'AssetsClaimed';
  }

  /** @name XcmV3TraitsOutcome (451) */
  interface XcmV3TraitsOutcome extends Enum {
    readonly isComplete: boolean;
    readonly asComplete: SpWeightsWeightV2Weight;
    readonly isIncomplete: boolean;
    readonly asIncomplete: ITuple<[SpWeightsWeightV2Weight, XcmV3TraitsError]>;
    readonly isError: boolean;
    readonly asError: XcmV3TraitsError;
    readonly type: 'Complete' | 'Incomplete' | 'Error';
  }

  /** @name PolkadotRuntimeRuntimeHoldReason (507) */
  type PolkadotRuntimeRuntimeHoldReason = Null;

  /** @name PalletBalancesIdAmount (510) */
  interface PalletBalancesIdAmount extends Struct {
    readonly id: Null;
    readonly amount: u128;
  }

  /** @name PalletReferendaReferendumInfo (570) */
  interface PalletReferendaReferendumInfo extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: PalletReferendaReferendumStatus;
    readonly isApproved: boolean;
    readonly asApproved: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isRejected: boolean;
    readonly asRejected: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isCancelled: boolean;
    readonly asCancelled: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isTimedOut: boolean;
    readonly asTimedOut: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isKilled: boolean;
    readonly asKilled: u32;
    readonly type: 'Ongoing' | 'Approved' | 'Rejected' | 'Cancelled' | 'TimedOut' | 'Killed';
  }

  /** @name PalletReferendaReferendumStatus (571) */
  interface PalletReferendaReferendumStatus extends Struct {
    readonly track: u16;
    readonly origin: PolkadotRuntimeOriginCaller;
    readonly proposal: FrameSupportPreimagesBounded;
    readonly enactment: FrameSupportScheduleDispatchTime;
    readonly submitted: u32;
    readonly submissionDeposit: PalletReferendaDeposit;
    readonly decisionDeposit: Option<PalletReferendaDeposit>;
    readonly deciding: Option<PalletReferendaDecidingStatus>;
    readonly tally: PalletConvictionVotingTally;
    readonly inQueue: bool;
    readonly alarm: Option<ITuple<[u32, ITuple<[u32, u32]>]>>;
  }

  /** @name PolkadotRuntimeCommonClaimsPalletError (589) */
  interface PolkadotRuntimeCommonClaimsPalletError extends Enum {
    readonly isInvalidEthereumSignature: boolean;
    readonly isSignerHasNoClaim: boolean;
    readonly isSenderHasNoClaim: boolean;
    readonly isPotUnderflow: boolean;
    readonly isInvalidStatement: boolean;
    readonly isVestedBalanceExists: boolean;
    readonly type: 'InvalidEthereumSignature' | 'SignerHasNoClaim' | 'SenderHasNoClaim' | 'PotUnderflow' | 'InvalidStatement' | 'VestedBalanceExists';
  }

  /** @name PolkadotRuntimeParachainsConfigurationHostConfiguration (663) */
  interface PolkadotRuntimeParachainsConfigurationHostConfiguration extends Struct {
    readonly maxCodeSize: u32;
    readonly maxHeadDataSize: u32;
    readonly maxUpwardQueueCount: u32;
    readonly maxUpwardQueueSize: u32;
    readonly maxUpwardMessageSize: u32;
    readonly maxUpwardMessageNumPerCandidate: u32;
    readonly hrmpMaxMessageNumPerCandidate: u32;
    readonly validationUpgradeCooldown: u32;
    readonly validationUpgradeDelay: u32;
    readonly asyncBackingParams: PolkadotPrimitivesVstagingAsyncBackingParams;
    readonly maxPovSize: u32;
    readonly maxDownwardMessageSize: u32;
    readonly hrmpMaxParachainOutboundChannels: u32;
    readonly hrmpSenderDeposit: u128;
    readonly hrmpRecipientDeposit: u128;
    readonly hrmpChannelMaxCapacity: u32;
    readonly hrmpChannelMaxTotalSize: u32;
    readonly hrmpMaxParachainInboundChannels: u32;
    readonly hrmpChannelMaxMessageSize: u32;
    readonly executorParams: PolkadotPrimitivesV5ExecutorParams;
    readonly codeRetentionPeriod: u32;
    readonly onDemandCores: u32;
    readonly onDemandRetries: u32;
    readonly onDemandQueueMaxSize: u32;
    readonly onDemandTargetQueueUtilization: Perbill;
    readonly onDemandFeeVariability: Perbill;
    readonly onDemandBaseFee: u128;
    readonly onDemandTtl: u32;
    readonly groupRotationFrequency: u32;
    readonly parasAvailabilityPeriod: u32;
    readonly schedulingLookahead: u32;
    readonly maxValidatorsPerCore: Option<u32>;
    readonly maxValidators: Option<u32>;
    readonly disputePeriod: u32;
    readonly disputePostConclusionAcceptancePeriod: u32;
    readonly noShowSlots: u32;
    readonly nDelayTranches: u32;
    readonly zerothDelayTrancheWidth: u32;
    readonly neededApprovals: u32;
    readonly relayVrfModuloSamples: u32;
    readonly pvfVotingTtl: u32;
    readonly minimumValidationUpgradeDelay: u32;
  }

  /** @name PolkadotRuntimeParachainsConfigurationPalletError (666) */
  interface PolkadotRuntimeParachainsConfigurationPalletError extends Enum {
    readonly isInvalidNewValue: boolean;
    readonly type: 'InvalidNewValue';
  }

  /** @name PolkadotRuntimeParachainsSharedAllowedRelayParentsTracker (669) */
  interface PolkadotRuntimeParachainsSharedAllowedRelayParentsTracker extends Struct {
    readonly buffer: Vec<ITuple<[H256, H256]>>;
    readonly latestNumber: u32;
  }

  /** @name PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord (672) */
  interface PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord extends Struct {
    readonly bitfield: BitVec;
    readonly submittedAt: u32;
  }

  /** @name PolkadotRuntimeParachainsInclusionCandidatePendingAvailability (673) */
  interface PolkadotRuntimeParachainsInclusionCandidatePendingAvailability extends Struct {
    readonly core: u32;
    readonly hash_: H256;
    readonly descriptor: PolkadotPrimitivesV5CandidateDescriptor;
    readonly availabilityVotes: BitVec;
    readonly backers: BitVec;
    readonly relayParentNumber: u32;
    readonly backedInNumber: u32;
    readonly backingGroup: u32;
  }

  /** @name PolkadotRuntimeParachainsInclusionPalletError (674) */
  interface PolkadotRuntimeParachainsInclusionPalletError extends Enum {
    readonly isUnsortedOrDuplicateValidatorIndices: boolean;
    readonly isUnsortedOrDuplicateDisputeStatementSet: boolean;
    readonly isUnsortedOrDuplicateBackedCandidates: boolean;
    readonly isUnexpectedRelayParent: boolean;
    readonly isWrongBitfieldSize: boolean;
    readonly isBitfieldAllZeros: boolean;
    readonly isBitfieldDuplicateOrUnordered: boolean;
    readonly isValidatorIndexOutOfBounds: boolean;
    readonly isInvalidBitfieldSignature: boolean;
    readonly isUnscheduledCandidate: boolean;
    readonly isCandidateScheduledBeforeParaFree: boolean;
    readonly isScheduledOutOfOrder: boolean;
    readonly isHeadDataTooLarge: boolean;
    readonly isPrematureCodeUpgrade: boolean;
    readonly isNewCodeTooLarge: boolean;
    readonly isDisallowedRelayParent: boolean;
    readonly isInvalidAssignment: boolean;
    readonly isInvalidGroupIndex: boolean;
    readonly isInsufficientBacking: boolean;
    readonly isInvalidBacking: boolean;
    readonly isNotCollatorSigned: boolean;
    readonly isValidationDataHashMismatch: boolean;
    readonly isIncorrectDownwardMessageHandling: boolean;
    readonly isInvalidUpwardMessages: boolean;
    readonly isHrmpWatermarkMishandling: boolean;
    readonly isInvalidOutboundHrmp: boolean;
    readonly isInvalidValidationCodeHash: boolean;
    readonly isParaHeadMismatch: boolean;
    readonly isBitfieldReferencesFreedCore: boolean;
    readonly type: 'UnsortedOrDuplicateValidatorIndices' | 'UnsortedOrDuplicateDisputeStatementSet' | 'UnsortedOrDuplicateBackedCandidates' | 'UnexpectedRelayParent' | 'WrongBitfieldSize' | 'BitfieldAllZeros' | 'BitfieldDuplicateOrUnordered' | 'ValidatorIndexOutOfBounds' | 'InvalidBitfieldSignature' | 'UnscheduledCandidate' | 'CandidateScheduledBeforeParaFree' | 'ScheduledOutOfOrder' | 'HeadDataTooLarge' | 'PrematureCodeUpgrade' | 'NewCodeTooLarge' | 'DisallowedRelayParent' | 'InvalidAssignment' | 'InvalidGroupIndex' | 'InsufficientBacking' | 'InvalidBacking' | 'NotCollatorSigned' | 'ValidationDataHashMismatch' | 'IncorrectDownwardMessageHandling' | 'InvalidUpwardMessages' | 'HrmpWatermarkMishandling' | 'InvalidOutboundHrmp' | 'InvalidValidationCodeHash' | 'ParaHeadMismatch' | 'BitfieldReferencesFreedCore';
  }

  /** @name PolkadotPrimitivesV5ScrapedOnChainVotes (675) */
  interface PolkadotPrimitivesV5ScrapedOnChainVotes extends Struct {
    readonly session: u32;
    readonly backingValidatorsPerCandidate: Vec<ITuple<[PolkadotPrimitivesV5CandidateReceipt, Vec<ITuple<[u32, PolkadotPrimitivesV5ValidityAttestation]>>]>>;
    readonly disputes: Vec<PolkadotPrimitivesV5DisputeStatementSet>;
  }

  /** @name PolkadotRuntimeParachainsParasInherentPalletError (680) */
  interface PolkadotRuntimeParachainsParasInherentPalletError extends Enum {
    readonly isTooManyInclusionInherents: boolean;
    readonly isInvalidParentHeader: boolean;
    readonly isCandidateConcludedInvalid: boolean;
    readonly isInherentOverweight: boolean;
    readonly isDisputeStatementsUnsortedOrDuplicates: boolean;
    readonly isDisputeInvalid: boolean;
    readonly type: 'TooManyInclusionInherents' | 'InvalidParentHeader' | 'CandidateConcludedInvalid' | 'InherentOverweight' | 'DisputeStatementsUnsortedOrDuplicates' | 'DisputeInvalid';
  }

  /** @name PolkadotPrimitivesV5CoreOccupied (683) */
  interface PolkadotPrimitivesV5CoreOccupied extends Enum {
    readonly isFree: boolean;
    readonly isParas: boolean;
    readonly asParas: PolkadotPrimitivesV5ParasEntry;
    readonly type: 'Free' | 'Paras';
  }

  /** @name PolkadotPrimitivesV5ParasEntry (684) */
  interface PolkadotPrimitivesV5ParasEntry extends Struct {
    readonly assignment: PolkadotPrimitivesV5Assignment;
    readonly availabilityTimeouts: u32;
    readonly ttl: u32;
  }

  /** @name PolkadotPrimitivesV5Assignment (685) */
  interface PolkadotPrimitivesV5Assignment extends Struct {
    readonly paraId: u32;
  }

  /** @name PolkadotRuntimeParachainsParasPvfCheckActiveVoteState (691) */
  interface PolkadotRuntimeParachainsParasPvfCheckActiveVoteState extends Struct {
    readonly votesAccept: BitVec;
    readonly votesReject: BitVec;
    readonly age: u32;
    readonly createdAt: u32;
    readonly causes: Vec<PolkadotRuntimeParachainsParasPvfCheckCause>;
  }

  /** @name PolkadotRuntimeParachainsParasPvfCheckCause (693) */
  interface PolkadotRuntimeParachainsParasPvfCheckCause extends Enum {
    readonly isOnboarding: boolean;
    readonly asOnboarding: u32;
    readonly isUpgrade: boolean;
    readonly asUpgrade: {
      readonly id: u32;
      readonly includedAt: u32;
    } & Struct;
    readonly type: 'Onboarding' | 'Upgrade';
  }

  /** @name PolkadotRuntimeParachainsParasParaLifecycle (696) */
  interface PolkadotRuntimeParachainsParasParaLifecycle extends Enum {
    readonly isOnboarding: boolean;
    readonly isParathread: boolean;
    readonly isParachain: boolean;
    readonly isUpgradingParathread: boolean;
    readonly isDowngradingParachain: boolean;
    readonly isOffboardingParathread: boolean;
    readonly isOffboardingParachain: boolean;
    readonly type: 'Onboarding' | 'Parathread' | 'Parachain' | 'UpgradingParathread' | 'DowngradingParachain' | 'OffboardingParathread' | 'OffboardingParachain';
  }

  /** @name PolkadotRuntimeParachainsParasParaPastCodeMeta (698) */
  interface PolkadotRuntimeParachainsParasParaPastCodeMeta extends Struct {
    readonly upgradeTimes: Vec<PolkadotRuntimeParachainsParasReplacementTimes>;
    readonly lastPruned: Option<u32>;
  }

  /** @name PolkadotRuntimeParachainsParasReplacementTimes (700) */
  interface PolkadotRuntimeParachainsParasReplacementTimes extends Struct {
    readonly expectedAt: u32;
    readonly activatedAt: u32;
  }

  /** @name PolkadotPrimitivesV5UpgradeGoAhead (702) */
  interface PolkadotPrimitivesV5UpgradeGoAhead extends Enum {
    readonly isAbort: boolean;
    readonly isGoAhead: boolean;
    readonly type: 'Abort' | 'GoAhead';
  }

  /** @name PolkadotPrimitivesV5UpgradeRestriction (703) */
  interface PolkadotPrimitivesV5UpgradeRestriction extends Enum {
    readonly isPresent: boolean;
    readonly type: 'Present';
  }

  /** @name PolkadotRuntimeParachainsParasParaGenesisArgs (704) */
  interface PolkadotRuntimeParachainsParasParaGenesisArgs extends Struct {
    readonly genesisHead: Bytes;
    readonly validationCode: Bytes;
    readonly paraKind: bool;
  }

  /** @name PolkadotRuntimeParachainsParasPalletError (705) */
  interface PolkadotRuntimeParachainsParasPalletError extends Enum {
    readonly isNotRegistered: boolean;
    readonly isCannotOnboard: boolean;
    readonly isCannotOffboard: boolean;
    readonly isCannotUpgrade: boolean;
    readonly isCannotDowngrade: boolean;
    readonly isPvfCheckStatementStale: boolean;
    readonly isPvfCheckStatementFuture: boolean;
    readonly isPvfCheckValidatorIndexOutOfBounds: boolean;
    readonly isPvfCheckInvalidSignature: boolean;
    readonly isPvfCheckDoubleVote: boolean;
    readonly isPvfCheckSubjectInvalid: boolean;
    readonly isCannotUpgradeCode: boolean;
    readonly type: 'NotRegistered' | 'CannotOnboard' | 'CannotOffboard' | 'CannotUpgrade' | 'CannotDowngrade' | 'PvfCheckStatementStale' | 'PvfCheckStatementFuture' | 'PvfCheckValidatorIndexOutOfBounds' | 'PvfCheckInvalidSignature' | 'PvfCheckDoubleVote' | 'PvfCheckSubjectInvalid' | 'CannotUpgradeCode';
  }

  /** @name PolkadotRuntimeParachainsInitializerBufferedSessionChange (707) */
  interface PolkadotRuntimeParachainsInitializerBufferedSessionChange extends Struct {
    readonly validators: Vec<PolkadotPrimitivesV5ValidatorAppPublic>;
    readonly queued: Vec<PolkadotPrimitivesV5ValidatorAppPublic>;
    readonly sessionIndex: u32;
  }

  /** @name PolkadotCorePrimitivesInboundDownwardMessage (709) */
  interface PolkadotCorePrimitivesInboundDownwardMessage extends Struct {
    readonly sentAt: u32;
    readonly msg: Bytes;
  }

  /** @name PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest (710) */
  interface PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest extends Struct {
    readonly confirmed: bool;
    readonly age: u32;
    readonly senderDeposit: u128;
    readonly maxMessageSize: u32;
    readonly maxCapacity: u32;
    readonly maxTotalSize: u32;
  }

  /** @name PolkadotRuntimeParachainsHrmpHrmpChannel (712) */
  interface PolkadotRuntimeParachainsHrmpHrmpChannel extends Struct {
    readonly maxCapacity: u32;
    readonly maxTotalSize: u32;
    readonly maxMessageSize: u32;
    readonly msgCount: u32;
    readonly totalSize: u32;
    readonly mqcHead: Option<H256>;
    readonly senderDeposit: u128;
    readonly recipientDeposit: u128;
  }

  /** @name PolkadotCorePrimitivesInboundHrmpMessage (714) */
  interface PolkadotCorePrimitivesInboundHrmpMessage extends Struct {
    readonly sentAt: u32;
    readonly data: Bytes;
  }

  /** @name PolkadotRuntimeParachainsHrmpPalletError (717) */
  interface PolkadotRuntimeParachainsHrmpPalletError extends Enum {
    readonly isOpenHrmpChannelToSelf: boolean;
    readonly isOpenHrmpChannelInvalidRecipient: boolean;
    readonly isOpenHrmpChannelZeroCapacity: boolean;
    readonly isOpenHrmpChannelCapacityExceedsLimit: boolean;
    readonly isOpenHrmpChannelZeroMessageSize: boolean;
    readonly isOpenHrmpChannelMessageSizeExceedsLimit: boolean;
    readonly isOpenHrmpChannelAlreadyExists: boolean;
    readonly isOpenHrmpChannelAlreadyRequested: boolean;
    readonly isOpenHrmpChannelLimitExceeded: boolean;
    readonly isAcceptHrmpChannelDoesntExist: boolean;
    readonly isAcceptHrmpChannelAlreadyConfirmed: boolean;
    readonly isAcceptHrmpChannelLimitExceeded: boolean;
    readonly isCloseHrmpChannelUnauthorized: boolean;
    readonly isCloseHrmpChannelDoesntExist: boolean;
    readonly isCloseHrmpChannelAlreadyUnderway: boolean;
    readonly isCancelHrmpOpenChannelUnauthorized: boolean;
    readonly isOpenHrmpChannelDoesntExist: boolean;
    readonly isOpenHrmpChannelAlreadyConfirmed: boolean;
    readonly isWrongWitness: boolean;
    readonly type: 'OpenHrmpChannelToSelf' | 'OpenHrmpChannelInvalidRecipient' | 'OpenHrmpChannelZeroCapacity' | 'OpenHrmpChannelCapacityExceedsLimit' | 'OpenHrmpChannelZeroMessageSize' | 'OpenHrmpChannelMessageSizeExceedsLimit' | 'OpenHrmpChannelAlreadyExists' | 'OpenHrmpChannelAlreadyRequested' | 'OpenHrmpChannelLimitExceeded' | 'AcceptHrmpChannelDoesntExist' | 'AcceptHrmpChannelAlreadyConfirmed' | 'AcceptHrmpChannelLimitExceeded' | 'CloseHrmpChannelUnauthorized' | 'CloseHrmpChannelDoesntExist' | 'CloseHrmpChannelAlreadyUnderway' | 'CancelHrmpOpenChannelUnauthorized' | 'OpenHrmpChannelDoesntExist' | 'OpenHrmpChannelAlreadyConfirmed' | 'WrongWitness';
  }

  /** @name PolkadotPrimitivesV5SessionInfo (719) */
  interface PolkadotPrimitivesV5SessionInfo extends Struct {
    readonly activeValidatorIndices: Vec<u32>;
    readonly randomSeed: U8aFixed;
    readonly disputePeriod: u32;
    readonly validators: PolkadotPrimitivesV5IndexedVecValidatorIndex;
    readonly discoveryKeys: Vec<SpAuthorityDiscoveryAppPublic>;
    readonly assignmentKeys: Vec<PolkadotPrimitivesV5AssignmentAppPublic>;
    readonly validatorGroups: PolkadotPrimitivesV5IndexedVecGroupIndex;
    readonly nCores: u32;
    readonly zerothDelayTrancheWidth: u32;
    readonly relayVrfModuloSamples: u32;
    readonly nDelayTranches: u32;
    readonly noShowSlots: u32;
    readonly neededApprovals: u32;
  }

  /** @name PolkadotPrimitivesV5IndexedVecValidatorIndex (720) */
  interface PolkadotPrimitivesV5IndexedVecValidatorIndex extends Vec<PolkadotPrimitivesV5ValidatorAppPublic> {}

  /** @name PolkadotPrimitivesV5IndexedVecGroupIndex (722) */
  interface PolkadotPrimitivesV5IndexedVecGroupIndex extends Vec<Vec<u32>> {}

  /** @name PolkadotPrimitivesV5DisputeState (724) */
  interface PolkadotPrimitivesV5DisputeState extends Struct {
    readonly validatorsFor: BitVec;
    readonly validatorsAgainst: BitVec;
    readonly start: u32;
    readonly concludedAt: Option<u32>;
  }

  /** @name PolkadotRuntimeParachainsDisputesPalletError (726) */
  interface PolkadotRuntimeParachainsDisputesPalletError extends Enum {
    readonly isDuplicateDisputeStatementSets: boolean;
    readonly isAncientDisputeStatement: boolean;
    readonly isValidatorIndexOutOfBounds: boolean;
    readonly isInvalidSignature: boolean;
    readonly isDuplicateStatement: boolean;
    readonly isSingleSidedDispute: boolean;
    readonly isMaliciousBacker: boolean;
    readonly isMissingBackingVotes: boolean;
    readonly isUnconfirmedDispute: boolean;
    readonly type: 'DuplicateDisputeStatementSets' | 'AncientDisputeStatement' | 'ValidatorIndexOutOfBounds' | 'InvalidSignature' | 'DuplicateStatement' | 'SingleSidedDispute' | 'MaliciousBacker' | 'MissingBackingVotes' | 'UnconfirmedDispute';
  }

  /** @name PolkadotPrimitivesV5SlashingPendingSlashes (727) */
  interface PolkadotPrimitivesV5SlashingPendingSlashes extends Struct {
    readonly keys_: BTreeMap<u32, PolkadotPrimitivesV5ValidatorAppPublic>;
    readonly kind: PolkadotPrimitivesV5SlashingSlashingOffenceKind;
  }

  /** @name PolkadotRuntimeParachainsDisputesSlashingPalletError (731) */
  interface PolkadotRuntimeParachainsDisputesSlashingPalletError extends Enum {
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isInvalidSessionIndex: boolean;
    readonly isInvalidCandidateHash: boolean;
    readonly isInvalidValidatorIndex: boolean;
    readonly isValidatorIndexIdMismatch: boolean;
    readonly isDuplicateSlashingReport: boolean;
    readonly type: 'InvalidKeyOwnershipProof' | 'InvalidSessionIndex' | 'InvalidCandidateHash' | 'InvalidValidatorIndex' | 'ValidatorIndexIdMismatch' | 'DuplicateSlashingReport';
  }

  /** @name PolkadotRuntimeCommonParasRegistrarParaInfo (732) */
  interface PolkadotRuntimeCommonParasRegistrarParaInfo extends Struct {
    readonly manager: AccountId32;
    readonly deposit: u128;
    readonly locked: bool;
  }

  /** @name PolkadotRuntimeCommonParasRegistrarPalletError (733) */
  interface PolkadotRuntimeCommonParasRegistrarPalletError extends Enum {
    readonly isNotRegistered: boolean;
    readonly isAlreadyRegistered: boolean;
    readonly isNotOwner: boolean;
    readonly isCodeTooLarge: boolean;
    readonly isHeadDataTooLarge: boolean;
    readonly isNotParachain: boolean;
    readonly isNotParathread: boolean;
    readonly isCannotDeregister: boolean;
    readonly isCannotDowngrade: boolean;
    readonly isCannotUpgrade: boolean;
    readonly isParaLocked: boolean;
    readonly isNotReserved: boolean;
    readonly isEmptyCode: boolean;
    readonly isCannotSwap: boolean;
    readonly type: 'NotRegistered' | 'AlreadyRegistered' | 'NotOwner' | 'CodeTooLarge' | 'HeadDataTooLarge' | 'NotParachain' | 'NotParathread' | 'CannotDeregister' | 'CannotDowngrade' | 'CannotUpgrade' | 'ParaLocked' | 'NotReserved' | 'EmptyCode' | 'CannotSwap';
  }

  /** @name PolkadotRuntimeCommonSlotsPalletError (735) */
  interface PolkadotRuntimeCommonSlotsPalletError extends Enum {
    readonly isParaNotOnboarding: boolean;
    readonly isLeaseError: boolean;
    readonly type: 'ParaNotOnboarding' | 'LeaseError';
  }

  /** @name PolkadotRuntimeCommonAuctionsPalletError (740) */
  interface PolkadotRuntimeCommonAuctionsPalletError extends Enum {
    readonly isAuctionInProgress: boolean;
    readonly isLeasePeriodInPast: boolean;
    readonly isParaNotRegistered: boolean;
    readonly isNotCurrentAuction: boolean;
    readonly isNotAuction: boolean;
    readonly isAuctionEnded: boolean;
    readonly isAlreadyLeasedOut: boolean;
    readonly type: 'AuctionInProgress' | 'LeasePeriodInPast' | 'ParaNotRegistered' | 'NotCurrentAuction' | 'NotAuction' | 'AuctionEnded' | 'AlreadyLeasedOut';
  }

  /** @name PolkadotRuntimeCommonCrowdloanFundInfo (741) */
  interface PolkadotRuntimeCommonCrowdloanFundInfo extends Struct {
    readonly depositor: AccountId32;
    readonly verifier: Option<SpRuntimeMultiSigner>;
    readonly deposit: u128;
    readonly raised: u128;
    readonly end: u32;
    readonly cap: u128;
    readonly lastContribution: PolkadotRuntimeCommonCrowdloanLastContribution;
    readonly firstPeriod: u32;
    readonly lastPeriod: u32;
    readonly fundIndex: u32;
  }

  /** @name PolkadotRuntimeCommonCrowdloanLastContribution (742) */
  interface PolkadotRuntimeCommonCrowdloanLastContribution extends Enum {
    readonly isNever: boolean;
    readonly isPreEnding: boolean;
    readonly asPreEnding: u32;
    readonly isEnding: boolean;
    readonly asEnding: u32;
    readonly type: 'Never' | 'PreEnding' | 'Ending';
  }

  /** @name PolkadotRuntimeCommonCrowdloanPalletError (743) */
  interface PolkadotRuntimeCommonCrowdloanPalletError extends Enum {
    readonly isFirstPeriodInPast: boolean;
    readonly isFirstPeriodTooFarInFuture: boolean;
    readonly isLastPeriodBeforeFirstPeriod: boolean;
    readonly isLastPeriodTooFarInFuture: boolean;
    readonly isCannotEndInPast: boolean;
    readonly isEndTooFarInFuture: boolean;
    readonly isOverflow: boolean;
    readonly isContributionTooSmall: boolean;
    readonly isInvalidParaId: boolean;
    readonly isCapExceeded: boolean;
    readonly isContributionPeriodOver: boolean;
    readonly isInvalidOrigin: boolean;
    readonly isNotParachain: boolean;
    readonly isLeaseActive: boolean;
    readonly isBidOrLeaseActive: boolean;
    readonly isFundNotEnded: boolean;
    readonly isNoContributions: boolean;
    readonly isNotReadyToDissolve: boolean;
    readonly isInvalidSignature: boolean;
    readonly isMemoTooLarge: boolean;
    readonly isAlreadyInNewRaise: boolean;
    readonly isVrfDelayInProgress: boolean;
    readonly isNoLeasePeriod: boolean;
    readonly type: 'FirstPeriodInPast' | 'FirstPeriodTooFarInFuture' | 'LastPeriodBeforeFirstPeriod' | 'LastPeriodTooFarInFuture' | 'CannotEndInPast' | 'EndTooFarInFuture' | 'Overflow' | 'ContributionTooSmall' | 'InvalidParaId' | 'CapExceeded' | 'ContributionPeriodOver' | 'InvalidOrigin' | 'NotParachain' | 'LeaseActive' | 'BidOrLeaseActive' | 'FundNotEnded' | 'NoContributions' | 'NotReadyToDissolve' | 'InvalidSignature' | 'MemoTooLarge' | 'AlreadyInNewRaise' | 'VrfDelayInProgress' | 'NoLeasePeriod';
  }

  /** @name PalletXcmQueryStatus (744) */
  interface PalletXcmQueryStatus extends Enum {
    readonly isPending: boolean;
    readonly asPending: {
      readonly responder: XcmVersionedMultiLocation;
      readonly maybeMatchQuerier: Option<XcmVersionedMultiLocation>;
      readonly maybeNotify: Option<ITuple<[u8, u8]>>;
      readonly timeout: u32;
    } & Struct;
    readonly isVersionNotifier: boolean;
    readonly asVersionNotifier: {
      readonly origin: XcmVersionedMultiLocation;
      readonly isActive: bool;
    } & Struct;
    readonly isReady: boolean;
    readonly asReady: {
      readonly response: XcmVersionedResponse;
      readonly at: u32;
    } & Struct;
    readonly type: 'Pending' | 'VersionNotifier' | 'Ready';
  }

  /** @name XcmVersionedResponse (748) */
  interface XcmVersionedResponse extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2Response;
    readonly isV3: boolean;
    readonly asV3: XcmV3Response;
    readonly type: 'V2' | 'V3';
  }

  /** @name PalletXcmVersionMigrationStage (754) */
  interface PalletXcmVersionMigrationStage extends Enum {
    readonly isMigrateSupportedVersion: boolean;
    readonly isMigrateVersionNotifiers: boolean;
    readonly isNotifyCurrentTargets: boolean;
    readonly asNotifyCurrentTargets: Option<Bytes>;
    readonly isMigrateAndNotifyOldTargets: boolean;
    readonly type: 'MigrateSupportedVersion' | 'MigrateVersionNotifiers' | 'NotifyCurrentTargets' | 'MigrateAndNotifyOldTargets';
  }

  /** @name XcmVersionedAssetId (757) */
  interface XcmVersionedAssetId extends Enum {
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiassetAssetId;
    readonly type: 'V3';
  }

  /** @name PalletXcmRemoteLockedFungibleRecord (758) */
  interface PalletXcmRemoteLockedFungibleRecord extends Struct {
    readonly amount: u128;
    readonly owner: XcmVersionedMultiLocation;
    readonly locker: XcmVersionedMultiLocation;
    readonly consumers: Vec<ITuple<[Null, u128]>>;
  }

  /** @name PalletXcmError (765) */
  interface PalletXcmError extends Enum {
    readonly isUnreachable: boolean;
    readonly isSendFailure: boolean;
    readonly isFiltered: boolean;
    readonly isUnweighableMessage: boolean;
    readonly isDestinationNotInvertible: boolean;
    readonly isEmpty: boolean;
    readonly isCannotReanchor: boolean;
    readonly isTooManyAssets: boolean;
    readonly isInvalidOrigin: boolean;
    readonly isBadVersion: boolean;
    readonly isBadLocation: boolean;
    readonly isNoSubscription: boolean;
    readonly isAlreadySubscribed: boolean;
    readonly isInvalidAsset: boolean;
    readonly isLowBalance: boolean;
    readonly isTooManyLocks: boolean;
    readonly isAccountNotSovereign: boolean;
    readonly isFeesNotMet: boolean;
    readonly isLockNotFound: boolean;
    readonly isInUse: boolean;
    readonly type: 'Unreachable' | 'SendFailure' | 'Filtered' | 'UnweighableMessage' | 'DestinationNotInvertible' | 'Empty' | 'CannotReanchor' | 'TooManyAssets' | 'InvalidOrigin' | 'BadVersion' | 'BadLocation' | 'NoSubscription' | 'AlreadySubscribed' | 'InvalidAsset' | 'LowBalance' | 'TooManyLocks' | 'AccountNotSovereign' | 'FeesNotMet' | 'LockNotFound' | 'InUse';
  }

  /** @name PalletTransactionPaymentChargeTransactionPayment (783) */
  interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

  /** @name PolkadotRuntimeCommonClaimsPrevalidateAttests (784) */
  type PolkadotRuntimeCommonClaimsPrevalidateAttests = Null;

  /** @name PolkadotRuntimeRuntime (785) */
  type PolkadotRuntimeRuntime = Null;

} // declare module

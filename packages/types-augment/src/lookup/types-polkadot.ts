// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { BTreeMap, BitVec, Bytes, Compact, Enum, Null, Option, Result, Struct, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { EthereumAddress } from '@polkadot/types/interfaces/eth';
import type { AccountId32, H256, PerU16, Perbill } from '@polkadot/types/interfaces/runtime';

declare module '@polkadot/types/lookup' {
  /** @name SpCoreEd25519Public (54) */
  interface SpCoreEd25519Public extends U8aFixed {}

  /** @name PolkadotRuntimePalletImOnlinePalletEvent (55) */
  interface PolkadotRuntimePalletImOnlinePalletEvent extends Enum {
    readonly isHeartbeatReceived: boolean;
    readonly asHeartbeatReceived: {
      readonly authorityId: PolkadotRuntimePalletImOnlineSr25519AppSr25519Public;
    } & Struct;
    readonly isAllGood: boolean;
    readonly isSomeOffline: boolean;
    readonly asSomeOffline: {
      readonly offline: Vec<ITuple<[AccountId32, SpStakingExposure]>>;
    } & Struct;
    readonly type: 'HeartbeatReceived' | 'AllGood' | 'SomeOffline';
  }

  /** @name PolkadotRuntimePalletImOnlineSr25519AppSr25519Public (56) */
  interface PolkadotRuntimePalletImOnlineSr25519AppSr25519Public extends SpCoreSr25519Public {}

  /** @name SpCoreSr25519Public (57) */
  interface SpCoreSr25519Public extends U8aFixed {}

  /** @name PolkadotRuntimeCommonImplsVersionedLocatableAsset (65) */
  interface PolkadotRuntimeCommonImplsVersionedLocatableAsset extends Enum {
    readonly isV3: boolean;
    readonly asV3: {
      readonly location: StagingXcmV3MultiLocation;
      readonly assetId: XcmV3MultiassetAssetId;
    } & Struct;
    readonly isV4: boolean;
    readonly asV4: {
      readonly location: StagingXcmV4Location;
      readonly assetId: StagingXcmV4AssetAssetId;
    } & Struct;
    readonly type: 'V3' | 'V4';
  }

  /** @name StagingXcmV3MultiLocation (66) */
  interface StagingXcmV3MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: XcmV3Junctions;
  }

  /** @name XcmV3Junctions (67) */
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

  /** @name XcmV3Junction (68) */
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

  /** @name XcmV3JunctionNetworkId (71) */
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
    readonly isPolkadotBulletin: boolean;
    readonly type: 'ByGenesis' | 'ByFork' | 'Polkadot' | 'Kusama' | 'Westend' | 'Rococo' | 'Wococo' | 'Ethereum' | 'BitcoinCore' | 'BitcoinCash' | 'PolkadotBulletin';
  }

  /** @name XcmV3JunctionBodyId (73) */
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

  /** @name XcmV3JunctionBodyPart (74) */
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

  /** @name XcmV3MultiassetAssetId (75) */
  interface XcmV3MultiassetAssetId extends Enum {
    readonly isConcrete: boolean;
    readonly asConcrete: StagingXcmV3MultiLocation;
    readonly isAbstract: boolean;
    readonly asAbstract: U8aFixed;
    readonly type: 'Concrete' | 'Abstract';
  }

  /** @name StagingXcmV4Location (76) */
  interface StagingXcmV4Location extends Struct {
    readonly parents: u8;
    readonly interior: StagingXcmV4Junctions;
  }

  /** @name StagingXcmV4Junctions (77) */
  interface StagingXcmV4Junctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: StagingXcmV4Junction;
    readonly isX2: boolean;
    readonly asX2: StagingXcmV4Junction;
    readonly isX3: boolean;
    readonly asX3: StagingXcmV4Junction;
    readonly isX4: boolean;
    readonly asX4: StagingXcmV4Junction;
    readonly isX5: boolean;
    readonly asX5: StagingXcmV4Junction;
    readonly isX6: boolean;
    readonly asX6: StagingXcmV4Junction;
    readonly isX7: boolean;
    readonly asX7: StagingXcmV4Junction;
    readonly isX8: boolean;
    readonly asX8: StagingXcmV4Junction;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name StagingXcmV4Junction (79) */
  interface StagingXcmV4Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: Option<StagingXcmV4JunctionNetworkId>;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: Option<StagingXcmV4JunctionNetworkId>;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: Option<StagingXcmV4JunctionNetworkId>;
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
    readonly asGlobalConsensus: StagingXcmV4JunctionNetworkId;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality' | 'GlobalConsensus';
  }

  /** @name StagingXcmV4JunctionNetworkId (81) */
  interface StagingXcmV4JunctionNetworkId extends Enum {
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
    readonly isPolkadotBulletin: boolean;
    readonly type: 'ByGenesis' | 'ByFork' | 'Polkadot' | 'Kusama' | 'Westend' | 'Rococo' | 'Wococo' | 'Ethereum' | 'BitcoinCore' | 'BitcoinCash' | 'PolkadotBulletin';
  }

  /** @name StagingXcmV4AssetAssetId (89) */
  interface StagingXcmV4AssetAssetId extends StagingXcmV4Location {}

  /** @name XcmVersionedLocation (90) */
  interface XcmVersionedLocation extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2MultiLocation;
    readonly isV3: boolean;
    readonly asV3: StagingXcmV3MultiLocation;
    readonly isV4: boolean;
    readonly asV4: StagingXcmV4Location;
    readonly type: 'V2' | 'V3' | 'V4';
  }

  /** @name XcmV2MultiLocation (91) */
  interface XcmV2MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: XcmV2MultilocationJunctions;
  }

  /** @name XcmV2MultilocationJunctions (92) */
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

  /** @name XcmV2Junction (93) */
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

  /** @name XcmV2NetworkId (94) */
  interface XcmV2NetworkId extends Enum {
    readonly isAny: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly type: 'Any' | 'Named' | 'Polkadot' | 'Kusama';
  }

  /** @name XcmV2BodyId (96) */
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

  /** @name XcmV2BodyPart (97) */
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

  /** @name PolkadotRuntimeSessionKeys (143) */
  interface PolkadotRuntimeSessionKeys extends Struct {
    readonly grandpa: SpConsensusGrandpaAppPublic;
    readonly babe: SpConsensusBabeAppPublic;
    readonly paraValidator: PolkadotPrimitivesV6ValidatorAppPublic;
    readonly paraAssignment: PolkadotPrimitivesV6AssignmentAppPublic;
    readonly authorityDiscovery: SpAuthorityDiscoveryAppPublic;
    readonly beefy: SpConsensusBeefyEcdsaCryptoPublic;
  }

  /** @name PolkadotPrimitivesV6ValidatorAppPublic (144) */
  interface PolkadotPrimitivesV6ValidatorAppPublic extends SpCoreSr25519Public {}

  /** @name PolkadotPrimitivesV6AssignmentAppPublic (145) */
  interface PolkadotPrimitivesV6AssignmentAppPublic extends SpCoreSr25519Public {}

  /** @name SpCoreEcdsaPublic (148) */
  interface SpCoreEcdsaPublic extends U8aFixed {}

  /** @name SpCoreEd25519Signature (156) */
  interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name PolkadotRuntimeOriginCaller (170) */
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

  /** @name PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin (172) */
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
    readonly isWishForChange: boolean;
    readonly type: 'StakingAdmin' | 'Treasurer' | 'FellowshipAdmin' | 'GeneralAdmin' | 'AuctionAdmin' | 'LeaseAdmin' | 'ReferendumCanceller' | 'ReferendumKiller' | 'SmallTipper' | 'BigTipper' | 'SmallSpender' | 'MediumSpender' | 'BigSpender' | 'WhitelistedCaller' | 'WishForChange';
  }

  /** @name PolkadotRuntimeParachainsOriginPalletOrigin (173) */
  interface PolkadotRuntimeParachainsOriginPalletOrigin extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: u32;
    readonly type: 'Parachain';
  }

  /** @name PalletXcmOrigin (175) */
  interface PalletXcmOrigin extends Enum {
    readonly isXcm: boolean;
    readonly asXcm: StagingXcmV4Location;
    readonly isResponse: boolean;
    readonly asResponse: StagingXcmV4Location;
    readonly type: 'Xcm' | 'Response';
  }

  /** @name PolkadotRuntimeCommonClaimsPalletCall (180) */
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

  /** @name PolkadotRuntimeCommonClaimsEcdsaSignature (181) */
  interface PolkadotRuntimeCommonClaimsEcdsaSignature extends U8aFixed {}

  /** @name PolkadotRuntimeCommonClaimsStatementKind (187) */
  interface PolkadotRuntimeCommonClaimsStatementKind extends Enum {
    readonly isRegular: boolean;
    readonly isSaft: boolean;
    readonly type: 'Regular' | 'Saft';
  }

  /** @name SpCoreSr25519Signature (233) */
  interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name SpCoreEcdsaSignature (234) */
  interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name PolkadotRuntimeProxyType (238) */
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

  /** @name PolkadotRuntimeNposCompactSolution16 (246) */
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

  /** @name PolkadotRuntimeParachainsConfigurationPalletCall (320) */
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
    readonly isSetCoretimeCores: boolean;
    readonly asSetCoretimeCores: {
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
      readonly new_: PolkadotPrimitivesV6AsyncBackingAsyncBackingParams;
    } & Struct;
    readonly isSetExecutorParams: boolean;
    readonly asSetExecutorParams: {
      readonly new_: PolkadotPrimitivesV6ExecutorParams;
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
    readonly isSetMinimumBackingVotes: boolean;
    readonly asSetMinimumBackingVotes: {
      readonly new_: u32;
    } & Struct;
    readonly isSetNodeFeature: boolean;
    readonly asSetNodeFeature: {
      readonly index: u8;
      readonly value: bool;
    } & Struct;
    readonly isSetApprovalVotingParams: boolean;
    readonly asSetApprovalVotingParams: {
      readonly new_: PolkadotPrimitivesVstagingApprovalVotingParams;
    } & Struct;
    readonly type: 'SetValidationUpgradeCooldown' | 'SetValidationUpgradeDelay' | 'SetCodeRetentionPeriod' | 'SetMaxCodeSize' | 'SetMaxPovSize' | 'SetMaxHeadDataSize' | 'SetCoretimeCores' | 'SetOnDemandRetries' | 'SetGroupRotationFrequency' | 'SetParasAvailabilityPeriod' | 'SetSchedulingLookahead' | 'SetMaxValidatorsPerCore' | 'SetMaxValidators' | 'SetDisputePeriod' | 'SetDisputePostConclusionAcceptancePeriod' | 'SetNoShowSlots' | 'SetNDelayTranches' | 'SetZerothDelayTrancheWidth' | 'SetNeededApprovals' | 'SetRelayVrfModuloSamples' | 'SetMaxUpwardQueueCount' | 'SetMaxUpwardQueueSize' | 'SetMaxDownwardMessageSize' | 'SetMaxUpwardMessageSize' | 'SetMaxUpwardMessageNumPerCandidate' | 'SetHrmpOpenRequestTtl' | 'SetHrmpSenderDeposit' | 'SetHrmpRecipientDeposit' | 'SetHrmpChannelMaxCapacity' | 'SetHrmpChannelMaxTotalSize' | 'SetHrmpMaxParachainInboundChannels' | 'SetHrmpChannelMaxMessageSize' | 'SetHrmpMaxParachainOutboundChannels' | 'SetHrmpMaxMessageNumPerCandidate' | 'SetPvfVotingTtl' | 'SetMinimumValidationUpgradeDelay' | 'SetBypassConsistencyCheck' | 'SetAsyncBackingParams' | 'SetExecutorParams' | 'SetOnDemandBaseFee' | 'SetOnDemandFeeVariability' | 'SetOnDemandQueueMaxSize' | 'SetOnDemandTargetQueueUtilization' | 'SetOnDemandTtl' | 'SetMinimumBackingVotes' | 'SetNodeFeature' | 'SetApprovalVotingParams';
  }

  /** @name PolkadotPrimitivesV6AsyncBackingAsyncBackingParams (321) */
  interface PolkadotPrimitivesV6AsyncBackingAsyncBackingParams extends Struct {
    readonly maxCandidateDepth: u32;
    readonly allowedAncestryLen: u32;
  }

  /** @name PolkadotPrimitivesV6ExecutorParams (322) */
  interface PolkadotPrimitivesV6ExecutorParams extends Vec<PolkadotPrimitivesV6ExecutorParamsExecutorParam> {}

  /** @name PolkadotPrimitivesV6ExecutorParamsExecutorParam (324) */
  interface PolkadotPrimitivesV6ExecutorParamsExecutorParam extends Enum {
    readonly isMaxMemoryPages: boolean;
    readonly asMaxMemoryPages: u32;
    readonly isStackLogicalMax: boolean;
    readonly asStackLogicalMax: u32;
    readonly isStackNativeMax: boolean;
    readonly asStackNativeMax: u32;
    readonly isPrecheckingMaxMemory: boolean;
    readonly asPrecheckingMaxMemory: u64;
    readonly isPvfPrepTimeout: boolean;
    readonly asPvfPrepTimeout: ITuple<[PolkadotPrimitivesV6PvfPrepKind, u64]>;
    readonly isPvfExecTimeout: boolean;
    readonly asPvfExecTimeout: ITuple<[PolkadotPrimitivesV6PvfExecKind, u64]>;
    readonly isWasmExtBulkMemory: boolean;
    readonly type: 'MaxMemoryPages' | 'StackLogicalMax' | 'StackNativeMax' | 'PrecheckingMaxMemory' | 'PvfPrepTimeout' | 'PvfExecTimeout' | 'WasmExtBulkMemory';
  }

  /** @name PolkadotPrimitivesV6PvfPrepKind (325) */
  interface PolkadotPrimitivesV6PvfPrepKind extends Enum {
    readonly isPrecheck: boolean;
    readonly isPrepare: boolean;
    readonly type: 'Precheck' | 'Prepare';
  }

  /** @name PolkadotPrimitivesV6PvfExecKind (326) */
  interface PolkadotPrimitivesV6PvfExecKind extends Enum {
    readonly isBacking: boolean;
    readonly isApproval: boolean;
    readonly type: 'Backing' | 'Approval';
  }

  /** @name PolkadotPrimitivesVstagingApprovalVotingParams (327) */
  interface PolkadotPrimitivesVstagingApprovalVotingParams extends Struct {
    readonly maxApprovalCoalesceCount: u32;
  }

  /** @name PolkadotRuntimeParachainsSharedPalletCall (328) */
  type PolkadotRuntimeParachainsSharedPalletCall = Null;

  /** @name PolkadotRuntimeParachainsInclusionPalletCall (329) */
  type PolkadotRuntimeParachainsInclusionPalletCall = Null;

  /** @name PolkadotRuntimeParachainsParasInherentPalletCall (330) */
  interface PolkadotRuntimeParachainsParasInherentPalletCall extends Enum {
    readonly isEnter: boolean;
    readonly asEnter: {
      readonly data: PolkadotPrimitivesV6InherentData;
    } & Struct;
    readonly type: 'Enter';
  }

  /** @name PolkadotPrimitivesV6InherentData (331) */
  interface PolkadotPrimitivesV6InherentData extends Struct {
    readonly bitfields: Vec<PolkadotPrimitivesV6SignedUncheckedSigned>;
    readonly backedCandidates: Vec<PolkadotPrimitivesV6BackedCandidate>;
    readonly disputes: Vec<PolkadotPrimitivesV6DisputeStatementSet>;
    readonly parentHeader: SpRuntimeHeader;
  }

  /** @name PolkadotPrimitivesV6SignedUncheckedSigned (333) */
  interface PolkadotPrimitivesV6SignedUncheckedSigned extends Struct {
    readonly payload: BitVec;
    readonly validatorIndex: u32;
    readonly signature: PolkadotPrimitivesV6ValidatorAppSignature;
  }

  /** @name BitvecOrderLsb0 (336) */
  type BitvecOrderLsb0 = Null;

  /** @name PolkadotPrimitivesV6ValidatorAppSignature (338) */
  interface PolkadotPrimitivesV6ValidatorAppSignature extends SpCoreSr25519Signature {}

  /** @name PolkadotPrimitivesV6BackedCandidate (340) */
  interface PolkadotPrimitivesV6BackedCandidate extends Struct {
    readonly candidate: PolkadotPrimitivesV6CommittedCandidateReceipt;
    readonly validityVotes: Vec<PolkadotPrimitivesV6ValidityAttestation>;
    readonly validatorIndices: BitVec;
  }

  /** @name PolkadotPrimitivesV6CommittedCandidateReceipt (341) */
  interface PolkadotPrimitivesV6CommittedCandidateReceipt extends Struct {
    readonly descriptor: PolkadotPrimitivesV6CandidateDescriptor;
    readonly commitments: PolkadotPrimitivesV6CandidateCommitments;
  }

  /** @name PolkadotPrimitivesV6CandidateDescriptor (342) */
  interface PolkadotPrimitivesV6CandidateDescriptor extends Struct {
    readonly paraId: u32;
    readonly relayParent: H256;
    readonly collator: PolkadotPrimitivesV6CollatorAppPublic;
    readonly persistedValidationDataHash: H256;
    readonly povHash: H256;
    readonly erasureRoot: H256;
    readonly signature: PolkadotPrimitivesV6CollatorAppSignature;
    readonly paraHead: H256;
    readonly validationCodeHash: H256;
  }

  /** @name PolkadotPrimitivesV6CollatorAppPublic (343) */
  interface PolkadotPrimitivesV6CollatorAppPublic extends SpCoreSr25519Public {}

  /** @name PolkadotPrimitivesV6CollatorAppSignature (344) */
  interface PolkadotPrimitivesV6CollatorAppSignature extends SpCoreSr25519Signature {}

  /** @name PolkadotPrimitivesV6CandidateCommitments (346) */
  interface PolkadotPrimitivesV6CandidateCommitments extends Struct {
    readonly upwardMessages: Vec<Bytes>;
    readonly horizontalMessages: Vec<PolkadotCorePrimitivesOutboundHrmpMessage>;
    readonly newValidationCode: Option<Bytes>;
    readonly headData: Bytes;
    readonly processedDownwardMessages: u32;
    readonly hrmpWatermark: u32;
  }

  /** @name PolkadotCorePrimitivesOutboundHrmpMessage (349) */
  interface PolkadotCorePrimitivesOutboundHrmpMessage extends Struct {
    readonly recipient: u32;
    readonly data: Bytes;
  }

  /** @name PolkadotPrimitivesV6ValidityAttestation (355) */
  interface PolkadotPrimitivesV6ValidityAttestation extends Enum {
    readonly isImplicit: boolean;
    readonly asImplicit: PolkadotPrimitivesV6ValidatorAppSignature;
    readonly isExplicit: boolean;
    readonly asExplicit: PolkadotPrimitivesV6ValidatorAppSignature;
    readonly type: 'Implicit' | 'Explicit';
  }

  /** @name PolkadotPrimitivesV6DisputeStatementSet (357) */
  interface PolkadotPrimitivesV6DisputeStatementSet extends Struct {
    readonly candidateHash: H256;
    readonly session: u32;
    readonly statements: Vec<ITuple<[PolkadotPrimitivesV6DisputeStatement, u32, PolkadotPrimitivesV6ValidatorAppSignature]>>;
  }

  /** @name PolkadotPrimitivesV6DisputeStatement (361) */
  interface PolkadotPrimitivesV6DisputeStatement extends Enum {
    readonly isValid: boolean;
    readonly asValid: PolkadotPrimitivesV6ValidDisputeStatementKind;
    readonly isInvalid: boolean;
    readonly asInvalid: PolkadotPrimitivesV6InvalidDisputeStatementKind;
    readonly type: 'Valid' | 'Invalid';
  }

  /** @name PolkadotPrimitivesV6ValidDisputeStatementKind (362) */
  interface PolkadotPrimitivesV6ValidDisputeStatementKind extends Enum {
    readonly isExplicit: boolean;
    readonly isBackingSeconded: boolean;
    readonly asBackingSeconded: H256;
    readonly isBackingValid: boolean;
    readonly asBackingValid: H256;
    readonly isApprovalChecking: boolean;
    readonly isApprovalCheckingMultipleCandidates: boolean;
    readonly asApprovalCheckingMultipleCandidates: Vec<H256>;
    readonly type: 'Explicit' | 'BackingSeconded' | 'BackingValid' | 'ApprovalChecking' | 'ApprovalCheckingMultipleCandidates';
  }

  /** @name PolkadotPrimitivesV6InvalidDisputeStatementKind (364) */
  interface PolkadotPrimitivesV6InvalidDisputeStatementKind extends Enum {
    readonly isExplicit: boolean;
    readonly type: 'Explicit';
  }

  /** @name PolkadotRuntimeParachainsParasPalletCall (365) */
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
      readonly stmt: PolkadotPrimitivesV6PvfCheckStatement;
      readonly signature: PolkadotPrimitivesV6ValidatorAppSignature;
    } & Struct;
    readonly isForceSetMostRecentContext: boolean;
    readonly asForceSetMostRecentContext: {
      readonly para: u32;
      readonly context: u32;
    } & Struct;
    readonly type: 'ForceSetCurrentCode' | 'ForceSetCurrentHead' | 'ForceScheduleCodeUpgrade' | 'ForceNoteNewHead' | 'ForceQueueAction' | 'AddTrustedValidationCode' | 'PokeUnusedValidationCode' | 'IncludePvfCheckStatement' | 'ForceSetMostRecentContext';
  }

  /** @name PolkadotPrimitivesV6PvfCheckStatement (366) */
  interface PolkadotPrimitivesV6PvfCheckStatement extends Struct {
    readonly accept: bool;
    readonly subject: H256;
    readonly sessionIndex: u32;
    readonly validatorIndex: u32;
  }

  /** @name PolkadotRuntimeParachainsInitializerPalletCall (367) */
  interface PolkadotRuntimeParachainsInitializerPalletCall extends Enum {
    readonly isForceApprove: boolean;
    readonly asForceApprove: {
      readonly upTo: u32;
    } & Struct;
    readonly type: 'ForceApprove';
  }

  /** @name PolkadotRuntimeParachainsHrmpPalletCall (368) */
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
      readonly channelId: PolkadotParachainPrimitivesPrimitivesHrmpChannelId;
    } & Struct;
    readonly isForceCleanHrmp: boolean;
    readonly asForceCleanHrmp: {
      readonly para: u32;
      readonly numInbound: u32;
      readonly numOutbound: u32;
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
      readonly channelId: PolkadotParachainPrimitivesPrimitivesHrmpChannelId;
      readonly openRequests: u32;
    } & Struct;
    readonly isForceOpenHrmpChannel: boolean;
    readonly asForceOpenHrmpChannel: {
      readonly sender: u32;
      readonly recipient: u32;
      readonly maxCapacity: u32;
      readonly maxMessageSize: u32;
    } & Struct;
    readonly isEstablishSystemChannel: boolean;
    readonly asEstablishSystemChannel: {
      readonly sender: u32;
      readonly recipient: u32;
    } & Struct;
    readonly isPokeChannelDeposits: boolean;
    readonly asPokeChannelDeposits: {
      readonly sender: u32;
      readonly recipient: u32;
    } & Struct;
    readonly isEstablishChannelWithSystem: boolean;
    readonly asEstablishChannelWithSystem: {
      readonly targetSystemChain: u32;
    } & Struct;
    readonly type: 'HrmpInitOpenChannel' | 'HrmpAcceptOpenChannel' | 'HrmpCloseChannel' | 'ForceCleanHrmp' | 'ForceProcessHrmpOpen' | 'ForceProcessHrmpClose' | 'HrmpCancelOpenRequest' | 'ForceOpenHrmpChannel' | 'EstablishSystemChannel' | 'PokeChannelDeposits' | 'EstablishChannelWithSystem';
  }

  /** @name PolkadotParachainPrimitivesPrimitivesHrmpChannelId (369) */
  interface PolkadotParachainPrimitivesPrimitivesHrmpChannelId extends Struct {
    readonly sender: u32;
    readonly recipient: u32;
  }

  /** @name PolkadotRuntimeParachainsDisputesPalletCall (370) */
  interface PolkadotRuntimeParachainsDisputesPalletCall extends Enum {
    readonly isForceUnfreeze: boolean;
    readonly type: 'ForceUnfreeze';
  }

  /** @name PolkadotRuntimeParachainsDisputesSlashingPalletCall (371) */
  interface PolkadotRuntimeParachainsDisputesSlashingPalletCall extends Enum {
    readonly isReportDisputeLostUnsigned: boolean;
    readonly asReportDisputeLostUnsigned: {
      readonly disputeProof: PolkadotPrimitivesV6SlashingDisputeProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly type: 'ReportDisputeLostUnsigned';
  }

  /** @name PolkadotPrimitivesV6SlashingDisputeProof (372) */
  interface PolkadotPrimitivesV6SlashingDisputeProof extends Struct {
    readonly timeSlot: PolkadotPrimitivesV6SlashingDisputesTimeSlot;
    readonly kind: PolkadotPrimitivesV6SlashingSlashingOffenceKind;
    readonly validatorIndex: u32;
    readonly validatorId: PolkadotPrimitivesV6ValidatorAppPublic;
  }

  /** @name PolkadotPrimitivesV6SlashingDisputesTimeSlot (373) */
  interface PolkadotPrimitivesV6SlashingDisputesTimeSlot extends Struct {
    readonly sessionIndex: u32;
    readonly candidateHash: H256;
  }

  /** @name PolkadotPrimitivesV6SlashingSlashingOffenceKind (374) */
  interface PolkadotPrimitivesV6SlashingSlashingOffenceKind extends Enum {
    readonly isForInvalid: boolean;
    readonly isAgainstValid: boolean;
    readonly type: 'ForInvalid' | 'AgainstValid';
  }

  /** @name PolkadotRuntimeCommonParasRegistrarPalletCall (375) */
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

  /** @name PolkadotRuntimeCommonSlotsPalletCall (376) */
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

  /** @name PolkadotRuntimeCommonAuctionsPalletCall (377) */
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

  /** @name PolkadotRuntimeCommonCrowdloanPalletCall (379) */
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

  /** @name SpRuntimeMultiSigner (381) */
  interface SpRuntimeMultiSigner extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Public;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Public;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaPublic;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name PalletXcmCall (388) */
  interface PalletXcmCall extends Enum {
    readonly isSend: boolean;
    readonly asSend: {
      readonly dest: XcmVersionedLocation;
      readonly message: XcmVersionedXcm;
    } & Struct;
    readonly isTeleportAssets: boolean;
    readonly asTeleportAssets: {
      readonly dest: XcmVersionedLocation;
      readonly beneficiary: XcmVersionedLocation;
      readonly assets: XcmVersionedAssets;
      readonly feeAssetItem: u32;
    } & Struct;
    readonly isReserveTransferAssets: boolean;
    readonly asReserveTransferAssets: {
      readonly dest: XcmVersionedLocation;
      readonly beneficiary: XcmVersionedLocation;
      readonly assets: XcmVersionedAssets;
      readonly feeAssetItem: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly message: XcmVersionedXcm;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isForceXcmVersion: boolean;
    readonly asForceXcmVersion: {
      readonly location: StagingXcmV4Location;
      readonly version: u32;
    } & Struct;
    readonly isForceDefaultXcmVersion: boolean;
    readonly asForceDefaultXcmVersion: {
      readonly maybeXcmVersion: Option<u32>;
    } & Struct;
    readonly isForceSubscribeVersionNotify: boolean;
    readonly asForceSubscribeVersionNotify: {
      readonly location: XcmVersionedLocation;
    } & Struct;
    readonly isForceUnsubscribeVersionNotify: boolean;
    readonly asForceUnsubscribeVersionNotify: {
      readonly location: XcmVersionedLocation;
    } & Struct;
    readonly isLimitedReserveTransferAssets: boolean;
    readonly asLimitedReserveTransferAssets: {
      readonly dest: XcmVersionedLocation;
      readonly beneficiary: XcmVersionedLocation;
      readonly assets: XcmVersionedAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isLimitedTeleportAssets: boolean;
    readonly asLimitedTeleportAssets: {
      readonly dest: XcmVersionedLocation;
      readonly beneficiary: XcmVersionedLocation;
      readonly assets: XcmVersionedAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isForceSuspension: boolean;
    readonly asForceSuspension: {
      readonly suspended: bool;
    } & Struct;
    readonly isTransferAssets: boolean;
    readonly asTransferAssets: {
      readonly dest: XcmVersionedLocation;
      readonly beneficiary: XcmVersionedLocation;
      readonly assets: XcmVersionedAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isClaimAssets: boolean;
    readonly asClaimAssets: {
      readonly assets: XcmVersionedAssets;
      readonly beneficiary: XcmVersionedLocation;
    } & Struct;
    readonly isTransferAssetsUsingTypeAndThen: boolean;
    readonly asTransferAssetsUsingTypeAndThen: {
      readonly dest: XcmVersionedLocation;
      readonly assets: XcmVersionedAssets;
      readonly assetsTransferType: StagingXcmExecutorAssetTransferTransferType;
      readonly remoteFeesId: XcmVersionedAssetId;
      readonly feesTransferType: StagingXcmExecutorAssetTransferTransferType;
      readonly customXcmOnDest: XcmVersionedXcm;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly type: 'Send' | 'TeleportAssets' | 'ReserveTransferAssets' | 'Execute' | 'ForceXcmVersion' | 'ForceDefaultXcmVersion' | 'ForceSubscribeVersionNotify' | 'ForceUnsubscribeVersionNotify' | 'LimitedReserveTransferAssets' | 'LimitedTeleportAssets' | 'ForceSuspension' | 'TransferAssets' | 'ClaimAssets' | 'TransferAssetsUsingTypeAndThen';
  }

  /** @name XcmVersionedXcm (389) */
  interface XcmVersionedXcm extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2Xcm;
    readonly isV3: boolean;
    readonly asV3: XcmV3Xcm;
    readonly isV4: boolean;
    readonly asV4: StagingXcmV4Xcm;
    readonly type: 'V2' | 'V3' | 'V4';
  }

  /** @name XcmV2Xcm (390) */
  interface XcmV2Xcm extends Vec<XcmV2Instruction> {}

  /** @name XcmV2Instruction (392) */
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

  /** @name XcmV2MultiassetMultiAssets (393) */
  interface XcmV2MultiassetMultiAssets extends Vec<XcmV2MultiAsset> {}

  /** @name XcmV2MultiAsset (395) */
  interface XcmV2MultiAsset extends Struct {
    readonly id: XcmV2MultiassetAssetId;
    readonly fun: XcmV2MultiassetFungibility;
  }

  /** @name XcmV2MultiassetAssetId (396) */
  interface XcmV2MultiassetAssetId extends Enum {
    readonly isConcrete: boolean;
    readonly asConcrete: XcmV2MultiLocation;
    readonly isAbstract: boolean;
    readonly asAbstract: Bytes;
    readonly type: 'Concrete' | 'Abstract';
  }

  /** @name XcmV2MultiassetFungibility (397) */
  interface XcmV2MultiassetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: XcmV2MultiassetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV2MultiassetAssetInstance (398) */
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

  /** @name XcmV2Response (399) */
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

  /** @name XcmV2TraitsError (402) */
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

  /** @name XcmV2OriginKind (403) */
  interface XcmV2OriginKind extends Enum {
    readonly isNative: boolean;
    readonly isSovereignAccount: boolean;
    readonly isSuperuser: boolean;
    readonly isXcm: boolean;
    readonly type: 'Native' | 'SovereignAccount' | 'Superuser' | 'Xcm';
  }

  /** @name XcmDoubleEncoded (404) */
  interface XcmDoubleEncoded extends Struct {
    readonly encoded: Bytes;
  }

  /** @name XcmV2MultiassetMultiAssetFilter (405) */
  interface XcmV2MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: XcmV2MultiassetMultiAssets;
    readonly isWild: boolean;
    readonly asWild: XcmV2MultiassetWildMultiAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name XcmV2MultiassetWildMultiAsset (406) */
  interface XcmV2MultiassetWildMultiAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: XcmV2MultiassetAssetId;
      readonly fun: XcmV2MultiassetWildFungibility;
    } & Struct;
    readonly type: 'All' | 'AllOf';
  }

  /** @name XcmV2MultiassetWildFungibility (407) */
  interface XcmV2MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV2WeightLimit (408) */
  interface XcmV2WeightLimit extends Enum {
    readonly isUnlimited: boolean;
    readonly isLimited: boolean;
    readonly asLimited: Compact<u64>;
    readonly type: 'Unlimited' | 'Limited';
  }

  /** @name XcmV3Xcm (409) */
  interface XcmV3Xcm extends Vec<XcmV3Instruction> {}

  /** @name XcmV3Instruction (411) */
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
      readonly querier: Option<StagingXcmV3MultiLocation>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: XcmV3MultiassetMultiAssets;
      readonly beneficiary: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: XcmV3MultiassetMultiAssets;
      readonly dest: StagingXcmV3MultiLocation;
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
      readonly beneficiary: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly dest: StagingXcmV3MultiLocation;
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
      readonly reserve: StagingXcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly dest: StagingXcmV3MultiLocation;
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
      readonly ticket: StagingXcmV3MultiLocation;
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
    readonly asExpectOrigin: Option<StagingXcmV3MultiLocation>;
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
      readonly unlocker: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isUnlockAsset: boolean;
    readonly asUnlockAsset: {
      readonly asset: XcmV3MultiAsset;
      readonly target: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isNoteUnlockable: boolean;
    readonly asNoteUnlockable: {
      readonly asset: XcmV3MultiAsset;
      readonly owner: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isRequestUnlock: boolean;
    readonly asRequestUnlock: {
      readonly asset: XcmV3MultiAsset;
      readonly locker: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isSetFeesMode: boolean;
    readonly asSetFeesMode: {
      readonly jitWithdraw: bool;
    } & Struct;
    readonly isSetTopic: boolean;
    readonly asSetTopic: U8aFixed;
    readonly isClearTopic: boolean;
    readonly isAliasOrigin: boolean;
    readonly asAliasOrigin: StagingXcmV3MultiLocation;
    readonly isUnpaidExecution: boolean;
    readonly asUnpaidExecution: {
      readonly weightLimit: XcmV3WeightLimit;
      readonly checkOrigin: Option<StagingXcmV3MultiLocation>;
    } & Struct;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'ReportHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion' | 'BurnAsset' | 'ExpectAsset' | 'ExpectOrigin' | 'ExpectError' | 'ExpectTransactStatus' | 'QueryPallet' | 'ExpectPallet' | 'ReportTransactStatus' | 'ClearTransactStatus' | 'UniversalOrigin' | 'ExportMessage' | 'LockAsset' | 'UnlockAsset' | 'NoteUnlockable' | 'RequestUnlock' | 'SetFeesMode' | 'SetTopic' | 'ClearTopic' | 'AliasOrigin' | 'UnpaidExecution';
  }

  /** @name XcmV3MultiassetMultiAssets (412) */
  interface XcmV3MultiassetMultiAssets extends Vec<XcmV3MultiAsset> {}

  /** @name XcmV3MultiAsset (414) */
  interface XcmV3MultiAsset extends Struct {
    readonly id: XcmV3MultiassetAssetId;
    readonly fun: XcmV3MultiassetFungibility;
  }

  /** @name XcmV3MultiassetFungibility (415) */
  interface XcmV3MultiassetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: XcmV3MultiassetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV3MultiassetAssetInstance (416) */
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

  /** @name XcmV3Response (417) */
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

  /** @name XcmV3TraitsError (420) */
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

  /** @name XcmV3PalletInfo (422) */
  interface XcmV3PalletInfo extends Struct {
    readonly index: Compact<u32>;
    readonly name: Bytes;
    readonly moduleName: Bytes;
    readonly major: Compact<u32>;
    readonly minor: Compact<u32>;
    readonly patch: Compact<u32>;
  }

  /** @name XcmV3MaybeErrorCode (425) */
  interface XcmV3MaybeErrorCode extends Enum {
    readonly isSuccess: boolean;
    readonly isError: boolean;
    readonly asError: Bytes;
    readonly isTruncatedError: boolean;
    readonly asTruncatedError: Bytes;
    readonly type: 'Success' | 'Error' | 'TruncatedError';
  }

  /** @name XcmV3QueryResponseInfo (428) */
  interface XcmV3QueryResponseInfo extends Struct {
    readonly destination: StagingXcmV3MultiLocation;
    readonly queryId: Compact<u64>;
    readonly maxWeight: SpWeightsWeightV2Weight;
  }

  /** @name XcmV3MultiassetMultiAssetFilter (429) */
  interface XcmV3MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: XcmV3MultiassetMultiAssets;
    readonly isWild: boolean;
    readonly asWild: XcmV3MultiassetWildMultiAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name XcmV3MultiassetWildMultiAsset (430) */
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

  /** @name XcmV3MultiassetWildFungibility (431) */
  interface XcmV3MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV3WeightLimit (432) */
  interface XcmV3WeightLimit extends Enum {
    readonly isUnlimited: boolean;
    readonly isLimited: boolean;
    readonly asLimited: SpWeightsWeightV2Weight;
    readonly type: 'Unlimited' | 'Limited';
  }

  /** @name StagingXcmV4Xcm (433) */
  interface StagingXcmV4Xcm extends Vec<StagingXcmV4Instruction> {}

  /** @name StagingXcmV4Instruction (435) */
  interface StagingXcmV4Instruction extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: StagingXcmV4AssetAssets;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: StagingXcmV4AssetAssets;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: StagingXcmV4AssetAssets;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: StagingXcmV4Response;
      readonly maxWeight: SpWeightsWeightV2Weight;
      readonly querier: Option<StagingXcmV4Location>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: StagingXcmV4AssetAssets;
      readonly beneficiary: StagingXcmV4Location;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: StagingXcmV4AssetAssets;
      readonly dest: StagingXcmV4Location;
      readonly xcm: StagingXcmV4Xcm;
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
    readonly asDescendOrigin: StagingXcmV4Junctions;
    readonly isReportError: boolean;
    readonly asReportError: StagingXcmV4QueryResponseInfo;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: StagingXcmV4AssetAssetFilter;
      readonly beneficiary: StagingXcmV4Location;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: StagingXcmV4AssetAssetFilter;
      readonly dest: StagingXcmV4Location;
      readonly xcm: StagingXcmV4Xcm;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: StagingXcmV4AssetAssetFilter;
      readonly want: StagingXcmV4AssetAssets;
      readonly maximal: bool;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: StagingXcmV4AssetAssetFilter;
      readonly reserve: StagingXcmV4Location;
      readonly xcm: StagingXcmV4Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: StagingXcmV4AssetAssetFilter;
      readonly dest: StagingXcmV4Location;
      readonly xcm: StagingXcmV4Xcm;
    } & Struct;
    readonly isReportHolding: boolean;
    readonly asReportHolding: {
      readonly responseInfo: StagingXcmV4QueryResponseInfo;
      readonly assets: StagingXcmV4AssetAssetFilter;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: StagingXcmV4Asset;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isRefundSurplus: boolean;
    readonly isSetErrorHandler: boolean;
    readonly asSetErrorHandler: StagingXcmV4Xcm;
    readonly isSetAppendix: boolean;
    readonly asSetAppendix: StagingXcmV4Xcm;
    readonly isClearError: boolean;
    readonly isClaimAsset: boolean;
    readonly asClaimAsset: {
      readonly assets: StagingXcmV4AssetAssets;
      readonly ticket: StagingXcmV4Location;
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
    readonly asBurnAsset: StagingXcmV4AssetAssets;
    readonly isExpectAsset: boolean;
    readonly asExpectAsset: StagingXcmV4AssetAssets;
    readonly isExpectOrigin: boolean;
    readonly asExpectOrigin: Option<StagingXcmV4Location>;
    readonly isExpectError: boolean;
    readonly asExpectError: Option<ITuple<[u32, XcmV3TraitsError]>>;
    readonly isExpectTransactStatus: boolean;
    readonly asExpectTransactStatus: XcmV3MaybeErrorCode;
    readonly isQueryPallet: boolean;
    readonly asQueryPallet: {
      readonly moduleName: Bytes;
      readonly responseInfo: StagingXcmV4QueryResponseInfo;
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
    readonly asReportTransactStatus: StagingXcmV4QueryResponseInfo;
    readonly isClearTransactStatus: boolean;
    readonly isUniversalOrigin: boolean;
    readonly asUniversalOrigin: StagingXcmV4Junction;
    readonly isExportMessage: boolean;
    readonly asExportMessage: {
      readonly network: StagingXcmV4JunctionNetworkId;
      readonly destination: StagingXcmV4Junctions;
      readonly xcm: StagingXcmV4Xcm;
    } & Struct;
    readonly isLockAsset: boolean;
    readonly asLockAsset: {
      readonly asset: StagingXcmV4Asset;
      readonly unlocker: StagingXcmV4Location;
    } & Struct;
    readonly isUnlockAsset: boolean;
    readonly asUnlockAsset: {
      readonly asset: StagingXcmV4Asset;
      readonly target: StagingXcmV4Location;
    } & Struct;
    readonly isNoteUnlockable: boolean;
    readonly asNoteUnlockable: {
      readonly asset: StagingXcmV4Asset;
      readonly owner: StagingXcmV4Location;
    } & Struct;
    readonly isRequestUnlock: boolean;
    readonly asRequestUnlock: {
      readonly asset: StagingXcmV4Asset;
      readonly locker: StagingXcmV4Location;
    } & Struct;
    readonly isSetFeesMode: boolean;
    readonly asSetFeesMode: {
      readonly jitWithdraw: bool;
    } & Struct;
    readonly isSetTopic: boolean;
    readonly asSetTopic: U8aFixed;
    readonly isClearTopic: boolean;
    readonly isAliasOrigin: boolean;
    readonly asAliasOrigin: StagingXcmV4Location;
    readonly isUnpaidExecution: boolean;
    readonly asUnpaidExecution: {
      readonly weightLimit: XcmV3WeightLimit;
      readonly checkOrigin: Option<StagingXcmV4Location>;
    } & Struct;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'ReportHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion' | 'BurnAsset' | 'ExpectAsset' | 'ExpectOrigin' | 'ExpectError' | 'ExpectTransactStatus' | 'QueryPallet' | 'ExpectPallet' | 'ReportTransactStatus' | 'ClearTransactStatus' | 'UniversalOrigin' | 'ExportMessage' | 'LockAsset' | 'UnlockAsset' | 'NoteUnlockable' | 'RequestUnlock' | 'SetFeesMode' | 'SetTopic' | 'ClearTopic' | 'AliasOrigin' | 'UnpaidExecution';
  }

  /** @name StagingXcmV4AssetAssets (436) */
  interface StagingXcmV4AssetAssets extends Vec<StagingXcmV4Asset> {}

  /** @name StagingXcmV4Asset (438) */
  interface StagingXcmV4Asset extends Struct {
    readonly id: StagingXcmV4AssetAssetId;
    readonly fun: StagingXcmV4AssetFungibility;
  }

  /** @name StagingXcmV4AssetFungibility (439) */
  interface StagingXcmV4AssetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: StagingXcmV4AssetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name StagingXcmV4AssetAssetInstance (440) */
  interface StagingXcmV4AssetAssetInstance extends Enum {
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

  /** @name StagingXcmV4Response (441) */
  interface StagingXcmV4Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: StagingXcmV4AssetAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, XcmV3TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly isPalletsInfo: boolean;
    readonly asPalletsInfo: Vec<StagingXcmV4PalletInfo>;
    readonly isDispatchResult: boolean;
    readonly asDispatchResult: XcmV3MaybeErrorCode;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version' | 'PalletsInfo' | 'DispatchResult';
  }

  /** @name StagingXcmV4PalletInfo (443) */
  interface StagingXcmV4PalletInfo extends Struct {
    readonly index: Compact<u32>;
    readonly name: Bytes;
    readonly moduleName: Bytes;
    readonly major: Compact<u32>;
    readonly minor: Compact<u32>;
    readonly patch: Compact<u32>;
  }

  /** @name StagingXcmV4QueryResponseInfo (447) */
  interface StagingXcmV4QueryResponseInfo extends Struct {
    readonly destination: StagingXcmV4Location;
    readonly queryId: Compact<u64>;
    readonly maxWeight: SpWeightsWeightV2Weight;
  }

  /** @name StagingXcmV4AssetAssetFilter (448) */
  interface StagingXcmV4AssetAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: StagingXcmV4AssetAssets;
    readonly isWild: boolean;
    readonly asWild: StagingXcmV4AssetWildAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name StagingXcmV4AssetWildAsset (449) */
  interface StagingXcmV4AssetWildAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: StagingXcmV4AssetAssetId;
      readonly fun: StagingXcmV4AssetWildFungibility;
    } & Struct;
    readonly isAllCounted: boolean;
    readonly asAllCounted: Compact<u32>;
    readonly isAllOfCounted: boolean;
    readonly asAllOfCounted: {
      readonly id: StagingXcmV4AssetAssetId;
      readonly fun: StagingXcmV4AssetWildFungibility;
      readonly count: Compact<u32>;
    } & Struct;
    readonly type: 'All' | 'AllOf' | 'AllCounted' | 'AllOfCounted';
  }

  /** @name StagingXcmV4AssetWildFungibility (450) */
  interface StagingXcmV4AssetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmVersionedAssets (451) */
  interface XcmVersionedAssets extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2MultiassetMultiAssets;
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiassetMultiAssets;
    readonly isV4: boolean;
    readonly asV4: StagingXcmV4AssetAssets;
    readonly type: 'V2' | 'V3' | 'V4';
  }

  /** @name StagingXcmExecutorAssetTransferTransferType (463) */
  interface StagingXcmExecutorAssetTransferTransferType extends Enum {
    readonly isTeleport: boolean;
    readonly isLocalReserve: boolean;
    readonly isDestinationReserve: boolean;
    readonly isRemoteReserve: boolean;
    readonly asRemoteReserve: XcmVersionedLocation;
    readonly type: 'Teleport' | 'LocalReserve' | 'DestinationReserve' | 'RemoteReserve';
  }

  /** @name XcmVersionedAssetId (464) */
  interface XcmVersionedAssetId extends Enum {
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiassetAssetId;
    readonly isV4: boolean;
    readonly asV4: StagingXcmV4AssetAssetId;
    readonly type: 'V3' | 'V4';
  }

  /** @name PolkadotRuntimeParachainsInclusionAggregateMessageOrigin (466) */
  interface PolkadotRuntimeParachainsInclusionAggregateMessageOrigin extends Enum {
    readonly isUmp: boolean;
    readonly asUmp: PolkadotRuntimeParachainsInclusionUmpQueueId;
    readonly type: 'Ump';
  }

  /** @name PolkadotRuntimeParachainsInclusionUmpQueueId (467) */
  interface PolkadotRuntimeParachainsInclusionUmpQueueId extends Enum {
    readonly isPara: boolean;
    readonly asPara: u32;
    readonly type: 'Para';
  }

  /** @name SpConsensusBeefyEquivocationProof (471) */
  interface SpConsensusBeefyEquivocationProof extends Struct {
    readonly first: SpConsensusBeefyVoteMessage;
    readonly second: SpConsensusBeefyVoteMessage;
  }

  /** @name PolkadotRuntimeCommonClaimsPalletEvent (486) */
  interface PolkadotRuntimeCommonClaimsPalletEvent extends Enum {
    readonly isClaimed: boolean;
    readonly asClaimed: {
      readonly who: AccountId32;
      readonly ethereumAddress: EthereumAddress;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Claimed';
  }

  /** @name PolkadotRuntimeParachainsInclusionPalletEvent (501) */
  interface PolkadotRuntimeParachainsInclusionPalletEvent extends Enum {
    readonly isCandidateBacked: boolean;
    readonly asCandidateBacked: ITuple<[PolkadotPrimitivesV6CandidateReceipt, Bytes, u32, u32]>;
    readonly isCandidateIncluded: boolean;
    readonly asCandidateIncluded: ITuple<[PolkadotPrimitivesV6CandidateReceipt, Bytes, u32, u32]>;
    readonly isCandidateTimedOut: boolean;
    readonly asCandidateTimedOut: ITuple<[PolkadotPrimitivesV6CandidateReceipt, Bytes, u32]>;
    readonly isUpwardMessagesReceived: boolean;
    readonly asUpwardMessagesReceived: {
      readonly from: u32;
      readonly count: u32;
    } & Struct;
    readonly type: 'CandidateBacked' | 'CandidateIncluded' | 'CandidateTimedOut' | 'UpwardMessagesReceived';
  }

  /** @name PolkadotPrimitivesV6CandidateReceipt (502) */
  interface PolkadotPrimitivesV6CandidateReceipt extends Struct {
    readonly descriptor: PolkadotPrimitivesV6CandidateDescriptor;
    readonly commitmentsHash: H256;
  }

  /** @name PolkadotRuntimeParachainsParasPalletEvent (505) */
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

  /** @name PolkadotRuntimeParachainsHrmpPalletEvent (506) */
  interface PolkadotRuntimeParachainsHrmpPalletEvent extends Enum {
    readonly isOpenChannelRequested: boolean;
    readonly asOpenChannelRequested: {
      readonly sender: u32;
      readonly recipient: u32;
      readonly proposedMaxCapacity: u32;
      readonly proposedMaxMessageSize: u32;
    } & Struct;
    readonly isOpenChannelCanceled: boolean;
    readonly asOpenChannelCanceled: {
      readonly byParachain: u32;
      readonly channelId: PolkadotParachainPrimitivesPrimitivesHrmpChannelId;
    } & Struct;
    readonly isOpenChannelAccepted: boolean;
    readonly asOpenChannelAccepted: {
      readonly sender: u32;
      readonly recipient: u32;
    } & Struct;
    readonly isChannelClosed: boolean;
    readonly asChannelClosed: {
      readonly byParachain: u32;
      readonly channelId: PolkadotParachainPrimitivesPrimitivesHrmpChannelId;
    } & Struct;
    readonly isHrmpChannelForceOpened: boolean;
    readonly asHrmpChannelForceOpened: {
      readonly sender: u32;
      readonly recipient: u32;
      readonly proposedMaxCapacity: u32;
      readonly proposedMaxMessageSize: u32;
    } & Struct;
    readonly isHrmpSystemChannelOpened: boolean;
    readonly asHrmpSystemChannelOpened: {
      readonly sender: u32;
      readonly recipient: u32;
      readonly proposedMaxCapacity: u32;
      readonly proposedMaxMessageSize: u32;
    } & Struct;
    readonly isOpenChannelDepositsUpdated: boolean;
    readonly asOpenChannelDepositsUpdated: {
      readonly sender: u32;
      readonly recipient: u32;
    } & Struct;
    readonly type: 'OpenChannelRequested' | 'OpenChannelCanceled' | 'OpenChannelAccepted' | 'ChannelClosed' | 'HrmpChannelForceOpened' | 'HrmpSystemChannelOpened' | 'OpenChannelDepositsUpdated';
  }

  /** @name PolkadotRuntimeParachainsDisputesPalletEvent (507) */
  interface PolkadotRuntimeParachainsDisputesPalletEvent extends Enum {
    readonly isDisputeInitiated: boolean;
    readonly asDisputeInitiated: ITuple<[H256, PolkadotRuntimeParachainsDisputesDisputeLocation]>;
    readonly isDisputeConcluded: boolean;
    readonly asDisputeConcluded: ITuple<[H256, PolkadotRuntimeParachainsDisputesDisputeResult]>;
    readonly isRevert: boolean;
    readonly asRevert: u32;
    readonly type: 'DisputeInitiated' | 'DisputeConcluded' | 'Revert';
  }

  /** @name PolkadotRuntimeParachainsDisputesDisputeLocation (508) */
  interface PolkadotRuntimeParachainsDisputesDisputeLocation extends Enum {
    readonly isLocal: boolean;
    readonly isRemote: boolean;
    readonly type: 'Local' | 'Remote';
  }

  /** @name PolkadotRuntimeParachainsDisputesDisputeResult (509) */
  interface PolkadotRuntimeParachainsDisputesDisputeResult extends Enum {
    readonly isValid: boolean;
    readonly isInvalid: boolean;
    readonly type: 'Valid' | 'Invalid';
  }

  /** @name PolkadotRuntimeCommonParasRegistrarPalletEvent (510) */
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

  /** @name PolkadotRuntimeCommonSlotsPalletEvent (511) */
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

  /** @name PolkadotRuntimeCommonAuctionsPalletEvent (512) */
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

  /** @name PolkadotRuntimeCommonCrowdloanPalletEvent (513) */
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

  /** @name PalletXcmEvent (517) */
  interface PalletXcmEvent extends Enum {
    readonly isAttempted: boolean;
    readonly asAttempted: {
      readonly outcome: StagingXcmV4TraitsOutcome;
    } & Struct;
    readonly isSent: boolean;
    readonly asSent: {
      readonly origin: StagingXcmV4Location;
      readonly destination: StagingXcmV4Location;
      readonly message: StagingXcmV4Xcm;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isUnexpectedResponse: boolean;
    readonly asUnexpectedResponse: {
      readonly origin: StagingXcmV4Location;
      readonly queryId: u64;
    } & Struct;
    readonly isResponseReady: boolean;
    readonly asResponseReady: {
      readonly queryId: u64;
      readonly response: StagingXcmV4Response;
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
      readonly origin: StagingXcmV4Location;
      readonly queryId: u64;
      readonly expectedLocation: Option<StagingXcmV4Location>;
    } & Struct;
    readonly isInvalidResponderVersion: boolean;
    readonly asInvalidResponderVersion: {
      readonly origin: StagingXcmV4Location;
      readonly queryId: u64;
    } & Struct;
    readonly isResponseTaken: boolean;
    readonly asResponseTaken: {
      readonly queryId: u64;
    } & Struct;
    readonly isAssetsTrapped: boolean;
    readonly asAssetsTrapped: {
      readonly hash_: H256;
      readonly origin: StagingXcmV4Location;
      readonly assets: XcmVersionedAssets;
    } & Struct;
    readonly isVersionChangeNotified: boolean;
    readonly asVersionChangeNotified: {
      readonly destination: StagingXcmV4Location;
      readonly result: u32;
      readonly cost: StagingXcmV4AssetAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isSupportedVersionChanged: boolean;
    readonly asSupportedVersionChanged: {
      readonly location: StagingXcmV4Location;
      readonly version: u32;
    } & Struct;
    readonly isNotifyTargetSendFail: boolean;
    readonly asNotifyTargetSendFail: {
      readonly location: StagingXcmV4Location;
      readonly queryId: u64;
      readonly error: XcmV3TraitsError;
    } & Struct;
    readonly isNotifyTargetMigrationFail: boolean;
    readonly asNotifyTargetMigrationFail: {
      readonly location: XcmVersionedLocation;
      readonly queryId: u64;
    } & Struct;
    readonly isInvalidQuerierVersion: boolean;
    readonly asInvalidQuerierVersion: {
      readonly origin: StagingXcmV4Location;
      readonly queryId: u64;
    } & Struct;
    readonly isInvalidQuerier: boolean;
    readonly asInvalidQuerier: {
      readonly origin: StagingXcmV4Location;
      readonly queryId: u64;
      readonly expectedQuerier: StagingXcmV4Location;
      readonly maybeActualQuerier: Option<StagingXcmV4Location>;
    } & Struct;
    readonly isVersionNotifyStarted: boolean;
    readonly asVersionNotifyStarted: {
      readonly destination: StagingXcmV4Location;
      readonly cost: StagingXcmV4AssetAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isVersionNotifyRequested: boolean;
    readonly asVersionNotifyRequested: {
      readonly destination: StagingXcmV4Location;
      readonly cost: StagingXcmV4AssetAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isVersionNotifyUnrequested: boolean;
    readonly asVersionNotifyUnrequested: {
      readonly destination: StagingXcmV4Location;
      readonly cost: StagingXcmV4AssetAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isFeesPaid: boolean;
    readonly asFeesPaid: {
      readonly paying: StagingXcmV4Location;
      readonly fees: StagingXcmV4AssetAssets;
    } & Struct;
    readonly isAssetsClaimed: boolean;
    readonly asAssetsClaimed: {
      readonly hash_: H256;
      readonly origin: StagingXcmV4Location;
      readonly assets: XcmVersionedAssets;
    } & Struct;
    readonly isVersionMigrationFinished: boolean;
    readonly asVersionMigrationFinished: {
      readonly version: u32;
    } & Struct;
    readonly type: 'Attempted' | 'Sent' | 'UnexpectedResponse' | 'ResponseReady' | 'Notified' | 'NotifyOverweight' | 'NotifyDispatchError' | 'NotifyDecodeFailed' | 'InvalidResponder' | 'InvalidResponderVersion' | 'ResponseTaken' | 'AssetsTrapped' | 'VersionChangeNotified' | 'SupportedVersionChanged' | 'NotifyTargetSendFail' | 'NotifyTargetMigrationFail' | 'InvalidQuerierVersion' | 'InvalidQuerier' | 'VersionNotifyStarted' | 'VersionNotifyRequested' | 'VersionNotifyUnrequested' | 'FeesPaid' | 'AssetsClaimed' | 'VersionMigrationFinished';
  }

  /** @name StagingXcmV4TraitsOutcome (518) */
  interface StagingXcmV4TraitsOutcome extends Enum {
    readonly isComplete: boolean;
    readonly asComplete: {
      readonly used: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isIncomplete: boolean;
    readonly asIncomplete: {
      readonly used: SpWeightsWeightV2Weight;
      readonly error: XcmV3TraitsError;
    } & Struct;
    readonly isError: boolean;
    readonly asError: {
      readonly error: XcmV3TraitsError;
    } & Struct;
    readonly type: 'Complete' | 'Incomplete' | 'Error';
  }

  /** @name PalletBalancesIdAmountRuntimeHoldReason (578) */
  interface PalletBalancesIdAmountRuntimeHoldReason extends Struct {
    readonly id: PolkadotRuntimeRuntimeHoldReason;
    readonly amount: u128;
  }

  /** @name PolkadotRuntimeRuntimeHoldReason (579) */
  interface PolkadotRuntimeRuntimeHoldReason extends Enum {
    readonly isPreimage: boolean;
    readonly asPreimage: PalletPreimageHoldReason;
    readonly isStateTrieMigration: boolean;
    readonly asStateTrieMigration: PalletStateTrieMigrationHoldReason;
    readonly type: 'Preimage' | 'StateTrieMigration';
  }

  /** @name PalletBalancesIdAmountRuntimeFreezeReason (584) */
  interface PalletBalancesIdAmountRuntimeFreezeReason extends Struct {
    readonly id: PolkadotRuntimeRuntimeFreezeReason;
    readonly amount: u128;
  }

  /** @name PolkadotRuntimeRuntimeFreezeReason (585) */
  interface PolkadotRuntimeRuntimeFreezeReason extends Enum {
    readonly isNominationPools: boolean;
    readonly asNominationPools: PalletNominationPoolsFreezeReason;
    readonly type: 'NominationPools';
  }

  /** @name PalletReferendaReferendumInfo (645) */
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

  /** @name PalletReferendaReferendumStatus (646) */
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

  /** @name PolkadotRuntimeCommonClaimsPalletError (664) */
  interface PolkadotRuntimeCommonClaimsPalletError extends Enum {
    readonly isInvalidEthereumSignature: boolean;
    readonly isSignerHasNoClaim: boolean;
    readonly isSenderHasNoClaim: boolean;
    readonly isPotUnderflow: boolean;
    readonly isInvalidStatement: boolean;
    readonly isVestedBalanceExists: boolean;
    readonly type: 'InvalidEthereumSignature' | 'SignerHasNoClaim' | 'SenderHasNoClaim' | 'PotUnderflow' | 'InvalidStatement' | 'VestedBalanceExists';
  }

  /** @name PolkadotRuntimeParachainsConfigurationHostConfiguration (742) */
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
    readonly asyncBackingParams: PolkadotPrimitivesV6AsyncBackingAsyncBackingParams;
    readonly maxPovSize: u32;
    readonly maxDownwardMessageSize: u32;
    readonly hrmpMaxParachainOutboundChannels: u32;
    readonly hrmpSenderDeposit: u128;
    readonly hrmpRecipientDeposit: u128;
    readonly hrmpChannelMaxCapacity: u32;
    readonly hrmpChannelMaxTotalSize: u32;
    readonly hrmpMaxParachainInboundChannels: u32;
    readonly hrmpChannelMaxMessageSize: u32;
    readonly executorParams: PolkadotPrimitivesV6ExecutorParams;
    readonly codeRetentionPeriod: u32;
    readonly coretimeCores: u32;
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
    readonly minimumBackingVotes: u32;
    readonly nodeFeatures: BitVec;
    readonly approvalVotingParams: PolkadotPrimitivesVstagingApprovalVotingParams;
  }

  /** @name PolkadotRuntimeParachainsConfigurationPalletError (745) */
  interface PolkadotRuntimeParachainsConfigurationPalletError extends Enum {
    readonly isInvalidNewValue: boolean;
    readonly type: 'InvalidNewValue';
  }

  /** @name PolkadotRuntimeParachainsSharedAllowedRelayParentsTracker (748) */
  interface PolkadotRuntimeParachainsSharedAllowedRelayParentsTracker extends Struct {
    readonly buffer: Vec<ITuple<[H256, H256]>>;
    readonly latestNumber: u32;
  }

  /** @name PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord (751) */
  interface PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord extends Struct {
    readonly bitfield: BitVec;
    readonly submittedAt: u32;
  }

  /** @name PolkadotRuntimeParachainsInclusionCandidatePendingAvailability (752) */
  interface PolkadotRuntimeParachainsInclusionCandidatePendingAvailability extends Struct {
    readonly core: u32;
    readonly hash_: H256;
    readonly descriptor: PolkadotPrimitivesV6CandidateDescriptor;
    readonly availabilityVotes: BitVec;
    readonly backers: BitVec;
    readonly relayParentNumber: u32;
    readonly backedInNumber: u32;
    readonly backingGroup: u32;
  }

  /** @name PolkadotRuntimeParachainsInclusionPalletError (753) */
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

  /** @name PolkadotPrimitivesV6ScrapedOnChainVotes (754) */
  interface PolkadotPrimitivesV6ScrapedOnChainVotes extends Struct {
    readonly session: u32;
    readonly backingValidatorsPerCandidate: Vec<ITuple<[PolkadotPrimitivesV6CandidateReceipt, Vec<ITuple<[u32, PolkadotPrimitivesV6ValidityAttestation]>>]>>;
    readonly disputes: Vec<PolkadotPrimitivesV6DisputeStatementSet>;
  }

  /** @name PolkadotRuntimeParachainsParasInherentPalletError (759) */
  interface PolkadotRuntimeParachainsParasInherentPalletError extends Enum {
    readonly isTooManyInclusionInherents: boolean;
    readonly isInvalidParentHeader: boolean;
    readonly isCandidateConcludedInvalid: boolean;
    readonly isInherentOverweight: boolean;
    readonly isDisputeStatementsUnsortedOrDuplicates: boolean;
    readonly isDisputeInvalid: boolean;
    readonly isBackedByDisabled: boolean;
    readonly isBackedOnUnscheduledCore: boolean;
    readonly isUnscheduledCandidate: boolean;
    readonly type: 'TooManyInclusionInherents' | 'InvalidParentHeader' | 'CandidateConcludedInvalid' | 'InherentOverweight' | 'DisputeStatementsUnsortedOrDuplicates' | 'DisputeInvalid' | 'BackedByDisabled' | 'BackedOnUnscheduledCore' | 'UnscheduledCandidate';
  }

  /** @name PolkadotRuntimeParachainsSchedulerPalletCoreOccupied (762) */
  interface PolkadotRuntimeParachainsSchedulerPalletCoreOccupied extends Enum {
    readonly isFree: boolean;
    readonly isParas: boolean;
    readonly asParas: PolkadotRuntimeParachainsSchedulerPalletParasEntry;
    readonly type: 'Free' | 'Paras';
  }

  /** @name PolkadotRuntimeParachainsSchedulerPalletParasEntry (763) */
  interface PolkadotRuntimeParachainsSchedulerPalletParasEntry extends Struct {
    readonly assignment: PolkadotRuntimeParachainsSchedulerCommonAssignment;
    readonly availabilityTimeouts: u32;
    readonly ttl: u32;
  }

  /** @name PolkadotRuntimeParachainsSchedulerCommonAssignment (764) */
  interface PolkadotRuntimeParachainsSchedulerCommonAssignment extends Enum {
    readonly isPool: boolean;
    readonly asPool: {
      readonly paraId: u32;
      readonly coreIndex: u32;
    } & Struct;
    readonly isBulk: boolean;
    readonly asBulk: u32;
    readonly type: 'Pool' | 'Bulk';
  }

  /** @name PolkadotRuntimeParachainsParasPvfCheckActiveVoteState (769) */
  interface PolkadotRuntimeParachainsParasPvfCheckActiveVoteState extends Struct {
    readonly votesAccept: BitVec;
    readonly votesReject: BitVec;
    readonly age: u32;
    readonly createdAt: u32;
    readonly causes: Vec<PolkadotRuntimeParachainsParasPvfCheckCause>;
  }

  /** @name PolkadotRuntimeParachainsParasPvfCheckCause (771) */
  interface PolkadotRuntimeParachainsParasPvfCheckCause extends Enum {
    readonly isOnboarding: boolean;
    readonly asOnboarding: u32;
    readonly isUpgrade: boolean;
    readonly asUpgrade: {
      readonly id: u32;
      readonly includedAt: u32;
      readonly setGoAhead: PolkadotRuntimeParachainsParasSetGoAhead;
    } & Struct;
    readonly type: 'Onboarding' | 'Upgrade';
  }

  /** @name PolkadotRuntimeParachainsParasSetGoAhead (772) */
  interface PolkadotRuntimeParachainsParasSetGoAhead extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name PolkadotRuntimeParachainsParasParaLifecycle (775) */
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

  /** @name PolkadotRuntimeParachainsParasParaPastCodeMeta (777) */
  interface PolkadotRuntimeParachainsParasParaPastCodeMeta extends Struct {
    readonly upgradeTimes: Vec<PolkadotRuntimeParachainsParasReplacementTimes>;
    readonly lastPruned: Option<u32>;
  }

  /** @name PolkadotRuntimeParachainsParasReplacementTimes (779) */
  interface PolkadotRuntimeParachainsParasReplacementTimes extends Struct {
    readonly expectedAt: u32;
    readonly activatedAt: u32;
  }

  /** @name PolkadotPrimitivesV6UpgradeGoAhead (781) */
  interface PolkadotPrimitivesV6UpgradeGoAhead extends Enum {
    readonly isAbort: boolean;
    readonly isGoAhead: boolean;
    readonly type: 'Abort' | 'GoAhead';
  }

  /** @name PolkadotPrimitivesV6UpgradeRestriction (782) */
  interface PolkadotPrimitivesV6UpgradeRestriction extends Enum {
    readonly isPresent: boolean;
    readonly type: 'Present';
  }

  /** @name PolkadotRuntimeParachainsParasParaGenesisArgs (783) */
  interface PolkadotRuntimeParachainsParasParaGenesisArgs extends Struct {
    readonly genesisHead: Bytes;
    readonly validationCode: Bytes;
    readonly paraKind: bool;
  }

  /** @name PolkadotRuntimeParachainsParasPalletError (784) */
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

  /** @name PolkadotRuntimeParachainsInitializerBufferedSessionChange (786) */
  interface PolkadotRuntimeParachainsInitializerBufferedSessionChange extends Struct {
    readonly validators: Vec<PolkadotPrimitivesV6ValidatorAppPublic>;
    readonly queued: Vec<PolkadotPrimitivesV6ValidatorAppPublic>;
    readonly sessionIndex: u32;
  }

  /** @name PolkadotCorePrimitivesInboundDownwardMessage (788) */
  interface PolkadotCorePrimitivesInboundDownwardMessage extends Struct {
    readonly sentAt: u32;
    readonly msg: Bytes;
  }

  /** @name PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest (789) */
  interface PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest extends Struct {
    readonly confirmed: bool;
    readonly age: u32;
    readonly senderDeposit: u128;
    readonly maxMessageSize: u32;
    readonly maxCapacity: u32;
    readonly maxTotalSize: u32;
  }

  /** @name PolkadotRuntimeParachainsHrmpHrmpChannel (791) */
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

  /** @name PolkadotCorePrimitivesInboundHrmpMessage (793) */
  interface PolkadotCorePrimitivesInboundHrmpMessage extends Struct {
    readonly sentAt: u32;
    readonly data: Bytes;
  }

  /** @name PolkadotRuntimeParachainsHrmpPalletError (796) */
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
    readonly isChannelCreationNotAuthorized: boolean;
    readonly type: 'OpenHrmpChannelToSelf' | 'OpenHrmpChannelInvalidRecipient' | 'OpenHrmpChannelZeroCapacity' | 'OpenHrmpChannelCapacityExceedsLimit' | 'OpenHrmpChannelZeroMessageSize' | 'OpenHrmpChannelMessageSizeExceedsLimit' | 'OpenHrmpChannelAlreadyExists' | 'OpenHrmpChannelAlreadyRequested' | 'OpenHrmpChannelLimitExceeded' | 'AcceptHrmpChannelDoesntExist' | 'AcceptHrmpChannelAlreadyConfirmed' | 'AcceptHrmpChannelLimitExceeded' | 'CloseHrmpChannelUnauthorized' | 'CloseHrmpChannelDoesntExist' | 'CloseHrmpChannelAlreadyUnderway' | 'CancelHrmpOpenChannelUnauthorized' | 'OpenHrmpChannelDoesntExist' | 'OpenHrmpChannelAlreadyConfirmed' | 'WrongWitness' | 'ChannelCreationNotAuthorized';
  }

  /** @name PolkadotPrimitivesV6SessionInfo (798) */
  interface PolkadotPrimitivesV6SessionInfo extends Struct {
    readonly activeValidatorIndices: Vec<u32>;
    readonly randomSeed: U8aFixed;
    readonly disputePeriod: u32;
    readonly validators: PolkadotPrimitivesV6IndexedVecValidatorIndex;
    readonly discoveryKeys: Vec<SpAuthorityDiscoveryAppPublic>;
    readonly assignmentKeys: Vec<PolkadotPrimitivesV6AssignmentAppPublic>;
    readonly validatorGroups: PolkadotPrimitivesV6IndexedVecGroupIndex;
    readonly nCores: u32;
    readonly zerothDelayTrancheWidth: u32;
    readonly relayVrfModuloSamples: u32;
    readonly nDelayTranches: u32;
    readonly noShowSlots: u32;
    readonly neededApprovals: u32;
  }

  /** @name PolkadotPrimitivesV6IndexedVecValidatorIndex (799) */
  interface PolkadotPrimitivesV6IndexedVecValidatorIndex extends Vec<PolkadotPrimitivesV6ValidatorAppPublic> {}

  /** @name PolkadotPrimitivesV6IndexedVecGroupIndex (800) */
  interface PolkadotPrimitivesV6IndexedVecGroupIndex extends Vec<Vec<u32>> {}

  /** @name PolkadotPrimitivesV6DisputeState (802) */
  interface PolkadotPrimitivesV6DisputeState extends Struct {
    readonly validatorsFor: BitVec;
    readonly validatorsAgainst: BitVec;
    readonly start: u32;
    readonly concludedAt: Option<u32>;
  }

  /** @name PolkadotRuntimeParachainsDisputesPalletError (804) */
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

  /** @name PolkadotPrimitivesV6SlashingPendingSlashes (805) */
  interface PolkadotPrimitivesV6SlashingPendingSlashes extends Struct {
    readonly keys_: BTreeMap<u32, PolkadotPrimitivesV6ValidatorAppPublic>;
    readonly kind: PolkadotPrimitivesV6SlashingSlashingOffenceKind;
  }

  /** @name PolkadotRuntimeParachainsDisputesSlashingPalletError (809) */
  interface PolkadotRuntimeParachainsDisputesSlashingPalletError extends Enum {
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isInvalidSessionIndex: boolean;
    readonly isInvalidCandidateHash: boolean;
    readonly isInvalidValidatorIndex: boolean;
    readonly isValidatorIndexIdMismatch: boolean;
    readonly isDuplicateSlashingReport: boolean;
    readonly type: 'InvalidKeyOwnershipProof' | 'InvalidSessionIndex' | 'InvalidCandidateHash' | 'InvalidValidatorIndex' | 'ValidatorIndexIdMismatch' | 'DuplicateSlashingReport';
  }

  /** @name PolkadotRuntimeCommonParasRegistrarParaInfo (810) */
  interface PolkadotRuntimeCommonParasRegistrarParaInfo extends Struct {
    readonly manager: AccountId32;
    readonly deposit: u128;
    readonly locked: Option<bool>;
  }

  /** @name PolkadotRuntimeCommonParasRegistrarPalletError (812) */
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

  /** @name PolkadotRuntimeCommonSlotsPalletError (814) */
  interface PolkadotRuntimeCommonSlotsPalletError extends Enum {
    readonly isParaNotOnboarding: boolean;
    readonly isLeaseError: boolean;
    readonly type: 'ParaNotOnboarding' | 'LeaseError';
  }

  /** @name PolkadotRuntimeCommonAuctionsPalletError (819) */
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

  /** @name PolkadotRuntimeCommonCrowdloanFundInfo (820) */
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

  /** @name PolkadotRuntimeCommonCrowdloanLastContribution (821) */
  interface PolkadotRuntimeCommonCrowdloanLastContribution extends Enum {
    readonly isNever: boolean;
    readonly isPreEnding: boolean;
    readonly asPreEnding: u32;
    readonly isEnding: boolean;
    readonly asEnding: u32;
    readonly type: 'Never' | 'PreEnding' | 'Ending';
  }

  /** @name PolkadotRuntimeCommonCrowdloanPalletError (822) */
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

  /** @name PalletXcmQueryStatus (823) */
  interface PalletXcmQueryStatus extends Enum {
    readonly isPending: boolean;
    readonly asPending: {
      readonly responder: XcmVersionedLocation;
      readonly maybeMatchQuerier: Option<XcmVersionedLocation>;
      readonly maybeNotify: Option<ITuple<[u8, u8]>>;
      readonly timeout: u32;
    } & Struct;
    readonly isVersionNotifier: boolean;
    readonly asVersionNotifier: {
      readonly origin: XcmVersionedLocation;
      readonly isActive: bool;
    } & Struct;
    readonly isReady: boolean;
    readonly asReady: {
      readonly response: XcmVersionedResponse;
      readonly at: u32;
    } & Struct;
    readonly type: 'Pending' | 'VersionNotifier' | 'Ready';
  }

  /** @name XcmVersionedResponse (827) */
  interface XcmVersionedResponse extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2Response;
    readonly isV3: boolean;
    readonly asV3: XcmV3Response;
    readonly isV4: boolean;
    readonly asV4: StagingXcmV4Response;
    readonly type: 'V2' | 'V3' | 'V4';
  }

  /** @name PalletXcmVersionMigrationStage (833) */
  interface PalletXcmVersionMigrationStage extends Enum {
    readonly isMigrateSupportedVersion: boolean;
    readonly isMigrateVersionNotifiers: boolean;
    readonly isNotifyCurrentTargets: boolean;
    readonly asNotifyCurrentTargets: Option<Bytes>;
    readonly isMigrateAndNotifyOldTargets: boolean;
    readonly type: 'MigrateSupportedVersion' | 'MigrateVersionNotifiers' | 'NotifyCurrentTargets' | 'MigrateAndNotifyOldTargets';
  }

  /** @name PalletXcmRemoteLockedFungibleRecord (836) */
  interface PalletXcmRemoteLockedFungibleRecord extends Struct {
    readonly amount: u128;
    readonly owner: XcmVersionedLocation;
    readonly locker: XcmVersionedLocation;
    readonly consumers: Vec<ITuple<[Null, u128]>>;
  }

  /** @name PalletXcmError (843) */
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
    readonly isCannotCheckOutTeleport: boolean;
    readonly isLowBalance: boolean;
    readonly isTooManyLocks: boolean;
    readonly isAccountNotSovereign: boolean;
    readonly isFeesNotMet: boolean;
    readonly isLockNotFound: boolean;
    readonly isInUse: boolean;
    readonly isInvalidAssetNotConcrete: boolean;
    readonly isInvalidAssetUnknownReserve: boolean;
    readonly isInvalidAssetUnsupportedReserve: boolean;
    readonly isTooManyReserves: boolean;
    readonly isLocalExecutionIncomplete: boolean;
    readonly type: 'Unreachable' | 'SendFailure' | 'Filtered' | 'UnweighableMessage' | 'DestinationNotInvertible' | 'Empty' | 'CannotReanchor' | 'TooManyAssets' | 'InvalidOrigin' | 'BadVersion' | 'BadLocation' | 'NoSubscription' | 'AlreadySubscribed' | 'CannotCheckOutTeleport' | 'LowBalance' | 'TooManyLocks' | 'AccountNotSovereign' | 'FeesNotMet' | 'LockNotFound' | 'InUse' | 'InvalidAssetNotConcrete' | 'InvalidAssetUnknownReserve' | 'InvalidAssetUnsupportedReserve' | 'TooManyReserves' | 'LocalExecutionIncomplete';
  }

  /** @name PalletTransactionPaymentChargeTransactionPayment (866) */
  interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

  /** @name PolkadotRuntimeCommonClaimsPrevalidateAttests (867) */
  type PolkadotRuntimeCommonClaimsPrevalidateAttests = Null;

  /** @name PolkadotRuntimeRuntime (870) */
  type PolkadotRuntimeRuntime = Null;

} // declare module

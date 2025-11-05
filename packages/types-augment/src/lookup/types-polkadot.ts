// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { BTreeMap, BTreeSet, BitVec, Bytes, Compact, Enum, Null, Option, Result, Struct, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { EthereumAddress } from '@polkadot/types/interfaces/eth';
import type { AccountId32, Call, H256, PerU16, Perbill, Perquintill } from '@polkadot/types/interfaces/runtime';
import type { Event } from '@polkadot/types/interfaces/system';

declare module '@polkadot/types/lookup' {
  /** @name PalletBalancesUnexpectedKind (41) */
  interface PalletBalancesUnexpectedKind extends Enum {
    readonly isBalanceUpdated: boolean;
    readonly isFailedToMutateAccount: boolean;
    readonly type: 'BalanceUpdated' | 'FailedToMutateAccount';
  }

  /** @name PalletSessionHistoricalPalletEvent (52) */
  interface PalletSessionHistoricalPalletEvent extends Enum {
    readonly isRootStored: boolean;
    readonly asRootStored: {
      readonly index: u32;
    } & Struct;
    readonly isRootsPruned: boolean;
    readonly asRootsPruned: {
      readonly upTo: u32;
    } & Struct;
    readonly type: 'RootStored' | 'RootsPruned';
  }

  /** @name PolkadotRuntimeCommonImplsVersionedLocatableAsset (59) */
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
    readonly isV5: boolean;
    readonly asV5: {
      readonly location: StagingXcmV5Location;
      readonly assetId: StagingXcmV5AssetAssetId;
    } & Struct;
    readonly type: 'V3' | 'V4' | 'V5';
  }

  /** @name StagingXcmV3MultiLocation (60) */
  interface StagingXcmV3MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: XcmV3Junctions;
  }

  /** @name XcmV3Junctions (61) */
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

  /** @name XcmV3Junction (62) */
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

  /** @name XcmV3JunctionNetworkId (65) */
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

  /** @name XcmV3JunctionBodyId (68) */
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

  /** @name XcmV3JunctionBodyPart (69) */
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

  /** @name XcmV3MultiassetAssetId (70) */
  interface XcmV3MultiassetAssetId extends Enum {
    readonly isConcrete: boolean;
    readonly asConcrete: StagingXcmV3MultiLocation;
    readonly isAbstract: boolean;
    readonly asAbstract: U8aFixed;
    readonly type: 'Concrete' | 'Abstract';
  }

  /** @name StagingXcmV4Location (71) */
  interface StagingXcmV4Location extends Struct {
    readonly parents: u8;
    readonly interior: StagingXcmV4Junctions;
  }

  /** @name StagingXcmV4Junctions (72) */
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

  /** @name StagingXcmV4Junction (74) */
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

  /** @name StagingXcmV4JunctionNetworkId (76) */
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

  /** @name StagingXcmV4AssetAssetId (84) */
  interface StagingXcmV4AssetAssetId extends StagingXcmV4Location {}

  /** @name StagingXcmV5Location (85) */
  interface StagingXcmV5Location extends Struct {
    readonly parents: u8;
    readonly interior: StagingXcmV5Junctions;
  }

  /** @name StagingXcmV5Junctions (86) */
  interface StagingXcmV5Junctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: Vec<StagingXcmV5Junction>;
    readonly isX2: boolean;
    readonly asX2: Vec<StagingXcmV5Junction>;
    readonly isX3: boolean;
    readonly asX3: Vec<StagingXcmV5Junction>;
    readonly isX4: boolean;
    readonly asX4: Vec<StagingXcmV5Junction>;
    readonly isX5: boolean;
    readonly asX5: Vec<StagingXcmV5Junction>;
    readonly isX6: boolean;
    readonly asX6: Vec<StagingXcmV5Junction>;
    readonly isX7: boolean;
    readonly asX7: Vec<StagingXcmV5Junction>;
    readonly isX8: boolean;
    readonly asX8: Vec<StagingXcmV5Junction>;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name StagingXcmV5Junction (88) */
  interface StagingXcmV5Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: Option<StagingXcmV5JunctionNetworkId>;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: Option<StagingXcmV5JunctionNetworkId>;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: Option<StagingXcmV5JunctionNetworkId>;
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
    readonly asGlobalConsensus: StagingXcmV5JunctionNetworkId;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality' | 'GlobalConsensus';
  }

  /** @name StagingXcmV5JunctionNetworkId (90) */
  interface StagingXcmV5JunctionNetworkId extends Enum {
    readonly isByGenesis: boolean;
    readonly asByGenesis: U8aFixed;
    readonly isByFork: boolean;
    readonly asByFork: {
      readonly blockNumber: u64;
      readonly blockHash: U8aFixed;
    } & Struct;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly isEthereum: boolean;
    readonly asEthereum: {
      readonly chainId: Compact<u64>;
    } & Struct;
    readonly isBitcoinCore: boolean;
    readonly isBitcoinCash: boolean;
    readonly isPolkadotBulletin: boolean;
    readonly type: 'ByGenesis' | 'ByFork' | 'Polkadot' | 'Kusama' | 'Ethereum' | 'BitcoinCore' | 'BitcoinCash' | 'PolkadotBulletin';
  }

  /** @name StagingXcmV5AssetAssetId (98) */
  interface StagingXcmV5AssetAssetId extends StagingXcmV5Location {}

  /** @name XcmVersionedLocation (99) */
  interface XcmVersionedLocation extends Enum {
    readonly isV3: boolean;
    readonly asV3: StagingXcmV3MultiLocation;
    readonly isV4: boolean;
    readonly asV4: StagingXcmV4Location;
    readonly isV5: boolean;
    readonly asV5: StagingXcmV5Location;
    readonly type: 'V3' | 'V4' | 'V5';
  }

  /** @name PolkadotRuntimeSessionKeys (147) */
  interface PolkadotRuntimeSessionKeys extends Struct {
    readonly grandpa: SpConsensusGrandpaAppPublic;
    readonly babe: SpConsensusBabeAppPublic;
    readonly paraValidator: PolkadotPrimitivesV8ValidatorAppPublic;
    readonly paraAssignment: PolkadotPrimitivesV8AssignmentAppPublic;
    readonly authorityDiscovery: SpAuthorityDiscoveryAppPublic;
    readonly beefy: SpConsensusBeefyEcdsaCryptoPublic;
  }

  /** @name PolkadotPrimitivesV8ValidatorAppPublic (148) */
  interface PolkadotPrimitivesV8ValidatorAppPublic extends U8aFixed {}

  /** @name PolkadotPrimitivesV8AssignmentAppPublic (149) */
  interface PolkadotPrimitivesV8AssignmentAppPublic extends U8aFixed {}

  /** @name PolkadotRuntimeOriginCaller (169) */
  interface PolkadotRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isOrigins: boolean;
    readonly asOrigins: PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin;
    readonly isParachainsOrigin: boolean;
    readonly asParachainsOrigin: PolkadotRuntimeParachainsOriginPalletOrigin;
    readonly isXcmPallet: boolean;
    readonly asXcmPallet: PalletXcmOrigin;
    readonly type: 'System' | 'Origins' | 'ParachainsOrigin' | 'XcmPallet';
  }

  /** @name PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin (171) */
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

  /** @name PolkadotRuntimeParachainsOriginPalletOrigin (172) */
  interface PolkadotRuntimeParachainsOriginPalletOrigin extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: u32;
    readonly type: 'Parachain';
  }

  /** @name PalletXcmOrigin (174) */
  interface PalletXcmOrigin extends Enum {
    readonly isXcm: boolean;
    readonly asXcm: StagingXcmV5Location;
    readonly isResponse: boolean;
    readonly asResponse: StagingXcmV5Location;
    readonly type: 'Xcm' | 'Response';
  }

  /** @name PolkadotRuntimeCommonClaimsPalletCall (178) */
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

  /** @name PolkadotRuntimeCommonClaimsEcdsaSignature (179) */
  interface PolkadotRuntimeCommonClaimsEcdsaSignature extends U8aFixed {}

  /** @name PolkadotRuntimeCommonClaimsStatementKind (185) */
  interface PolkadotRuntimeCommonClaimsStatementKind extends Enum {
    readonly isRegular: boolean;
    readonly isSaft: boolean;
    readonly type: 'Regular' | 'Saft';
  }

  /** @name PolkadotRuntimeConstantsProxyProxyType (192) */
  interface PolkadotRuntimeConstantsProxyProxyType extends Enum {
    readonly isAny: boolean;
    readonly isNonTransfer: boolean;
    readonly isGovernance: boolean;
    readonly isStaking: boolean;
    readonly isCancelProxy: boolean;
    readonly isAuction: boolean;
    readonly isNominationPools: boolean;
    readonly isParaRegistration: boolean;
    readonly type: 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | 'CancelProxy' | 'Auction' | 'NominationPools' | 'ParaRegistration';
  }

  /** @name PolkadotRuntimeNposCompactSolution16 (200) */
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

  /** @name PalletStakingAsyncAhClientCall (274) */
  interface PalletStakingAsyncAhClientCall extends Enum {
    readonly isValidatorSet: boolean;
    readonly asValidatorSet: {
      readonly report: PalletStakingAsyncRcClientValidatorSetReport;
    } & Struct;
    readonly isSetMode: boolean;
    readonly asSetMode: {
      readonly mode: PalletStakingAsyncAhClientOperatingMode;
    } & Struct;
    readonly isForceOnMigrationEnd: boolean;
    readonly type: 'ValidatorSet' | 'SetMode' | 'ForceOnMigrationEnd';
  }

  /** @name PalletStakingAsyncRcClientValidatorSetReport (275) */
  interface PalletStakingAsyncRcClientValidatorSetReport extends Struct {
    readonly newValidatorSet: Vec<AccountId32>;
    readonly id: u32;
    readonly pruneUpTo: Option<u32>;
    readonly leftover: bool;
  }

  /** @name PalletStakingAsyncAhClientOperatingMode (276) */
  interface PalletStakingAsyncAhClientOperatingMode extends Enum {
    readonly isPassive: boolean;
    readonly isBuffered: boolean;
    readonly isActive: boolean;
    readonly type: 'Passive' | 'Buffered' | 'Active';
  }

  /** @name PolkadotRuntimeParachainsConfigurationPalletCall (277) */
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
      readonly new_: PolkadotPrimitivesV8AsyncBackingAsyncBackingParams;
    } & Struct;
    readonly isSetExecutorParams: boolean;
    readonly asSetExecutorParams: {
      readonly new_: PolkadotPrimitivesV8ExecutorParams;
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
      readonly new_: PolkadotPrimitivesV8ApprovalVotingParams;
    } & Struct;
    readonly isSetSchedulerParams: boolean;
    readonly asSetSchedulerParams: {
      readonly new_: PolkadotPrimitivesV8SchedulerParams;
    } & Struct;
    readonly type: 'SetValidationUpgradeCooldown' | 'SetValidationUpgradeDelay' | 'SetCodeRetentionPeriod' | 'SetMaxCodeSize' | 'SetMaxPovSize' | 'SetMaxHeadDataSize' | 'SetCoretimeCores' | 'SetGroupRotationFrequency' | 'SetParasAvailabilityPeriod' | 'SetSchedulingLookahead' | 'SetMaxValidatorsPerCore' | 'SetMaxValidators' | 'SetDisputePeriod' | 'SetDisputePostConclusionAcceptancePeriod' | 'SetNoShowSlots' | 'SetNDelayTranches' | 'SetZerothDelayTrancheWidth' | 'SetNeededApprovals' | 'SetRelayVrfModuloSamples' | 'SetMaxUpwardQueueCount' | 'SetMaxUpwardQueueSize' | 'SetMaxDownwardMessageSize' | 'SetMaxUpwardMessageSize' | 'SetMaxUpwardMessageNumPerCandidate' | 'SetHrmpOpenRequestTtl' | 'SetHrmpSenderDeposit' | 'SetHrmpRecipientDeposit' | 'SetHrmpChannelMaxCapacity' | 'SetHrmpChannelMaxTotalSize' | 'SetHrmpMaxParachainInboundChannels' | 'SetHrmpChannelMaxMessageSize' | 'SetHrmpMaxParachainOutboundChannels' | 'SetHrmpMaxMessageNumPerCandidate' | 'SetPvfVotingTtl' | 'SetMinimumValidationUpgradeDelay' | 'SetBypassConsistencyCheck' | 'SetAsyncBackingParams' | 'SetExecutorParams' | 'SetOnDemandBaseFee' | 'SetOnDemandFeeVariability' | 'SetOnDemandQueueMaxSize' | 'SetOnDemandTargetQueueUtilization' | 'SetMinimumBackingVotes' | 'SetNodeFeature' | 'SetApprovalVotingParams' | 'SetSchedulerParams';
  }

  /** @name PolkadotPrimitivesV8AsyncBackingAsyncBackingParams (278) */
  interface PolkadotPrimitivesV8AsyncBackingAsyncBackingParams extends Struct {
    readonly maxCandidateDepth: u32;
    readonly allowedAncestryLen: u32;
  }

  /** @name PolkadotPrimitivesV8ExecutorParams (279) */
  interface PolkadotPrimitivesV8ExecutorParams extends Vec<PolkadotPrimitivesV8ExecutorParamsExecutorParam> {}

  /** @name PolkadotPrimitivesV8ExecutorParamsExecutorParam (281) */
  interface PolkadotPrimitivesV8ExecutorParamsExecutorParam extends Enum {
    readonly isMaxMemoryPages: boolean;
    readonly asMaxMemoryPages: u32;
    readonly isStackLogicalMax: boolean;
    readonly asStackLogicalMax: u32;
    readonly isStackNativeMax: boolean;
    readonly asStackNativeMax: u32;
    readonly isPrecheckingMaxMemory: boolean;
    readonly asPrecheckingMaxMemory: u64;
    readonly isPvfPrepTimeout: boolean;
    readonly asPvfPrepTimeout: ITuple<[PolkadotPrimitivesV8PvfPrepKind, u64]>;
    readonly isPvfExecTimeout: boolean;
    readonly asPvfExecTimeout: ITuple<[PolkadotPrimitivesV8PvfExecKind, u64]>;
    readonly isWasmExtBulkMemory: boolean;
    readonly type: 'MaxMemoryPages' | 'StackLogicalMax' | 'StackNativeMax' | 'PrecheckingMaxMemory' | 'PvfPrepTimeout' | 'PvfExecTimeout' | 'WasmExtBulkMemory';
  }

  /** @name PolkadotPrimitivesV8PvfPrepKind (282) */
  interface PolkadotPrimitivesV8PvfPrepKind extends Enum {
    readonly isPrecheck: boolean;
    readonly isPrepare: boolean;
    readonly type: 'Precheck' | 'Prepare';
  }

  /** @name PolkadotPrimitivesV8PvfExecKind (283) */
  interface PolkadotPrimitivesV8PvfExecKind extends Enum {
    readonly isBacking: boolean;
    readonly isApproval: boolean;
    readonly type: 'Backing' | 'Approval';
  }

  /** @name PolkadotPrimitivesV8ApprovalVotingParams (284) */
  interface PolkadotPrimitivesV8ApprovalVotingParams extends Struct {
    readonly maxApprovalCoalesceCount: u32;
  }

  /** @name PolkadotPrimitivesV8SchedulerParams (285) */
  interface PolkadotPrimitivesV8SchedulerParams extends Struct {
    readonly groupRotationFrequency: u32;
    readonly parasAvailabilityPeriod: u32;
    readonly maxValidatorsPerCore: Option<u32>;
    readonly lookahead: u32;
    readonly numCores: u32;
    readonly maxAvailabilityTimeouts: u32;
    readonly onDemandQueueMaxSize: u32;
    readonly onDemandTargetQueueUtilization: Perbill;
    readonly onDemandFeeVariability: Perbill;
    readonly onDemandBaseFee: u128;
    readonly ttl: u32;
  }

  /** @name PolkadotRuntimeParachainsSharedPalletCall (286) */
  type PolkadotRuntimeParachainsSharedPalletCall = Null;

  /** @name PolkadotRuntimeParachainsInclusionPalletCall (287) */
  type PolkadotRuntimeParachainsInclusionPalletCall = Null;

  /** @name PolkadotRuntimeParachainsParasInherentPalletCall (288) */
  interface PolkadotRuntimeParachainsParasInherentPalletCall extends Enum {
    readonly isEnter: boolean;
    readonly asEnter: {
      readonly data: PolkadotPrimitivesVstagingInherentData;
    } & Struct;
    readonly type: 'Enter';
  }

  /** @name PolkadotPrimitivesVstagingInherentData (289) */
  interface PolkadotPrimitivesVstagingInherentData extends Struct {
    readonly bitfields: Vec<PolkadotPrimitivesV8SignedUncheckedSigned>;
    readonly backedCandidates: Vec<PolkadotPrimitivesVstagingBackedCandidate>;
    readonly disputes: Vec<PolkadotPrimitivesV8DisputeStatementSet>;
    readonly parentHeader: SpRuntimeHeader;
  }

  /** @name PolkadotPrimitivesV8SignedUncheckedSigned (291) */
  interface PolkadotPrimitivesV8SignedUncheckedSigned extends Struct {
    readonly payload: BitVec;
    readonly validatorIndex: u32;
    readonly signature: PolkadotPrimitivesV8ValidatorAppSignature;
  }

  /** @name BitvecOrderLsb0 (294) */
  type BitvecOrderLsb0 = Null;

  /** @name PolkadotPrimitivesV8ValidatorAppSignature (296) */
  interface PolkadotPrimitivesV8ValidatorAppSignature extends U8aFixed {}

  /** @name PolkadotPrimitivesVstagingBackedCandidate (298) */
  interface PolkadotPrimitivesVstagingBackedCandidate extends Struct {
    readonly candidate: PolkadotPrimitivesVstagingCommittedCandidateReceiptV2;
    readonly validityVotes: Vec<PolkadotPrimitivesV8ValidityAttestation>;
    readonly validatorIndices: BitVec;
  }

  /** @name PolkadotPrimitivesVstagingCommittedCandidateReceiptV2 (299) */
  interface PolkadotPrimitivesVstagingCommittedCandidateReceiptV2 extends Struct {
    readonly descriptor: PolkadotPrimitivesVstagingCandidateDescriptorV2;
    readonly commitments: PolkadotPrimitivesV8CandidateCommitments;
  }

  /** @name PolkadotPrimitivesVstagingCandidateDescriptorV2 (300) */
  interface PolkadotPrimitivesVstagingCandidateDescriptorV2 extends Struct {
    readonly paraId: u32;
    readonly relayParent: H256;
    readonly version: u8;
    readonly coreIndex: u16;
    readonly sessionIndex: u32;
    readonly reserved1: U8aFixed;
    readonly persistedValidationDataHash: H256;
    readonly povHash: H256;
    readonly erasureRoot: H256;
    readonly reserved2: U8aFixed;
    readonly paraHead: H256;
    readonly validationCodeHash: H256;
  }

  /** @name PolkadotPrimitivesV8CandidateCommitments (304) */
  interface PolkadotPrimitivesV8CandidateCommitments extends Struct {
    readonly upwardMessages: Vec<Bytes>;
    readonly horizontalMessages: Vec<PolkadotCorePrimitivesOutboundHrmpMessage>;
    readonly newValidationCode: Option<Bytes>;
    readonly headData: Bytes;
    readonly processedDownwardMessages: u32;
    readonly hrmpWatermark: u32;
  }

  /** @name PolkadotCorePrimitivesOutboundHrmpMessage (307) */
  interface PolkadotCorePrimitivesOutboundHrmpMessage extends Struct {
    readonly recipient: u32;
    readonly data: Bytes;
  }

  /** @name PolkadotPrimitivesV8ValidityAttestation (313) */
  interface PolkadotPrimitivesV8ValidityAttestation extends Enum {
    readonly isImplicit: boolean;
    readonly asImplicit: PolkadotPrimitivesV8ValidatorAppSignature;
    readonly isExplicit: boolean;
    readonly asExplicit: PolkadotPrimitivesV8ValidatorAppSignature;
    readonly type: 'Implicit' | 'Explicit';
  }

  /** @name PolkadotPrimitivesV8DisputeStatementSet (315) */
  interface PolkadotPrimitivesV8DisputeStatementSet extends Struct {
    readonly candidateHash: H256;
    readonly session: u32;
    readonly statements: Vec<ITuple<[PolkadotPrimitivesV8DisputeStatement, u32, PolkadotPrimitivesV8ValidatorAppSignature]>>;
  }

  /** @name PolkadotPrimitivesV8DisputeStatement (319) */
  interface PolkadotPrimitivesV8DisputeStatement extends Enum {
    readonly isValid: boolean;
    readonly asValid: PolkadotPrimitivesV8ValidDisputeStatementKind;
    readonly isInvalid: boolean;
    readonly asInvalid: PolkadotPrimitivesV8InvalidDisputeStatementKind;
    readonly type: 'Valid' | 'Invalid';
  }

  /** @name PolkadotPrimitivesV8ValidDisputeStatementKind (320) */
  interface PolkadotPrimitivesV8ValidDisputeStatementKind extends Enum {
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

  /** @name PolkadotPrimitivesV8InvalidDisputeStatementKind (322) */
  interface PolkadotPrimitivesV8InvalidDisputeStatementKind extends Enum {
    readonly isExplicit: boolean;
    readonly type: 'Explicit';
  }

  /** @name PolkadotRuntimeParachainsParasPalletCall (323) */
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
      readonly stmt: PolkadotPrimitivesV8PvfCheckStatement;
      readonly signature: PolkadotPrimitivesV8ValidatorAppSignature;
    } & Struct;
    readonly isForceSetMostRecentContext: boolean;
    readonly asForceSetMostRecentContext: {
      readonly para: u32;
      readonly context: u32;
    } & Struct;
    readonly isRemoveUpgradeCooldown: boolean;
    readonly asRemoveUpgradeCooldown: {
      readonly para: u32;
    } & Struct;
    readonly isAuthorizeForceSetCurrentCodeHash: boolean;
    readonly asAuthorizeForceSetCurrentCodeHash: {
      readonly para: u32;
      readonly newCodeHash: H256;
      readonly validPeriod: u32;
    } & Struct;
    readonly isApplyAuthorizedForceSetCurrentCode: boolean;
    readonly asApplyAuthorizedForceSetCurrentCode: {
      readonly para: u32;
      readonly newCode: Bytes;
    } & Struct;
    readonly type: 'ForceSetCurrentCode' | 'ForceSetCurrentHead' | 'ForceScheduleCodeUpgrade' | 'ForceNoteNewHead' | 'ForceQueueAction' | 'AddTrustedValidationCode' | 'PokeUnusedValidationCode' | 'IncludePvfCheckStatement' | 'ForceSetMostRecentContext' | 'RemoveUpgradeCooldown' | 'AuthorizeForceSetCurrentCodeHash' | 'ApplyAuthorizedForceSetCurrentCode';
  }

  /** @name PolkadotPrimitivesV8PvfCheckStatement (324) */
  interface PolkadotPrimitivesV8PvfCheckStatement extends Struct {
    readonly accept: bool;
    readonly subject: H256;
    readonly sessionIndex: u32;
    readonly validatorIndex: u32;
  }

  /** @name PolkadotRuntimeParachainsInitializerPalletCall (325) */
  interface PolkadotRuntimeParachainsInitializerPalletCall extends Enum {
    readonly isForceApprove: boolean;
    readonly asForceApprove: {
      readonly upTo: u32;
    } & Struct;
    readonly type: 'ForceApprove';
  }

  /** @name PolkadotRuntimeParachainsHrmpPalletCall (326) */
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

  /** @name PolkadotParachainPrimitivesPrimitivesHrmpChannelId (327) */
  interface PolkadotParachainPrimitivesPrimitivesHrmpChannelId extends Struct {
    readonly sender: u32;
    readonly recipient: u32;
  }

  /** @name PolkadotRuntimeParachainsDisputesPalletCall (328) */
  interface PolkadotRuntimeParachainsDisputesPalletCall extends Enum {
    readonly isForceUnfreeze: boolean;
    readonly type: 'ForceUnfreeze';
  }

  /** @name PolkadotRuntimeParachainsDisputesSlashingPalletCall (329) */
  interface PolkadotRuntimeParachainsDisputesSlashingPalletCall extends Enum {
    readonly isReportDisputeLostUnsigned: boolean;
    readonly asReportDisputeLostUnsigned: {
      readonly disputeProof: PolkadotPrimitivesVstagingDisputeProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly type: 'ReportDisputeLostUnsigned';
  }

  /** @name PolkadotPrimitivesVstagingDisputeProof (330) */
  interface PolkadotPrimitivesVstagingDisputeProof extends Struct {
    readonly timeSlot: PolkadotPrimitivesV8SlashingDisputesTimeSlot;
    readonly kind: PolkadotPrimitivesVstagingDisputeOffenceKind;
    readonly validatorIndex: u32;
    readonly validatorId: PolkadotPrimitivesV8ValidatorAppPublic;
  }

  /** @name PolkadotPrimitivesV8SlashingDisputesTimeSlot (331) */
  interface PolkadotPrimitivesV8SlashingDisputesTimeSlot extends Struct {
    readonly sessionIndex: u32;
    readonly candidateHash: H256;
  }

  /** @name PolkadotPrimitivesVstagingDisputeOffenceKind (332) */
  interface PolkadotPrimitivesVstagingDisputeOffenceKind extends Enum {
    readonly isForInvalidBacked: boolean;
    readonly isAgainstValid: boolean;
    readonly isForInvalidApproved: boolean;
    readonly type: 'ForInvalidBacked' | 'AgainstValid' | 'ForInvalidApproved';
  }

  /** @name PolkadotRuntimeParachainsOnDemandPalletCall (333) */
  interface PolkadotRuntimeParachainsOnDemandPalletCall extends Enum {
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
    readonly isPlaceOrderWithCredits: boolean;
    readonly asPlaceOrderWithCredits: {
      readonly maxAmount: u128;
      readonly paraId: u32;
    } & Struct;
    readonly type: 'PlaceOrderAllowDeath' | 'PlaceOrderKeepAlive' | 'PlaceOrderWithCredits';
  }

  /** @name PolkadotRuntimeCommonParasRegistrarPalletCall (334) */
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

  /** @name PolkadotRuntimeCommonSlotsPalletCall (335) */
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

  /** @name PolkadotRuntimeCommonAuctionsPalletCall (336) */
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

  /** @name PolkadotRuntimeCommonCrowdloanPalletCall (338) */
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

  /** @name SpRuntimeMultiSigner (340) */
  interface SpRuntimeMultiSigner extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: U8aFixed;
    readonly isSr25519: boolean;
    readonly asSr25519: U8aFixed;
    readonly isEcdsa: boolean;
    readonly asEcdsa: U8aFixed;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name PolkadotRuntimeParachainsCoretimePalletCall (343) */
  interface PolkadotRuntimeParachainsCoretimePalletCall extends Enum {
    readonly isRequestCoreCount: boolean;
    readonly asRequestCoreCount: {
      readonly count: u16;
    } & Struct;
    readonly isRequestRevenueAt: boolean;
    readonly asRequestRevenueAt: {
      readonly when: u32;
    } & Struct;
    readonly isCreditAccount: boolean;
    readonly asCreditAccount: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isAssignCore: boolean;
    readonly asAssignCore: {
      readonly core: u16;
      readonly begin: u32;
      readonly assignment: Vec<ITuple<[PalletBrokerCoretimeInterfaceCoreAssignment, u16]>>;
      readonly endHint: Option<u32>;
    } & Struct;
    readonly type: 'RequestCoreCount' | 'RequestRevenueAt' | 'CreditAccount' | 'AssignCore';
  }

  /** @name PalletXcmCall (354) */
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
      readonly location: StagingXcmV5Location;
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
    readonly isAddAuthorizedAlias: boolean;
    readonly asAddAuthorizedAlias: {
      readonly aliaser: XcmVersionedLocation;
      readonly expires: Option<u64>;
    } & Struct;
    readonly isRemoveAuthorizedAlias: boolean;
    readonly asRemoveAuthorizedAlias: {
      readonly aliaser: XcmVersionedLocation;
    } & Struct;
    readonly isRemoveAllAuthorizedAliases: boolean;
    readonly type: 'Send' | 'TeleportAssets' | 'ReserveTransferAssets' | 'Execute' | 'ForceXcmVersion' | 'ForceDefaultXcmVersion' | 'ForceSubscribeVersionNotify' | 'ForceUnsubscribeVersionNotify' | 'LimitedReserveTransferAssets' | 'LimitedTeleportAssets' | 'ForceSuspension' | 'TransferAssets' | 'ClaimAssets' | 'TransferAssetsUsingTypeAndThen' | 'AddAuthorizedAlias' | 'RemoveAuthorizedAlias' | 'RemoveAllAuthorizedAliases';
  }

  /** @name XcmVersionedXcm (355) */
  interface XcmVersionedXcm extends Enum {
    readonly isV3: boolean;
    readonly asV3: XcmV3Xcm;
    readonly isV4: boolean;
    readonly asV4: StagingXcmV4Xcm;
    readonly isV5: boolean;
    readonly asV5: StagingXcmV5Xcm;
    readonly type: 'V3' | 'V4' | 'V5';
  }

  /** @name XcmV3Xcm (356) */
  interface XcmV3Xcm extends Vec<XcmV3Instruction> {}

  /** @name XcmV3Instruction (358) */
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
      readonly originKind: XcmV3OriginKind;
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

  /** @name XcmV3MultiassetMultiAssets (359) */
  interface XcmV3MultiassetMultiAssets extends Vec<XcmV3MultiAsset> {}

  /** @name XcmV3MultiAsset (361) */
  interface XcmV3MultiAsset extends Struct {
    readonly id: XcmV3MultiassetAssetId;
    readonly fun: XcmV3MultiassetFungibility;
  }

  /** @name XcmV3MultiassetFungibility (362) */
  interface XcmV3MultiassetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: XcmV3MultiassetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV3MultiassetAssetInstance (363) */
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

  /** @name XcmV3Response (365) */
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

  /** @name XcmV3TraitsError (368) */
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

  /** @name XcmV3PalletInfo (370) */
  interface XcmV3PalletInfo extends Struct {
    readonly index: Compact<u32>;
    readonly name: Bytes;
    readonly moduleName: Bytes;
    readonly major: Compact<u32>;
    readonly minor: Compact<u32>;
    readonly patch: Compact<u32>;
  }

  /** @name XcmV3MaybeErrorCode (373) */
  interface XcmV3MaybeErrorCode extends Enum {
    readonly isSuccess: boolean;
    readonly isError: boolean;
    readonly asError: Bytes;
    readonly isTruncatedError: boolean;
    readonly asTruncatedError: Bytes;
    readonly type: 'Success' | 'Error' | 'TruncatedError';
  }

  /** @name XcmV3OriginKind (376) */
  interface XcmV3OriginKind extends Enum {
    readonly isNative: boolean;
    readonly isSovereignAccount: boolean;
    readonly isSuperuser: boolean;
    readonly isXcm: boolean;
    readonly type: 'Native' | 'SovereignAccount' | 'Superuser' | 'Xcm';
  }

  /** @name XcmDoubleEncoded (377) */
  interface XcmDoubleEncoded extends Struct {
    readonly encoded: Bytes;
  }

  /** @name XcmV3QueryResponseInfo (378) */
  interface XcmV3QueryResponseInfo extends Struct {
    readonly destination: StagingXcmV3MultiLocation;
    readonly queryId: Compact<u64>;
    readonly maxWeight: SpWeightsWeightV2Weight;
  }

  /** @name XcmV3MultiassetMultiAssetFilter (379) */
  interface XcmV3MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: XcmV3MultiassetMultiAssets;
    readonly isWild: boolean;
    readonly asWild: XcmV3MultiassetWildMultiAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name XcmV3MultiassetWildMultiAsset (380) */
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

  /** @name XcmV3MultiassetWildFungibility (381) */
  interface XcmV3MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV3WeightLimit (382) */
  interface XcmV3WeightLimit extends Enum {
    readonly isUnlimited: boolean;
    readonly isLimited: boolean;
    readonly asLimited: SpWeightsWeightV2Weight;
    readonly type: 'Unlimited' | 'Limited';
  }

  /** @name StagingXcmV4Xcm (383) */
  interface StagingXcmV4Xcm extends Vec<StagingXcmV4Instruction> {}

  /** @name StagingXcmV4Instruction (385) */
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
      readonly originKind: XcmV3OriginKind;
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

  /** @name StagingXcmV4AssetAssets (386) */
  interface StagingXcmV4AssetAssets extends Vec<StagingXcmV4Asset> {}

  /** @name StagingXcmV4Asset (388) */
  interface StagingXcmV4Asset extends Struct {
    readonly id: StagingXcmV4AssetAssetId;
    readonly fun: StagingXcmV4AssetFungibility;
  }

  /** @name StagingXcmV4AssetFungibility (389) */
  interface StagingXcmV4AssetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: StagingXcmV4AssetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name StagingXcmV4AssetAssetInstance (390) */
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

  /** @name StagingXcmV4Response (391) */
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

  /** @name StagingXcmV4PalletInfo (393) */
  interface StagingXcmV4PalletInfo extends Struct {
    readonly index: Compact<u32>;
    readonly name: Bytes;
    readonly moduleName: Bytes;
    readonly major: Compact<u32>;
    readonly minor: Compact<u32>;
    readonly patch: Compact<u32>;
  }

  /** @name StagingXcmV4QueryResponseInfo (397) */
  interface StagingXcmV4QueryResponseInfo extends Struct {
    readonly destination: StagingXcmV4Location;
    readonly queryId: Compact<u64>;
    readonly maxWeight: SpWeightsWeightV2Weight;
  }

  /** @name StagingXcmV4AssetAssetFilter (398) */
  interface StagingXcmV4AssetAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: StagingXcmV4AssetAssets;
    readonly isWild: boolean;
    readonly asWild: StagingXcmV4AssetWildAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name StagingXcmV4AssetWildAsset (399) */
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

  /** @name StagingXcmV4AssetWildFungibility (400) */
  interface StagingXcmV4AssetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name StagingXcmV5Xcm (401) */
  interface StagingXcmV5Xcm extends Vec<StagingXcmV5Instruction> {}

  /** @name StagingXcmV5Instruction (403) */
  interface StagingXcmV5Instruction extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: StagingXcmV5AssetAssets;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: StagingXcmV5AssetAssets;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: StagingXcmV5AssetAssets;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: StagingXcmV5Response;
      readonly maxWeight: SpWeightsWeightV2Weight;
      readonly querier: Option<StagingXcmV5Location>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: StagingXcmV5AssetAssets;
      readonly beneficiary: StagingXcmV5Location;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: StagingXcmV5AssetAssets;
      readonly dest: StagingXcmV5Location;
      readonly xcm: StagingXcmV5Xcm;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originKind: XcmV3OriginKind;
      readonly fallbackMaxWeight: Option<SpWeightsWeightV2Weight>;
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
    readonly asDescendOrigin: StagingXcmV5Junctions;
    readonly isReportError: boolean;
    readonly asReportError: StagingXcmV5QueryResponseInfo;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: StagingXcmV5AssetAssetFilter;
      readonly beneficiary: StagingXcmV5Location;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: StagingXcmV5AssetAssetFilter;
      readonly dest: StagingXcmV5Location;
      readonly xcm: StagingXcmV5Xcm;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: StagingXcmV5AssetAssetFilter;
      readonly want: StagingXcmV5AssetAssets;
      readonly maximal: bool;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: StagingXcmV5AssetAssetFilter;
      readonly reserve: StagingXcmV5Location;
      readonly xcm: StagingXcmV5Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: StagingXcmV5AssetAssetFilter;
      readonly dest: StagingXcmV5Location;
      readonly xcm: StagingXcmV5Xcm;
    } & Struct;
    readonly isReportHolding: boolean;
    readonly asReportHolding: {
      readonly responseInfo: StagingXcmV5QueryResponseInfo;
      readonly assets: StagingXcmV5AssetAssetFilter;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: StagingXcmV5Asset;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isRefundSurplus: boolean;
    readonly isSetErrorHandler: boolean;
    readonly asSetErrorHandler: StagingXcmV5Xcm;
    readonly isSetAppendix: boolean;
    readonly asSetAppendix: StagingXcmV5Xcm;
    readonly isClearError: boolean;
    readonly isClaimAsset: boolean;
    readonly asClaimAsset: {
      readonly assets: StagingXcmV5AssetAssets;
      readonly ticket: StagingXcmV5Location;
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
    readonly asBurnAsset: StagingXcmV5AssetAssets;
    readonly isExpectAsset: boolean;
    readonly asExpectAsset: StagingXcmV5AssetAssets;
    readonly isExpectOrigin: boolean;
    readonly asExpectOrigin: Option<StagingXcmV5Location>;
    readonly isExpectError: boolean;
    readonly asExpectError: Option<ITuple<[u32, XcmV5TraitsError]>>;
    readonly isExpectTransactStatus: boolean;
    readonly asExpectTransactStatus: XcmV3MaybeErrorCode;
    readonly isQueryPallet: boolean;
    readonly asQueryPallet: {
      readonly moduleName: Bytes;
      readonly responseInfo: StagingXcmV5QueryResponseInfo;
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
    readonly asReportTransactStatus: StagingXcmV5QueryResponseInfo;
    readonly isClearTransactStatus: boolean;
    readonly isUniversalOrigin: boolean;
    readonly asUniversalOrigin: StagingXcmV5Junction;
    readonly isExportMessage: boolean;
    readonly asExportMessage: {
      readonly network: StagingXcmV5JunctionNetworkId;
      readonly destination: StagingXcmV5Junctions;
      readonly xcm: StagingXcmV5Xcm;
    } & Struct;
    readonly isLockAsset: boolean;
    readonly asLockAsset: {
      readonly asset: StagingXcmV5Asset;
      readonly unlocker: StagingXcmV5Location;
    } & Struct;
    readonly isUnlockAsset: boolean;
    readonly asUnlockAsset: {
      readonly asset: StagingXcmV5Asset;
      readonly target: StagingXcmV5Location;
    } & Struct;
    readonly isNoteUnlockable: boolean;
    readonly asNoteUnlockable: {
      readonly asset: StagingXcmV5Asset;
      readonly owner: StagingXcmV5Location;
    } & Struct;
    readonly isRequestUnlock: boolean;
    readonly asRequestUnlock: {
      readonly asset: StagingXcmV5Asset;
      readonly locker: StagingXcmV5Location;
    } & Struct;
    readonly isSetFeesMode: boolean;
    readonly asSetFeesMode: {
      readonly jitWithdraw: bool;
    } & Struct;
    readonly isSetTopic: boolean;
    readonly asSetTopic: U8aFixed;
    readonly isClearTopic: boolean;
    readonly isAliasOrigin: boolean;
    readonly asAliasOrigin: StagingXcmV5Location;
    readonly isUnpaidExecution: boolean;
    readonly asUnpaidExecution: {
      readonly weightLimit: XcmV3WeightLimit;
      readonly checkOrigin: Option<StagingXcmV5Location>;
    } & Struct;
    readonly isPayFees: boolean;
    readonly asPayFees: {
      readonly asset: StagingXcmV5Asset;
    } & Struct;
    readonly isInitiateTransfer: boolean;
    readonly asInitiateTransfer: {
      readonly destination: StagingXcmV5Location;
      readonly remoteFees: Option<StagingXcmV5AssetAssetTransferFilter>;
      readonly preserveOrigin: bool;
      readonly assets: Vec<StagingXcmV5AssetAssetTransferFilter>;
      readonly remoteXcm: StagingXcmV5Xcm;
    } & Struct;
    readonly isExecuteWithOrigin: boolean;
    readonly asExecuteWithOrigin: {
      readonly descendantOrigin: Option<StagingXcmV5Junctions>;
      readonly xcm: StagingXcmV5Xcm;
    } & Struct;
    readonly isSetHints: boolean;
    readonly asSetHints: {
      readonly hints: Vec<StagingXcmV5Hint>;
    } & Struct;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'ReportHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion' | 'BurnAsset' | 'ExpectAsset' | 'ExpectOrigin' | 'ExpectError' | 'ExpectTransactStatus' | 'QueryPallet' | 'ExpectPallet' | 'ReportTransactStatus' | 'ClearTransactStatus' | 'UniversalOrigin' | 'ExportMessage' | 'LockAsset' | 'UnlockAsset' | 'NoteUnlockable' | 'RequestUnlock' | 'SetFeesMode' | 'SetTopic' | 'ClearTopic' | 'AliasOrigin' | 'UnpaidExecution' | 'PayFees' | 'InitiateTransfer' | 'ExecuteWithOrigin' | 'SetHints';
  }

  /** @name StagingXcmV5AssetAssets (404) */
  interface StagingXcmV5AssetAssets extends Vec<StagingXcmV5Asset> {}

  /** @name StagingXcmV5Asset (406) */
  interface StagingXcmV5Asset extends Struct {
    readonly id: StagingXcmV5AssetAssetId;
    readonly fun: StagingXcmV5AssetFungibility;
  }

  /** @name StagingXcmV5AssetFungibility (407) */
  interface StagingXcmV5AssetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: StagingXcmV5AssetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name StagingXcmV5AssetAssetInstance (408) */
  interface StagingXcmV5AssetAssetInstance extends Enum {
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

  /** @name StagingXcmV5Response (409) */
  interface StagingXcmV5Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: StagingXcmV5AssetAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, XcmV5TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly isPalletsInfo: boolean;
    readonly asPalletsInfo: Vec<StagingXcmV5PalletInfo>;
    readonly isDispatchResult: boolean;
    readonly asDispatchResult: XcmV3MaybeErrorCode;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version' | 'PalletsInfo' | 'DispatchResult';
  }

  /** @name XcmV5TraitsError (412) */
  interface XcmV5TraitsError extends Enum {
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
    readonly isTooManyAssets: boolean;
    readonly isUnhandledXcmVersion: boolean;
    readonly isWeightLimitReached: boolean;
    readonly asWeightLimitReached: SpWeightsWeightV2Weight;
    readonly isBarrier: boolean;
    readonly isWeightNotComputable: boolean;
    readonly isExceedsStackLimit: boolean;
    readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'LocationFull' | 'LocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'ExpectationFalse' | 'PalletNotFound' | 'NameMismatch' | 'VersionIncompatible' | 'HoldingWouldOverflow' | 'ExportError' | 'ReanchorFailed' | 'NoDeal' | 'FeesNotMet' | 'LockError' | 'NoPermission' | 'Unanchored' | 'NotDepositable' | 'TooManyAssets' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable' | 'ExceedsStackLimit';
  }

  /** @name StagingXcmV5PalletInfo (414) */
  interface StagingXcmV5PalletInfo extends Struct {
    readonly index: Compact<u32>;
    readonly name: Bytes;
    readonly moduleName: Bytes;
    readonly major: Compact<u32>;
    readonly minor: Compact<u32>;
    readonly patch: Compact<u32>;
  }

  /** @name StagingXcmV5QueryResponseInfo (419) */
  interface StagingXcmV5QueryResponseInfo extends Struct {
    readonly destination: StagingXcmV5Location;
    readonly queryId: Compact<u64>;
    readonly maxWeight: SpWeightsWeightV2Weight;
  }

  /** @name StagingXcmV5AssetAssetFilter (420) */
  interface StagingXcmV5AssetAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: StagingXcmV5AssetAssets;
    readonly isWild: boolean;
    readonly asWild: StagingXcmV5AssetWildAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name StagingXcmV5AssetWildAsset (421) */
  interface StagingXcmV5AssetWildAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: StagingXcmV5AssetAssetId;
      readonly fun: StagingXcmV5AssetWildFungibility;
    } & Struct;
    readonly isAllCounted: boolean;
    readonly asAllCounted: Compact<u32>;
    readonly isAllOfCounted: boolean;
    readonly asAllOfCounted: {
      readonly id: StagingXcmV5AssetAssetId;
      readonly fun: StagingXcmV5AssetWildFungibility;
      readonly count: Compact<u32>;
    } & Struct;
    readonly type: 'All' | 'AllOf' | 'AllCounted' | 'AllOfCounted';
  }

  /** @name StagingXcmV5AssetWildFungibility (422) */
  interface StagingXcmV5AssetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name StagingXcmV5AssetAssetTransferFilter (424) */
  interface StagingXcmV5AssetAssetTransferFilter extends Enum {
    readonly isTeleport: boolean;
    readonly asTeleport: StagingXcmV5AssetAssetFilter;
    readonly isReserveDeposit: boolean;
    readonly asReserveDeposit: StagingXcmV5AssetAssetFilter;
    readonly isReserveWithdraw: boolean;
    readonly asReserveWithdraw: StagingXcmV5AssetAssetFilter;
    readonly type: 'Teleport' | 'ReserveDeposit' | 'ReserveWithdraw';
  }

  /** @name StagingXcmV5Hint (429) */
  interface StagingXcmV5Hint extends Enum {
    readonly isAssetClaimer: boolean;
    readonly asAssetClaimer: {
      readonly location: StagingXcmV5Location;
    } & Struct;
    readonly type: 'AssetClaimer';
  }

  /** @name XcmVersionedAssets (431) */
  interface XcmVersionedAssets extends Enum {
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiassetMultiAssets;
    readonly isV4: boolean;
    readonly asV4: StagingXcmV4AssetAssets;
    readonly isV5: boolean;
    readonly asV5: StagingXcmV5AssetAssets;
    readonly type: 'V3' | 'V4' | 'V5';
  }

  /** @name StagingXcmExecutorAssetTransferTransferType (443) */
  interface StagingXcmExecutorAssetTransferTransferType extends Enum {
    readonly isTeleport: boolean;
    readonly isLocalReserve: boolean;
    readonly isDestinationReserve: boolean;
    readonly isRemoteReserve: boolean;
    readonly asRemoteReserve: XcmVersionedLocation;
    readonly type: 'Teleport' | 'LocalReserve' | 'DestinationReserve' | 'RemoteReserve';
  }

  /** @name XcmVersionedAssetId (444) */
  interface XcmVersionedAssetId extends Enum {
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiassetAssetId;
    readonly isV4: boolean;
    readonly asV4: StagingXcmV4AssetAssetId;
    readonly isV5: boolean;
    readonly asV5: StagingXcmV5AssetAssetId;
    readonly type: 'V3' | 'V4' | 'V5';
  }

  /** @name PolkadotRuntimeParachainsInclusionAggregateMessageOrigin (447) */
  interface PolkadotRuntimeParachainsInclusionAggregateMessageOrigin extends Enum {
    readonly isUmp: boolean;
    readonly asUmp: PolkadotRuntimeParachainsInclusionUmpQueueId;
    readonly type: 'Ump';
  }

  /** @name PolkadotRuntimeParachainsInclusionUmpQueueId (448) */
  interface PolkadotRuntimeParachainsInclusionUmpQueueId extends Enum {
    readonly isPara: boolean;
    readonly asPara: u32;
    readonly type: 'Para';
  }

  /** @name PalletRcMigratorCall (465) */
  interface PalletRcMigratorCall extends Enum {
    readonly isForceSetStage: boolean;
    readonly asForceSetStage: {
      readonly stage: PalletRcMigratorMigrationStage;
    } & Struct;
    readonly isScheduleMigration: boolean;
    readonly asScheduleMigration: {
      readonly start: FrameSupportScheduleDispatchTime;
      readonly warmUp: FrameSupportScheduleDispatchTime;
      readonly coolOff: FrameSupportScheduleDispatchTime;
      readonly unsafeIgnoreStakingLockCheck: bool;
    } & Struct;
    readonly isStartDataMigration: boolean;
    readonly isReceiveQueryResponse: boolean;
    readonly asReceiveQueryResponse: {
      readonly queryId: u64;
      readonly response: StagingXcmV5Response;
    } & Struct;
    readonly isResendXcm: boolean;
    readonly asResendXcm: {
      readonly queryId: u64;
    } & Struct;
    readonly isSetUnprocessedMsgBuffer: boolean;
    readonly asSetUnprocessedMsgBuffer: {
      readonly new_: Option<u32>;
    } & Struct;
    readonly isSetAhUmpQueuePriority: boolean;
    readonly asSetAhUmpQueuePriority: {
      readonly new_: PalletRcMigratorQueuePriority;
    } & Struct;
    readonly isSetManager: boolean;
    readonly asSetManager: {
      readonly new_: Option<AccountId32>;
    } & Struct;
    readonly isSendXcmMessage: boolean;
    readonly asSendXcmMessage: {
      readonly dest: XcmVersionedLocation;
      readonly message: XcmVersionedXcm;
    } & Struct;
    readonly isPreserveAccounts: boolean;
    readonly asPreserveAccounts: {
      readonly accounts: Vec<AccountId32>;
    } & Struct;
    readonly isSetCanceller: boolean;
    readonly asSetCanceller: {
      readonly new_: Option<AccountId32>;
    } & Struct;
    readonly isPauseMigration: boolean;
    readonly isCancelMigration: boolean;
    readonly isVoteManagerMultisig: boolean;
    readonly asVoteManagerMultisig: {
      readonly payload: PalletRcMigratorManagerMultisigVote;
      readonly sig: SpRuntimeMultiSignature;
    } & Struct;
    readonly isSetSettings: boolean;
    readonly asSetSettings: {
      readonly settings: Option<PalletRcMigratorMigrationSettings>;
    } & Struct;
    readonly type: 'ForceSetStage' | 'ScheduleMigration' | 'StartDataMigration' | 'ReceiveQueryResponse' | 'ResendXcm' | 'SetUnprocessedMsgBuffer' | 'SetAhUmpQueuePriority' | 'SetManager' | 'SendXcmMessage' | 'PreserveAccounts' | 'SetCanceller' | 'PauseMigration' | 'CancelMigration' | 'VoteManagerMultisig' | 'SetSettings';
  }

  /** @name PalletRcMigratorMigrationStage (466) */
  interface PalletRcMigratorMigrationStage extends Enum {
    readonly isPending: boolean;
    readonly isMigrationPaused: boolean;
    readonly isScheduled: boolean;
    readonly asScheduled: {
      readonly start: u32;
    } & Struct;
    readonly isWaitingForAh: boolean;
    readonly isWarmUp: boolean;
    readonly asWarmUp: {
      readonly endAt: u32;
    } & Struct;
    readonly isStarting: boolean;
    readonly isPureProxyCandidatesMigrationInit: boolean;
    readonly isAccountsMigrationInit: boolean;
    readonly isAccountsMigrationOngoing: boolean;
    readonly asAccountsMigrationOngoing: {
      readonly lastKey: Option<AccountId32>;
    } & Struct;
    readonly isAccountsMigrationDone: boolean;
    readonly isMultisigMigrationInit: boolean;
    readonly isMultisigMigrationOngoing: boolean;
    readonly asMultisigMigrationOngoing: {
      readonly lastKey: Option<ITuple<[AccountId32, U8aFixed]>>;
    } & Struct;
    readonly isMultisigMigrationDone: boolean;
    readonly isClaimsMigrationInit: boolean;
    readonly isClaimsMigrationOngoing: boolean;
    readonly asClaimsMigrationOngoing: {
      readonly currentKey: Option<PalletRcMigratorClaimsClaimsStage>;
    } & Struct;
    readonly isClaimsMigrationDone: boolean;
    readonly isProxyMigrationInit: boolean;
    readonly isProxyMigrationProxies: boolean;
    readonly asProxyMigrationProxies: {
      readonly lastKey: Option<AccountId32>;
    } & Struct;
    readonly isProxyMigrationAnnouncements: boolean;
    readonly asProxyMigrationAnnouncements: {
      readonly lastKey: Option<AccountId32>;
    } & Struct;
    readonly isProxyMigrationDone: boolean;
    readonly isPreimageMigrationInit: boolean;
    readonly isPreimageMigrationChunksOngoing: boolean;
    readonly asPreimageMigrationChunksOngoing: {
      readonly lastKey: Option<ITuple<[ITuple<[H256, u32]>, u32]>>;
    } & Struct;
    readonly isPreimageMigrationChunksDone: boolean;
    readonly isPreimageMigrationRequestStatusOngoing: boolean;
    readonly asPreimageMigrationRequestStatusOngoing: {
      readonly nextKey: Option<H256>;
    } & Struct;
    readonly isPreimageMigrationRequestStatusDone: boolean;
    readonly isPreimageMigrationLegacyRequestStatusInit: boolean;
    readonly isPreimageMigrationLegacyRequestStatusOngoing: boolean;
    readonly asPreimageMigrationLegacyRequestStatusOngoing: {
      readonly nextKey: Option<H256>;
    } & Struct;
    readonly isPreimageMigrationLegacyRequestStatusDone: boolean;
    readonly isPreimageMigrationDone: boolean;
    readonly isNomPoolsMigrationInit: boolean;
    readonly isNomPoolsMigrationOngoing: boolean;
    readonly asNomPoolsMigrationOngoing: {
      readonly nextKey: Option<PalletRcMigratorStakingNomPoolsNomPoolsStage>;
    } & Struct;
    readonly isNomPoolsMigrationDone: boolean;
    readonly isVestingMigrationInit: boolean;
    readonly isVestingMigrationOngoing: boolean;
    readonly asVestingMigrationOngoing: {
      readonly nextKey: Option<AccountId32>;
    } & Struct;
    readonly isVestingMigrationDone: boolean;
    readonly isDelegatedStakingMigrationInit: boolean;
    readonly isDelegatedStakingMigrationOngoing: boolean;
    readonly asDelegatedStakingMigrationOngoing: {
      readonly nextKey: Option<PalletRcMigratorStakingDelegatedStakingDelegatedStakingStage>;
    } & Struct;
    readonly isDelegatedStakingMigrationDone: boolean;
    readonly isIndicesMigrationInit: boolean;
    readonly isIndicesMigrationOngoing: boolean;
    readonly asIndicesMigrationOngoing: {
      readonly nextKey: Option<Null>;
    } & Struct;
    readonly isIndicesMigrationDone: boolean;
    readonly isReferendaMigrationInit: boolean;
    readonly isReferendaMigrationOngoing: boolean;
    readonly asReferendaMigrationOngoing: {
      readonly lastKey: Option<PalletRcMigratorReferendaReferendaStage>;
    } & Struct;
    readonly isReferendaMigrationDone: boolean;
    readonly isBagsListMigrationInit: boolean;
    readonly isBagsListMigrationOngoing: boolean;
    readonly asBagsListMigrationOngoing: {
      readonly nextKey: Option<PalletRcMigratorStakingBagsListBagsListStage>;
    } & Struct;
    readonly isBagsListMigrationDone: boolean;
    readonly isSchedulerMigrationInit: boolean;
    readonly isSchedulerMigrationOngoing: boolean;
    readonly asSchedulerMigrationOngoing: {
      readonly lastKey: Option<PalletRcMigratorSchedulerSchedulerStage>;
    } & Struct;
    readonly isSchedulerAgendaMigrationOngoing: boolean;
    readonly asSchedulerAgendaMigrationOngoing: {
      readonly lastKey: Option<u32>;
    } & Struct;
    readonly isSchedulerMigrationDone: boolean;
    readonly isConvictionVotingMigrationInit: boolean;
    readonly isConvictionVotingMigrationOngoing: boolean;
    readonly asConvictionVotingMigrationOngoing: {
      readonly lastKey: Option<PalletRcMigratorConvictionVotingConvictionVotingStage>;
    } & Struct;
    readonly isConvictionVotingMigrationDone: boolean;
    readonly isBountiesMigrationInit: boolean;
    readonly isBountiesMigrationOngoing: boolean;
    readonly asBountiesMigrationOngoing: {
      readonly lastKey: Option<PalletRcMigratorBountiesBountiesStage>;
    } & Struct;
    readonly isBountiesMigrationDone: boolean;
    readonly isChildBountiesMigrationInit: boolean;
    readonly isChildBountiesMigrationOngoing: boolean;
    readonly asChildBountiesMigrationOngoing: {
      readonly lastKey: Option<PalletRcMigratorChildBountiesChildBountiesStage>;
    } & Struct;
    readonly isChildBountiesMigrationDone: boolean;
    readonly isAssetRateMigrationInit: boolean;
    readonly isAssetRateMigrationOngoing: boolean;
    readonly asAssetRateMigrationOngoing: {
      readonly lastKey: Option<PolkadotRuntimeCommonImplsVersionedLocatableAsset>;
    } & Struct;
    readonly isAssetRateMigrationDone: boolean;
    readonly isCrowdloanMigrationInit: boolean;
    readonly isCrowdloanMigrationOngoing: boolean;
    readonly asCrowdloanMigrationOngoing: {
      readonly lastKey: Option<PalletRcMigratorCrowdloanCrowdloanStage>;
    } & Struct;
    readonly isCrowdloanMigrationDone: boolean;
    readonly isTreasuryMigrationInit: boolean;
    readonly isTreasuryMigrationOngoing: boolean;
    readonly asTreasuryMigrationOngoing: {
      readonly lastKey: Option<PalletRcMigratorTreasuryTreasuryStage>;
    } & Struct;
    readonly isTreasuryMigrationDone: boolean;
    readonly isStakingMigrationInit: boolean;
    readonly isStakingMigrationOngoing: boolean;
    readonly asStakingMigrationOngoing: {
      readonly nextKey: Option<PalletRcMigratorStakingStakingImplStakingStage>;
    } & Struct;
    readonly isStakingMigrationDone: boolean;
    readonly isCoolOff: boolean;
    readonly asCoolOff: {
      readonly endAt: u32;
    } & Struct;
    readonly isSignalMigrationFinish: boolean;
    readonly isMigrationDone: boolean;
    readonly type: 'Pending' | 'MigrationPaused' | 'Scheduled' | 'WaitingForAh' | 'WarmUp' | 'Starting' | 'PureProxyCandidatesMigrationInit' | 'AccountsMigrationInit' | 'AccountsMigrationOngoing' | 'AccountsMigrationDone' | 'MultisigMigrationInit' | 'MultisigMigrationOngoing' | 'MultisigMigrationDone' | 'ClaimsMigrationInit' | 'ClaimsMigrationOngoing' | 'ClaimsMigrationDone' | 'ProxyMigrationInit' | 'ProxyMigrationProxies' | 'ProxyMigrationAnnouncements' | 'ProxyMigrationDone' | 'PreimageMigrationInit' | 'PreimageMigrationChunksOngoing' | 'PreimageMigrationChunksDone' | 'PreimageMigrationRequestStatusOngoing' | 'PreimageMigrationRequestStatusDone' | 'PreimageMigrationLegacyRequestStatusInit' | 'PreimageMigrationLegacyRequestStatusOngoing' | 'PreimageMigrationLegacyRequestStatusDone' | 'PreimageMigrationDone' | 'NomPoolsMigrationInit' | 'NomPoolsMigrationOngoing' | 'NomPoolsMigrationDone' | 'VestingMigrationInit' | 'VestingMigrationOngoing' | 'VestingMigrationDone' | 'DelegatedStakingMigrationInit' | 'DelegatedStakingMigrationOngoing' | 'DelegatedStakingMigrationDone' | 'IndicesMigrationInit' | 'IndicesMigrationOngoing' | 'IndicesMigrationDone' | 'ReferendaMigrationInit' | 'ReferendaMigrationOngoing' | 'ReferendaMigrationDone' | 'BagsListMigrationInit' | 'BagsListMigrationOngoing' | 'BagsListMigrationDone' | 'SchedulerMigrationInit' | 'SchedulerMigrationOngoing' | 'SchedulerAgendaMigrationOngoing' | 'SchedulerMigrationDone' | 'ConvictionVotingMigrationInit' | 'ConvictionVotingMigrationOngoing' | 'ConvictionVotingMigrationDone' | 'BountiesMigrationInit' | 'BountiesMigrationOngoing' | 'BountiesMigrationDone' | 'ChildBountiesMigrationInit' | 'ChildBountiesMigrationOngoing' | 'ChildBountiesMigrationDone' | 'AssetRateMigrationInit' | 'AssetRateMigrationOngoing' | 'AssetRateMigrationDone' | 'CrowdloanMigrationInit' | 'CrowdloanMigrationOngoing' | 'CrowdloanMigrationDone' | 'TreasuryMigrationInit' | 'TreasuryMigrationOngoing' | 'TreasuryMigrationDone' | 'StakingMigrationInit' | 'StakingMigrationOngoing' | 'StakingMigrationDone' | 'CoolOff' | 'SignalMigrationFinish' | 'MigrationDone';
  }

  /** @name PalletRcMigratorClaimsClaimsStage (470) */
  interface PalletRcMigratorClaimsClaimsStage extends Enum {
    readonly isStorageValues: boolean;
    readonly isClaims: boolean;
    readonly asClaims: Option<EthereumAddress>;
    readonly isVesting: boolean;
    readonly asVesting: Option<EthereumAddress>;
    readonly isSigning: boolean;
    readonly asSigning: Option<EthereumAddress>;
    readonly isPreclaims: boolean;
    readonly asPreclaims: Option<AccountId32>;
    readonly isFinished: boolean;
    readonly type: 'StorageValues' | 'Claims' | 'Vesting' | 'Signing' | 'Preclaims' | 'Finished';
  }

  /** @name PalletRcMigratorStakingNomPoolsNomPoolsStage (476) */
  interface PalletRcMigratorStakingNomPoolsNomPoolsStage extends Enum {
    readonly isStorageValues: boolean;
    readonly isPoolMembers: boolean;
    readonly asPoolMembers: Option<AccountId32>;
    readonly isBondedPools: boolean;
    readonly asBondedPools: Option<u32>;
    readonly isRewardPools: boolean;
    readonly asRewardPools: Option<u32>;
    readonly isSubPoolsStorage: boolean;
    readonly asSubPoolsStorage: Option<u32>;
    readonly isMetadata: boolean;
    readonly asMetadata: Option<u32>;
    readonly isReversePoolIdLookup: boolean;
    readonly asReversePoolIdLookup: Option<AccountId32>;
    readonly isClaimPermissions: boolean;
    readonly asClaimPermissions: Option<AccountId32>;
    readonly isFinished: boolean;
    readonly type: 'StorageValues' | 'PoolMembers' | 'BondedPools' | 'RewardPools' | 'SubPoolsStorage' | 'Metadata' | 'ReversePoolIdLookup' | 'ClaimPermissions' | 'Finished';
  }

  /** @name PalletRcMigratorStakingDelegatedStakingDelegatedStakingStage (478) */
  interface PalletRcMigratorStakingDelegatedStakingDelegatedStakingStage extends Enum {
    readonly isDelegators: boolean;
    readonly asDelegators: Option<AccountId32>;
    readonly isAgents: boolean;
    readonly asAgents: Option<AccountId32>;
    readonly isFinished: boolean;
    readonly type: 'Delegators' | 'Agents' | 'Finished';
  }

  /** @name PalletRcMigratorReferendaReferendaStage (481) */
  interface PalletRcMigratorReferendaReferendaStage extends Enum {
    readonly isStorageValues: boolean;
    readonly isMetadata: boolean;
    readonly asMetadata: Option<u32>;
    readonly isReferendumInfo: boolean;
    readonly asReferendumInfo: Option<u32>;
    readonly type: 'StorageValues' | 'Metadata' | 'ReferendumInfo';
  }

  /** @name PalletRcMigratorStakingBagsListBagsListStage (483) */
  interface PalletRcMigratorStakingBagsListBagsListStage extends Enum {
    readonly isListNodes: boolean;
    readonly asListNodes: Option<AccountId32>;
    readonly isListBags: boolean;
    readonly asListBags: Option<u64>;
    readonly isFinished: boolean;
    readonly type: 'ListNodes' | 'ListBags' | 'Finished';
  }

  /** @name PalletRcMigratorSchedulerSchedulerStage (485) */
  interface PalletRcMigratorSchedulerSchedulerStage extends Enum {
    readonly isIncompleteSince: boolean;
    readonly isRetries: boolean;
    readonly asRetries: Option<ITuple<[u32, u32]>>;
    readonly isLookup: boolean;
    readonly asLookup: Option<U8aFixed>;
    readonly isFinished: boolean;
    readonly type: 'IncompleteSince' | 'Retries' | 'Lookup' | 'Finished';
  }

  /** @name PalletRcMigratorConvictionVotingConvictionVotingStage (487) */
  interface PalletRcMigratorConvictionVotingConvictionVotingStage extends Enum {
    readonly isVotingFor: boolean;
    readonly asVotingFor: Option<ITuple<[AccountId32, u16]>>;
    readonly isClassLocksFor: boolean;
    readonly asClassLocksFor: Option<AccountId32>;
    readonly isFinished: boolean;
    readonly type: 'VotingFor' | 'ClassLocksFor' | 'Finished';
  }

  /** @name PalletRcMigratorBountiesBountiesStage (491) */
  interface PalletRcMigratorBountiesBountiesStage extends Enum {
    readonly isBountyCount: boolean;
    readonly isBountyApprovals: boolean;
    readonly isBountyDescriptions: boolean;
    readonly asBountyDescriptions: {
      readonly lastKey: Option<u32>;
    } & Struct;
    readonly isBounties: boolean;
    readonly asBounties: {
      readonly lastKey: Option<u32>;
    } & Struct;
    readonly isFinished: boolean;
    readonly type: 'BountyCount' | 'BountyApprovals' | 'BountyDescriptions' | 'Bounties' | 'Finished';
  }

  /** @name PalletRcMigratorChildBountiesChildBountiesStage (493) */
  interface PalletRcMigratorChildBountiesChildBountiesStage extends Enum {
    readonly isChildBountyCount: boolean;
    readonly isParentChildBounties: boolean;
    readonly asParentChildBounties: {
      readonly parentId: Option<u32>;
    } & Struct;
    readonly isParentTotalChildBounties: boolean;
    readonly asParentTotalChildBounties: {
      readonly parentId: Option<u32>;
    } & Struct;
    readonly isChildBounties: boolean;
    readonly asChildBounties: {
      readonly ids: Option<ITuple<[u32, u32]>>;
    } & Struct;
    readonly isChildBountyDescriptionsV1: boolean;
    readonly asChildBountyDescriptionsV1: {
      readonly ids: Option<ITuple<[u32, u32]>>;
    } & Struct;
    readonly isV0ToV1ChildBountyIds: boolean;
    readonly asV0ToV1ChildBountyIds: {
      readonly childId: Option<u32>;
    } & Struct;
    readonly isChildrenCuratorFees: boolean;
    readonly asChildrenCuratorFees: {
      readonly childId: Option<u32>;
    } & Struct;
    readonly isFinished: boolean;
    readonly type: 'ChildBountyCount' | 'ParentChildBounties' | 'ParentTotalChildBounties' | 'ChildBounties' | 'ChildBountyDescriptionsV1' | 'V0ToV1ChildBountyIds' | 'ChildrenCuratorFees' | 'Finished';
  }

  /** @name PalletRcMigratorCrowdloanCrowdloanStage (496) */
  interface PalletRcMigratorCrowdloanCrowdloanStage extends Enum {
    readonly isSetup: boolean;
    readonly isLeaseReserve: boolean;
    readonly asLeaseReserve: {
      readonly lastKey: Option<u32>;
    } & Struct;
    readonly isCrowdloanContribution: boolean;
    readonly asCrowdloanContribution: {
      readonly lastKey: Option<u32>;
    } & Struct;
    readonly isCrowdloanReserve: boolean;
    readonly isFinished: boolean;
    readonly type: 'Setup' | 'LeaseReserve' | 'CrowdloanContribution' | 'CrowdloanReserve' | 'Finished';
  }

  /** @name PalletRcMigratorTreasuryTreasuryStage (499) */
  interface PalletRcMigratorTreasuryTreasuryStage extends Enum {
    readonly isProposalCount: boolean;
    readonly isProposals: boolean;
    readonly asProposals: Option<u32>;
    readonly isApprovals: boolean;
    readonly isSpendCount: boolean;
    readonly isSpends: boolean;
    readonly asSpends: Option<u32>;
    readonly isLastSpendPeriod: boolean;
    readonly isFunds: boolean;
    readonly isFinished: boolean;
    readonly type: 'ProposalCount' | 'Proposals' | 'Approvals' | 'SpendCount' | 'Spends' | 'LastSpendPeriod' | 'Funds' | 'Finished';
  }

  /** @name PalletRcMigratorStakingStakingImplStakingStage (501) */
  interface PalletRcMigratorStakingStakingImplStakingStage extends Enum {
    readonly isValues: boolean;
    readonly isInvulnerables: boolean;
    readonly isBonded: boolean;
    readonly asBonded: Option<AccountId32>;
    readonly isLedger: boolean;
    readonly asLedger: Option<AccountId32>;
    readonly isPayee: boolean;
    readonly asPayee: Option<AccountId32>;
    readonly isValidators: boolean;
    readonly asValidators: Option<AccountId32>;
    readonly isNominators: boolean;
    readonly asNominators: Option<AccountId32>;
    readonly isVirtualStakers: boolean;
    readonly asVirtualStakers: Option<AccountId32>;
    readonly isErasStakersOverview: boolean;
    readonly asErasStakersOverview: Option<ITuple<[u32, AccountId32]>>;
    readonly isErasStakersPaged: boolean;
    readonly asErasStakersPaged: Option<ITuple<[u32, AccountId32, u32]>>;
    readonly isClaimedRewards: boolean;
    readonly asClaimedRewards: Option<ITuple<[u32, AccountId32]>>;
    readonly isErasValidatorPrefs: boolean;
    readonly asErasValidatorPrefs: Option<ITuple<[u32, AccountId32]>>;
    readonly isErasValidatorReward: boolean;
    readonly asErasValidatorReward: Option<u32>;
    readonly isErasRewardPoints: boolean;
    readonly asErasRewardPoints: Option<u32>;
    readonly isErasTotalStake: boolean;
    readonly asErasTotalStake: Option<u32>;
    readonly isUnappliedSlashes: boolean;
    readonly asUnappliedSlashes: Option<u32>;
    readonly isBondedEras: boolean;
    readonly isValidatorSlashInEra: boolean;
    readonly asValidatorSlashInEra: Option<ITuple<[u32, AccountId32]>>;
    readonly isNominatorSlashInEra: boolean;
    readonly asNominatorSlashInEra: Option<ITuple<[u32, AccountId32]>>;
    readonly isSlashingSpans: boolean;
    readonly asSlashingSpans: Option<AccountId32>;
    readonly isSpanSlash: boolean;
    readonly asSpanSlash: Option<ITuple<[AccountId32, u32]>>;
    readonly isFinished: boolean;
    readonly type: 'Values' | 'Invulnerables' | 'Bonded' | 'Ledger' | 'Payee' | 'Validators' | 'Nominators' | 'VirtualStakers' | 'ErasStakersOverview' | 'ErasStakersPaged' | 'ClaimedRewards' | 'ErasValidatorPrefs' | 'ErasValidatorReward' | 'ErasRewardPoints' | 'ErasTotalStake' | 'UnappliedSlashes' | 'BondedEras' | 'ValidatorSlashInEra' | 'NominatorSlashInEra' | 'SlashingSpans' | 'SpanSlash' | 'Finished';
  }

  /** @name PalletRcMigratorQueuePriority (508) */
  interface PalletRcMigratorQueuePriority extends Enum {
    readonly isConfig: boolean;
    readonly isOverrideConfig: boolean;
    readonly asOverrideConfig: ITuple<[u32, u32]>;
    readonly isDisabled: boolean;
    readonly type: 'Config' | 'OverrideConfig' | 'Disabled';
  }

  /** @name PalletRcMigratorManagerMultisigVote (509) */
  interface PalletRcMigratorManagerMultisigVote extends Struct {
    readonly who: SpRuntimeMultiSigner;
    readonly call: Call;
    readonly round: u32;
  }

  /** @name PalletRcMigratorMigrationSettings (511) */
  interface PalletRcMigratorMigrationSettings extends Struct {
    readonly maxAccountsPerBlock: Option<u32>;
    readonly maxItemsPerBlock: Option<u32>;
  }

  /** @name PolkadotRuntimeCommonClaimsPalletEvent (519) */
  interface PolkadotRuntimeCommonClaimsPalletEvent extends Enum {
    readonly isClaimed: boolean;
    readonly asClaimed: {
      readonly who: AccountId32;
      readonly ethereumAddress: EthereumAddress;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Claimed';
  }

  /** @name PalletStakingAsyncAhClientEvent (536) */
  interface PalletStakingAsyncAhClientEvent extends Enum {
    readonly isValidatorSetReceived: boolean;
    readonly asValidatorSetReceived: {
      readonly id: u32;
      readonly newValidatorSetCount: u32;
      readonly pruneUpTo: Option<u32>;
      readonly leftover: bool;
    } & Struct;
    readonly isCouldNotMergeAndDropped: boolean;
    readonly isSetTooSmallAndDropped: boolean;
    readonly isUnexpected: boolean;
    readonly asUnexpected: PalletStakingAsyncAhClientUnexpectedKind;
    readonly type: 'ValidatorSetReceived' | 'CouldNotMergeAndDropped' | 'SetTooSmallAndDropped' | 'Unexpected';
  }

  /** @name PalletStakingAsyncAhClientUnexpectedKind (537) */
  interface PalletStakingAsyncAhClientUnexpectedKind extends Enum {
    readonly isReceivedValidatorSetWhilePassive: boolean;
    readonly isUnexpectedModeTransition: boolean;
    readonly isSessionReportSendFailed: boolean;
    readonly isSessionReportDropped: boolean;
    readonly isOffenceSendFailed: boolean;
    readonly isValidatorPointDropped: boolean;
    readonly type: 'ReceivedValidatorSetWhilePassive' | 'UnexpectedModeTransition' | 'SessionReportSendFailed' | 'SessionReportDropped' | 'OffenceSendFailed' | 'ValidatorPointDropped';
  }

  /** @name PolkadotRuntimeParachainsInclusionPalletEvent (538) */
  interface PolkadotRuntimeParachainsInclusionPalletEvent extends Enum {
    readonly isCandidateBacked: boolean;
    readonly asCandidateBacked: ITuple<[PolkadotPrimitivesVstagingCandidateReceiptV2, Bytes, u32, u32]>;
    readonly isCandidateIncluded: boolean;
    readonly asCandidateIncluded: ITuple<[PolkadotPrimitivesVstagingCandidateReceiptV2, Bytes, u32, u32]>;
    readonly isCandidateTimedOut: boolean;
    readonly asCandidateTimedOut: ITuple<[PolkadotPrimitivesVstagingCandidateReceiptV2, Bytes, u32]>;
    readonly isUpwardMessagesReceived: boolean;
    readonly asUpwardMessagesReceived: {
      readonly from: u32;
      readonly count: u32;
    } & Struct;
    readonly type: 'CandidateBacked' | 'CandidateIncluded' | 'CandidateTimedOut' | 'UpwardMessagesReceived';
  }

  /** @name PolkadotPrimitivesVstagingCandidateReceiptV2 (539) */
  interface PolkadotPrimitivesVstagingCandidateReceiptV2 extends Struct {
    readonly descriptor: PolkadotPrimitivesVstagingCandidateDescriptorV2;
    readonly commitmentsHash: H256;
  }

  /** @name PolkadotRuntimeParachainsParasPalletEvent (542) */
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
    readonly isUpgradeCooldownRemoved: boolean;
    readonly asUpgradeCooldownRemoved: {
      readonly paraId: u32;
    } & Struct;
    readonly isCodeAuthorized: boolean;
    readonly asCodeAuthorized: {
      readonly paraId: u32;
      readonly codeHash: H256;
      readonly expireAt: u32;
    } & Struct;
    readonly type: 'CurrentCodeUpdated' | 'CurrentHeadUpdated' | 'CodeUpgradeScheduled' | 'NewHeadNoted' | 'ActionQueued' | 'PvfCheckStarted' | 'PvfCheckAccepted' | 'PvfCheckRejected' | 'UpgradeCooldownRemoved' | 'CodeAuthorized';
  }

  /** @name PolkadotRuntimeParachainsHrmpPalletEvent (543) */
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

  /** @name PolkadotRuntimeParachainsDisputesPalletEvent (544) */
  interface PolkadotRuntimeParachainsDisputesPalletEvent extends Enum {
    readonly isDisputeInitiated: boolean;
    readonly asDisputeInitiated: ITuple<[H256, PolkadotRuntimeParachainsDisputesDisputeLocation]>;
    readonly isDisputeConcluded: boolean;
    readonly asDisputeConcluded: ITuple<[H256, PolkadotRuntimeParachainsDisputesDisputeResult]>;
    readonly isRevert: boolean;
    readonly asRevert: u32;
    readonly type: 'DisputeInitiated' | 'DisputeConcluded' | 'Revert';
  }

  /** @name PolkadotRuntimeParachainsDisputesDisputeLocation (545) */
  interface PolkadotRuntimeParachainsDisputesDisputeLocation extends Enum {
    readonly isLocal: boolean;
    readonly isRemote: boolean;
    readonly type: 'Local' | 'Remote';
  }

  /** @name PolkadotRuntimeParachainsDisputesDisputeResult (546) */
  interface PolkadotRuntimeParachainsDisputesDisputeResult extends Enum {
    readonly isValid: boolean;
    readonly isInvalid: boolean;
    readonly type: 'Valid' | 'Invalid';
  }

  /** @name PolkadotRuntimeParachainsOnDemandPalletEvent (547) */
  interface PolkadotRuntimeParachainsOnDemandPalletEvent extends Enum {
    readonly isOnDemandOrderPlaced: boolean;
    readonly asOnDemandOrderPlaced: {
      readonly paraId: u32;
      readonly spotPrice: u128;
      readonly orderedBy: AccountId32;
    } & Struct;
    readonly isSpotPriceSet: boolean;
    readonly asSpotPriceSet: {
      readonly spotPrice: u128;
    } & Struct;
    readonly isAccountCredited: boolean;
    readonly asAccountCredited: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'OnDemandOrderPlaced' | 'SpotPriceSet' | 'AccountCredited';
  }

  /** @name PolkadotRuntimeCommonParasRegistrarPalletEvent (548) */
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

  /** @name PolkadotRuntimeCommonSlotsPalletEvent (549) */
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

  /** @name PolkadotRuntimeCommonAuctionsPalletEvent (550) */
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

  /** @name PolkadotRuntimeCommonCrowdloanPalletEvent (551) */
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

  /** @name PolkadotRuntimeParachainsCoretimePalletEvent (552) */
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

  /** @name PalletXcmEvent (556) */
  interface PalletXcmEvent extends Enum {
    readonly isAttempted: boolean;
    readonly asAttempted: {
      readonly outcome: StagingXcmV5TraitsOutcome;
    } & Struct;
    readonly isSent: boolean;
    readonly asSent: {
      readonly origin: StagingXcmV5Location;
      readonly destination: StagingXcmV5Location;
      readonly message: StagingXcmV5Xcm;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isSendFailed: boolean;
    readonly asSendFailed: {
      readonly origin: StagingXcmV5Location;
      readonly destination: StagingXcmV5Location;
      readonly error: XcmV3TraitsSendError;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isProcessXcmError: boolean;
    readonly asProcessXcmError: {
      readonly origin: StagingXcmV5Location;
      readonly error: XcmV5TraitsError;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isUnexpectedResponse: boolean;
    readonly asUnexpectedResponse: {
      readonly origin: StagingXcmV5Location;
      readonly queryId: u64;
    } & Struct;
    readonly isResponseReady: boolean;
    readonly asResponseReady: {
      readonly queryId: u64;
      readonly response: StagingXcmV5Response;
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
      readonly origin: StagingXcmV5Location;
      readonly queryId: u64;
      readonly expectedLocation: Option<StagingXcmV5Location>;
    } & Struct;
    readonly isInvalidResponderVersion: boolean;
    readonly asInvalidResponderVersion: {
      readonly origin: StagingXcmV5Location;
      readonly queryId: u64;
    } & Struct;
    readonly isResponseTaken: boolean;
    readonly asResponseTaken: {
      readonly queryId: u64;
    } & Struct;
    readonly isAssetsTrapped: boolean;
    readonly asAssetsTrapped: {
      readonly hash_: H256;
      readonly origin: StagingXcmV5Location;
      readonly assets: XcmVersionedAssets;
    } & Struct;
    readonly isVersionChangeNotified: boolean;
    readonly asVersionChangeNotified: {
      readonly destination: StagingXcmV5Location;
      readonly result: u32;
      readonly cost: StagingXcmV5AssetAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isSupportedVersionChanged: boolean;
    readonly asSupportedVersionChanged: {
      readonly location: StagingXcmV5Location;
      readonly version: u32;
    } & Struct;
    readonly isNotifyTargetSendFail: boolean;
    readonly asNotifyTargetSendFail: {
      readonly location: StagingXcmV5Location;
      readonly queryId: u64;
      readonly error: XcmV5TraitsError;
    } & Struct;
    readonly isNotifyTargetMigrationFail: boolean;
    readonly asNotifyTargetMigrationFail: {
      readonly location: XcmVersionedLocation;
      readonly queryId: u64;
    } & Struct;
    readonly isInvalidQuerierVersion: boolean;
    readonly asInvalidQuerierVersion: {
      readonly origin: StagingXcmV5Location;
      readonly queryId: u64;
    } & Struct;
    readonly isInvalidQuerier: boolean;
    readonly asInvalidQuerier: {
      readonly origin: StagingXcmV5Location;
      readonly queryId: u64;
      readonly expectedQuerier: StagingXcmV5Location;
      readonly maybeActualQuerier: Option<StagingXcmV5Location>;
    } & Struct;
    readonly isVersionNotifyStarted: boolean;
    readonly asVersionNotifyStarted: {
      readonly destination: StagingXcmV5Location;
      readonly cost: StagingXcmV5AssetAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isVersionNotifyRequested: boolean;
    readonly asVersionNotifyRequested: {
      readonly destination: StagingXcmV5Location;
      readonly cost: StagingXcmV5AssetAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isVersionNotifyUnrequested: boolean;
    readonly asVersionNotifyUnrequested: {
      readonly destination: StagingXcmV5Location;
      readonly cost: StagingXcmV5AssetAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isFeesPaid: boolean;
    readonly asFeesPaid: {
      readonly paying: StagingXcmV5Location;
      readonly fees: StagingXcmV5AssetAssets;
    } & Struct;
    readonly isAssetsClaimed: boolean;
    readonly asAssetsClaimed: {
      readonly hash_: H256;
      readonly origin: StagingXcmV5Location;
      readonly assets: XcmVersionedAssets;
    } & Struct;
    readonly isVersionMigrationFinished: boolean;
    readonly asVersionMigrationFinished: {
      readonly version: u32;
    } & Struct;
    readonly isAliasAuthorized: boolean;
    readonly asAliasAuthorized: {
      readonly aliaser: StagingXcmV5Location;
      readonly target: StagingXcmV5Location;
      readonly expiry: Option<u64>;
    } & Struct;
    readonly isAliasAuthorizationRemoved: boolean;
    readonly asAliasAuthorizationRemoved: {
      readonly aliaser: StagingXcmV5Location;
      readonly target: StagingXcmV5Location;
    } & Struct;
    readonly isAliasesAuthorizationsRemoved: boolean;
    readonly asAliasesAuthorizationsRemoved: {
      readonly target: StagingXcmV5Location;
    } & Struct;
    readonly type: 'Attempted' | 'Sent' | 'SendFailed' | 'ProcessXcmError' | 'UnexpectedResponse' | 'ResponseReady' | 'Notified' | 'NotifyOverweight' | 'NotifyDispatchError' | 'NotifyDecodeFailed' | 'InvalidResponder' | 'InvalidResponderVersion' | 'ResponseTaken' | 'AssetsTrapped' | 'VersionChangeNotified' | 'SupportedVersionChanged' | 'NotifyTargetSendFail' | 'NotifyTargetMigrationFail' | 'InvalidQuerierVersion' | 'InvalidQuerier' | 'VersionNotifyStarted' | 'VersionNotifyRequested' | 'VersionNotifyUnrequested' | 'FeesPaid' | 'AssetsClaimed' | 'VersionMigrationFinished' | 'AliasAuthorized' | 'AliasAuthorizationRemoved' | 'AliasesAuthorizationsRemoved';
  }

  /** @name StagingXcmV5TraitsOutcome (557) */
  interface StagingXcmV5TraitsOutcome extends Enum {
    readonly isComplete: boolean;
    readonly asComplete: {
      readonly used: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isIncomplete: boolean;
    readonly asIncomplete: {
      readonly used: SpWeightsWeightV2Weight;
      readonly error: StagingXcmV5TraitsInstructionError;
    } & Struct;
    readonly isError: boolean;
    readonly asError: StagingXcmV5TraitsInstructionError;
    readonly type: 'Complete' | 'Incomplete' | 'Error';
  }

  /** @name StagingXcmV5TraitsInstructionError (558) */
  interface StagingXcmV5TraitsInstructionError extends Struct {
    readonly index: u8;
    readonly error: XcmV5TraitsError;
  }

  /** @name XcmV3TraitsSendError (559) */
  interface XcmV3TraitsSendError extends Enum {
    readonly isNotApplicable: boolean;
    readonly isTransport: boolean;
    readonly isUnroutable: boolean;
    readonly isDestinationUnsupported: boolean;
    readonly isExceedsMaxMessageSize: boolean;
    readonly isMissingArgument: boolean;
    readonly isFees: boolean;
    readonly type: 'NotApplicable' | 'Transport' | 'Unroutable' | 'DestinationUnsupported' | 'ExceedsMaxMessageSize' | 'MissingArgument' | 'Fees';
  }

  /** @name PalletRcMigratorEvent (563) */
  interface PalletRcMigratorEvent extends Enum {
    readonly isStageTransition: boolean;
    readonly asStageTransition: {
      readonly old: PalletRcMigratorMigrationStage;
      readonly new_: PalletRcMigratorMigrationStage;
    } & Struct;
    readonly isAssetHubMigrationStarted: boolean;
    readonly isAssetHubMigrationFinished: boolean;
    readonly isQueryResponseReceived: boolean;
    readonly asQueryResponseReceived: {
      readonly queryId: u64;
      readonly response: XcmV3MaybeErrorCode;
    } & Struct;
    readonly isXcmResendAttempt: boolean;
    readonly asXcmResendAttempt: {
      readonly queryId: u64;
      readonly sendError: Option<XcmV3TraitsSendError>;
    } & Struct;
    readonly isUnprocessedMsgBufferSet: boolean;
    readonly asUnprocessedMsgBufferSet: {
      readonly new_: u32;
      readonly old: u32;
    } & Struct;
    readonly isAhUmpQueuePrioritySet: boolean;
    readonly asAhUmpQueuePrioritySet: {
      readonly prioritized: bool;
      readonly cycleBlock: u32;
      readonly cyclePeriod: u32;
    } & Struct;
    readonly isAhUmpQueuePriorityConfigSet: boolean;
    readonly asAhUmpQueuePriorityConfigSet: {
      readonly old: PalletRcMigratorQueuePriority;
      readonly new_: PalletRcMigratorQueuePriority;
    } & Struct;
    readonly isMigratedBalanceRecordSet: boolean;
    readonly asMigratedBalanceRecordSet: {
      readonly kept: u128;
      readonly migrated: u128;
    } & Struct;
    readonly isMigratedBalanceConsumed: boolean;
    readonly asMigratedBalanceConsumed: {
      readonly kept: u128;
      readonly migrated: u128;
    } & Struct;
    readonly isManagerSet: boolean;
    readonly asManagerSet: {
      readonly old: Option<AccountId32>;
      readonly new_: Option<AccountId32>;
    } & Struct;
    readonly isXcmSent: boolean;
    readonly asXcmSent: {
      readonly origin: StagingXcmV5Location;
      readonly destination: StagingXcmV5Location;
      readonly message: StagingXcmV5Xcm;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isStakingElectionsPaused: boolean;
    readonly isAccountsPreserved: boolean;
    readonly asAccountsPreserved: {
      readonly accounts: Vec<AccountId32>;
    } & Struct;
    readonly isCancellerSet: boolean;
    readonly asCancellerSet: {
      readonly old: Option<AccountId32>;
      readonly new_: Option<AccountId32>;
    } & Struct;
    readonly isMigrationPaused: boolean;
    readonly asMigrationPaused: {
      readonly pauseStage: PalletRcMigratorMigrationStage;
    } & Struct;
    readonly isMigrationCancelled: boolean;
    readonly isPureAccountsIndexed: boolean;
    readonly asPureAccountsIndexed: {
      readonly numPureAccounts: u32;
    } & Struct;
    readonly isManagerMultisigDispatched: boolean;
    readonly asManagerMultisigDispatched: {
      readonly res: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isManagerMultisigVoted: boolean;
    readonly asManagerMultisigVoted: {
      readonly votes: u32;
    } & Struct;
    readonly isMigrationSettingsSet: boolean;
    readonly asMigrationSettingsSet: {
      readonly old: Option<PalletRcMigratorMigrationSettings>;
      readonly new_: Option<PalletRcMigratorMigrationSettings>;
    } & Struct;
    readonly type: 'StageTransition' | 'AssetHubMigrationStarted' | 'AssetHubMigrationFinished' | 'QueryResponseReceived' | 'XcmResendAttempt' | 'UnprocessedMsgBufferSet' | 'AhUmpQueuePrioritySet' | 'AhUmpQueuePriorityConfigSet' | 'MigratedBalanceRecordSet' | 'MigratedBalanceConsumed' | 'ManagerSet' | 'XcmSent' | 'StakingElectionsPaused' | 'AccountsPreserved' | 'CancellerSet' | 'MigrationPaused' | 'MigrationCancelled' | 'PureAccountsIndexed' | 'ManagerMultisigDispatched' | 'ManagerMultisigVoted' | 'MigrationSettingsSet';
  }

  /** @name PolkadotRuntimeRuntimeHoldReason (623) */
  interface PolkadotRuntimeRuntimeHoldReason extends Enum {
    readonly isStaking: boolean;
    readonly asStaking: PalletStakingPalletHoldReason;
    readonly isSession: boolean;
    readonly asSession: PalletSessionHoldReason;
    readonly isPreimage: boolean;
    readonly asPreimage: PalletPreimageHoldReason;
    readonly isDelegatedStaking: boolean;
    readonly asDelegatedStaking: PalletDelegatedStakingHoldReason;
    readonly isStateTrieMigration: boolean;
    readonly asStateTrieMigration: PalletStateTrieMigrationHoldReason;
    readonly isXcmPallet: boolean;
    readonly asXcmPallet: PalletXcmHoldReason;
    readonly type: 'Staking' | 'Session' | 'Preimage' | 'DelegatedStaking' | 'StateTrieMigration' | 'XcmPallet';
  }

  /** @name PalletSessionHoldReason (626) */
  interface PalletSessionHoldReason extends Enum {
    readonly isKeys: boolean;
    readonly type: 'Keys';
  }

  /** @name PalletXcmHoldReason (629) */
  interface PalletXcmHoldReason extends Enum {
    readonly isAuthorizeAlias: boolean;
    readonly type: 'AuthorizeAlias';
  }

  /** @name PolkadotRuntimeRuntimeFreezeReason (633) */
  interface PolkadotRuntimeRuntimeFreezeReason extends Enum {
    readonly isNominationPools: boolean;
    readonly asNominationPools: PalletNominationPoolsFreezeReason;
    readonly type: 'NominationPools';
  }

  /** @name PalletReferendaReferendumInfo (693) */
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

  /** @name PalletReferendaReferendumStatus (694) */
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

  /** @name PolkadotRuntimeCommonClaimsPalletError (712) */
  interface PolkadotRuntimeCommonClaimsPalletError extends Enum {
    readonly isInvalidEthereumSignature: boolean;
    readonly isSignerHasNoClaim: boolean;
    readonly isSenderHasNoClaim: boolean;
    readonly isPotUnderflow: boolean;
    readonly isInvalidStatement: boolean;
    readonly isVestedBalanceExists: boolean;
    readonly type: 'InvalidEthereumSignature' | 'SignerHasNoClaim' | 'SenderHasNoClaim' | 'PotUnderflow' | 'InvalidStatement' | 'VestedBalanceExists';
  }

  /** @name FrameElectionProviderSupportBoundedSupports (738) */
  interface FrameElectionProviderSupportBoundedSupports extends Vec<ITuple<[AccountId32, FrameElectionProviderSupportBoundedSupport]>> {}

  /** @name FrameElectionProviderSupportBoundedSupport (741) */
  interface FrameElectionProviderSupportBoundedSupport extends Struct {
    readonly total: u128;
    readonly voters: Vec<ITuple<[AccountId32, u128]>>;
  }

  /** @name PalletStakingAsyncRcClientSessionReport (783) */
  interface PalletStakingAsyncRcClientSessionReport extends Struct {
    readonly endIndex: u32;
    readonly validatorPoints: Vec<ITuple<[AccountId32, u32]>>;
    readonly activationTimestamp: Option<ITuple<[u64, u32]>>;
    readonly leftover: bool;
  }

  /** @name PalletStakingAsyncRcClientOffence (787) */
  interface PalletStakingAsyncRcClientOffence extends Struct {
    readonly offender: AccountId32;
    readonly reporters: Vec<AccountId32>;
    readonly slashFraction: Perbill;
  }

  /** @name PalletStakingAsyncAhClientError (789) */
  interface PalletStakingAsyncAhClientError extends Enum {
    readonly isBlocked: boolean;
    readonly type: 'Blocked';
  }

  /** @name PolkadotRuntimeParachainsConfigurationHostConfiguration (790) */
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
    readonly asyncBackingParams: PolkadotPrimitivesV8AsyncBackingAsyncBackingParams;
    readonly maxPovSize: u32;
    readonly maxDownwardMessageSize: u32;
    readonly hrmpMaxParachainOutboundChannels: u32;
    readonly hrmpSenderDeposit: u128;
    readonly hrmpRecipientDeposit: u128;
    readonly hrmpChannelMaxCapacity: u32;
    readonly hrmpChannelMaxTotalSize: u32;
    readonly hrmpMaxParachainInboundChannels: u32;
    readonly hrmpChannelMaxMessageSize: u32;
    readonly executorParams: PolkadotPrimitivesV8ExecutorParams;
    readonly codeRetentionPeriod: u32;
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
    readonly approvalVotingParams: PolkadotPrimitivesV8ApprovalVotingParams;
    readonly schedulerParams: PolkadotPrimitivesV8SchedulerParams;
  }

  /** @name PolkadotRuntimeParachainsConfigurationPalletError (793) */
  interface PolkadotRuntimeParachainsConfigurationPalletError extends Enum {
    readonly isInvalidNewValue: boolean;
    readonly type: 'InvalidNewValue';
  }

  /** @name PolkadotRuntimeParachainsSharedAllowedRelayParentsTracker (796) */
  interface PolkadotRuntimeParachainsSharedAllowedRelayParentsTracker extends Struct {
    readonly buffer: Vec<PolkadotRuntimeParachainsSharedRelayParentInfo>;
    readonly latestNumber: u32;
  }

  /** @name PolkadotRuntimeParachainsSharedRelayParentInfo (798) */
  interface PolkadotRuntimeParachainsSharedRelayParentInfo extends Struct {
    readonly relayParent: H256;
    readonly stateRoot: H256;
    readonly claimQueue: BTreeMap<u32, BTreeMap<u8, BTreeSet<u32>>>;
  }

  /** @name PolkadotRuntimeParachainsInclusionCandidatePendingAvailability (808) */
  interface PolkadotRuntimeParachainsInclusionCandidatePendingAvailability extends Struct {
    readonly core: u32;
    readonly hash_: H256;
    readonly descriptor: PolkadotPrimitivesVstagingCandidateDescriptorV2;
    readonly commitments: PolkadotPrimitivesV8CandidateCommitments;
    readonly availabilityVotes: BitVec;
    readonly backers: BitVec;
    readonly relayParentNumber: u32;
    readonly backedInNumber: u32;
    readonly backingGroup: u32;
  }

  /** @name PolkadotRuntimeParachainsInclusionPalletError (809) */
  interface PolkadotRuntimeParachainsInclusionPalletError extends Enum {
    readonly isValidatorIndexOutOfBounds: boolean;
    readonly isUnscheduledCandidate: boolean;
    readonly isHeadDataTooLarge: boolean;
    readonly isPrematureCodeUpgrade: boolean;
    readonly isNewCodeTooLarge: boolean;
    readonly isDisallowedRelayParent: boolean;
    readonly isInvalidAssignment: boolean;
    readonly isInvalidGroupIndex: boolean;
    readonly isInsufficientBacking: boolean;
    readonly isInvalidBacking: boolean;
    readonly isValidationDataHashMismatch: boolean;
    readonly isIncorrectDownwardMessageHandling: boolean;
    readonly isInvalidUpwardMessages: boolean;
    readonly isHrmpWatermarkMishandling: boolean;
    readonly isInvalidOutboundHrmp: boolean;
    readonly isInvalidValidationCodeHash: boolean;
    readonly isParaHeadMismatch: boolean;
    readonly type: 'ValidatorIndexOutOfBounds' | 'UnscheduledCandidate' | 'HeadDataTooLarge' | 'PrematureCodeUpgrade' | 'NewCodeTooLarge' | 'DisallowedRelayParent' | 'InvalidAssignment' | 'InvalidGroupIndex' | 'InsufficientBacking' | 'InvalidBacking' | 'ValidationDataHashMismatch' | 'IncorrectDownwardMessageHandling' | 'InvalidUpwardMessages' | 'HrmpWatermarkMishandling' | 'InvalidOutboundHrmp' | 'InvalidValidationCodeHash' | 'ParaHeadMismatch';
  }

  /** @name PolkadotPrimitivesVstagingScrapedOnChainVotes (810) */
  interface PolkadotPrimitivesVstagingScrapedOnChainVotes extends Struct {
    readonly session: u32;
    readonly backingValidatorsPerCandidate: Vec<ITuple<[PolkadotPrimitivesVstagingCandidateReceiptV2, Vec<ITuple<[u32, PolkadotPrimitivesV8ValidityAttestation]>>]>>;
    readonly disputes: Vec<PolkadotPrimitivesV8DisputeStatementSet>;
  }

  /** @name PolkadotRuntimeParachainsParasInherentPalletError (815) */
  interface PolkadotRuntimeParachainsParasInherentPalletError extends Enum {
    readonly isTooManyInclusionInherents: boolean;
    readonly isInvalidParentHeader: boolean;
    readonly isInherentDataFilteredDuringExecution: boolean;
    readonly isUnscheduledCandidate: boolean;
    readonly type: 'TooManyInclusionInherents' | 'InvalidParentHeader' | 'InherentDataFilteredDuringExecution' | 'UnscheduledCandidate';
  }

  /** @name PolkadotRuntimeParachainsSchedulerCommonAssignment (819) */
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

  /** @name PolkadotRuntimeParachainsParasPvfCheckActiveVoteState (822) */
  interface PolkadotRuntimeParachainsParasPvfCheckActiveVoteState extends Struct {
    readonly votesAccept: BitVec;
    readonly votesReject: BitVec;
    readonly age: u32;
    readonly createdAt: u32;
    readonly causes: Vec<PolkadotRuntimeParachainsParasPvfCheckCause>;
  }

  /** @name PolkadotRuntimeParachainsParasPvfCheckCause (824) */
  interface PolkadotRuntimeParachainsParasPvfCheckCause extends Enum {
    readonly isOnboarding: boolean;
    readonly asOnboarding: u32;
    readonly isUpgrade: boolean;
    readonly asUpgrade: {
      readonly id: u32;
      readonly includedAt: u32;
      readonly upgradeStrategy: PolkadotRuntimeParachainsParasUpgradeStrategy;
    } & Struct;
    readonly type: 'Onboarding' | 'Upgrade';
  }

  /** @name PolkadotRuntimeParachainsParasUpgradeStrategy (825) */
  interface PolkadotRuntimeParachainsParasUpgradeStrategy extends Enum {
    readonly isSetGoAheadSignal: boolean;
    readonly isApplyAtExpectedBlock: boolean;
    readonly type: 'SetGoAheadSignal' | 'ApplyAtExpectedBlock';
  }

  /** @name PolkadotRuntimeParachainsParasParaLifecycle (828) */
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

  /** @name PolkadotRuntimeParachainsParasParaPastCodeMeta (830) */
  interface PolkadotRuntimeParachainsParasParaPastCodeMeta extends Struct {
    readonly upgradeTimes: Vec<PolkadotRuntimeParachainsParasReplacementTimes>;
    readonly lastPruned: Option<u32>;
  }

  /** @name PolkadotRuntimeParachainsParasReplacementTimes (832) */
  interface PolkadotRuntimeParachainsParasReplacementTimes extends Struct {
    readonly expectedAt: u32;
    readonly activatedAt: u32;
  }

  /** @name PolkadotRuntimeParachainsParasAuthorizedCodeHashAndExpiry (834) */
  interface PolkadotRuntimeParachainsParasAuthorizedCodeHashAndExpiry extends Struct {
    readonly codeHash: H256;
    readonly expireAt: u32;
  }

  /** @name PolkadotPrimitivesV8UpgradeGoAhead (835) */
  interface PolkadotPrimitivesV8UpgradeGoAhead extends Enum {
    readonly isAbort: boolean;
    readonly isGoAhead: boolean;
    readonly type: 'Abort' | 'GoAhead';
  }

  /** @name PolkadotPrimitivesV8UpgradeRestriction (836) */
  interface PolkadotPrimitivesV8UpgradeRestriction extends Enum {
    readonly isPresent: boolean;
    readonly type: 'Present';
  }

  /** @name PolkadotRuntimeParachainsParasParaGenesisArgs (837) */
  interface PolkadotRuntimeParachainsParasParaGenesisArgs extends Struct {
    readonly genesisHead: Bytes;
    readonly validationCode: Bytes;
    readonly paraKind: bool;
  }

  /** @name PolkadotRuntimeParachainsParasPalletError (838) */
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
    readonly isInvalidCode: boolean;
    readonly isNothingAuthorized: boolean;
    readonly isUnauthorized: boolean;
    readonly isInvalidBlockNumber: boolean;
    readonly type: 'NotRegistered' | 'CannotOnboard' | 'CannotOffboard' | 'CannotUpgrade' | 'CannotDowngrade' | 'PvfCheckStatementStale' | 'PvfCheckStatementFuture' | 'PvfCheckValidatorIndexOutOfBounds' | 'PvfCheckInvalidSignature' | 'PvfCheckDoubleVote' | 'PvfCheckSubjectInvalid' | 'CannotUpgradeCode' | 'InvalidCode' | 'NothingAuthorized' | 'Unauthorized' | 'InvalidBlockNumber';
  }

  /** @name PolkadotRuntimeParachainsInitializerBufferedSessionChange (840) */
  interface PolkadotRuntimeParachainsInitializerBufferedSessionChange extends Struct {
    readonly validators: Vec<PolkadotPrimitivesV8ValidatorAppPublic>;
    readonly queued: Vec<PolkadotPrimitivesV8ValidatorAppPublic>;
    readonly sessionIndex: u32;
  }

  /** @name PolkadotCorePrimitivesInboundDownwardMessage (842) */
  interface PolkadotCorePrimitivesInboundDownwardMessage extends Struct {
    readonly sentAt: u32;
    readonly msg: Bytes;
  }

  /** @name PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest (843) */
  interface PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest extends Struct {
    readonly confirmed: bool;
    readonly age: u32;
    readonly senderDeposit: u128;
    readonly maxMessageSize: u32;
    readonly maxCapacity: u32;
    readonly maxTotalSize: u32;
  }

  /** @name PolkadotRuntimeParachainsHrmpHrmpChannel (845) */
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

  /** @name PolkadotCorePrimitivesInboundHrmpMessage (847) */
  interface PolkadotCorePrimitivesInboundHrmpMessage extends Struct {
    readonly sentAt: u32;
    readonly data: Bytes;
  }

  /** @name PolkadotRuntimeParachainsHrmpPalletError (850) */
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

  /** @name PolkadotPrimitivesV8SessionInfo (852) */
  interface PolkadotPrimitivesV8SessionInfo extends Struct {
    readonly activeValidatorIndices: Vec<u32>;
    readonly randomSeed: U8aFixed;
    readonly disputePeriod: u32;
    readonly validators: PolkadotPrimitivesV8IndexedVecValidatorIndex;
    readonly discoveryKeys: Vec<SpAuthorityDiscoveryAppPublic>;
    readonly assignmentKeys: Vec<PolkadotPrimitivesV8AssignmentAppPublic>;
    readonly validatorGroups: PolkadotPrimitivesV8IndexedVecGroupIndex;
    readonly nCores: u32;
    readonly zerothDelayTrancheWidth: u32;
    readonly relayVrfModuloSamples: u32;
    readonly nDelayTranches: u32;
    readonly noShowSlots: u32;
    readonly neededApprovals: u32;
  }

  /** @name PolkadotPrimitivesV8IndexedVecValidatorIndex (853) */
  interface PolkadotPrimitivesV8IndexedVecValidatorIndex extends Vec<PolkadotPrimitivesV8ValidatorAppPublic> {}

  /** @name PolkadotPrimitivesV8IndexedVecGroupIndex (854) */
  interface PolkadotPrimitivesV8IndexedVecGroupIndex extends Vec<Vec<u32>> {}

  /** @name PolkadotPrimitivesV8DisputeState (856) */
  interface PolkadotPrimitivesV8DisputeState extends Struct {
    readonly validatorsFor: BitVec;
    readonly validatorsAgainst: BitVec;
    readonly start: u32;
    readonly concludedAt: Option<u32>;
  }

  /** @name PolkadotRuntimeParachainsDisputesPalletError (858) */
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

  /** @name PolkadotPrimitivesVstagingPendingSlashes (859) */
  interface PolkadotPrimitivesVstagingPendingSlashes extends Struct {
    readonly keys_: BTreeMap<u32, PolkadotPrimitivesV8ValidatorAppPublic>;
    readonly kind: PolkadotPrimitivesVstagingDisputeOffenceKind;
  }

  /** @name PolkadotRuntimeParachainsDisputesSlashingPalletError (863) */
  interface PolkadotRuntimeParachainsDisputesSlashingPalletError extends Enum {
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isInvalidSessionIndex: boolean;
    readonly isInvalidCandidateHash: boolean;
    readonly isInvalidValidatorIndex: boolean;
    readonly isValidatorIndexIdMismatch: boolean;
    readonly isDuplicateSlashingReport: boolean;
    readonly type: 'InvalidKeyOwnershipProof' | 'InvalidSessionIndex' | 'InvalidCandidateHash' | 'InvalidValidatorIndex' | 'ValidatorIndexIdMismatch' | 'DuplicateSlashingReport';
  }

  /** @name PolkadotRuntimeParachainsOnDemandTypesCoreAffinityCount (864) */
  interface PolkadotRuntimeParachainsOnDemandTypesCoreAffinityCount extends Struct {
    readonly coreIndex: u32;
    readonly count: u32;
  }

  /** @name PolkadotRuntimeParachainsOnDemandTypesQueueStatusType (865) */
  interface PolkadotRuntimeParachainsOnDemandTypesQueueStatusType extends Struct {
    readonly traffic: u128;
    readonly nextIndex: u32;
    readonly smallestIndex: u32;
    readonly freedIndices: BinaryHeapReverseQueueIndex;
  }

  /** @name BinaryHeapReverseQueueIndex (867) */
  interface BinaryHeapReverseQueueIndex extends Vec<u32> {}

  /** @name BinaryHeapEnqueuedOrder (870) */
  interface BinaryHeapEnqueuedOrder extends Vec<PolkadotRuntimeParachainsOnDemandTypesEnqueuedOrder> {}

  /** @name PolkadotRuntimeParachainsOnDemandTypesEnqueuedOrder (871) */
  interface PolkadotRuntimeParachainsOnDemandTypesEnqueuedOrder extends Struct {
    readonly paraId: u32;
    readonly idx: u32;
  }

  /** @name PolkadotRuntimeParachainsOnDemandPalletError (875) */
  interface PolkadotRuntimeParachainsOnDemandPalletError extends Enum {
    readonly isQueueFull: boolean;
    readonly isSpotPriceHigherThanMaxAmount: boolean;
    readonly isInsufficientCredits: boolean;
    readonly type: 'QueueFull' | 'SpotPriceHigherThanMaxAmount' | 'InsufficientCredits';
  }

  /** @name PolkadotRuntimeParachainsAssignerCoretimeSchedule (877) */
  interface PolkadotRuntimeParachainsAssignerCoretimeSchedule extends Struct {
    readonly assignments: Vec<ITuple<[PalletBrokerCoretimeInterfaceCoreAssignment, u16]>>;
    readonly endHint: Option<u32>;
    readonly nextSchedule: Option<u32>;
  }

  /** @name PolkadotRuntimeParachainsAssignerCoretimeCoreDescriptor (878) */
  interface PolkadotRuntimeParachainsAssignerCoretimeCoreDescriptor extends Struct {
    readonly queue: Option<PolkadotRuntimeParachainsAssignerCoretimeQueueDescriptor>;
    readonly currentWork: Option<PolkadotRuntimeParachainsAssignerCoretimeWorkState>;
  }

  /** @name PolkadotRuntimeParachainsAssignerCoretimeQueueDescriptor (880) */
  interface PolkadotRuntimeParachainsAssignerCoretimeQueueDescriptor extends Struct {
    readonly first: u32;
    readonly last: u32;
  }

  /** @name PolkadotRuntimeParachainsAssignerCoretimeWorkState (882) */
  interface PolkadotRuntimeParachainsAssignerCoretimeWorkState extends Struct {
    readonly assignments: Vec<ITuple<[PalletBrokerCoretimeInterfaceCoreAssignment, PolkadotRuntimeParachainsAssignerCoretimeAssignmentState]>>;
    readonly endHint: Option<u32>;
    readonly pos: u16;
    readonly step: u16;
  }

  /** @name PolkadotRuntimeParachainsAssignerCoretimeAssignmentState (885) */
  interface PolkadotRuntimeParachainsAssignerCoretimeAssignmentState extends Struct {
    readonly ratio: u16;
    readonly remaining: u16;
  }

  /** @name PolkadotRuntimeParachainsAssignerCoretimePalletError (886) */
  interface PolkadotRuntimeParachainsAssignerCoretimePalletError extends Enum {
    readonly isAssignmentsEmpty: boolean;
    readonly isDisallowedInsert: boolean;
    readonly type: 'AssignmentsEmpty' | 'DisallowedInsert';
  }

  /** @name PolkadotRuntimeCommonParasRegistrarParaInfo (887) */
  interface PolkadotRuntimeCommonParasRegistrarParaInfo extends Struct {
    readonly manager: AccountId32;
    readonly deposit: u128;
    readonly locked: Option<bool>;
  }

  /** @name PolkadotRuntimeCommonParasRegistrarPalletError (889) */
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
    readonly isInvalidCode: boolean;
    readonly isCannotSwap: boolean;
    readonly type: 'NotRegistered' | 'AlreadyRegistered' | 'NotOwner' | 'CodeTooLarge' | 'HeadDataTooLarge' | 'NotParachain' | 'NotParathread' | 'CannotDeregister' | 'CannotDowngrade' | 'CannotUpgrade' | 'ParaLocked' | 'NotReserved' | 'InvalidCode' | 'CannotSwap';
  }

  /** @name PolkadotRuntimeCommonSlotsPalletError (891) */
  interface PolkadotRuntimeCommonSlotsPalletError extends Enum {
    readonly isParaNotOnboarding: boolean;
    readonly isLeaseError: boolean;
    readonly type: 'ParaNotOnboarding' | 'LeaseError';
  }

  /** @name PolkadotRuntimeCommonAuctionsPalletError (896) */
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

  /** @name PolkadotRuntimeCommonCrowdloanFundInfo (897) */
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

  /** @name PolkadotRuntimeCommonCrowdloanLastContribution (898) */
  interface PolkadotRuntimeCommonCrowdloanLastContribution extends Enum {
    readonly isNever: boolean;
    readonly isPreEnding: boolean;
    readonly asPreEnding: u32;
    readonly isEnding: boolean;
    readonly asEnding: u32;
    readonly type: 'Never' | 'PreEnding' | 'Ending';
  }

  /** @name PolkadotRuntimeCommonCrowdloanPalletError (899) */
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

  /** @name PolkadotRuntimeParachainsCoretimePalletError (900) */
  interface PolkadotRuntimeParachainsCoretimePalletError extends Enum {
    readonly isNotBroker: boolean;
    readonly isRequestedFutureRevenue: boolean;
    readonly isAssetTransferFailed: boolean;
    readonly type: 'NotBroker' | 'RequestedFutureRevenue' | 'AssetTransferFailed';
  }

  /** @name PalletXcmQueryStatus (901) */
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

  /** @name XcmVersionedResponse (905) */
  interface XcmVersionedResponse extends Enum {
    readonly isV3: boolean;
    readonly asV3: XcmV3Response;
    readonly isV4: boolean;
    readonly asV4: StagingXcmV4Response;
    readonly isV5: boolean;
    readonly asV5: StagingXcmV5Response;
    readonly type: 'V3' | 'V4' | 'V5';
  }

  /** @name PalletXcmVersionMigrationStage (911) */
  interface PalletXcmVersionMigrationStage extends Enum {
    readonly isMigrateSupportedVersion: boolean;
    readonly isMigrateVersionNotifiers: boolean;
    readonly isNotifyCurrentTargets: boolean;
    readonly asNotifyCurrentTargets: Option<Bytes>;
    readonly isMigrateAndNotifyOldTargets: boolean;
    readonly type: 'MigrateSupportedVersion' | 'MigrateVersionNotifiers' | 'NotifyCurrentTargets' | 'MigrateAndNotifyOldTargets';
  }

  /** @name PalletXcmRemoteLockedFungibleRecord (914) */
  interface PalletXcmRemoteLockedFungibleRecord extends Struct {
    readonly amount: u128;
    readonly owner: XcmVersionedLocation;
    readonly locker: XcmVersionedLocation;
    readonly consumers: Vec<ITuple<[Null, u128]>>;
  }

  /** @name PalletXcmAuthorizedAliasesEntry (921) */
  interface PalletXcmAuthorizedAliasesEntry extends Struct {
    readonly aliasers: Vec<XcmRuntimeApisAuthorizedAliasesOriginAliaser>;
    readonly ticket: FrameSupportStorageDisabled;
  }

  /** @name FrameSupportStorageDisabled (922) */
  type FrameSupportStorageDisabled = Null;

  /** @name PalletXcmMaxAuthorizedAliases (923) */
  type PalletXcmMaxAuthorizedAliases = Null;

  /** @name XcmRuntimeApisAuthorizedAliasesOriginAliaser (925) */
  interface XcmRuntimeApisAuthorizedAliasesOriginAliaser extends Struct {
    readonly location: XcmVersionedLocation;
    readonly expiry: Option<u64>;
  }

  /** @name PalletXcmError (927) */
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
    readonly isInvalidAssetUnknownReserve: boolean;
    readonly isInvalidAssetUnsupportedReserve: boolean;
    readonly isTooManyReserves: boolean;
    readonly isLocalExecutionIncomplete: boolean;
    readonly isTooManyAuthorizedAliases: boolean;
    readonly isExpiresInPast: boolean;
    readonly isAliasNotFound: boolean;
    readonly isLocalExecutionIncompleteWithError: boolean;
    readonly asLocalExecutionIncompleteWithError: {
      readonly index: u8;
      readonly error: PalletXcmErrorsExecutionError;
    } & Struct;
    readonly type: 'Unreachable' | 'SendFailure' | 'Filtered' | 'UnweighableMessage' | 'DestinationNotInvertible' | 'Empty' | 'CannotReanchor' | 'TooManyAssets' | 'InvalidOrigin' | 'BadVersion' | 'BadLocation' | 'NoSubscription' | 'AlreadySubscribed' | 'CannotCheckOutTeleport' | 'LowBalance' | 'TooManyLocks' | 'AccountNotSovereign' | 'FeesNotMet' | 'LockNotFound' | 'InUse' | 'InvalidAssetUnknownReserve' | 'InvalidAssetUnsupportedReserve' | 'TooManyReserves' | 'LocalExecutionIncomplete' | 'TooManyAuthorizedAliases' | 'ExpiresInPast' | 'AliasNotFound' | 'LocalExecutionIncompleteWithError';
  }

  /** @name PalletXcmErrorsExecutionError (928) */
  interface PalletXcmErrorsExecutionError extends Enum {
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
    readonly isTooManyAssets: boolean;
    readonly isUnhandledXcmVersion: boolean;
    readonly isWeightLimitReached: boolean;
    readonly isBarrier: boolean;
    readonly isWeightNotComputable: boolean;
    readonly isExceedsStackLimit: boolean;
    readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'LocationFull' | 'LocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'ExpectationFalse' | 'PalletNotFound' | 'NameMismatch' | 'VersionIncompatible' | 'HoldingWouldOverflow' | 'ExportError' | 'ReanchorFailed' | 'NoDeal' | 'FeesNotMet' | 'LockError' | 'NoPermission' | 'Unanchored' | 'NotDepositable' | 'TooManyAssets' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable' | 'ExceedsStackLimit';
  }

  /** @name PalletRcMigratorAccountsAccountState (941) */
  interface PalletRcMigratorAccountsAccountState extends Enum {
    readonly isMigrate: boolean;
    readonly isPreserve: boolean;
    readonly isPart: boolean;
    readonly asPart: {
      readonly free: u128;
      readonly reserved: u128;
      readonly consumers: u32;
    } & Struct;
    readonly type: 'Migrate' | 'Preserve' | 'Part';
  }

  /** @name PalletRcMigratorAccountsMigratedBalances (942) */
  interface PalletRcMigratorAccountsMigratedBalances extends Struct {
    readonly kept: u128;
    readonly migrated: u128;
  }

  /** @name PalletRcMigratorError (943) */
  interface PalletRcMigratorError extends Enum {
    readonly isUnreachable: boolean;
    readonly isOutOfWeight: boolean;
    readonly isXcmError: boolean;
    readonly isFailedToWithdrawAccount: boolean;
    readonly isPastBlockNumber: boolean;
    readonly isEraEndsTooSoon: boolean;
    readonly isBalanceOverflow: boolean;
    readonly isBalanceUnderflow: boolean;
    readonly isInvalidQueryResponse: boolean;
    readonly isQueryNotFound: boolean;
    readonly isXcmSendError: boolean;
    readonly isUnreachableStage: boolean;
    readonly isInvalidParameter: boolean;
    readonly isAhUmpQueuePriorityAlreadySet: boolean;
    readonly isAccountReferenced: boolean;
    readonly isBadXcmVersion: boolean;
    readonly isInvalidOrigin: boolean;
    readonly isInvalidStageTransition: boolean;
    readonly isUnsignedValidationFailed: boolean;
    readonly type: 'Unreachable' | 'OutOfWeight' | 'XcmError' | 'FailedToWithdrawAccount' | 'PastBlockNumber' | 'EraEndsTooSoon' | 'BalanceOverflow' | 'BalanceUnderflow' | 'InvalidQueryResponse' | 'QueryNotFound' | 'XcmSendError' | 'UnreachableStage' | 'InvalidParameter' | 'AhUmpQueuePriorityAlreadySet' | 'AccountReferenced' | 'BadXcmVersion' | 'InvalidOrigin' | 'InvalidStageTransition' | 'UnsignedValidationFailed';
  }

  /** @name PalletTransactionPaymentChargeTransactionPayment (953) */
  interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

  /** @name PolkadotRuntimeCommonClaimsPrevalidateAttests (954) */
  type PolkadotRuntimeCommonClaimsPrevalidateAttests = Null;

  /** @name PolkadotRuntimeRuntime (957) */
  type PolkadotRuntimeRuntime = Null;

  /** @name RelayCommonApisInflationInfo (958) */
  interface RelayCommonApisInflationInfo extends Struct {
    readonly inflation: Perquintill;
    readonly nextMint: ITuple<[u128, u128]>;
  }

  /** @name PolkadotPrimitivesV8GroupRotationInfo (981) */
  interface PolkadotPrimitivesV8GroupRotationInfo extends Struct {
    readonly sessionStartBlock: u32;
    readonly groupRotationFrequency: u32;
    readonly now: u32;
  }

  /** @name PolkadotPrimitivesVstagingCoreState (983) */
  interface PolkadotPrimitivesVstagingCoreState extends Enum {
    readonly isOccupied: boolean;
    readonly asOccupied: PolkadotPrimitivesVstagingOccupiedCore;
    readonly isScheduled: boolean;
    readonly asScheduled: PolkadotPrimitivesV8ScheduledCore;
    readonly isFree: boolean;
    readonly type: 'Occupied' | 'Scheduled' | 'Free';
  }

  /** @name PolkadotPrimitivesVstagingOccupiedCore (984) */
  interface PolkadotPrimitivesVstagingOccupiedCore extends Struct {
    readonly nextUpOnAvailable: Option<PolkadotPrimitivesV8ScheduledCore>;
    readonly occupiedSince: u32;
    readonly timeOutAt: u32;
    readonly nextUpOnTimeOut: Option<PolkadotPrimitivesV8ScheduledCore>;
    readonly availability: BitVec;
    readonly groupResponsible: u32;
    readonly candidateHash: H256;
    readonly candidateDescriptor: PolkadotPrimitivesVstagingCandidateDescriptorV2;
  }

  /** @name PolkadotPrimitivesV8ScheduledCore (986) */
  interface PolkadotPrimitivesV8ScheduledCore extends Struct {
    readonly paraId: u32;
    readonly collator: Option<PolkadotPrimitivesV8CollatorAppPublic>;
  }

  /** @name PolkadotPrimitivesV8CollatorAppPublic (988) */
  interface PolkadotPrimitivesV8CollatorAppPublic extends U8aFixed {}

  /** @name PolkadotPrimitivesV8OccupiedCoreAssumption (989) */
  interface PolkadotPrimitivesV8OccupiedCoreAssumption extends Enum {
    readonly isIncluded: boolean;
    readonly isTimedOut: boolean;
    readonly isFree: boolean;
    readonly type: 'Included' | 'TimedOut' | 'Free';
  }

  /** @name PolkadotPrimitivesV8PersistedValidationData (991) */
  interface PolkadotPrimitivesV8PersistedValidationData extends Struct {
    readonly parentHead: Bytes;
    readonly relayParentNumber: u32;
    readonly relayParentStorageRoot: H256;
    readonly maxPovSize: u32;
  }

  /** @name PolkadotPrimitivesVstagingCandidateEvent (996) */
  interface PolkadotPrimitivesVstagingCandidateEvent extends Enum {
    readonly isCandidateBacked: boolean;
    readonly asCandidateBacked: ITuple<[PolkadotPrimitivesVstagingCandidateReceiptV2, Bytes, u32, u32]>;
    readonly isCandidateIncluded: boolean;
    readonly asCandidateIncluded: ITuple<[PolkadotPrimitivesVstagingCandidateReceiptV2, Bytes, u32, u32]>;
    readonly isCandidateTimedOut: boolean;
    readonly asCandidateTimedOut: ITuple<[PolkadotPrimitivesVstagingCandidateReceiptV2, Bytes, u32]>;
    readonly type: 'CandidateBacked' | 'CandidateIncluded' | 'CandidateTimedOut';
  }

  /** @name PolkadotPrimitivesV8SlashingPendingSlashes (1008) */
  interface PolkadotPrimitivesV8SlashingPendingSlashes extends Struct {
    readonly keys_: BTreeMap<u32, PolkadotPrimitivesV8ValidatorAppPublic>;
    readonly kind: PolkadotPrimitivesV8SlashingSlashingOffenceKind;
  }

  /** @name PolkadotPrimitivesV8SlashingSlashingOffenceKind (1009) */
  interface PolkadotPrimitivesV8SlashingSlashingOffenceKind extends Enum {
    readonly isForInvalid: boolean;
    readonly isAgainstValid: boolean;
    readonly type: 'ForInvalid' | 'AgainstValid';
  }

  /** @name PolkadotPrimitivesV8SlashingDisputeProof (1012) */
  interface PolkadotPrimitivesV8SlashingDisputeProof extends Struct {
    readonly timeSlot: PolkadotPrimitivesV8SlashingDisputesTimeSlot;
    readonly kind: PolkadotPrimitivesV8SlashingSlashingOffenceKind;
    readonly validatorIndex: u32;
    readonly validatorId: PolkadotPrimitivesV8ValidatorAppPublic;
  }

  /** @name PolkadotPrimitivesVstagingAsyncBackingBackingState (1014) */
  interface PolkadotPrimitivesVstagingAsyncBackingBackingState extends Struct {
    readonly constraints: PolkadotPrimitivesV8AsyncBackingConstraints;
    readonly pendingAvailability: Vec<PolkadotPrimitivesVstagingAsyncBackingCandidatePendingAvailability>;
  }

  /** @name PolkadotPrimitivesV8AsyncBackingConstraints (1015) */
  interface PolkadotPrimitivesV8AsyncBackingConstraints extends Struct {
    readonly minRelayParentNumber: u32;
    readonly maxPovSize: u32;
    readonly maxCodeSize: u32;
    readonly umpRemaining: u32;
    readonly umpRemainingBytes: u32;
    readonly maxUmpNumPerCandidate: u32;
    readonly dmpRemainingMessages: Vec<u32>;
    readonly hrmpInbound: PolkadotPrimitivesV8AsyncBackingInboundHrmpLimitations;
    readonly hrmpChannelsOut: Vec<ITuple<[u32, PolkadotPrimitivesV8AsyncBackingOutboundHrmpChannelLimitations]>>;
    readonly maxHrmpNumPerCandidate: u32;
    readonly requiredParent: Bytes;
    readonly validationCodeHash: H256;
    readonly upgradeRestriction: Option<PolkadotPrimitivesV8UpgradeRestriction>;
    readonly futureValidationCode: Option<ITuple<[u32, H256]>>;
  }

  /** @name PolkadotPrimitivesV8AsyncBackingInboundHrmpLimitations (1016) */
  interface PolkadotPrimitivesV8AsyncBackingInboundHrmpLimitations extends Struct {
    readonly validWatermarks: Vec<u32>;
  }

  /** @name PolkadotPrimitivesV8AsyncBackingOutboundHrmpChannelLimitations (1019) */
  interface PolkadotPrimitivesV8AsyncBackingOutboundHrmpChannelLimitations extends Struct {
    readonly bytesRemaining: u32;
    readonly messagesRemaining: u32;
  }

  /** @name PolkadotPrimitivesVstagingAsyncBackingCandidatePendingAvailability (1024) */
  interface PolkadotPrimitivesVstagingAsyncBackingCandidatePendingAvailability extends Struct {
    readonly candidateHash: H256;
    readonly descriptor: PolkadotPrimitivesVstagingCandidateDescriptorV2;
    readonly commitments: PolkadotPrimitivesV8CandidateCommitments;
    readonly relayParentNumber: u32;
    readonly maxPovSize: u32;
  }

  /** @name PolkadotPrimitivesVstagingAsyncBackingConstraints (1030) */
  interface PolkadotPrimitivesVstagingAsyncBackingConstraints extends Struct {
    readonly minRelayParentNumber: u32;
    readonly maxPovSize: u32;
    readonly maxCodeSize: u32;
    readonly maxHeadDataSize: u32;
    readonly umpRemaining: u32;
    readonly umpRemainingBytes: u32;
    readonly maxUmpNumPerCandidate: u32;
    readonly dmpRemainingMessages: Vec<u32>;
    readonly hrmpInbound: PolkadotPrimitivesV8AsyncBackingInboundHrmpLimitations;
    readonly hrmpChannelsOut: Vec<ITuple<[u32, PolkadotPrimitivesV8AsyncBackingOutboundHrmpChannelLimitations]>>;
    readonly maxHrmpNumPerCandidate: u32;
    readonly requiredParent: Bytes;
    readonly validationCodeHash: H256;
    readonly upgradeRestriction: Option<PolkadotPrimitivesV8UpgradeRestriction>;
    readonly futureValidationCode: Option<ITuple<[u32, H256]>>;
  }

  /** @name XcmRuntimeApisFeesError (1061) */
  interface XcmRuntimeApisFeesError extends Enum {
    readonly isUnimplemented: boolean;
    readonly isVersionedConversionFailed: boolean;
    readonly isWeightNotComputable: boolean;
    readonly isUnhandledXcmVersion: boolean;
    readonly isAssetNotFound: boolean;
    readonly isUnroutable: boolean;
    readonly type: 'Unimplemented' | 'VersionedConversionFailed' | 'WeightNotComputable' | 'UnhandledXcmVersion' | 'AssetNotFound' | 'Unroutable';
  }

  /** @name XcmRuntimeApisDryRunCallDryRunEffects (1066) */
  interface XcmRuntimeApisDryRunCallDryRunEffects extends Struct {
    readonly executionResult: Result<FrameSupportDispatchPostDispatchInfo, SpRuntimeDispatchErrorWithPostInfo>;
    readonly emittedEvents: Vec<Event>;
    readonly localXcm: Option<XcmVersionedXcm>;
    readonly forwardedXcms: Vec<ITuple<[XcmVersionedLocation, Vec<XcmVersionedXcm>]>>;
  }

  /** @name XcmRuntimeApisDryRunError (1072) */
  interface XcmRuntimeApisDryRunError extends Enum {
    readonly isUnimplemented: boolean;
    readonly isVersionedConversionFailed: boolean;
    readonly type: 'Unimplemented' | 'VersionedConversionFailed';
  }

  /** @name XcmRuntimeApisDryRunXcmDryRunEffects (1074) */
  interface XcmRuntimeApisDryRunXcmDryRunEffects extends Struct {
    readonly executionResult: StagingXcmV5TraitsOutcome;
    readonly emittedEvents: Vec<Event>;
    readonly forwardedXcms: Vec<ITuple<[XcmVersionedLocation, Vec<XcmVersionedXcm>]>>;
  }

  /** @name XcmRuntimeApisConversionsError (1076) */
  interface XcmRuntimeApisConversionsError extends Enum {
    readonly isUnsupported: boolean;
    readonly isVersionedConversionFailed: boolean;
    readonly type: 'Unsupported' | 'VersionedConversionFailed';
  }

  /** @name PolkadotRuntimeRuntimeError (1080) */
  interface PolkadotRuntimeRuntimeError extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSystemError;
    readonly isScheduler: boolean;
    readonly asScheduler: PalletSchedulerError;
    readonly isBabe: boolean;
    readonly asBabe: PalletBabeError;
    readonly isIndices: boolean;
    readonly asIndices: PalletIndicesError;
    readonly isBalances: boolean;
    readonly asBalances: PalletBalancesError;
    readonly isStaking: boolean;
    readonly asStaking: PalletStakingPalletError;
    readonly isSession: boolean;
    readonly asSession: PalletSessionError;
    readonly isPreimage: boolean;
    readonly asPreimage: PalletPreimageError;
    readonly isGrandpa: boolean;
    readonly asGrandpa: PalletGrandpaError;
    readonly isTreasury: boolean;
    readonly asTreasury: PalletTreasuryError;
    readonly isConvictionVoting: boolean;
    readonly asConvictionVoting: PalletConvictionVotingError;
    readonly isReferenda: boolean;
    readonly asReferenda: PalletReferendaError;
    readonly isWhitelist: boolean;
    readonly asWhitelist: PalletWhitelistError;
    readonly isClaims: boolean;
    readonly asClaims: PolkadotRuntimeCommonClaimsPalletError;
    readonly isVesting: boolean;
    readonly asVesting: PalletVestingError;
    readonly isUtility: boolean;
    readonly asUtility: PalletUtilityError;
    readonly isProxy: boolean;
    readonly asProxy: PalletProxyError;
    readonly isMultisig: boolean;
    readonly asMultisig: PalletMultisigError;
    readonly isBounties: boolean;
    readonly asBounties: PalletBountiesError;
    readonly isElectionProviderMultiPhase: boolean;
    readonly asElectionProviderMultiPhase: PalletElectionProviderMultiPhaseError;
    readonly isVoterList: boolean;
    readonly asVoterList: PalletBagsListError;
    readonly isChildBounties: boolean;
    readonly asChildBounties: PalletChildBountiesError;
    readonly isNominationPools: boolean;
    readonly asNominationPools: PalletNominationPoolsError;
    readonly isFastUnstake: boolean;
    readonly asFastUnstake: PalletFastUnstakeError;
    readonly isDelegatedStaking: boolean;
    readonly asDelegatedStaking: PalletDelegatedStakingError;
    readonly isStakingAhClient: boolean;
    readonly asStakingAhClient: PalletStakingAsyncAhClientError;
    readonly isConfiguration: boolean;
    readonly asConfiguration: PolkadotRuntimeParachainsConfigurationPalletError;
    readonly isParaInclusion: boolean;
    readonly asParaInclusion: PolkadotRuntimeParachainsInclusionPalletError;
    readonly isParaInherent: boolean;
    readonly asParaInherent: PolkadotRuntimeParachainsParasInherentPalletError;
    readonly isParas: boolean;
    readonly asParas: PolkadotRuntimeParachainsParasPalletError;
    readonly isHrmp: boolean;
    readonly asHrmp: PolkadotRuntimeParachainsHrmpPalletError;
    readonly isParasDisputes: boolean;
    readonly asParasDisputes: PolkadotRuntimeParachainsDisputesPalletError;
    readonly isParasSlashing: boolean;
    readonly asParasSlashing: PolkadotRuntimeParachainsDisputesSlashingPalletError;
    readonly isOnDemand: boolean;
    readonly asOnDemand: PolkadotRuntimeParachainsOnDemandPalletError;
    readonly isCoretimeAssignmentProvider: boolean;
    readonly asCoretimeAssignmentProvider: PolkadotRuntimeParachainsAssignerCoretimePalletError;
    readonly isRegistrar: boolean;
    readonly asRegistrar: PolkadotRuntimeCommonParasRegistrarPalletError;
    readonly isSlots: boolean;
    readonly asSlots: PolkadotRuntimeCommonSlotsPalletError;
    readonly isAuctions: boolean;
    readonly asAuctions: PolkadotRuntimeCommonAuctionsPalletError;
    readonly isCrowdloan: boolean;
    readonly asCrowdloan: PolkadotRuntimeCommonCrowdloanPalletError;
    readonly isCoretime: boolean;
    readonly asCoretime: PolkadotRuntimeParachainsCoretimePalletError;
    readonly isStateTrieMigration: boolean;
    readonly asStateTrieMigration: PalletStateTrieMigrationError;
    readonly isXcmPallet: boolean;
    readonly asXcmPallet: PalletXcmError;
    readonly isMessageQueue: boolean;
    readonly asMessageQueue: PalletMessageQueueError;
    readonly isAssetRate: boolean;
    readonly asAssetRate: PalletAssetRateError;
    readonly isBeefy: boolean;
    readonly asBeefy: PalletBeefyError;
    readonly isRcMigrator: boolean;
    readonly asRcMigrator: PalletRcMigratorError;
    readonly type: 'System' | 'Scheduler' | 'Babe' | 'Indices' | 'Balances' | 'Staking' | 'Session' | 'Preimage' | 'Grandpa' | 'Treasury' | 'ConvictionVoting' | 'Referenda' | 'Whitelist' | 'Claims' | 'Vesting' | 'Utility' | 'Proxy' | 'Multisig' | 'Bounties' | 'ElectionProviderMultiPhase' | 'VoterList' | 'ChildBounties' | 'NominationPools' | 'FastUnstake' | 'DelegatedStaking' | 'StakingAhClient' | 'Configuration' | 'ParaInclusion' | 'ParaInherent' | 'Paras' | 'Hrmp' | 'ParasDisputes' | 'ParasSlashing' | 'OnDemand' | 'CoretimeAssignmentProvider' | 'Registrar' | 'Slots' | 'Auctions' | 'Crowdloan' | 'Coretime' | 'StateTrieMigration' | 'XcmPallet' | 'MessageQueue' | 'AssetRate' | 'Beefy' | 'RcMigrator';
  }

} // declare module

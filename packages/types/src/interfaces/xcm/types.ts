// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Compact, Enum, Struct, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types';
import type { AccountId, Weight } from '@polkadot/types/interfaces/runtime';
import type { ITuple } from '@polkadot/types/types';

/** @name AssetInstance */
export interface AssetInstance extends AssetInstanceV1 {}

/** @name AssetInstanceV0 */
export interface AssetInstanceV0 extends Enum {
  readonly isUndefined: boolean;
  readonly isIndex8: boolean;
  readonly asIndex8: u8;
  readonly isIndex16: boolean;
  readonly asIndex16: Compact<u16>;
  readonly isIndex32: boolean;
  readonly asIndex32: Compact<u32>;
  readonly isIndex64: boolean;
  readonly asIndex64: Compact<u64>;
  readonly isIndex128: boolean;
  readonly asIndex128: Compact<u128>;
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
}

/** @name AssetInstanceV1 */
export interface AssetInstanceV1 extends Enum {
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
}

/** @name BodyId */
export interface BodyId extends Enum {
  readonly isUnit: boolean;
  readonly isNamed: boolean;
  readonly asNamed: Bytes;
  readonly isIndex: boolean;
  readonly asIndex: Compact<u32>;
  readonly isExecutive: boolean;
  readonly isTechnical: boolean;
  readonly isLegislative: boolean;
  readonly isJudicial: boolean;
}

/** @name BodyPart */
export interface BodyPart extends Enum {
  readonly isVoice: boolean;
  readonly isMembers: boolean;
  readonly asMembers: Compact<u32>;
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
}

/** @name DoubleEncodedCall */
export interface DoubleEncodedCall extends Struct {
  readonly encoded: Bytes;
}

/** @name Fungibility */
export interface Fungibility extends Enum {
  readonly isFungible: boolean;
  readonly asFungible: u128;
  readonly isNonFungible: boolean;
  readonly asNonFungible: AssetInstance;
}

/** @name InboundStatus */
export interface InboundStatus extends Enum {
  readonly isOk: boolean;
  readonly isSuspended: boolean;
}

/** @name Junction */
export interface Junction extends Enum {
  readonly isParent: boolean;
  readonly isParachain: boolean;
  readonly asParachain: Compact<u32>;
  readonly isAccountId32: boolean;
  readonly asAccountId32: {
    readonly network: NetworkId;
    readonly id: AccountId;
  } & Struct;
  readonly isAccountIndex64: boolean;
  readonly asAccountIndex64: {
    readonly network: NetworkId;
    readonly index: Compact<u64>;
  } & Struct;
  readonly isAccountKey20: boolean;
  readonly asAccountKey20: {
    readonly network: NetworkId;
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
    readonly id: BodyId;
    readonly part: BodyPart;
  } & Struct;
}

/** @name MultiAsset */
export interface MultiAsset extends MultiAssetV1 {}

/** @name MultiAssetFilter */
export interface MultiAssetFilter extends MultiAssetFilterV1 {}

/** @name MultiAssetFilterV1 */
export interface MultiAssetFilterV1 extends Enum {
  readonly isDefinite: boolean;
  readonly asDefinite: MultiAssetsV1;
  readonly isWild: boolean;
  readonly asWild: WildMultiAssetV1;
}

/** @name MultiAssets */
export interface MultiAssets extends Vec<MultiAsset> {}

/** @name MultiAssetsV1 */
export interface MultiAssetsV1 extends Vec<MultiAssetV1> {}

/** @name MultiAssetV0 */
export interface MultiAssetV0 extends Enum {
  readonly isNone: boolean;
  readonly isAll: boolean;
  readonly isAllFungible: boolean;
  readonly isAllNonFungible: boolean;
  readonly isAllAbstractFungible: boolean;
  readonly asAllAbstractFungible: Bytes;
  readonly isAllAbstractNonFungible: boolean;
  readonly asAllAbstractNonFungible: Bytes;
  readonly isAllConcreteFungible: boolean;
  readonly asAllConcreteFungible: MultiLocation;
  readonly isAllConcreteNonFungible: boolean;
  readonly asAllConcreteNonFungible: MultiLocation;
  readonly isAbstractFungible: boolean;
  readonly asAbstractFungible: {
    readonly id: Bytes;
    readonly instance: Compact<u128>;
  } & Struct;
  readonly isAbstractNonFungible: boolean;
  readonly asAbstractNonFungible: {
    readonly class: Bytes;
    readonly instance: AssetInstance;
  } & Struct;
  readonly isConcreteFungible: boolean;
  readonly asConcreteFungible: {
    readonly id: MultiLocation;
    readonly amount: Compact<u128>;
  } & Struct;
  readonly isConcreteNonFungible: boolean;
  readonly asConcreteNonFungible: {
    readonly class: MultiLocation;
    readonly instance: AssetInstance;
  } & Struct;
}

/** @name MultiAssetV1 */
export interface MultiAssetV1 extends Struct {
  readonly id: XcmAssetId;
  readonly fungibility: Fungibility;
}

/** @name MultiLocation */
export interface MultiLocation extends Enum {
  readonly isHere: boolean;
  readonly isX1: boolean;
  readonly asX1: Junction;
  readonly isX2: boolean;
  readonly asX2: ITuple<[Junction, Junction]>;
  readonly isX3: boolean;
  readonly asX3: ITuple<[Junction, Junction, Junction]>;
  readonly isX4: boolean;
  readonly asX4: ITuple<[Junction, Junction, Junction, Junction]>;
  readonly isX5: boolean;
  readonly asX5: ITuple<[Junction, Junction, Junction, Junction, Junction]>;
  readonly isX6: boolean;
  readonly asX6: ITuple<[Junction, Junction, Junction, Junction, Junction, Junction]>;
  readonly isX7: boolean;
  readonly asX7: ITuple<[Junction, Junction, Junction, Junction, Junction, Junction, Junction]>;
  readonly isX8: boolean;
  readonly asX8: ITuple<[Junction, Junction, Junction, Junction, Junction, Junction, Junction, Junction]>;
}

/** @name MultiLocationV0 */
export interface MultiLocationV0 extends MultiLocation {}

/** @name MultiLocationV1 */
export interface MultiLocationV1 extends MultiLocation {}

/** @name NetworkId */
export interface NetworkId extends Enum {
  readonly isAny: boolean;
  readonly isNamed: boolean;
  readonly asNamed: Bytes;
  readonly isPolkadot: boolean;
  readonly isKusama: boolean;
}

/** @name OutboundStatus */
export interface OutboundStatus extends Enum {
  readonly isOk: boolean;
  readonly isSuspended: boolean;
}

/** @name Outcome */
export interface Outcome extends Enum {
  readonly isComplete: boolean;
  readonly asComplete: Weight;
  readonly isIncomplete: boolean;
  readonly asIncomplete: ITuple<[Weight, XcmError]>;
  readonly isError: boolean;
  readonly asError: XcmError;
}

/** @name QueueConfigData */
export interface QueueConfigData extends Struct {
  readonly suspendThreshold: u32;
  readonly dropThreshold: u32;
  readonly resumeThreshold: u32;
  readonly thresholdWeight: Weight;
  readonly weightRestrictDecay: Weight;
}

/** @name VersionedMultiAsset */
export interface VersionedMultiAsset extends Enum {
  readonly isV0: boolean;
  readonly asV0: MultiAssetV0;
  readonly isV1: boolean;
  readonly asV1: MultiAssetV1;
}

/** @name VersionedMultiAssets */
export interface VersionedMultiAssets extends Enum {
  readonly isV0: boolean;
  readonly asV0: Vec<MultiAssetV0>;
  readonly isV1: boolean;
  readonly asV1: MultiAssetsV1;
}

/** @name VersionedMultiLocation */
export interface VersionedMultiLocation extends Enum {
  readonly isV0: boolean;
  readonly asV0: MultiLocationV0;
  readonly isV1: boolean;
  readonly asV1: MultiLocationV1;
}

/** @name VersionedXcm */
export interface VersionedXcm extends Enum {
  readonly isV0: boolean;
  readonly asV0: XcmV0;
  readonly isV1: boolean;
  readonly asV1: XcmV1;
}

/** @name WildFungibility */
export interface WildFungibility extends Enum {
  readonly isFungible: boolean;
  readonly isNonFungible: boolean;
}

/** @name WildMultiAsset */
export interface WildMultiAsset extends WildMultiAssetV1 {}

/** @name WildMultiAssetV1 */
export interface WildMultiAssetV1 extends Enum {
  readonly isAll: boolean;
  readonly isAllOf: boolean;
  readonly asAllOf: {
    readonly id: XcmAssetId;
    readonly fungibility: WildFungibility;
  } & Struct;
}

/** @name Xcm */
export interface Xcm extends XcmV1 {}

/** @name XcmAssetId */
export interface XcmAssetId extends Enum {
  readonly isConcrete: boolean;
  readonly asConcrete: MultiLocation;
  readonly isAbstract: boolean;
  readonly asAbstract: Bytes;
}

/** @name XcmError */
export interface XcmError extends Enum {
  readonly isUndefined: boolean;
  readonly isOverflow: boolean;
  readonly isUnimplemented: boolean;
  readonly isUnhandledXcmVersion: boolean;
  readonly isUnhandledXcmMessage: boolean;
  readonly isUnhandledEffect: boolean;
  readonly isEscalationOfPrivilege: boolean;
  readonly isUntrustedReserveLocation: boolean;
  readonly isUntrustedTeleportLocation: boolean;
  readonly isDestinationBufferOverflow: boolean;
  readonly isSendFailed: boolean;
  readonly isCannotReachDestination: boolean;
  readonly asCannotReachDestination: ITuple<[MultiLocation, Xcm]>;
  readonly isMultiLocationFull: boolean;
  readonly isFailedToDecode: boolean;
  readonly isBadOrigin: boolean;
  readonly isExceedsMaxMessageSize: boolean;
  readonly isFailedToTransactAsset: boolean;
  readonly isWeightLimitReached: boolean;
  readonly asWeightLimitReached: Weight;
  readonly isWildcard: boolean;
  readonly isTooMuchWeightRequired: boolean;
  readonly isNotHoldingFees: boolean;
  readonly isWeightNotComputable: boolean;
  readonly isBarrier: boolean;
  readonly isNotWithdrawable: boolean;
  readonly isLocationCannotHold: boolean;
  readonly isTooExpensive: boolean;
}

/** @name XcmOrder */
export interface XcmOrder extends XcmOrderV1 {}

/** @name XcmOrderV0 */
export interface XcmOrderV0 extends Enum {
  readonly isNull: boolean;
  readonly isDepositAsset: boolean;
  readonly asDepositAsset: {
    readonly assets: Vec<MultiAssetV0>;
    readonly dest: MultiLocationV0;
  } & Struct;
  readonly isDepositReserveAsset: boolean;
  readonly asDepositReserveAsset: {
    readonly assets: Vec<MultiAssetV0>;
    readonly dest: MultiLocationV0;
    readonly effects: Vec<XcmOrderV0>;
  } & Struct;
  readonly isExchangeAsset: boolean;
  readonly asExchangeAsset: {
    readonly give: Vec<MultiAssetV0>;
    readonly receive: Vec<MultiAssetV0>;
  } & Struct;
  readonly isInitiateReserveWithdraw: boolean;
  readonly asInitiateReserveWithdraw: {
    readonly assets: Vec<MultiAssetV0>;
    readonly reserve: MultiLocationV0;
    readonly effects: Vec<XcmOrderV0>;
  } & Struct;
  readonly isInitiateTeleport: boolean;
  readonly asInitiateTeleport: {
    readonly assets: Vec<MultiAsset>;
    readonly dest: MultiLocationV0;
    readonly effects: Vec<XcmOrderV0>;
  } & Struct;
  readonly isQueryHolding: boolean;
  readonly asQueryHolding: {
    readonly queryId: Compact<u64>;
    readonly dest: MultiLocationV0;
    readonly assets: Vec<MultiAssetV0>;
  } & Struct;
  readonly isBuyExecution: boolean;
  readonly asBuyExecution: {
    readonly fees: MultiAsset;
    readonly weight: u64;
    readonly debt: u64;
    readonly haltOnError: bool;
    readonly xcm: Vec<XcmV0>;
  } & Struct;
}

/** @name XcmOrderV1 */
export interface XcmOrderV1 extends Enum {
  readonly isNoop: boolean;
  readonly isDepositAsset: boolean;
  readonly asDepositAsset: {
    readonly assets: MultiAssetFilterV1;
    readonly maxAssets: u32;
    readonly beneficiary: MultiLocationV1;
  } & Struct;
  readonly isDepositReserveAsset: boolean;
  readonly asDepositReserveAsset: {
    readonly assets: MultiAssetFilterV1;
    readonly maxAssets: u32;
    readonly dest: MultiLocationV1;
    readonly effects: Vec<XcmOrderV1>;
  } & Struct;
  readonly isExchangeAsset: boolean;
  readonly asExchangeAsset: {
    readonly give: MultiAssetFilterV1;
    readonly receive: MultiAssetsV1;
  } & Struct;
  readonly isInitiateReserveWithdraw: boolean;
  readonly asInitiateReserveWithdraw: {
    readonly assets: MultiAssetFilterV1;
    readonly reserve: MultiLocationV1;
    readonly effects: Vec<XcmOrderV1>;
  } & Struct;
  readonly isInitiateTeleport: boolean;
  readonly asInitiateTeleport: {
    readonly assets: MultiAssetFilterV1;
    readonly dest: MultiLocationV1;
    readonly effects: Vec<XcmOrderV1>;
  } & Struct;
  readonly isQueryHolding: boolean;
  readonly asQueryHolding: {
    readonly queryId: Compact<u64>;
    readonly dest: MultiLocationV1;
    readonly assets: MultiAssetFilterV1;
  } & Struct;
  readonly isBuyExecution: boolean;
  readonly asBuyExecution: {
    readonly fees: MultiAsset;
    readonly weight: u64;
    readonly debt: u64;
    readonly haltOnError: bool;
    readonly orders: Vec<XcmOrderV1>;
    readonly instructions: Vec<XcmV1>;
  } & Struct;
}

/** @name XcmOrigin */
export interface XcmOrigin extends Enum {
  readonly isXcm: boolean;
  readonly asXcm: MultiLocation;
}

/** @name XcmOriginKind */
export interface XcmOriginKind extends Enum {
  readonly isNative: boolean;
  readonly isSovereignAccount: boolean;
  readonly isSuperuser: boolean;
  readonly isXcm: boolean;
}

/** @name XcmpMessageFormat */
export interface XcmpMessageFormat extends Enum {
  readonly isConcatenatedVersionedXcm: boolean;
  readonly isConcatenatedEncodedBlob: boolean;
  readonly isSignals: boolean;
}

/** @name XcmResponse */
export interface XcmResponse extends Enum {
  readonly isAssets: boolean;
  readonly asAssets: Vec<MultiAsset>;
}

/** @name XcmV0 */
export interface XcmV0 extends Enum {
  readonly isWithdrawAsset: boolean;
  readonly asWithdrawAsset: {
    readonly assets: Vec<MultiAssetV0>;
    readonly effects: Vec<XcmOrderV0>;
  } & Struct;
  readonly isReserveAssetDeposit: boolean;
  readonly asReserveAssetDeposit: {
    readonly assets: Vec<MultiAssetV0>;
    readonly effects: Vec<XcmOrderV0>;
  } & Struct;
  readonly isReceiveTeleportedAsset: boolean;
  readonly asReceiveTeleportedAsset: {
    readonly assets: Vec<MultiAssetV0>;
    readonly effects: Vec<XcmOrderV0>;
  } & Struct;
  readonly isQueryResponse: boolean;
  readonly asQueryResponse: {
    readonly queryId: Compact<u64>;
    readonly response: XcmResponse;
  } & Struct;
  readonly isTransferAsset: boolean;
  readonly asTransferAsset: {
    readonly assets: Vec<MultiAssetV0>;
    readonly dest: MultiLocationV0;
  } & Struct;
  readonly isTransferReserveAsset: boolean;
  readonly asTransferReserveAsset: {
    readonly assets: Vec<MultiAssetV0>;
    readonly dest: MultiLocationV0;
    readonly effects: Vec<XcmOrderV0>;
  } & Struct;
  readonly isTransact: boolean;
  readonly asTransact: {
    readonly originType: XcmOriginKind;
    readonly requireWeightAtMost: u64;
    readonly call: DoubleEncodedCall;
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
  readonly isRelayedFrom: boolean;
  readonly asRelayedFrom: {
    readonly who: MultiLocationV0;
    readonly message: XcmV0;
  } & Struct;
}

/** @name XcmV1 */
export interface XcmV1 extends Enum {
  readonly isWithdrawAsset: boolean;
  readonly asWithdrawAsset: {
    readonly Vassets: MultiAssetsV1;
    readonly effects: Vec<XcmOrderV1>;
  } & Struct;
  readonly isReserveAssetDeposit: boolean;
  readonly asReserveAssetDeposit: {
    readonly Vassets: MultiAssetsV1;
    readonly effects: Vec<XcmOrderV1>;
  } & Struct;
  readonly isReceiveTeleportedAsset: boolean;
  readonly asReceiveTeleportedAsset: {
    readonly Vassets: MultiAssetsV1;
    readonly effects: Vec<XcmOrderV1>;
  } & Struct;
  readonly isQueryResponse: boolean;
  readonly asQueryResponse: {
    readonly queryId: Compact<u64>;
    readonly response: XcmResponse;
  } & Struct;
  readonly isTransferAsset: boolean;
  readonly asTransferAsset: {
    readonly Vassets: MultiAssetsV1;
    readonly dest: MultiLocationV1;
  } & Struct;
  readonly isTransferReserveAsset: boolean;
  readonly asTransferReserveAsset: {
    readonly Vassets: MultiAssetsV1;
    readonly dest: MultiLocationV1;
    readonly effects: Vec<XcmOrderV1>;
  } & Struct;
  readonly isTransact: boolean;
  readonly asTransact: {
    readonly originType: XcmOriginKind;
    readonly requireWeightAtMost: u64;
    readonly call: DoubleEncodedCall;
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
  readonly isRelayedFrom: boolean;
  readonly asRelayedFrom: {
    readonly who: MultiLocationV1;
    readonly message: XcmV1;
  } & Struct;
}

export type PHANTOM_XCM = 'xcm';

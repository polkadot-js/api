// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Compact, Enum, Null, Option, Result, Struct, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId, BlockNumber, Weight } from '@polkadot/types/interfaces/runtime';

/** @name AssetInstance */
export interface AssetInstance extends AssetInstanceV2 {}

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
  readonly type: 'Undefined' | 'Index8' | 'Index16' | 'Index32' | 'Index64' | 'Index128' | 'Array4' | 'Array8' | 'Array16' | 'Array32' | 'Blob';
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
  readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32' | 'Blob';
}

/** @name AssetInstanceV2 */
export interface AssetInstanceV2 extends AssetInstanceV1 {}

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
  readonly type: 'Unit' | 'Named' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial';
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
  readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
}

/** @name DoubleEncodedCall */
export interface DoubleEncodedCall extends Struct {
  readonly encoded: Bytes;
}

/** @name Fungibility */
export interface Fungibility extends FungibilityV2 {}

/** @name FungibilityV0 */
export interface FungibilityV0 extends FungibilityV1 {}

/** @name FungibilityV1 */
export interface FungibilityV1 extends Enum {
  readonly isFungible: boolean;
  readonly asFungible: Compact<u128>;
  readonly isNonFungible: boolean;
  readonly asNonFungible: AssetInstanceV1;
  readonly type: 'Fungible' | 'NonFungible';
}

/** @name FungibilityV2 */
export interface FungibilityV2 extends FungibilityV1 {}

/** @name InboundStatus */
export interface InboundStatus extends Enum {
  readonly isOk: boolean;
  readonly isSuspended: boolean;
  readonly type: 'Ok' | 'Suspended';
}

/** @name InstructionV2 */
export interface InstructionV2 extends Enum {
  readonly isWithdrawAsset: boolean;
  readonly asWithdrawAsset: MultiAssetsV2;
  readonly isReserveAssetDeposited: boolean;
  readonly asReserveAssetDeposited: MultiAssetsV2;
  readonly isReceiveTeleportedAsset: boolean;
  readonly asReceiveTeleportedAsset: MultiAssetsV2;
  readonly isQueryResponse: boolean;
  readonly asQueryResponse: {
    readonly queryId: Compact<u64>;
    readonly response: ResponseV2;
    readonly maxWeight: Compact<u64>;
  } & Struct;
  readonly isTransferAsset: boolean;
  readonly asTransferAsset: {
    readonly assets: MultiAssetsV2;
    readonly beneficiary: MultiLocationV2;
  } & Struct;
  readonly isTransferReserveAsset: boolean;
  readonly asTransferReserveAsset: {
    readonly assets: MultiAssetsV2;
    readonly dest: MultiLocationV2;
    readonly xcm: XcmV2;
  } & Struct;
  readonly isTransact: boolean;
  readonly asTransact: {
    readonly originType: OriginKindV2;
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
  readonly isClearOrigin: boolean;
  readonly isDescendOrigin: boolean;
  readonly asDescendOrigin: InteriorMultiLocation;
  readonly isReportError: boolean;
  readonly asReportError: {
    readonly queryId: Compact<u64>;
    readonly dest: MultiLocationV2;
    readonly maxResponseWeight: Compact<u64>;
  } & Struct;
  readonly isDepositAsset: boolean;
  readonly asDepositAsset: {
    readonly assets: MultiAssetFilterV2;
    readonly maxAssets: u32;
    readonly beneficiary: MultiLocationV2;
  } & Struct;
  readonly isDepositReserveAsset: boolean;
  readonly asDepositReserveAsset: {
    readonly assets: MultiAssetFilterV2;
    readonly maxAssets: u32;
    readonly dest: MultiLocationV2;
    readonly xcm: XcmV2;
  } & Struct;
  readonly isExchangeAsset: boolean;
  readonly asExchangeAsset: {
    readonly give: MultiAssetFilterV2;
    readonly receive: MultiAssetsV2;
  } & Struct;
  readonly isInitiateReserveWithdraw: boolean;
  readonly asInitiateReserveWithdraw: {
    readonly assets: MultiAssetFilterV2;
    readonly reserve: MultiLocationV2;
    readonly xcm: XcmV2;
  } & Struct;
  readonly isInitiateTeleport: boolean;
  readonly asInitiateTeleport: {
    readonly assets: MultiAssetFilterV2;
    readonly dest: MultiLocationV2;
    readonly xcm: XcmV2;
  } & Struct;
  readonly isQueryHolding: boolean;
  readonly asQueryHolding: {
    readonly query_id: Compact<u64>;
    readonly dest: MultiLocationV2;
    readonly assets: MultiAssetFilterV2;
    readonly maxResponse_Weight: Compact<u64>;
  } & Struct;
  readonly isBuyExecution: boolean;
  readonly asBuyExecution: {
    readonly fees: MultiAssetV2;
    readonly weightLimit: WeightLimitV2;
  } & Struct;
  readonly isRefundSurplus: boolean;
  readonly isSetErrorHandler: boolean;
  readonly asSetErrorHandler: XcmV2;
  readonly isSetAppendix: boolean;
  readonly asSetAppendix: XcmV2;
  readonly isClearError: boolean;
  readonly isClaimAsset: boolean;
  readonly asClaimAsset: {
    readonly assets: MultiAssetsV2;
    readonly ticket: MultiLocationV2;
  } & Struct;
  readonly isTrap: boolean;
  readonly asTrap: u64;
  readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'QueryHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap';
}

/** @name InteriorMultiLocation */
export interface InteriorMultiLocation extends Junctions {}

/** @name Junction */
export interface Junction extends JunctionV2 {}

/** @name Junctions */
export interface Junctions extends JunctionsV2 {}

/** @name JunctionsV1 */
export interface JunctionsV1 extends Enum {
  readonly isHere: boolean;
  readonly isX1: boolean;
  readonly asX1: JunctionV1;
  readonly isX2: boolean;
  readonly asX2: ITuple<[JunctionV1, JunctionV1]>;
  readonly isX3: boolean;
  readonly asX3: ITuple<[JunctionV1, JunctionV1, JunctionV1]>;
  readonly isX4: boolean;
  readonly asX4: ITuple<[JunctionV1, JunctionV1, JunctionV1, JunctionV1]>;
  readonly isX5: boolean;
  readonly asX5: ITuple<[JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]>;
  readonly isX6: boolean;
  readonly asX6: ITuple<[JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]>;
  readonly isX7: boolean;
  readonly asX7: ITuple<[JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]>;
  readonly isX8: boolean;
  readonly asX8: ITuple<[JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1]>;
  readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
}

/** @name JunctionsV2 */
export interface JunctionsV2 extends JunctionsV1 {}

/** @name JunctionV0 */
export interface JunctionV0 extends Enum {
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
  readonly type: 'Parent' | 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality';
}

/** @name JunctionV1 */
export interface JunctionV1 extends Enum {
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
  readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality';
}

/** @name JunctionV2 */
export interface JunctionV2 extends JunctionV1 {}

/** @name MultiAsset */
export interface MultiAsset extends MultiAssetV2 {}

/** @name MultiAssetFilter */
export interface MultiAssetFilter extends MultiAssetFilterV2 {}

/** @name MultiAssetFilterV1 */
export interface MultiAssetFilterV1 extends Enum {
  readonly isDefinite: boolean;
  readonly asDefinite: MultiAssetsV1;
  readonly isWild: boolean;
  readonly asWild: WildMultiAssetV1;
  readonly type: 'Definite' | 'Wild';
}

/** @name MultiAssetFilterV2 */
export interface MultiAssetFilterV2 extends MultiAssetFilterV1 {}

/** @name MultiAssets */
export interface MultiAssets extends Vec<MultiAsset> {}

/** @name MultiAssetsV1 */
export interface MultiAssetsV1 extends Vec<MultiAssetV1> {}

/** @name MultiAssetsV2 */
export interface MultiAssetsV2 extends MultiAssetsV1 {}

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
  readonly asAllConcreteFungible: MultiLocationV0;
  readonly isAllConcreteNonFungible: boolean;
  readonly asAllConcreteNonFungible: MultiLocationV0;
  readonly isAbstractFungible: boolean;
  readonly asAbstractFungible: {
    readonly id: Bytes;
    readonly instance: Compact<u128>;
  } & Struct;
  readonly isAbstractNonFungible: boolean;
  readonly asAbstractNonFungible: {
    readonly class: Bytes;
    readonly instance: AssetInstanceV0;
  } & Struct;
  readonly isConcreteFungible: boolean;
  readonly asConcreteFungible: {
    readonly id: MultiLocationV0;
    readonly amount: Compact<u128>;
  } & Struct;
  readonly isConcreteNonFungible: boolean;
  readonly asConcreteNonFungible: {
    readonly class: MultiLocationV0;
    readonly instance: AssetInstanceV0;
  } & Struct;
  readonly type: 'None' | 'All' | 'AllFungible' | 'AllNonFungible' | 'AllAbstractFungible' | 'AllAbstractNonFungible' | 'AllConcreteFungible' | 'AllConcreteNonFungible' | 'AbstractFungible' | 'AbstractNonFungible' | 'ConcreteFungible' | 'ConcreteNonFungible';
}

/** @name MultiAssetV1 */
export interface MultiAssetV1 extends Struct {
  readonly id: XcmAssetId;
  readonly fungibility: FungibilityV1;
}

/** @name MultiAssetV2 */
export interface MultiAssetV2 extends MultiAssetV1 {}

/** @name MultiLocation */
export interface MultiLocation extends MultiLocationV2 {}

/** @name MultiLocationV0 */
export interface MultiLocationV0 extends Enum {
  readonly isHere: boolean;
  readonly isX1: boolean;
  readonly asX1: JunctionV0;
  readonly isX2: boolean;
  readonly asX2: ITuple<[JunctionV0, JunctionV0]>;
  readonly isX3: boolean;
  readonly asX3: ITuple<[JunctionV0, JunctionV0, JunctionV0]>;
  readonly isX4: boolean;
  readonly asX4: ITuple<[JunctionV0, JunctionV0, JunctionV0, JunctionV0]>;
  readonly isX5: boolean;
  readonly asX5: ITuple<[JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]>;
  readonly isX6: boolean;
  readonly asX6: ITuple<[JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]>;
  readonly isX7: boolean;
  readonly asX7: ITuple<[JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]>;
  readonly isX8: boolean;
  readonly asX8: ITuple<[JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0]>;
  readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
}

/** @name MultiLocationV1 */
export interface MultiLocationV1 extends Struct {
  readonly parents: u8;
  readonly interior: JunctionsV1;
}

/** @name MultiLocationV2 */
export interface MultiLocationV2 extends MultiLocationV1 {}

/** @name NetworkId */
export interface NetworkId extends Enum {
  readonly isAny: boolean;
  readonly isNamed: boolean;
  readonly asNamed: Bytes;
  readonly isPolkadot: boolean;
  readonly isKusama: boolean;
  readonly type: 'Any' | 'Named' | 'Polkadot' | 'Kusama';
}

/** @name OriginKindV0 */
export interface OriginKindV0 extends Enum {
  readonly isNative: boolean;
  readonly isSovereignAccount: boolean;
  readonly isSuperuser: boolean;
  readonly isXcm: boolean;
  readonly type: 'Native' | 'SovereignAccount' | 'Superuser' | 'Xcm';
}

/** @name OriginKindV1 */
export interface OriginKindV1 extends OriginKindV0 {}

/** @name OriginKindV2 */
export interface OriginKindV2 extends OriginKindV1 {}

/** @name OutboundStatus */
export interface OutboundStatus extends Enum {
  readonly isOk: boolean;
  readonly isSuspended: boolean;
  readonly type: 'Ok' | 'Suspended';
}

/** @name Outcome */
export interface Outcome extends Enum {
  readonly isComplete: boolean;
  readonly asComplete: Weight;
  readonly isIncomplete: boolean;
  readonly asIncomplete: ITuple<[Weight, XcmErrorV0]>;
  readonly isError: boolean;
  readonly asError: XcmErrorV0;
  readonly type: 'Complete' | 'Incomplete' | 'Error';
}

/** @name QueryId */
export interface QueryId extends u64 {}

/** @name QueryStatus */
export interface QueryStatus extends Enum {
  readonly isPending: boolean;
  readonly asPending: {
    readonly responder: VersionedMultiLocation;
    readonly maybeNotify: Option<ITuple<[u8, u8]>>;
    readonly timeout: BlockNumber;
  } & Struct;
  readonly isReady: boolean;
  readonly asReady: {
    readonly response: VersionedResponse;
    readonly at: BlockNumber;
  } & Struct;
  readonly type: 'Pending' | 'Ready';
}

/** @name QueueConfigData */
export interface QueueConfigData extends Struct {
  readonly suspendThreshold: u32;
  readonly dropThreshold: u32;
  readonly resumeThreshold: u32;
  readonly thresholdWeight: Weight;
  readonly weightRestrictDecay: Weight;
}

/** @name Response */
export interface Response extends ResponseV2 {}

/** @name ResponseV0 */
export interface ResponseV0 extends Enum {
  readonly isAssets: boolean;
  readonly asAssets: Vec<MultiAssetV0>;
  readonly type: 'Assets';
}

/** @name ResponseV1 */
export interface ResponseV1 extends Enum {
  readonly isAssets: boolean;
  readonly asAssets: MultiAssetsV1;
  readonly type: 'Assets';
}

/** @name ResponseV2 */
export interface ResponseV2 extends Enum {
  readonly isNull: boolean;
  readonly isAssets: boolean;
  readonly asAssets: MultiAssetsV2;
  readonly isExecutionResult: boolean;
  readonly asExecutionResult: ResponseV2Result;
  readonly type: 'Null' | 'Assets' | 'ExecutionResult';
}

/** @name ResponseV2Error */
export interface ResponseV2Error extends ITuple<[u32, XcmErrorV2]> {}

/** @name ResponseV2Result */
export interface ResponseV2Result extends Result<Null, ResponseV2Error> {
  readonly isErr: boolean;
  readonly asErr: ResponseV2Error;
  readonly isOk: boolean;
}

/** @name VersionedMultiAsset */
export interface VersionedMultiAsset extends Enum {
  readonly isV0: boolean;
  readonly asV0: MultiAssetV0;
  readonly isV1: boolean;
  readonly asV1: MultiAssetV1;
  readonly isV2: boolean;
  readonly asV2: MultiAssetV2;
  readonly type: 'V0' | 'V1' | 'V2';
}

/** @name VersionedMultiAssets */
export interface VersionedMultiAssets extends Enum {
  readonly isV0: boolean;
  readonly asV0: Vec<MultiAssetV0>;
  readonly isV1: boolean;
  readonly asV1: MultiAssetsV1;
  readonly isV2: boolean;
  readonly asV2: MultiAssetsV2;
  readonly type: 'V0' | 'V1' | 'V2';
}

/** @name VersionedMultiLocation */
export interface VersionedMultiLocation extends Enum {
  readonly isV0: boolean;
  readonly asV0: MultiLocationV0;
  readonly isV1: boolean;
  readonly asV1: MultiLocationV1;
  readonly isV2: boolean;
  readonly asV2: MultiLocationV2;
  readonly type: 'V0' | 'V1' | 'V2';
}

/** @name VersionedResponse */
export interface VersionedResponse extends Struct {
  readonly V0: ResponseV0;
  readonly V1: ResponseV1;
  readonly V2: ResponseV2;
}

/** @name VersionedXcm */
export interface VersionedXcm extends Enum {
  readonly isV0: boolean;
  readonly asV0: XcmV0;
  readonly isV1: boolean;
  readonly asV1: XcmV1;
  readonly isV2: boolean;
  readonly asV2: XcmV2;
  readonly type: 'V0' | 'V1' | 'V2';
}

/** @name VersionMigrationStage */
export interface VersionMigrationStage extends Enum {
  readonly isMigrateSupportedVersion: boolean;
  readonly isMigrateVersionNotifiers: boolean;
  readonly isNotifyCurrentTargets: boolean;
  readonly asNotifyCurrentTargets: Option<Bytes>;
  readonly isMigrateAndNotifyOldTargets: boolean;
  readonly type: 'MigrateSupportedVersion' | 'MigrateVersionNotifiers' | 'NotifyCurrentTargets' | 'MigrateAndNotifyOldTargets';
}

/** @name WeightLimitV2 */
export interface WeightLimitV2 extends Enum {
  readonly isUnlimited: boolean;
  readonly isLimited: boolean;
  readonly asLimited: Compact<u64>;
  readonly type: 'Unlimited' | 'Limited';
}

/** @name WildFungibility */
export interface WildFungibility extends WildFungibilityV2 {}

/** @name WildFungibilityV0 */
export interface WildFungibilityV0 extends WildFungibilityV1 {}

/** @name WildFungibilityV1 */
export interface WildFungibilityV1 extends Enum {
  readonly isFungible: boolean;
  readonly isNonFungible: boolean;
  readonly type: 'Fungible' | 'NonFungible';
}

/** @name WildFungibilityV2 */
export interface WildFungibilityV2 extends WildFungibilityV1 {}

/** @name WildMultiAsset */
export interface WildMultiAsset extends WildMultiAssetV2 {}

/** @name WildMultiAssetV1 */
export interface WildMultiAssetV1 extends Enum {
  readonly isAll: boolean;
  readonly isAllOf: boolean;
  readonly asAllOf: {
    readonly id: XcmAssetId;
    readonly fungibility: WildFungibilityV1;
  } & Struct;
  readonly type: 'All' | 'AllOf';
}

/** @name WildMultiAssetV2 */
export interface WildMultiAssetV2 extends WildMultiAssetV1 {}

/** @name Xcm */
export interface Xcm extends XcmV2 {}

/** @name XcmAssetId */
export interface XcmAssetId extends Enum {
  readonly isConcrete: boolean;
  readonly asConcrete: MultiLocation;
  readonly isAbstract: boolean;
  readonly asAbstract: Bytes;
  readonly type: 'Concrete' | 'Abstract';
}

/** @name XcmError */
export interface XcmError extends XcmErrorV2 {}

/** @name XcmErrorV0 */
export interface XcmErrorV0 extends Enum {
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
  readonly isAssetNotFound: boolean;
  readonly isRecursionLimitReached: boolean;
  readonly type: 'Undefined' | 'Overflow' | 'Unimplemented' | 'UnhandledXcmVersion' | 'UnhandledXcmMessage' | 'UnhandledEffect' | 'EscalationOfPrivilege' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'DestinationBufferOverflow' | 'SendFailed' | 'CannotReachDestination' | 'MultiLocationFull' | 'FailedToDecode' | 'BadOrigin' | 'ExceedsMaxMessageSize' | 'FailedToTransactAsset' | 'WeightLimitReached' | 'Wildcard' | 'TooMuchWeightRequired' | 'NotHoldingFees' | 'WeightNotComputable' | 'Barrier' | 'NotWithdrawable' | 'LocationCannotHold' | 'TooExpensive' | 'AssetNotFound' | 'RecursionLimitReached';
}

/** @name XcmErrorV1 */
export interface XcmErrorV1 extends Enum {
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
  readonly asCannotReachDestination: ITuple<[MultiLocationV1, XcmV1]>;
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
  readonly isAssetNotFound: boolean;
  readonly isDestinationUnsupported: boolean;
  readonly isRecursionLimitReached: boolean;
  readonly type: 'Undefined' | 'Overflow' | 'Unimplemented' | 'UnhandledXcmVersion' | 'UnhandledXcmMessage' | 'UnhandledEffect' | 'EscalationOfPrivilege' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'DestinationBufferOverflow' | 'SendFailed' | 'CannotReachDestination' | 'MultiLocationFull' | 'FailedToDecode' | 'BadOrigin' | 'ExceedsMaxMessageSize' | 'FailedToTransactAsset' | 'WeightLimitReached' | 'Wildcard' | 'TooMuchWeightRequired' | 'NotHoldingFees' | 'WeightNotComputable' | 'Barrier' | 'NotWithdrawable' | 'LocationCannotHold' | 'TooExpensive' | 'AssetNotFound' | 'DestinationUnsupported' | 'RecursionLimitReached';
}

/** @name XcmErrorV2 */
export interface XcmErrorV2 extends Enum {
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
  readonly isMultiLocationFull: boolean;
  readonly isMultiLocationNotInvertible: boolean;
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
  readonly isAssetNotFound: boolean;
  readonly isDestinationUnsupported: boolean;
  readonly isRecursionLimitReached: boolean;
  readonly isTransport: boolean;
  readonly isUnroutable: boolean;
  readonly isUnknownWeightRequired: boolean;
  readonly isTrap: boolean;
  readonly asTrap: u64;
  readonly isUnknownClaim: boolean;
  readonly isInvalidLocation: boolean;
  readonly type: 'Undefined' | 'Overflow' | 'Unimplemented' | 'UnhandledXcmVersion' | 'UnhandledXcmMessage' | 'UnhandledEffect' | 'EscalationOfPrivilege' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'DestinationBufferOverflow' | 'MultiLocationFull' | 'MultiLocationNotInvertible' | 'FailedToDecode' | 'BadOrigin' | 'ExceedsMaxMessageSize' | 'FailedToTransactAsset' | 'WeightLimitReached' | 'Wildcard' | 'TooMuchWeightRequired' | 'NotHoldingFees' | 'WeightNotComputable' | 'Barrier' | 'NotWithdrawable' | 'LocationCannotHold' | 'TooExpensive' | 'AssetNotFound' | 'DestinationUnsupported' | 'RecursionLimitReached' | 'Transport' | 'Unroutable' | 'UnknownWeightRequired' | 'Trap' | 'UnknownClaim' | 'InvalidLocation';
}

/** @name XcmOrder */
export interface XcmOrder extends XcmOrderV2 {}

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
    readonly assets: Vec<MultiAssetV0>;
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
    readonly fees: MultiAssetV0;
    readonly weight: u64;
    readonly debt: u64;
    readonly haltOnError: bool;
    readonly xcm: Vec<XcmV0>;
  } & Struct;
  readonly type: 'Null' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'QueryHolding' | 'BuyExecution';
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
    readonly fees: MultiAssetV1;
    readonly weight: u64;
    readonly debt: u64;
    readonly haltOnError: bool;
    readonly instructions: Vec<XcmV1>;
  } & Struct;
  readonly type: 'Noop' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'QueryHolding' | 'BuyExecution';
}

/** @name XcmOrderV2 */
export interface XcmOrderV2 extends XcmOrderV1 {}

/** @name XcmOrigin */
export interface XcmOrigin extends Enum {
  readonly isXcm: boolean;
  readonly asXcm: MultiLocation;
  readonly type: 'Xcm';
}

/** @name XcmOriginKind */
export interface XcmOriginKind extends Enum {
  readonly isNative: boolean;
  readonly isSovereignAccount: boolean;
  readonly isSuperuser: boolean;
  readonly isXcm: boolean;
  readonly type: 'Native' | 'SovereignAccount' | 'Superuser' | 'Xcm';
}

/** @name XcmPaymentApiError */
export interface XcmPaymentApiError extends Enum {
  readonly isUnimplemented: boolean;
  readonly isVersionedConversionFailed: boolean;
  readonly isWeightNotComputable: boolean;
  readonly isUnhandledXcmVersion: boolean;
  readonly isAssetNotFound: boolean;
  readonly type: 'Unimplemented' | 'VersionedConversionFailed' | 'WeightNotComputable' | 'UnhandledXcmVersion' | 'AssetNotFound';
}

/** @name XcmpMessageFormat */
export interface XcmpMessageFormat extends Enum {
  readonly isConcatenatedVersionedXcm: boolean;
  readonly isConcatenatedEncodedBlob: boolean;
  readonly isSignals: boolean;
  readonly type: 'ConcatenatedVersionedXcm' | 'ConcatenatedEncodedBlob' | 'Signals';
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
    readonly response: ResponseV0;
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
  readonly type: 'WithdrawAsset' | 'ReserveAssetDeposit' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'RelayedFrom';
}

/** @name XcmV1 */
export interface XcmV1 extends Enum {
  readonly isWithdrawAsset: boolean;
  readonly asWithdrawAsset: {
    readonly assets: MultiAssetsV1;
    readonly effects: Vec<XcmOrderV1>;
  } & Struct;
  readonly isReserveAssetDeposit: boolean;
  readonly asReserveAssetDeposit: {
    readonly assets: MultiAssetsV1;
    readonly effects: Vec<XcmOrderV1>;
  } & Struct;
  readonly isReceiveTeleportedAsset: boolean;
  readonly asReceiveTeleportedAsset: {
    readonly assets: MultiAssetsV1;
    readonly effects: Vec<XcmOrderV1>;
  } & Struct;
  readonly isQueryResponse: boolean;
  readonly asQueryResponse: {
    readonly queryId: Compact<u64>;
    readonly response: ResponseV1;
  } & Struct;
  readonly isTransferAsset: boolean;
  readonly asTransferAsset: {
    readonly assets: MultiAssetsV1;
    readonly dest: MultiLocationV1;
  } & Struct;
  readonly isTransferReserveAsset: boolean;
  readonly asTransferReserveAsset: {
    readonly assets: MultiAssetsV1;
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
  readonly type: 'WithdrawAsset' | 'ReserveAssetDeposit' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'RelayedFrom';
}

/** @name XcmV2 */
export interface XcmV2 extends Vec<InstructionV2> {}

/** @name XcmVersion */
export interface XcmVersion extends u32 {}

export type PHANTOM_XCM = 'xcm';

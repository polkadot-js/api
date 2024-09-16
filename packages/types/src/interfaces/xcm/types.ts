// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Compact, Enum, Option, Struct, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId, BlockNumber, Weight, WeightV2 } from '@polkadot/types/interfaces/runtime';

/** @name AssetIdV2 */
export interface AssetIdV2 extends Enum {
  readonly isConcrete: boolean;
  readonly asConcrete: MultiLocationV2;
  readonly isAbstract: boolean;
  readonly asAbstract: Bytes;
  readonly type: 'Concrete' | 'Abstract';
}

/** @name AssetIdV3 */
export interface AssetIdV3 extends Enum {
  readonly isConcrete: boolean;
  readonly asConcrete: MultiLocationV3;
  readonly isAbstract: boolean;
  readonly asAbstract: Bytes;
  readonly type: 'Concrete' | 'Abstract';
}

/** @name AssetIdV4 */
export interface AssetIdV4 extends MultiLocationV4 {}

/** @name AssetInstance */
export interface AssetInstance extends AssetInstanceV4 {}

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
export interface AssetInstanceV2 extends Enum {
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

/** @name AssetInstanceV3 */
export interface AssetInstanceV3 extends Enum {
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

/** @name AssetInstanceV4 */
export interface AssetInstanceV4 extends Enum {
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

/** @name BodyIdV2 */
export interface BodyIdV2 extends Enum {
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

/** @name BodyIdV3 */
export interface BodyIdV3 extends Enum {
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

/** @name BodyPartV2 */
export interface BodyPartV2 extends Enum {
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

/** @name BodyPartV3 */
export interface BodyPartV3 extends Enum {
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

/** @name DoubleEncodedCall */
export interface DoubleEncodedCall extends Struct {
  readonly encoded: Bytes;
}

/** @name Fungibility */
export interface Fungibility extends FungibilityV4 {}

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
export interface FungibilityV2 extends Enum {
  readonly isFungible: boolean;
  readonly asFungible: Compact<u128>;
  readonly isNonFungible: boolean;
  readonly asNonFungible: AssetInstanceV2;
  readonly type: 'Fungible' | 'NonFungible';
}

/** @name FungibilityV3 */
export interface FungibilityV3 extends Enum {
  readonly isFungible: boolean;
  readonly asFungible: Compact<u128>;
  readonly isNonFungible: boolean;
  readonly asNonFungible: AssetInstanceV3;
  readonly type: 'Fungible' | 'NonFungible';
}

/** @name FungibilityV4 */
export interface FungibilityV4 extends Enum {
  readonly isFungible: boolean;
  readonly asFungible: Compact<u128>;
  readonly isNonFungible: boolean;
  readonly asNonFungible: AssetInstanceV4;
  readonly type: 'Fungible' | 'NonFungible';
}

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
    readonly originType: XcmOriginKind;
    readonly requireWeightAtMost: Compact<u64>;
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
  readonly asDescendOrigin: InteriorMultiLocationV2;
  readonly isReportError: boolean;
  readonly asReportError: {
    readonly queryId: Compact<u64>;
    readonly dest: MultiLocationV2;
    readonly maxResponseWeight: Compact<u64>;
  } & Struct;
  readonly isDepositAsset: boolean;
  readonly asDepositAsset: {
    readonly assets: MultiAssetFilterV2;
    readonly maxAssets: Compact<u32>;
    readonly beneficiary: MultiLocationV2;
  } & Struct;
  readonly isDepositReserveAsset: boolean;
  readonly asDepositReserveAsset: {
    readonly assets: MultiAssetFilterV2;
    readonly maxAssets: Compact<u32>;
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
    readonly queryId: Compact<u64>;
    readonly dest: MultiLocationV2;
    readonly assets: MultiAssetFilterV2;
    readonly maxResponseWeight: Compact<u64>;
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
  readonly asTrap: Compact<u64>;
  readonly isSubscribeVersion: boolean;
  readonly asSubscribeVersion: {
    readonly queryId: Compact<u64>;
    readonly maxResponseWeight: Compact<u64>;
  } & Struct;
  readonly isUnsubscribeVersion: boolean;
  readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'QueryHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion';
}

/** @name InstructionV3 */
export interface InstructionV3 extends Enum {
  readonly isWithdrawAsset: boolean;
  readonly asWithdrawAsset: MultiAssetsV3;
  readonly isReserveAssetDeposited: boolean;
  readonly asReserveAssetDeposited: MultiAssetsV3;
  readonly isReceiveTeleportedAsset: boolean;
  readonly asReceiveTeleportedAsset: MultiAssetsV3;
  readonly isQueryResponse: boolean;
  readonly asQueryResponse: {
    readonly queryId: Compact<u64>;
    readonly response: ResponseV3;
    readonly maxWeight: WeightV2;
    readonly querier: Option<MultiLocationV3>;
  } & Struct;
  readonly isTransferAsset: boolean;
  readonly asTransferAsset: {
    readonly assets: MultiAssetsV3;
    readonly beneficiary: MultiLocationV3;
  } & Struct;
  readonly isTransferReserveAsset: boolean;
  readonly asTransferReserveAsset: {
    readonly assets: MultiAssetsV3;
    readonly dest: MultiLocationV3;
    readonly xcm: XcmV3;
  } & Struct;
  readonly isTransact: boolean;
  readonly asTransact: {
    readonly originKind: XcmOriginKind;
    readonly requireWeightAtMost: WeightV2;
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
  readonly asDescendOrigin: JunctionsV3;
  readonly isReportError: boolean;
  readonly asReportError: QueryResponseInfoV3;
  readonly isDepositAsset: boolean;
  readonly asDepositAsset: {
    readonly assets: MultiAssetFilterV3;
    readonly beneficiary: MultiLocationV3;
  } & Struct;
  readonly isDepositReserveAsset: boolean;
  readonly asDepositReserveAsset: {
    readonly assets: MultiAssetFilterV3;
    readonly dest: MultiLocationV3;
    readonly xcm: XcmV3;
  } & Struct;
  readonly isExchangeAsset: boolean;
  readonly asExchangeAsset: {
    readonly give: MultiAssetFilterV3;
    readonly want: MultiAssetsV3;
    readonly maximal: bool;
  } & Struct;
  readonly isInitiateReserveWithdraw: boolean;
  readonly asInitiateReserveWithdraw: {
    readonly assets: MultiAssetFilterV3;
    readonly reserve: MultiLocationV3;
    readonly xcm: XcmV3;
  } & Struct;
  readonly isInitiateTeleport: boolean;
  readonly asInitiateTeleport: {
    readonly assets: MultiAssetFilterV3;
    readonly dest: MultiLocationV3;
    readonly xcm: XcmV3;
  } & Struct;
  readonly isReportHolding: boolean;
  readonly asReportHolding: {
    readonly responseInfo: QueryResponseInfoV3;
    readonly assets: MultiAssetFilterV3;
  } & Struct;
  readonly isBuyExecution: boolean;
  readonly asBuyExecution: {
    readonly fees: MultiAssetV3;
    readonly weightLimit: WeightLimitV3;
  } & Struct;
  readonly isRefundSurplus: boolean;
  readonly isSetErrorHandler: boolean;
  readonly asSetErrorHandler: XcmV3;
  readonly isSetAppendix: boolean;
  readonly asSetAppendix: XcmV3;
  readonly isClearError: boolean;
  readonly isClaimAsset: boolean;
  readonly asClaimAsset: {
    readonly assets: MultiAssetsV3;
    readonly ticket: MultiLocationV3;
  } & Struct;
  readonly isTrap: boolean;
  readonly asTrap: Compact<u64>;
  readonly isSubscribeVersion: boolean;
  readonly asSubscribeVersion: {
    readonly queryId: Compact<u64>;
    readonly maxResponseWeight: WeightV2;
  } & Struct;
  readonly isUnsubscribeVersion: boolean;
  readonly isBurnAsset: boolean;
  readonly asBurnAsset: MultiAssetsV3;
  readonly isExpectAsset: boolean;
  readonly asExpectAsset: MultiAssetsV3;
  readonly isExpectOrigin: boolean;
  readonly asExpectOrigin: Option<MultiLocationV3>;
  readonly isExpectError: boolean;
  readonly asExpectError: Option<ITuple<[u32, XcmErrorV3]>>;
  readonly isExpectTransactStatus: boolean;
  readonly asExpectTransactStatus: MaybeErrorCodeV3;
  readonly isQueryPallet: boolean;
  readonly asQueryPallet: {
    readonly moduleName: Bytes;
    readonly responseInfo: QueryResponseInfoV3;
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
  readonly asReportTransactStatus: QueryResponseInfoV3;
  readonly isClearTransactStatus: boolean;
  readonly isUniversalOrigin: boolean;
  readonly asUniversalOrigin: JunctionV3;
  readonly isExportMessage: boolean;
  readonly asExportMessage: {
    readonly network: NetworkIdV3;
    readonly destination: JunctionsV3;
    readonly xcm: XcmV3;
  } & Struct;
  readonly isLockAsset: boolean;
  readonly asLockAsset: {
    readonly asset: MultiAssetV3;
    readonly unlocker: MultiLocationV3;
  } & Struct;
  readonly isUnlockAsset: boolean;
  readonly asUnlockAsset: {
    readonly asset: MultiAssetV3;
    readonly target: MultiLocationV3;
  } & Struct;
  readonly isNoteUnlockable: boolean;
  readonly asNoteUnlockable: {
    readonly asset: MultiAssetV3;
    readonly owner: MultiLocationV3;
  } & Struct;
  readonly isRequestUnlock: boolean;
  readonly asRequestUnlock: {
    readonly asset: MultiAssetV3;
    readonly locker: MultiLocationV3;
  } & Struct;
  readonly isSetFeesMode: boolean;
  readonly asSetFeesMode: {
    readonly jitWithdraw: bool;
  } & Struct;
  readonly isSetTopic: boolean;
  readonly asSetTopic: U8aFixed;
  readonly isClearTopic: boolean;
  readonly isAliasOrigin: boolean;
  readonly asAliasOrigin: MultiLocationV3;
  readonly isUnpaidExecution: boolean;
  readonly asUnpaidExecution: {
    readonly weightLimit: WeightLimitV3;
    readonly checkOrigin: Option<MultiLocationV3>;
  } & Struct;
  readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'ReportHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion' | 'BurnAsset' | 'ExpectAsset' | 'ExpectOrigin' | 'ExpectError' | 'ExpectTransactStatus' | 'QueryPallet' | 'ExpectPallet' | 'ReportTransactStatus' | 'ClearTransactStatus' | 'UniversalOrigin' | 'ExportMessage' | 'LockAsset' | 'UnlockAsset' | 'NoteUnlockable' | 'RequestUnlock' | 'SetFeesMode' | 'SetTopic' | 'ClearTopic' | 'AliasOrigin' | 'UnpaidExecution';
}

/** @name InstructionV4 */
export interface InstructionV4 extends Enum {
  readonly isWithdrawAsset: boolean;
  readonly asWithdrawAsset: MultiAssetsV4;
  readonly isReserveAssetDeposited: boolean;
  readonly asReserveAssetDeposited: MultiAssetsV4;
  readonly isReceiveTeleportedAsset: boolean;
  readonly asReceiveTeleportedAsset: MultiAssetsV4;
  readonly isQueryResponse: boolean;
  readonly asQueryResponse: {
    readonly queryId: Compact<u64>;
    readonly response: ResponseV4;
    readonly maxWeight: WeightV2;
    readonly querier: Option<MultiLocationV4>;
  } & Struct;
  readonly isTransferAsset: boolean;
  readonly asTransferAsset: {
    readonly assets: MultiAssetsV4;
    readonly beneficiary: MultiLocationV4;
  } & Struct;
  readonly isTransferReserveAsset: boolean;
  readonly asTransferReserveAsset: {
    readonly assets: MultiAssetsV4;
    readonly dest: MultiLocationV4;
    readonly xcm: XcmV4;
  } & Struct;
  readonly isTransact: boolean;
  readonly asTransact: {
    readonly originKind: OriginKindV4;
    readonly requireWeightAtMost: WeightV2;
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
  readonly asDescendOrigin: JunctionsV4;
  readonly isReportError: boolean;
  readonly asReportError: QueryResponseInfoV4;
  readonly isDepositAsset: boolean;
  readonly asDepositAsset: {
    readonly assets: MultiAssetFilterV4;
    readonly beneficiary: MultiLocationV4;
  } & Struct;
  readonly isDepositReserveAsset: boolean;
  readonly asDepositReserveAsset: {
    readonly assets: MultiAssetFilterV4;
    readonly dest: MultiLocationV4;
    readonly xcm: XcmV4;
  } & Struct;
  readonly isExchangeAsset: boolean;
  readonly asExchangeAsset: {
    readonly give: MultiAssetFilterV4;
    readonly want: MultiAssetsV4;
    readonly maximal: bool;
  } & Struct;
  readonly isInitiateReserveWithdraw: boolean;
  readonly asInitiateReserveWithdraw: {
    readonly assets: MultiAssetFilterV4;
    readonly reserve: MultiLocationV4;
    readonly xcm: XcmV4;
  } & Struct;
  readonly isInitiateTeleport: boolean;
  readonly asInitiateTeleport: {
    readonly assets: MultiAssetFilterV4;
    readonly dest: MultiLocationV4;
    readonly xcm: XcmV4;
  } & Struct;
  readonly isReportHolding: boolean;
  readonly asReportHolding: {
    readonly responseInfo: QueryResponseInfoV4;
    readonly assets: MultiAssetFilterV4;
  } & Struct;
  readonly isBuyExecution: boolean;
  readonly asBuyExecution: {
    readonly fees: MultiAssetV4;
    readonly weightLimit: WeightLimitV3;
  } & Struct;
  readonly isRefundSurplus: boolean;
  readonly isSetErrorHandler: boolean;
  readonly asSetErrorHandler: XcmV4;
  readonly isSetAppendix: boolean;
  readonly asSetAppendix: XcmV4;
  readonly isClearError: boolean;
  readonly isClaimAsset: boolean;
  readonly asClaimAsset: {
    readonly assets: MultiAssetsV4;
    readonly ticket: MultiLocationV4;
  } & Struct;
  readonly isTrap: boolean;
  readonly asTrap: Compact<u64>;
  readonly isSubscribeVersion: boolean;
  readonly asSubscribeVersion: {
    readonly queryId: Compact<u64>;
    readonly maxResponseWeight: WeightV2;
  } & Struct;
  readonly isUnsubscribeVersion: boolean;
  readonly isBurnAsset: boolean;
  readonly asBurnAsset: MultiAssetsV4;
  readonly isExpectAsset: boolean;
  readonly asExpectAsset: MultiAssetsV4;
  readonly isExpectOrigin: boolean;
  readonly asExpectOrigin: Option<MultiLocationV4>;
  readonly isExpectError: boolean;
  readonly asExpectError: Option<ITuple<[u32, XcmErrorV3]>>;
  readonly isExpectTransactStatus: boolean;
  readonly asExpectTransactStatus: MaybeErrorCodeV3;
  readonly isQueryPallet: boolean;
  readonly asQueryPallet: {
    readonly moduleName: Bytes;
    readonly responseInfo: QueryResponseInfoV4;
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
  readonly asReportTransactStatus: QueryResponseInfoV4;
  readonly isClearTransactStatus: boolean;
  readonly isUniversalOrigin: boolean;
  readonly asUniversalOrigin: JunctionV4;
  readonly isExportMessage: boolean;
  readonly asExportMessage: {
    readonly network: NetworkIdV4;
    readonly destination: JunctionsV4;
    readonly xcm: XcmV4;
  } & Struct;
  readonly isLockAsset: boolean;
  readonly asLockAsset: {
    readonly asset: MultiAssetV4;
    readonly unlocker: MultiLocationV4;
  } & Struct;
  readonly isUnlockAsset: boolean;
  readonly asUnlockAsset: {
    readonly asset: MultiAssetV4;
    readonly target: MultiLocationV4;
  } & Struct;
  readonly isNoteUnlockable: boolean;
  readonly asNoteUnlockable: {
    readonly asset: MultiAssetV4;
    readonly owner: MultiLocationV4;
  } & Struct;
  readonly isRequestUnlock: boolean;
  readonly asRequestUnlock: {
    readonly asset: MultiAssetV4;
    readonly locker: MultiLocationV4;
  } & Struct;
  readonly isSetFeesMode: boolean;
  readonly asSetFeesMode: {
    readonly jitWithdraw: bool;
  } & Struct;
  readonly isSetTopic: boolean;
  readonly asSetTopic: U8aFixed;
  readonly isClearTopic: boolean;
  readonly isAliasOrigin: boolean;
  readonly asAliasOrigin: MultiLocationV4;
  readonly isUnpaidExecution: boolean;
  readonly asUnpaidExecution: {
    readonly weightLimit: WeightLimitV3;
    readonly checkOrigin: Option<MultiLocationV4>;
  } & Struct;
  readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'ReportHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion' | 'BurnAsset' | 'ExpectAsset' | 'ExpectOrigin' | 'ExpectError' | 'ExpectTransactStatus' | 'QueryPallet' | 'ExpectPallet' | 'ReportTransactStatus' | 'ClearTransactStatus' | 'UniversalOrigin' | 'ExportMessage' | 'LockAsset' | 'UnlockAsset' | 'NoteUnlockable' | 'RequestUnlock' | 'SetFeesMode' | 'SetTopic' | 'ClearTopic' | 'AliasOrigin' | 'UnpaidExecution';
}

/** @name InteriorMultiLocation */
export interface InteriorMultiLocation extends Junctions {}

/** @name InteriorMultiLocationV2 */
export interface InteriorMultiLocationV2 extends JunctionsV2 {}

/** @name InteriorMultiLocationV3 */
export interface InteriorMultiLocationV3 extends JunctionsV3 {}

/** @name Junction */
export interface Junction extends JunctionV4 {}

/** @name Junctions */
export interface Junctions extends JunctionsV4 {}

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
export interface JunctionsV2 extends Enum {
  readonly isHere: boolean;
  readonly isX1: boolean;
  readonly asX1: JunctionV2;
  readonly isX2: boolean;
  readonly asX2: ITuple<[JunctionV2, JunctionV2]>;
  readonly isX3: boolean;
  readonly asX3: ITuple<[JunctionV2, JunctionV2, JunctionV2]>;
  readonly isX4: boolean;
  readonly asX4: ITuple<[JunctionV2, JunctionV2, JunctionV2, JunctionV2]>;
  readonly isX5: boolean;
  readonly asX5: ITuple<[JunctionV2, JunctionV2, JunctionV2, JunctionV2, JunctionV2]>;
  readonly isX6: boolean;
  readonly asX6: ITuple<[JunctionV2, JunctionV2, JunctionV2, JunctionV2, JunctionV2, JunctionV2]>;
  readonly isX7: boolean;
  readonly asX7: ITuple<[JunctionV2, JunctionV2, JunctionV2, JunctionV2, JunctionV2, JunctionV2, JunctionV2]>;
  readonly isX8: boolean;
  readonly asX8: ITuple<[JunctionV2, JunctionV2, JunctionV2, JunctionV2, JunctionV2, JunctionV2, JunctionV2, JunctionV2]>;
  readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
}

/** @name JunctionsV3 */
export interface JunctionsV3 extends Enum {
  readonly isHere: boolean;
  readonly isX1: boolean;
  readonly asX1: JunctionV3;
  readonly isX2: boolean;
  readonly asX2: ITuple<[JunctionV3, JunctionV3]>;
  readonly isX3: boolean;
  readonly asX3: ITuple<[JunctionV3, JunctionV3, JunctionV3]>;
  readonly isX4: boolean;
  readonly asX4: ITuple<[JunctionV3, JunctionV3, JunctionV3, JunctionV3]>;
  readonly isX5: boolean;
  readonly asX5: ITuple<[JunctionV3, JunctionV3, JunctionV3, JunctionV3, JunctionV3]>;
  readonly isX6: boolean;
  readonly asX6: ITuple<[JunctionV3, JunctionV3, JunctionV3, JunctionV3, JunctionV3, JunctionV3]>;
  readonly isX7: boolean;
  readonly asX7: ITuple<[JunctionV3, JunctionV3, JunctionV3, JunctionV3, JunctionV3, JunctionV3, JunctionV3]>;
  readonly isX8: boolean;
  readonly asX8: ITuple<[JunctionV3, JunctionV3, JunctionV3, JunctionV3, JunctionV3, JunctionV3, JunctionV3, JunctionV3]>;
  readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
}

/** @name JunctionsV4 */
export interface JunctionsV4 extends Enum {
  readonly isHere: boolean;
  readonly isX1: boolean;
  readonly asX1: Vec<JunctionV4>;
  readonly isX2: boolean;
  readonly asX2: Vec<JunctionV4>;
  readonly isX3: boolean;
  readonly asX3: Vec<JunctionV4>;
  readonly isX4: boolean;
  readonly asX4: Vec<JunctionV4>;
  readonly isX5: boolean;
  readonly asX5: Vec<JunctionV4>;
  readonly isX6: boolean;
  readonly asX6: Vec<JunctionV4>;
  readonly isX7: boolean;
  readonly asX7: Vec<JunctionV4>;
  readonly isX8: boolean;
  readonly asX8: Vec<JunctionV4>;
  readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
}

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
export interface JunctionV2 extends Enum {
  readonly isParachain: boolean;
  readonly asParachain: Compact<u32>;
  readonly isAccountId32: boolean;
  readonly asAccountId32: {
    readonly network: NetworkIdV2;
    readonly id: U8aFixed;
  } & Struct;
  readonly isAccountIndex64: boolean;
  readonly asAccountIndex64: {
    readonly network: NetworkIdV2;
    readonly index: Compact<u64>;
  } & Struct;
  readonly isAccountKey20: boolean;
  readonly asAccountKey20: {
    readonly network: NetworkIdV2;
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
    readonly id: BodyIdV2;
    readonly part: BodyPartV2;
  } & Struct;
  readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality';
}

/** @name JunctionV3 */
export interface JunctionV3 extends Enum {
  readonly isParachain: boolean;
  readonly asParachain: Compact<u32>;
  readonly isAccountId32: boolean;
  readonly asAccountId32: {
    readonly network: Option<NetworkIdV3>;
    readonly id: U8aFixed;
  } & Struct;
  readonly isAccountIndex64: boolean;
  readonly asAccountIndex64: {
    readonly network: Option<NetworkIdV3>;
    readonly index: Compact<u64>;
  } & Struct;
  readonly isAccountKey20: boolean;
  readonly asAccountKey20: {
    readonly network: Option<NetworkIdV3>;
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
    readonly id: BodyIdV3;
    readonly part: BodyPartV3;
  } & Struct;
  readonly isGlobalConsensus: boolean;
  readonly asGlobalConsensus: NetworkIdV3;
  readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality' | 'GlobalConsensus';
}

/** @name JunctionV4 */
export interface JunctionV4 extends Enum {
  readonly isParachain: boolean;
  readonly asParachain: Compact<u32>;
  readonly isAccountId32: boolean;
  readonly asAccountId32: {
    readonly network: Option<NetworkIdV4>;
    readonly id: U8aFixed;
  } & Struct;
  readonly isAccountIndex64: boolean;
  readonly asAccountIndex64: {
    readonly network: Option<NetworkIdV4>;
    readonly index: Compact<u64>;
  } & Struct;
  readonly isAccountKey20: boolean;
  readonly asAccountKey20: {
    readonly network: Option<NetworkIdV4>;
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
    readonly id: BodyIdV3;
    readonly part: BodyPartV3;
  } & Struct;
  readonly isGlobalConsensus: boolean;
  readonly asGlobalConsensus: NetworkIdV4;
  readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality' | 'GlobalConsensus';
}

/** @name MaxPalletNameLen */
export interface MaxPalletNameLen extends u32 {}

/** @name MaxPalletsInfo */
export interface MaxPalletsInfo extends u32 {}

/** @name MaybeErrorCodeV3 */
export interface MaybeErrorCodeV3 extends Enum {
  readonly isSuccess: boolean;
  readonly isError: boolean;
  readonly asError: Bytes;
  readonly isTruncatedError: boolean;
  readonly asTruncatedError: Bytes;
  readonly type: 'Success' | 'Error' | 'TruncatedError';
}

/** @name MultiAsset */
export interface MultiAsset extends MultiAssetV4 {}

/** @name MultiAssetFilter */
export interface MultiAssetFilter extends MultiAssetFilterV4 {}

/** @name MultiAssetFilterV1 */
export interface MultiAssetFilterV1 extends Enum {
  readonly isDefinite: boolean;
  readonly asDefinite: MultiAssetsV1;
  readonly isWild: boolean;
  readonly asWild: WildMultiAssetV1;
  readonly type: 'Definite' | 'Wild';
}

/** @name MultiAssetFilterV2 */
export interface MultiAssetFilterV2 extends Enum {
  readonly isDefinite: boolean;
  readonly asDefinite: MultiAssetsV2;
  readonly isWild: boolean;
  readonly asWild: WildMultiAssetV2;
  readonly type: 'Definite' | 'Wild';
}

/** @name MultiAssetFilterV3 */
export interface MultiAssetFilterV3 extends Enum {
  readonly isDefinite: boolean;
  readonly asDefinite: MultiAssetsV3;
  readonly isWild: boolean;
  readonly asWild: WildMultiAssetV3;
  readonly type: 'Definite' | 'Wild';
}

/** @name MultiAssetFilterV4 */
export interface MultiAssetFilterV4 extends Enum {
  readonly isDefinite: boolean;
  readonly asDefinite: MultiAssetsV4;
  readonly isWild: boolean;
  readonly asWild: WildMultiAssetV4;
  readonly type: 'Definite' | 'Wild';
}

/** @name MultiAssets */
export interface MultiAssets extends Vec<MultiAsset> {}

/** @name MultiAssetsV1 */
export interface MultiAssetsV1 extends Vec<MultiAssetV1> {}

/** @name MultiAssetsV2 */
export interface MultiAssetsV2 extends Vec<MultiAssetV2> {}

/** @name MultiAssetsV3 */
export interface MultiAssetsV3 extends Vec<MultiAssetV3> {}

/** @name MultiAssetsV4 */
export interface MultiAssetsV4 extends Vec<MultiAssetV4> {}

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
export interface MultiAssetV2 extends Struct {
  readonly id: AssetIdV2;
  readonly fun: FungibilityV2;
}

/** @name MultiAssetV3 */
export interface MultiAssetV3 extends Struct {
  readonly id: AssetIdV3;
  readonly fun: FungibilityV3;
}

/** @name MultiAssetV4 */
export interface MultiAssetV4 extends Struct {
  readonly id: AssetIdV4;
  readonly fun: FungibilityV4;
}

/** @name MultiLocation */
export interface MultiLocation extends MultiLocationV4 {}

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
export interface MultiLocationV2 extends Struct {
  readonly parents: u8;
  readonly interior: JunctionsV2;
}

/** @name MultiLocationV3 */
export interface MultiLocationV3 extends Struct {
  readonly parents: u8;
  readonly interior: JunctionsV3;
}

/** @name MultiLocationV4 */
export interface MultiLocationV4 extends Struct {
  readonly parents: u8;
  readonly interior: JunctionsV4;
}

/** @name NetworkId */
export interface NetworkId extends Enum {
  readonly isAny: boolean;
  readonly isNamed: boolean;
  readonly asNamed: Bytes;
  readonly isPolkadot: boolean;
  readonly isKusama: boolean;
  readonly type: 'Any' | 'Named' | 'Polkadot' | 'Kusama';
}

/** @name NetworkIdV2 */
export interface NetworkIdV2 extends Enum {
  readonly isAny: boolean;
  readonly isNamed: boolean;
  readonly asNamed: Bytes;
  readonly isPolkadot: boolean;
  readonly isKusama: boolean;
  readonly type: 'Any' | 'Named' | 'Polkadot' | 'Kusama';
}

/** @name NetworkIdV3 */
export interface NetworkIdV3 extends Enum {
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

/** @name NetworkIdV4 */
export interface NetworkIdV4 extends NetworkIdV3 {}

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
export interface OriginKindV2 extends Enum {
  readonly isNative: boolean;
  readonly isSovereignAccount: boolean;
  readonly isSuperuser: boolean;
  readonly isXcm: boolean;
  readonly type: 'Native' | 'SovereignAccount' | 'Superuser' | 'Xcm';
}

/** @name OriginKindV3 */
export interface OriginKindV3 extends OriginKindV2 {}

/** @name OriginKindV4 */
export interface OriginKindV4 extends XcmOriginKind {}

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

/** @name OutcomeV4 */
export interface OutcomeV4 extends Enum {
  readonly isComplete: boolean;
  readonly asComplete: {
    readonly used: WeightV2;
  } & Struct;
  readonly isIncomplete: boolean;
  readonly asIncomplete: {
    readonly used: WeightV2;
    readonly error: XcmErrorV3;
  } & Struct;
  readonly isError: boolean;
  readonly asError: {
    readonly error: XcmErrorV3;
  } & Struct;
  readonly type: 'Complete' | 'Incomplete' | 'Error';
}

/** @name PalletInfoV3 */
export interface PalletInfoV3 extends Struct {
  readonly index: Compact<u32>;
  readonly name: Bytes;
  readonly moduleName: Bytes;
  readonly major: Compact<u32>;
  readonly minor: Compact<u32>;
  readonly patch: Compact<u32>;
}

/** @name PalletInfoV4 */
export interface PalletInfoV4 extends PalletInfoV3 {}

/** @name QueryId */
export interface QueryId extends u64 {}

/** @name QueryResponseInfoV3 */
export interface QueryResponseInfoV3 extends Struct {
  readonly destination: MultiLocationV3;
  readonly queryId: Compact<u64>;
  readonly maxWeight: WeightV2;
}

/** @name QueryResponseInfoV4 */
export interface QueryResponseInfoV4 extends Struct {
  readonly destination: MultiLocationV4;
  readonly queryId: Compact<u64>;
  readonly maxWeight: WeightV2;
}

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
export interface Response extends ResponseV4 {}

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
  readonly asExecutionResult: Option<ITuple<[u32, XcmErrorV2]>>;
  readonly isVersion: boolean;
  readonly asVersion: u32;
  readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version';
}

/** @name ResponseV2Error */
export interface ResponseV2Error extends ITuple<[u32, XcmErrorV2]> {}

/** @name ResponseV3 */
export interface ResponseV3 extends Enum {
  readonly isNull: boolean;
  readonly isAssets: boolean;
  readonly asAssets: MultiAssetsV3;
  readonly isExecutionResult: boolean;
  readonly asExecutionResult: Option<ITuple<[u32, XcmErrorV3]>>;
  readonly isVersion: boolean;
  readonly asVersion: u32;
  readonly isPalletsInfo: boolean;
  readonly asPalletsInfo: Vec<PalletInfoV3>;
  readonly isDispatchResult: boolean;
  readonly asDispatchResult: MaybeErrorCodeV3;
  readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version' | 'PalletsInfo' | 'DispatchResult';
}

/** @name ResponseV3Error */
export interface ResponseV3Error extends ITuple<[u32, XcmErrorV3]> {}

/** @name ResponseV3Result */
export interface ResponseV3Result extends Option<ITuple<[u32, ResponseV3Error]>> {}

/** @name ResponseV4 */
export interface ResponseV4 extends Enum {
  readonly isNull: boolean;
  readonly isAssets: boolean;
  readonly asAssets: MultiAssetsV4;
  readonly isExecutionResult: boolean;
  readonly asExecutionResult: Option<ITuple<[u32, XcmErrorV3]>>;
  readonly isVersion: boolean;
  readonly asVersion: u32;
  readonly isPalletsInfo: boolean;
  readonly asPalletsInfo: Vec<PalletInfoV4>;
  readonly isDispatchResult: boolean;
  readonly asDispatchResult: MaybeErrorCodeV3;
  readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version' | 'PalletsInfo' | 'DispatchResult';
}

/** @name UncheckedFungibilityV4 */
export interface UncheckedFungibilityV4 extends Enum {
  readonly isFungible: boolean;
  readonly asFungible: Compact<u128>;
  readonly isNonFungible: boolean;
  readonly asNonFungible: AssetInstanceV4;
  readonly type: 'Fungible' | 'NonFungible';
}

/** @name VersionedMultiAsset */
export interface VersionedMultiAsset extends Enum {
  readonly isV0: boolean;
  readonly asV0: MultiAssetV0;
  readonly isV1: boolean;
  readonly asV1: MultiAssetV1;
  readonly isV2: boolean;
  readonly asV2: MultiAssetV2;
  readonly isV3: boolean;
  readonly asV3: MultiAssetV3;
  readonly isV4: boolean;
  readonly asV4: MultiAssetV4;
  readonly type: 'V0' | 'V1' | 'V2' | 'V3' | 'V4';
}

/** @name VersionedMultiAssets */
export interface VersionedMultiAssets extends Enum {
  readonly isV0: boolean;
  readonly asV0: Vec<MultiAssetV0>;
  readonly isV1: boolean;
  readonly asV1: MultiAssetsV1;
  readonly isV2: boolean;
  readonly asV2: MultiAssetsV2;
  readonly isV3: boolean;
  readonly asV3: MultiAssetsV3;
  readonly isV4: boolean;
  readonly asV4: MultiAssetsV4;
  readonly type: 'V0' | 'V1' | 'V2' | 'V3' | 'V4';
}

/** @name VersionedMultiLocation */
export interface VersionedMultiLocation extends Enum {
  readonly isV0: boolean;
  readonly asV0: MultiLocationV0;
  readonly isV1: boolean;
  readonly asV1: MultiLocationV1;
  readonly isV2: boolean;
  readonly asV2: MultiLocationV2;
  readonly isV3: boolean;
  readonly asV3: MultiLocationV3;
  readonly isV4: boolean;
  readonly asV4: MultiLocationV4;
  readonly type: 'V0' | 'V1' | 'V2' | 'V3' | 'V4';
}

/** @name VersionedResponse */
export interface VersionedResponse extends Struct {
  readonly V0: ResponseV0;
  readonly V1: ResponseV1;
  readonly V2: ResponseV2;
  readonly V3: ResponseV3;
  readonly V4: ResponseV4;
}

/** @name VersionedXcm */
export interface VersionedXcm extends Enum {
  readonly isV0: boolean;
  readonly asV0: XcmV0;
  readonly isV1: boolean;
  readonly asV1: XcmV1;
  readonly isV2: boolean;
  readonly asV2: XcmV2;
  readonly isV3: boolean;
  readonly asV3: XcmV3;
  readonly isV4: boolean;
  readonly asV4: XcmV4;
  readonly type: 'V0' | 'V1' | 'V2' | 'V3' | 'V4';
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

/** @name VersionV2Xcm */
export interface VersionV2Xcm extends Struct {
  readonly V2: XcmV2;
}

/** @name VersionV3 */
export interface VersionV3 extends u32 {}

/** @name VersionV3Xcm */
export interface VersionV3Xcm extends Struct {
  readonly V3: XcmV3;
}

/** @name VersionV4 */
export interface VersionV4 extends u32 {}

/** @name VersionV4Xcm */
export interface VersionV4Xcm extends Struct {
  readonly V4: XcmV4;
}

/** @name WeightLimitV2 */
export interface WeightLimitV2 extends Enum {
  readonly isUnlimited: boolean;
  readonly isLimited: boolean;
  readonly asLimited: Compact<u64>;
  readonly type: 'Unlimited' | 'Limited';
}

/** @name WeightLimitV3 */
export interface WeightLimitV3 extends Enum {
  readonly isUnlimited: boolean;
  readonly isLimited: boolean;
  readonly asLimited: WeightV2;
  readonly type: 'Unlimited' | 'Limited';
}

/** @name WildFungibility */
export interface WildFungibility extends WildFungibilityV4 {}

/** @name WildFungibilityV0 */
export interface WildFungibilityV0 extends WildFungibilityV1 {}

/** @name WildFungibilityV1 */
export interface WildFungibilityV1 extends Enum {
  readonly isFungible: boolean;
  readonly isNonFungible: boolean;
  readonly type: 'Fungible' | 'NonFungible';
}

/** @name WildFungibilityV2 */
export interface WildFungibilityV2 extends Enum {
  readonly isFungible: boolean;
  readonly isNonFungible: boolean;
  readonly type: 'Fungible' | 'NonFungible';
}

/** @name WildFungibilityV3 */
export interface WildFungibilityV3 extends WildFungibilityV2 {}

/** @name WildFungibilityV4 */
export interface WildFungibilityV4 extends WildFungibilityV2 {}

/** @name WildMultiAsset */
export interface WildMultiAsset extends WildMultiAssetV4 {}

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
export interface WildMultiAssetV2 extends Enum {
  readonly isAll: boolean;
  readonly isAllOf: boolean;
  readonly asAllOf: {
    readonly id: AssetIdV2;
    readonly fun: WildFungibilityV2;
  } & Struct;
  readonly type: 'All' | 'AllOf';
}

/** @name WildMultiAssetV3 */
export interface WildMultiAssetV3 extends Enum {
  readonly isAll: boolean;
  readonly isAllOf: boolean;
  readonly asAllOf: {
    readonly id: AssetIdV3;
    readonly fun: WildFungibilityV2;
  } & Struct;
  readonly isAllCounted: boolean;
  readonly asAllCounted: Compact<u32>;
  readonly isAllOfCounted: boolean;
  readonly asAllOfCounted: {
    readonly id: AssetIdV3;
    readonly fun: WildFungibilityV2;
    readonly count: Compact<u32>;
  } & Struct;
  readonly type: 'All' | 'AllOf' | 'AllCounted' | 'AllOfCounted';
}

/** @name WildMultiAssetV4 */
export interface WildMultiAssetV4 extends Enum {
  readonly isAll: boolean;
  readonly isAllOf: boolean;
  readonly asAllOf: {
    readonly id: AssetIdV4;
    readonly fun: WildFungibilityV4;
  } & Struct;
  readonly isAllCounted: boolean;
  readonly asAllCounted: Compact<u32>;
  readonly isAllOfCounted: boolean;
  readonly asAllOfCounted: {
    readonly id: AssetIdV4;
    readonly fun: WildFungibilityV4;
    readonly count: Compact<u32>;
  } & Struct;
  readonly type: 'All' | 'AllOf' | 'AllCounted' | 'AllOfCounted';
}

/** @name Xcm */
export interface Xcm extends XcmV4 {}

/** @name XcmAssetId */
export interface XcmAssetId extends Enum {
  readonly isConcrete: boolean;
  readonly asConcrete: MultiLocation;
  readonly isAbstract: boolean;
  readonly asAbstract: Bytes;
  readonly type: 'Concrete' | 'Abstract';
}

/** @name XcmError */
export interface XcmError extends XcmErrorV4 {}

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
  readonly asWeightLimitReached: Weight;
  readonly isBarrier: boolean;
  readonly isWeightNotComputable: boolean;
  readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'MultiLocationFull' | 'MultiLocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable';
}

/** @name XcmErrorV3 */
export interface XcmErrorV3 extends Enum {
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
  readonly asWeightLimitReached: WeightV2;
  readonly isBarrier: boolean;
  readonly isExceedsStackLimit: boolean;
  readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'LocationFull' | 'LocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'ExpectationFalse' | 'PalletNotFound' | 'NameMismatch' | 'VersionIncompatible' | 'HoldingWouldOverflow' | 'ExportError' | 'ReanchorFailed' | 'NoDeal' | 'FeesNotMet' | 'LockError' | 'NoPermission' | 'Unanchored' | 'NotDepositable' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'ExceedsStackLimit';
}

/** @name XcmErrorV4 */
export interface XcmErrorV4 extends XcmErrorV3 {}

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

/** @name XcmV3 */
export interface XcmV3 extends Vec<InstructionV3> {}

/** @name XcmV4 */
export interface XcmV4 extends Vec<InstructionV4> {}

/** @name XcmVersion */
export interface XcmVersion extends u32 {}

export type PHANTOM_XCM = 'xcm';

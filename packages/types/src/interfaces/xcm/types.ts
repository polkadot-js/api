// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Compact, Enum, Struct, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { AccountId, Weight } from '@polkadot/types/interfaces/runtime';

/** @name AccountId32Junction */
export interface AccountId32Junction extends Struct {
  readonly network: NetworkId;
  readonly id: AccountId;
}

/** @name AccountIndex64Junction */
export interface AccountIndex64Junction extends Struct {
  readonly network: NetworkId;
  readonly index: Compact<u64>;
}

/** @name AccountKey20Junction */
export interface AccountKey20Junction extends Struct {
  readonly network: NetworkId;
  readonly index: U8aFixed;
}

/** @name AssetInstance */
export interface AssetInstance extends Enum {
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
  readonly asFraction: BodyPartFraction;
  readonly isAtLeastProportion: boolean;
  readonly asAtLeastProportion: BodyPartAtLeastProportion;
  readonly isMoreThanProportion: boolean;
  readonly asMoreThanProportion: BodyPartMoreThanProportion;
}

/** @name BodyPartAtLeastProportion */
export interface BodyPartAtLeastProportion extends Struct {
  readonly nom: Compact<u32>;
  readonly denom: Compact<u32>;
}

/** @name BodyPartFraction */
export interface BodyPartFraction extends Struct {
  readonly nom: Compact<u32>;
  readonly denom: Compact<u32>;
}

/** @name BodyPartMoreThanProportion */
export interface BodyPartMoreThanProportion extends Struct {
  readonly nom: Compact<u32>;
  readonly denom: Compact<u32>;
}

/** @name DoubleEncodedCall */
export interface DoubleEncodedCall extends Struct {
  readonly encoded: Bytes;
}

/** @name Junction */
export interface Junction extends Enum {
  readonly isParent: boolean;
  readonly isParachain: boolean;
  readonly asParachain: Compact<u32>;
  readonly isAccountId32: boolean;
  readonly asAccountId32: AccountId32Junction;
  readonly isAccountIndex64: boolean;
  readonly asAccountIndex64: AccountIndex64Junction;
  readonly isAccountKey20: boolean;
  readonly asAccountKey20: AccountKey20Junction;
  readonly isPalletInstance: boolean;
  readonly asPalletInstance: u8;
  readonly isGeneralIndex: boolean;
  readonly asGeneralIndex: Compact<u128>;
  readonly isGeneralKey: boolean;
  readonly asGeneralKey: Bytes;
  readonly isOnlyChild: boolean;
  readonly isPlurality: boolean;
  readonly asPlurality: PluralityJunction;
}

/** @name MultiAsset */
export interface MultiAsset extends Enum {
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
  readonly asAbstractFungible: MultiAssetAbstractFungible;
  readonly isAbstractNonFungible: boolean;
  readonly asAbstractNonFungible: MultiAssetAbstractNonFungible;
  readonly isConcreteFungible: boolean;
  readonly asConcreteFungible: MultiAssetConcreteFungible;
  readonly isConcreteNonFungible: boolean;
  readonly asConcreteNonFungible: MultiAssetConcreteNonFungible;
}

/** @name MultiAssetAbstractFungible */
export interface MultiAssetAbstractFungible extends Struct {
  readonly id: Bytes;
  readonly instance: Compact<u128>;
}

/** @name MultiAssetAbstractNonFungible */
export interface MultiAssetAbstractNonFungible extends Struct {
  readonly class: Bytes;
  readonly instance: AssetInstance;
}

/** @name MultiAssetConcreteFungible */
export interface MultiAssetConcreteFungible extends Struct {
  readonly id: MultiLocation;
  readonly amount: Compact<u128>;
}

/** @name MultiAssetConcreteNonFungible */
export interface MultiAssetConcreteNonFungible extends Struct {
  readonly class: MultiLocation;
  readonly instance: AssetInstance;
}

/** @name MultiLocation */
export interface MultiLocation extends Enum {
  readonly isNull: boolean;
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

/** @name NetworkId */
export interface NetworkId extends Enum {
  readonly isAny: boolean;
  readonly isNamed: boolean;
  readonly asNamed: Bytes;
  readonly isPolkadot: boolean;
  readonly isKusama: boolean;
}

/** @name PluralityJunction */
export interface PluralityJunction extends Struct {
  readonly id: BodyId;
  readonly part: BodyPart;
}

/** @name VersionedMultiAsset */
export interface VersionedMultiAsset extends Enum {
  readonly isV0: boolean;
  readonly asV0: MultiAsset;
}

/** @name VersionedMultiLocation */
export interface VersionedMultiLocation extends Enum {
  readonly isV0: boolean;
  readonly asV0: MultiLocation;
}

/** @name VersionedXcm */
export interface VersionedXcm extends Enum {
  readonly isV0: boolean;
  readonly asV0: Xcm;
}

/** @name Xcm */
export interface Xcm extends Enum {
  readonly isWithdrawAsset: boolean;
  readonly asWithdrawAsset: XcmWithdrawAsset;
  readonly isReserveAssetDeposit: boolean;
  readonly asReserveAssetDeposit: XcmReserveAssetDeposit;
  readonly isTeleportAsset: boolean;
  readonly asTeleportAsset: XcmTeleportAsset;
  readonly isQueryResponse: boolean;
  readonly asQueryResponse: XcmQueryResponse;
  readonly isTransferAsset: boolean;
  readonly asTransferAsset: XcmTransferAsset;
  readonly isTransferReserveAsset: boolean;
  readonly asTransferReserveAsset: XcmTransferReserveAsset;
  readonly isTransact: boolean;
  readonly asTransact: XcmTransact;
  readonly isHrmpNewChannelOpenRequest: boolean;
  readonly asHrmpNewChannelOpenRequest: XcmHrmpNewChannelOpenRequest;
  readonly isHrmpChannelAccepted: boolean;
  readonly asHrmpChannelAccepted: XcmHrmpChannelAccepted;
  readonly isHrmpChannelClosing: boolean;
  readonly asHrmpChannelClosing: XcmHrmpChannelClosing;
  readonly isRelayedFrom: boolean;
  readonly asRelayedFrom: XcmRelayedFrom;
}

/** @name XcmAssetEffects */
export interface XcmAssetEffects extends Struct {
  readonly assets: Vec<MultiAsset>;
  readonly effects: Vec<XcmOrder>;
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
  readonly isWildcard: boolean;
  readonly isTooMuchWeightRequired: boolean;
  readonly isNotHoldingFees: boolean;
  readonly isWeightNotComputable: boolean;
  readonly isBarrier: boolean;
  readonly isNotWithdrawable: boolean;
  readonly isLocationCannotHold: boolean;
}

/** @name XcmHrmpChannelAccepted */
export interface XcmHrmpChannelAccepted extends Struct {
  readonly recipient: Compact<u32>;
}

/** @name XcmHrmpChannelClosing */
export interface XcmHrmpChannelClosing extends Struct {
  readonly initiator: Compact<u32>;
  readonly sender: Compact<u32>;
  readonly recipient: Compact<u32>;
}

/** @name XcmHrmpNewChannelOpenRequest */
export interface XcmHrmpNewChannelOpenRequest extends Struct {
  readonly sender: Compact<u32>;
  readonly maxMessageSize: Compact<u32>;
  readonly maxCapacity: Compact<u32>;
}

/** @name XcmOrder */
export interface XcmOrder extends Enum {
  readonly isNull: boolean;
  readonly isDepositAsset: boolean;
  readonly asDepositAsset: XcmOrderDepositAsset;
  readonly isDepositReserveAsset: boolean;
  readonly asDepositReserveAsset: XcmOrderDepositReserveAsset;
  readonly isExchangeAsset: boolean;
  readonly asExchangeAsset: XcmOrderExchangeAsset;
  readonly isInitiateReserveWithdraw: boolean;
  readonly asInitiateReserveWithdraw: XcmOrderInitiateReserveWithdraw;
  readonly isInitiateTeleport: boolean;
  readonly asInitiateTeleport: XcmOrderInitiateTeleport;
  readonly isQueryHolding: boolean;
  readonly asQueryHolding: XcmOrderQueryHolding;
  readonly isBuyExecution: boolean;
  readonly asBuyExecution: XcmOrderBuyExecution;
}

/** @name XcmOrderBuyExecution */
export interface XcmOrderBuyExecution extends Struct {
  readonly fees: MultiAsset;
  readonly weight: u64;
  readonly debt: u64;
  readonly haltOnError: bool;
  readonly xcm: Vec<Xcm>;
}

/** @name XcmOrderDepositAsset */
export interface XcmOrderDepositAsset extends Struct {
  readonly assets: Vec<MultiAsset>;
  readonly dest: MultiLocation;
}

/** @name XcmOrderDepositReserveAsset */
export interface XcmOrderDepositReserveAsset extends Struct {
  readonly assets: Vec<MultiAsset>;
  readonly dest: MultiLocation;
  readonly effects: Vec<XcmOrder>;
}

/** @name XcmOrderExchangeAsset */
export interface XcmOrderExchangeAsset extends Struct {
  readonly give: Vec<MultiAsset>;
  readonly receive: Vec<MultiAsset>;
}

/** @name XcmOrderInitiateReserveWithdraw */
export interface XcmOrderInitiateReserveWithdraw extends Struct {
  readonly assets: Vec<MultiAsset>;
  readonly reserve: MultiLocation;
  readonly effects: Vec<XcmOrder>;
}

/** @name XcmOrderInitiateTeleport */
export interface XcmOrderInitiateTeleport extends Struct {
  readonly assets: Vec<MultiAsset>;
  readonly dest: MultiLocation;
  readonly effects: Vec<XcmOrder>;
}

/** @name XcmOrderQueryHolding */
export interface XcmOrderQueryHolding extends Struct {
  readonly queryId: Compact<u64>;
  readonly dest: MultiLocation;
  readonly assets: Vec<MultiAsset>;
}

/** @name XcmOriginKind */
export interface XcmOriginKind extends Enum {
  readonly isNative: boolean;
  readonly isSovereignAccount: boolean;
  readonly isSuperuser: boolean;
  readonly isXcm: boolean;
}

/** @name XcmOutcome */
export interface XcmOutcome extends Enum {
  readonly isComplete: boolean;
  readonly asComplete: Weight;
  readonly isIncomplete: boolean;
  readonly asIncomplete: ITuple<[Weight, XcmError]>;
  readonly isError: boolean;
  readonly asError: XcmError;
}

/** @name XcmQueryResponse */
export interface XcmQueryResponse extends Struct {
  readonly queryId: Compact<u64>;
  readonly response: XcmResponse;
}

/** @name XcmRelayedFrom */
export interface XcmRelayedFrom extends Struct {
  readonly who: MultiLocation;
  readonly message: Xcm;
}

/** @name XcmReserveAssetDeposit */
export interface XcmReserveAssetDeposit extends XcmAssetEffects {}

/** @name XcmResponse */
export interface XcmResponse extends Enum {
  readonly isAssets: boolean;
  readonly asAssets: Vec<MultiAsset>;
}

/** @name XcmTeleportAsset */
export interface XcmTeleportAsset extends XcmAssetEffects {}

/** @name XcmTransact */
export interface XcmTransact extends Struct {
  readonly originType: XcmOriginKind;
  readonly requireWeightAtMost: u64;
  readonly call: DoubleEncodedCall;
}

/** @name XcmTransferAsset */
export interface XcmTransferAsset extends Struct {
  readonly assets: Vec<MultiAsset>;
  readonly dest: MultiLocation;
}

/** @name XcmTransferReserveAsset */
export interface XcmTransferReserveAsset extends Struct {
  readonly assets: Vec<MultiAsset>;
  readonly dest: MultiLocation;
  readonly effects: Vec<XcmOrder>;
}

/** @name XcmWithdrawAsset */
export interface XcmWithdrawAsset extends XcmAssetEffects {}

export type PHANTOM_XCM = 'xcm';

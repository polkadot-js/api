// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/calls';

import type { ApiTypes, AugmentedCall, DecoratedCallBase } from '@polkadot/api-base/types';
import type { Bytes, Null, Option, Result, Text, Vec, bool, u128, u32 } from '@polkadot/types-codec';
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types';
import type { Extrinsic } from '@polkadot/types/interfaces/extrinsics';
import type { OpaqueMetadata } from '@polkadot/types/interfaces/metadata';
import type { AccountId32, H256, RuntimeCall, Slot, SlotDuration } from '@polkadot/types/interfaces/runtime';
import type { AssetHubPolkadotRuntimeOriginCaller, AssetsCommonRuntimeApiFungiblesAccessError, CumulusPrimitivesCoreCollationInfo, PalletTransactionPaymentFeeDetails, PalletTransactionPaymentRuntimeDispatchInfo, SpConsensusAuraEd25519AppEd25519Public, SpCoreCryptoKeyTypeId, SpInherentsCheckInherentsResult, SpInherentsInherentData, SpRuntimeBlock, SpRuntimeDispatchError, SpRuntimeExtrinsicInclusionMode, SpRuntimeHeader, SpRuntimeTransactionValidityTransactionSource, SpRuntimeTransactionValidityTransactionValidityError, SpRuntimeTransactionValidityValidTransaction, SpVersionRuntimeVersion, SpWeightsWeightV2Weight, StagingXcmV4Location, XcmRuntimeApisConversionsError, XcmRuntimeApisDryRunCallDryRunEffects, XcmRuntimeApisDryRunError, XcmRuntimeApisDryRunXcmDryRunEffects, XcmRuntimeApisFeesError, XcmVersionedAssetId, XcmVersionedAssets, XcmVersionedLocation, XcmVersionedXcm } from '@polkadot/types/lookup';
import type { IExtrinsic, Observable } from '@polkadot/types/types';

export type __AugmentedCall<ApiType extends ApiTypes> = AugmentedCall<ApiType>;
export type __DecoratedCallBase<ApiType extends ApiTypes> = DecoratedCallBase<ApiType>;

declare module '@polkadot/api-base/types/calls' {
  interface AugmentedCalls<ApiType extends ApiTypes> {
    /** 0xbc9d89904f5b923f/ */
    accountNonceApi: {
      /**
       * Get current account nonce of given `AccountId`.
       **/
      accountNonce: AugmentedCall<ApiType, (account: AccountId32 | string | Uint8Array) => Observable<u32>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x8a8047a53a8277ec/ */
    assetConversionApi: {
      /**
       * Returns the size of the liquidity pool for the given asset pair.
       **/
      getReserves: AugmentedCall<ApiType, (asset1: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, asset2: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array) => Observable<Option<ITuple<[u128, u128]>>>>;
      /**
       * Provides a quote for [`Pallet::swap_exact_tokens_for_tokens`].,, Note that the price may have changed by the time the transaction is executed., (Use `amount_out_min` to control slippage.)
       **/
      quotePriceExactTokensForTokens: AugmentedCall<ApiType, (asset1: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, asset2: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, include_fee: bool | boolean | Uint8Array) => Observable<Option<u128>>>;
      /**
       * Provides a quote for [`Pallet::swap_tokens_for_exact_tokens`].,, Note that the price may have changed by the time the transaction is executed., (Use `amount_in_max` to control slippage.)
       **/
      quotePriceTokensForExactTokens: AugmentedCall<ApiType, (asset1: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, asset2: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, include_fee: bool | boolean | Uint8Array) => Observable<Option<u128>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0xdd718d5cc53262d4/ */
    auraApi: {
      /**
       * Return the current set of authorities.
       **/
      authorities: AugmentedCall<ApiType, () => Observable<Vec<SpConsensusAuraEd25519AppEd25519Public>>>;
      /**
       * Returns the slot duration for Aura.,, Currently, only the value provided by this type at genesis will be used.
       **/
      slotDuration: AugmentedCall<ApiType, () => Observable<SlotDuration>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0xd7bdd8a272ca0d65/ */
    auraUnincludedSegmentApi: {
      /**
       * Whether it is legal to extend the chain, assuming the given block is the most, recently included one as-of the relay parent that will be built against, and, the given slot.,, This should be consistent with the logic the runtime uses when validating blocks to, avoid issues.,, When the unincluded segment is empty, i.e. `included_hash == at`, where at is the block, whose state we are querying against, this must always return `true` as long as the slot, is more recent than the included block itself.
       **/
      canBuildUpon: AugmentedCall<ApiType, (included_hash: H256 | string | Uint8Array, slot: Slot | AnyNumber | Uint8Array) => Observable<bool>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x40fe3ad401f8959a/ */
    blockBuilder: {
      /**
       * Apply the given extrinsic.,, Returns an inclusion outcome which specifies if this extrinsic is included in, this block or not.
       **/
      applyExtrinsic: AugmentedCall<ApiType, (extrinsic: Extrinsic | IExtrinsic | string | Uint8Array) => Observable<Result<Result<Null, SpRuntimeDispatchError>, SpRuntimeTransactionValidityTransactionValidityError>>>;
      /**
       * Check that the inherents are valid. The inherent data will vary from chain to chain.
       **/
      checkInherents: AugmentedCall<ApiType, (block: SpRuntimeBlock | { header?: any; extrinsics?: any } | string | Uint8Array, data: SpInherentsInherentData | { data?: any } | string | Uint8Array) => Observable<SpInherentsCheckInherentsResult>>;
      /**
       * Finish the current block.
       **/
      finalizeBlock: AugmentedCall<ApiType, () => Observable<SpRuntimeHeader>>;
      /**
       * Generate inherent extrinsics. The inherent data will vary from chain to chain.
       **/
      inherentExtrinsics: AugmentedCall<ApiType, (inherent: SpInherentsInherentData | { data?: any } | string | Uint8Array) => Observable<Vec<Bytes>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0xea93e3f16f3d6962/ */
    collectCollationInfo: {
      /**
       * Collect information about a collation.,, The given `header` is the header of the built block for that, we are collecting the collation info for.
       **/
      collectCollationInfo: AugmentedCall<ApiType, (header: SpRuntimeHeader | { parentHash?: any; number?: any; stateRoot?: any; extrinsicsRoot?: any; digest?: any } | string | Uint8Array) => Observable<CumulusPrimitivesCoreCollationInfo>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0xdf6acb689907609b/ */
    core: {
      /**
       * Execute the given block.
       **/
      executeBlock: AugmentedCall<ApiType, (block: SpRuntimeBlock | { header?: any; extrinsics?: any } | string | Uint8Array) => Observable<Null>>;
      /**
       * Initialize a block with the given header and return the runtime executive mode.
       **/
      initializeBlock: AugmentedCall<ApiType, (header: SpRuntimeHeader | { parentHash?: any; number?: any; stateRoot?: any; extrinsicsRoot?: any; digest?: any } | string | Uint8Array) => Observable<SpRuntimeExtrinsicInclusionMode>>;
      /**
       * Returns the version of the runtime.
       **/
      version: AugmentedCall<ApiType, () => Observable<SpVersionRuntimeVersion>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x91b1c8b16328eb92/ */
    dryRunApi: {
      /**
       * Dry run call V2.
       **/
      dryRunCall: AugmentedCall<ApiType, (origin: AssetHubPolkadotRuntimeOriginCaller | { system: any } | { PolkadotXcm: any } | { CumulusXcm: any } | string | Uint8Array, call: RuntimeCall | IMethod | string | Uint8Array, result_xcms_version: u32 | AnyNumber | Uint8Array) => Observable<Result<XcmRuntimeApisDryRunCallDryRunEffects, XcmRuntimeApisDryRunError>>>;
      /**
       * Dry run XCM program
       **/
      dryRunXcm: AugmentedCall<ApiType, (origin_location: XcmVersionedLocation | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, xcm: XcmVersionedXcm | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array) => Observable<Result<XcmRuntimeApisDryRunXcmDryRunEffects, XcmRuntimeApisDryRunError>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0xde92b8a0426b9bf6/ */
    fungiblesApi: {
      /**
       * Returns the list of all [`Asset`] that an `AccountId` has.
       **/
      queryAccountBalances: AugmentedCall<ApiType, (account: AccountId32 | string | Uint8Array) => Observable<Result<XcmVersionedAssets, AssetsCommonRuntimeApiFungiblesAccessError>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0xfbc577b9d747efd6/ */
    genesisBuilder: {
      /**
       * Build `RuntimeGenesisConfig` from a JSON blob not using any defaults and store it in the, storage.,, In the case of a FRAME-based runtime, this function deserializes the full, `RuntimeGenesisConfig` from the given JSON blob and puts it into the storage. If the, provided JSON blob is incorrect or incomplete or the deserialization fails, an error, is returned.,, Please note that provided JSON blob must contain all `RuntimeGenesisConfig` fields, no, defaults will be used.
       **/
      buildState: AugmentedCall<ApiType, (json: Bytes | string | Uint8Array) => Observable<Result<Null, Text>>>;
      /**
       * Returns a JSON blob representation of the built-in `RuntimeGenesisConfig` identified by, `id`.,, If `id` is `None` the function should return JSON blob representation of the default, `RuntimeGenesisConfig` struct of the runtime. Implementation must provide default, `RuntimeGenesisConfig`.,, Otherwise function returns a JSON representation of the built-in, named, `RuntimeGenesisConfig` preset identified by `id`, or `None` if such preset does not, exist. Returned `Vec<u8>` contains bytes of JSON blob (patch) which comprises a list of, (potentially nested) key-value pairs that are intended for customizing the default, runtime genesis config. The patch shall be merged (rfc7386) with the JSON representation, of the default `RuntimeGenesisConfig` to create a comprehensive genesis config that can, be used in `build_state` method.
       **/
      getPreset: AugmentedCall<ApiType, (id: Option<Text> | null | Uint8Array | Text | string) => Observable<Option<Bytes>>>;
      /**
       * Returns a list of identifiers for available builtin `RuntimeGenesisConfig` presets.,, The presets from the list can be queried with [`GenesisBuilder::get_preset`] method. If, no named presets are provided by the runtime the list is empty.
       **/
      presetNames: AugmentedCall<ApiType, () => Observable<Vec<Text>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x9ffb505aa738d69c/ */
    locationToAccountApi: {
      /**
       * Converts `Location` to `AccountId`.
       **/
      convertLocation: AugmentedCall<ApiType, (location: XcmVersionedLocation | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array) => Observable<Result<AccountId32, XcmRuntimeApisConversionsError>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x37e397fc7c91f5e4/ */
    metadata: {
      /**
       * Returns the metadata of a runtime.
       **/
      metadata: AugmentedCall<ApiType, () => Observable<OpaqueMetadata>>;
      /**
       * Returns the metadata at a given version.,, If the given `version` isn't supported, this will return `None`., Use [`Self::metadata_versions`] to find out about supported metadata version of the runtime.
       **/
      metadataAtVersion: AugmentedCall<ApiType, (version: u32 | AnyNumber | Uint8Array) => Observable<Option<OpaqueMetadata>>>;
      /**
       * Returns the supported metadata versions.,, This can be used to call `metadata_at_version`.
       **/
      metadataVersions: AugmentedCall<ApiType, () => Observable<Vec<u32>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0xf78b278be53f454c/ */
    offchainWorkerApi: {
      /**
       * Starts the off-chain task for given block header.
       **/
      offchainWorker: AugmentedCall<ApiType, (header: SpRuntimeHeader | { parentHash?: any; number?: any; stateRoot?: any; extrinsicsRoot?: any; digest?: any } | string | Uint8Array) => Observable<Null>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0xab3c0572291feb8b/ */
    sessionKeys: {
      /**
       * Decode the given public session keys.,, Returns the list of public raw public keys + key type.
       **/
      decodeSessionKeys: AugmentedCall<ApiType, (encoded: Bytes | string | Uint8Array) => Observable<Option<Vec<ITuple<[Bytes, SpCoreCryptoKeyTypeId]>>>>>;
      /**
       * Generate a set of session keys with optionally using the given seed., The keys should be stored within the keystore exposed via runtime, externalities.,, The seed needs to be a valid `utf8` string.,, Returns the concatenated SCALE encoded public keys.
       **/
      generateSessionKeys: AugmentedCall<ApiType, (seed: Option<Bytes> | null | Uint8Array | Bytes | string) => Observable<Bytes>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0xd2bc9897eed08f15/ */
    taggedTransactionQueue: {
      /**
       * Validate the transaction.,, This method is invoked by the transaction pool to learn details about given transaction., The implementation should make sure to verify the correctness of the transaction, against current state. The given `block_hash` corresponds to the hash of the block, that is used as current state.,, Note that this call may be performed by the pool multiple times and transactions, might be verified in any possible order.
       **/
      validateTransaction: AugmentedCall<ApiType, (source: SpRuntimeTransactionValidityTransactionSource | 'InBlock' | 'Local' | 'External' | number | Uint8Array, tx: Extrinsic | IExtrinsic | string | Uint8Array, block_hash: H256 | string | Uint8Array) => Observable<Result<SpRuntimeTransactionValidityValidTransaction, SpRuntimeTransactionValidityTransactionValidityError>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x37c8bb1350a9a2a8/ */
    transactionPaymentApi: {
      /**
       * 
       **/
      queryFeeDetails: AugmentedCall<ApiType, (uxt: Extrinsic | IExtrinsic | string | Uint8Array, len: u32 | AnyNumber | Uint8Array) => Observable<PalletTransactionPaymentFeeDetails>>;
      /**
       * 
       **/
      queryInfo: AugmentedCall<ApiType, (uxt: Extrinsic | IExtrinsic | string | Uint8Array, len: u32 | AnyNumber | Uint8Array) => Observable<PalletTransactionPaymentRuntimeDispatchInfo>>;
      /**
       * 
       **/
      queryLengthToFee: AugmentedCall<ApiType, (length: u32 | AnyNumber | Uint8Array) => Observable<u128>>;
      /**
       * 
       **/
      queryWeightToFee: AugmentedCall<ApiType, (weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => Observable<u128>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0xf3ff14d5ab527059/ */
    transactionPaymentCallApi: {
      /**
       * Query fee details of a given encoded `Call`.
       **/
      queryCallFeeDetails: AugmentedCall<ApiType, (call: RuntimeCall | IMethod | string | Uint8Array, len: u32 | AnyNumber | Uint8Array) => Observable<PalletTransactionPaymentFeeDetails>>;
      /**
       * Query information of a dispatch class, weight, and fee of a given encoded `Call`.
       **/
      queryCallInfo: AugmentedCall<ApiType, (call: RuntimeCall | IMethod | string | Uint8Array, len: u32 | AnyNumber | Uint8Array) => Observable<PalletTransactionPaymentRuntimeDispatchInfo>>;
      /**
       * Query the output of the current `LengthToFee` given some input.
       **/
      queryLengthToFee: AugmentedCall<ApiType, (length: u32 | AnyNumber | Uint8Array) => Observable<u128>>;
      /**
       * Query the output of the current `WeightToFee` given some input.
       **/
      queryWeightToFee: AugmentedCall<ApiType, (weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => Observable<u128>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x6ff52ee858e6c5bd/ */
    xcmPaymentApi: {
      /**
       * Returns a list of acceptable payment assets.,, # Arguments,, * `xcm_version`: Version.
       **/
      queryAcceptablePaymentAssets: AugmentedCall<ApiType, (xcm_version: u32 | AnyNumber | Uint8Array) => Observable<Result<Vec<XcmVersionedAssetId>, XcmRuntimeApisFeesError>>>;
      /**
       * Get delivery fees for sending a specific `message` to a `destination`., These always come in a specific asset, defined by the chain.,, # Arguments, * `message`: The message that'll be sent, necessary because most delivery fees are based on the,   size of the message., * `destination`: The destination to send the message to. Different destinations may use,   different senders that charge different fees.
       **/
      queryDeliveryFees: AugmentedCall<ApiType, (destination: XcmVersionedLocation | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, message: XcmVersionedXcm | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array) => Observable<Result<XcmVersionedAssets, XcmRuntimeApisFeesError>>>;
      /**
       * Converts a weight into a fee for the specified `AssetId`.,, # Arguments,, * `weight`: convertible `Weight`., * `asset`: `VersionedAssetId`.
       **/
      queryWeightToAssetFee: AugmentedCall<ApiType, (weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array, asset: XcmVersionedAssetId | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array) => Observable<Result<u128, XcmRuntimeApisFeesError>>>;
      /**
       * Returns a weight needed to execute a XCM.,, # Arguments,, * `message`: `VersionedXcm`.
       **/
      queryXcmWeight: AugmentedCall<ApiType, (message: XcmVersionedXcm | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array) => Observable<Result<SpWeightsWeightV2Weight, XcmRuntimeApisFeesError>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
  } // AugmentedCalls
} // declare module

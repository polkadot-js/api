// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/calls';

import type { ApiTypes, AugmentedCall, DecoratedCallBase } from '@polkadot/api-base/types';
import type { Bytes, Null, Option, Result, Struct, Text, Vec, bool, u128, u32, u64 } from '@polkadot/types-codec';
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types';
import type { OpaqueMetadata } from '@polkadot/types/interfaces/metadata';
import type { AccountId32, H256 } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportTokensFungibleUnionOfNativeOrWithId, FrameSystemEventRecord, PalletContractsPrimitivesCode, PalletContractsPrimitivesCodeUploadReturnValue, PalletContractsPrimitivesContractAccessError, PalletContractsPrimitivesContractResult, PalletContractsPrimitivesExecReturnValue, PalletContractsPrimitivesStorageDeposit, PalletContractsWasmDeterminism, PalletTransactionPaymentFeeDetails, PalletTransactionPaymentRuntimeDispatchInfo, SpAuthorityDiscoveryAppPublic, SpConsensusBabeAppPublic, SpConsensusBabeBabeConfiguration, SpConsensusBabeEpoch, SpConsensusBeefyDoubleVotingProof, SpConsensusBeefyEcdsaCryptoPublic, SpConsensusBeefyValidatorSet, SpConsensusGrandpaAppPublic, SpConsensusGrandpaEquivocationProof, SpConsensusSlotsEquivocationProof, SpCoreCryptoKeyTypeId, SpInherentsCheckInherentsResult, SpInherentsInherentData, SpMixnetMixnode, SpMixnetMixnodesErr, SpMixnetSessionStatus, SpMmrPrimitivesError, SpMmrPrimitivesLeafProof, SpRuntimeBlock, SpRuntimeDispatchError, SpRuntimeExtrinsicInclusionMode, SpRuntimeHeader, SpRuntimeTransactionValidityTransactionSource, SpRuntimeTransactionValidityTransactionValidityError, SpRuntimeTransactionValidityValidTransaction, SpStatementStoreRuntimeApiInvalidStatement, SpStatementStoreRuntimeApiStatementSource, SpStatementStoreRuntimeApiValidStatement, SpStatementStoreStatement, SpVersionRuntimeVersion, SpWeightsWeightV2Weight } from '@polkadot/types/lookup';
import type { Observable } from '@polkadot/types/types';

export type __AugmentedCall<ApiType extends ApiTypes> = AugmentedCall<ApiType>;
export type __DecoratedCallBase<ApiType extends ApiTypes> = DecoratedCallBase<ApiType>;

declare module '@polkadot/api-base/types/calls' {
  interface AugmentedCalls<ApiType extends ApiTypes> {
    /** 0xbc9d89904f5b923f/ */
    accountNonceApi: {
      /**
       * Get current account nonce of given `AccountId`.
       **/
      accountNonce: AugmentedCall<ApiType, (account: SpCoreCryptoAccountId32 | string | Uint8Array) => Observable<u32>>;
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
      getReserves: AugmentedCall<ApiType, (asset1: FrameSupportTokensFungibleUnionOfNativeOrWithId | { Native: any } | { WithId: any } | string | Uint8Array, asset2: FrameSupportTokensFungibleUnionOfNativeOrWithId | { Native: any } | { WithId: any } | string | Uint8Array) => Observable<Option<ITuple<[u128, u128]>>>>;
      /**
       * Provides a quote for [`Pallet::swap_exact_tokens_for_tokens`].,, Note that the price may have changed by the time the transaction is executed., (Use `amount_out_min` to control slippage.)
       **/
      quotePriceExactTokensForTokens: AugmentedCall<ApiType, (asset1: FrameSupportTokensFungibleUnionOfNativeOrWithId | { Native: any } | { WithId: any } | string | Uint8Array, asset2: FrameSupportTokensFungibleUnionOfNativeOrWithId | { Native: any } | { WithId: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, include_fee: bool | boolean | Uint8Array) => Observable<Option<u128>>>;
      /**
       * Provides a quote for [`Pallet::swap_tokens_for_exact_tokens`].,, Note that the price may have changed by the time the transaction is executed., (Use `amount_in_max` to control slippage.)
       **/
      quotePriceTokensForExactTokens: AugmentedCall<ApiType, (asset1: FrameSupportTokensFungibleUnionOfNativeOrWithId | { Native: any } | { WithId: any } | string | Uint8Array, asset2: FrameSupportTokensFungibleUnionOfNativeOrWithId | { Native: any } | { WithId: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, include_fee: bool | boolean | Uint8Array) => Observable<Option<u128>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x8453b50b22293977/ */
    assetsApi: {
      /**
       * Returns the list of `AssetId`s and corresponding balance that an `AccountId` has.
       **/
      accountBalances: AugmentedCall<ApiType, (account: SpCoreCryptoAccountId32 | string | Uint8Array) => Observable<Vec<ITuple<[u32, u128]>>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x687ad44ad37f03c2/ */
    authorityDiscoveryApi: {
      /**
       * Retrieve authority identifiers of the current and next authority set.
       **/
      authorities: AugmentedCall<ApiType, () => Observable<Vec<SpAuthorityDiscoveryAppPublic>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0xcbca25e39f142387/ */
    babeApi: {
      /**
       * Return the configuration for BABE.
       **/
      configuration: AugmentedCall<ApiType, () => Observable<SpConsensusBabeBabeConfiguration>>;
      /**
       * Returns information regarding the current epoch.
       **/
      currentEpoch: AugmentedCall<ApiType, () => Observable<SpConsensusBabeEpoch>>;
      /**
       * Returns the slot that started the current epoch.
       **/
      currentEpochStart: AugmentedCall<ApiType, () => Observable<SpConsensusSlotsSlot>>;
      /**
       * Generates a proof of key ownership for the given authority in the, current epoch. An example usage of this module is coupled with the, session historical module to prove that a given authority key is, tied to a given staking identity during a specific session. Proofs, of key ownership are necessary for submitting equivocation reports., NOTE: even though the API takes a `slot` as parameter the current, implementations ignores this parameter and instead relies on this, method being called at the correct block height, i.e. any point at, which the epoch for the given slot is live on-chain. Future, implementations will instead use indexed data through an offchain, worker, not requiring older states to be available.
       **/
      generateKeyOwnershipProof: AugmentedCall<ApiType, (slot: SpConsensusSlotsSlot | AnyNumber | Uint8Array, authority_id: SpConsensusBabeAppPublic | string | Uint8Array) => Observable<Option<Bytes>>>;
      /**
       * Returns information regarding the next epoch (which was already, previously announced).
       **/
      nextEpoch: AugmentedCall<ApiType, () => Observable<SpConsensusBabeEpoch>>;
      /**
       * Submits an unsigned extrinsic to report an equivocation. The caller, must provide the equivocation proof and a key ownership proof, (should be obtained using `generate_key_ownership_proof`). The, extrinsic will be unsigned and should only be accepted for local, authorship (not to be broadcast to the network). This method returns, `None` when creation of the extrinsic fails, e.g. if equivocation, reporting is disabled for the given runtime (i.e. this method is, hardcoded to return `None`). Only useful in an offchain context.
       **/
      submitReportEquivocationUnsignedExtrinsic: AugmentedCall<ApiType, (equivocation_proof: SpConsensusSlotsEquivocationProof | { offender?: any; slot?: any; firstHeader?: any; secondHeader?: any } | string | Uint8Array, key_owner_proof: SpConsensusBabeOpaqueKeyOwnershipProof | string | Uint8Array) => Observable<Option<Null>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x49eaaf1b548a0cb0/ */
    beefyApi: {
      /**
       * Return the block number where BEEFY consensus is enabled/started
       **/
      beefyGenesis: AugmentedCall<ApiType, () => Observable<Option<u32>>>;
      /**
       * Generates a proof of key ownership for the given authority in the, given set. An example usage of this module is coupled with the, session historical module to prove that a given authority key is, tied to a given staking identity during a specific session. Proofs, of key ownership are necessary for submitting equivocation reports., NOTE: even though the API takes a `set_id` as parameter the current, implementations ignores this parameter and instead relies on this, method being called at the correct block height, i.e. any point at, which the given set id is live on-chain. Future implementations will, instead use indexed data through an offchain worker, not requiring, older states to be available.
       **/
      generateKeyOwnershipProof: AugmentedCall<ApiType, (set_id: u64 | AnyNumber | Uint8Array, authority_id: SpConsensusBeefyEcdsaCryptoPublic | string | Uint8Array) => Observable<Option<Bytes>>>;
      /**
       * Submits an unsigned extrinsic to report a double voting equivocation. The caller, must provide the double voting proof and a key ownership proof, (should be obtained using `generate_key_ownership_proof`). The, extrinsic will be unsigned and should only be accepted for local, authorship (not to be broadcast to the network). This method returns, `None` when creation of the extrinsic fails, e.g. if equivocation, reporting is disabled for the given runtime (i.e. this method is, hardcoded to return `None`). Only useful in an offchain context.
       **/
      submitReportDoubleVotingUnsignedExtrinsic: AugmentedCall<ApiType, (equivocation_proof: SpConsensusBeefyDoubleVotingProof | { first?: any; second?: any } | string | Uint8Array, key_owner_proof: SpRuntimeOpaqueValue | string | Uint8Array) => Observable<Option<Null>>>;
      /**
       * Return the current active BEEFY validator set
       **/
      validatorSet: AugmentedCall<ApiType, () => Observable<Option<SpConsensusBeefyValidatorSet>>>;
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
      applyExtrinsic: AugmentedCall<ApiType, (extrinsic: SpRuntimeUncheckedExtrinsic | string | Uint8Array) => Observable<Result<Result<Null, SpRuntimeDispatchError>, SpRuntimeTransactionValidityTransactionValidityError>>>;
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
    /** 0x68b66ba122c93fa7/ */
    contractsApi: {
      /**
       * Perform a call from a specified account to a given contract.,, See [`crate::Pallet::bare_call`].
       **/
      call: AugmentedCall<ApiType, (origin: SpCoreCryptoAccountId32 | string | Uint8Array, dest: SpCoreCryptoAccountId32 | string | Uint8Array, value: u128 | AnyNumber | Uint8Array, gas_limit: Option<SpWeightsWeightV2Weight> | null | Uint8Array | SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string, storage_deposit_limit: Option<u128> | null | Uint8Array | u128 | AnyNumber, input_data: Bytes | string | Uint8Array) => Observable<{
    readonly gasConsumed: SpWeightsWeightV2Weight;
    readonly gasRequired: SpWeightsWeightV2Weight;
    readonly storageDeposit: PalletContractsPrimitivesStorageDeposit;
    readonly debugMessage: Bytes;
    readonly result: Result<PalletContractsPrimitivesExecReturnValue, SpRuntimeDispatchError>;
    readonly events: Option<Vec<FrameSystemEventRecord>>;
  } & Struct>>;
      /**
       * Query a given storage key in a given contract.,, Returns `Ok(Some(Vec<u8>))` if the storage value exists under the given key in the, specified account and `Ok(None)` if it doesn't. If the account specified by the address, doesn't exist, or doesn't have a contract then `Err` is returned.
       **/
      getStorage: AugmentedCall<ApiType, (address: SpCoreCryptoAccountId32 | string | Uint8Array, key: Bytes | string | Uint8Array) => Observable<Result<Option<Bytes>, PalletContractsPrimitivesContractAccessError>>>;
      /**
       * Instantiate a new contract.,, See `[crate::Pallet::bare_instantiate]`.
       **/
      instantiate: AugmentedCall<ApiType, (origin: SpCoreCryptoAccountId32 | string | Uint8Array, value: u128 | AnyNumber | Uint8Array, gas_limit: Option<SpWeightsWeightV2Weight> | null | Uint8Array | SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string, storage_deposit_limit: Option<u128> | null | Uint8Array | u128 | AnyNumber, code: PalletContractsPrimitivesCode | { Upload: any } | { Existing: any } | string | Uint8Array, data: Bytes | string | Uint8Array, salt: Bytes | string | Uint8Array) => Observable<PalletContractsPrimitivesContractResult>>;
      /**
       * Upload new code without instantiating a contract from it.,, See [`crate::Pallet::bare_upload_code`].
       **/
      uploadCode: AugmentedCall<ApiType, (origin: SpCoreCryptoAccountId32 | string | Uint8Array, code: Bytes | string | Uint8Array, storage_deposit_limit: Option<u128> | null | Uint8Array | u128 | AnyNumber, determinism: PalletContractsWasmDeterminism | 'Enforced' | 'Relaxed' | number | Uint8Array) => Observable<Result<PalletContractsPrimitivesCodeUploadReturnValue, SpRuntimeDispatchError>>>;
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
    /** 0xfbc577b9d747efd6/ */
    genesisBuilder: {
      /**
       * Build `RuntimeGenesisConfig` from a JSON blob not using any defaults and store it in the, storage.,, In the case of a FRAME-based runtime, this function deserializes the full `RuntimeGenesisConfig` from the given JSON blob and, puts it into the storage. If the provided JSON blob is incorrect or incomplete or the, deserialization fails, an error is returned.,, Please note that provided JSON blob must contain all `RuntimeGenesisConfig` fields, no, defaults will be used.
       **/
      buildState: AugmentedCall<ApiType, (json: Bytes | string | Uint8Array) => Observable<Result<Null, Text>>>;
      /**
       * Returns a JSON blob representation of the built-in `RuntimeGenesisConfig` identified by, `id`.,, If `id` is `None` the function returns JSON blob representation of the default, `RuntimeGenesisConfig` struct of the runtime. Implementation must provide default, `RuntimeGenesisConfig`.,, Otherwise function returns a JSON representation of the built-in, named, `RuntimeGenesisConfig` preset identified by `id`, or `None` if such preset does not, exists. Returned `Vec<u8>` contains bytes of JSON blob (patch) which comprises a list of, (potentially nested) key-value pairs that are intended for customizing the default, runtime genesis config. The patch shall be merged (rfc7386) with the JSON representation, of the default `RuntimeGenesisConfig` to create a comprehensive genesis config that can, be used in `build_state` method.
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
    /** 0xed99c5acb25eedf5/ */
    grandpaApi: {
      /**
       * Get current GRANDPA authority set id.
       **/
      currentSetId: AugmentedCall<ApiType, () => Observable<u64>>;
      /**
       * Generates a proof of key ownership for the given authority in the, given set. An example usage of this module is coupled with the, session historical module to prove that a given authority key is, tied to a given staking identity during a specific session. Proofs, of key ownership are necessary for submitting equivocation reports., NOTE: even though the API takes a `set_id` as parameter the current, implementations ignore this parameter and instead rely on this, method being called at the correct block height, i.e. any point at, which the given set id is live on-chain. Future implementations will, instead use indexed data through an offchain worker, not requiring, older states to be available.
       **/
      generateKeyOwnershipProof: AugmentedCall<ApiType, (set_id: u64 | AnyNumber | Uint8Array, authority_id: SpConsensusGrandpaAppPublic | string | Uint8Array) => Observable<Option<Bytes>>>;
      /**
       * Get the current GRANDPA authorities and weights. This should not change except, for when changes are scheduled and the corresponding delay has passed.,, When called at block B, it will return the set of authorities that should be, used to finalize descendants of this block (B+1, B+2, ...). The block B itself, is finalized by the authorities from block B-1.
       **/
      grandpaAuthorities: AugmentedCall<ApiType, () => Observable<Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>>>;
      /**
       * Submits an unsigned extrinsic to report an equivocation. The caller, must provide the equivocation proof and a key ownership proof, (should be obtained using `generate_key_ownership_proof`). The, extrinsic will be unsigned and should only be accepted for local, authorship (not to be broadcast to the network). This method returns, `None` when creation of the extrinsic fails, e.g. if equivocation, reporting is disabled for the given runtime (i.e. this method is, hardcoded to return `None`). Only useful in an offchain context.
       **/
      submitReportEquivocationUnsignedExtrinsic: AugmentedCall<ApiType, (equivocation_proof: SpConsensusGrandpaEquivocationProof | { setId?: any; equivocation?: any } | string | Uint8Array, key_owner_proof: SpRuntimeOpaqueValue | string | Uint8Array) => Observable<Option<Null>>>;
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
      metadata: AugmentedCall<ApiType, () => Observable<SpCoreOpaqueMetadata>>;
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
    /** 0x6fd7c327202e4a8d/ */
    mixnetApi: {
      /**
       * Get the mixnode set for the current session.
       **/
      currentMixnodes: AugmentedCall<ApiType, () => Observable<Result<Vec<SpMixnetMixnode>, SpMixnetMixnodesErr>>>;
      /**
       * Try to register a mixnode for the next session.,, If a registration extrinsic is submitted, `true` is returned. The caller should avoid, calling `maybe_register` again for a few blocks, to give the submitted extrinsic a, chance to get included.,, With the above exception, `maybe_register` is designed to be called every block. Most, of the time it will not do anything, for example:,, - If it is not an appropriate time to submit a registration extrinsic., - If the local node has already registered a mixnode for the next session., - If the local node is not permitted to register a mixnode for the next session.,, `session_index` should match `session_status().current_index`; if it does not, `false`, is returned immediately.
       **/
      maybeRegister: AugmentedCall<ApiType, (session_index: u32 | AnyNumber | Uint8Array, mixnode: SpMixnetMixnode | { kxPublic?: any; peerId?: any; externalAddresses?: any } | string | Uint8Array) => Observable<bool>>;
      /**
       * Get the mixnode set for the previous session.
       **/
      prevMixnodes: AugmentedCall<ApiType, () => Observable<Result<Vec<SpMixnetMixnode>, SpMixnetMixnodesErr>>>;
      /**
       * Get the index and phase of the current session.
       **/
      sessionStatus: AugmentedCall<ApiType, () => Observable<SpMixnetSessionStatus>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x91d5df18b0d2cf58/ */
    mmrApi: {
      /**
       * Generate MMR proof for a series of block numbers. If `best_known_block_number = Some(n)`,, use historical MMR state at given block height `n`. Else, use current MMR state.
       **/
      generateProof: AugmentedCall<ApiType, (block_numbers: Vec<u32> | (u32 | AnyNumber | Uint8Array)[], best_known_block_number: Option<u32> | null | Uint8Array | u32 | AnyNumber) => Observable<Result<ITuple<[Vec<Bytes>, SpMmrPrimitivesLeafProof]>, SpMmrPrimitivesError>>>;
      /**
       * Return the number of MMR blocks in the chain.
       **/
      mmrLeafCount: AugmentedCall<ApiType, () => Observable<Result<u64, SpMmrPrimitivesError>>>;
      /**
       * Return the on-chain MMR root hash.
       **/
      mmrRoot: AugmentedCall<ApiType, () => Observable<Result<H256, SpMmrPrimitivesError>>>;
      /**
       * Verify MMR proof against on-chain MMR for a batch of leaves.,, Note this function will use on-chain MMR root hash and check if the proof matches the hash., Note, the leaves should be sorted such that corresponding leaves and leaf indices have the, same position in both the `leaves` vector and the `leaf_indices` vector contained in the [LeafProof]
       **/
      verifyProof: AugmentedCall<ApiType, (leaves: Vec<Bytes> | (Bytes | string | Uint8Array)[], proof: SpMmrPrimitivesLeafProof | { leafIndices?: any; leafCount?: any; items?: any } | string | Uint8Array) => Observable<Result<Null, SpMmrPrimitivesError>>>;
      /**
       * Verify MMR proof against given root hash for a batch of leaves.,, Note this function does not require any on-chain storage - the, proof is verified against given MMR root hash.,, Note, the leaves should be sorted such that corresponding leaves and leaf indices have the, same position in both the `leaves` vector and the `leaf_indices` vector contained in the [LeafProof]
       **/
      verifyProofStateless: AugmentedCall<ApiType, (root: PrimitiveTypesH256 | string | Uint8Array, leaves: Vec<Bytes> | (Bytes | string | Uint8Array)[], proof: SpMmrPrimitivesLeafProof | { leafIndices?: any; leafCount?: any; items?: any } | string | Uint8Array) => Observable<Result<Null, SpMmrPrimitivesError>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x899a250cbe84f250/ */
    nftsApi: {
      /**
       * 
       **/
      attribute: AugmentedCall<ApiType, (collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array, key: Bytes | string | Uint8Array) => Observable<Option<Bytes>>>;
      /**
       * 
       **/
      collectionAttribute: AugmentedCall<ApiType, (collection: u32 | AnyNumber | Uint8Array, key: Bytes | string | Uint8Array) => Observable<Option<Bytes>>>;
      /**
       * 
       **/
      collectionOwner: AugmentedCall<ApiType, (collection: u32 | AnyNumber | Uint8Array) => Observable<Option<AccountId32>>>;
      /**
       * 
       **/
      customAttribute: AugmentedCall<ApiType, (account: SpCoreCryptoAccountId32 | string | Uint8Array, collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array, key: Bytes | string | Uint8Array) => Observable<Option<Bytes>>>;
      /**
       * 
       **/
      owner: AugmentedCall<ApiType, (collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array) => Observable<Option<AccountId32>>>;
      /**
       * 
       **/
      systemAttribute: AugmentedCall<ApiType, (collection: u32 | AnyNumber | Uint8Array, item: Option<u32> | null | Uint8Array | u32 | AnyNumber, key: Bytes | string | Uint8Array) => Observable<Option<Bytes>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x17a6bc0d0062aeb3/ */
    nominationPoolsApi: {
      /**
       * Returns the equivalent points of `new_funds` for a given pool.
       **/
      balanceToPoints: AugmentedCall<ApiType, (pool_id: u32 | AnyNumber | Uint8Array, new_funds: u128 | AnyNumber | Uint8Array) => Observable<u128>>;
      /**
       * Returns true if the delegated funds of the pool `member` needs migration.,, Once a pool has successfully migrated to the strategy, [`DelegateStake`](pallet_nomination_pools::adapter::DelegateStake), the funds of the, member can be migrated from pool account to the member's account. Use, [`migrate_delegation`](pallet_nomination_pools::Call::migrate_delegation), to migrate the funds of the pool member.
       **/
      memberNeedsDelegateMigration: AugmentedCall<ApiType, (member: SpCoreCryptoAccountId32 | string | Uint8Array) => Observable<bool>>;
      /**
       * Returns the pending slash for a given pool member.
       **/
      memberPendingSlash: AugmentedCall<ApiType, (member: SpCoreCryptoAccountId32 | string | Uint8Array) => Observable<u128>>;
      /**
       * Returns the pending rewards for the member that the AccountId was given for.
       **/
      pendingRewards: AugmentedCall<ApiType, (who: SpCoreCryptoAccountId32 | string | Uint8Array) => Observable<u128>>;
      /**
       * Returns the equivalent balance of `points` for a given pool.
       **/
      pointsToBalance: AugmentedCall<ApiType, (pool_id: u32 | AnyNumber | Uint8Array, points: u128 | AnyNumber | Uint8Array) => Observable<u128>>;
      /**
       * Returns true if the pool with `pool_id` needs migration.,, This can happen when the `pallet-nomination-pools` has switched to using strategy, [`DelegateStake`](pallet_nomination_pools::adapter::DelegateStake) but the pool, still has funds that were staked using the older strategy, [TransferStake](pallet_nomination_pools::adapter::TransferStake). Use, [`migrate_pool_to_delegate_stake`](pallet_nomination_pools::Call::migrate_pool_to_delegate_stake), to migrate the pool.
       **/
      poolNeedsDelegateMigration: AugmentedCall<ApiType, (pool_id: u32 | AnyNumber | Uint8Array) => Observable<bool>>;
      /**
       * Returns the pending slash for a given pool.
       **/
      poolPendingSlash: AugmentedCall<ApiType, (pool_id: u32 | AnyNumber | Uint8Array) => Observable<u128>>;
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
    /** 0x18ef58a3b67ba770/ */
    stakingApi: {
      /**
       * Returns the page count of exposures for a validator `account` in a given era.
       **/
      erasStakersPageCount: AugmentedCall<ApiType, (era: u32 | AnyNumber | Uint8Array, account: SpCoreCryptoAccountId32 | string | Uint8Array) => Observable<u32>>;
      /**
       * Returns the nominations quota for a nominator with a given balance.
       **/
      nominationsQuota: AugmentedCall<ApiType, (balance: u128 | AnyNumber | Uint8Array) => Observable<u32>>;
      /**
       * Returns true if validator `account` has pages to be claimed for the given era.
       **/
      pendingRewards: AugmentedCall<ApiType, (era: u32 | AnyNumber | Uint8Array, account: SpCoreCryptoAccountId32 | string | Uint8Array) => Observable<bool>>;
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
      validateTransaction: AugmentedCall<ApiType, (source: SpRuntimeTransactionValidityTransactionSource | 'InBlock' | 'Local' | 'External' | number | Uint8Array, tx: SpRuntimeUncheckedExtrinsic | string | Uint8Array, block_hash: PrimitiveTypesH256 | string | Uint8Array) => Observable<Result<SpRuntimeTransactionValidityValidTransaction, SpRuntimeTransactionValidityTransactionValidityError>>>;
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
      queryFeeDetails: AugmentedCall<ApiType, (uxt: SpRuntimeUncheckedExtrinsic | string | Uint8Array, len: u32 | AnyNumber | Uint8Array) => Observable<PalletTransactionPaymentFeeDetails>>;
      /**
       * 
       **/
      queryInfo: AugmentedCall<ApiType, (uxt: SpRuntimeUncheckedExtrinsic | string | Uint8Array, len: u32 | AnyNumber | Uint8Array) => Observable<PalletTransactionPaymentRuntimeDispatchInfo>>;
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
      queryCallFeeDetails: AugmentedCall<ApiType, (call: KitchensinkRuntimeRuntimeCall | IMethod | string | Uint8Array, len: u32 | AnyNumber | Uint8Array) => Observable<PalletTransactionPaymentFeeDetails>>;
      /**
       * Query information of a dispatch class, weight, and fee of a given encoded `Call`.
       **/
      queryCallInfo: AugmentedCall<ApiType, (call: KitchensinkRuntimeRuntimeCall | IMethod | string | Uint8Array, len: u32 | AnyNumber | Uint8Array) => Observable<PalletTransactionPaymentRuntimeDispatchInfo>>;
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
    /** 0xbe9fb0c91a8046cf/ */
    validateStatement: {
      /**
       * Validate the statement.
       **/
      validateStatement: AugmentedCall<ApiType, (source: SpStatementStoreRuntimeApiStatementSource | 'Chain' | 'Network' | 'Local' | number | Uint8Array, statement: SpStatementStoreStatement | { proof?: any; decryptionKey?: any; channel?: any; priority?: any; numTopics?: any; topics?: any; data?: any } | string | Uint8Array) => Observable<Result<SpStatementStoreRuntimeApiValidStatement, SpStatementStoreRuntimeApiInvalidStatement>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
  } // AugmentedCalls
} // declare module

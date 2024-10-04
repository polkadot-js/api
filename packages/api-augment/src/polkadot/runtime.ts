// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/calls';

import type { ApiTypes, AugmentedCall, DecoratedCallBase } from '@polkadot/api-base/types';
import type { BTreeMap, BitVec, Bytes, Null, Option, Result, Text, Vec, bool, u128, u32, u64 } from '@polkadot/types-codec';
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types';
import type { OpaqueMetadata } from '@polkadot/types/interfaces/metadata';
import type { AccountId32, H256 } from '@polkadot/types/interfaces/runtime';
import type { PalletTransactionPaymentFeeDetails, PalletTransactionPaymentRuntimeDispatchInfo, PolkadotCorePrimitivesInboundDownwardMessage, PolkadotCorePrimitivesInboundHrmpMessage, PolkadotPrimitivesV7ApprovalVotingParams, PolkadotPrimitivesV7AsyncBackingAsyncBackingParams, PolkadotPrimitivesV7AsyncBackingBackingState, PolkadotPrimitivesV7CandidateCommitments, PolkadotPrimitivesV7CandidateEvent, PolkadotPrimitivesV7CommittedCandidateReceipt, PolkadotPrimitivesV7CoreState, PolkadotPrimitivesV7DisputeState, PolkadotPrimitivesV7ExecutorParams, PolkadotPrimitivesV7GroupRotationInfo, PolkadotPrimitivesV7OccupiedCoreAssumption, PolkadotPrimitivesV7PersistedValidationData, PolkadotPrimitivesV7PvfCheckStatement, PolkadotPrimitivesV7ScrapedOnChainVotes, PolkadotPrimitivesV7SessionInfo, PolkadotPrimitivesV7SlashingDisputeProof, PolkadotPrimitivesV7SlashingPendingSlashes, PolkadotPrimitivesV7ValidatorAppPublic, PolkadotPrimitivesV7ValidatorAppSignature, PolkadotRuntimeOriginCaller, SpAuthorityDiscoveryAppPublic, SpConsensusBabeAppPublic, SpConsensusBabeBabeConfiguration, SpConsensusBabeEpoch, SpConsensusBeefyDoubleVotingProof, SpConsensusBeefyEcdsaCryptoPublic, SpConsensusBeefyMmrBeefyAuthoritySet, SpConsensusBeefyValidatorSet, SpConsensusGrandpaAppPublic, SpConsensusGrandpaEquivocationProof, SpConsensusSlotsEquivocationProof, SpCoreCryptoKeyTypeId, SpInherentsCheckInherentsResult, SpInherentsInherentData, SpMmrPrimitivesError, SpMmrPrimitivesLeafProof, SpRuntimeBlock, SpRuntimeDispatchError, SpRuntimeExtrinsicInclusionMode, SpRuntimeHeader, SpRuntimeTransactionValidityTransactionSource, SpRuntimeTransactionValidityTransactionValidityError, SpRuntimeTransactionValidityValidTransaction, SpVersionRuntimeVersion, SpWeightsWeightV2Weight, XcmRuntimeApisConversionsError, XcmRuntimeApisDryRunCallDryRunEffects, XcmRuntimeApisDryRunError, XcmRuntimeApisDryRunXcmDryRunEffects, XcmRuntimeApisFeesError, XcmVersionedAssetId, XcmVersionedAssets, XcmVersionedLocation, XcmVersionedXcm } from '@polkadot/types/lookup';
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
       * Submits an unsigned extrinsic to report an equivocation. The caller, must provide the equivocation proof and a key ownership proof, (should be obtained using `generate_key_ownership_proof`). The, extrinsic will be unsigned and should only be accepted for local, authorship (not to be broadcast to the network). This method returns, `None` when creation of the extrinsic fails, e.g. if equivocation, reporting is disabled for the given runtime (i.e. this method is, hardcoded to return `None`). Only useful in an offchain context.
       **/
      submitReportEquivocationUnsignedExtrinsic: AugmentedCall<ApiType, (equivocation_proof: SpConsensusBeefyDoubleVotingProof | { first?: any; second?: any } | string | Uint8Array, key_owner_proof: SpRuntimeOpaqueValue | string | Uint8Array) => Observable<Option<Null>>>;
      /**
       * Return the current active BEEFY validator set
       **/
      validatorSet: AugmentedCall<ApiType, () => Observable<Option<SpConsensusBeefyValidatorSet>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x2a5e924655399e60/ */
    beefyMmrApi: {
      /**
       * Return the currently active BEEFY authority set proof.
       **/
      authoritySetProof: AugmentedCall<ApiType, () => Observable<SpConsensusBeefyMmrBeefyAuthoritySet>>;
      /**
       * Return the next/queued BEEFY authority set proof.
       **/
      nextAuthoritySetProof: AugmentedCall<ApiType, () => Observable<SpConsensusBeefyMmrBeefyAuthoritySet>>;
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
       * Dry run call.
       **/
      dryRunCall: AugmentedCall<ApiType, (origin: PolkadotRuntimeOriginCaller | { system: any } | { Void: any } | { Origins: any } | { ParachainsOrigin: any } | { XcmPallet: any } | string | Uint8Array, call: PolkadotRuntimeRuntimeCall | IMethod | string | Uint8Array) => Observable<Result<XcmRuntimeApisDryRunCallDryRunEffects, XcmRuntimeApisDryRunError>>>;
      /**
       * Dry run XCM program
       **/
      dryRunXcm: AugmentedCall<ApiType, (origin_location: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, xcm: XcmVersionedXcm | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array) => Observable<Result<XcmRuntimeApisDryRunXcmDryRunEffects, XcmRuntimeApisDryRunError>>>;
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
    /** 0x9ffb505aa738d69c/ */
    locationToAccountApi: {
      /**
       * Converts `Location` to `AccountId`.
       **/
      convertLocation: AugmentedCall<ApiType, (location: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array) => Observable<Result<AccountId32, XcmRuntimeApisConversionsError>>>;
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
    /** 0xaf2c0297a23e6d3d/ */
    parachainHost: {
      /**
       * Approval voting configuration parameters
       **/
      approvalVotingParams: AugmentedCall<ApiType, () => Observable<PolkadotPrimitivesV7ApprovalVotingParams>>;
      /**
       * Returns the persisted validation data for the given `ParaId` along with the corresponding, validation code hash. Instead of accepting assumption about the para, matches the validation, data hash against an expected one and yields `None` if they're not equal.
       **/
      assumedValidationData: AugmentedCall<ApiType, (para_id: PolkadotParachainPrimitivesPrimitivesId | AnyNumber | Uint8Array, expected_persisted_validation_data_hash: PrimitiveTypesH256 | string | Uint8Array) => Observable<Option<ITuple<[PolkadotPrimitivesV7PersistedValidationData, H256]>>>>;
      /**
       * Returns candidate's acceptance limitations for asynchronous backing for a relay parent.
       **/
      asyncBackingParams: AugmentedCall<ApiType, () => Observable<PolkadotPrimitivesV7AsyncBackingAsyncBackingParams>>;
      /**
       * Yields information on all availability cores as relevant to the child block., Cores are either free or occupied. Free cores can have paras assigned to them.
       **/
      availabilityCores: AugmentedCall<ApiType, () => Observable<Vec<PolkadotPrimitivesV7CoreState>>>;
      /**
       * Get a vector of events concerning candidates that occurred within a block.
       **/
      candidateEvents: AugmentedCall<ApiType, () => Observable<Vec<PolkadotPrimitivesV7CandidateEvent>>>;
      /**
       * Get the receipt of a candidate pending availability. This returns `Some` for any paras, assigned to occupied cores in `availability_cores` and `None` otherwise.
       **/
      candidatePendingAvailability: AugmentedCall<ApiType, (para_id: PolkadotParachainPrimitivesPrimitivesId | AnyNumber | Uint8Array) => Observable<Option<PolkadotPrimitivesV7CommittedCandidateReceipt>>>;
      /**
       * Elastic scaling support
       **/
      candidatesPendingAvailability: AugmentedCall<ApiType, (para_id: PolkadotParachainPrimitivesPrimitivesId | AnyNumber | Uint8Array) => Observable<Vec<PolkadotPrimitivesV7CommittedCandidateReceipt>>>;
      /**
       * Checks if the given validation outputs pass the acceptance criteria.
       **/
      checkValidationOutputs: AugmentedCall<ApiType, (para_id: PolkadotParachainPrimitivesPrimitivesId | AnyNumber | Uint8Array, outputs: PolkadotPrimitivesV7CandidateCommitments | { upwardMessages?: any; horizontalMessages?: any; newValidationCode?: any; headData?: any; processedDownwardMessages?: any; hrmpWatermark?: any } | string | Uint8Array) => Observable<bool>>;
      /**
       * Claim queue
       **/
      claimQueue: AugmentedCall<ApiType, () => Observable<BTreeMap<u32, Vec<u32>>>>;
      /**
       * Returns a list of all disabled validators at the given block.
       **/
      disabledValidators: AugmentedCall<ApiType, () => Observable<Vec<u32>>>;
      /**
       * Returns all onchain disputes.
       **/
      disputes: AugmentedCall<ApiType, () => Observable<Vec<ITuple<[u32, H256, PolkadotPrimitivesV7DisputeState]>>>>;
      /**
       * Get all the pending inbound messages in the downward message queue for a para.
       **/
      dmqContents: AugmentedCall<ApiType, (recipient: PolkadotParachainPrimitivesPrimitivesId | AnyNumber | Uint8Array) => Observable<Vec<PolkadotCorePrimitivesInboundDownwardMessage>>>;
      /**
       * Get the contents of all channels addressed to the given recipient. Channels that have no, messages in them are also included.
       **/
      inboundHrmpChannelsContents: AugmentedCall<ApiType, (recipient: PolkadotParachainPrimitivesPrimitivesId | AnyNumber | Uint8Array) => Observable<BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>>>;
      /**
       * Returns a merkle proof of a validator session key., NOTE: This function is only available since parachain host version 5.
       **/
      keyOwnershipProof: AugmentedCall<ApiType, (validator_id: PolkadotPrimitivesV7ValidatorAppPublic | string | Uint8Array) => Observable<Option<Bytes>>>;
      /**
       * Get the minimum number of backing votes for a parachain candidate., This is a staging method! Do not use on production runtimes!
       **/
      minimumBackingVotes: AugmentedCall<ApiType, () => Observable<u32>>;
      /**
       * Get node features., This is a staging method! Do not use on production runtimes!
       **/
      nodeFeatures: AugmentedCall<ApiType, () => Observable<BitVec>>;
      /**
       * Scrape dispute relevant from on-chain, backing votes and resolved disputes.
       **/
      onChainVotes: AugmentedCall<ApiType, () => Observable<Option<PolkadotPrimitivesV7ScrapedOnChainVotes>>>;
      /**
       * Returns the state of parachain backing for a given para.
       **/
      paraBackingState: AugmentedCall<ApiType, (_: PolkadotParachainPrimitivesPrimitivesId | AnyNumber | Uint8Array) => Observable<Option<PolkadotPrimitivesV7AsyncBackingBackingState>>>;
      /**
       * Yields the persisted validation data for the given `ParaId` along with an assumption that, should be used if the para currently occupies a core.,, Returns `None` if either the para is not registered or the assumption is `Freed`, and the para already occupies a core.
       **/
      persistedValidationData: AugmentedCall<ApiType, (para_id: PolkadotParachainPrimitivesPrimitivesId | AnyNumber | Uint8Array, assumption: PolkadotPrimitivesV7OccupiedCoreAssumption | 'Included' | 'TimedOut' | 'Free' | number | Uint8Array) => Observable<Option<PolkadotPrimitivesV7PersistedValidationData>>>;
      /**
       * Returns code hashes of PVFs that require pre-checking by validators in the active set.,, NOTE: This function is only available since parachain host version 2.
       **/
      pvfsRequirePrecheck: AugmentedCall<ApiType, () => Observable<Vec<H256>>>;
      /**
       * Returns execution parameters for the session.
       **/
      sessionExecutorParams: AugmentedCall<ApiType, (session_index: u32 | AnyNumber | Uint8Array) => Observable<Option<PolkadotPrimitivesV7ExecutorParams>>>;
      /**
       * Returns the session index expected at a child of the block.,, This can be used to instantiate a `SigningContext`.
       **/
      sessionIndexForChild: AugmentedCall<ApiType, () => Observable<u32>>;
      /**
       * Get the session info for the given session, if stored.,, NOTE: This function is only available since parachain host version 2.
       **/
      sessionInfo: AugmentedCall<ApiType, (index: u32 | AnyNumber | Uint8Array) => Observable<Option<PolkadotPrimitivesV7SessionInfo>>>;
      /**
       * Submits a PVF pre-checking statement into the transaction pool.,, NOTE: This function is only available since parachain host version 2.
       **/
      submitPvfCheckStatement: AugmentedCall<ApiType, (stmt: PolkadotPrimitivesV7PvfCheckStatement | { accept?: any; subject?: any; sessionIndex?: any; validatorIndex?: any } | string | Uint8Array, signature: PolkadotPrimitivesV7ValidatorAppSignature | string | Uint8Array) => Observable<Null>>;
      /**
       * Submit an unsigned extrinsic to slash validators who lost a dispute about, a candidate of a past session., NOTE: This function is only available since parachain host version 5.
       **/
      submitReportDisputeLost: AugmentedCall<ApiType, (dispute_proof: PolkadotPrimitivesV7SlashingDisputeProof | { timeSlot?: any; kind?: any; validatorIndex?: any; validatorId?: any } | string | Uint8Array, key_ownership_proof: PolkadotPrimitivesV7SlashingOpaqueKeyOwnershipProof | string | Uint8Array) => Observable<Option<Null>>>;
      /**
       * Returns a list of validators that lost a past session dispute and need to be slashed., NOTE: This function is only available since parachain host version 5.
       **/
      unappliedSlashes: AugmentedCall<ApiType, () => Observable<Vec<ITuple<[u32, H256, PolkadotPrimitivesV7SlashingPendingSlashes]>>>>;
      /**
       * Fetch the validation code used by a para, making the given `OccupiedCoreAssumption`.,, Returns `None` if either the para is not registered or the assumption is `Freed`, and the para already occupies a core.
       **/
      validationCode: AugmentedCall<ApiType, (para_id: PolkadotParachainPrimitivesPrimitivesId | AnyNumber | Uint8Array, assumption: PolkadotPrimitivesV7OccupiedCoreAssumption | 'Included' | 'TimedOut' | 'Free' | number | Uint8Array) => Observable<Option<Bytes>>>;
      /**
       * Get the validation code from its hash.
       **/
      validationCodeByHash: AugmentedCall<ApiType, (hash: PolkadotParachainPrimitivesPrimitivesValidationCodeHash | string | Uint8Array) => Observable<Option<Bytes>>>;
      /**
       * Fetch the hash of the validation code used by a para, making the given `OccupiedCoreAssumption`.,, NOTE: This function is only available since parachain host version 2.
       **/
      validationCodeHash: AugmentedCall<ApiType, (para_id: PolkadotParachainPrimitivesPrimitivesId | AnyNumber | Uint8Array, assumption: PolkadotPrimitivesV7OccupiedCoreAssumption | 'Included' | 'TimedOut' | 'Free' | number | Uint8Array) => Observable<Option<H256>>>;
      /**
       * Returns the validator groups and rotation info localized based on the hypothetical child,  of a block whose state  this is invoked on. Note that `now` in the `GroupRotationInfo`, should be the successor of the number of the block.
       **/
      validatorGroups: AugmentedCall<ApiType, () => Observable<ITuple<[Vec<Vec<u32>>, PolkadotPrimitivesV7GroupRotationInfo]>>>;
      /**
       * Get the current validators.
       **/
      validators: AugmentedCall<ApiType, () => Observable<Vec<PolkadotPrimitivesV7ValidatorAppPublic>>>;
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
      queryCallFeeDetails: AugmentedCall<ApiType, (call: PolkadotRuntimeRuntimeCall | IMethod | string | Uint8Array, len: u32 | AnyNumber | Uint8Array) => Observable<PalletTransactionPaymentFeeDetails>>;
      /**
       * Query information of a dispatch class, weight, and fee of a given encoded `Call`.
       **/
      queryCallInfo: AugmentedCall<ApiType, (call: PolkadotRuntimeRuntimeCall | IMethod | string | Uint8Array, len: u32 | AnyNumber | Uint8Array) => Observable<PalletTransactionPaymentRuntimeDispatchInfo>>;
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
      queryDeliveryFees: AugmentedCall<ApiType, (destination: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, message: XcmVersionedXcm | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array) => Observable<Result<XcmVersionedAssets, XcmRuntimeApisFeesError>>>;
      /**
       * Converts a weight into a fee for the specified `AssetId`.,, # Arguments,, * `weight`: convertible `Weight`., * `asset`: `VersionedAssetId`.
       **/
      queryWeightToAssetFee: AugmentedCall<ApiType, (weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array, asset: XcmVersionedAssetId | { V3: any } | { V4: any } | string | Uint8Array) => Observable<Result<u128, XcmRuntimeApisFeesError>>>;
      /**
       * Returns a weight needed to execute a XCM.,, # Arguments,, * `message`: `VersionedXcm`.
       **/
      queryXcmWeight: AugmentedCall<ApiType, (message: XcmVersionedXcm | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array) => Observable<Result<SpWeightsWeightV2Weight, XcmRuntimeApisFeesError>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
  } // AugmentedCalls
} // declare module

// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/calls';

import type { ApiTypes, AugmentedCall, DecoratedCallBase } from '@polkadot/api-base/types';
import type { Bytes, Null, Option, Result, Vec, u32 } from '@polkadot/types-codec';
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types';
import type { BabeEquivocationProof, BabeGenesisConfiguration, Epoch, OpaqueKeyOwnershipProof } from '@polkadot/types/interfaces/babe';
import type { BeefyAuthoritySet, BeefyEquivocationProof, BeefyNextAuthoritySet, ValidatorSet, ValidatorSetId } from '@polkadot/types/interfaces/beefy';
import type { CheckInherentsResult, InherentData } from '@polkadot/types/interfaces/blockbuilder';
import type { BlockHash } from '@polkadot/types/interfaces/chain';
import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
import type { Extrinsic } from '@polkadot/types/interfaces/extrinsics';
import type { AuthorityList, GrandpaEquivocationProof, SetId } from '@polkadot/types/interfaces/grandpa';
import type { OpaqueMetadata } from '@polkadot/types/interfaces/metadata';
import type { MmrBatchProof, MmrEncodableOpaqueLeaf, MmrError } from '@polkadot/types/interfaces/mmr';
import type { NpPoolId } from '@polkadot/types/interfaces/nompools';
import type { FeeDetails, RuntimeDispatchInfo } from '@polkadot/types/interfaces/payment';
import type { AccountId, Balance, Block, BlockNumber, Call, Hash, Header, Index, KeyTypeId, Slot, Weight } from '@polkadot/types/interfaces/runtime';
import type { RuntimeVersion } from '@polkadot/types/interfaces/state';
import type { ApplyExtrinsicResult } from '@polkadot/types/interfaces/system';
import type { TransactionSource, TransactionValidity } from '@polkadot/types/interfaces/txqueue';
import type { IExtrinsic, Observable } from '@polkadot/types/types';

export type __AugmentedCall<ApiType extends ApiTypes> = AugmentedCall<ApiType>;
export type __DecoratedCallBase<ApiType extends ApiTypes> = DecoratedCallBase<ApiType>;

declare module '@polkadot/api-base/types/calls' {
  interface AugmentedCalls<ApiType extends ApiTypes> {
    /** 0xbc9d89904f5b923f/1 */
    accountNonceApi: {
      /**
       * The API to query account nonce (aka transaction index)
       **/
      accountNonce: AugmentedCall<ApiType, (accountId: AccountId | string | Uint8Array) => Observable<Index>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x687ad44ad37f03c2/1 */
    authorityDiscoveryApi: {
      /**
       * Retrieve authority identifiers of the current and next authority set.
       **/
      authorities: AugmentedCall<ApiType, () => Observable<Vec<AuthorityId>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0xcbca25e39f142387/2 */
    babeApi: {
      /**
       * Return the genesis configuration for BABE. The configuration is only read on genesis.
       **/
      configuration: AugmentedCall<ApiType, () => Observable<BabeGenesisConfiguration>>;
      /**
       * Returns information regarding the current epoch.
       **/
      currentEpoch: AugmentedCall<ApiType, () => Observable<Epoch>>;
      /**
       * Returns the slot that started the current epoch.
       **/
      currentEpochStart: AugmentedCall<ApiType, () => Observable<Slot>>;
      /**
       * Generates a proof of key ownership for the given authority in the current epoch.
       **/
      generateKeyOwnershipProof: AugmentedCall<ApiType, (slot: Slot | AnyNumber | Uint8Array, authorityId: AuthorityId | string | Uint8Array) => Observable<Option<OpaqueKeyOwnershipProof>>>;
      /**
       * Returns information regarding the next epoch (which was already previously announced).
       **/
      nextEpoch: AugmentedCall<ApiType, () => Observable<Epoch>>;
      /**
       * Submits an unsigned extrinsic to report an equivocation.
       **/
      submitReportEquivocationUnsignedExtrinsic: AugmentedCall<ApiType, (equivocationProof: BabeEquivocationProof | { offender?: any; slotNumber?: any; firstHeader?: any; secondHeader?: any } | string | Uint8Array, keyOwnerProof: OpaqueKeyOwnershipProof | string | Uint8Array) => Observable<Option<Null>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x49eaaf1b548a0cb0/3 */
    beefyApi: {
      /**
       * Return the block number where BEEFY consensus is enabled/started
       **/
      beefyGenesis: AugmentedCall<ApiType, () => Observable<Option<BlockNumber>>>;
      /**
       * Generates a proof of key ownership for the given authority in the given set.
       **/
      generateKeyOwnershipProof: AugmentedCall<ApiType, (setId: ValidatorSetId | AnyNumber | Uint8Array, authorityId: AuthorityId | string | Uint8Array) => Observable<Option<OpaqueKeyOwnershipProof>>>;
      /**
       * Submits an unsigned extrinsic to report an equivocation.
       **/
      submitReportEquivocationUnsignedExtrinsic: AugmentedCall<ApiType, (equivocationProof: BeefyEquivocationProof | { first?: any; second?: any } | string | Uint8Array, keyOwnerProof: OpaqueKeyOwnershipProof | string | Uint8Array) => Observable<Option<Null>>>;
      /**
       * Return the current active BEEFY validator set
       **/
      validatorSet: AugmentedCall<ApiType, () => Observable<Option<ValidatorSet>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x2a5e924655399e60/1 */
    beefyMmrApi: {
      /**
       * Return the currently active BEEFY authority set proof.
       **/
      authoritySetProof: AugmentedCall<ApiType, () => Observable<BeefyAuthoritySet>>;
      /**
       * Return the next/queued BEEFY authority set proof.
       **/
      nextAuthoritySetProof: AugmentedCall<ApiType, () => Observable<BeefyNextAuthoritySet>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x40fe3ad401f8959a/6 */
    blockBuilder: {
      /**
       * Apply the given extrinsic.
       **/
      applyExtrinsic: AugmentedCall<ApiType, (extrinsic: Extrinsic | IExtrinsic | string | Uint8Array) => Observable<ApplyExtrinsicResult>>;
      /**
       * Check that the inherents are valid.
       **/
      checkInherents: AugmentedCall<ApiType, (block: Block | { header?: any; extrinsics?: any } | string | Uint8Array, data: InherentData | { data?: any } | string | Uint8Array) => Observable<CheckInherentsResult>>;
      /**
       * Finish the current block.
       **/
      finalizeBlock: AugmentedCall<ApiType, () => Observable<Header>>;
      /**
       * Generate inherent extrinsics.
       **/
      inherentExtrinsics: AugmentedCall<ApiType, (inherent: InherentData | { data?: any } | string | Uint8Array) => Observable<Vec<Extrinsic>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0xdf6acb689907609b/4 */
    core: {
      /**
       * Execute the given block.
       **/
      executeBlock: AugmentedCall<ApiType, (block: Block | { header?: any; extrinsics?: any } | string | Uint8Array) => Observable<Null>>;
      /**
       * Initialize a block with the given header.
       **/
      initializeBlock: AugmentedCall<ApiType, (header: Header | { parentHash?: any; number?: any; stateRoot?: any; extrinsicsRoot?: any; digest?: any } | string | Uint8Array) => Observable<Null>>;
      /**
       * Returns the version of the runtime.
       **/
      version: AugmentedCall<ApiType, () => Observable<RuntimeVersion>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0xed99c5acb25eedf5/3 */
    grandpaApi: {
      /**
       * Get current GRANDPA authority set id.
       **/
      currentSetId: AugmentedCall<ApiType, () => Observable<SetId>>;
      /**
       * Generates a proof of key ownership for the given authority in the given set.
       **/
      generateKeyOwnershipProof: AugmentedCall<ApiType, (setId: SetId | AnyNumber | Uint8Array, authorityId: AuthorityId | string | Uint8Array) => Observable<Option<OpaqueKeyOwnershipProof>>>;
      /**
       * Get the current GRANDPA authorities and weights. This should not change except for when changes are scheduled and the corresponding delay has passed.
       **/
      grandpaAuthorities: AugmentedCall<ApiType, () => Observable<AuthorityList>>;
      /**
       * Submits an unsigned extrinsic to report an equivocation.
       **/
      submitReportEquivocationUnsignedExtrinsic: AugmentedCall<ApiType, (equivocationProof: GrandpaEquivocationProof | { setId?: any; equivocation?: any } | string | Uint8Array, keyOwnerProof: OpaqueKeyOwnershipProof | string | Uint8Array) => Observable<Option<Null>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x37e397fc7c91f5e4/2 */
    metadata: {
      /**
       * Returns the metadata of a runtime
       **/
      metadata: AugmentedCall<ApiType, () => Observable<OpaqueMetadata>>;
      /**
       * Returns the metadata at a given version.
       **/
      metadataAtVersion: AugmentedCall<ApiType, (version: u32 | AnyNumber | Uint8Array) => Observable<Option<OpaqueMetadata>>>;
      /**
       * Returns the supported metadata versions.
       **/
      metadataVersions: AugmentedCall<ApiType, () => Observable<Vec<u32>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x91d5df18b0d2cf58/2 */
    mmrApi: {
      /**
       * Generate MMR proof for the given block numbers.
       **/
      generateProof: AugmentedCall<ApiType, (blockNumbers: Vec<BlockNumber> | (BlockNumber | AnyNumber | Uint8Array)[], bestKnownBlockNumber: Option<BlockNumber> | null | Uint8Array | BlockNumber | AnyNumber) => Observable<Result<ITuple<[Vec<MmrEncodableOpaqueLeaf>, MmrBatchProof]>, MmrError>>>;
      /**
       * Return the on-chain MMR root hash.
       **/
      root: AugmentedCall<ApiType, () => Observable<Result<Hash, MmrError>>>;
      /**
       * Verify MMR proof against on-chain MMR.
       **/
      verifyProof: AugmentedCall<ApiType, (leaves: Vec<MmrEncodableOpaqueLeaf> | (MmrEncodableOpaqueLeaf | string | Uint8Array)[], proof: MmrBatchProof | { leafIndices?: any; leafCount?: any; items?: any } | string | Uint8Array) => Observable<Result<ITuple<[]>, MmrError>>>;
      /**
       * Verify MMR proof against given root hash.
       **/
      verifyProofStateless: AugmentedCall<ApiType, (root: Hash | string | Uint8Array, leaves: Vec<MmrEncodableOpaqueLeaf> | (MmrEncodableOpaqueLeaf | string | Uint8Array)[], proof: MmrBatchProof | { leafIndices?: any; leafCount?: any; items?: any } | string | Uint8Array) => Observable<Result<ITuple<[]>, MmrError>>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x17a6bc0d0062aeb3/1 */
    nominationPoolsApi: {
      /**
       * Returns the equivalent points of `new_funds` for a given pool.
       **/
      balanceToPoints: AugmentedCall<ApiType, (poolId: NpPoolId | AnyNumber | Uint8Array, newFunds: Balance | AnyNumber | Uint8Array) => Observable<Balance>>;
      /**
       * Returns the pending rewards for the given member.
       **/
      pendingRewards: AugmentedCall<ApiType, (member: AccountId | string | Uint8Array) => Observable<Balance>>;
      /**
       * Returns the equivalent balance of `points` for a given pool.
       **/
      pointsToBalance: AugmentedCall<ApiType, (poolId: NpPoolId | AnyNumber | Uint8Array, points: Balance | AnyNumber | Uint8Array) => Observable<Balance>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0xf78b278be53f454c/2 */
    offchainWorkerApi: {
      /**
       * Starts the off-chain task for given block header.
       **/
      offchainWorker: AugmentedCall<ApiType, (header: Header | { parentHash?: any; number?: any; stateRoot?: any; extrinsicsRoot?: any; digest?: any } | string | Uint8Array) => Observable<Null>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0xab3c0572291feb8b/1 */
    sessionKeys: {
      /**
       * Decode the given public session keys.
       **/
      decodeSessionKeys: AugmentedCall<ApiType, (encoded: Bytes | string | Uint8Array) => Observable<Option<Vec<ITuple<[Bytes, KeyTypeId]>>>>>;
      /**
       * Generate a set of session keys with optionally using the given seed.
       **/
      generateSessionKeys: AugmentedCall<ApiType, (seed: Option<Bytes> | null | Uint8Array | Bytes | string) => Observable<Bytes>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x18ef58a3b67ba770/1 */
    stakingApi: {
      /**
       * Returns the nominations quota for a nominator with a given balance.
       **/
      nominationsQuota: AugmentedCall<ApiType, (balance: Balance | AnyNumber | Uint8Array) => Observable<u32>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0xd2bc9897eed08f15/3 */
    taggedTransactionQueue: {
      /**
       * Validate the transaction.
       **/
      validateTransaction: AugmentedCall<ApiType, (source: TransactionSource | 'InBlock' | 'Local' | 'External' | number | Uint8Array, tx: Extrinsic | IExtrinsic | string | Uint8Array, blockHash: BlockHash | string | Uint8Array) => Observable<TransactionValidity>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0x37c8bb1350a9a2a8/4 */
    transactionPaymentApi: {
      /**
       * The transaction fee details
       **/
      queryFeeDetails: AugmentedCall<ApiType, (uxt: Extrinsic | IExtrinsic | string | Uint8Array, len: u32 | AnyNumber | Uint8Array) => Observable<FeeDetails>>;
      /**
       * The transaction info
       **/
      queryInfo: AugmentedCall<ApiType, (uxt: Extrinsic | IExtrinsic | string | Uint8Array, len: u32 | AnyNumber | Uint8Array) => Observable<RuntimeDispatchInfo>>;
      /**
       * Query the output of the current LengthToFee given some input
       **/
      queryLengthToFee: AugmentedCall<ApiType, (length: u32 | AnyNumber | Uint8Array) => Observable<Balance>>;
      /**
       * Query the output of the current WeightToFee given some input
       **/
      queryWeightToFee: AugmentedCall<ApiType, (weight: Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => Observable<Balance>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
    /** 0xf3ff14d5ab527059/3 */
    transactionPaymentCallApi: {
      /**
       * The call fee details
       **/
      queryCallFeeDetails: AugmentedCall<ApiType, (call: Call | IMethod | string | Uint8Array, len: u32 | AnyNumber | Uint8Array) => Observable<FeeDetails>>;
      /**
       * The call info
       **/
      queryCallInfo: AugmentedCall<ApiType, (call: Call | IMethod | string | Uint8Array, len: u32 | AnyNumber | Uint8Array) => Observable<RuntimeDispatchInfo>>;
      /**
       * Query the output of the current LengthToFee given some input
       **/
      queryLengthToFee: AugmentedCall<ApiType, (length: u32 | AnyNumber | Uint8Array) => Observable<Balance>>;
      /**
       * Query the output of the current WeightToFee given some input
       **/
      queryWeightToFee: AugmentedCall<ApiType, (weight: Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => Observable<Balance>>;
      /**
       * Generic call
       **/
      [key: string]: DecoratedCallBase<ApiType>;
    };
  } // AugmentedCalls
} // declare module

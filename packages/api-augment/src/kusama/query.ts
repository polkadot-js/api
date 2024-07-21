// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/storage';

import type { ApiTypes, AugmentedQuery, QueryableStorageEntry } from '@polkadot/api-base/types';
import type { BTreeMap, BTreeSet, Bytes, Null, Option, Struct, U8aFixed, Vec, bool, u128, u16, u32, u64 } from '@polkadot/types-codec';
import type { AnyNumber, ITuple } from '@polkadot/types-codec/types';
import type { EthereumAddress } from '@polkadot/types/interfaces/eth';
import type { AccountId32, H256, Perbill, Percent } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportDispatchPerDispatchClassWeight, FrameSystemAccountInfo, FrameSystemCodeUpgradeAuthorization, FrameSystemEventRecord, FrameSystemLastRuntimeUpgradeInfo, FrameSystemPhase, PalletBagsListListBag, PalletBagsListListNode, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesIdAmount, PalletBalancesReserveData, PalletBountiesBounty, PalletChildBountiesChildBounty, PalletConvictionVotingVoteVoting, PalletElectionProviderMultiPhasePhase, PalletElectionProviderMultiPhaseReadySolution, PalletElectionProviderMultiPhaseRoundSnapshot, PalletElectionProviderMultiPhaseSignedSignedSubmission, PalletElectionProviderMultiPhaseSolutionOrSnapshotSize, PalletFastUnstakeUnstakeRequest, PalletGrandpaStoredPendingChange, PalletGrandpaStoredState, PalletMessageQueueBookState, PalletMessageQueuePage, PalletMultisigMultisig, PalletNisBid, PalletNisReceiptRecord, PalletNisSummaryRecord, PalletNominationPoolsBondedPoolInner, PalletNominationPoolsClaimPermission, PalletNominationPoolsPoolMember, PalletNominationPoolsRewardPool, PalletNominationPoolsSubPools, PalletPreimageOldRequestStatus, PalletPreimageRequestStatus, PalletProxyAnnouncement, PalletProxyProxyDefinition, PalletRankedCollectiveMemberRecord, PalletRankedCollectiveVoteRecord, PalletRecoveryActiveRecovery, PalletRecoveryRecoveryConfig, PalletReferendaReferendumInfoConvictionVotingTally, PalletReferendaReferendumInfoRankedCollectiveTally, PalletSchedulerScheduled, PalletSocietyBid, PalletSocietyCandidacy, PalletSocietyGroupParams, PalletSocietyIntakeRecord, PalletSocietyMemberRecord, PalletSocietyPayoutRecord, PalletSocietyTally, PalletSocietyVote, PalletStakingActiveEraInfo, PalletStakingEraRewardPoints, PalletStakingForcing, PalletStakingNominations, PalletStakingRewardDestination, PalletStakingSlashingSlashingSpans, PalletStakingSlashingSpanRecord, PalletStakingStakingLedger, PalletStakingUnappliedSlash, PalletStakingValidatorPrefs, PalletTransactionPaymentReleases, PalletTreasuryProposal, PalletTreasurySpendStatus, PalletVestingReleases, PalletVestingVestingInfo, PalletXcmQueryStatus, PalletXcmRemoteLockedFungibleRecord, PalletXcmVersionMigrationStage, PolkadotCorePrimitivesInboundDownwardMessage, PolkadotCorePrimitivesInboundHrmpMessage, PolkadotParachainPrimitivesPrimitivesHrmpChannelId, PolkadotPrimitivesV6AssignmentAppPublic, PolkadotPrimitivesV6CandidateCommitments, PolkadotPrimitivesV6DisputeState, PolkadotPrimitivesV6ExecutorParams, PolkadotPrimitivesV6ScrapedOnChainVotes, PolkadotPrimitivesV6SessionInfo, PolkadotPrimitivesV6SlashingPendingSlashes, PolkadotPrimitivesV6UpgradeGoAhead, PolkadotPrimitivesV6UpgradeRestriction, PolkadotPrimitivesV6ValidatorAppPublic, PolkadotRuntimeCommonClaimsStatementKind, PolkadotRuntimeCommonCrowdloanFundInfo, PolkadotRuntimeCommonImplsVersionedLocatableAsset, PolkadotRuntimeCommonParasRegistrarParaInfo, PolkadotRuntimeParachainsAssignerCoretimeCoreDescriptor, PolkadotRuntimeParachainsAssignerCoretimeSchedule, PolkadotRuntimeParachainsAssignerOnDemandCoreAffinityCount, PolkadotRuntimeParachainsAssignerOnDemandEnqueuedOrder, PolkadotRuntimeParachainsConfigurationHostConfiguration, PolkadotRuntimeParachainsHrmpHrmpChannel, PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest, PolkadotRuntimeParachainsInclusionAggregateMessageOrigin, PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord, PolkadotRuntimeParachainsInclusionCandidatePendingAvailability, PolkadotRuntimeParachainsInitializerBufferedSessionChange, PolkadotRuntimeParachainsParasParaGenesisArgs, PolkadotRuntimeParachainsParasParaLifecycle, PolkadotRuntimeParachainsParasParaPastCodeMeta, PolkadotRuntimeParachainsParasPvfCheckActiveVoteState, PolkadotRuntimeParachainsSchedulerPalletCoreOccupied, PolkadotRuntimeParachainsSchedulerPalletParasEntry, PolkadotRuntimeParachainsSharedAllowedRelayParentsTracker, SpAuthorityDiscoveryAppPublic, SpConsensusBabeAppPublic, SpConsensusBabeBabeEpochConfiguration, SpConsensusBabeDigestsNextConfigDescriptor, SpConsensusBabeDigestsPreDigest, SpConsensusBeefyEcdsaCryptoPublic, SpConsensusBeefyMmrBeefyAuthoritySet, SpConsensusGrandpaAppPublic, SpCoreCryptoKeyTypeId, SpNposElectionsElectionScore, SpRuntimeDigest, SpStakingExposure, SpStakingExposurePage, SpStakingOffenceOffenceDetails, SpStakingPagedExposureMetadata, SpWeightsWeightV2Weight, StagingKusamaRuntimeRuntimeFreezeReason, StagingKusamaRuntimeRuntimeHoldReason, StagingKusamaRuntimeSessionKeys, XcmVersionedAssetId, XcmVersionedLocation } from '@polkadot/types/lookup';
import type { Observable } from '@polkadot/types/types';

export type __AugmentedQuery<ApiType extends ApiTypes> = AugmentedQuery<ApiType, () => unknown>;
export type __QueryableStorageEntry<ApiType extends ApiTypes> = QueryableStorageEntry<ApiType>;

declare module '@polkadot/api-base/types/storage' {
  interface AugmentedQueries<ApiType extends ApiTypes> {
    assetRate: {
      /**
       * Maps an asset to its fixed point representation in the native balance.
       * 
       * E.g. `native_amount = asset_amount * ConversionRateToNative::<T>::get(asset_kind)`
       **/
      conversionRateToNative: AugmentedQuery<ApiType, (arg: PolkadotRuntimeCommonImplsVersionedLocatableAsset | { V3: any } | { V4: any } | string | Uint8Array) => Observable<Option<u128>>, [PolkadotRuntimeCommonImplsVersionedLocatableAsset]> & QueryableStorageEntry<ApiType, [PolkadotRuntimeCommonImplsVersionedLocatableAsset]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    auctions: {
      /**
       * Number of auctions started so far.
       **/
      auctionCounter: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Information relating to the current auction, if there is one.
       * 
       * The first item in the tuple is the lease period index that the first of the four
       * contiguous lease periods on auction is for. The second is the block number when the
       * auction will "begin to end", i.e. the first block of the Ending Period of the auction.
       **/
      auctionInfo: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[u32, u32]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Amounts currently reserved in the accounts of the bidders currently winning
       * (sub-)ranges.
       **/
      reservedAmounts: AugmentedQuery<ApiType, (arg: ITuple<[AccountId32, u32]> | [AccountId32 | string | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<Option<u128>>, [ITuple<[AccountId32, u32]>]> & QueryableStorageEntry<ApiType, [ITuple<[AccountId32, u32]>]>;
      /**
       * The winning bids for each of the 10 ranges at each sample in the final Ending Period of
       * the current auction. The map's key is the 0-based index into the Sample Size. The
       * first sample of the ending period is 0; the last is `Sample Size - 1`.
       **/
      winning: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<Vec<Option<ITuple<[AccountId32, u32, u128]>>>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    authorityDiscovery: {
      /**
       * Keys of the current authority set.
       **/
      keys: AugmentedQuery<ApiType, () => Observable<Vec<SpAuthorityDiscoveryAppPublic>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Keys of the next authority set.
       **/
      nextKeys: AugmentedQuery<ApiType, () => Observable<Vec<SpAuthorityDiscoveryAppPublic>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    authorship: {
      /**
       * Author of current block.
       **/
      author: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    babe: {
      /**
       * Current epoch authorities.
       **/
      authorities: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[SpConsensusBabeAppPublic, u64]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * This field should always be populated during block processing unless
       * secondary plain slots are enabled (which don't contain a VRF output).
       * 
       * It is set in `on_finalize`, before it will contain the value from the last block.
       **/
      authorVrfRandomness: AugmentedQuery<ApiType, () => Observable<Option<U8aFixed>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Current slot number.
       **/
      currentSlot: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The configuration for the current epoch. Should never be `None` as it is initialized in
       * genesis.
       **/
      epochConfig: AugmentedQuery<ApiType, () => Observable<Option<SpConsensusBabeBabeEpochConfiguration>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Current epoch index.
       **/
      epochIndex: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The block numbers when the last and current epoch have started, respectively `N-1` and
       * `N`.
       * NOTE: We track this in order to annotate the block number when a given pool of
       * entropy was fixed (i.e. it was known to chain observers). Since epochs are defined in
       * slots, which may be skipped, the block numbers may not line up with the slot numbers.
       **/
      epochStart: AugmentedQuery<ApiType, () => Observable<ITuple<[u32, u32]>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The slot at which the first epoch actually started. This is 0
       * until the first block of the chain.
       **/
      genesisSlot: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Temporary value (cleared at block finalization) which is `Some`
       * if per-block initialization has already been called for current block.
       **/
      initialized: AugmentedQuery<ApiType, () => Observable<Option<Option<SpConsensusBabeDigestsPreDigest>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * How late the current block is compared to its parent.
       * 
       * This entry is populated as part of block execution and is cleaned up
       * on block finalization. Querying this storage entry outside of block
       * execution context should always yield zero.
       **/
      lateness: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Next epoch authorities.
       **/
      nextAuthorities: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[SpConsensusBabeAppPublic, u64]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The configuration for the next epoch, `None` if the config will not change
       * (you can fallback to `EpochConfig` instead in that case).
       **/
      nextEpochConfig: AugmentedQuery<ApiType, () => Observable<Option<SpConsensusBabeBabeEpochConfiguration>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Next epoch randomness.
       **/
      nextRandomness: AugmentedQuery<ApiType, () => Observable<U8aFixed>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Pending epoch configuration change that will be applied when the next epoch is enacted.
       **/
      pendingEpochConfigChange: AugmentedQuery<ApiType, () => Observable<Option<SpConsensusBabeDigestsNextConfigDescriptor>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The epoch randomness for the *current* epoch.
       * 
       * # Security
       * 
       * This MUST NOT be used for gambling, as it can be influenced by a
       * malicious validator in the short term. It MAY be used in many
       * cryptographic protocols, however, so long as one remembers that this
       * (like everything else on-chain) it is public. For example, it can be
       * used where a number is needed that cannot have been chosen by an
       * adversary, for purposes such as public-coin zero-knowledge proofs.
       **/
      randomness: AugmentedQuery<ApiType, () => Observable<U8aFixed>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Randomness under construction.
       * 
       * We make a trade-off between storage accesses and list length.
       * We store the under-construction randomness in segments of up to
       * `UNDER_CONSTRUCTION_SEGMENT_LENGTH`.
       * 
       * Once a segment reaches this length, we begin the next one.
       * We reset all segments and return to `0` at the beginning of every
       * epoch.
       **/
      segmentIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * A list of the last 100 skipped epochs and the corresponding session index
       * when the epoch was skipped.
       * 
       * This is only used for validating equivocation proofs. An equivocation proof
       * must contains a key-ownership proof for a given session, therefore we need a
       * way to tie together sessions and epoch indices, i.e. we need to validate that
       * a validator was the owner of a given key on a given session, and what the
       * active epoch index was during that session.
       **/
      skippedEpochs: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u64, u32]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * TWOX-NOTE: `SegmentIndex` is an increasing integer, so this is okay.
       **/
      underConstruction: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<U8aFixed>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    balances: {
      /**
       * The Balances pallet example of storing the balance of an account.
       * 
       * # Example
       * 
       * ```nocompile
       * impl pallet_balances::Config for Runtime {
       * type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
       * }
       * ```
       * 
       * You can also store the balance of an account in the `System` pallet.
       * 
       * # Example
       * 
       * ```nocompile
       * impl pallet_balances::Config for Runtime {
       * type AccountStore = System
       * }
       * ```
       * 
       * But this comes with tradeoffs, storing account balances in the system pallet stores
       * `frame_system` data alongside the account data contrary to storing account balances in the
       * `Balances` pallet, which uses a `StorageMap` to store balances data only.
       * NOTE: This is only used in the case that this pallet is used to store balances.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletBalancesAccountData>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Freeze locks on account balances.
       **/
      freezes: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<{
    readonly id: StagingKusamaRuntimeRuntimeFreezeReason;
    readonly amount: u128;
  } & Struct>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Holds on account balances.
       **/
      holds: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<{
    readonly id: StagingKusamaRuntimeRuntimeHoldReason;
    readonly amount: u128;
  } & Struct>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The total units of outstanding deactivated balance in the system.
       **/
      inactiveIssuance: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Any liquidity locks on some account balances.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesBalanceLock>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Named reserves on some account balances.
       **/
      reserves: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesReserveData>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The total units issued in the system.
       **/
      totalIssuance: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    beefy: {
      /**
       * The current authorities set
       **/
      authorities: AugmentedQuery<ApiType, () => Observable<Vec<SpConsensusBeefyEcdsaCryptoPublic>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Block number where BEEFY consensus is enabled/started.
       * By changing this (through privileged `set_new_genesis()`), BEEFY consensus is effectively
       * restarted from the newly set block number.
       **/
      genesisBlock: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Authorities set scheduled to be used with the next session
       **/
      nextAuthorities: AugmentedQuery<ApiType, () => Observable<Vec<SpConsensusBeefyEcdsaCryptoPublic>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * A mapping from BEEFY set ID to the index of the *most recent* session for which its
       * members were responsible.
       * 
       * This is only used for validating equivocation proofs. An equivocation proof must
       * contains a key-ownership proof for a given session, therefore we need a way to tie
       * together sessions and BEEFY set ids, i.e. we need to validate that a validator
       * was the owner of a given key on a given session, and what the active set ID was
       * during that session.
       * 
       * TWOX-NOTE: `ValidatorSetId` is not under user control.
       **/
      setIdSession: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<u32>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      /**
       * The current validator set id
       **/
      validatorSetId: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    beefyMmrLeaf: {
      /**
       * Details of current BEEFY authority set.
       **/
      beefyAuthorities: AugmentedQuery<ApiType, () => Observable<SpConsensusBeefyMmrBeefyAuthoritySet>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Details of next BEEFY authority set.
       * 
       * This storage entry is used as cache for calls to `update_beefy_next_authority_set`.
       **/
      beefyNextAuthorities: AugmentedQuery<ApiType, () => Observable<SpConsensusBeefyMmrBeefyAuthoritySet>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    bounties: {
      /**
       * Bounties that have been made.
       **/
      bounties: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletBountiesBounty>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Bounty indices that have been approved but not yet funded.
       **/
      bountyApprovals: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Number of bounty proposals that have been made.
       **/
      bountyCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The description of each bounty.
       **/
      bountyDescriptions: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    childBounties: {
      /**
       * Child bounties that have been added.
       **/
      childBounties: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletChildBountiesChildBounty>>, [u32, u32]> & QueryableStorageEntry<ApiType, [u32, u32]>;
      /**
       * Number of total child bounties.
       **/
      childBountyCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The description of each child-bounty.
       **/
      childBountyDescriptions: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The cumulative child-bounty curator fee for each parent bounty.
       **/
      childrenCuratorFees: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u128>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Number of child bounties per parent bounty.
       * Map of parent bounty index to number of child bounties.
       **/
      parentChildBounties: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u32>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    claims: {
      claims: AugmentedQuery<ApiType, (arg: EthereumAddress | string | Uint8Array) => Observable<Option<u128>>, [EthereumAddress]> & QueryableStorageEntry<ApiType, [EthereumAddress]>;
      /**
       * Pre-claimed Ethereum accounts, by the Account ID that they are claimed to.
       **/
      preclaims: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<EthereumAddress>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The statement kind that must be signed, if any.
       **/
      signing: AugmentedQuery<ApiType, (arg: EthereumAddress | string | Uint8Array) => Observable<Option<PolkadotRuntimeCommonClaimsStatementKind>>, [EthereumAddress]> & QueryableStorageEntry<ApiType, [EthereumAddress]>;
      total: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Vesting schedule for a claim.
       * First balance is the total amount that should be held for vesting.
       * Second balance is how much should be unlocked per block.
       * The block number is when the vesting should start.
       **/
      vesting: AugmentedQuery<ApiType, (arg: EthereumAddress | string | Uint8Array) => Observable<Option<ITuple<[u128, u128, u32]>>>, [EthereumAddress]> & QueryableStorageEntry<ApiType, [EthereumAddress]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    configuration: {
      /**
       * The active configuration for the current session.
       **/
      activeConfig: AugmentedQuery<ApiType, () => Observable<PolkadotRuntimeParachainsConfigurationHostConfiguration>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * If this is set, then the configuration setters will bypass the consistency checks. This
       * is meant to be used only as the last resort.
       **/
      bypassConsistencyCheck: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Pending configuration changes.
       * 
       * This is a list of configuration changes, each with a session index at which it should
       * be applied.
       * 
       * The list is sorted ascending by session index. Also, this list can only contain at most
       * 2 items: for the next session and for the `scheduled_session`.
       **/
      pendingConfigs: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u32, PolkadotRuntimeParachainsConfigurationHostConfiguration]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    convictionVoting: {
      /**
       * The voting classes which have a non-zero lock requirement and the lock amounts which they
       * require. The actual amount locked on behalf of this pallet should always be the maximum of
       * this list.
       **/
      classLocksFor: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<ITuple<[u16, u128]>>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * All voting for a particular voter in a particular voting class. We store the balance for the
       * number of votes that we have recorded.
       **/
      votingFor: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u16 | AnyNumber | Uint8Array) => Observable<PalletConvictionVotingVoteVoting>, [AccountId32, u16]> & QueryableStorageEntry<ApiType, [AccountId32, u16]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    coretimeAssignmentProvider: {
      /**
       * Assignments which are currently active.
       * 
       * They will be picked from `PendingAssignments` once we reach the scheduled block number in
       * `PendingAssignments`.
       **/
      coreDescriptors: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<PolkadotRuntimeParachainsAssignerCoretimeCoreDescriptor>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Scheduled assignment sets.
       * 
       * Assignments as of the given block number. They will go into state once the block number is
       * reached (and replace whatever was in there before).
       **/
      coreSchedules: AugmentedQuery<ApiType, (arg: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<Option<PolkadotRuntimeParachainsAssignerCoretimeSchedule>>, [ITuple<[u32, u32]>]> & QueryableStorageEntry<ApiType, [ITuple<[u32, u32]>]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    crowdloan: {
      /**
       * The number of auctions that have entered into their ending period so far.
       **/
      endingsCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Info on all of the funds.
       **/
      funds: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PolkadotRuntimeCommonCrowdloanFundInfo>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The funds that have had additional contributions during the last block. This is used
       * in order to determine which funds should submit new or updated bids.
       **/
      newRaise: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Tracker for the next available fund index
       **/
      nextFundIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    dmp: {
      /**
       * The factor to multiply the base delivery fee by.
       **/
      deliveryFeeFactor: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u128>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * A mapping that stores the downward message queue MQC head for each para.
       * 
       * Each link in this chain has a form:
       * `(prev_head, B, H(M))`, where
       * - `prev_head`: is the previous head hash or zero if none.
       * - `B`: is the relay-chain block number in which a message was appended.
       * - `H(M)`: is the hash of the message being appended.
       **/
      downwardMessageQueueHeads: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<H256>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The downward messages addressed for a certain para.
       **/
      downwardMessageQueues: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<PolkadotCorePrimitivesInboundDownwardMessage>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    electionProviderMultiPhase: {
      /**
       * Current phase.
       **/
      currentPhase: AugmentedQuery<ApiType, () => Observable<PalletElectionProviderMultiPhasePhase>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Desired number of targets to elect for this round.
       * 
       * Only exists when [`Snapshot`] is present.
       * Note: This storage type must only be mutated through [`SnapshotWrapper`].
       **/
      desiredTargets: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The minimum score that each 'untrusted' solution must attain in order to be considered
       * feasible.
       * 
       * Can be set via `set_minimum_untrusted_score`.
       **/
      minimumUntrustedScore: AugmentedQuery<ApiType, () => Observable<Option<SpNposElectionsElectionScore>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Current best solution, signed or unsigned, queued to be returned upon `elect`.
       * 
       * Always sorted by score.
       **/
      queuedSolution: AugmentedQuery<ApiType, () => Observable<Option<PalletElectionProviderMultiPhaseReadySolution>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Internal counter for the number of rounds.
       * 
       * This is useful for de-duplication of transactions submitted to the pool, and general
       * diagnostics of the pallet.
       * 
       * This is merely incremented once per every time that an upstream `elect` is called.
       **/
      round: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * A sorted, bounded vector of `(score, block_number, index)`, where each `index` points to a
       * value in `SignedSubmissions`.
       * 
       * We never need to process more than a single signed submission at a time. Signed submissions
       * can be quite large, so we're willing to pay the cost of multiple database accesses to access
       * them one at a time instead of reading and decoding all of them at once.
       **/
      signedSubmissionIndices: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[SpNposElectionsElectionScore, u32, u32]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The next index to be assigned to an incoming signed submission.
       * 
       * Every accepted submission is assigned a unique index; that index is bound to that particular
       * submission for the duration of the election. On election finalization, the next index is
       * reset to 0.
       * 
       * We can't just use `SignedSubmissionIndices.len()`, because that's a bounded set; past its
       * capacity, it will simply saturate. We can't just iterate over `SignedSubmissionsMap`,
       * because iteration is slow. Instead, we store the value here.
       **/
      signedSubmissionNextIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Unchecked, signed solutions.
       * 
       * Together with `SubmissionIndices`, this stores a bounded set of `SignedSubmissions` while
       * allowing us to keep only a single one in memory at a time.
       * 
       * Twox note: the key of the map is an auto-incrementing index which users cannot inspect or
       * affect; we shouldn't need a cryptographically secure hasher.
       **/
      signedSubmissionsMap: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletElectionProviderMultiPhaseSignedSignedSubmission>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Snapshot data of the round.
       * 
       * This is created at the beginning of the signed phase and cleared upon calling `elect`.
       * Note: This storage type must only be mutated through [`SnapshotWrapper`].
       **/
      snapshot: AugmentedQuery<ApiType, () => Observable<Option<PalletElectionProviderMultiPhaseRoundSnapshot>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The metadata of the [`RoundSnapshot`]
       * 
       * Only exists when [`Snapshot`] is present.
       * Note: This storage type must only be mutated through [`SnapshotWrapper`].
       **/
      snapshotMetadata: AugmentedQuery<ApiType, () => Observable<Option<PalletElectionProviderMultiPhaseSolutionOrSnapshotSize>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    fastUnstake: {
      /**
       * Counter for the related counted storage map
       **/
      counterForQueue: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Number of eras to check per block.
       * 
       * If set to 0, this pallet does absolutely nothing. Cannot be set to more than
       * [`Config::MaxErasToCheckPerBlock`].
       * 
       * Based on the amount of weight available at [`Pallet::on_idle`], up to this many eras are
       * checked. The checking is represented by updating [`UnstakeRequest::checked`], which is
       * stored in [`Head`].
       **/
      erasToCheckPerBlock: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current "head of the queue" being unstaked.
       * 
       * The head in itself can be a batch of up to [`Config::BatchSize`] stakers.
       **/
      head: AugmentedQuery<ApiType, () => Observable<Option<PalletFastUnstakeUnstakeRequest>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The map of all accounts wishing to be unstaked.
       * 
       * Keeps track of `AccountId` wishing to unstake and it's corresponding deposit.
       **/
      queue: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<u128>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    fellowshipCollective: {
      /**
       * The index of each ranks's member into the group of members who have at least that rank.
       **/
      idToIndex: AugmentedQuery<ApiType, (arg1: u16 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<u32>>, [u16, AccountId32]> & QueryableStorageEntry<ApiType, [u16, AccountId32]>;
      /**
       * The members in the collective by index. All indices in the range `0..MemberCount` will
       * return `Some`, however a member's index is not guaranteed to remain unchanged over time.
       **/
      indexToId: AugmentedQuery<ApiType, (arg1: u16 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<AccountId32>>, [u16, u32]> & QueryableStorageEntry<ApiType, [u16, u32]>;
      /**
       * The number of members in the collective who have at least the rank according to the index
       * of the vec.
       **/
      memberCount: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u32>, [u16]> & QueryableStorageEntry<ApiType, [u16]>;
      /**
       * The current members of the collective.
       **/
      members: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletRankedCollectiveMemberRecord>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<PalletRankedCollectiveVoteRecord>>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
      votingCleanup: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    fellowshipReferenda: {
      /**
       * The number of referenda being decided currently.
       **/
      decidingCount: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u32>, [u16]> & QueryableStorageEntry<ApiType, [u16]>;
      /**
       * The metadata is a general information concerning the referendum.
       * The `Hash` refers to the preimage of the `Preimages` provider which can be a JSON
       * dump or IPFS hash of a JSON file.
       * 
       * Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
       * large preimages.
       **/
      metadataOf: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<H256>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The next free referendum index, aka the number of referenda started so far.
       **/
      referendumCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Information concerning any given referendum.
       **/
      referendumInfoFor: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletReferendaReferendumInfoRankedCollectiveTally>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The sorted list of referenda ready to be decided but not yet being decided, ordered by
       * conviction-weighted approvals.
       * 
       * This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
       **/
      trackQueue: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<Vec<ITuple<[u32, u32]>>>, [u16]> & QueryableStorageEntry<ApiType, [u16]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    grandpa: {
      /**
       * The current list of authorities.
       **/
      authorities: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The number of changes (both in terms of keys and underlying economic responsibilities)
       * in the "set" of Grandpa validators from genesis.
       **/
      currentSetId: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * next block number where we can force a change.
       **/
      nextForced: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Pending change: (signaled at, scheduled change).
       **/
      pendingChange: AugmentedQuery<ApiType, () => Observable<Option<PalletGrandpaStoredPendingChange>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * A mapping from grandpa set ID to the index of the *most recent* session for which its
       * members were responsible.
       * 
       * This is only used for validating equivocation proofs. An equivocation proof must
       * contains a key-ownership proof for a given session, therefore we need a way to tie
       * together sessions and GRANDPA set ids, i.e. we need to validate that a validator
       * was the owner of a given key on a given session, and what the active set ID was
       * during that session.
       * 
       * TWOX-NOTE: `SetId` is not under user control.
       **/
      setIdSession: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<u32>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      /**
       * `true` if we are currently stalled.
       **/
      stalled: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[u32, u32]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * State of the current authority set.
       **/
      state: AugmentedQuery<ApiType, () => Observable<PalletGrandpaStoredState>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    historical: {
      /**
       * Mapping from historical session indices to session-data root hash and validator count.
       **/
      historicalSessions: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[H256, u32]>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The range of historical sessions we store. [first, last)
       **/
      storedRange: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[u32, u32]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    hrmp: {
      /**
       * This mapping tracks how many open channel requests were accepted by a given recipient para.
       * Invariant: `HrmpOpenChannelRequests` should contain the same number of items `(_, X)` with
       * `confirmed` set to true, as the number of `HrmpAcceptedChannelRequestCount` for `X`.
       **/
      hrmpAcceptedChannelRequestCount: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u32>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Storage for the messages for each channel.
       * Invariant: cannot be non-empty if the corresponding channel in `HrmpChannels` is `None`.
       **/
      hrmpChannelContents: AugmentedQuery<ApiType, (arg: PolkadotParachainPrimitivesPrimitivesHrmpChannelId | { sender?: any; recipient?: any } | string | Uint8Array) => Observable<Vec<PolkadotCorePrimitivesInboundHrmpMessage>>, [PolkadotParachainPrimitivesPrimitivesHrmpChannelId]> & QueryableStorageEntry<ApiType, [PolkadotParachainPrimitivesPrimitivesHrmpChannelId]>;
      /**
       * Maintains a mapping that can be used to answer the question: What paras sent a message at
       * the given block number for a given receiver. Invariants:
       * - The inner `Vec<ParaId>` is never empty.
       * - The inner `Vec<ParaId>` cannot store two same `ParaId`.
       * - The outer vector is sorted ascending by block number and cannot store two items with the
       * same block number.
       **/
      hrmpChannelDigests: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<ITuple<[u32, Vec<u32>]>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * HRMP channel data associated with each para.
       * Invariant:
       * - each participant in the channel should satisfy `Paras::is_valid_para(P)` within a session.
       **/
      hrmpChannels: AugmentedQuery<ApiType, (arg: PolkadotParachainPrimitivesPrimitivesHrmpChannelId | { sender?: any; recipient?: any } | string | Uint8Array) => Observable<Option<PolkadotRuntimeParachainsHrmpHrmpChannel>>, [PolkadotParachainPrimitivesPrimitivesHrmpChannelId]> & QueryableStorageEntry<ApiType, [PolkadotParachainPrimitivesPrimitivesHrmpChannelId]>;
      /**
       * A set of pending HRMP close channel requests that are going to be closed during the session
       * change. Used for checking if a given channel is registered for closure.
       * 
       * The set is accompanied by a list for iteration.
       * 
       * Invariant:
       * - There are no channels that exists in list but not in the set and vice versa.
       **/
      hrmpCloseChannelRequests: AugmentedQuery<ApiType, (arg: PolkadotParachainPrimitivesPrimitivesHrmpChannelId | { sender?: any; recipient?: any } | string | Uint8Array) => Observable<Option<Null>>, [PolkadotParachainPrimitivesPrimitivesHrmpChannelId]> & QueryableStorageEntry<ApiType, [PolkadotParachainPrimitivesPrimitivesHrmpChannelId]>;
      hrmpCloseChannelRequestsList: AugmentedQuery<ApiType, () => Observable<Vec<PolkadotParachainPrimitivesPrimitivesHrmpChannelId>>, []> & QueryableStorageEntry<ApiType, []>;
      hrmpEgressChannelsIndex: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<u32>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Ingress/egress indexes allow to find all the senders and receivers given the opposite side.
       * I.e.
       * 
       * (a) ingress index allows to find all the senders for a given recipient.
       * (b) egress index allows to find all the recipients for a given sender.
       * 
       * Invariants:
       * - for each ingress index entry for `P` each item `I` in the index should present in
       * `HrmpChannels` as `(I, P)`.
       * - for each egress index entry for `P` each item `E` in the index should present in
       * `HrmpChannels` as `(P, E)`.
       * - there should be no other dangling channels in `HrmpChannels`.
       * - the vectors are sorted.
       **/
      hrmpIngressChannelsIndex: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<u32>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * This mapping tracks how many open channel requests are initiated by a given sender para.
       * Invariant: `HrmpOpenChannelRequests` should contain the same number of items that has
       * `(X, _)` as the number of `HrmpOpenChannelRequestCount` for `X`.
       **/
      hrmpOpenChannelRequestCount: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u32>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The set of pending HRMP open channel requests.
       * 
       * The set is accompanied by a list for iteration.
       * 
       * Invariant:
       * - There are no channels that exists in list but not in the set and vice versa.
       **/
      hrmpOpenChannelRequests: AugmentedQuery<ApiType, (arg: PolkadotParachainPrimitivesPrimitivesHrmpChannelId | { sender?: any; recipient?: any } | string | Uint8Array) => Observable<Option<PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest>>, [PolkadotParachainPrimitivesPrimitivesHrmpChannelId]> & QueryableStorageEntry<ApiType, [PolkadotParachainPrimitivesPrimitivesHrmpChannelId]>;
      hrmpOpenChannelRequestsList: AugmentedQuery<ApiType, () => Observable<Vec<PolkadotParachainPrimitivesPrimitivesHrmpChannelId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The HRMP watermark associated with each para.
       * Invariant:
       * - each para `P` used here as a key should satisfy `Paras::is_valid_para(P)` within a
       * session.
       **/
      hrmpWatermarks: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<u32>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    indices: {
      /**
       * The lookup from index to account.
       **/
      accounts: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[AccountId32, u128, bool]>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    initializer: {
      /**
       * Buffered session changes along with the block number at which they should be applied.
       * 
       * Typically this will be empty or one element long. Apart from that this item never hits
       * the storage.
       * 
       * However this is a `Vec` regardless to handle various edge cases that may occur at runtime
       * upgrade boundaries or if governance intervenes.
       **/
      bufferedSessionChanges: AugmentedQuery<ApiType, () => Observable<Vec<PolkadotRuntimeParachainsInitializerBufferedSessionChange>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Whether the parachains modules have been initialized within this block.
       * 
       * Semantically a `bool`, but this guarantees it should never hit the trie,
       * as this is cleared in `on_finalize` and Frame optimizes `None` values to be empty values.
       * 
       * As a `bool`, `set(false)` and `remove()` both lead to the next `get()` being false, but one
       * of them writes to the trie and one does not. This confusion makes `Option<()>` more suitable
       * for the semantics of this variable.
       **/
      hasInitialized: AugmentedQuery<ApiType, () => Observable<Option<Null>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    messageQueue: {
      /**
       * The index of the first and last (non-empty) pages.
       **/
      bookStateFor: AugmentedQuery<ApiType, (arg: PolkadotRuntimeParachainsInclusionAggregateMessageOrigin | { Ump: any } | string | Uint8Array) => Observable<PalletMessageQueueBookState>, [PolkadotRuntimeParachainsInclusionAggregateMessageOrigin]> & QueryableStorageEntry<ApiType, [PolkadotRuntimeParachainsInclusionAggregateMessageOrigin]>;
      /**
       * The map of page indices to pages.
       **/
      pages: AugmentedQuery<ApiType, (arg1: PolkadotRuntimeParachainsInclusionAggregateMessageOrigin | { Ump: any } | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletMessageQueuePage>>, [PolkadotRuntimeParachainsInclusionAggregateMessageOrigin, u32]> & QueryableStorageEntry<ApiType, [PolkadotRuntimeParachainsInclusionAggregateMessageOrigin, u32]>;
      /**
       * The origin at which we should begin servicing.
       **/
      serviceHead: AugmentedQuery<ApiType, () => Observable<Option<PolkadotRuntimeParachainsInclusionAggregateMessageOrigin>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    mmr: {
      /**
       * Hashes of the nodes in the MMR.
       * 
       * Note this collection only contains MMR peaks, the inner nodes (and leaves)
       * are pruned and only stored in the Offchain DB.
       **/
      nodes: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<H256>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      /**
       * Current size of the MMR (number of leaves).
       **/
      numberOfLeaves: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Latest MMR Root hash.
       **/
      rootHash: AugmentedQuery<ApiType, () => Observable<H256>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    multisig: {
      /**
       * The set of open multisig operations.
       **/
      multisigs: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: U8aFixed | string | Uint8Array) => Observable<Option<PalletMultisigMultisig>>, [AccountId32, U8aFixed]> & QueryableStorageEntry<ApiType, [AccountId32, U8aFixed]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    nis: {
      /**
       * The queues of bids. Indexed by duration (in `Period`s).
       **/
      queues: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<PalletNisBid>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The totals of items and balances within each queue. Saves a lot of storage reads in the
       * case of sparsely packed queues.
       * 
       * The vector is indexed by duration in `Period`s, offset by one, so information on the queue
       * whose duration is one `Period` would be storage `0`.
       **/
      queueTotals: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u32, u128]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The currently outstanding receipts, indexed according to the order of creation.
       **/
      receipts: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletNisReceiptRecord>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Summary information over the general state.
       **/
      summary: AugmentedQuery<ApiType, () => Observable<PalletNisSummaryRecord>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    nisCounterpartBalances: {
      /**
       * The Balances pallet example of storing the balance of an account.
       * 
       * # Example
       * 
       * ```nocompile
       * impl pallet_balances::Config for Runtime {
       * type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
       * }
       * ```
       * 
       * You can also store the balance of an account in the `System` pallet.
       * 
       * # Example
       * 
       * ```nocompile
       * impl pallet_balances::Config for Runtime {
       * type AccountStore = System
       * }
       * ```
       * 
       * But this comes with tradeoffs, storing account balances in the system pallet stores
       * `frame_system` data alongside the account data contrary to storing account balances in the
       * `Balances` pallet, which uses a `StorageMap` to store balances data only.
       * NOTE: This is only used in the case that this pallet is used to store balances.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletBalancesAccountData>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Freeze locks on account balances.
       **/
      freezes: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesIdAmount>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Holds on account balances.
       **/
      holds: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<{
    readonly id: StagingKusamaRuntimeRuntimeHoldReason;
    readonly amount: u128;
  } & Struct>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The total units of outstanding deactivated balance in the system.
       **/
      inactiveIssuance: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Any liquidity locks on some account balances.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesBalanceLock>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Named reserves on some account balances.
       **/
      reserves: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesReserveData>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The total units issued in the system.
       **/
      totalIssuance: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    nominationPools: {
      /**
       * Storage for bonded pools.
       **/
      bondedPools: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletNominationPoolsBondedPoolInner>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Map from a pool member account to their opted claim permission.
       **/
      claimPermissions: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletNominationPoolsClaimPermission>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Counter for the related counted storage map
       **/
      counterForBondedPools: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Counter for the related counted storage map
       **/
      counterForMetadata: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Counter for the related counted storage map
       **/
      counterForPoolMembers: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Counter for the related counted storage map
       **/
      counterForReversePoolIdLookup: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Counter for the related counted storage map
       **/
      counterForRewardPools: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Counter for the related counted storage map
       **/
      counterForSubPoolsStorage: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The maximum commission that can be charged by a pool. Used on commission payouts to bound
       * pool commissions that are > `GlobalMaxCommission`, necessary if a future
       * `GlobalMaxCommission` is lower than some current pool commissions.
       **/
      globalMaxCommission: AugmentedQuery<ApiType, () => Observable<Option<Perbill>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Ever increasing number of all pools created so far.
       **/
      lastPoolId: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Maximum number of members that can exist in the system. If `None`, then the count
       * members are not bound on a system wide basis.
       **/
      maxPoolMembers: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Maximum number of members that may belong to pool. If `None`, then the count of
       * members is not bound on a per pool basis.
       **/
      maxPoolMembersPerPool: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Maximum number of nomination pools that can exist. If `None`, then an unbounded number of
       * pools can exist.
       **/
      maxPools: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Metadata for the pool.
       **/
      metadata: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Minimum bond required to create a pool.
       * 
       * This is the amount that the depositor must put as their initial stake in the pool, as an
       * indication of "skin in the game".
       * 
       * This is the value that will always exist in the staking ledger of the pool bonded account
       * while all other accounts leave.
       **/
      minCreateBond: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Minimum amount to bond to join a pool.
       **/
      minJoinBond: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Active members.
       * 
       * TWOX-NOTE: SAFE since `AccountId` is a secure hash.
       **/
      poolMembers: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletNominationPoolsPoolMember>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * A reverse lookup from the pool's account id to its id.
       * 
       * This is only used for slashing. In all other instances, the pool id is used, and the
       * accounts are deterministically derived from it.
       **/
      reversePoolIdLookup: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<u32>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Reward pools. This is where there rewards for each pool accumulate. When a members payout is
       * claimed, the balance comes out fo the reward pool. Keyed by the bonded pools account.
       **/
      rewardPools: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletNominationPoolsRewardPool>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Groups of unbonding pools. Each group of unbonding pools belongs to a
       * bonded pool, hence the name sub-pools. Keyed by the bonded pools account.
       **/
      subPoolsStorage: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletNominationPoolsSubPools>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The sum of funds across all pools.
       * 
       * This might be lower but never higher than the sum of `total_balance` of all [`PoolMembers`]
       * because calling `pool_withdraw_unbonded` might decrease the total stake of the pool's
       * `bonded_account` without adjusting the pallet-internal `UnbondingPool`'s.
       **/
      totalValueLocked: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    offences: {
      /**
       * A vector of reports of the same kind that happened at the same time slot.
       **/
      concurrentReportsIndex: AugmentedQuery<ApiType, (arg1: U8aFixed | string | Uint8Array, arg2: Bytes | string | Uint8Array) => Observable<Vec<H256>>, [U8aFixed, Bytes]> & QueryableStorageEntry<ApiType, [U8aFixed, Bytes]>;
      /**
       * The primary structure that holds all offence records keyed by report identifiers.
       **/
      reports: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<SpStakingOffenceOffenceDetails>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    onDemandAssignmentProvider: {
      /**
       * The order storage entry. Uses a VecDeque to be able to push to the front of the
       * queue from the scheduler on session boundaries.
       **/
      onDemandQueue: AugmentedQuery<ApiType, () => Observable<Vec<PolkadotRuntimeParachainsAssignerOnDemandEnqueuedOrder>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Maps a `ParaId` to `CoreIndex` and keeps track of how many assignments the scheduler has in
       * it's lookahead. Keeping track of this affinity prevents parallel execution of the same
       * `ParaId` on two or more `CoreIndex`es.
       **/
      paraIdAffinity: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PolkadotRuntimeParachainsAssignerOnDemandCoreAffinityCount>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Keeps track of the multiplier used to calculate the current spot price for the on demand
       * assigner.
       **/
      spotTraffic: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    paraInclusion: {
      /**
       * The latest bitfield for each validator, referred to by their index in the validator set.
       **/
      availabilityBitfields: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Candidates pending availability by `ParaId`.
       **/
      pendingAvailability: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PolkadotRuntimeParachainsInclusionCandidatePendingAvailability>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The commitments of candidates pending availability, by `ParaId`.
       **/
      pendingAvailabilityCommitments: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PolkadotPrimitivesV6CandidateCommitments>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    paraInherent: {
      /**
       * Whether the paras inherent was included within this block.
       * 
       * The `Option<()>` is effectively a `bool`, but it never hits storage in the `None` variant
       * due to the guarantees of FRAME's storage APIs.
       * 
       * If this is `None` at the end of the block, we panic and render the block invalid.
       **/
      included: AugmentedQuery<ApiType, () => Observable<Option<Null>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Scraped on chain data for extracting resolved disputes as well as backing votes.
       **/
      onChainVotes: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV6ScrapedOnChainVotes>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    paras: {
      /**
       * The actions to perform during the start of a specific session index.
       **/
      actionsQueue: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<u32>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Validation code stored by its hash.
       * 
       * This storage is consistent with [`FutureCodeHash`], [`CurrentCodeHash`] and
       * [`PastCodeHash`].
       **/
      codeByHash: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Bytes>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The number of reference on the validation code in [`CodeByHash`] storage.
       **/
      codeByHashRefs: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<u32>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The validation code hash of every live para.
       * 
       * Corresponding code can be retrieved with [`CodeByHash`].
       **/
      currentCodeHash: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<H256>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The actual future code hash of a para.
       * 
       * Corresponding code can be retrieved with [`CodeByHash`].
       **/
      futureCodeHash: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<H256>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The block number at which the planned code change is expected for a para.
       * The change will be applied after the first parablock for this ID included which executes
       * in the context of a relay chain block with a number >= `expected_at`.
       **/
      futureCodeUpgrades: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<u32>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The head-data of every registered para.
       **/
      heads: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The context (relay-chain block number) of the most recent parachain head.
       **/
      mostRecentContext: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<u32>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * All lease holding parachains. Ordered ascending by `ParaId`. On demand parachains are not
       * included.
       * 
       * Consider using the [`ParachainsCache`] type of modifying.
       **/
      parachains: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current lifecycle of a all known Para IDs.
       **/
      paraLifecycles: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PolkadotRuntimeParachainsParasParaLifecycle>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Actual past code hash, indicated by the para id as well as the block number at which it
       * became outdated.
       * 
       * Corresponding code can be retrieved with [`CodeByHash`].
       **/
      pastCodeHash: AugmentedQuery<ApiType, (arg: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<Option<H256>>, [ITuple<[u32, u32]>]> & QueryableStorageEntry<ApiType, [ITuple<[u32, u32]>]>;
      /**
       * Past code of parachains. The parachains themselves may not be registered anymore,
       * but we also keep their code on-chain for the same amount of time as outdated code
       * to keep it available for approval checkers.
       **/
      pastCodeMeta: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<PolkadotRuntimeParachainsParasParaPastCodeMeta>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Which paras have past code that needs pruning and the relay-chain block at which the code
       * was replaced. Note that this is the actual height of the included block, not the expected
       * height at which the code upgrade would be applied, although they may be equal.
       * This is to ensure the entire acceptance period is covered, not an offset acceptance period
       * starting from the time at which the parachain perceives a code upgrade as having occurred.
       * Multiple entries for a single para are permitted. Ordered ascending by block number.
       **/
      pastCodePruning: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u32, u32]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The list of all currently active PVF votes. Auxiliary to `PvfActiveVoteMap`.
       **/
      pvfActiveVoteList: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * All currently active PVF pre-checking votes.
       * 
       * Invariant:
       * - There are no PVF pre-checking votes that exists in list but not in the set and vice versa.
       **/
      pvfActiveVoteMap: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PolkadotRuntimeParachainsParasPvfCheckActiveVoteState>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Upcoming paras instantiation arguments.
       * 
       * NOTE that after PVF pre-checking is enabled the para genesis arg will have it's code set
       * to empty. Instead, the code will be saved into the storage right away via `CodeByHash`.
       **/
      upcomingParasGenesis: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PolkadotRuntimeParachainsParasParaGenesisArgs>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The list of upcoming code upgrades. Each item is a pair of which para performs a code
       * upgrade and at which relay-chain block it is expected at.
       * 
       * Ordered ascending by block number.
       **/
      upcomingUpgrades: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u32, u32]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The list of parachains that are awaiting for their upgrade restriction to cooldown.
       * 
       * Ordered ascending by block number.
       **/
      upgradeCooldowns: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u32, u32]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * This is used by the relay-chain to communicate to a parachain a go-ahead with in the upgrade
       * procedure.
       * 
       * This value is absent when there are no upgrades scheduled or during the time the relay chain
       * performs the checks. It is set at the first relay-chain block when the corresponding
       * parachain can switch its upgrade function. As soon as the parachain's block is included, the
       * value gets reset to `None`.
       * 
       * NOTE that this field is used by parachains via merkle storage proofs, therefore changing
       * the format will require migration of parachains.
       **/
      upgradeGoAheadSignal: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PolkadotPrimitivesV6UpgradeGoAhead>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * This is used by the relay-chain to communicate that there are restrictions for performing
       * an upgrade for this parachain.
       * 
       * This may be a because the parachain waits for the upgrade cooldown to expire. Another
       * potential use case is when we want to perform some maintenance (such as storage migration)
       * we could restrict upgrades to make the process simpler.
       * 
       * NOTE that this field is used by parachains via merkle storage proofs, therefore changing
       * the format will require migration of parachains.
       **/
      upgradeRestrictionSignal: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PolkadotPrimitivesV6UpgradeRestriction>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    paraScheduler: {
      /**
       * One entry for each availability core. Entries are `None` if the core is not currently
       * occupied. Can be temporarily `Some` if scheduled but not occupied.
       * The i'th parachain belongs to the i'th core, with the remaining cores all being
       * parathread-multiplexers.
       * 
       * Bounded by the maximum of either of these two values:
       * * The number of parachains and parathread multiplexers
       * * The number of validators divided by `configuration.max_validators_per_core`.
       **/
      availabilityCores: AugmentedQuery<ApiType, () => Observable<Vec<PolkadotRuntimeParachainsSchedulerPalletCoreOccupied>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * One entry for each availability core. The `VecDeque` represents the assignments to be
       * scheduled on that core. `None` is used to signal to not schedule the next para of the core
       * as there is one currently being scheduled. Not using `None` here would overwrite the
       * `CoreState` in the runtime API. The value contained here will not be valid after the end of
       * a block. Runtime APIs should be used to determine scheduled cores/ for the upcoming block.
       **/
      claimQueue: AugmentedQuery<ApiType, () => Observable<BTreeMap<u32, Vec<PolkadotRuntimeParachainsSchedulerPalletParasEntry>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The block number where the session start occurred. Used to track how many group rotations
       * have occurred.
       * 
       * Note that in the context of parachains modules the session change is signaled during
       * the block and enacted at the end of the block (at the finalization stage, to be exact).
       * Thus for all intents and purposes the effect of the session change is observed at the
       * block following the session change, block number of which we save in this storage value.
       **/
      sessionStartBlock: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * All the validator groups. One for each core. Indices are into `ActiveValidators` - not the
       * broader set of Polkadot validators, but instead just the subset used for parachains during
       * this session.
       * 
       * Bound: The number of cores is the sum of the numbers of parachains and parathread
       * multiplexers. Reasonably, 100-1000. The dominant factor is the number of validators: safe
       * upper bound at 10k.
       **/
      validatorGroups: AugmentedQuery<ApiType, () => Observable<Vec<Vec<u32>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    parasDisputes: {
      /**
       * Backing votes stored for each dispute.
       * This storage is used for slashing.
       **/
      backersOnDisputes: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: H256 | string | Uint8Array) => Observable<Option<BTreeSet<u32>>>, [u32, H256]> & QueryableStorageEntry<ApiType, [u32, H256]>;
      /**
       * All ongoing or concluded disputes for the last several sessions.
       **/
      disputes: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: H256 | string | Uint8Array) => Observable<Option<PolkadotPrimitivesV6DisputeState>>, [u32, H256]> & QueryableStorageEntry<ApiType, [u32, H256]>;
      /**
       * Whether the chain is frozen. Starts as `None`. When this is `Some`,
       * the chain will not accept any new parachain blocks for backing or inclusion,
       * and its value indicates the last valid block number in the chain.
       * It can only be set back to `None` by governance intervention.
       **/
      frozen: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * All included blocks on the chain, as well as the block number in this chain that
       * should be reverted back to if the candidate is disputed and determined to be invalid.
       **/
      included: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: H256 | string | Uint8Array) => Observable<Option<u32>>, [u32, H256]> & QueryableStorageEntry<ApiType, [u32, H256]>;
      /**
       * The last pruned session, if any. All data stored by this module
       * references sessions.
       **/
      lastPrunedSession: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    paraSessionInfo: {
      /**
       * The validator account keys of the validators actively participating in parachain consensus.
       **/
      accountKeys: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<Vec<AccountId32>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Assignment keys for the current session.
       * Note that this API is private due to it being prone to 'off-by-one' at session boundaries.
       * When in doubt, use `Sessions` API instead.
       **/
      assignmentKeysUnsafe: AugmentedQuery<ApiType, () => Observable<Vec<PolkadotPrimitivesV6AssignmentAppPublic>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The earliest session for which previous session info is stored.
       **/
      earliestStoredSession: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Executor parameter set for a given session index
       **/
      sessionExecutorParams: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PolkadotPrimitivesV6ExecutorParams>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Session information in a rolling window.
       * Should have an entry in range `EarliestStoredSession..=CurrentSessionIndex`.
       * Does not have any entries before the session index in the first session change notification.
       **/
      sessions: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PolkadotPrimitivesV6SessionInfo>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    parasShared: {
      /**
       * All the validators actively participating in parachain consensus.
       * Indices are into the broader validator set.
       **/
      activeValidatorIndices: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The parachain attestation keys of the validators actively participating in parachain
       * consensus. This should be the same length as `ActiveValidatorIndices`.
       **/
      activeValidatorKeys: AugmentedQuery<ApiType, () => Observable<Vec<PolkadotPrimitivesV6ValidatorAppPublic>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * All allowed relay-parents.
       **/
      allowedRelayParents: AugmentedQuery<ApiType, () => Observable<PolkadotRuntimeParachainsSharedAllowedRelayParentsTracker>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current session index.
       **/
      currentSessionIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    parasSlashing: {
      /**
       * Validators pending dispute slashes.
       **/
      unappliedSlashes: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: H256 | string | Uint8Array) => Observable<Option<PolkadotPrimitivesV6SlashingPendingSlashes>>, [u32, H256]> & QueryableStorageEntry<ApiType, [u32, H256]>;
      /**
       * `ValidatorSetCount` per session.
       **/
      validatorSetCounts: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<u32>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    preimage: {
      preimageFor: AugmentedQuery<ApiType, (arg: ITuple<[H256, u32]> | [H256 | string | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<Option<Bytes>>, [ITuple<[H256, u32]>]> & QueryableStorageEntry<ApiType, [ITuple<[H256, u32]>]>;
      /**
       * The request status of a given hash.
       **/
      requestStatusFor: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletPreimageRequestStatus>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The request status of a given hash.
       **/
      statusFor: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletPreimageOldRequestStatus>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    proxy: {
      /**
       * The announcements made by the proxy (key).
       **/
      announcements: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[Vec<PalletProxyAnnouncement>, u128]>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The set of account proxies. Maps the account which has delegated to the accounts
       * which are being delegated to, together with the amount held on deposit.
       **/
      proxies: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[Vec<PalletProxyProxyDefinition>, u128]>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    recovery: {
      /**
       * Active recovery attempts.
       * 
       * First account is the account to be recovered, and the second account
       * is the user trying to recover the account.
       **/
      activeRecoveries: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<PalletRecoveryActiveRecovery>>, [AccountId32, AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32, AccountId32]>;
      /**
       * The list of allowed proxy accounts.
       * 
       * Map from the user who can access it to the recovered account.
       **/
      proxy: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<AccountId32>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The set of recoverable accounts and their recovery configuration.
       **/
      recoverable: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletRecoveryRecoveryConfig>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    referenda: {
      /**
       * The number of referenda being decided currently.
       **/
      decidingCount: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<u32>, [u16]> & QueryableStorageEntry<ApiType, [u16]>;
      /**
       * The metadata is a general information concerning the referendum.
       * The `Hash` refers to the preimage of the `Preimages` provider which can be a JSON
       * dump or IPFS hash of a JSON file.
       * 
       * Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
       * large preimages.
       **/
      metadataOf: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<H256>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The next free referendum index, aka the number of referenda started so far.
       **/
      referendumCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Information concerning any given referendum.
       **/
      referendumInfoFor: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletReferendaReferendumInfoConvictionVotingTally>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The sorted list of referenda ready to be decided but not yet being decided, ordered by
       * conviction-weighted approvals.
       * 
       * This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
       **/
      trackQueue: AugmentedQuery<ApiType, (arg: u16 | AnyNumber | Uint8Array) => Observable<Vec<ITuple<[u32, u128]>>>, [u16]> & QueryableStorageEntry<ApiType, [u16]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    registrar: {
      /**
       * The next free `ParaId`.
       **/
      nextFreeParaId: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Amount held on deposit for each para and the original depositor.
       * 
       * The given account ID is responsible for registering the code and initial head data, but may
       * only do so if it isn't yet registered. (After that, it's up to governance to do so.)
       **/
      paras: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PolkadotRuntimeCommonParasRegistrarParaInfo>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Pending swap operations.
       **/
      pendingSwap: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<u32>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    scheduler: {
      /**
       * Items to be executed, indexed by the block number that they should be executed on.
       **/
      agenda: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<Option<PalletSchedulerScheduled>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      incompleteSince: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Lookup from a name to the block number and index of the task.
       * 
       * For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
       * identities.
       **/
      lookup: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Option<ITuple<[u32, u32]>>>, [U8aFixed]> & QueryableStorageEntry<ApiType, [U8aFixed]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    session: {
      /**
       * Current index of the session.
       **/
      currentIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Indices of disabled validators.
       * 
       * The vec is always kept sorted so that we can find whether a given validator is
       * disabled using binary search. It gets cleared when `on_session_ending` returns
       * a new set of identities.
       **/
      disabledValidators: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The owner of a key. The key is the `KeyTypeId` + the encoded key.
       **/
      keyOwner: AugmentedQuery<ApiType, (arg: ITuple<[SpCoreCryptoKeyTypeId, Bytes]> | [SpCoreCryptoKeyTypeId | string | Uint8Array, Bytes | string | Uint8Array]) => Observable<Option<AccountId32>>, [ITuple<[SpCoreCryptoKeyTypeId, Bytes]>]> & QueryableStorageEntry<ApiType, [ITuple<[SpCoreCryptoKeyTypeId, Bytes]>]>;
      /**
       * The next session keys for a validator.
       **/
      nextKeys: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<StagingKusamaRuntimeSessionKeys>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * True if the underlying economic identities or weighting behind the validators
       * has changed in the queued validator set.
       **/
      queuedChanged: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The queued keys for the next session. When the next session begins, these keys
       * will be used to determine the validator's session keys.
       **/
      queuedKeys: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AccountId32, StagingKusamaRuntimeSessionKeys]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current set of validators.
       **/
      validators: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    slots: {
      /**
       * Amounts held on deposit for each (possibly future) leased parachain.
       * 
       * The actual amount locked on its behalf by any account at any time is the maximum of the
       * second values of the items in this list whose first value is the account.
       * 
       * The first item in the list is the amount locked for the current Lease Period. Following
       * items are for the subsequent lease periods.
       * 
       * The default value (an empty list) implies that the parachain no longer exists (or never
       * existed) as far as this pallet is concerned.
       * 
       * If a parachain doesn't exist *yet* but is scheduled to exist in the future, then it
       * will be left-padded with one or more `None`s to denote the fact that nothing is held on
       * deposit for the non-existent chain currently, but is held at some point in the future.
       * 
       * It is illegal for a `None` value to trail in the list.
       **/
      leases: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<Option<ITuple<[AccountId32, u128]>>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    society: {
      /**
       * The current bids, stored ordered by the value of the bid.
       **/
      bids: AugmentedQuery<ApiType, () => Observable<Vec<PalletSocietyBid>>, []> & QueryableStorageEntry<ApiType, []>;
      candidates: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletSocietyCandidacy>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The number of challenge rounds there have been. Used to identify stale DefenderVotes.
       **/
      challengeRoundCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Votes for the defender, keyed by challenge round.
       **/
      defenderVotes: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<PalletSocietyVote>>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
      /**
       * The defending member currently being challenged, along with a running tally of votes.
       **/
      defending: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[AccountId32, AccountId32, PalletSocietyTally]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The first member.
       **/
      founder: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The most primary from the most recently approved rank 0 members in the society.
       **/
      head: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current items in `Members` keyed by their unique index. Keys are densely populated
       * `0..MemberCount` (does not include `MemberCount`).
       **/
      memberByIndex: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<AccountId32>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The number of items in `Members` currently. (Doesn't include `SuspendedMembers`.)
       **/
      memberCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current members and their rank. Doesn't include `SuspendedMembers`.
       **/
      members: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletSocietyMemberRecord>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * At the end of the claim period, this contains the most recently approved members (along with
       * their bid and round ID) who is from the most recent round with the lowest bid. They will
       * become the new `Head`.
       **/
      nextHead: AugmentedQuery<ApiType, () => Observable<Option<PalletSocietyIntakeRecord>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The max number of members for the society at one time.
       **/
      parameters: AugmentedQuery<ApiType, () => Observable<Option<PalletSocietyGroupParams>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Information regarding rank-0 payouts, past and future.
       **/
      payouts: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletSocietyPayoutRecord>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Amount of our account balance that is specifically for the next round's bid(s).
       **/
      pot: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The number of rounds which have passed.
       **/
      roundCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * A hash of the rules of this society concerning membership. Can only be set once and
       * only by the founder.
       **/
      rules: AugmentedQuery<ApiType, () => Observable<Option<H256>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current skeptic.
       **/
      skeptic: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The set of suspended members, with their old membership record.
       **/
      suspendedMembers: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletSocietyMemberRecord>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Clear-cursor for Vote, map from Candidate -> (Maybe) Cursor.
       **/
      voteClearCursor: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<Bytes>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Double map from Candidate -> Voter -> (Maybe) Vote.
       **/
      votes: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<PalletSocietyVote>>, [AccountId32, AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32, AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    staking: {
      /**
       * The active era information, it holds index and start.
       * 
       * The active era is the era being currently rewarded. Validator set of this era must be
       * equal to [`SessionInterface::validators`].
       **/
      activeEra: AugmentedQuery<ApiType, () => Observable<Option<PalletStakingActiveEraInfo>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Map from all locked "stash" accounts to the controller account.
       * 
       * TWOX-NOTE: SAFE since `AccountId` is a secure hash.
       **/
      bonded: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<AccountId32>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * A mapping from still-bonded eras to the first session index of that era.
       * 
       * Must contains information for eras for the range:
       * `[active_era - bounding_duration; active_era]`
       **/
      bondedEras: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u32, u32]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The amount of currency given to reporters of a slash event which was
       * canceled by extraordinary circumstances (e.g. governance).
       **/
      canceledSlashPayout: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The threshold for when users can start calling `chill_other` for other validators /
       * nominators. The threshold is compared to the actual number of validators / nominators
       * (`CountFor*`) in the system compared to the configured max (`Max*Count`).
       **/
      chillThreshold: AugmentedQuery<ApiType, () => Observable<Option<Percent>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * History of claimed paged rewards by era and validator.
       * 
       * This is keyed by era and validator stash which maps to the set of page indexes which have
       * been claimed.
       * 
       * It is removed after [`Config::HistoryDepth`] eras.
       **/
      claimedRewards: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Vec<u32>>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
      /**
       * Counter for the related counted storage map
       **/
      counterForNominators: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Counter for the related counted storage map
       **/
      counterForValidators: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current era index.
       * 
       * This is the latest planned era, depending on how the Session pallet queues the validator
       * set, it might be active or not.
       **/
      currentEra: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The last planned session scheduled by the session pallet.
       * 
       * This is basically in sync with the call to [`pallet_session::SessionManager::new_session`].
       **/
      currentPlannedSession: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Rewards for the last [`Config::HistoryDepth`] eras.
       * If reward hasn't been set or has been removed then 0 reward is returned.
       **/
      erasRewardPoints: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<PalletStakingEraRewardPoints>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Exposure of validator at era.
       * 
       * This is keyed first by the era index to allow bulk deletion and then the stash account.
       * 
       * Is it removed after [`Config::HistoryDepth`] eras.
       * If stakers hasn't been set or has been removed then empty exposure is returned.
       * 
       * Note: Deprecated since v14. Use `EraInfo` instead to work with exposures.
       **/
      erasStakers: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<SpStakingExposure>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
      /**
       * Clipped Exposure of validator at era.
       * 
       * Note: This is deprecated, should be used as read-only and will be removed in the future.
       * New `Exposure`s are stored in a paged manner in `ErasStakersPaged` instead.
       * 
       * This is similar to [`ErasStakers`] but number of nominators exposed is reduced to the
       * `T::MaxExposurePageSize` biggest stakers.
       * (Note: the field `total` and `own` of the exposure remains unchanged).
       * This is used to limit the i/o cost for the nominator payout.
       * 
       * This is keyed fist by the era index to allow bulk deletion and then the stash account.
       * 
       * It is removed after [`Config::HistoryDepth`] eras.
       * If stakers hasn't been set or has been removed then empty exposure is returned.
       * 
       * Note: Deprecated since v14. Use `EraInfo` instead to work with exposures.
       **/
      erasStakersClipped: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<SpStakingExposure>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
      /**
       * Summary of validator exposure at a given era.
       * 
       * This contains the total stake in support of the validator and their own stake. In addition,
       * it can also be used to get the number of nominators backing this validator and the number of
       * exposure pages they are divided into. The page count is useful to determine the number of
       * pages of rewards that needs to be claimed.
       * 
       * This is keyed first by the era index to allow bulk deletion and then the stash account.
       * Should only be accessed through `EraInfo`.
       * 
       * Is it removed after [`Config::HistoryDepth`] eras.
       * If stakers hasn't been set or has been removed then empty overview is returned.
       **/
      erasStakersOverview: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<SpStakingPagedExposureMetadata>>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
      /**
       * Paginated exposure of a validator at given era.
       * 
       * This is keyed first by the era index to allow bulk deletion, then stash account and finally
       * the page. Should only be accessed through `EraInfo`.
       * 
       * This is cleared after [`Config::HistoryDepth`] eras.
       **/
      erasStakersPaged: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array, arg3: u32 | AnyNumber | Uint8Array) => Observable<Option<SpStakingExposurePage>>, [u32, AccountId32, u32]> & QueryableStorageEntry<ApiType, [u32, AccountId32, u32]>;
      /**
       * The session index at which the era start for the last [`Config::HistoryDepth`] eras.
       * 
       * Note: This tracks the starting session (i.e. session index when era start being active)
       * for the eras in `[CurrentEra - HISTORY_DEPTH, CurrentEra]`.
       **/
      erasStartSessionIndex: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<u32>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The total amount staked for the last [`Config::HistoryDepth`] eras.
       * If total hasn't been set or has been removed then 0 stake is returned.
       **/
      erasTotalStake: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u128>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Similar to `ErasStakers`, this holds the preferences of validators.
       * 
       * This is keyed first by the era index to allow bulk deletion and then the stash account.
       * 
       * Is it removed after [`Config::HistoryDepth`] eras.
       **/
      erasValidatorPrefs: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<PalletStakingValidatorPrefs>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
      /**
       * The total validator era payout for the last [`Config::HistoryDepth`] eras.
       * 
       * Eras that haven't finished yet or has been removed doesn't have reward.
       **/
      erasValidatorReward: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<u128>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Mode of era forcing.
       **/
      forceEra: AugmentedQuery<ApiType, () => Observable<PalletStakingForcing>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Any validators that may never be slashed or forcibly kicked. It's a Vec since they're
       * easy to initialize and the performance hit is minimal (we expect no more than four
       * invulnerables) and restricted to testnets.
       **/
      invulnerables: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Map from all (unlocked) "controller" accounts to the info regarding the staking.
       * 
       * Note: All the reads and mutations to this storage *MUST* be done through the methods exposed
       * by [`StakingLedger`] to ensure data and lock consistency.
       **/
      ledger: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletStakingStakingLedger>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The maximum nominator count before we stop allowing new validators to join.
       * 
       * When this value is not set, no limits are enforced.
       **/
      maxNominatorsCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The maximum validator count before we stop allowing new validators to join.
       * 
       * When this value is not set, no limits are enforced.
       **/
      maxValidatorsCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The minimum amount of commission that validators can set.
       * 
       * If set to `0`, no limit exists.
       **/
      minCommission: AugmentedQuery<ApiType, () => Observable<Perbill>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The minimum active nominator stake of the last successful election.
       **/
      minimumActiveStake: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Minimum number of staking participants before emergency conditions are imposed.
       **/
      minimumValidatorCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The minimum active bond to become and maintain the role of a nominator.
       **/
      minNominatorBond: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The minimum active bond to become and maintain the role of a validator.
       **/
      minValidatorBond: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The map from nominator stash key to their nomination preferences, namely the validators that
       * they wish to support.
       * 
       * Note that the keys of this storage map might become non-decodable in case the
       * account's [`NominationsQuota::MaxNominations`] configuration is decreased.
       * In this rare case, these nominators
       * are still existent in storage, their key is correct and retrievable (i.e. `contains_key`
       * indicates that they exist), but their value cannot be decoded. Therefore, the non-decodable
       * nominators will effectively not-exist, until they re-submit their preferences such that it
       * is within the bounds of the newly set `Config::MaxNominations`.
       * 
       * This implies that `::iter_keys().count()` and `::iter().count()` might return different
       * values for this map. Moreover, the main `::count()` is aligned with the former, namely the
       * number of keys that exist.
       * 
       * Lastly, if any of the nominators become non-decodable, they can be chilled immediately via
       * [`Call::chill_other`] dispatchable by anyone.
       * 
       * TWOX-NOTE: SAFE since `AccountId` is a secure hash.
       **/
      nominators: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletStakingNominations>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * All slashing events on nominators, mapped by era to the highest slash value of the era.
       **/
      nominatorSlashInEra: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<u128>>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
      /**
       * Indices of validators that have offended in the active era and whether they are currently
       * disabled.
       * 
       * This value should be a superset of disabled validators since not all offences lead to the
       * validator being disabled (if there was no slash). This is needed to track the percentage of
       * validators that have offended in the current era, ensuring a new era is forced if
       * `OffendingValidatorsThreshold` is reached. The vec is always kept sorted so that we can find
       * whether a given validator has previously offended using binary search. It gets cleared when
       * the era ends.
       **/
      offendingValidators: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u32, bool]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Where the reward payment should be made. Keyed by stash.
       * 
       * TWOX-NOTE: SAFE since `AccountId` is a secure hash.
       **/
      payee: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletStakingRewardDestination>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Slashing spans for stash accounts.
       **/
      slashingSpans: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletStakingSlashingSlashingSpans>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The percentage of the slash that is distributed to reporters.
       * 
       * The rest of the slashed value is handled by the `Slash`.
       **/
      slashRewardFraction: AugmentedQuery<ApiType, () => Observable<Perbill>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Records information about the maximum slash of a stash within a slashing span,
       * as well as how much reward has been paid out.
       **/
      spanSlash: AugmentedQuery<ApiType, (arg: ITuple<[AccountId32, u32]> | [AccountId32 | string | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<PalletStakingSlashingSpanRecord>, [ITuple<[AccountId32, u32]>]> & QueryableStorageEntry<ApiType, [ITuple<[AccountId32, u32]>]>;
      /**
       * All unapplied slashes that are queued for later.
       **/
      unappliedSlashes: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<PalletStakingUnappliedSlash>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The ideal number of active validators.
       **/
      validatorCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The map from (wannabe) validator stash key to the preferences of that validator.
       * 
       * TWOX-NOTE: SAFE since `AccountId` is a secure hash.
       **/
      validators: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletStakingValidatorPrefs>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * All slashing events on validators, mapped by era to the highest slash proportion
       * and slash value of the era.
       **/
      validatorSlashInEra: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<ITuple<[Perbill, u128]>>>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    system: {
      /**
       * The full account information for a particular account ID.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<FrameSystemAccountInfo>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Total length (in bytes) for all extrinsics put together, for the current block.
       **/
      allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * `Some` if a code upgrade has been authorized.
       **/
      authorizedUpgrade: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemCodeUpgradeAuthorization>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Map of block numbers to block hashes.
       **/
      blockHash: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<H256>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The current weight for the block.
       **/
      blockWeight: AugmentedQuery<ApiType, () => Observable<FrameSupportDispatchPerDispatchClassWeight>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Digest of the current block, also part of the block header.
       **/
      digest: AugmentedQuery<ApiType, () => Observable<SpRuntimeDigest>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The number of events in the `Events<T>` list.
       **/
      eventCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Events deposited for the current block.
       * 
       * NOTE: The item is unbound and should therefore never be read on chain.
       * It could otherwise inflate the PoV size of a block.
       * 
       * Events have a large in-memory size. Box the events to not go out-of-memory
       * just in case someone still reads them from within the runtime.
       **/
      events: AugmentedQuery<ApiType, () => Observable<Vec<FrameSystemEventRecord>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Mapping between a topic (represented by T::Hash) and a vector of indexes
       * of events in the `<Events<T>>` list.
       * 
       * All topic vectors have deterministic storage locations depending on the topic. This
       * allows light-clients to leverage the changes trie storage tracking mechanism and
       * in case of changes fetch the list of events of interest.
       * 
       * The value has the type `(BlockNumberFor<T>, EventIndex)` because if we used only just
       * the `EventIndex` then in case if the topic has the same contents on the next block
       * no notification will be triggered thus the event might be lost.
       **/
      eventTopics: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Vec<ITuple<[u32, u32]>>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The execution phase of the block.
       **/
      executionPhase: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemPhase>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Total extrinsics count for the current block.
       **/
      extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Extrinsics data for the current block (maps an extrinsic's index to its data).
       **/
      extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
       **/
      lastRuntimeUpgrade: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemLastRuntimeUpgradeInfo>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current block number being processed. Set by `execute_block`.
       **/
      number: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Hash of the previous block.
       **/
      parentHash: AugmentedQuery<ApiType, () => Observable<H256>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
       * (default) if not.
       **/
      upgradedToTripleRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
       **/
      upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    timestamp: {
      /**
       * Whether the timestamp has been updated in this block.
       * 
       * This value is updated to `true` upon successful submission of a timestamp by a node.
       * It is then checked at the end of each block execution in the `on_finalize` hook.
       **/
      didUpdate: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current time for the current block.
       **/
      now: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    transactionPayment: {
      nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      storageVersion: AugmentedQuery<ApiType, () => Observable<PalletTransactionPaymentReleases>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    treasury: {
      /**
       * Proposal indices that have been approved but not yet awarded.
       **/
      approvals: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The amount which has been reported as inactive to Currency.
       **/
      deactivated: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Number of proposals that have been made.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Proposals that have been made.
       **/
      proposals: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletTreasuryProposal>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The count of spends that have been made.
       **/
      spendCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Spends that have been approved and being processed.
       **/
      spends: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletTreasurySpendStatus>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    vesting: {
      /**
       * Storage version of the pallet.
       * 
       * New networks start with latest version, as determined by the genesis build.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<PalletVestingReleases>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Information regarding the vesting of a given account.
       **/
      vesting: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<Vec<PalletVestingVestingInfo>>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    voterList: {
      /**
       * Counter for the related counted storage map
       **/
      counterForListNodes: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * A bag stored in storage.
       * 
       * Stores a `Bag` struct, which stores head and tail pointers to itself.
       **/
      listBags: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PalletBagsListListBag>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      /**
       * A single node, within some bag.
       * 
       * Nodes store links forward and back within their respective bags.
       **/
      listNodes: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletBagsListListNode>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    whitelist: {
      whitelistedCall: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Null>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    xcmPallet: {
      /**
       * The existing asset traps.
       * 
       * Key is the blake2 256 hash of (origin, versioned `Assets`) pair. Value is the number of
       * times this pair has been trapped (usually just 1 if it exists at all).
       **/
      assetTraps: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<u32>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The current migration's stage, if any.
       **/
      currentMigration: AugmentedQuery<ApiType, () => Observable<Option<PalletXcmVersionMigrationStage>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Fungible assets which we know are locked on this chain.
       **/
      lockedFungibles: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<Vec<ITuple<[u128, XcmVersionedLocation]>>>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The ongoing queries.
       **/
      queries: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PalletXcmQueryStatus>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      /**
       * The latest available query index.
       **/
      queryCounter: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Fungible assets which we know are locked on a remote chain.
       **/
      remoteLockedFungibles: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array, arg3: XcmVersionedAssetId | { V3: any } | { V4: any } | string | Uint8Array) => Observable<Option<PalletXcmRemoteLockedFungibleRecord>>, [u32, AccountId32, XcmVersionedAssetId]> & QueryableStorageEntry<ApiType, [u32, AccountId32, XcmVersionedAssetId]>;
      /**
       * Default version to encode XCM when latest version of destination is unknown. If `None`,
       * then the destinations whose XCM version is unknown are considered unreachable.
       **/
      safeXcmVersion: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The Latest versions that we know various locations support.
       **/
      supportedVersion: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array) => Observable<Option<u32>>, [u32, XcmVersionedLocation]> & QueryableStorageEntry<ApiType, [u32, XcmVersionedLocation]>;
      /**
       * Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
       * the `u32` counter is the number of times that a send to the destination has been attempted,
       * which is used as a prioritization.
       **/
      versionDiscoveryQueue: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[XcmVersionedLocation, u32]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * All locations that we have requested version notifications from.
       **/
      versionNotifiers: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array) => Observable<Option<u64>>, [u32, XcmVersionedLocation]> & QueryableStorageEntry<ApiType, [u32, XcmVersionedLocation]>;
      /**
       * The target locations that are subscribed to our version changes, as well as the most recent
       * of our versions we informed them of.
       **/
      versionNotifyTargets: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array) => Observable<Option<ITuple<[u64, SpWeightsWeightV2Weight, u32]>>>, [u32, XcmVersionedLocation]> & QueryableStorageEntry<ApiType, [u32, XcmVersionedLocation]>;
      /**
       * Global suspension state of the XCM executor.
       **/
      xcmExecutionSuspended: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
  } // AugmentedQueries
} // declare module

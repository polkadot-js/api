// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { BTreeMap, Bytes, Compact, Data, Enum, Null, Option, Struct, Text, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types';
import type { AnyNumber, ITuple, Observable } from '@polkadot/types/types';
import type { FrameSystemAccountInfo, FrameSystemEventRecord, FrameSystemLastRuntimeUpgradeInfo, FrameSystemPhase, NodeRuntimeSessionKeys, PalletAssetsApproval, PalletAssetsAssetBalance, PalletAssetsAssetDetails, PalletAssetsAssetMetadata, PalletAuthorshipUncleEntryItem, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesReleases, PalletBalancesReserveData, PalletBountiesBounty, PalletCollectiveVotes, PalletContractsStorageContractInfo, PalletContractsStorageDeletedContract, PalletContractsWasmPrefabWasmModule, PalletDemocracyDelegations, PalletDemocracyPreimageStatus, PalletDemocracyReferendumInfo, PalletDemocracyReleases, PalletDemocracyVoteAccountVote, PalletDemocracyVotePriorLock, PalletDemocracyVoteThreshold, PalletDemocracyVoteVoting, PalletElectionProviderMultiPhaseElectionCompute, PalletElectionProviderMultiPhasePhase, PalletElectionProviderMultiPhaseReadySolution, PalletElectionProviderMultiPhaseRoundSnapshot, PalletElectionProviderMultiPhaseSignedSignedSubmission, PalletElectionProviderMultiPhaseSolutionOrSnapshotSize, PalletElectionsPhragmenSeatHolder, PalletElectionsPhragmenVoter, PalletGiltActiveGilt, PalletGiltActiveGiltsTotal, PalletGiltGiltBid, PalletGrandpaStoredPendingChange, PalletGrandpaStoredState, PalletIdentityIdentityInfo, PalletIdentityJudgement, PalletIdentityRegistrarInfo, PalletIdentityRegistration, PalletImOnlineSr25519AppSr25519Public, PalletLotteryLotteryConfig, PalletMultisigMultisig, PalletMultisigTimepoint, PalletProxyAnnouncement, PalletProxyProxyDefinition, PalletRecoveryActiveRecovery, PalletRecoveryRecoveryConfig, PalletSchedulerReleases, PalletSchedulerScheduledV2, PalletSocietyBid, PalletSocietyBidKind, PalletSocietyVote, PalletSocietyVouchingStatus, PalletStakingActiveEraInfo, PalletStakingEraRewardPoints, PalletStakingExposure, PalletStakingForcing, PalletStakingIndividualExposure, PalletStakingNominations, PalletStakingReleases, PalletStakingRewardDestination, PalletStakingSlashingSlashingSpans, PalletStakingSlashingSpanRecord, PalletStakingStakingLedger, PalletStakingUnappliedSlash, PalletStakingUnlockChunk, PalletStakingValidatorPrefs, PalletTipsOpenTip, PalletTransactionPaymentReleases, PalletTransactionStorageTransactionInfo, PalletTreasuryProposal, PalletUniquesClassDetails, PalletUniquesClassMetadata, PalletUniquesInstanceDetails, PalletUniquesInstanceMetadata, PalletVestingVestingInfo, SpConsensusBabeAllowedSlots, SpConsensusBabeAppPublic, SpConsensusBabeBabeEpochConfiguration, SpConsensusBabeDigestsNextConfigDescriptor, SpCoreCryptoKeyTypeId, SpFinalityGrandpaAppPublic, SpNposElectionsSupport, SpRuntimeGenericDigest, SpRuntimeGenericDigestDigestItem, SpStakingOffenceOffenceDetails } from '@polkadot/types/augment/lookup';
import type { AccountId32, Call, H256, Perbill, Percent } from '@polkadot/types/interfaces/runtime';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/storage' {
  export interface AugmentedQueries<ApiType> {
    assets: {
      account: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<PalletAssetsAssetBalance>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
      approvals: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array, arg3: AccountId32 | string | Uint8Array) => Observable<PalletAssetsApproval>, [u32, AccountId32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32, AccountId32]>;
      asset: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<PalletAssetsAssetDetails>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      metadata: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<PalletAssetsAssetMetadata>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    authorship: {
      author: AugmentedQuery<ApiType, () => Observable<AccountId32>, []> & QueryableStorageEntry<ApiType, []>;
      didSetUncles: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      uncles: AugmentedQuery<ApiType, () => Observable<Vec<PalletAuthorshipUncleEntryItem>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    babe: {
      authorities: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[SpConsensusBabeAppPublic, u64]>>>, []> & QueryableStorageEntry<ApiType, []>;
      authorVrfRandomness: AugmentedQuery<ApiType, () => Observable<Option<U8aFixed>>, []> & QueryableStorageEntry<ApiType, []>;
      currentSlot: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      epochConfig: AugmentedQuery<ApiType, () => Observable<SpConsensusBabeBabeEpochConfiguration>, []> & QueryableStorageEntry<ApiType, []>;
      epochIndex: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      epochStart: AugmentedQuery<ApiType, () => Observable<ITuple<[u32, u32]>>, []> & QueryableStorageEntry<ApiType, []>;
      genesisSlot: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      initialized: AugmentedQuery<ApiType, () => Observable<Option<U8aFixed>>, []> & QueryableStorageEntry<ApiType, []>;
      lateness: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      nextAuthorities: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[SpConsensusBabeAppPublic, u64]>>>, []> & QueryableStorageEntry<ApiType, []>;
      nextEpochConfig: AugmentedQuery<ApiType, () => Observable<SpConsensusBabeBabeEpochConfiguration>, []> & QueryableStorageEntry<ApiType, []>;
      nextRandomness: AugmentedQuery<ApiType, () => Observable<U8aFixed>, []> & QueryableStorageEntry<ApiType, []>;
      pendingEpochConfigChange: AugmentedQuery<ApiType, () => Observable<SpConsensusBabeDigestsNextConfigDescriptor>, []> & QueryableStorageEntry<ApiType, []>;
      randomness: AugmentedQuery<ApiType, () => Observable<U8aFixed>, []> & QueryableStorageEntry<ApiType, []>;
      segmentIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      underConstruction: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<U8aFixed>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    balances: {
      account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletBalancesAccountData>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      locks: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesBalanceLock>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      reserves: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesReserveData>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      storageVersion: AugmentedQuery<ApiType, () => Observable<PalletBalancesReleases>, []> & QueryableStorageEntry<ApiType, []>;
      totalIssuance: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    bounties: {
      bounties: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<PalletBountiesBounty>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      bountyApprovals: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      bountyCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      bountyDescriptions: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    contracts: {
      accountCounter: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      codeStorage: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<PalletContractsWasmPrefabWasmModule>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      contractInfoOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletContractsStorageContractInfo>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      deletionQueue: AugmentedQuery<ApiType, () => Observable<Vec<PalletContractsStorageDeletedContract>>, []> & QueryableStorageEntry<ApiType, []>;
      pristineCode: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Bytes>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    council: {
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      prime: AugmentedQuery<ApiType, () => Observable<AccountId32>, []> & QueryableStorageEntry<ApiType, []>;
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      proposalOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Call>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []> & QueryableStorageEntry<ApiType, []>;
      voting: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<PalletCollectiveVotes>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    democracy: {
      blacklist: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<ITuple<[u32, Vec<AccountId32>]>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      cancellations: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<bool>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      depositOf: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<ITuple<[Vec<AccountId32>, u128]>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      lastTabledWasExternal: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      locks: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<u32>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      lowestUnbaked: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      nextExternal: AugmentedQuery<ApiType, () => Observable<ITuple<[H256, PalletDemocracyVoteThreshold]>>, []> & QueryableStorageEntry<ApiType, []>;
      preimages: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<PalletDemocracyPreimageStatus>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      publicPropCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      publicProps: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u32, H256, AccountId32]>>>, []> & QueryableStorageEntry<ApiType, []>;
      referendumCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      referendumInfoOf: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<PalletDemocracyReferendumInfo>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      storageVersion: AugmentedQuery<ApiType, () => Observable<PalletDemocracyReleases>, []> & QueryableStorageEntry<ApiType, []>;
      votingOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletDemocracyVoteVoting>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    electionProviderMultiPhase: {
      currentPhase: AugmentedQuery<ApiType, () => Observable<PalletElectionProviderMultiPhasePhase>, []> & QueryableStorageEntry<ApiType, []>;
      desiredTargets: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      minimumUntrustedScore: AugmentedQuery<ApiType, () => Observable<Vec<u128>>, []> & QueryableStorageEntry<ApiType, []>;
      queuedSolution: AugmentedQuery<ApiType, () => Observable<PalletElectionProviderMultiPhaseReadySolution>, []> & QueryableStorageEntry<ApiType, []>;
      round: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      signedSubmissionIndices: AugmentedQuery<ApiType, () => Observable<BTreeMap<Vec<u128>, u32>>, []> & QueryableStorageEntry<ApiType, []>;
      signedSubmissionNextIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      signedSubmissionsMap: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<PalletElectionProviderMultiPhaseSignedSignedSubmission>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      snapshot: AugmentedQuery<ApiType, () => Observable<PalletElectionProviderMultiPhaseRoundSnapshot>, []> & QueryableStorageEntry<ApiType, []>;
      snapshotMetadata: AugmentedQuery<ApiType, () => Observable<PalletElectionProviderMultiPhaseSolutionOrSnapshotSize>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    elections: {
      candidates: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AccountId32, u128]>>>, []> & QueryableStorageEntry<ApiType, []>;
      electionRounds: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      members: AugmentedQuery<ApiType, () => Observable<Vec<PalletElectionsPhragmenSeatHolder>>, []> & QueryableStorageEntry<ApiType, []>;
      runnersUp: AugmentedQuery<ApiType, () => Observable<Vec<PalletElectionsPhragmenSeatHolder>>, []> & QueryableStorageEntry<ApiType, []>;
      voting: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletElectionsPhragmenVoter>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    gilt: {
      active: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<PalletGiltActiveGilt>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      activeTotal: AugmentedQuery<ApiType, () => Observable<PalletGiltActiveGiltsTotal>, []> & QueryableStorageEntry<ApiType, []>;
      queues: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<PalletGiltGiltBid>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      queueTotals: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u32, u128]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    grandpa: {
      currentSetId: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      nextForced: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      pendingChange: AugmentedQuery<ApiType, () => Observable<PalletGrandpaStoredPendingChange>, []> & QueryableStorageEntry<ApiType, []>;
      setIdSession: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<u32>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      stalled: AugmentedQuery<ApiType, () => Observable<ITuple<[u32, u32]>>, []> & QueryableStorageEntry<ApiType, []>;
      state: AugmentedQuery<ApiType, () => Observable<PalletGrandpaStoredState>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    identity: {
      identityOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletIdentityRegistration>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      registrars: AugmentedQuery<ApiType, () => Observable<Vec<Option<PalletIdentityRegistrarInfo>>>, []> & QueryableStorageEntry<ApiType, []>;
      subsOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[u128, Vec<AccountId32>]>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      superOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[AccountId32, Data]>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    imOnline: {
      authoredBlocks: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<u32>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
      heartbeatAfter: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      keys: AugmentedQuery<ApiType, () => Observable<Vec<PalletImOnlineSr25519AppSr25519Public>>, []> & QueryableStorageEntry<ApiType, []>;
      receivedHeartbeats: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32, u32]> & QueryableStorageEntry<ApiType, [u32, u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    indices: {
      accounts: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<ITuple<[AccountId32, u128, bool]>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    lottery: {
      callIndices: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u8, u8]>>>, []> & QueryableStorageEntry<ApiType, []>;
      lottery: AugmentedQuery<ApiType, () => Observable<PalletLotteryLotteryConfig>, []> & QueryableStorageEntry<ApiType, []>;
      lotteryIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      participants: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[u32, Vec<ITuple<[u8, u8]>>]>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      tickets: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<AccountId32>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      ticketsCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    mmr: {
      nodes: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<H256>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      numberOfLeaves: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      rootHash: AugmentedQuery<ApiType, () => Observable<H256>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    multisig: {
      calls: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<ITuple<[Bytes, AccountId32, u128]>>, [U8aFixed]> & QueryableStorageEntry<ApiType, [U8aFixed]>;
      multisigs: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: U8aFixed | string | Uint8Array) => Observable<PalletMultisigMultisig>, [AccountId32, U8aFixed]> & QueryableStorageEntry<ApiType, [AccountId32, U8aFixed]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    offences: {
      concurrentReportsIndex: AugmentedQuery<ApiType, (arg1: U8aFixed | string | Uint8Array, arg2: Bytes | string | Uint8Array) => Observable<Vec<H256>>, [U8aFixed, Bytes]> & QueryableStorageEntry<ApiType, [U8aFixed, Bytes]>;
      reports: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<SpStakingOffenceOffenceDetails>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      reportsByKindIndex: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Bytes>, [U8aFixed]> & QueryableStorageEntry<ApiType, [U8aFixed]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    proxy: {
      announcements: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[Vec<PalletProxyAnnouncement>, u128]>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      proxies: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[Vec<PalletProxyProxyDefinition>, u128]>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    randomnessCollectiveFlip: {
      randomMaterial: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    recovery: {
      activeRecoveries: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<PalletRecoveryActiveRecovery>, [AccountId32, AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32, AccountId32]>;
      proxy: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<AccountId32>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      recoverable: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletRecoveryRecoveryConfig>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    scheduler: {
      agenda: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<Option<PalletSchedulerScheduledV2>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      lookup: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<ITuple<[u32, u32]>>, [Bytes]> & QueryableStorageEntry<ApiType, [Bytes]>;
      storageVersion: AugmentedQuery<ApiType, () => Observable<PalletSchedulerReleases>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    session: {
      currentIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      disabledValidators: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      keyOwner: AugmentedQuery<ApiType, (arg: ITuple<[SpCoreCryptoKeyTypeId, Bytes]> | [SpCoreCryptoKeyTypeId | string | Uint8Array, Bytes | string | Uint8Array]) => Observable<AccountId32>, [ITuple<[SpCoreCryptoKeyTypeId, Bytes]>]> & QueryableStorageEntry<ApiType, [ITuple<[SpCoreCryptoKeyTypeId, Bytes]>]>;
      nextKeys: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<NodeRuntimeSessionKeys>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      queuedChanged: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      queuedKeys: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AccountId32, NodeRuntimeSessionKeys]>>>, []> & QueryableStorageEntry<ApiType, []>;
      validators: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    society: {
      bids: AugmentedQuery<ApiType, () => Observable<Vec<PalletSocietyBid>>, []> & QueryableStorageEntry<ApiType, []>;
      candidates: AugmentedQuery<ApiType, () => Observable<Vec<PalletSocietyBid>>, []> & QueryableStorageEntry<ApiType, []>;
      defender: AugmentedQuery<ApiType, () => Observable<AccountId32>, []> & QueryableStorageEntry<ApiType, []>;
      defenderVotes: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletSocietyVote>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      founder: AugmentedQuery<ApiType, () => Observable<AccountId32>, []> & QueryableStorageEntry<ApiType, []>;
      head: AugmentedQuery<ApiType, () => Observable<AccountId32>, []> & QueryableStorageEntry<ApiType, []>;
      maxMembers: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      payouts: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<ITuple<[u32, u128]>>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      pot: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      rules: AugmentedQuery<ApiType, () => Observable<H256>, []> & QueryableStorageEntry<ApiType, []>;
      strikes: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<u32>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      suspendedCandidates: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[u128, PalletSocietyBidKind]>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      suspendedMembers: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<bool>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      votes: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<PalletSocietyVote>, [AccountId32, AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32, AccountId32]>;
      vouching: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletSocietyVouchingStatus>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    staking: {
      activeEra: AugmentedQuery<ApiType, () => Observable<PalletStakingActiveEraInfo>, []> & QueryableStorageEntry<ApiType, []>;
      bonded: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<AccountId32>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      bondedEras: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u32, u32]>>>, []> & QueryableStorageEntry<ApiType, []>;
      canceledSlashPayout: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      chillThreshold: AugmentedQuery<ApiType, () => Observable<Percent>, []> & QueryableStorageEntry<ApiType, []>;
      counterForNominators: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      counterForValidators: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      currentEra: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      currentPlannedSession: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      earliestUnappliedSlash: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      erasRewardPoints: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<PalletStakingEraRewardPoints>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      erasStakers: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<PalletStakingExposure>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
      erasStakersClipped: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<PalletStakingExposure>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
      erasStartSessionIndex: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u32>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      erasTotalStake: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u128>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      erasValidatorPrefs: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<PalletStakingValidatorPrefs>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
      erasValidatorReward: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u128>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      forceEra: AugmentedQuery<ApiType, () => Observable<PalletStakingForcing>, []> & QueryableStorageEntry<ApiType, []>;
      historyDepth: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      invulnerables: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      ledger: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletStakingStakingLedger>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      maxNominatorsCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      maxValidatorsCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      minimumValidatorCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      minNominatorBond: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      minValidatorBond: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      nominators: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletStakingNominations>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      nominatorSlashInEra: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<u128>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
      payee: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletStakingRewardDestination>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      slashingSpans: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletStakingSlashingSlashingSpans>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      slashRewardFraction: AugmentedQuery<ApiType, () => Observable<Perbill>, []> & QueryableStorageEntry<ApiType, []>;
      spanSlash: AugmentedQuery<ApiType, (arg: ITuple<[AccountId32, u32]> | [AccountId32 | string | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<PalletStakingSlashingSpanRecord>, [ITuple<[AccountId32, u32]>]> & QueryableStorageEntry<ApiType, [ITuple<[AccountId32, u32]>]>;
      storageVersion: AugmentedQuery<ApiType, () => Observable<PalletStakingReleases>, []> & QueryableStorageEntry<ApiType, []>;
      unappliedSlashes: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<PalletStakingUnappliedSlash>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      validatorCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      validators: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletStakingValidatorPrefs>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      validatorSlashInEra: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<ITuple<[Perbill, u128]>>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    sudo: {
      key: AugmentedQuery<ApiType, () => Observable<AccountId32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    system: {
      account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<FrameSystemAccountInfo>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      blockHash: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<H256>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      blockWeight: AugmentedQuery<ApiType, () => Observable<{
    readonly normal: u64;
    readonly operational: u64;
    readonly mandatory: u64;
  } & Struct>, []> & QueryableStorageEntry<ApiType, []>;
      digest: AugmentedQuery<ApiType, () => Observable<SpRuntimeGenericDigest>, []> & QueryableStorageEntry<ApiType, []>;
      eventCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      events: AugmentedQuery<ApiType, () => Observable<Vec<FrameSystemEventRecord>>, []> & QueryableStorageEntry<ApiType, []>;
      eventTopics: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Vec<ITuple<[u32, u32]>>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      executionPhase: AugmentedQuery<ApiType, () => Observable<FrameSystemPhase>, []> & QueryableStorageEntry<ApiType, []>;
      extrinsicCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      lastRuntimeUpgrade: AugmentedQuery<ApiType, () => Observable<FrameSystemLastRuntimeUpgradeInfo>, []> & QueryableStorageEntry<ApiType, []>;
      number: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      parentHash: AugmentedQuery<ApiType, () => Observable<H256>, []> & QueryableStorageEntry<ApiType, []>;
      upgradedToTripleRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    technicalCommittee: {
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      prime: AugmentedQuery<ApiType, () => Observable<AccountId32>, []> & QueryableStorageEntry<ApiType, []>;
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      proposalOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Call>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []> & QueryableStorageEntry<ApiType, []>;
      voting: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<PalletCollectiveVotes>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    technicalMembership: {
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      prime: AugmentedQuery<ApiType, () => Observable<AccountId32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    timestamp: {
      didUpdate: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      now: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    tips: {
      reasons: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Bytes>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      tips: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<PalletTipsOpenTip>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
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
    transactionStorage: {
      blockTransactions: AugmentedQuery<ApiType, () => Observable<Vec<PalletTransactionStorageTransactionInfo>>, []> & QueryableStorageEntry<ApiType, []>;
      byteFee: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      chunkCount: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u32>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      entryFee: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      maxBlockTransactions: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      maxTransactionSize: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      proofChecked: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      storagePeriod: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      transactions: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<PalletTransactionStorageTransactionInfo>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    treasury: {
      approvals: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      proposals: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<PalletTreasuryProposal>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    uniques: {
      account: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: u32 | AnyNumber | Uint8Array, arg3: u32 | AnyNumber | Uint8Array) => Observable<Null>, [AccountId32, u32, u32]> & QueryableStorageEntry<ApiType, [AccountId32, u32, u32]>;
      asset: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<PalletUniquesInstanceDetails>, [u32, u32]> & QueryableStorageEntry<ApiType, [u32, u32]>;
      attribute: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: Option<u32> | null | object | string | Uint8Array, arg3: Bytes | string | Uint8Array) => Observable<ITuple<[Bytes, u128]>>, [u32, Option<u32>, Bytes]> & QueryableStorageEntry<ApiType, [u32, Option<u32>, Bytes]>;
      class: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<PalletUniquesClassDetails>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      classMetadataOf: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<PalletUniquesClassMetadata>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      instanceMetadataOf: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<PalletUniquesInstanceMetadata>, [u32, u32]> & QueryableStorageEntry<ApiType, [u32, u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    vesting: {
      vesting: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletVestingVestingInfo>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
  }

  export interface QueryableStorage<ApiType extends ApiTypes> extends AugmentedQueries<ApiType> {
    [key: string]: QueryableModuleStorage<ApiType>;
  }
}

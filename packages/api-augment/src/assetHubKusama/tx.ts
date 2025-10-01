// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/submittable';

import type { ApiTypes, AugmentedSubmittable, SubmittableExtrinsic, SubmittableExtrinsicFunction } from '@polkadot/api-base/types';
import type { Bytes, Compact, Option, U256, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types';
import type { EthereumAddress } from '@polkadot/types/interfaces/eth';
import type { AccountId32, Call, H160, H256, MultiAddress, Perbill, Percent } from '@polkadot/types/interfaces/runtime';
import type { AssetHubKusamaRuntimeOriginCaller, AssetHubKusamaRuntimeProxyType, AssetHubKusamaRuntimeRuntimeParameters, AssetHubKusamaRuntimeRuntimeTask, AssetHubKusamaRuntimeSessionKeys, AssetHubKusamaRuntimeStakingNposCompactSolution24, CumulusPalletParachainSystemParachainInherentBasicParachainInherentData, CumulusPalletParachainSystemParachainInherentInboundMessagesData, CumulusPrimitivesCoreAggregateMessageOrigin, FrameSupportPreimagesBounded, FrameSupportScheduleDispatchTime, PalletAhMigratorMigrationStage, PalletBalancesAdjustmentDirection, PalletConvictionVotingConviction, PalletConvictionVotingVoteAccountVote, PalletElectionProviderMultiBlockAdminOperation, PalletElectionProviderMultiBlockPagedRawSolution, PalletMigrationsHistoricCleanupSelector, PalletMigrationsMigrationCursor, PalletMultisigTimepoint, PalletNftsAttributeNamespace, PalletNftsCancelAttributesApprovalWitness, PalletNftsCollectionConfig, PalletNftsDestroyWitness, PalletNftsItemConfig, PalletNftsItemTip, PalletNftsMintSettings, PalletNftsMintWitness, PalletNftsPreSignedAttributes, PalletNftsPreSignedMint, PalletNftsPriceWithDirection, PalletNominationPoolsBondExtra, PalletNominationPoolsClaimPermission, PalletNominationPoolsCommissionChangeRate, PalletNominationPoolsCommissionClaimPermission, PalletNominationPoolsConfigOpAccountId32, PalletNominationPoolsConfigOpPerbill, PalletNominationPoolsConfigOpU128, PalletNominationPoolsConfigOpU32, PalletNominationPoolsPoolState, PalletRcMigratorAccountsAccount, PalletRcMigratorBountiesRcBountiesMessage, PalletRcMigratorChildBountiesPortableChildBountiesMessage, PalletRcMigratorClaimsRcClaimsMessage, PalletRcMigratorConvictionVotingRcConvictionVotingMessage, PalletRcMigratorCrowdloanRcCrowdloanMessage, PalletRcMigratorIndicesRcIndicesIndex, PalletRcMigratorMigrationFinishedData, PalletRcMigratorMultisigRcMultisig, PalletRcMigratorPreimageChunksRcPreimageChunk, PalletRcMigratorPreimageLegacyRequestStatusRcPreimageLegacyStatus, PalletRcMigratorPreimageRequestStatusPortableRequestStatus, PalletRcMigratorProxyRcProxy, PalletRcMigratorProxyRcProxyAnnouncement, PalletRcMigratorQueuePriority, PalletRcMigratorRecoveryPortableRecoveryMessage, PalletRcMigratorSchedulerAliasScheduled, PalletRcMigratorSchedulerRcSchedulerMessage, PalletRcMigratorSocietyPortableSocietyMessage, PalletRcMigratorStakingBagsListPortableBagsListMessage, PalletRcMigratorStakingDelegatedStakingPortableDelegatedStakingMessage, PalletRcMigratorStakingMessagePortableStakingMessage, PalletRcMigratorStakingNomPoolsRcNomPoolsMessage, PalletRcMigratorTreasuryPortableTreasuryMessage, PalletRcMigratorVestingRcVestingSchedule, PalletReferendaReferendumInfoRcPalletsOrigin, PalletRemoteProxyRemoteProxyProof, PalletStakingAsyncLedgerUnlockChunk, PalletStakingAsyncPalletConfigOpPerbill, PalletStakingAsyncPalletConfigOpPercent, PalletStakingAsyncPalletConfigOpU128, PalletStakingAsyncPalletConfigOpU32, PalletStakingAsyncRcClientOffence, PalletStakingAsyncRcClientSessionReport, PalletStakingAsyncRewardDestination, PalletStakingAsyncValidatorPrefs, PalletStateTrieMigrationMigrationLimits, PalletStateTrieMigrationMigrationTask, PalletStateTrieMigrationProgress, PalletUniquesDestroyWitness, PalletVestingVestingInfo, ParachainsCommonPayVersionedLocatableAccount, PolkadotRuntimeCommonClaimsEcdsaSignature, PolkadotRuntimeCommonClaimsStatementKind, PolkadotRuntimeCommonImplsVersionedLocatableAsset, SpNposElectionsElectionScore, SpRuntimeMultiSignature, SpWeightsWeightV2Weight, StagingXcmExecutorAssetTransferTransferType, StagingXcmV5Location, XcmV3WeightLimit, XcmVersionedAssetId, XcmVersionedAssets, XcmVersionedLocation, XcmVersionedXcm } from '@polkadot/types/lookup';

export type __AugmentedSubmittable = AugmentedSubmittable<() => unknown>;
export type __SubmittableExtrinsic<ApiType extends ApiTypes> = SubmittableExtrinsic<ApiType>;
export type __SubmittableExtrinsicFunction<ApiType extends ApiTypes> = SubmittableExtrinsicFunction<ApiType>;

declare module '@polkadot/api-base/types/submittable' {
  interface AugmentedSubmittables<ApiType extends ApiTypes> {
    ahMigrator: {
      /**
       * Finish the migration.
       * 
       * This is typically called by the Relay Chain to signal the migration has finished.
       * 
       * The `data` parameter might be `None` if we are running the migration for a second time
       * for some pallets and have already performed the checking account balance correction,
       * so we do not need to do it this time.
       **/
      finishMigration: AugmentedSubmittable<(data: Option<PalletRcMigratorMigrationFinishedData> | null | Uint8Array | PalletRcMigratorMigrationFinishedData | { rcBalanceKept?: any } | string) => SubmittableExtrinsic<ApiType>, [Option<PalletRcMigratorMigrationFinishedData>]>;
      /**
       * Set the migration stage.
       * 
       * This call is intended for emergency use only and is guarded by the
       * [`Config::AdminOrigin`].
       **/
      forceSetStage: AugmentedSubmittable<(stage: PalletAhMigratorMigrationStage | 'Pending' | 'DataMigrationOngoing' | 'MigrationDone' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletAhMigratorMigrationStage]>;
      /**
       * Receive accounts from the Relay Chain.
       * 
       * The accounts sent with `pallet_rc_migrator::Pallet::migrate_accounts` function.
       **/
      receiveAccounts: AugmentedSubmittable<(accounts: Vec<PalletRcMigratorAccountsAccount> | (PalletRcMigratorAccountsAccount | { who?: any; free?: any; reserved?: any; frozen?: any; holds?: any; freezes?: any; locks?: any; unnamedReserve?: any; consumers?: any; providers?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<PalletRcMigratorAccountsAccount>]>;
      receiveAssetRates: AugmentedSubmittable<(rates: Vec<ITuple<[PolkadotRuntimeCommonImplsVersionedLocatableAsset, u128]>> | ([PolkadotRuntimeCommonImplsVersionedLocatableAsset | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[PolkadotRuntimeCommonImplsVersionedLocatableAsset, u128]>>]>;
      receiveBagsListMessages: AugmentedSubmittable<(messages: Vec<PalletRcMigratorStakingBagsListPortableBagsListMessage> | (PalletRcMigratorStakingBagsListPortableBagsListMessage | { Node: any } | { Bag: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<PalletRcMigratorStakingBagsListPortableBagsListMessage>]>;
      receiveBountiesMessages: AugmentedSubmittable<(messages: Vec<PalletRcMigratorBountiesRcBountiesMessage> | (PalletRcMigratorBountiesRcBountiesMessage | { BountyCount: any } | { BountyApprovals: any } | { BountyDescriptions: any } | { Bounties: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<PalletRcMigratorBountiesRcBountiesMessage>]>;
      receiveChildBountiesMessages: AugmentedSubmittable<(messages: Vec<PalletRcMigratorChildBountiesPortableChildBountiesMessage> | (PalletRcMigratorChildBountiesPortableChildBountiesMessage | { ChildBountyCount: any } | { ParentChildBounties: any } | { ParentTotalChildBounties: any } | { ChildBounty: any } | { ChildBountyDescriptionsV1: any } | { V0ToV1ChildBountyIds: any } | { ChildrenCuratorFees: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<PalletRcMigratorChildBountiesPortableChildBountiesMessage>]>;
      receiveClaims: AugmentedSubmittable<(messages: Vec<PalletRcMigratorClaimsRcClaimsMessage> | (PalletRcMigratorClaimsRcClaimsMessage | { StorageValues: any } | { Claims: any } | { Vesting: any } | { Signing: any } | { Preclaims: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<PalletRcMigratorClaimsRcClaimsMessage>]>;
      receiveConvictionVotingMessages: AugmentedSubmittable<(messages: Vec<PalletRcMigratorConvictionVotingRcConvictionVotingMessage> | (PalletRcMigratorConvictionVotingRcConvictionVotingMessage | { VotingFor: any } | { ClassLocksFor: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<PalletRcMigratorConvictionVotingRcConvictionVotingMessage>]>;
      receiveCrowdloanMessages: AugmentedSubmittable<(messages: Vec<PalletRcMigratorCrowdloanRcCrowdloanMessage> | (PalletRcMigratorCrowdloanRcCrowdloanMessage | { LeaseReserve: any } | { CrowdloanContribution: any } | { CrowdloanReserve: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<PalletRcMigratorCrowdloanRcCrowdloanMessage>]>;
      receiveDelegatedStakingMessages: AugmentedSubmittable<(messages: Vec<PalletRcMigratorStakingDelegatedStakingPortableDelegatedStakingMessage> | (PalletRcMigratorStakingDelegatedStakingPortableDelegatedStakingMessage | { Delegators: any } | { Agents: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<PalletRcMigratorStakingDelegatedStakingPortableDelegatedStakingMessage>]>;
      receiveIndices: AugmentedSubmittable<(indices: Vec<PalletRcMigratorIndicesRcIndicesIndex> | (PalletRcMigratorIndicesRcIndicesIndex | { index?: any; who?: any; deposit?: any; frozen?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<PalletRcMigratorIndicesRcIndicesIndex>]>;
      /**
       * Receive multisigs from the Relay Chain.
       * 
       * This will be called from an XCM `Transact` inside a DMP from the relay chain. The
       * multisigs were prepared by
       * `pallet_rc_migrator::multisig::MultisigMigrator::migrate_many`.
       **/
      receiveMultisigs: AugmentedSubmittable<(accounts: Vec<PalletRcMigratorMultisigRcMultisig> | (PalletRcMigratorMultisigRcMultisig | { creator?: any; deposit?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<PalletRcMigratorMultisigRcMultisig>]>;
      receiveNomPoolsMessages: AugmentedSubmittable<(messages: Vec<PalletRcMigratorStakingNomPoolsRcNomPoolsMessage> | (PalletRcMigratorStakingNomPoolsRcNomPoolsMessage | { StorageValues: any } | { PoolMembers: any } | { BondedPools: any } | { RewardPools: any } | { SubPoolsStorage: any } | { Metadata: any } | { ReversePoolIdLookup: any } | { ClaimPermissions: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<PalletRcMigratorStakingNomPoolsRcNomPoolsMessage>]>;
      receivePreimageChunks: AugmentedSubmittable<(chunks: Vec<PalletRcMigratorPreimageChunksRcPreimageChunk> | (PalletRcMigratorPreimageChunksRcPreimageChunk | { preimageHash?: any; preimageLen?: any; chunkByteOffset?: any; chunkBytes?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<PalletRcMigratorPreimageChunksRcPreimageChunk>]>;
      receivePreimageLegacyStatus: AugmentedSubmittable<(legacyStatus: Vec<PalletRcMigratorPreimageLegacyRequestStatusRcPreimageLegacyStatus> | (PalletRcMigratorPreimageLegacyRequestStatusRcPreimageLegacyStatus | { hash_?: any; depositor?: any; deposit?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<PalletRcMigratorPreimageLegacyRequestStatusRcPreimageLegacyStatus>]>;
      receivePreimageRequestStatus: AugmentedSubmittable<(requestStatus: Vec<PalletRcMigratorPreimageRequestStatusPortableRequestStatus> | (PalletRcMigratorPreimageRequestStatusPortableRequestStatus | { hash_?: any; requestStatus?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<PalletRcMigratorPreimageRequestStatusPortableRequestStatus>]>;
      /**
       * Receive proxy announcements from the Relay Chain.
       **/
      receiveProxyAnnouncements: AugmentedSubmittable<(announcements: Vec<PalletRcMigratorProxyRcProxyAnnouncement> | (PalletRcMigratorProxyRcProxyAnnouncement | { depositor?: any; deposit?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<PalletRcMigratorProxyRcProxyAnnouncement>]>;
      /**
       * Receive proxies from the Relay Chain.
       **/
      receiveProxyProxies: AugmentedSubmittable<(proxies: Vec<PalletRcMigratorProxyRcProxy> | (PalletRcMigratorProxyRcProxy | { delegator?: any; deposit?: any; proxies?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<PalletRcMigratorProxyRcProxy>]>;
      receiveRecoveryMessages: AugmentedSubmittable<(messages: Vec<PalletRcMigratorRecoveryPortableRecoveryMessage> | (PalletRcMigratorRecoveryPortableRecoveryMessage | { Recoverable: any } | { ActiveRecoveries: any } | { Proxy: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<PalletRcMigratorRecoveryPortableRecoveryMessage>]>;
      receiveReferendaMetadata: AugmentedSubmittable<(metadata: Vec<ITuple<[u32, H256]>> | ([u32 | AnyNumber | Uint8Array, H256 | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[u32, H256]>>]>;
      /**
       * Receive referendum counts, deciding counts, votes for the track queue.
       **/
      receiveReferendaValues: AugmentedSubmittable<(values: Vec<ITuple<[Option<u32>, Vec<ITuple<[u16, u32]>>, Vec<ITuple<[u16, Vec<ITuple<[u32, u128]>>]>>]>> | ([Option<u32> | null | Uint8Array | u32 | AnyNumber, Vec<ITuple<[u16, u32]>> | ([u16 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array])[], Vec<ITuple<[u16, Vec<ITuple<[u32, u128]>>]>> | ([u16 | AnyNumber | Uint8Array, Vec<ITuple<[u32, u128]>> | ([u32 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array])[]])[]])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[Option<u32>, Vec<ITuple<[u16, u32]>>, Vec<ITuple<[u16, Vec<ITuple<[u32, u128]>>]>>]>>]>;
      /**
       * Receive referendums from the Relay Chain.
       **/
      receiveReferendums: AugmentedSubmittable<(referendums: Vec<ITuple<[u32, PalletReferendaReferendumInfoRcPalletsOrigin]>> | ([u32 | AnyNumber | Uint8Array, PalletReferendaReferendumInfoRcPalletsOrigin | { Ongoing: any } | { Approved: any } | { Rejected: any } | { Cancelled: any } | { TimedOut: any } | { Killed: any } | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[u32, PalletReferendaReferendumInfoRcPalletsOrigin]>>]>;
      receiveSchedulerAgendaMessages: AugmentedSubmittable<(messages: Vec<ITuple<[u32, Vec<Option<PalletRcMigratorSchedulerAliasScheduled>>]>> | ([u32 | AnyNumber | Uint8Array, Vec<Option<PalletRcMigratorSchedulerAliasScheduled>>])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[u32, Vec<Option<PalletRcMigratorSchedulerAliasScheduled>>]>>]>;
      receiveSchedulerMessages: AugmentedSubmittable<(messages: Vec<PalletRcMigratorSchedulerRcSchedulerMessage> | (PalletRcMigratorSchedulerRcSchedulerMessage | { IncompleteSince: any } | { Retries: any } | { Lookup: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<PalletRcMigratorSchedulerRcSchedulerMessage>]>;
      receiveSocietyMessages: AugmentedSubmittable<(messages: Vec<PalletRcMigratorSocietyPortableSocietyMessage> | (PalletRcMigratorSocietyPortableSocietyMessage | { Values: any } | { Member: any } | { Payout: any } | { MemberByIndex: any } | { SuspendedMembers: any } | { Candidates: any } | { Votes: any } | { VoteClearCursor: any } | { DefenderVotes: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<PalletRcMigratorSocietyPortableSocietyMessage>]>;
      receiveStakingMessages: AugmentedSubmittable<(messages: Vec<PalletRcMigratorStakingMessagePortableStakingMessage> | (PalletRcMigratorStakingMessagePortableStakingMessage | { Values: any } | { Invulnerables: any } | { Bonded: any } | { Ledger: any } | { Payee: any } | { Validators: any } | { Nominators: any } | { VirtualStakers: any } | { ErasStakersOverview: any } | { ErasStakersPaged: any } | { ClaimedRewards: any } | { ErasValidatorPrefs: any } | { ErasValidatorReward: any } | { ErasRewardPoints: any } | { ErasTotalStake: any } | { UnappliedSlashes: any } | { BondedEras: any } | { ValidatorSlashInEra: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<PalletRcMigratorStakingMessagePortableStakingMessage>]>;
      receiveTreasuryMessages: AugmentedSubmittable<(messages: Vec<PalletRcMigratorTreasuryPortableTreasuryMessage> | (PalletRcMigratorTreasuryPortableTreasuryMessage | { ProposalCount: any } | { Proposals: any } | { Approvals: any } | { SpendCount: any } | { Spends: any } | { LastSpendPeriod: any } | { Funds: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<PalletRcMigratorTreasuryPortableTreasuryMessage>]>;
      receiveVestingSchedules: AugmentedSubmittable<(schedules: Vec<PalletRcMigratorVestingRcVestingSchedule> | (PalletRcMigratorVestingRcVestingSchedule | { who?: any; schedules?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<PalletRcMigratorVestingRcVestingSchedule>]>;
      /**
       * XCM send call identical to the [`pallet_xcm::Pallet::send`] call but with the
       * [Config::SendXcm] router which will be able to send messages to the Relay Chain during
       * the migration.
       **/
      sendXcmMessage: AugmentedSubmittable<(dest: XcmVersionedLocation | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, message: XcmVersionedXcm | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, XcmVersionedXcm]>;
      /**
       * Set the DMP queue priority configuration.
       * 
       * Can only be called by the `AdminOrigin`.
       **/
      setDmpQueuePriority: AugmentedSubmittable<(updated: PalletRcMigratorQueuePriority | { Config: any } | { OverrideConfig: any } | { Disabled: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletRcMigratorQueuePriority]>;
      /**
       * Set the manager account id.
       * 
       * The manager has the similar to [`Config::AdminOrigin`] privileges except that it
       * can not set the manager account id via `set_manager` call.
       **/
      setManager: AugmentedSubmittable<(updated: Option<AccountId32> | null | Uint8Array | AccountId32 | string) => SubmittableExtrinsic<ApiType>, [Option<AccountId32>]>;
      /**
       * Start the data migration.
       * 
       * This is typically called by the Relay Chain to start the migration on the Asset Hub and
       * receive a handshake message indicating the Asset Hub's readiness.
       **/
      startMigration: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    ahOps: {
      /**
       * Transfer the balance from the pre-migration treasury account to the post-migration
       * treasury account.
       * 
       * This call can only be called after the migration is completed.
       **/
      transferToPostMigrationTreasury: AugmentedSubmittable<(assetId: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location]>;
      /**
       * Unreserve the deposit that was taken for creating a crowdloan.
       * 
       * This can be called once either:
       * - The crowdloan failed to win an auction and timed out
       * - Won an auction, all leases expired and all contributions are withdrawn
       * 
       * Can be called by any signed origin. The condition that all contributions are withdrawn
       * is in place since the reserve acts as a storage deposit.
       **/
      unreserveCrowdloanReserve: AugmentedSubmittable<(block: u32 | AnyNumber | Uint8Array, depositor: Option<AccountId32> | null | Uint8Array | AccountId32 | string, paraId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<AccountId32>, u32]>;
      /**
       * Unreserve the deposit that was taken for creating a crowdloan.
       * 
       * This can be called by any signed origin. It unreserves the lease deposit on the account
       * that won the lease auction. It can be unreserved once all leases expired. Note that it
       * will be called automatically from `withdraw_crowdloan_contribution` for the matching
       * crowdloan account.
       * 
       * Solo bidder accounts that won lease auctions can use this to unreserve their amount.
       **/
      unreserveLeaseDeposit: AugmentedSubmittable<(block: u32 | AnyNumber | Uint8Array, depositor: Option<AccountId32> | null | Uint8Array | AccountId32 | string, paraId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<AccountId32>, u32]>;
      /**
       * Withdraw the contribution of a finished crowdloan.
       * 
       * A crowdloan contribution can be withdrawn if either:
       * - The crowdloan failed to in an auction and timed out
       * - Won an auction and all leases expired
       * 
       * Can be called by any signed origin.
       **/
      withdrawCrowdloanContribution: AugmentedSubmittable<(block: u32 | AnyNumber | Uint8Array, depositor: Option<AccountId32> | null | Uint8Array | AccountId32 | string, paraId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<AccountId32>, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    assetConversion: {
      /**
       * Provide liquidity into the pool of `asset1` and `asset2`.
       * NOTE: an optimal amount of asset1 and asset2 will be calculated and
       * might be different than the provided `amount1_desired`/`amount2_desired`
       * thus you should provide the min amount you're happy to provide.
       * Params `amount1_min`/`amount2_min` represent that.
       * `mint_to` will be sent the liquidity tokens that represent this share of the pool.
       * 
       * NOTE: when encountering an incorrect exchange rate and non-withdrawable pool liquidity,
       * batch an atomic call with [`Pallet::add_liquidity`] and
       * [`Pallet::swap_exact_tokens_for_tokens`] or [`Pallet::swap_tokens_for_exact_tokens`]
       * calls to render the liquidity withdrawable and rectify the exchange rate.
       * 
       * Once liquidity is added, someone may successfully call
       * [`Pallet::swap_exact_tokens_for_tokens`].
       **/
      addLiquidity: AugmentedSubmittable<(asset1: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, asset2: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, amount1Desired: u128 | AnyNumber | Uint8Array, amount2Desired: u128 | AnyNumber | Uint8Array, amount1Min: u128 | AnyNumber | Uint8Array, amount2Min: u128 | AnyNumber | Uint8Array, mintTo: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location, StagingXcmV5Location, u128, u128, u128, u128, AccountId32]>;
      /**
       * Creates an empty liquidity pool and an associated new `lp_token` asset
       * (the id of which is returned in the `Event::PoolCreated` event).
       * 
       * Once a pool is created, someone may [`Pallet::add_liquidity`] to it.
       **/
      createPool: AugmentedSubmittable<(asset1: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, asset2: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location, StagingXcmV5Location]>;
      /**
       * Allows you to remove liquidity by providing the `lp_token_burn` tokens that will be
       * burned in the process. With the usage of `amount1_min_receive`/`amount2_min_receive`
       * it's possible to control the min amount of returned tokens you're happy with.
       **/
      removeLiquidity: AugmentedSubmittable<(asset1: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, asset2: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, lpTokenBurn: u128 | AnyNumber | Uint8Array, amount1MinReceive: u128 | AnyNumber | Uint8Array, amount2MinReceive: u128 | AnyNumber | Uint8Array, withdrawTo: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location, StagingXcmV5Location, u128, u128, u128, AccountId32]>;
      /**
       * Swap the exact amount of `asset1` into `asset2`.
       * `amount_out_min` param allows you to specify the min amount of the `asset2`
       * you're happy to receive.
       * 
       * [`AssetConversionApi::quote_price_exact_tokens_for_tokens`] runtime call can be called
       * for a quote.
       **/
      swapExactTokensForTokens: AugmentedSubmittable<(path: Vec<StagingXcmV5Location> | (StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array)[], amountIn: u128 | AnyNumber | Uint8Array, amountOutMin: u128 | AnyNumber | Uint8Array, sendTo: AccountId32 | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<StagingXcmV5Location>, u128, u128, AccountId32, bool]>;
      /**
       * Swap any amount of `asset1` to get the exact amount of `asset2`.
       * `amount_in_max` param allows to specify the max amount of the `asset1`
       * you're happy to provide.
       * 
       * [`AssetConversionApi::quote_price_tokens_for_exact_tokens`] runtime call can be called
       * for a quote.
       **/
      swapTokensForExactTokens: AugmentedSubmittable<(path: Vec<StagingXcmV5Location> | (StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array)[], amountOut: u128 | AnyNumber | Uint8Array, amountInMax: u128 | AnyNumber | Uint8Array, sendTo: AccountId32 | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<StagingXcmV5Location>, u128, u128, AccountId32, bool]>;
      /**
       * Touch an existing pool to fulfill prerequisites before providing liquidity, such as
       * ensuring that the pool's accounts are in place. It is typically useful when a pool
       * creator removes the pool's accounts and does not provide a liquidity. This action may
       * involve holding assets from the caller as a deposit for creating the pool's accounts.
       * 
       * The origin must be Signed.
       * 
       * - `asset1`: The asset ID of an existing pool with a pair (asset1, asset2).
       * - `asset2`: The asset ID of an existing pool with a pair (asset1, asset2).
       * 
       * Emits `Touched` event when successful.
       **/
      touch: AugmentedSubmittable<(asset1: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, asset2: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location, StagingXcmV5Location]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    assetRate: {
      /**
       * Initialize a conversion rate to native balance for the given asset.
       * 
       * ## Complexity
       * - O(1)
       **/
      create: AugmentedSubmittable<(assetKind: PolkadotRuntimeCommonImplsVersionedLocatableAsset | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, rate: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PolkadotRuntimeCommonImplsVersionedLocatableAsset, u128]>;
      /**
       * Remove an existing conversion rate to native balance for the given asset.
       * 
       * ## Complexity
       * - O(1)
       **/
      remove: AugmentedSubmittable<(assetKind: PolkadotRuntimeCommonImplsVersionedLocatableAsset | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PolkadotRuntimeCommonImplsVersionedLocatableAsset]>;
      /**
       * Update the conversion rate to native balance for the given asset.
       * 
       * ## Complexity
       * - O(1)
       **/
      update: AugmentedSubmittable<(assetKind: PolkadotRuntimeCommonImplsVersionedLocatableAsset | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, rate: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PolkadotRuntimeCommonImplsVersionedLocatableAsset, u128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    assets: {
      /**
       * Approve an amount of asset for transfer by a delegated third-party account.
       * 
       * Origin must be Signed.
       * 
       * Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account
       * for the purpose of holding the approval. If some non-zero amount of assets is already
       * approved from signing account to `delegate`, then it is topped up or unreserved to
       * meet the right value.
       * 
       * NOTE: The signing account does not need to own `amount` of assets at the point of
       * making this call.
       * 
       * - `id`: The identifier of the asset.
       * - `delegate`: The account to delegate permission to transfer asset.
       * - `amount`: The amount of asset that may be transferred by `delegate`. If there is
       * already an approval in place, then this acts additively.
       * 
       * Emits `ApprovedTransfer` on success.
       * 
       * Weight: `O(1)`
       **/
      approveTransfer: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, Compact<u128>]>;
      /**
       * Disallow further unprivileged transfers of an asset `id` to and from an account `who`.
       * 
       * Origin must be Signed and the sender should be the Freezer of the asset `id`.
       * 
       * - `id`: The identifier of the account's asset.
       * - `who`: The account to be unblocked.
       * 
       * Emits `Blocked`.
       * 
       * Weight: `O(1)`
       **/
      block: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
      /**
       * Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
       * 
       * Origin must be Signed and the sender should be the Manager of the asset `id`.
       * 
       * Bails with `NoAccount` if the `who` is already dead.
       * 
       * - `id`: The identifier of the asset to have some amount burned.
       * - `who`: The account to be debited from.
       * - `amount`: The maximum amount by which `who`'s balance should be reduced.
       * 
       * Emits `Burned` with the actual amount burned. If this takes the balance to below the
       * minimum for the asset, then the amount burned is increased to take it to zero.
       * 
       * Weight: `O(1)`
       * Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
       **/
      burn: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, Compact<u128>]>;
      /**
       * Cancel all of some asset approved for delegated transfer by a third-party account.
       * 
       * Origin must be Signed and there must be an approval in place between signer and
       * `delegate`.
       * 
       * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
       * 
       * - `id`: The identifier of the asset.
       * - `delegate`: The account delegated permission to transfer asset.
       * 
       * Emits `ApprovalCancelled` on success.
       * 
       * Weight: `O(1)`
       **/
      cancelApproval: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
      /**
       * Clear the metadata for an asset.
       * 
       * Origin must be Signed and the sender should be the Owner of the asset `id`.
       * 
       * Any deposit is freed for the asset owner.
       * 
       * - `id`: The identifier of the asset to clear.
       * 
       * Emits `MetadataCleared`.
       * 
       * Weight: `O(1)`
       **/
      clearMetadata: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Issue a new class of fungible assets from a public origin.
       * 
       * This new asset class has no assets initially and its owner is the origin.
       * 
       * The origin must conform to the configured `CreateOrigin` and have sufficient funds free.
       * 
       * Funds of sender are reserved by `AssetDeposit`.
       * 
       * Parameters:
       * - `id`: The identifier of the new asset. This must not be currently in use to identify
       * an existing asset. If [`NextAssetId`] is set, then this must be equal to it.
       * - `admin`: The admin of this class of assets. The admin is the initial address of each
       * member of the asset class's admin team.
       * - `min_balance`: The minimum balance of this new asset that any single account must
       * have. If an account's balance is reduced below this, then it collapses to zero.
       * 
       * Emits `Created` event when successful.
       * 
       * Weight: `O(1)`
       **/
      create: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, admin: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, minBalance: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, u128]>;
      /**
       * Destroy all accounts associated with a given asset.
       * 
       * `destroy_accounts` should only be called after `start_destroy` has been called, and the
       * asset is in a `Destroying` state.
       * 
       * Due to weight restrictions, this function may need to be called multiple times to fully
       * destroy all accounts. It will destroy `RemoveItemsLimit` accounts at a time.
       * 
       * - `id`: The identifier of the asset to be destroyed. This must identify an existing
       * asset.
       * 
       * Each call emits the `Event::DestroyedAccounts` event.
       **/
      destroyAccounts: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit).
       * 
       * `destroy_approvals` should only be called after `start_destroy` has been called, and the
       * asset is in a `Destroying` state.
       * 
       * Due to weight restrictions, this function may need to be called multiple times to fully
       * destroy all approvals. It will destroy `RemoveItemsLimit` approvals at a time.
       * 
       * - `id`: The identifier of the asset to be destroyed. This must identify an existing
       * asset.
       * 
       * Each call emits the `Event::DestroyedApprovals` event.
       **/
      destroyApprovals: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Complete destroying asset and unreserve currency.
       * 
       * `finish_destroy` should only be called after `start_destroy` has been called, and the
       * asset is in a `Destroying` state. All accounts or approvals should be destroyed before
       * hand.
       * 
       * - `id`: The identifier of the asset to be destroyed. This must identify an existing
       * asset.
       * 
       * Each successful call emits the `Event::Destroyed` event.
       **/
      finishDestroy: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Alter the attributes of a given asset.
       * 
       * Origin must be `ForceOrigin`.
       * 
       * - `id`: The identifier of the asset.
       * - `owner`: The new Owner of this asset.
       * - `issuer`: The new Issuer of this asset.
       * - `admin`: The new Admin of this asset.
       * - `freezer`: The new Freezer of this asset.
       * - `min_balance`: The minimum balance of this new asset that any single account must
       * have. If an account's balance is reduced below this, then it collapses to zero.
       * - `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient
       * value to account for the state bloat associated with its balance storage. If set to
       * `true`, then non-zero balances may be stored without a `consumer` reference (and thus
       * an ED in the Balances pallet or whatever else is used to control user-account state
       * growth).
       * - `is_frozen`: Whether this asset class is frozen except for permissioned/admin
       * instructions.
       * 
       * Emits `AssetStatusChanged` with the identity of the asset.
       * 
       * Weight: `O(1)`
       **/
      forceAssetStatus: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, issuer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, admin: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, freezer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, minBalance: Compact<u128> | AnyNumber | Uint8Array, isSufficient: bool | boolean | Uint8Array, isFrozen: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, MultiAddress, MultiAddress, MultiAddress, Compact<u128>, bool, bool]>;
      /**
       * Cancel all of some asset approved for delegated transfer by a third-party account.
       * 
       * Origin must be either ForceOrigin or Signed origin with the signer being the Admin
       * account of the asset `id`.
       * 
       * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
       * 
       * - `id`: The identifier of the asset.
       * - `delegate`: The account delegated permission to transfer asset.
       * 
       * Emits `ApprovalCancelled` on success.
       * 
       * Weight: `O(1)`
       **/
      forceCancelApproval: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, MultiAddress]>;
      /**
       * Clear the metadata for an asset.
       * 
       * Origin must be ForceOrigin.
       * 
       * Any deposit is returned.
       * 
       * - `id`: The identifier of the asset to clear.
       * 
       * Emits `MetadataCleared`.
       * 
       * Weight: `O(1)`
       **/
      forceClearMetadata: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Issue a new class of fungible assets from a privileged origin.
       * 
       * This new asset class has no assets initially.
       * 
       * The origin must conform to `ForceOrigin`.
       * 
       * Unlike `create`, no funds are reserved.
       * 
       * - `id`: The identifier of the new asset. This must not be currently in use to identify
       * an existing asset. If [`NextAssetId`] is set, then this must be equal to it.
       * - `owner`: The owner of this class of assets. The owner has full superuser permissions
       * over this asset, but may later change and configure the permissions using
       * `transfer_ownership` and `set_team`.
       * - `min_balance`: The minimum balance of this new asset that any single account must
       * have. If an account's balance is reduced below this, then it collapses to zero.
       * 
       * Emits `ForceCreated` event when successful.
       * 
       * Weight: `O(1)`
       **/
      forceCreate: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, isSufficient: bool | boolean | Uint8Array, minBalance: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, bool, Compact<u128>]>;
      /**
       * Force the metadata for an asset to some value.
       * 
       * Origin must be ForceOrigin.
       * 
       * Any deposit is left alone.
       * 
       * - `id`: The identifier of the asset to update.
       * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
       * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
       * - `decimals`: The number of decimals this asset uses to represent one unit.
       * 
       * Emits `MetadataSet`.
       * 
       * Weight: `O(N + S)` where N and S are the length of the name and symbol respectively.
       **/
      forceSetMetadata: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, name: Bytes | string | Uint8Array, symbol: Bytes | string | Uint8Array, decimals: u8 | AnyNumber | Uint8Array, isFrozen: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Bytes, Bytes, u8, bool]>;
      /**
       * Move some assets from one account to another.
       * 
       * Origin must be Signed and the sender should be the Admin of the asset `id`.
       * 
       * - `id`: The identifier of the asset to have some amount transferred.
       * - `source`: The account to be debited.
       * - `dest`: The account to be credited.
       * - `amount`: The amount by which the `source`'s balance of assets should be reduced and
       * `dest`'s balance increased. The amount actually transferred may be slightly greater in
       * the case that the transfer would otherwise take the `source` balance above zero but
       * below the minimum balance. Must be greater than zero.
       * 
       * Emits `Transferred` with the actual amount transferred. If this takes the source balance
       * to below the minimum for the asset, then the amount transferred is increased to take it
       * to zero.
       * 
       * Weight: `O(1)`
       * Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of
       * `dest`.
       **/
      forceTransfer: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, MultiAddress, Compact<u128>]>;
      /**
       * Disallow further unprivileged transfers of an asset `id` from an account `who`. `who`
       * must already exist as an entry in `Account`s of the asset. If you want to freeze an
       * account that does not have an entry, use `touch_other` first.
       * 
       * Origin must be Signed and the sender should be the Freezer of the asset `id`.
       * 
       * - `id`: The identifier of the asset to be frozen.
       * - `who`: The account to be frozen.
       * 
       * Emits `Frozen`.
       * 
       * Weight: `O(1)`
       **/
      freeze: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
      /**
       * Disallow further unprivileged transfers for the asset class.
       * 
       * Origin must be Signed and the sender should be the Freezer of the asset `id`.
       * 
       * - `id`: The identifier of the asset to be frozen.
       * 
       * Emits `Frozen`.
       * 
       * Weight: `O(1)`
       **/
      freezeAsset: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Mint assets of a particular class.
       * 
       * The origin must be Signed and the sender must be the Issuer of the asset `id`.
       * 
       * - `id`: The identifier of the asset to have some amount minted.
       * - `beneficiary`: The account to be credited with the minted assets.
       * - `amount`: The amount of the asset to be minted.
       * 
       * Emits `Issued` event when successful.
       * 
       * Weight: `O(1)`
       * Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
       **/
      mint: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, Compact<u128>]>;
      /**
       * Return the deposit (if any) of an asset account or a consumer reference (if any) of an
       * account.
       * 
       * The origin must be Signed.
       * 
       * - `id`: The identifier of the asset for which the caller would like the deposit
       * refunded.
       * - `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
       * 
       * It will fail with either [`Error::ContainsHolds`] or [`Error::ContainsFreezes`] if
       * the asset account contains holds or freezes in place.
       * 
       * Emits `Refunded` event when successful.
       **/
      refund: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, allowBurn: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, bool]>;
      /**
       * Return the deposit (if any) of a target asset account. Useful if you are the depositor.
       * 
       * The origin must be Signed and either the account owner, depositor, or asset `Admin`. In
       * order to burn a non-zero balance of the asset, the caller must be the account and should
       * use `refund`.
       * 
       * - `id`: The identifier of the asset for the account holding a deposit.
       * - `who`: The account to refund.
       * 
       * It will fail with either [`Error::ContainsHolds`] or [`Error::ContainsFreezes`] if
       * the asset account contains holds or freezes in place.
       * 
       * Emits `Refunded` event when successful.
       **/
      refundOther: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
      /**
       * Set the metadata for an asset.
       * 
       * Origin must be Signed and the sender should be the Owner of the asset `id`.
       * 
       * Funds of sender are reserved according to the formula:
       * `MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
       * account any already reserved funds.
       * 
       * - `id`: The identifier of the asset to update.
       * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
       * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
       * - `decimals`: The number of decimals this asset uses to represent one unit.
       * 
       * Emits `MetadataSet`.
       * 
       * Weight: `O(1)`
       **/
      setMetadata: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, name: Bytes | string | Uint8Array, symbol: Bytes | string | Uint8Array, decimals: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Bytes, Bytes, u8]>;
      /**
       * Sets the minimum balance of an asset.
       * 
       * Only works if there aren't any accounts that are holding the asset or if
       * the new value of `min_balance` is less than the old one.
       * 
       * Origin must be Signed and the sender has to be the Owner of the
       * asset `id`.
       * 
       * - `id`: The identifier of the asset.
       * - `min_balance`: The new value of `min_balance`.
       * 
       * Emits `AssetMinBalanceChanged` event when successful.
       **/
      setMinBalance: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, minBalance: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, u128]>;
      /**
       * Change the Issuer, Admin and Freezer of an asset.
       * 
       * Origin must be Signed and the sender should be the Owner of the asset `id`.
       * 
       * - `id`: The identifier of the asset to be frozen.
       * - `issuer`: The new Issuer of this asset.
       * - `admin`: The new Admin of this asset.
       * - `freezer`: The new Freezer of this asset.
       * 
       * Emits `TeamChanged`.
       * 
       * Weight: `O(1)`
       **/
      setTeam: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, issuer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, admin: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, freezer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, MultiAddress, MultiAddress]>;
      /**
       * Start the process of destroying a fungible asset class.
       * 
       * `start_destroy` is the first in a series of extrinsics that should be called, to allow
       * destruction of an asset class.
       * 
       * The origin must conform to `ForceOrigin` or must be `Signed` by the asset's `owner`.
       * 
       * - `id`: The identifier of the asset to be destroyed. This must identify an existing
       * asset.
       * 
       * It will fail with either [`Error::ContainsHolds`] or [`Error::ContainsFreezes`] if
       * an account contains holds or freezes in place.
       **/
      startDestroy: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Allow unprivileged transfers to and from an account again.
       * 
       * Origin must be Signed and the sender should be the Admin of the asset `id`.
       * 
       * - `id`: The identifier of the asset to be frozen.
       * - `who`: The account to be unfrozen.
       * 
       * Emits `Thawed`.
       * 
       * Weight: `O(1)`
       **/
      thaw: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
      /**
       * Allow unprivileged transfers for the asset again.
       * 
       * Origin must be Signed and the sender should be the Admin of the asset `id`.
       * 
       * - `id`: The identifier of the asset to be thawed.
       * 
       * Emits `Thawed`.
       * 
       * Weight: `O(1)`
       **/
      thawAsset: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Create an asset account for non-provider assets.
       * 
       * A deposit will be taken from the signer account.
       * 
       * - `origin`: Must be Signed; the signer account must have sufficient funds for a deposit
       * to be taken.
       * - `id`: The identifier of the asset for the account to be created.
       * 
       * Emits `Touched` event when successful.
       **/
      touch: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Create an asset account for `who`.
       * 
       * A deposit will be taken from the signer account.
       * 
       * - `origin`: Must be Signed by `Freezer` or `Admin` of the asset `id`; the signer account
       * must have sufficient funds for a deposit to be taken.
       * - `id`: The identifier of the asset for the account to be created.
       * - `who`: The account to be created.
       * 
       * Emits `Touched` event when successful.
       **/
      touchOther: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
      /**
       * Move some assets from the sender account to another.
       * 
       * Origin must be Signed.
       * 
       * - `id`: The identifier of the asset to have some amount transferred.
       * - `target`: The account to be credited.
       * - `amount`: The amount by which the sender's balance of assets should be reduced and
       * `target`'s balance increased. The amount actually transferred may be slightly greater in
       * the case that the transfer would otherwise take the sender balance above zero but below
       * the minimum balance. Must be greater than zero.
       * 
       * Emits `Transferred` with the actual amount transferred. If this takes the source balance
       * to below the minimum for the asset, then the amount transferred is increased to take it
       * to zero.
       * 
       * Weight: `O(1)`
       * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
       * `target`.
       **/
      transfer: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, Compact<u128>]>;
      /**
       * Transfer the entire transferable balance from the caller asset account.
       * 
       * NOTE: This function only attempts to transfer _transferable_ balances. This means that
       * any held, frozen, or minimum balance (when `keep_alive` is `true`), will not be
       * transferred by this function. To ensure that this function results in a killed account,
       * you might need to prepare the account by removing any reference counters, storage
       * deposits, etc...
       * 
       * The dispatch origin of this call must be Signed.
       * 
       * - `id`: The identifier of the asset for the account holding a deposit.
       * - `dest`: The recipient of the transfer.
       * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
       * of the funds the asset account has, causing the sender asset account to be killed
       * (false), or transfer everything except at least the minimum balance, which will
       * guarantee to keep the sender asset account alive (true).
       **/
      transferAll: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, bool]>;
      /**
       * Transfer some asset balance from a previously delegated account to some third-party
       * account.
       * 
       * Origin must be Signed and there must be an approval in place by the `owner` to the
       * signer.
       * 
       * If the entire amount approved for transfer is transferred, then any deposit previously
       * reserved by `approve_transfer` is unreserved.
       * 
       * - `id`: The identifier of the asset.
       * - `owner`: The account which previously approved for a transfer of at least `amount` and
       * from which the asset balance will be withdrawn.
       * - `destination`: The account to which the asset balance of `amount` will be transferred.
       * - `amount`: The amount of assets to transfer.
       * 
       * Emits `TransferredApproved` on success.
       * 
       * Weight: `O(1)`
       **/
      transferApproved: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, destination: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, MultiAddress, Compact<u128>]>;
      /**
       * Move some assets from the sender account to another, keeping the sender account alive.
       * 
       * Origin must be Signed.
       * 
       * - `id`: The identifier of the asset to have some amount transferred.
       * - `target`: The account to be credited.
       * - `amount`: The amount by which the sender's balance of assets should be reduced and
       * `target`'s balance increased. The amount actually transferred may be slightly greater in
       * the case that the transfer would otherwise take the sender balance above zero but below
       * the minimum balance. Must be greater than zero.
       * 
       * Emits `Transferred` with the actual amount transferred. If this takes the source balance
       * to below the minimum for the asset, then the amount transferred is increased to take it
       * to zero.
       * 
       * Weight: `O(1)`
       * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
       * `target`.
       **/
      transferKeepAlive: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, Compact<u128>]>;
      /**
       * Change the Owner of an asset.
       * 
       * Origin must be Signed and the sender should be the Owner of the asset `id`.
       * 
       * - `id`: The identifier of the asset.
       * - `owner`: The new Owner of this asset.
       * 
       * Emits `OwnerChanged`.
       * 
       * Weight: `O(1)`
       **/
      transferOwnership: AugmentedSubmittable<(id: Compact<u32> | AnyNumber | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    balances: {
      /**
       * Burn the specified liquid free balance from the origin account.
       * 
       * If the origin's account ends up below the existential deposit as a result
       * of the burn and `keep_alive` is false, the account will be reaped.
       * 
       * Unlike sending funds to a _burn_ address, which merely makes the funds inaccessible,
       * this `burn` operation will reduce total issuance by the amount _burned_.
       **/
      burn: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, bool]>;
      /**
       * Adjust the total issuance in a saturating way.
       * 
       * Can only be called by root and always needs a positive `delta`.
       * 
       * # Example
       **/
      forceAdjustTotalIssuance: AugmentedSubmittable<(direction: PalletBalancesAdjustmentDirection | 'Increase' | 'Decrease' | number | Uint8Array, delta: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletBalancesAdjustmentDirection, Compact<u128>]>;
      /**
       * Set the regular balance of a given account.
       * 
       * The dispatch origin for this call is `root`.
       **/
      forceSetBalance: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * Exactly as `transfer_allow_death`, except the origin must be root and the source account
       * may be specified.
       **/
      forceTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Compact<u128>]>;
      /**
       * Unreserve some balance from a user by force.
       * 
       * Can only be called by ROOT.
       **/
      forceUnreserve: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128]>;
      /**
       * Transfer the entire transferable balance from the caller account.
       * 
       * NOTE: This function only attempts to transfer _transferable_ balances. This means that
       * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
       * transferred by this function. To ensure that this function results in a killed account,
       * you might need to prepare the account by removing any reference counters, storage
       * deposits, etc...
       * 
       * The dispatch origin of this call must be Signed.
       * 
       * - `dest`: The recipient of the transfer.
       * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
       * of the funds the account has, causing the sender account to be killed (false), or
       * transfer everything except at least the existential deposit, which will guarantee to
       * keep the sender account alive (true).
       **/
      transferAll: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, bool]>;
      /**
       * Transfer some liquid free balance to another account.
       * 
       * `transfer_allow_death` will set the `FreeBalance` of the sender and receiver.
       * If the sender's account is below the existential deposit as a result
       * of the transfer, the account will be reaped.
       * 
       * The dispatch origin for this call must be `Signed` by the transactor.
       **/
      transferAllowDeath: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * Same as the [`transfer_allow_death`] call, but with a check that the transfer will not
       * kill the origin account.
       * 
       * 99% of the time you want [`transfer_allow_death`] instead.
       * 
       * [`transfer_allow_death`]: struct.Pallet.html#method.transfer
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * Upgrade a specified account.
       * 
       * - `origin`: Must be `Signed`.
       * - `who`: The account to be upgraded.
       * 
       * This will waive the transaction fee if at least all but 10% of the accounts needed to
       * be upgraded. (We let some not have to be upgraded just in order to allow for the
       * possibility of churn).
       **/
      upgradeAccounts: AugmentedSubmittable<(who: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    bounties: {
      /**
       * Accept the curator role for a bounty.
       * A deposit will be reserved from curator and refund upon successful payout.
       * 
       * May only be called from the curator.
       * 
       * ## Complexity
       * - O(1).
       **/
      acceptCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Approve a bounty proposal. At a later time, the bounty will be funded and become active
       * and the original deposit will be returned.
       * 
       * May only be called from `T::SpendOrigin`.
       * 
       * ## Complexity
       * - O(1).
       **/
      approveBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Approve bountry and propose a curator simultaneously.
       * This call is a shortcut to calling `approve_bounty` and `propose_curator` separately.
       * 
       * May only be called from `T::SpendOrigin`.
       * 
       * - `bounty_id`: Bounty ID to approve.
       * - `curator`: The curator account whom will manage this bounty.
       * - `fee`: The curator fee.
       * 
       * ## Complexity
       * - O(1).
       **/
      approveBountyWithCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, curator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, Compact<u128>]>;
      /**
       * Award bounty to a beneficiary account. The beneficiary will be able to claim the funds
       * after a delay.
       * 
       * The dispatch origin for this call must be the curator of this bounty.
       * 
       * - `bounty_id`: Bounty ID to award.
       * - `beneficiary`: The beneficiary account whom will receive the payout.
       * 
       * ## Complexity
       * - O(1).
       **/
      awardBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
      /**
       * Claim the payout from an awarded bounty after payout delay.
       * 
       * The dispatch origin for this call must be the beneficiary of this bounty.
       * 
       * - `bounty_id`: Bounty ID to claim.
       * 
       * ## Complexity
       * - O(1).
       **/
      claimBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Cancel a proposed or active bounty. All the funds will be sent to treasury and
       * the curator deposit will be unreserved if possible.
       * 
       * Only `T::RejectOrigin` is able to cancel a bounty.
       * 
       * - `bounty_id`: Bounty ID to cancel.
       * 
       * ## Complexity
       * - O(1).
       **/
      closeBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Extend the expiry time of an active bounty.
       * 
       * The dispatch origin for this call must be the curator of this bounty.
       * 
       * - `bounty_id`: Bounty ID to extend.
       * - `remark`: additional information.
       * 
       * ## Complexity
       * - O(1).
       **/
      extendBountyExpiry: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Bytes]>;
      /**
       * Poke the deposit reserved for creating a bounty proposal.
       * 
       * This can be used by accounts to update their reserved amount.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `bounty_id`: The bounty id for which to adjust the deposit.
       * 
       * If the deposit is updated, the difference will be reserved/unreserved from the
       * proposer's account.
       * 
       * The transaction is made free if the deposit is updated and paid otherwise.
       * 
       * Emits `DepositPoked` if the deposit is updated.
       **/
      pokeDeposit: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Propose a new bounty.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
       * `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
       * or slashed when rejected.
       * 
       * - `curator`: The curator account whom will manage this bounty.
       * - `fee`: The curator fee.
       * - `value`: The total payment amount of this bounty, curator fee included.
       * - `description`: The description of this bounty.
       **/
      proposeBounty: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, description: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Bytes]>;
      /**
       * Propose a curator to a funded bounty.
       * 
       * May only be called from `T::SpendOrigin`.
       * 
       * ## Complexity
       * - O(1).
       **/
      proposeCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, curator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, Compact<u128>]>;
      /**
       * Unassign curator from a bounty.
       * 
       * This function can only be called by the `RejectOrigin` a signed origin.
       * 
       * If this function is called by the `RejectOrigin`, we assume that the curator is
       * malicious or inactive. As a result, we will slash the curator when possible.
       * 
       * If the origin is the curator, we take this as a sign they are unable to do their job and
       * they willingly give up. We could slash them, but for now we allow them to recover their
       * deposit and exit without issue. (We may want to change this if it is abused.)
       * 
       * Finally, the origin can be anyone if and only if the curator is "inactive". This allows
       * anyone in the community to call out that a curator is not doing their due diligence, and
       * we should pick a new curator. In this case the curator should also be slashed.
       * 
       * ## Complexity
       * - O(1).
       **/
      unassignCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    childBounties: {
      /**
       * Accept the curator role for the child-bounty.
       * 
       * The dispatch origin for this call must be the curator of this
       * child-bounty.
       * 
       * A deposit will be reserved from the curator and refund upon
       * successful payout or cancellation.
       * 
       * Fee for curator is deducted from curator fee of parent bounty.
       * 
       * Parent bounty must be in active state, for this child-bounty call to
       * work.
       * 
       * Child-bounty must be in "CuratorProposed" state, for processing the
       * call. And state of child-bounty is moved to "Active" on successful
       * call completion.
       * 
       * - `parent_bounty_id`: Index of parent bounty.
       * - `child_bounty_id`: Index of child bounty.
       **/
      acceptCurator: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>]>;
      /**
       * Add a new child-bounty.
       * 
       * The dispatch origin for this call must be the curator of parent
       * bounty and the parent bounty must be in "active" state.
       * 
       * Child-bounty gets added successfully & fund gets transferred from
       * parent bounty to child-bounty account, if parent bounty has enough
       * funds, else the call fails.
       * 
       * Upper bound to maximum number of active  child bounties that can be
       * added are managed via runtime trait config
       * [`Config::MaxActiveChildBountyCount`].
       * 
       * If the call is success, the status of child-bounty is updated to
       * "Added".
       * 
       * - `parent_bounty_id`: Index of parent bounty for which child-bounty is being added.
       * - `value`: Value for executing the proposal.
       * - `description`: Text description for the child-bounty.
       **/
      addChildBounty: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array, description: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>, Bytes]>;
      /**
       * Award child-bounty to a beneficiary.
       * 
       * The beneficiary will be able to claim the funds after a delay.
       * 
       * The dispatch origin for this call must be the parent curator or
       * curator of this child-bounty.
       * 
       * Parent bounty must be in active state, for this child-bounty call to
       * work.
       * 
       * Child-bounty must be in active state, for processing the call. And
       * state of child-bounty is moved to "PendingPayout" on successful call
       * completion.
       * 
       * - `parent_bounty_id`: Index of parent bounty.
       * - `child_bounty_id`: Index of child bounty.
       * - `beneficiary`: Beneficiary account.
       **/
      awardChildBounty: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>, MultiAddress]>;
      /**
       * Claim the payout from an awarded child-bounty after payout delay.
       * 
       * The dispatch origin for this call may be any signed origin.
       * 
       * Call works independent of parent bounty state, No need for parent
       * bounty to be in active state.
       * 
       * The Beneficiary is paid out with agreed bounty value. Curator fee is
       * paid & curator deposit is unreserved.
       * 
       * Child-bounty must be in "PendingPayout" state, for processing the
       * call. And instance of child-bounty is removed from the state on
       * successful call completion.
       * 
       * - `parent_bounty_id`: Index of parent bounty.
       * - `child_bounty_id`: Index of child bounty.
       **/
      claimChildBounty: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>]>;
      /**
       * Cancel a proposed or active child-bounty. Child-bounty account funds
       * are transferred to parent bounty account. The child-bounty curator
       * deposit may be unreserved if possible.
       * 
       * The dispatch origin for this call must be either parent curator or
       * `T::RejectOrigin`.
       * 
       * If the state of child-bounty is `Active`, curator deposit is
       * unreserved.
       * 
       * If the state of child-bounty is `PendingPayout`, call fails &
       * returns `PendingPayout` error.
       * 
       * For the origin other than T::RejectOrigin, parent bounty must be in
       * active state, for this child-bounty call to work. For origin
       * T::RejectOrigin execution is forced.
       * 
       * Instance of child-bounty is removed from the state on successful
       * call completion.
       * 
       * - `parent_bounty_id`: Index of parent bounty.
       * - `child_bounty_id`: Index of child bounty.
       **/
      closeChildBounty: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>]>;
      /**
       * Propose curator for funded child-bounty.
       * 
       * The dispatch origin for this call must be curator of parent bounty.
       * 
       * Parent bounty must be in active state, for this child-bounty call to
       * work.
       * 
       * Child-bounty must be in "Added" state, for processing the call. And
       * state of child-bounty is moved to "CuratorProposed" on successful
       * call completion.
       * 
       * - `parent_bounty_id`: Index of parent bounty.
       * - `child_bounty_id`: Index of child bounty.
       * - `curator`: Address of child-bounty curator.
       * - `fee`: payment fee to child-bounty curator for execution.
       **/
      proposeCurator: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array, curator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>, MultiAddress, Compact<u128>]>;
      /**
       * Unassign curator from a child-bounty.
       * 
       * The dispatch origin for this call can be either `RejectOrigin`, or
       * the curator of the parent bounty, or any signed origin.
       * 
       * For the origin other than T::RejectOrigin and the child-bounty
       * curator, parent bounty must be in active state, for this call to
       * work. We allow child-bounty curator and T::RejectOrigin to execute
       * this call irrespective of the parent bounty state.
       * 
       * If this function is called by the `RejectOrigin` or the
       * parent bounty curator, we assume that the child-bounty curator is
       * malicious or inactive. As a result, child-bounty curator deposit is
       * slashed.
       * 
       * If the origin is the child-bounty curator, we take this as a sign
       * that they are unable to do their job, and are willingly giving up.
       * We could slash the deposit, but for now we allow them to unreserve
       * their deposit and exit without issue. (We may want to change this if
       * it is abused.)
       * 
       * Finally, the origin can be anyone iff the child-bounty curator is
       * "inactive". Expiry update due of parent bounty is used to estimate
       * inactive state of child-bounty curator.
       * 
       * This allows anyone in the community to call out that a child-bounty
       * curator is not doing their due diligence, and we should pick a new
       * one. In this case the child-bounty curator deposit is slashed.
       * 
       * State of child-bounty is moved to Added state on successful call
       * completion.
       * 
       * - `parent_bounty_id`: Index of parent bounty.
       * - `child_bounty_id`: Index of child bounty.
       **/
      unassignCurator: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    claims: {
      /**
       * Attest to a statement, needed to finalize the claims process.
       * 
       * WARNING: Insecure unless your chain includes `PrevalidateAttests` as a
       * `TransactionExtension`.
       * 
       * Unsigned Validation:
       * A call to attest is deemed valid if the sender has a `Preclaim` registered
       * and provides a `statement` which is expected for the account.
       * 
       * Parameters:
       * - `statement`: The identity of the statement which is being attested to in the
       * signature.
       * 
       * <weight>
       * The weight of this call is invariant over the input parameters.
       * Weight includes logic to do pre-validation on `attest` call.
       * 
       * Total Complexity: O(1)
       * </weight>
       **/
      attest: AugmentedSubmittable<(statement: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Make a claim to collect your DOTs.
       * 
       * The dispatch origin for this call must be _None_.
       * 
       * Unsigned Validation:
       * A call to claim is deemed valid if the signature provided matches
       * the expected signed message of:
       * 
       * > Ethereum Signed Message:
       * > (configured prefix string)(address)
       * 
       * and `address` matches the `dest` account.
       * 
       * Parameters:
       * - `dest`: The destination account to payout the claim.
       * - `ethereum_signature`: The signature of an ethereum signed message matching the format
       * described above.
       * 
       * <weight>
       * The weight of this call is invariant over the input parameters.
       * Weight includes logic to validate unsigned `claim` call.
       * 
       * Total Complexity: O(1)
       * </weight>
       **/
      claim: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array, ethereumSignature: PolkadotRuntimeCommonClaimsEcdsaSignature | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, PolkadotRuntimeCommonClaimsEcdsaSignature]>;
      /**
       * Make a claim to collect your DOTs by signing a statement.
       * 
       * The dispatch origin for this call must be _None_.
       * 
       * Unsigned Validation:
       * A call to `claim_attest` is deemed valid if the signature provided matches
       * the expected signed message of:
       * 
       * > Ethereum Signed Message:
       * > (configured prefix string)(address)(statement)
       * 
       * and `address` matches the `dest` account; the `statement` must match that which is
       * expected according to your purchase arrangement.
       * 
       * Parameters:
       * - `dest`: The destination account to payout the claim.
       * - `ethereum_signature`: The signature of an ethereum signed message matching the format
       * described above.
       * - `statement`: The identity of the statement which is being attested to in the
       * signature.
       * 
       * <weight>
       * The weight of this call is invariant over the input parameters.
       * Weight includes logic to validate unsigned `claim_attest` call.
       * 
       * Total Complexity: O(1)
       * </weight>
       **/
      claimAttest: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array, ethereumSignature: PolkadotRuntimeCommonClaimsEcdsaSignature | string | Uint8Array, statement: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, PolkadotRuntimeCommonClaimsEcdsaSignature, Bytes]>;
      /**
       * Mint a new claim to collect DOTs.
       * 
       * The dispatch origin for this call must be _Root_.
       * 
       * Parameters:
       * - `who`: The Ethereum address allowed to collect this claim.
       * - `value`: The number of DOTs that will be claimed.
       * - `vesting_schedule`: An optional vesting schedule for these DOTs.
       * 
       * <weight>
       * The weight of this call is invariant over the input parameters.
       * We assume worst case that both vesting and statement is being inserted.
       * 
       * Total Complexity: O(1)
       * </weight>
       **/
      mintClaim: AugmentedSubmittable<(who: EthereumAddress | string | Uint8Array, value: u128 | AnyNumber | Uint8Array, vestingSchedule: Option<ITuple<[u128, u128, u32]>> | null | Uint8Array | ITuple<[u128, u128, u32]> | [u128 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], statement: Option<PolkadotRuntimeCommonClaimsStatementKind> | null | Uint8Array | PolkadotRuntimeCommonClaimsStatementKind | 'Regular' | 'Saft' | number) => SubmittableExtrinsic<ApiType>, [EthereumAddress, u128, Option<ITuple<[u128, u128, u32]>>, Option<PolkadotRuntimeCommonClaimsStatementKind>]>;
      moveClaim: AugmentedSubmittable<(old: EthereumAddress | string | Uint8Array, updated: EthereumAddress | string | Uint8Array, maybePreclaim: Option<AccountId32> | null | Uint8Array | AccountId32 | string) => SubmittableExtrinsic<ApiType>, [EthereumAddress, EthereumAddress, Option<AccountId32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    collatorSelection: {
      /**
       * Add a new account `who` to the list of `Invulnerables` collators. `who` must have
       * registered session keys. If `who` is a candidate, they will be removed.
       * 
       * The origin for this call must be the `UpdateOrigin`.
       **/
      addInvulnerable: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Deregister `origin` as a collator candidate. Note that the collator can only leave on
       * session change. The `CandidacyBond` will be unreserved immediately.
       * 
       * This call will fail if the total number of candidates would drop below
       * `MinEligibleCollators`.
       **/
      leaveIntent: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Register this account as a collator candidate. The account must (a) already have
       * registered session keys and (b) be able to reserve the `CandidacyBond`.
       * 
       * This call is not available to `Invulnerable` collators.
       **/
      registerAsCandidate: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Remove an account `who` from the list of `Invulnerables` collators. `Invulnerables` must
       * be sorted.
       * 
       * The origin for this call must be the `UpdateOrigin`.
       **/
      removeInvulnerable: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Set the candidacy bond amount.
       * 
       * If the candidacy bond is increased by this call, all current candidates which have a
       * deposit lower than the new bond will be kicked from the list and get their deposits
       * back.
       * 
       * The origin for this call must be the `UpdateOrigin`.
       **/
      setCandidacyBond: AugmentedSubmittable<(bond: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Set the ideal number of non-invulnerable collators. If lowering this number, then the
       * number of running collators could be higher than this figure. Aside from that edge case,
       * there should be no other way to have more candidates than the desired number.
       * 
       * The origin for this call must be the `UpdateOrigin`.
       **/
      setDesiredCandidates: AugmentedSubmittable<(max: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the list of invulnerable (fixed) collators. These collators must do some
       * preparation, namely to have registered session keys.
       * 
       * The call will remove any accounts that have not registered keys from the set. That is,
       * it is non-atomic; the caller accepts all `AccountId`s passed in `new` _individually_ as
       * acceptable Invulnerables, and is not proposing a _set_ of new Invulnerables.
       * 
       * This call does not maintain mutual exclusivity of `Invulnerables` and `Candidates`. It
       * is recommended to use a batch of `add_invulnerable` and `remove_invulnerable` instead. A
       * `batch_all` can also be used to enforce atomicity. If any candidates are included in
       * `new`, they should be removed with `remove_invulnerable_candidate` after execution.
       * 
       * Must be called by the `UpdateOrigin`.
       **/
      setInvulnerables: AugmentedSubmittable<(updated: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * The caller `origin` replaces a candidate `target` in the collator candidate list by
       * reserving `deposit`. The amount `deposit` reserved by the caller must be greater than
       * the existing bond of the target it is trying to replace.
       * 
       * This call will fail if the caller is already a collator candidate or invulnerable, the
       * caller does not have registered session keys, the target is not a collator candidate,
       * and/or the `deposit` amount cannot be reserved.
       **/
      takeCandidateSlot: AugmentedSubmittable<(deposit: u128 | AnyNumber | Uint8Array, target: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, AccountId32]>;
      /**
       * Update the candidacy bond of collator candidate `origin` to a new amount `new_deposit`.
       * 
       * Setting a `new_deposit` that is lower than the current deposit while `origin` is
       * occupying a top-`DesiredCandidates` slot is not allowed.
       * 
       * This call will fail if `origin` is not a collator candidate, the updated bond is lower
       * than the minimum candidacy bond, and/or the amount cannot be reserved.
       **/
      updateBond: AugmentedSubmittable<(newDeposit: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    convictionVoting: {
      /**
       * Delegate the voting power (with some given conviction) of the sending account for a
       * particular class of polls.
       * 
       * The balance delegated is locked for as long as it's delegated, and thereafter for the
       * time appropriate for the conviction's lock period.
       * 
       * The dispatch origin of this call must be _Signed_, and the signing account must either:
       * - be delegating already; or
       * - have no voting activity (if there is, then it will need to be removed through
       * `remove_vote`).
       * 
       * - `to`: The account whose voting the `target` account's voting power will follow.
       * - `class`: The class of polls to delegate. To delegate multiple classes, multiple calls
       * to this function are required.
       * - `conviction`: The conviction that will be attached to the delegated votes. When the
       * account is undelegated, the funds will be locked for the corresponding period.
       * - `balance`: The amount of the account's balance to be used in delegating. This must not
       * be more than the account's current balance.
       * 
       * Emits `Delegated`.
       * 
       * Weight: `O(R)` where R is the number of polls the voter delegating to has
       * voted on. Weight is initially charged as if maximum votes, but is refunded later.
       **/
      delegate: AugmentedSubmittable<(clazz: u16 | AnyNumber | Uint8Array, to: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, conviction: PalletConvictionVotingConviction | 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x' | number | Uint8Array, balance: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, MultiAddress, PalletConvictionVotingConviction, u128]>;
      /**
       * Remove a vote for a poll.
       * 
       * If the `target` is equal to the signer, then this function is exactly equivalent to
       * `remove_vote`. If not equal to the signer, then the vote must have expired,
       * either because the poll was cancelled, because the voter lost the poll or
       * because the conviction period is over.
       * 
       * The dispatch origin of this call must be _Signed_.
       * 
       * - `target`: The account of the vote to be removed; this account must have voted for poll
       * `index`.
       * - `index`: The index of poll of the vote to be removed.
       * - `class`: The class of the poll.
       * 
       * Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.
       * Weight is calculated for the maximum number of vote.
       **/
      removeOtherVote: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, clazz: u16 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u16, u32]>;
      /**
       * Remove a vote for a poll.
       * 
       * If:
       * - the poll was cancelled, or
       * - the poll is ongoing, or
       * - the poll has ended such that
       * - the vote of the account was in opposition to the result; or
       * - there was no conviction to the account's vote; or
       * - the account made a split vote
       * ...then the vote is removed cleanly and a following call to `unlock` may result in more
       * funds being available.
       * 
       * If, however, the poll has ended and:
       * - it finished corresponding to the vote of the account, and
       * - the account made a standard vote with conviction, and
       * - the lock period of the conviction is not over
       * ...then the lock will be aggregated into the overall account's lock, which may involve
       * *overlocking* (where the two locks are combined into a single lock that is the maximum
       * of both the amount locked and the time is it locked for).
       * 
       * The dispatch origin of this call must be _Signed_, and the signer must have a vote
       * registered for poll `index`.
       * 
       * - `index`: The index of poll of the vote to be removed.
       * - `class`: Optional parameter, if given it indicates the class of the poll. For polls
       * which have finished or are cancelled, this must be `Some`.
       * 
       * Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.
       * Weight is calculated for the maximum number of vote.
       **/
      removeVote: AugmentedSubmittable<(clazz: Option<u16> | null | Uint8Array | u16 | AnyNumber, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<u16>, u32]>;
      /**
       * Undelegate the voting power of the sending account for a particular class of polls.
       * 
       * Tokens may be unlocked following once an amount of time consistent with the lock period
       * of the conviction with which the delegation was issued has passed.
       * 
       * The dispatch origin of this call must be _Signed_ and the signing account must be
       * currently delegating.
       * 
       * - `class`: The class of polls to remove the delegation from.
       * 
       * Emits `Undelegated`.
       * 
       * Weight: `O(R)` where R is the number of polls the voter delegating to has
       * voted on. Weight is initially charged as if maximum votes, but is refunded later.
       **/
      undelegate: AugmentedSubmittable<(clazz: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16]>;
      /**
       * Remove the lock caused by prior voting/delegating which has expired within a particular
       * class.
       * 
       * The dispatch origin of this call must be _Signed_.
       * 
       * - `class`: The class of polls to unlock.
       * - `target`: The account to remove the lock on.
       * 
       * Weight: `O(R)` with R number of vote of target.
       **/
      unlock: AugmentedSubmittable<(clazz: u16 | AnyNumber | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, MultiAddress]>;
      /**
       * Vote in a poll. If `vote.is_aye()`, the vote is to enact the proposal;
       * otherwise it is a vote to keep the status quo.
       * 
       * The dispatch origin of this call must be _Signed_.
       * 
       * - `poll_index`: The index of the poll to vote for.
       * - `vote`: The vote configuration.
       * 
       * Weight: `O(R)` where R is the number of polls the voter has voted on.
       **/
      vote: AugmentedSubmittable<(pollIndex: Compact<u32> | AnyNumber | Uint8Array, vote: PalletConvictionVotingVoteAccountVote | { Standard: any } | { Split: any } | { SplitAbstain: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, PalletConvictionVotingVoteAccountVote]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    cumulusXcm: {
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    foreignAssets: {
      /**
       * Approve an amount of asset for transfer by a delegated third-party account.
       * 
       * Origin must be Signed.
       * 
       * Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account
       * for the purpose of holding the approval. If some non-zero amount of assets is already
       * approved from signing account to `delegate`, then it is topped up or unreserved to
       * meet the right value.
       * 
       * NOTE: The signing account does not need to own `amount` of assets at the point of
       * making this call.
       * 
       * - `id`: The identifier of the asset.
       * - `delegate`: The account to delegate permission to transfer asset.
       * - `amount`: The amount of asset that may be transferred by `delegate`. If there is
       * already an approval in place, then this acts additively.
       * 
       * Emits `ApprovedTransfer` on success.
       * 
       * Weight: `O(1)`
       **/
      approveTransfer: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location, MultiAddress, Compact<u128>]>;
      /**
       * Disallow further unprivileged transfers of an asset `id` to and from an account `who`.
       * 
       * Origin must be Signed and the sender should be the Freezer of the asset `id`.
       * 
       * - `id`: The identifier of the account's asset.
       * - `who`: The account to be unblocked.
       * 
       * Emits `Blocked`.
       * 
       * Weight: `O(1)`
       **/
      block: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location, MultiAddress]>;
      /**
       * Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
       * 
       * Origin must be Signed and the sender should be the Manager of the asset `id`.
       * 
       * Bails with `NoAccount` if the `who` is already dead.
       * 
       * - `id`: The identifier of the asset to have some amount burned.
       * - `who`: The account to be debited from.
       * - `amount`: The maximum amount by which `who`'s balance should be reduced.
       * 
       * Emits `Burned` with the actual amount burned. If this takes the balance to below the
       * minimum for the asset, then the amount burned is increased to take it to zero.
       * 
       * Weight: `O(1)`
       * Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
       **/
      burn: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location, MultiAddress, Compact<u128>]>;
      /**
       * Cancel all of some asset approved for delegated transfer by a third-party account.
       * 
       * Origin must be Signed and there must be an approval in place between signer and
       * `delegate`.
       * 
       * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
       * 
       * - `id`: The identifier of the asset.
       * - `delegate`: The account delegated permission to transfer asset.
       * 
       * Emits `ApprovalCancelled` on success.
       * 
       * Weight: `O(1)`
       **/
      cancelApproval: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location, MultiAddress]>;
      /**
       * Clear the metadata for an asset.
       * 
       * Origin must be Signed and the sender should be the Owner of the asset `id`.
       * 
       * Any deposit is freed for the asset owner.
       * 
       * - `id`: The identifier of the asset to clear.
       * 
       * Emits `MetadataCleared`.
       * 
       * Weight: `O(1)`
       **/
      clearMetadata: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location]>;
      /**
       * Issue a new class of fungible assets from a public origin.
       * 
       * This new asset class has no assets initially and its owner is the origin.
       * 
       * The origin must conform to the configured `CreateOrigin` and have sufficient funds free.
       * 
       * Funds of sender are reserved by `AssetDeposit`.
       * 
       * Parameters:
       * - `id`: The identifier of the new asset. This must not be currently in use to identify
       * an existing asset. If [`NextAssetId`] is set, then this must be equal to it.
       * - `admin`: The admin of this class of assets. The admin is the initial address of each
       * member of the asset class's admin team.
       * - `min_balance`: The minimum balance of this new asset that any single account must
       * have. If an account's balance is reduced below this, then it collapses to zero.
       * 
       * Emits `Created` event when successful.
       * 
       * Weight: `O(1)`
       **/
      create: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, admin: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, minBalance: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location, MultiAddress, u128]>;
      /**
       * Destroy all accounts associated with a given asset.
       * 
       * `destroy_accounts` should only be called after `start_destroy` has been called, and the
       * asset is in a `Destroying` state.
       * 
       * Due to weight restrictions, this function may need to be called multiple times to fully
       * destroy all accounts. It will destroy `RemoveItemsLimit` accounts at a time.
       * 
       * - `id`: The identifier of the asset to be destroyed. This must identify an existing
       * asset.
       * 
       * Each call emits the `Event::DestroyedAccounts` event.
       **/
      destroyAccounts: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location]>;
      /**
       * Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit).
       * 
       * `destroy_approvals` should only be called after `start_destroy` has been called, and the
       * asset is in a `Destroying` state.
       * 
       * Due to weight restrictions, this function may need to be called multiple times to fully
       * destroy all approvals. It will destroy `RemoveItemsLimit` approvals at a time.
       * 
       * - `id`: The identifier of the asset to be destroyed. This must identify an existing
       * asset.
       * 
       * Each call emits the `Event::DestroyedApprovals` event.
       **/
      destroyApprovals: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location]>;
      /**
       * Complete destroying asset and unreserve currency.
       * 
       * `finish_destroy` should only be called after `start_destroy` has been called, and the
       * asset is in a `Destroying` state. All accounts or approvals should be destroyed before
       * hand.
       * 
       * - `id`: The identifier of the asset to be destroyed. This must identify an existing
       * asset.
       * 
       * Each successful call emits the `Event::Destroyed` event.
       **/
      finishDestroy: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location]>;
      /**
       * Alter the attributes of a given asset.
       * 
       * Origin must be `ForceOrigin`.
       * 
       * - `id`: The identifier of the asset.
       * - `owner`: The new Owner of this asset.
       * - `issuer`: The new Issuer of this asset.
       * - `admin`: The new Admin of this asset.
       * - `freezer`: The new Freezer of this asset.
       * - `min_balance`: The minimum balance of this new asset that any single account must
       * have. If an account's balance is reduced below this, then it collapses to zero.
       * - `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient
       * value to account for the state bloat associated with its balance storage. If set to
       * `true`, then non-zero balances may be stored without a `consumer` reference (and thus
       * an ED in the Balances pallet or whatever else is used to control user-account state
       * growth).
       * - `is_frozen`: Whether this asset class is frozen except for permissioned/admin
       * instructions.
       * 
       * Emits `AssetStatusChanged` with the identity of the asset.
       * 
       * Weight: `O(1)`
       **/
      forceAssetStatus: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, issuer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, admin: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, freezer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, minBalance: Compact<u128> | AnyNumber | Uint8Array, isSufficient: bool | boolean | Uint8Array, isFrozen: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location, MultiAddress, MultiAddress, MultiAddress, MultiAddress, Compact<u128>, bool, bool]>;
      /**
       * Cancel all of some asset approved for delegated transfer by a third-party account.
       * 
       * Origin must be either ForceOrigin or Signed origin with the signer being the Admin
       * account of the asset `id`.
       * 
       * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
       * 
       * - `id`: The identifier of the asset.
       * - `delegate`: The account delegated permission to transfer asset.
       * 
       * Emits `ApprovalCancelled` on success.
       * 
       * Weight: `O(1)`
       **/
      forceCancelApproval: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location, MultiAddress, MultiAddress]>;
      /**
       * Clear the metadata for an asset.
       * 
       * Origin must be ForceOrigin.
       * 
       * Any deposit is returned.
       * 
       * - `id`: The identifier of the asset to clear.
       * 
       * Emits `MetadataCleared`.
       * 
       * Weight: `O(1)`
       **/
      forceClearMetadata: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location]>;
      /**
       * Issue a new class of fungible assets from a privileged origin.
       * 
       * This new asset class has no assets initially.
       * 
       * The origin must conform to `ForceOrigin`.
       * 
       * Unlike `create`, no funds are reserved.
       * 
       * - `id`: The identifier of the new asset. This must not be currently in use to identify
       * an existing asset. If [`NextAssetId`] is set, then this must be equal to it.
       * - `owner`: The owner of this class of assets. The owner has full superuser permissions
       * over this asset, but may later change and configure the permissions using
       * `transfer_ownership` and `set_team`.
       * - `min_balance`: The minimum balance of this new asset that any single account must
       * have. If an account's balance is reduced below this, then it collapses to zero.
       * 
       * Emits `ForceCreated` event when successful.
       * 
       * Weight: `O(1)`
       **/
      forceCreate: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, isSufficient: bool | boolean | Uint8Array, minBalance: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location, MultiAddress, bool, Compact<u128>]>;
      /**
       * Force the metadata for an asset to some value.
       * 
       * Origin must be ForceOrigin.
       * 
       * Any deposit is left alone.
       * 
       * - `id`: The identifier of the asset to update.
       * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
       * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
       * - `decimals`: The number of decimals this asset uses to represent one unit.
       * 
       * Emits `MetadataSet`.
       * 
       * Weight: `O(N + S)` where N and S are the length of the name and symbol respectively.
       **/
      forceSetMetadata: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, name: Bytes | string | Uint8Array, symbol: Bytes | string | Uint8Array, decimals: u8 | AnyNumber | Uint8Array, isFrozen: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location, Bytes, Bytes, u8, bool]>;
      /**
       * Move some assets from one account to another.
       * 
       * Origin must be Signed and the sender should be the Admin of the asset `id`.
       * 
       * - `id`: The identifier of the asset to have some amount transferred.
       * - `source`: The account to be debited.
       * - `dest`: The account to be credited.
       * - `amount`: The amount by which the `source`'s balance of assets should be reduced and
       * `dest`'s balance increased. The amount actually transferred may be slightly greater in
       * the case that the transfer would otherwise take the `source` balance above zero but
       * below the minimum balance. Must be greater than zero.
       * 
       * Emits `Transferred` with the actual amount transferred. If this takes the source balance
       * to below the minimum for the asset, then the amount transferred is increased to take it
       * to zero.
       * 
       * Weight: `O(1)`
       * Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of
       * `dest`.
       **/
      forceTransfer: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location, MultiAddress, MultiAddress, Compact<u128>]>;
      /**
       * Disallow further unprivileged transfers of an asset `id` from an account `who`. `who`
       * must already exist as an entry in `Account`s of the asset. If you want to freeze an
       * account that does not have an entry, use `touch_other` first.
       * 
       * Origin must be Signed and the sender should be the Freezer of the asset `id`.
       * 
       * - `id`: The identifier of the asset to be frozen.
       * - `who`: The account to be frozen.
       * 
       * Emits `Frozen`.
       * 
       * Weight: `O(1)`
       **/
      freeze: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location, MultiAddress]>;
      /**
       * Disallow further unprivileged transfers for the asset class.
       * 
       * Origin must be Signed and the sender should be the Freezer of the asset `id`.
       * 
       * - `id`: The identifier of the asset to be frozen.
       * 
       * Emits `Frozen`.
       * 
       * Weight: `O(1)`
       **/
      freezeAsset: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location]>;
      /**
       * Mint assets of a particular class.
       * 
       * The origin must be Signed and the sender must be the Issuer of the asset `id`.
       * 
       * - `id`: The identifier of the asset to have some amount minted.
       * - `beneficiary`: The account to be credited with the minted assets.
       * - `amount`: The amount of the asset to be minted.
       * 
       * Emits `Issued` event when successful.
       * 
       * Weight: `O(1)`
       * Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
       **/
      mint: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location, MultiAddress, Compact<u128>]>;
      /**
       * Return the deposit (if any) of an asset account or a consumer reference (if any) of an
       * account.
       * 
       * The origin must be Signed.
       * 
       * - `id`: The identifier of the asset for which the caller would like the deposit
       * refunded.
       * - `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
       * 
       * It will fail with either [`Error::ContainsHolds`] or [`Error::ContainsFreezes`] if
       * the asset account contains holds or freezes in place.
       * 
       * Emits `Refunded` event when successful.
       **/
      refund: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, allowBurn: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location, bool]>;
      /**
       * Return the deposit (if any) of a target asset account. Useful if you are the depositor.
       * 
       * The origin must be Signed and either the account owner, depositor, or asset `Admin`. In
       * order to burn a non-zero balance of the asset, the caller must be the account and should
       * use `refund`.
       * 
       * - `id`: The identifier of the asset for the account holding a deposit.
       * - `who`: The account to refund.
       * 
       * It will fail with either [`Error::ContainsHolds`] or [`Error::ContainsFreezes`] if
       * the asset account contains holds or freezes in place.
       * 
       * Emits `Refunded` event when successful.
       **/
      refundOther: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location, MultiAddress]>;
      /**
       * Set the metadata for an asset.
       * 
       * Origin must be Signed and the sender should be the Owner of the asset `id`.
       * 
       * Funds of sender are reserved according to the formula:
       * `MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
       * account any already reserved funds.
       * 
       * - `id`: The identifier of the asset to update.
       * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
       * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
       * - `decimals`: The number of decimals this asset uses to represent one unit.
       * 
       * Emits `MetadataSet`.
       * 
       * Weight: `O(1)`
       **/
      setMetadata: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, name: Bytes | string | Uint8Array, symbol: Bytes | string | Uint8Array, decimals: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location, Bytes, Bytes, u8]>;
      /**
       * Sets the minimum balance of an asset.
       * 
       * Only works if there aren't any accounts that are holding the asset or if
       * the new value of `min_balance` is less than the old one.
       * 
       * Origin must be Signed and the sender has to be the Owner of the
       * asset `id`.
       * 
       * - `id`: The identifier of the asset.
       * - `min_balance`: The new value of `min_balance`.
       * 
       * Emits `AssetMinBalanceChanged` event when successful.
       **/
      setMinBalance: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, minBalance: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location, u128]>;
      /**
       * Change the Issuer, Admin and Freezer of an asset.
       * 
       * Origin must be Signed and the sender should be the Owner of the asset `id`.
       * 
       * - `id`: The identifier of the asset to be frozen.
       * - `issuer`: The new Issuer of this asset.
       * - `admin`: The new Admin of this asset.
       * - `freezer`: The new Freezer of this asset.
       * 
       * Emits `TeamChanged`.
       * 
       * Weight: `O(1)`
       **/
      setTeam: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, issuer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, admin: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, freezer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location, MultiAddress, MultiAddress, MultiAddress]>;
      /**
       * Start the process of destroying a fungible asset class.
       * 
       * `start_destroy` is the first in a series of extrinsics that should be called, to allow
       * destruction of an asset class.
       * 
       * The origin must conform to `ForceOrigin` or must be `Signed` by the asset's `owner`.
       * 
       * - `id`: The identifier of the asset to be destroyed. This must identify an existing
       * asset.
       * 
       * It will fail with either [`Error::ContainsHolds`] or [`Error::ContainsFreezes`] if
       * an account contains holds or freezes in place.
       **/
      startDestroy: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location]>;
      /**
       * Allow unprivileged transfers to and from an account again.
       * 
       * Origin must be Signed and the sender should be the Admin of the asset `id`.
       * 
       * - `id`: The identifier of the asset to be frozen.
       * - `who`: The account to be unfrozen.
       * 
       * Emits `Thawed`.
       * 
       * Weight: `O(1)`
       **/
      thaw: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location, MultiAddress]>;
      /**
       * Allow unprivileged transfers for the asset again.
       * 
       * Origin must be Signed and the sender should be the Admin of the asset `id`.
       * 
       * - `id`: The identifier of the asset to be thawed.
       * 
       * Emits `Thawed`.
       * 
       * Weight: `O(1)`
       **/
      thawAsset: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location]>;
      /**
       * Create an asset account for non-provider assets.
       * 
       * A deposit will be taken from the signer account.
       * 
       * - `origin`: Must be Signed; the signer account must have sufficient funds for a deposit
       * to be taken.
       * - `id`: The identifier of the asset for the account to be created.
       * 
       * Emits `Touched` event when successful.
       **/
      touch: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location]>;
      /**
       * Create an asset account for `who`.
       * 
       * A deposit will be taken from the signer account.
       * 
       * - `origin`: Must be Signed by `Freezer` or `Admin` of the asset `id`; the signer account
       * must have sufficient funds for a deposit to be taken.
       * - `id`: The identifier of the asset for the account to be created.
       * - `who`: The account to be created.
       * 
       * Emits `Touched` event when successful.
       **/
      touchOther: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location, MultiAddress]>;
      /**
       * Move some assets from the sender account to another.
       * 
       * Origin must be Signed.
       * 
       * - `id`: The identifier of the asset to have some amount transferred.
       * - `target`: The account to be credited.
       * - `amount`: The amount by which the sender's balance of assets should be reduced and
       * `target`'s balance increased. The amount actually transferred may be slightly greater in
       * the case that the transfer would otherwise take the sender balance above zero but below
       * the minimum balance. Must be greater than zero.
       * 
       * Emits `Transferred` with the actual amount transferred. If this takes the source balance
       * to below the minimum for the asset, then the amount transferred is increased to take it
       * to zero.
       * 
       * Weight: `O(1)`
       * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
       * `target`.
       **/
      transfer: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location, MultiAddress, Compact<u128>]>;
      /**
       * Transfer the entire transferable balance from the caller asset account.
       * 
       * NOTE: This function only attempts to transfer _transferable_ balances. This means that
       * any held, frozen, or minimum balance (when `keep_alive` is `true`), will not be
       * transferred by this function. To ensure that this function results in a killed account,
       * you might need to prepare the account by removing any reference counters, storage
       * deposits, etc...
       * 
       * The dispatch origin of this call must be Signed.
       * 
       * - `id`: The identifier of the asset for the account holding a deposit.
       * - `dest`: The recipient of the transfer.
       * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
       * of the funds the asset account has, causing the sender asset account to be killed
       * (false), or transfer everything except at least the minimum balance, which will
       * guarantee to keep the sender asset account alive (true).
       **/
      transferAll: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location, MultiAddress, bool]>;
      /**
       * Transfer some asset balance from a previously delegated account to some third-party
       * account.
       * 
       * Origin must be Signed and there must be an approval in place by the `owner` to the
       * signer.
       * 
       * If the entire amount approved for transfer is transferred, then any deposit previously
       * reserved by `approve_transfer` is unreserved.
       * 
       * - `id`: The identifier of the asset.
       * - `owner`: The account which previously approved for a transfer of at least `amount` and
       * from which the asset balance will be withdrawn.
       * - `destination`: The account to which the asset balance of `amount` will be transferred.
       * - `amount`: The amount of assets to transfer.
       * 
       * Emits `TransferredApproved` on success.
       * 
       * Weight: `O(1)`
       **/
      transferApproved: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, destination: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location, MultiAddress, MultiAddress, Compact<u128>]>;
      /**
       * Move some assets from the sender account to another, keeping the sender account alive.
       * 
       * Origin must be Signed.
       * 
       * - `id`: The identifier of the asset to have some amount transferred.
       * - `target`: The account to be credited.
       * - `amount`: The amount by which the sender's balance of assets should be reduced and
       * `target`'s balance increased. The amount actually transferred may be slightly greater in
       * the case that the transfer would otherwise take the sender balance above zero but below
       * the minimum balance. Must be greater than zero.
       * 
       * Emits `Transferred` with the actual amount transferred. If this takes the source balance
       * to below the minimum for the asset, then the amount transferred is increased to take it
       * to zero.
       * 
       * Weight: `O(1)`
       * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
       * `target`.
       **/
      transferKeepAlive: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location, MultiAddress, Compact<u128>]>;
      /**
       * Change the Owner of an asset.
       * 
       * Origin must be Signed and the sender should be the Owner of the asset `id`.
       * 
       * - `id`: The identifier of the asset.
       * - `owner`: The new Owner of this asset.
       * 
       * Emits `OwnerChanged`.
       * 
       * Weight: `O(1)`
       **/
      transferOwnership: AugmentedSubmittable<(id: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location, MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    indices: {
      /**
       * Assign an previously unassigned index.
       * 
       * Payment: `Deposit` is reserved from the sender account.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `index`: the index to be claimed. This must not be in use.
       * 
       * Emits `IndexAssigned` if successful.
       * 
       * ## Complexity
       * - `O(1)`.
       **/
      claim: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Force an index to an account. This doesn't require a deposit. If the index is already
       * held, then any deposit is reimbursed to its current owner.
       * 
       * The dispatch origin for this call must be _Root_.
       * 
       * - `index`: the index to be (re-)assigned.
       * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
       * - `freeze`: if set to `true`, will freeze the index so it cannot be transferred.
       * 
       * Emits `IndexAssigned` if successful.
       * 
       * ## Complexity
       * - `O(1)`.
       **/
      forceTransfer: AugmentedSubmittable<(updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, index: u32 | AnyNumber | Uint8Array, freeze: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32, bool]>;
      /**
       * Free up an index owned by the sender.
       * 
       * Payment: Any previous deposit placed for the index is unreserved in the sender account.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must own the index.
       * 
       * - `index`: the index to be freed. This must be owned by the sender.
       * 
       * Emits `IndexFreed` if successful.
       * 
       * ## Complexity
       * - `O(1)`.
       **/
      free: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Freeze an index so it will always point to the sender account. This consumes the
       * deposit.
       * 
       * The dispatch origin for this call must be _Signed_ and the signing account must have a
       * non-frozen account `index`.
       * 
       * - `index`: the index to be frozen in place.
       * 
       * Emits `IndexFrozen` if successful.
       * 
       * ## Complexity
       * - `O(1)`.
       **/
      freeze: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Poke the deposit reserved for an index.
       * 
       * The dispatch origin for this call must be _Signed_ and the signing account must have a
       * non-frozen account `index`.
       * 
       * The transaction fees is waived if the deposit is changed after poking/reconsideration.
       * 
       * - `index`: the index whose deposit is to be poked/reconsidered.
       * 
       * Emits `DepositPoked` if successful.
       **/
      pokeDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Assign an index already owned by the sender to another account. The balance reservation
       * is effectively transferred to the new account.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `index`: the index to be re-assigned. This must be owned by the sender.
       * - `new`: the new owner of the index. This function is a no-op if it is equal to sender.
       * 
       * Emits `IndexAssigned` if successful.
       * 
       * ## Complexity
       * - `O(1)`.
       **/
      transfer: AugmentedSubmittable<(updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    messageQueue: {
      /**
       * Execute an overweight message.
       * 
       * Temporary processing errors will be propagated whereas permanent errors are treated
       * as success condition.
       * 
       * - `origin`: Must be `Signed`.
       * - `message_origin`: The origin from which the message to be executed arrived.
       * - `page`: The page in the queue in which the message to be executed is sitting.
       * - `index`: The index into the queue of the message to be executed.
       * - `weight_limit`: The maximum amount of weight allowed to be consumed in the execution
       * of the message.
       * 
       * Benchmark complexity considerations: O(index + weight_limit).
       **/
      executeOverweight: AugmentedSubmittable<(messageOrigin: CumulusPrimitivesCoreAggregateMessageOrigin | { Here: any } | { Parent: any } | { Sibling: any } | string | Uint8Array, page: u32 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array, weightLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CumulusPrimitivesCoreAggregateMessageOrigin, u32, u32, SpWeightsWeightV2Weight]>;
      /**
       * Remove a page which has no more messages remaining to be processed or is stale.
       **/
      reapPage: AugmentedSubmittable<(messageOrigin: CumulusPrimitivesCoreAggregateMessageOrigin | { Here: any } | { Parent: any } | { Sibling: any } | string | Uint8Array, pageIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CumulusPrimitivesCoreAggregateMessageOrigin, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    multiBlockElection: {
      /**
       * Manage this pallet.
       * 
       * The origin of this call must be [`Config::AdminOrigin`].
       * 
       * See [`AdminOperation`] for various operations that are possible.
       **/
      manage: AugmentedSubmittable<(op: PalletElectionProviderMultiBlockAdminOperation | { ForceRotateRound: any } | { ForceSetPhase: any } | { EmergencySetSolution: any } | { EmergencyFallback: any } | { SetMinUntrustedScore: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletElectionProviderMultiBlockAdminOperation]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    multiBlockElectionSigned: {
      /**
       * Retract a submission.
       * 
       * A portion of the deposit may be returned, based on the [`Config::BailoutGraceRatio`].
       * 
       * This will fully remove the solution from storage.
       **/
      bail: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Clear the data of a submitter form an old round.
       * 
       * The dispatch origin of this call must be signed, and the original submitter.
       * 
       * This can only be called for submissions that end up being discarded, as in they are not
       * processed and they end up lingering in the queue.
       **/
      clearOldRoundData: AugmentedSubmittable<(round: u32 | AnyNumber | Uint8Array, witnessPages: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Register oneself for an upcoming signed election.
       **/
      register: AugmentedSubmittable<(claimedScore: SpNposElectionsElectionScore | { minimalStake?: any; sumStake?: any; sumStakeSquared?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpNposElectionsElectionScore]>;
      /**
       * Set the invulnerable list.
       * 
       * Dispatch origin must the the same as [`crate::Config::AdminOrigin`].
       **/
      setInvulnerables: AugmentedSubmittable<(inv: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * Submit a single page of a solution.
       * 
       * Must always come after [`Pallet::register`].
       * 
       * `maybe_solution` can be set to `None` to erase the page.
       * 
       * Collects deposits from the signed origin based on [`Config::DepositBase`] and
       * [`Config::DepositPerPage`].
       **/
      submitPage: AugmentedSubmittable<(page: u32 | AnyNumber | Uint8Array, maybeSolution: Option<AssetHubKusamaRuntimeStakingNposCompactSolution24> | null | Uint8Array | AssetHubKusamaRuntimeStakingNposCompactSolution24 | { votes1?: any; votes2?: any; votes3?: any; votes4?: any; votes5?: any; votes6?: any; votes7?: any; votes8?: any; votes9?: any; votes10?: any; votes11?: any; votes12?: any; votes13?: any; votes14?: any; votes15?: any; votes16?: any; votes17?: any; votes18?: any; votes19?: any; votes20?: any; votes21?: any; votes22?: any; votes23?: any; votes24?: any } | string) => SubmittableExtrinsic<ApiType>, [u32, Option<AssetHubKusamaRuntimeStakingNposCompactSolution24>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    multiBlockElectionUnsigned: {
      /**
       * Submit an unsigned solution.
       * 
       * This works very much like an inherent, as only the validators are permitted to submit
       * anything. By default validators will compute this call in their `offchain_worker` hook
       * and try and submit it back.
       * 
       * This is different from signed page submission mainly in that the solution page is
       * verified on the fly.
       * 
       * The `paged_solution` may contain at most [`Config::MinerPages`] pages. They are
       * interpreted as msp -> lsp, as per [`crate::Pallet::msp_range_for`].
       * 
       * For example, if `Pages = 4`, and `MinerPages = 2`, our full snapshot range would be [0,
       * 1, 2, 3], with 3 being msp. But, in this case, then the `paged_raw_solution.pages` is
       * expected to correspond to `[snapshot(2), snapshot(3)]`.
       **/
      submitUnsigned: AugmentedSubmittable<(pagedSolution: PalletElectionProviderMultiBlockPagedRawSolution | { solutionPages?: any; score?: any; round?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletElectionProviderMultiBlockPagedRawSolution]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    multiBlockElectionVerifier: {
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    multiBlockMigrations: {
      /**
       * Clears the `Historic` set.
       * 
       * `map_cursor` must be set to the last value that was returned by the
       * `HistoricCleared` event. The first time `None` can be used. `limit` must be chosen in a
       * way that will result in a sensible weight.
       **/
      clearHistoric: AugmentedSubmittable<(selector: PalletMigrationsHistoricCleanupSelector | { Specific: any } | { Wildcard: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletMigrationsHistoricCleanupSelector]>;
      /**
       * Forces the onboarding of the migrations.
       * 
       * This process happens automatically on a runtime upgrade. It is in place as an emergency
       * measurement. The cursor needs to be `None` for this to succeed.
       **/
      forceOnboardMbms: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Allows root to set an active cursor to forcefully start/forward the migration process.
       * 
       * This is an edge-case version of [`Self::force_set_cursor`] that allows to set the
       * `started_at` value to the next block number. Otherwise this would not be possible, since
       * `force_set_cursor` takes an absolute block number. Setting `started_at` to `None`
       * indicates that the current block number plus one should be used.
       **/
      forceSetActiveCursor: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array, innerCursor: Option<Bytes> | null | Uint8Array | Bytes | string, startedAt: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [u32, Option<Bytes>, Option<u32>]>;
      /**
       * Allows root to set a cursor to forcefully start, stop or forward the migration process.
       * 
       * Should normally not be needed and is only in place as emergency measure. Note that
       * restarting the migration process in this manner will not call the
       * [`MigrationStatusHandler::started`] hook or emit an `UpgradeStarted` event.
       **/
      forceSetCursor: AugmentedSubmittable<(cursor: Option<PalletMigrationsMigrationCursor> | null | Uint8Array | PalletMigrationsMigrationCursor | { Active: any } | { Stuck: any } | string) => SubmittableExtrinsic<ApiType>, [Option<PalletMigrationsMigrationCursor>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    multisig: {
      /**
       * Register approval for a dispatch to be made from a deterministic composite account if
       * approved by a total of `threshold - 1` of `other_signatories`.
       * 
       * Payment: `DepositBase` will be reserved if this is the first approval, plus
       * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
       * is cancelled.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `threshold`: The total number of approvals for this dispatch before it is executed.
       * - `other_signatories`: The accounts (other than the sender) who can approve this
       * dispatch. May not be empty.
       * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
       * not the first approval, then it must be `Some`, with the timepoint (block number and
       * transaction index) of the first approval transaction.
       * - `call_hash`: The hash of the call to be executed.
       * 
       * NOTE: If this is the final approval, you will want to use `as_multi` instead.
       * 
       * ## Complexity
       * - `O(S)`.
       * - Up to one balance-reserve or unreserve operation.
       * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One encode & hash, both of complexity `O(S)`.
       * - Up to one binary search and insert (`O(logS + S)`).
       * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
       * - One event.
       * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
       * taken for its lifetime of `DepositBase + threshold * DepositFactor`.
       **/
      approveAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], maybeTimepoint: Option<PalletMultisigTimepoint> | null | Uint8Array | PalletMultisigTimepoint | { height?: any; index?: any } | string, callHash: U8aFixed | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, U8aFixed, SpWeightsWeightV2Weight]>;
      /**
       * Register approval for a dispatch to be made from a deterministic composite account if
       * approved by a total of `threshold - 1` of `other_signatories`.
       * 
       * If there are enough, then dispatch the call.
       * 
       * Payment: `DepositBase` will be reserved if this is the first approval, plus
       * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
       * is cancelled.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `threshold`: The total number of approvals for this dispatch before it is executed.
       * - `other_signatories`: The accounts (other than the sender) who can approve this
       * dispatch. May not be empty.
       * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
       * not the first approval, then it must be `Some`, with the timepoint (block number and
       * transaction index) of the first approval transaction.
       * - `call`: The call to be executed.
       * 
       * NOTE: Unless this is the final approval, you will generally want to use
       * `approve_as_multi` instead, since it only requires a hash of the call.
       * 
       * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
       * on success, result is `Ok` and the result from the interior call, if it was executed,
       * may be found in the deposited `MultisigExecuted` event.
       * 
       * ## Complexity
       * - `O(S + Z + Call)`.
       * - Up to one balance-reserve or unreserve operation.
       * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
       * - One encode & hash, both of complexity `O(S)`.
       * - Up to one binary search and insert (`O(logS + S)`).
       * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
       * - One event.
       * - The weight of the `call`.
       * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
       * taken for its lifetime of `DepositBase + threshold * DepositFactor`.
       **/
      asMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], maybeTimepoint: Option<PalletMultisigTimepoint> | null | Uint8Array | PalletMultisigTimepoint | { height?: any; index?: any } | string, call: Call | IMethod | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, Call, SpWeightsWeightV2Weight]>;
      /**
       * Immediately dispatch a multi-signature call using a single approval from the caller.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `other_signatories`: The accounts (other than the sender) who are part of the
       * multi-signature, but do not participate in the approval process.
       * - `call`: The call to be executed.
       * 
       * Result is equivalent to the dispatched result.
       * 
       * ## Complexity
       * O(Z + C) where Z is the length of the call and C its execution weight.
       **/
      asMultiThreshold1: AugmentedSubmittable<(otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Call]>;
      /**
       * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
       * for this operation will be unreserved on success.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `threshold`: The total number of approvals for this dispatch before it is executed.
       * - `other_signatories`: The accounts (other than the sender) who can approve this
       * dispatch. May not be empty.
       * - `timepoint`: The timepoint (block number and transaction index) of the first approval
       * transaction for this dispatch.
       * - `call_hash`: The hash of the call to be executed.
       * 
       * ## Complexity
       * - `O(S)`.
       * - Up to one balance-reserve or unreserve operation.
       * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One encode & hash, both of complexity `O(S)`.
       * - One event.
       * - I/O: 1 read `O(S)`, one remove.
       * - Storage: removes one item.
       **/
      cancelAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], timepoint: PalletMultisigTimepoint | { height?: any; index?: any } | string | Uint8Array, callHash: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, PalletMultisigTimepoint, U8aFixed]>;
      /**
       * Poke the deposit reserved for an existing multisig operation.
       * 
       * The dispatch origin for this call must be _Signed_ and must be the original depositor of
       * the multisig operation.
       * 
       * The transaction fee is waived if the deposit amount has changed.
       * 
       * - `threshold`: The total number of approvals needed for this multisig.
       * - `other_signatories`: The accounts (other than the sender) who are part of the
       * multisig.
       * - `call_hash`: The hash of the call this deposit is reserved for.
       * 
       * Emits `DepositPoked` if successful.
       **/
      pokeDeposit: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], callHash: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, U8aFixed]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    nftFractionalization: {
      /**
       * Lock the NFT and mint a new fungible asset.
       * 
       * The dispatch origin for this call must be Signed.
       * The origin must be the owner of the NFT they are trying to lock.
       * 
       * `Deposit` funds of sender are reserved.
       * 
       * - `nft_collection_id`: The ID used to identify the collection of the NFT.
       * Is used within the context of `pallet_nfts`.
       * - `nft_id`: The ID used to identify the NFT within the given collection.
       * Is used within the context of `pallet_nfts`.
       * - `asset_id`: The ID of the new asset. It must not exist.
       * Is used within the context of `pallet_assets`.
       * - `beneficiary`: The account that will receive the newly created asset.
       * - `fractions`: The total issuance of the newly created asset class.
       * 
       * Emits `NftFractionalized` event when successful.
       **/
      fractionalize: AugmentedSubmittable<(nftCollectionId: u32 | AnyNumber | Uint8Array, nftId: u32 | AnyNumber | Uint8Array, assetId: u32 | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, fractions: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32, MultiAddress, u128]>;
      /**
       * Burn the total issuance of the fungible asset and return (unlock) the locked NFT.
       * 
       * The dispatch origin for this call must be Signed.
       * 
       * `Deposit` funds will be returned to `asset_creator`.
       * 
       * - `nft_collection_id`: The ID used to identify the collection of the NFT.
       * Is used within the context of `pallet_nfts`.
       * - `nft_id`: The ID used to identify the NFT within the given collection.
       * Is used within the context of `pallet_nfts`.
       * - `asset_id`: The ID of the asset being returned and destroyed. Must match
       * the original ID of the created asset, corresponding to the NFT.
       * Is used within the context of `pallet_assets`.
       * - `beneficiary`: The account that will receive the unified NFT.
       * 
       * Emits `NftUnified` event when successful.
       **/
      unify: AugmentedSubmittable<(nftCollectionId: u32 | AnyNumber | Uint8Array, nftId: u32 | AnyNumber | Uint8Array, assetId: u32 | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32, MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    nfts: {
      /**
       * Approve item's attributes to be changed by a delegated third-party account.
       * 
       * Origin must be Signed and must be an owner of the `item`.
       * 
       * - `collection`: A collection of the item.
       * - `item`: The item that holds attributes.
       * - `delegate`: The account to delegate permission to change attributes of the item.
       * 
       * Emits `ItemAttributesApprovalAdded` on success.
       **/
      approveItemAttributes: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array, delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, MultiAddress]>;
      /**
       * Approve an item to be transferred by a delegated third-party account.
       * 
       * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
       * `item`.
       * 
       * - `collection`: The collection of the item to be approved for delegated transfer.
       * - `item`: The item to be approved for delegated transfer.
       * - `delegate`: The account to delegate permission to transfer the item.
       * - `maybe_deadline`: Optional deadline for the approval. Specified by providing the
       * number of blocks after which the approval will expire
       * 
       * Emits `TransferApproved` on success.
       * 
       * Weight: `O(1)`
       **/
      approveTransfer: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array, delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, maybeDeadline: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [u32, u32, MultiAddress, Option<u32>]>;
      /**
       * Destroy a single item.
       * 
       * The origin must conform to `ForceOrigin` or must be Signed and the signing account must
       * be the owner of the `item`.
       * 
       * - `collection`: The collection of the item to be burned.
       * - `item`: The item to be burned.
       * 
       * Emits `Burned`.
       * 
       * Weight: `O(1)`
       **/
      burn: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Allows to buy an item if it's up for sale.
       * 
       * Origin must be Signed and must not be the owner of the `item`.
       * 
       * - `collection`: The collection of the item.
       * - `item`: The item the sender wants to buy.
       * - `bid_price`: The price the sender is willing to pay.
       * 
       * Emits `ItemBought` on success.
       **/
      buyItem: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array, bidPrice: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128]>;
      /**
       * Cancel one of the transfer approvals for a specific item.
       * 
       * Origin must be either:
       * - the `Force` origin;
       * - `Signed` with the signer being the Owner of the `item`;
       * 
       * Arguments:
       * - `collection`: The collection of the item of whose approval will be cancelled.
       * - `item`: The item of the collection of whose approval will be cancelled.
       * - `delegate`: The account that is going to loose their approval.
       * 
       * Emits `ApprovalCancelled` on success.
       * 
       * Weight: `O(1)`
       **/
      cancelApproval: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array, delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, MultiAddress]>;
      /**
       * Cancel the previously provided approval to change item's attributes.
       * All the previously set attributes by the `delegate` will be removed.
       * 
       * Origin must be Signed and must be an owner of the `item`.
       * 
       * - `collection`: Collection that the item is contained within.
       * - `item`: The item that holds attributes.
       * - `delegate`: The previously approved account to remove.
       * 
       * Emits `ItemAttributesApprovalRemoved` on success.
       **/
      cancelItemAttributesApproval: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array, delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, witness: PalletNftsCancelAttributesApprovalWitness | { accountAttributes?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, MultiAddress, PalletNftsCancelAttributesApprovalWitness]>;
      /**
       * Cancel an atomic swap.
       * 
       * Origin must be Signed.
       * Origin must be an owner of the `item` if the deadline hasn't expired.
       * 
       * - `collection`: The collection of the item.
       * - `item`: The item an owner wants to give.
       * 
       * Emits `SwapCancelled` on success.
       **/
      cancelSwap: AugmentedSubmittable<(offeredCollection: u32 | AnyNumber | Uint8Array, offeredItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Claim an atomic swap.
       * This method executes a pending swap, that was created by a counterpart before.
       * 
       * Origin must be Signed and must be an owner of the `item`.
       * 
       * - `send_collection`: The collection of the item to be sent.
       * - `send_item`: The item to be sent.
       * - `receive_collection`: The collection of the item to be received.
       * - `receive_item`: The item to be received.
       * - `witness_price`: A price that was previously agreed on.
       * 
       * Emits `SwapClaimed` on success.
       **/
      claimSwap: AugmentedSubmittable<(sendCollection: u32 | AnyNumber | Uint8Array, sendItem: u32 | AnyNumber | Uint8Array, receiveCollection: u32 | AnyNumber | Uint8Array, receiveItem: u32 | AnyNumber | Uint8Array, witnessPrice: Option<PalletNftsPriceWithDirection> | null | Uint8Array | PalletNftsPriceWithDirection | { amount?: any; direction?: any } | string) => SubmittableExtrinsic<ApiType>, [u32, u32, u32, u32, Option<PalletNftsPriceWithDirection>]>;
      /**
       * Cancel all the approvals of a specific item.
       * 
       * Origin must be either:
       * - the `Force` origin;
       * - `Signed` with the signer being the Owner of the `item`;
       * 
       * Arguments:
       * - `collection`: The collection of the item of whose approvals will be cleared.
       * - `item`: The item of the collection of whose approvals will be cleared.
       * 
       * Emits `AllApprovalsCancelled` on success.
       * 
       * Weight: `O(1)`
       **/
      clearAllTransferApprovals: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Clear an attribute for a collection or item.
       * 
       * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
       * attribute.
       * 
       * Any deposit is freed for the collection's owner.
       * 
       * - `collection`: The identifier of the collection whose item's metadata to clear.
       * - `maybe_item`: The identifier of the item whose metadata to clear.
       * - `namespace`: Attribute's namespace.
       * - `key`: The key of the attribute.
       * 
       * Emits `AttributeCleared`.
       * 
       * Weight: `O(1)`
       **/
      clearAttribute: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, maybeItem: Option<u32> | null | Uint8Array | u32 | AnyNumber, namespace: PalletNftsAttributeNamespace | { Pallet: any } | { CollectionOwner: any } | { ItemOwner: any } | { Account: any } | string | Uint8Array, key: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<u32>, PalletNftsAttributeNamespace, Bytes]>;
      /**
       * Clear the metadata for a collection.
       * 
       * Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of
       * the `collection`.
       * 
       * Any deposit is freed for the collection's owner.
       * 
       * - `collection`: The identifier of the collection whose metadata to clear.
       * 
       * Emits `CollectionMetadataCleared`.
       * 
       * Weight: `O(1)`
       **/
      clearCollectionMetadata: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Clear the metadata for an item.
       * 
       * Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the
       * `collection`.
       * 
       * Any deposit is freed for the collection's owner.
       * 
       * - `collection`: The identifier of the collection whose item's metadata to clear.
       * - `item`: The identifier of the item whose metadata to clear.
       * 
       * Emits `ItemMetadataCleared`.
       * 
       * Weight: `O(1)`
       **/
      clearMetadata: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Issue a new collection of non-fungible items from a public origin.
       * 
       * This new collection has no items initially and its owner is the origin.
       * 
       * The origin must be Signed and the sender must have sufficient funds free.
       * 
       * `CollectionDeposit` funds of sender are reserved.
       * 
       * Parameters:
       * - `admin`: The admin of this collection. The admin is the initial address of each
       * member of the collection's admin team.
       * 
       * Emits `Created` event when successful.
       * 
       * Weight: `O(1)`
       **/
      create: AugmentedSubmittable<(admin: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, config: PalletNftsCollectionConfig | { settings?: any; maxSupply?: any; mintSettings?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, PalletNftsCollectionConfig]>;
      /**
       * Register a new atomic swap, declaring an intention to send an `item` in exchange for
       * `desired_item` from origin to target on the current blockchain.
       * The target can execute the swap during the specified `duration` of blocks (if set).
       * Additionally, the price could be set for the desired `item`.
       * 
       * Origin must be Signed and must be an owner of the `item`.
       * 
       * - `collection`: The collection of the item.
       * - `item`: The item an owner wants to give.
       * - `desired_collection`: The collection of the desired item.
       * - `desired_item`: The desired item an owner wants to receive.
       * - `maybe_price`: The price an owner is willing to pay or receive for the desired `item`.
       * - `duration`: A deadline for the swap. Specified by providing the number of blocks
       * after which the swap will expire.
       * 
       * Emits `SwapCreated` on success.
       **/
      createSwap: AugmentedSubmittable<(offeredCollection: u32 | AnyNumber | Uint8Array, offeredItem: u32 | AnyNumber | Uint8Array, desiredCollection: u32 | AnyNumber | Uint8Array, maybeDesiredItem: Option<u32> | null | Uint8Array | u32 | AnyNumber, maybePrice: Option<PalletNftsPriceWithDirection> | null | Uint8Array | PalletNftsPriceWithDirection | { amount?: any; direction?: any } | string, duration: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32, Option<u32>, Option<PalletNftsPriceWithDirection>, u32]>;
      /**
       * Destroy a collection of fungible items.
       * 
       * The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the
       * owner of the `collection`.
       * 
       * NOTE: The collection must have 0 items to be destroyed.
       * 
       * - `collection`: The identifier of the collection to be destroyed.
       * - `witness`: Information on the items minted in the collection. This must be
       * correct.
       * 
       * Emits `Destroyed` event when successful.
       * 
       * Weight: `O(m + c + a)` where:
       * - `m = witness.item_metadatas`
       * - `c = witness.item_configs`
       * - `a = witness.attributes`
       **/
      destroy: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, witness: PalletNftsDestroyWitness | { itemMetadatas?: any; itemConfigs?: any; attributes?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, PalletNftsDestroyWitness]>;
      /**
       * Change the config of a collection.
       * 
       * Origin must be `ForceOrigin`.
       * 
       * - `collection`: The identifier of the collection.
       * - `config`: The new config of this collection.
       * 
       * Emits `CollectionConfigChanged`.
       * 
       * Weight: `O(1)`
       **/
      forceCollectionConfig: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, config: PalletNftsCollectionConfig | { settings?: any; maxSupply?: any; mintSettings?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, PalletNftsCollectionConfig]>;
      /**
       * Change the Owner of a collection.
       * 
       * Origin must be `ForceOrigin`.
       * 
       * - `collection`: The identifier of the collection.
       * - `owner`: The new Owner of this collection.
       * 
       * Emits `OwnerChanged`.
       * 
       * Weight: `O(1)`
       **/
      forceCollectionOwner: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress]>;
      /**
       * Issue a new collection of non-fungible items from a privileged origin.
       * 
       * This new collection has no items initially.
       * 
       * The origin must conform to `ForceOrigin`.
       * 
       * Unlike `create`, no funds are reserved.
       * 
       * - `owner`: The owner of this collection of items. The owner has full superuser
       * permissions over this item, but may later change and configure the permissions using
       * `transfer_ownership` and `set_team`.
       * 
       * Emits `ForceCreated` event when successful.
       * 
       * Weight: `O(1)`
       **/
      forceCreate: AugmentedSubmittable<(owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, config: PalletNftsCollectionConfig | { settings?: any; maxSupply?: any; mintSettings?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, PalletNftsCollectionConfig]>;
      /**
       * Mint an item of a particular collection from a privileged origin.
       * 
       * The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the
       * Issuer of the `collection`.
       * 
       * - `collection`: The collection of the item to be minted.
       * - `item`: An identifier of the new item.
       * - `mint_to`: Account into which the item will be minted.
       * - `item_config`: A config of the new item.
       * 
       * Emits `Issued` event when successful.
       * 
       * Weight: `O(1)`
       **/
      forceMint: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array, mintTo: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, itemConfig: PalletNftsItemConfig | { settings?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, MultiAddress, PalletNftsItemConfig]>;
      /**
       * Force-set an attribute for a collection or item.
       * 
       * Origin must be `ForceOrigin`.
       * 
       * If the attribute already exists and it was set by another account, the deposit
       * will be returned to the previous owner.
       * 
       * - `set_as`: An optional owner of the attribute.
       * - `collection`: The identifier of the collection whose item's metadata to set.
       * - `maybe_item`: The identifier of the item whose metadata to set.
       * - `namespace`: Attribute's namespace.
       * - `key`: The key of the attribute.
       * - `value`: The value to which to set the attribute.
       * 
       * Emits `AttributeSet`.
       * 
       * Weight: `O(1)`
       **/
      forceSetAttribute: AugmentedSubmittable<(setAs: Option<AccountId32> | null | Uint8Array | AccountId32 | string, collection: u32 | AnyNumber | Uint8Array, maybeItem: Option<u32> | null | Uint8Array | u32 | AnyNumber, namespace: PalletNftsAttributeNamespace | { Pallet: any } | { CollectionOwner: any } | { ItemOwner: any } | { Account: any } | string | Uint8Array, key: Bytes | string | Uint8Array, value: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<AccountId32>, u32, Option<u32>, PalletNftsAttributeNamespace, Bytes, Bytes]>;
      /**
       * Disallows specified settings for the whole collection.
       * 
       * Origin must be Signed and the sender should be the Owner of the `collection`.
       * 
       * - `collection`: The collection to be locked.
       * - `lock_settings`: The settings to be locked.
       * 
       * Note: it's possible to only lock(set) the setting, but not to unset it.
       * 
       * Emits `CollectionLocked`.
       * 
       * Weight: `O(1)`
       **/
      lockCollection: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, lockSettings: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u64]>;
      /**
       * Disallows changing the metadata or attributes of the item.
       * 
       * Origin must be either `ForceOrigin` or Signed and the sender should be the Admin
       * of the `collection`.
       * 
       * - `collection`: The collection if the `item`.
       * - `item`: An item to be locked.
       * - `lock_metadata`: Specifies whether the metadata should be locked.
       * - `lock_attributes`: Specifies whether the attributes in the `CollectionOwner` namespace
       * should be locked.
       * 
       * Note: `lock_attributes` affects the attributes in the `CollectionOwner` namespace only.
       * When the metadata or attributes are locked, it won't be possible the unlock them.
       * 
       * Emits `ItemPropertiesLocked`.
       * 
       * Weight: `O(1)`
       **/
      lockItemProperties: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array, lockMetadata: bool | boolean | Uint8Array, lockAttributes: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, bool, bool]>;
      /**
       * Disallow further unprivileged transfer of an item.
       * 
       * Origin must be Signed and the sender should be the Freezer of the `collection`.
       * 
       * - `collection`: The collection of the item to be changed.
       * - `item`: The item to become non-transferable.
       * 
       * Emits `ItemTransferLocked`.
       * 
       * Weight: `O(1)`
       **/
      lockItemTransfer: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Mint an item of a particular collection.
       * 
       * The origin must be Signed and the sender must comply with the `mint_settings` rules.
       * 
       * - `collection`: The collection of the item to be minted.
       * - `item`: An identifier of the new item.
       * - `mint_to`: Account into which the item will be minted.
       * - `witness_data`: When the mint type is `HolderOf(collection_id)`, then the owned
       * item_id from that collection needs to be provided within the witness data object. If
       * the mint price is set, then it should be additionally confirmed in the `witness_data`.
       * 
       * Note: the deposit will be taken from the `origin` and not the `owner` of the `item`.
       * 
       * Emits `Issued` event when successful.
       * 
       * Weight: `O(1)`
       **/
      mint: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array, mintTo: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, witnessData: Option<PalletNftsMintWitness> | null | Uint8Array | PalletNftsMintWitness | { ownedItem?: any; mintPrice?: any } | string) => SubmittableExtrinsic<ApiType>, [u32, u32, MultiAddress, Option<PalletNftsMintWitness>]>;
      /**
       * Mint an item by providing the pre-signed approval.
       * 
       * Origin must be Signed.
       * 
       * - `mint_data`: The pre-signed approval that consists of the information about the item,
       * its metadata, attributes, who can mint it (`None` for anyone) and until what block
       * number.
       * - `signature`: The signature of the `data` object.
       * - `signer`: The `data` object's signer. Should be an Issuer of the collection.
       * 
       * Emits `Issued` on success.
       * Emits `AttributeSet` if the attributes were provided.
       * Emits `ItemMetadataSet` if the metadata was not empty.
       **/
      mintPreSigned: AugmentedSubmittable<(mintData: PalletNftsPreSignedMint | { collection?: any; item?: any; attributes?: any; metadata?: any; onlyAccount?: any; deadline?: any; mintPrice?: any } | string | Uint8Array, signature: SpRuntimeMultiSignature | { Ed25519: any } | { Sr25519: any } | { Ecdsa: any } | string | Uint8Array, signer: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletNftsPreSignedMint, SpRuntimeMultiSignature, AccountId32]>;
      /**
       * Allows to pay the tips.
       * 
       * Origin must be Signed.
       * 
       * - `tips`: Tips array.
       * 
       * Emits `TipSent` on every tip transfer.
       **/
      payTips: AugmentedSubmittable<(tips: Vec<PalletNftsItemTip> | (PalletNftsItemTip | { collection?: any; item?: any; receiver?: any; amount?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<PalletNftsItemTip>]>;
      /**
       * Re-evaluate the deposits on some items.
       * 
       * Origin must be Signed and the sender should be the Owner of the `collection`.
       * 
       * - `collection`: The collection of the items to be reevaluated.
       * - `items`: The items of the collection whose deposits will be reevaluated.
       * 
       * NOTE: This exists as a best-effort function. Any items which are unknown or
       * in the case that the owner account does not have reservable funds to pay for a
       * deposit increase are ignored. Generally the owner isn't going to call this on items
       * whose existing deposit is less than the refreshed deposit as it would only cost them,
       * so it's of little consequence.
       * 
       * It will still return an error in the case that the collection is unknown or the signer
       * is not permitted to call it.
       * 
       * Weight: `O(items.len())`
       **/
      redeposit: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, items: Vec<u32> | (u32 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u32, Vec<u32>]>;
      /**
       * Set (or reset) the acceptance of ownership for a particular account.
       * 
       * Origin must be `Signed` and if `maybe_collection` is `Some`, then the signer must have a
       * provider reference.
       * 
       * - `maybe_collection`: The identifier of the collection whose ownership the signer is
       * willing to accept, or if `None`, an indication that the signer is willing to accept no
       * ownership transferal.
       * 
       * Emits `OwnershipAcceptanceChanged`.
       **/
      setAcceptOwnership: AugmentedSubmittable<(maybeCollection: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Option<u32>]>;
      /**
       * Set an attribute for a collection or item.
       * 
       * Origin must be Signed and must conform to the namespace ruleset:
       * - `CollectionOwner` namespace could be modified by the `collection` Admin only;
       * - `ItemOwner` namespace could be modified by the `maybe_item` owner only. `maybe_item`
       * should be set in that case;
       * - `Account(AccountId)` namespace could be modified only when the `origin` was given a
       * permission to do so;
       * 
       * The funds of `origin` are reserved according to the formula:
       * `AttributeDepositBase + DepositPerByte * (key.len + value.len)` taking into
       * account any already reserved funds.
       * 
       * - `collection`: The identifier of the collection whose item's metadata to set.
       * - `maybe_item`: The identifier of the item whose metadata to set.
       * - `namespace`: Attribute's namespace.
       * - `key`: The key of the attribute.
       * - `value`: The value to which to set the attribute.
       * 
       * Emits `AttributeSet`.
       * 
       * Weight: `O(1)`
       **/
      setAttribute: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, maybeItem: Option<u32> | null | Uint8Array | u32 | AnyNumber, namespace: PalletNftsAttributeNamespace | { Pallet: any } | { CollectionOwner: any } | { ItemOwner: any } | { Account: any } | string | Uint8Array, key: Bytes | string | Uint8Array, value: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<u32>, PalletNftsAttributeNamespace, Bytes, Bytes]>;
      /**
       * Set attributes for an item by providing the pre-signed approval.
       * 
       * Origin must be Signed and must be an owner of the `data.item`.
       * 
       * - `data`: The pre-signed approval that consists of the information about the item,
       * attributes to update and until what block number.
       * - `signature`: The signature of the `data` object.
       * - `signer`: The `data` object's signer. Should be an Admin of the collection for the
       * `CollectionOwner` namespace.
       * 
       * Emits `AttributeSet` for each provided attribute.
       * Emits `ItemAttributesApprovalAdded` if the approval wasn't set before.
       * Emits `PreSignedAttributesSet` on success.
       **/
      setAttributesPreSigned: AugmentedSubmittable<(data: PalletNftsPreSignedAttributes | { collection?: any; item?: any; attributes?: any; namespace?: any; deadline?: any } | string | Uint8Array, signature: SpRuntimeMultiSignature | { Ed25519: any } | { Sr25519: any } | { Ecdsa: any } | string | Uint8Array, signer: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletNftsPreSignedAttributes, SpRuntimeMultiSignature, AccountId32]>;
      /**
       * Set the maximum number of items a collection could have.
       * 
       * Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
       * the `collection`.
       * 
       * - `collection`: The identifier of the collection to change.
       * - `max_supply`: The maximum number of items a collection could have.
       * 
       * Emits `CollectionMaxSupplySet` event when successful.
       **/
      setCollectionMaxSupply: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, maxSupply: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Set the metadata for a collection.
       * 
       * Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of
       * the `collection`.
       * 
       * If the origin is `Signed`, then funds of signer are reserved according to the formula:
       * `MetadataDepositBase + DepositPerByte * data.len` taking into
       * account any already reserved funds.
       * 
       * - `collection`: The identifier of the item whose metadata to update.
       * - `data`: The general information of this item. Limited in length by `StringLimit`.
       * 
       * Emits `CollectionMetadataSet`.
       * 
       * Weight: `O(1)`
       **/
      setCollectionMetadata: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, data: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Bytes]>;
      /**
       * Set the metadata for an item.
       * 
       * Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the
       * `collection`.
       * 
       * If the origin is Signed, then funds of signer are reserved according to the formula:
       * `MetadataDepositBase + DepositPerByte * data.len` taking into
       * account any already reserved funds.
       * 
       * - `collection`: The identifier of the collection whose item's metadata to set.
       * - `item`: The identifier of the item whose metadata to set.
       * - `data`: The general information of this item. Limited in length by `StringLimit`.
       * 
       * Emits `ItemMetadataSet`.
       * 
       * Weight: `O(1)`
       **/
      setMetadata: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array, data: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, Bytes]>;
      /**
       * Set (or reset) the price for an item.
       * 
       * Origin must be Signed and must be the owner of the `item`.
       * 
       * - `collection`: The collection of the item.
       * - `item`: The item to set the price for.
       * - `price`: The price for the item. Pass `None`, to reset the price.
       * - `buyer`: Restricts the buy operation to a specific account.
       * 
       * Emits `ItemPriceSet` on success if the price is not `None`.
       * Emits `ItemPriceRemoved` on success if the price is `None`.
       **/
      setPrice: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array, price: Option<u128> | null | Uint8Array | u128 | AnyNumber, whitelistedBuyer: Option<MultiAddress> | null | Uint8Array | MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string) => SubmittableExtrinsic<ApiType>, [u32, u32, Option<u128>, Option<MultiAddress>]>;
      /**
       * Change the Issuer, Admin and Freezer of a collection.
       * 
       * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
       * `collection`.
       * 
       * Note: by setting the role to `None` only the `ForceOrigin` will be able to change it
       * after to `Some(account)`.
       * 
       * - `collection`: The collection whose team should be changed.
       * - `issuer`: The new Issuer of this collection.
       * - `admin`: The new Admin of this collection.
       * - `freezer`: The new Freezer of this collection.
       * 
       * Emits `TeamChanged`.
       * 
       * Weight: `O(1)`
       **/
      setTeam: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, issuer: Option<MultiAddress> | null | Uint8Array | MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string, admin: Option<MultiAddress> | null | Uint8Array | MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string, freezer: Option<MultiAddress> | null | Uint8Array | MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string) => SubmittableExtrinsic<ApiType>, [u32, Option<MultiAddress>, Option<MultiAddress>, Option<MultiAddress>]>;
      /**
       * Move an item from the sender account to another.
       * 
       * Origin must be Signed and the signing account must be either:
       * - the Owner of the `item`;
       * - the approved delegate for the `item` (in this case, the approval is reset).
       * 
       * Arguments:
       * - `collection`: The collection of the item to be transferred.
       * - `item`: The item to be transferred.
       * - `dest`: The account to receive ownership of the item.
       * 
       * Emits `Transferred`.
       * 
       * Weight: `O(1)`
       **/
      transfer: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, MultiAddress]>;
      /**
       * Change the Owner of a collection.
       * 
       * Origin must be Signed and the sender should be the Owner of the `collection`.
       * 
       * - `collection`: The collection whose owner should be changed.
       * - `owner`: The new Owner of this collection. They must have called
       * `set_accept_ownership` with `collection` in order for this operation to succeed.
       * 
       * Emits `OwnerChanged`.
       * 
       * Weight: `O(1)`
       **/
      transferOwnership: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, newOwner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress]>;
      /**
       * Re-allow unprivileged transfer of an item.
       * 
       * Origin must be Signed and the sender should be the Freezer of the `collection`.
       * 
       * - `collection`: The collection of the item to be changed.
       * - `item`: The item to become transferable.
       * 
       * Emits `ItemTransferUnlocked`.
       * 
       * Weight: `O(1)`
       **/
      unlockItemTransfer: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Update mint settings.
       * 
       * Origin must be either `ForceOrigin` or `Signed` and the sender should be the Issuer
       * of the `collection`.
       * 
       * - `collection`: The identifier of the collection to change.
       * - `mint_settings`: The new mint settings.
       * 
       * Emits `CollectionMintSettingsUpdated` event when successful.
       **/
      updateMintSettings: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, mintSettings: PalletNftsMintSettings | { mintType?: any; price?: any; startBlock?: any; endBlock?: any; defaultItemSettings?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, PalletNftsMintSettings]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    nominationPools: {
      /**
       * Top up the deficit or withdraw the excess ED from the pool.
       * 
       * When a pool is created, the pool depositor transfers ED to the reward account of the
       * pool. ED is subject to change and over time, the deposit in the reward account may be
       * insufficient to cover the ED deficit of the pool or vice-versa where there is excess
       * deposit to the pool. This call allows anyone to adjust the ED deposit of the
       * pool by either topping up the deficit or claiming the excess.
       **/
      adjustPoolDeposit: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Apply a pending slash on a member.
       * 
       * Fails unless [`crate::pallet::Config::StakeAdapter`] is of strategy type:
       * [`adapter::StakeStrategyType::Delegate`].
       * 
       * The pending slash amount of the member must be equal or more than `ExistentialDeposit`.
       * This call can be dispatched permissionlessly (i.e. by any account). If the execution
       * is successful, fee is refunded and caller may be rewarded with a part of the slash
       * based on the [`crate::pallet::Config::StakeAdapter`] configuration.
       **/
      applySlash: AugmentedSubmittable<(memberAccount: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Bond `extra` more funds from `origin` into the pool to which they already belong.
       * 
       * Additional funds can come from either the free balance of the account, of from the
       * accumulated rewards, see [`BondExtra`].
       * 
       * Bonding extra funds implies an automatic payout of all pending rewards as well.
       * See `bond_extra_other` to bond pending rewards of `other` members.
       **/
      bondExtra: AugmentedSubmittable<(extra: PalletNominationPoolsBondExtra | { FreeBalance: any } | { Rewards: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletNominationPoolsBondExtra]>;
      /**
       * `origin` bonds funds from `extra` for some pool member `member` into their respective
       * pools.
       * 
       * `origin` can bond extra funds from free balance or pending rewards when `origin ==
       * other`.
       * 
       * In the case of `origin != other`, `origin` can only bond extra pending rewards of
       * `other` members assuming set_claim_permission for the given member is
       * `PermissionlessCompound` or `PermissionlessAll`.
       **/
      bondExtraOther: AugmentedSubmittable<(member: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, extra: PalletNominationPoolsBondExtra | { FreeBalance: any } | { Rewards: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, PalletNominationPoolsBondExtra]>;
      /**
       * Chill on behalf of the pool.
       * 
       * The dispatch origin of this call can be signed by the pool nominator or the pool
       * root role, same as [`Pallet::nominate`].
       * 
       * This directly forwards the call to an implementation of `StakingInterface` (e.g.,
       * `pallet-staking`) through [`Config::StakeAdapter`], on behalf of the bonded pool.
       * 
       * Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
       * account).
       * 
       * # Conditions for a permissionless dispatch:
       * * When pool depositor has less than `MinNominatorBond` staked, otherwise pool members
       * are unable to unbond.
       * 
       * # Conditions for permissioned dispatch:
       * * The caller is the pool's nominator or root.
       **/
      chill: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Claim pending commission.
       * 
       * The `root` role of the pool is _always_ allowed to claim the pool's commission.
       * 
       * If the pool has set `CommissionClaimPermission::Permissionless`, then any account can
       * trigger the process of claiming the pool's commission.
       * 
       * If the pool has set its `CommissionClaimPermission` to `Account(acc)`, then only
       * accounts
       * * `acc`, and
       * * the pool's root account
       * 
       * may call this extrinsic on behalf of the pool.
       * 
       * Pending commissions are paid out and added to the total claimed commission.
       * The total pending commission is reset to zero.
       **/
      claimCommission: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * A bonded member can use this to claim their payout based on the rewards that the pool
       * has accumulated since their last claimed payout (OR since joining if this is their first
       * time claiming rewards). The payout will be transferred to the member's account.
       * 
       * The member will earn rewards pro rata based on the members stake vs the sum of the
       * members in the pools stake. Rewards do not "expire".
       * 
       * See `claim_payout_other` to claim rewards on behalf of some `other` pool member.
       **/
      claimPayout: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * `origin` can claim payouts on some pool member `other`'s behalf.
       * 
       * Pool member `other` must have a `PermissionlessWithdraw` or `PermissionlessAll` claim
       * permission for this call to be successful.
       **/
      claimPayoutOther: AugmentedSubmittable<(other: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Create a new delegation pool.
       * 
       * # Arguments
       * 
       * * `amount` - The amount of funds to delegate to the pool. This also acts of a sort of
       * deposit since the pools creator cannot fully unbond funds until the pool is being
       * destroyed.
       * * `index` - A disambiguation index for creating the account. Likely only useful when
       * creating multiple pools in the same extrinsic.
       * * `root` - The account to set as [`PoolRoles::root`].
       * * `nominator` - The account to set as the [`PoolRoles::nominator`].
       * * `bouncer` - The account to set as the [`PoolRoles::bouncer`].
       * 
       * # Note
       * 
       * In addition to `amount`, the caller will transfer the existential deposit; so the caller
       * needs at have at least `amount + existential_deposit` transferable.
       **/
      create: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, root: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, nominator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, bouncer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress, MultiAddress, MultiAddress]>;
      /**
       * Create a new delegation pool with a previously used pool id
       * 
       * # Arguments
       * 
       * same as `create` with the inclusion of
       * * `pool_id` - `A valid PoolId.
       **/
      createWithPoolId: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, root: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, nominator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, bouncer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, poolId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress, MultiAddress, MultiAddress, u32]>;
      /**
       * Stake funds with a pool. The amount to bond is delegated (or transferred based on
       * [`adapter::StakeStrategyType`]) from the member to the pool account and immediately
       * increases the pool's bond.
       * 
       * The method of transferring the amount to the pool account is determined by
       * [`adapter::StakeStrategyType`]. If the pool is configured to use
       * [`adapter::StakeStrategyType::Delegate`], the funds remain in the account of
       * the `origin`, while the pool gains the right to use these funds for staking.
       * 
       * # Note
       * 
       * * An account can only be a member of a single pool.
       * * An account cannot join the same pool multiple times.
       * * This call will *not* dust the member account, so the member must have at least
       * `existential deposit + amount` in their account.
       * * Only a pool with [`PoolState::Open`] can be joined
       **/
      join: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, poolId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, u32]>;
      /**
       * Migrates delegated funds from the pool account to the `member_account`.
       * 
       * Fails unless [`crate::pallet::Config::StakeAdapter`] is of strategy type:
       * [`adapter::StakeStrategyType::Delegate`].
       * 
       * This is a permission-less call and refunds any fee if claim is successful.
       * 
       * If the pool has migrated to delegation based staking, the staked tokens of pool members
       * can be moved and held in their own account. See [`adapter::DelegateStake`]
       **/
      migrateDelegation: AugmentedSubmittable<(memberAccount: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Migrate pool from [`adapter::StakeStrategyType::Transfer`] to
       * [`adapter::StakeStrategyType::Delegate`].
       * 
       * Fails unless [`crate::pallet::Config::StakeAdapter`] is of strategy type:
       * [`adapter::StakeStrategyType::Delegate`].
       * 
       * This call can be dispatched permissionlessly, and refunds any fee if successful.
       * 
       * If the pool has already migrated to delegation based staking, this call will fail.
       **/
      migratePoolToDelegateStake: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Nominate on behalf of the pool.
       * 
       * The dispatch origin of this call must be signed by the pool nominator or the pool
       * root role.
       * 
       * This directly forwards the call to an implementation of `StakingInterface` (e.g.,
       * `pallet-staking`) through [`Config::StakeAdapter`], on behalf of the bonded pool.
       * 
       * # Note
       * 
       * In addition to a `root` or `nominator` role of `origin`, the pool's depositor needs to
       * have at least `depositor_min_bond` in the pool to start nominating.
       **/
      nominate: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, validators: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u32, Vec<AccountId32>]>;
      /**
       * Call `withdraw_unbonded` for the pools account. This call can be made by any account.
       * 
       * This is useful if there are too many unlocking chunks to call `unbond`, and some
       * can be cleared by withdrawing. In the case there are too many unlocking chunks, the user
       * would probably see an error like `NoMoreChunks` emitted from the staking system when
       * they attempt to unbond.
       **/
      poolWithdrawUnbonded: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, numSlashingSpans: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Allows a pool member to set a claim permission to allow or disallow permissionless
       * bonding and withdrawing.
       * 
       * # Arguments
       * 
       * * `origin` - Member of a pool.
       * * `permission` - The permission to be applied.
       **/
      setClaimPermission: AugmentedSubmittable<(permission: PalletNominationPoolsClaimPermission | 'Permissioned' | 'PermissionlessCompound' | 'PermissionlessWithdraw' | 'PermissionlessAll' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletNominationPoolsClaimPermission]>;
      /**
       * Set the commission of a pool.
       * Both a commission percentage and a commission payee must be provided in the `current`
       * tuple. Where a `current` of `None` is provided, any current commission will be removed.
       * 
       * - If a `None` is supplied to `new_commission`, existing commission will be removed.
       **/
      setCommission: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, newCommission: Option<ITuple<[Perbill, AccountId32]>> | null | Uint8Array | ITuple<[Perbill, AccountId32]> | [Perbill | AnyNumber | Uint8Array, AccountId32 | string | Uint8Array]) => SubmittableExtrinsic<ApiType>, [u32, Option<ITuple<[Perbill, AccountId32]>>]>;
      /**
       * Set the commission change rate for a pool.
       * 
       * Initial change rate is not bounded, whereas subsequent updates can only be more
       * restrictive than the current.
       **/
      setCommissionChangeRate: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, changeRate: PalletNominationPoolsCommissionChangeRate | { maxIncrease?: any; minDelay?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, PalletNominationPoolsCommissionChangeRate]>;
      /**
       * Set or remove a pool's commission claim permission.
       * 
       * Determines who can claim the pool's pending commission. Only the `Root` role of the pool
       * is able to configure commission claim permissions.
       **/
      setCommissionClaimPermission: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, permission: Option<PalletNominationPoolsCommissionClaimPermission> | null | Uint8Array | PalletNominationPoolsCommissionClaimPermission | { Permissionless: any } | { Account: any } | string) => SubmittableExtrinsic<ApiType>, [u32, Option<PalletNominationPoolsCommissionClaimPermission>]>;
      /**
       * Set the maximum commission of a pool.
       * 
       * - Initial max can be set to any `Perbill`, and only smaller values thereafter.
       * - Current commission will be lowered in the event it is higher than a new max
       * commission.
       **/
      setCommissionMax: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, maxCommission: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Perbill]>;
      /**
       * Update configurations for the nomination pools. The origin for this call must be
       * [`Config::AdminOrigin`].
       * 
       * # Arguments
       * 
       * * `min_join_bond` - Set [`MinJoinBond`].
       * * `min_create_bond` - Set [`MinCreateBond`].
       * * `max_pools` - Set [`MaxPools`].
       * * `max_members` - Set [`MaxPoolMembers`].
       * * `max_members_per_pool` - Set [`MaxPoolMembersPerPool`].
       * * `global_max_commission` - Set [`GlobalMaxCommission`].
       **/
      setConfigs: AugmentedSubmittable<(minJoinBond: PalletNominationPoolsConfigOpU128 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, minCreateBond: PalletNominationPoolsConfigOpU128 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, maxPools: PalletNominationPoolsConfigOpU32 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, maxMembers: PalletNominationPoolsConfigOpU32 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, maxMembersPerPool: PalletNominationPoolsConfigOpU32 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, globalMaxCommission: PalletNominationPoolsConfigOpPerbill | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletNominationPoolsConfigOpU128, PalletNominationPoolsConfigOpU128, PalletNominationPoolsConfigOpU32, PalletNominationPoolsConfigOpU32, PalletNominationPoolsConfigOpU32, PalletNominationPoolsConfigOpPerbill]>;
      /**
       * Set a new metadata for the pool.
       * 
       * The dispatch origin of this call must be signed by the bouncer, or the root role of the
       * pool.
       **/
      setMetadata: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, metadata: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Bytes]>;
      /**
       * Set a new state for the pool.
       * 
       * If a pool is already in the `Destroying` state, then under no condition can its state
       * change again.
       * 
       * The dispatch origin of this call must be either:
       * 
       * 1. signed by the bouncer, or the root role of the pool,
       * 2. if the pool conditions to be open are NOT met (as described by `ok_to_be_open`), and
       * then the state of the pool can be permissionlessly changed to `Destroying`.
       **/
      setState: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, state: PalletNominationPoolsPoolState | 'Open' | 'Blocked' | 'Destroying' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, PalletNominationPoolsPoolState]>;
      /**
       * Unbond up to `unbonding_points` of the `member_account`'s funds from the pool. It
       * implicitly collects the rewards one last time, since not doing so would mean some
       * rewards would be forfeited.
       * 
       * Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
       * account).
       * 
       * # Conditions for a permissionless dispatch.
       * 
       * * The pool is blocked and the caller is either the root or bouncer. This is refereed to
       * as a kick.
       * * The pool is destroying and the member is not the depositor.
       * * The pool is destroying, the member is the depositor and no other members are in the
       * pool.
       * 
       * ## Conditions for permissioned dispatch (i.e. the caller is also the
       * `member_account`):
       * 
       * * The caller is not the depositor.
       * * The caller is the depositor, the pool is destroying and no other members are in the
       * pool.
       * 
       * # Note
       * 
       * If there are too many unlocking chunks to unbond with the pool account,
       * [`Call::pool_withdraw_unbonded`] can be called to try and minimize unlocking chunks.
       * The [`StakingInterface::unbond`] will implicitly call [`Call::pool_withdraw_unbonded`]
       * to try to free chunks if necessary (ie. if unbound was called and no unlocking chunks
       * are available). However, it may not be possible to release the current unlocking chunks,
       * in which case, the result of this call will likely be the `NoMoreChunks` error from the
       * staking system.
       **/
      unbond: AugmentedSubmittable<(memberAccount: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, unbondingPoints: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * Update the roles of the pool.
       * 
       * The root is the only entity that can change any of the roles, including itself,
       * excluding the depositor, who can never change.
       * 
       * It emits an event, notifying UIs of the role change. This event is quite relevant to
       * most pool members and they should be informed of changes to pool roles.
       **/
      updateRoles: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, newRoot: PalletNominationPoolsConfigOpAccountId32 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, newNominator: PalletNominationPoolsConfigOpAccountId32 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, newBouncer: PalletNominationPoolsConfigOpAccountId32 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, PalletNominationPoolsConfigOpAccountId32, PalletNominationPoolsConfigOpAccountId32, PalletNominationPoolsConfigOpAccountId32]>;
      /**
       * Withdraw unbonded funds from `member_account`. If no bonded funds can be unbonded, an
       * error is returned.
       * 
       * Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
       * account).
       * 
       * # Conditions for a permissionless dispatch
       * 
       * * The pool is in destroy mode and the target is not the depositor.
       * * The target is the depositor and they are the only member in the sub pools.
       * * The pool is blocked and the caller is either the root or bouncer.
       * 
       * # Conditions for permissioned dispatch
       * 
       * * The caller is the target and they are not the depositor.
       * 
       * # Note
       * 
       * - If the target is the depositor, the pool will be destroyed.
       * - If the pool has any pending slash, we also try to slash the member before letting them
       * withdraw. This calculation adds some weight overhead and is only defensive. In reality,
       * pool slashes must have been already applied via permissionless [`Call::apply_slash`].
       **/
      withdrawUnbonded: AugmentedSubmittable<(memberAccount: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, numSlashingSpans: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    parachainInfo: {
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    parachainSystem: {
      /**
       * Set the current validation data.
       * 
       * This should be invoked exactly once per block. It will panic at the finalization
       * phase if the call was not invoked.
       * 
       * The dispatch origin for this call must be `Inherent`
       * 
       * As a side effect, this function upgrades the current validation function
       * if the appropriate time has come.
       **/
      setValidationData: AugmentedSubmittable<(data: CumulusPalletParachainSystemParachainInherentBasicParachainInherentData | { validationData?: any; relayChainState?: any; relayParentDescendants?: any; collatorPeerId?: any } | string | Uint8Array, inboundMessagesData: CumulusPalletParachainSystemParachainInherentInboundMessagesData | { downwardMessages?: any; horizontalMessages?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CumulusPalletParachainSystemParachainInherentBasicParachainInherentData, CumulusPalletParachainSystemParachainInherentInboundMessagesData]>;
      sudoSendUpwardMessage: AugmentedSubmittable<(message: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    parameters: {
      /**
       * Set the value of a parameter.
       * 
       * The dispatch origin of this call must be `AdminOrigin` for the given `key`. Values be
       * deleted by setting them to `None`.
       **/
      setParameter: AugmentedSubmittable<(keyValue: AssetHubKusamaRuntimeRuntimeParameters | { Issuance: any } | { Treasury: any } | { StakingElection: any } | { Scheduler: any } | { MessageQueue: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetHubKusamaRuntimeRuntimeParameters]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    polkadotXcm: {
      /**
       * Authorize another `aliaser` location to alias into the local `origin` making this call.
       * The `aliaser` is only authorized until the provided `expiry` block number.
       * The call can also be used for a previously authorized alias in order to update its
       * `expiry` block number.
       * 
       * Usually useful to allow your local account to be aliased into from a remote location
       * also under your control (like your account on another chain).
       * 
       * WARNING: make sure the caller `origin` (you) trusts the `aliaser` location to act in
       * their/your name. Once authorized using this call, the `aliaser` can freely impersonate
       * `origin` in XCM programs executed on the local chain.
       **/
      addAuthorizedAlias: AugmentedSubmittable<(aliaser: XcmVersionedLocation | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, expires: Option<u64> | null | Uint8Array | u64 | AnyNumber) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, Option<u64>]>;
      /**
       * Claims assets trapped on this pallet because of leftover assets during XCM execution.
       * 
       * - `origin`: Anyone can call this extrinsic.
       * - `assets`: The exact assets that were trapped. Use the version to specify what version
       * was the latest when they were trapped.
       * - `beneficiary`: The location/account where the claimed assets will be deposited.
       **/
      claimAssets: AugmentedSubmittable<(assets: XcmVersionedAssets | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, beneficiary: XcmVersionedLocation | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedAssets, XcmVersionedLocation]>;
      /**
       * Execute an XCM message from a local, signed, origin.
       * 
       * An event is deposited indicating whether `msg` could be executed completely or only
       * partially.
       * 
       * No more than `max_weight` will be used in its attempted execution. If this is less than
       * the maximum amount of weight that the message could take to be executed, then no
       * execution attempt will be made.
       **/
      execute: AugmentedSubmittable<(message: XcmVersionedXcm | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedXcm, SpWeightsWeightV2Weight]>;
      /**
       * Set a safe XCM version (the version that XCM should be encoded with if the most recent
       * version a destination can accept is unknown).
       * 
       * - `origin`: Must be an origin specified by AdminOrigin.
       * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
       **/
      forceDefaultXcmVersion: AugmentedSubmittable<(maybeXcmVersion: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Option<u32>]>;
      /**
       * Ask a location to notify us regarding their XCM version and any changes to it.
       * 
       * - `origin`: Must be an origin specified by AdminOrigin.
       * - `location`: The location to which we should subscribe for XCM version notifications.
       **/
      forceSubscribeVersionNotify: AugmentedSubmittable<(location: XcmVersionedLocation | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation]>;
      /**
       * Set or unset the global suspension state of the XCM executor.
       * 
       * - `origin`: Must be an origin specified by AdminOrigin.
       * - `suspended`: `true` to suspend, `false` to resume.
       **/
      forceSuspension: AugmentedSubmittable<(suspended: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [bool]>;
      /**
       * Require that a particular destination should no longer notify us regarding any XCM
       * version changes.
       * 
       * - `origin`: Must be an origin specified by AdminOrigin.
       * - `location`: The location to which we are currently subscribed for XCM version
       * notifications which we no longer desire.
       **/
      forceUnsubscribeVersionNotify: AugmentedSubmittable<(location: XcmVersionedLocation | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation]>;
      /**
       * Extoll that a particular destination can be communicated with through a particular
       * version of XCM.
       * 
       * - `origin`: Must be an origin specified by AdminOrigin.
       * - `location`: The destination that is being described.
       * - `xcm_version`: The latest version of XCM that `location` supports.
       **/
      forceXcmVersion: AugmentedSubmittable<(location: StagingXcmV5Location | { parents?: any; interior?: any } | string | Uint8Array, version: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV5Location, u32]>;
      /**
       * Transfer some assets from the local chain to the destination chain through their local,
       * destination or remote reserve.
       * 
       * `assets` must have same reserve location and may not be teleportable to `dest`.
       * - `assets` have local reserve: transfer assets to sovereign account of destination
       * chain and forward a notification XCM to `dest` to mint and deposit reserve-based
       * assets to `beneficiary`.
       * - `assets` have destination reserve: burn local assets and forward a notification to
       * `dest` chain to withdraw the reserve assets from this chain's sovereign account and
       * deposit them to `beneficiary`.
       * - `assets` have remote reserve: burn local assets, forward XCM to reserve chain to move
       * reserves from this chain's SA to `dest` chain's SA, and forward another XCM to `dest`
       * to mint and deposit reserve-based assets to `beneficiary`.
       * 
       * Fee payment on the destination side is made from the asset in the `assets` vector of
       * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
       * is needed than `weight_limit`, then the operation will fail and the sent assets may be
       * at risk.
       * 
       * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
       * - `dest`: Destination context for the assets. Will typically be `[Parent,
       * Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
       * relay to parachain.
       * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
       * generally be an `AccountId32` value.
       * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
       * fee on the `dest` (and possibly reserve) chains.
       * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
       * fees.
       * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
       **/
      limitedReserveTransferAssets: AugmentedSubmittable<(dest: XcmVersionedLocation | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, beneficiary: XcmVersionedLocation | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, assets: XcmVersionedAssets | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, XcmVersionedLocation, XcmVersionedAssets, u32, XcmV3WeightLimit]>;
      /**
       * Teleport some assets from the local chain to some destination chain.
       * 
       * Fee payment on the destination side is made from the asset in the `assets` vector of
       * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
       * is needed than `weight_limit`, then the operation will fail and the sent assets may be
       * at risk.
       * 
       * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
       * - `dest`: Destination context for the assets. Will typically be `[Parent,
       * Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
       * relay to parachain.
       * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
       * generally be an `AccountId32` value.
       * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
       * fee on the `dest` chain.
       * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
       * fees.
       * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
       **/
      limitedTeleportAssets: AugmentedSubmittable<(dest: XcmVersionedLocation | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, beneficiary: XcmVersionedLocation | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, assets: XcmVersionedAssets | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, XcmVersionedLocation, XcmVersionedAssets, u32, XcmV3WeightLimit]>;
      /**
       * Remove all previously authorized `aliaser`s that can alias into the local `origin`
       * making this call.
       **/
      removeAllAuthorizedAliases: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Remove a previously authorized `aliaser` from the list of locations that can alias into
       * the local `origin` making this call.
       **/
      removeAuthorizedAlias: AugmentedSubmittable<(aliaser: XcmVersionedLocation | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation]>;
      /**
       * Transfer some assets from the local chain to the destination chain through their local,
       * destination or remote reserve.
       * 
       * `assets` must have same reserve location and may not be teleportable to `dest`.
       * - `assets` have local reserve: transfer assets to sovereign account of destination
       * chain and forward a notification XCM to `dest` to mint and deposit reserve-based
       * assets to `beneficiary`.
       * - `assets` have destination reserve: burn local assets and forward a notification to
       * `dest` chain to withdraw the reserve assets from this chain's sovereign account and
       * deposit them to `beneficiary`.
       * - `assets` have remote reserve: burn local assets, forward XCM to reserve chain to move
       * reserves from this chain's SA to `dest` chain's SA, and forward another XCM to `dest`
       * to mint and deposit reserve-based assets to `beneficiary`.
       * 
       * **This function is deprecated: Use `limited_reserve_transfer_assets` instead.**
       * 
       * Fee payment on the destination side is made from the asset in the `assets` vector of
       * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
       * with all fees taken as needed from the asset.
       * 
       * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
       * - `dest`: Destination context for the assets. Will typically be `[Parent,
       * Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
       * relay to parachain.
       * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
       * generally be an `AccountId32` value.
       * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
       * fee on the `dest` (and possibly reserve) chains.
       * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
       * fees.
       **/
      reserveTransferAssets: AugmentedSubmittable<(dest: XcmVersionedLocation | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, beneficiary: XcmVersionedLocation | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, assets: XcmVersionedAssets | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, XcmVersionedLocation, XcmVersionedAssets, u32]>;
      send: AugmentedSubmittable<(dest: XcmVersionedLocation | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, message: XcmVersionedXcm | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, XcmVersionedXcm]>;
      /**
       * Teleport some assets from the local chain to some destination chain.
       * 
       * **This function is deprecated: Use `limited_teleport_assets` instead.**
       * 
       * Fee payment on the destination side is made from the asset in the `assets` vector of
       * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
       * with all fees taken as needed from the asset.
       * 
       * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
       * - `dest`: Destination context for the assets. Will typically be `[Parent,
       * Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
       * relay to parachain.
       * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
       * generally be an `AccountId32` value.
       * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
       * fee on the `dest` chain.
       * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
       * fees.
       **/
      teleportAssets: AugmentedSubmittable<(dest: XcmVersionedLocation | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, beneficiary: XcmVersionedLocation | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, assets: XcmVersionedAssets | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, XcmVersionedLocation, XcmVersionedAssets, u32]>;
      /**
       * Transfer some assets from the local chain to the destination chain through their local,
       * destination or remote reserve, or through teleports.
       * 
       * Fee payment on the destination side is made from the asset in the `assets` vector of
       * index `fee_asset_item` (hence referred to as `fees`), up to enough to pay for
       * `weight_limit` of weight. If more weight is needed than `weight_limit`, then the
       * operation will fail and the sent assets may be at risk.
       * 
       * `assets` (excluding `fees`) must have same reserve location or otherwise be teleportable
       * to `dest`, no limitations imposed on `fees`.
       * - for local reserve: transfer assets to sovereign account of destination chain and
       * forward a notification XCM to `dest` to mint and deposit reserve-based assets to
       * `beneficiary`.
       * - for destination reserve: burn local assets and forward a notification to `dest` chain
       * to withdraw the reserve assets from this chain's sovereign account and deposit them
       * to `beneficiary`.
       * - for remote reserve: burn local assets, forward XCM to reserve chain to move reserves
       * from this chain's SA to `dest` chain's SA, and forward another XCM to `dest` to mint
       * and deposit reserve-based assets to `beneficiary`.
       * - for teleports: burn local assets and forward XCM to `dest` chain to mint/teleport
       * assets and deposit them to `beneficiary`.
       * 
       * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
       * - `dest`: Destination context for the assets. Will typically be `X2(Parent,
       * Parachain(..))` to send from parachain to parachain, or `X1(Parachain(..))` to send
       * from relay to parachain.
       * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
       * generally be an `AccountId32` value.
       * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
       * fee on the `dest` (and possibly reserve) chains.
       * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
       * fees.
       * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
       **/
      transferAssets: AugmentedSubmittable<(dest: XcmVersionedLocation | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, beneficiary: XcmVersionedLocation | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, assets: XcmVersionedAssets | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, XcmVersionedLocation, XcmVersionedAssets, u32, XcmV3WeightLimit]>;
      /**
       * Transfer assets from the local chain to the destination chain using explicit transfer
       * types for assets and fees.
       * 
       * `assets` must have same reserve location or may be teleportable to `dest`. Caller must
       * provide the `assets_transfer_type` to be used for `assets`:
       * - `TransferType::LocalReserve`: transfer assets to sovereign account of destination
       * chain and forward a notification XCM to `dest` to mint and deposit reserve-based
       * assets to `beneficiary`.
       * - `TransferType::DestinationReserve`: burn local assets and forward a notification to
       * `dest` chain to withdraw the reserve assets from this chain's sovereign account and
       * deposit them to `beneficiary`.
       * - `TransferType::RemoteReserve(reserve)`: burn local assets, forward XCM to `reserve`
       * chain to move reserves from this chain's SA to `dest` chain's SA, and forward another
       * XCM to `dest` to mint and deposit reserve-based assets to `beneficiary`. Typically
       * the remote `reserve` is Asset Hub.
       * - `TransferType::Teleport`: burn local assets and forward XCM to `dest` chain to
       * mint/teleport assets and deposit them to `beneficiary`.
       * 
       * On the destination chain, as well as any intermediary hops, `BuyExecution` is used to
       * buy execution using transferred `assets` identified by `remote_fees_id`.
       * Make sure enough of the specified `remote_fees_id` asset is included in the given list
       * of `assets`. `remote_fees_id` should be enough to pay for `weight_limit`. If more weight
       * is needed than `weight_limit`, then the operation will fail and the sent assets may be
       * at risk.
       * 
       * `remote_fees_id` may use different transfer type than rest of `assets` and can be
       * specified through `fees_transfer_type`.
       * 
       * The caller needs to specify what should happen to the transferred assets once they reach
       * the `dest` chain. This is done through the `custom_xcm_on_dest` parameter, which
       * contains the instructions to execute on `dest` as a final step.
       * This is usually as simple as:
       * `Xcm(vec![DepositAsset { assets: Wild(AllCounted(assets.len())), beneficiary }])`,
       * but could be something more exotic like sending the `assets` even further.
       * 
       * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
       * - `dest`: Destination context for the assets. Will typically be `[Parent,
       * Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
       * relay to parachain, or `(parents: 2, (GlobalConsensus(..), ..))` to send from
       * parachain across a bridge to another ecosystem destination.
       * - `assets`: The assets to be withdrawn. This should include the assets used to pay the
       * fee on the `dest` (and possibly reserve) chains.
       * - `assets_transfer_type`: The XCM `TransferType` used to transfer the `assets`.
       * - `remote_fees_id`: One of the included `assets` to be used to pay fees.
       * - `fees_transfer_type`: The XCM `TransferType` used to transfer the `fees` assets.
       * - `custom_xcm_on_dest`: The XCM to be executed on `dest` chain as the last step of the
       * transfer, which also determines what happens to the assets on the destination chain.
       * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
       **/
      transferAssetsUsingTypeAndThen: AugmentedSubmittable<(dest: XcmVersionedLocation | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, assets: XcmVersionedAssets | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, assetsTransferType: StagingXcmExecutorAssetTransferTransferType | { Teleport: any } | { LocalReserve: any } | { DestinationReserve: any } | { RemoteReserve: any } | string | Uint8Array, remoteFeesId: XcmVersionedAssetId | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, feesTransferType: StagingXcmExecutorAssetTransferTransferType | { Teleport: any } | { LocalReserve: any } | { DestinationReserve: any } | { RemoteReserve: any } | string | Uint8Array, customXcmOnDest: XcmVersionedXcm | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, XcmVersionedAssets, StagingXcmExecutorAssetTransferTransferType, XcmVersionedAssetId, StagingXcmExecutorAssetTransferTransferType, XcmVersionedXcm, XcmV3WeightLimit]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    poolAssets: {
      /**
       * Approve an amount of asset for transfer by a delegated third-party account.
       * 
       * Origin must be Signed.
       * 
       * Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account
       * for the purpose of holding the approval. If some non-zero amount of assets is already
       * approved from signing account to `delegate`, then it is topped up or unreserved to
       * meet the right value.
       * 
       * NOTE: The signing account does not need to own `amount` of assets at the point of
       * making this call.
       * 
       * - `id`: The identifier of the asset.
       * - `delegate`: The account to delegate permission to transfer asset.
       * - `amount`: The amount of asset that may be transferred by `delegate`. If there is
       * already an approval in place, then this acts additively.
       * 
       * Emits `ApprovedTransfer` on success.
       * 
       * Weight: `O(1)`
       **/
      approveTransfer: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress, Compact<u128>]>;
      /**
       * Disallow further unprivileged transfers of an asset `id` to and from an account `who`.
       * 
       * Origin must be Signed and the sender should be the Freezer of the asset `id`.
       * 
       * - `id`: The identifier of the account's asset.
       * - `who`: The account to be unblocked.
       * 
       * Emits `Blocked`.
       * 
       * Weight: `O(1)`
       **/
      block: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress]>;
      /**
       * Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
       * 
       * Origin must be Signed and the sender should be the Manager of the asset `id`.
       * 
       * Bails with `NoAccount` if the `who` is already dead.
       * 
       * - `id`: The identifier of the asset to have some amount burned.
       * - `who`: The account to be debited from.
       * - `amount`: The maximum amount by which `who`'s balance should be reduced.
       * 
       * Emits `Burned` with the actual amount burned. If this takes the balance to below the
       * minimum for the asset, then the amount burned is increased to take it to zero.
       * 
       * Weight: `O(1)`
       * Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
       **/
      burn: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress, Compact<u128>]>;
      /**
       * Cancel all of some asset approved for delegated transfer by a third-party account.
       * 
       * Origin must be Signed and there must be an approval in place between signer and
       * `delegate`.
       * 
       * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
       * 
       * - `id`: The identifier of the asset.
       * - `delegate`: The account delegated permission to transfer asset.
       * 
       * Emits `ApprovalCancelled` on success.
       * 
       * Weight: `O(1)`
       **/
      cancelApproval: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress]>;
      /**
       * Clear the metadata for an asset.
       * 
       * Origin must be Signed and the sender should be the Owner of the asset `id`.
       * 
       * Any deposit is freed for the asset owner.
       * 
       * - `id`: The identifier of the asset to clear.
       * 
       * Emits `MetadataCleared`.
       * 
       * Weight: `O(1)`
       **/
      clearMetadata: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Issue a new class of fungible assets from a public origin.
       * 
       * This new asset class has no assets initially and its owner is the origin.
       * 
       * The origin must conform to the configured `CreateOrigin` and have sufficient funds free.
       * 
       * Funds of sender are reserved by `AssetDeposit`.
       * 
       * Parameters:
       * - `id`: The identifier of the new asset. This must not be currently in use to identify
       * an existing asset. If [`NextAssetId`] is set, then this must be equal to it.
       * - `admin`: The admin of this class of assets. The admin is the initial address of each
       * member of the asset class's admin team.
       * - `min_balance`: The minimum balance of this new asset that any single account must
       * have. If an account's balance is reduced below this, then it collapses to zero.
       * 
       * Emits `Created` event when successful.
       * 
       * Weight: `O(1)`
       **/
      create: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, admin: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, minBalance: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress, u128]>;
      /**
       * Destroy all accounts associated with a given asset.
       * 
       * `destroy_accounts` should only be called after `start_destroy` has been called, and the
       * asset is in a `Destroying` state.
       * 
       * Due to weight restrictions, this function may need to be called multiple times to fully
       * destroy all accounts. It will destroy `RemoveItemsLimit` accounts at a time.
       * 
       * - `id`: The identifier of the asset to be destroyed. This must identify an existing
       * asset.
       * 
       * Each call emits the `Event::DestroyedAccounts` event.
       **/
      destroyAccounts: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit).
       * 
       * `destroy_approvals` should only be called after `start_destroy` has been called, and the
       * asset is in a `Destroying` state.
       * 
       * Due to weight restrictions, this function may need to be called multiple times to fully
       * destroy all approvals. It will destroy `RemoveItemsLimit` approvals at a time.
       * 
       * - `id`: The identifier of the asset to be destroyed. This must identify an existing
       * asset.
       * 
       * Each call emits the `Event::DestroyedApprovals` event.
       **/
      destroyApprovals: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Complete destroying asset and unreserve currency.
       * 
       * `finish_destroy` should only be called after `start_destroy` has been called, and the
       * asset is in a `Destroying` state. All accounts or approvals should be destroyed before
       * hand.
       * 
       * - `id`: The identifier of the asset to be destroyed. This must identify an existing
       * asset.
       * 
       * Each successful call emits the `Event::Destroyed` event.
       **/
      finishDestroy: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Alter the attributes of a given asset.
       * 
       * Origin must be `ForceOrigin`.
       * 
       * - `id`: The identifier of the asset.
       * - `owner`: The new Owner of this asset.
       * - `issuer`: The new Issuer of this asset.
       * - `admin`: The new Admin of this asset.
       * - `freezer`: The new Freezer of this asset.
       * - `min_balance`: The minimum balance of this new asset that any single account must
       * have. If an account's balance is reduced below this, then it collapses to zero.
       * - `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient
       * value to account for the state bloat associated with its balance storage. If set to
       * `true`, then non-zero balances may be stored without a `consumer` reference (and thus
       * an ED in the Balances pallet or whatever else is used to control user-account state
       * growth).
       * - `is_frozen`: Whether this asset class is frozen except for permissioned/admin
       * instructions.
       * 
       * Emits `AssetStatusChanged` with the identity of the asset.
       * 
       * Weight: `O(1)`
       **/
      forceAssetStatus: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, issuer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, admin: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, freezer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, minBalance: Compact<u128> | AnyNumber | Uint8Array, isSufficient: bool | boolean | Uint8Array, isFrozen: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress, MultiAddress, MultiAddress, MultiAddress, Compact<u128>, bool, bool]>;
      /**
       * Cancel all of some asset approved for delegated transfer by a third-party account.
       * 
       * Origin must be either ForceOrigin or Signed origin with the signer being the Admin
       * account of the asset `id`.
       * 
       * Unreserves any deposit previously reserved by `approve_transfer` for the approval.
       * 
       * - `id`: The identifier of the asset.
       * - `delegate`: The account delegated permission to transfer asset.
       * 
       * Emits `ApprovalCancelled` on success.
       * 
       * Weight: `O(1)`
       **/
      forceCancelApproval: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress, MultiAddress]>;
      /**
       * Clear the metadata for an asset.
       * 
       * Origin must be ForceOrigin.
       * 
       * Any deposit is returned.
       * 
       * - `id`: The identifier of the asset to clear.
       * 
       * Emits `MetadataCleared`.
       * 
       * Weight: `O(1)`
       **/
      forceClearMetadata: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Issue a new class of fungible assets from a privileged origin.
       * 
       * This new asset class has no assets initially.
       * 
       * The origin must conform to `ForceOrigin`.
       * 
       * Unlike `create`, no funds are reserved.
       * 
       * - `id`: The identifier of the new asset. This must not be currently in use to identify
       * an existing asset. If [`NextAssetId`] is set, then this must be equal to it.
       * - `owner`: The owner of this class of assets. The owner has full superuser permissions
       * over this asset, but may later change and configure the permissions using
       * `transfer_ownership` and `set_team`.
       * - `min_balance`: The minimum balance of this new asset that any single account must
       * have. If an account's balance is reduced below this, then it collapses to zero.
       * 
       * Emits `ForceCreated` event when successful.
       * 
       * Weight: `O(1)`
       **/
      forceCreate: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, isSufficient: bool | boolean | Uint8Array, minBalance: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress, bool, Compact<u128>]>;
      /**
       * Force the metadata for an asset to some value.
       * 
       * Origin must be ForceOrigin.
       * 
       * Any deposit is left alone.
       * 
       * - `id`: The identifier of the asset to update.
       * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
       * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
       * - `decimals`: The number of decimals this asset uses to represent one unit.
       * 
       * Emits `MetadataSet`.
       * 
       * Weight: `O(N + S)` where N and S are the length of the name and symbol respectively.
       **/
      forceSetMetadata: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, name: Bytes | string | Uint8Array, symbol: Bytes | string | Uint8Array, decimals: u8 | AnyNumber | Uint8Array, isFrozen: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Bytes, Bytes, u8, bool]>;
      /**
       * Move some assets from one account to another.
       * 
       * Origin must be Signed and the sender should be the Admin of the asset `id`.
       * 
       * - `id`: The identifier of the asset to have some amount transferred.
       * - `source`: The account to be debited.
       * - `dest`: The account to be credited.
       * - `amount`: The amount by which the `source`'s balance of assets should be reduced and
       * `dest`'s balance increased. The amount actually transferred may be slightly greater in
       * the case that the transfer would otherwise take the `source` balance above zero but
       * below the minimum balance. Must be greater than zero.
       * 
       * Emits `Transferred` with the actual amount transferred. If this takes the source balance
       * to below the minimum for the asset, then the amount transferred is increased to take it
       * to zero.
       * 
       * Weight: `O(1)`
       * Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of
       * `dest`.
       **/
      forceTransfer: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress, MultiAddress, Compact<u128>]>;
      /**
       * Disallow further unprivileged transfers of an asset `id` from an account `who`. `who`
       * must already exist as an entry in `Account`s of the asset. If you want to freeze an
       * account that does not have an entry, use `touch_other` first.
       * 
       * Origin must be Signed and the sender should be the Freezer of the asset `id`.
       * 
       * - `id`: The identifier of the asset to be frozen.
       * - `who`: The account to be frozen.
       * 
       * Emits `Frozen`.
       * 
       * Weight: `O(1)`
       **/
      freeze: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress]>;
      /**
       * Disallow further unprivileged transfers for the asset class.
       * 
       * Origin must be Signed and the sender should be the Freezer of the asset `id`.
       * 
       * - `id`: The identifier of the asset to be frozen.
       * 
       * Emits `Frozen`.
       * 
       * Weight: `O(1)`
       **/
      freezeAsset: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Mint assets of a particular class.
       * 
       * The origin must be Signed and the sender must be the Issuer of the asset `id`.
       * 
       * - `id`: The identifier of the asset to have some amount minted.
       * - `beneficiary`: The account to be credited with the minted assets.
       * - `amount`: The amount of the asset to be minted.
       * 
       * Emits `Issued` event when successful.
       * 
       * Weight: `O(1)`
       * Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
       **/
      mint: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress, Compact<u128>]>;
      /**
       * Return the deposit (if any) of an asset account or a consumer reference (if any) of an
       * account.
       * 
       * The origin must be Signed.
       * 
       * - `id`: The identifier of the asset for which the caller would like the deposit
       * refunded.
       * - `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
       * 
       * It will fail with either [`Error::ContainsHolds`] or [`Error::ContainsFreezes`] if
       * the asset account contains holds or freezes in place.
       * 
       * Emits `Refunded` event when successful.
       **/
      refund: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, allowBurn: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, bool]>;
      /**
       * Return the deposit (if any) of a target asset account. Useful if you are the depositor.
       * 
       * The origin must be Signed and either the account owner, depositor, or asset `Admin`. In
       * order to burn a non-zero balance of the asset, the caller must be the account and should
       * use `refund`.
       * 
       * - `id`: The identifier of the asset for the account holding a deposit.
       * - `who`: The account to refund.
       * 
       * It will fail with either [`Error::ContainsHolds`] or [`Error::ContainsFreezes`] if
       * the asset account contains holds or freezes in place.
       * 
       * Emits `Refunded` event when successful.
       **/
      refundOther: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress]>;
      /**
       * Set the metadata for an asset.
       * 
       * Origin must be Signed and the sender should be the Owner of the asset `id`.
       * 
       * Funds of sender are reserved according to the formula:
       * `MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
       * account any already reserved funds.
       * 
       * - `id`: The identifier of the asset to update.
       * - `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
       * - `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
       * - `decimals`: The number of decimals this asset uses to represent one unit.
       * 
       * Emits `MetadataSet`.
       * 
       * Weight: `O(1)`
       **/
      setMetadata: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, name: Bytes | string | Uint8Array, symbol: Bytes | string | Uint8Array, decimals: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Bytes, Bytes, u8]>;
      /**
       * Sets the minimum balance of an asset.
       * 
       * Only works if there aren't any accounts that are holding the asset or if
       * the new value of `min_balance` is less than the old one.
       * 
       * Origin must be Signed and the sender has to be the Owner of the
       * asset `id`.
       * 
       * - `id`: The identifier of the asset.
       * - `min_balance`: The new value of `min_balance`.
       * 
       * Emits `AssetMinBalanceChanged` event when successful.
       **/
      setMinBalance: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, minBalance: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u128]>;
      /**
       * Change the Issuer, Admin and Freezer of an asset.
       * 
       * Origin must be Signed and the sender should be the Owner of the asset `id`.
       * 
       * - `id`: The identifier of the asset to be frozen.
       * - `issuer`: The new Issuer of this asset.
       * - `admin`: The new Admin of this asset.
       * - `freezer`: The new Freezer of this asset.
       * 
       * Emits `TeamChanged`.
       * 
       * Weight: `O(1)`
       **/
      setTeam: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, issuer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, admin: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, freezer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress, MultiAddress, MultiAddress]>;
      /**
       * Start the process of destroying a fungible asset class.
       * 
       * `start_destroy` is the first in a series of extrinsics that should be called, to allow
       * destruction of an asset class.
       * 
       * The origin must conform to `ForceOrigin` or must be `Signed` by the asset's `owner`.
       * 
       * - `id`: The identifier of the asset to be destroyed. This must identify an existing
       * asset.
       * 
       * It will fail with either [`Error::ContainsHolds`] or [`Error::ContainsFreezes`] if
       * an account contains holds or freezes in place.
       **/
      startDestroy: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Allow unprivileged transfers to and from an account again.
       * 
       * Origin must be Signed and the sender should be the Admin of the asset `id`.
       * 
       * - `id`: The identifier of the asset to be frozen.
       * - `who`: The account to be unfrozen.
       * 
       * Emits `Thawed`.
       * 
       * Weight: `O(1)`
       **/
      thaw: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress]>;
      /**
       * Allow unprivileged transfers for the asset again.
       * 
       * Origin must be Signed and the sender should be the Admin of the asset `id`.
       * 
       * - `id`: The identifier of the asset to be thawed.
       * 
       * Emits `Thawed`.
       * 
       * Weight: `O(1)`
       **/
      thawAsset: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Create an asset account for non-provider assets.
       * 
       * A deposit will be taken from the signer account.
       * 
       * - `origin`: Must be Signed; the signer account must have sufficient funds for a deposit
       * to be taken.
       * - `id`: The identifier of the asset for the account to be created.
       * 
       * Emits `Touched` event when successful.
       **/
      touch: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Create an asset account for `who`.
       * 
       * A deposit will be taken from the signer account.
       * 
       * - `origin`: Must be Signed by `Freezer` or `Admin` of the asset `id`; the signer account
       * must have sufficient funds for a deposit to be taken.
       * - `id`: The identifier of the asset for the account to be created.
       * - `who`: The account to be created.
       * 
       * Emits `Touched` event when successful.
       **/
      touchOther: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress]>;
      /**
       * Move some assets from the sender account to another.
       * 
       * Origin must be Signed.
       * 
       * - `id`: The identifier of the asset to have some amount transferred.
       * - `target`: The account to be credited.
       * - `amount`: The amount by which the sender's balance of assets should be reduced and
       * `target`'s balance increased. The amount actually transferred may be slightly greater in
       * the case that the transfer would otherwise take the sender balance above zero but below
       * the minimum balance. Must be greater than zero.
       * 
       * Emits `Transferred` with the actual amount transferred. If this takes the source balance
       * to below the minimum for the asset, then the amount transferred is increased to take it
       * to zero.
       * 
       * Weight: `O(1)`
       * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
       * `target`.
       **/
      transfer: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress, Compact<u128>]>;
      /**
       * Transfer the entire transferable balance from the caller asset account.
       * 
       * NOTE: This function only attempts to transfer _transferable_ balances. This means that
       * any held, frozen, or minimum balance (when `keep_alive` is `true`), will not be
       * transferred by this function. To ensure that this function results in a killed account,
       * you might need to prepare the account by removing any reference counters, storage
       * deposits, etc...
       * 
       * The dispatch origin of this call must be Signed.
       * 
       * - `id`: The identifier of the asset for the account holding a deposit.
       * - `dest`: The recipient of the transfer.
       * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
       * of the funds the asset account has, causing the sender asset account to be killed
       * (false), or transfer everything except at least the minimum balance, which will
       * guarantee to keep the sender asset account alive (true).
       **/
      transferAll: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress, bool]>;
      /**
       * Transfer some asset balance from a previously delegated account to some third-party
       * account.
       * 
       * Origin must be Signed and there must be an approval in place by the `owner` to the
       * signer.
       * 
       * If the entire amount approved for transfer is transferred, then any deposit previously
       * reserved by `approve_transfer` is unreserved.
       * 
       * - `id`: The identifier of the asset.
       * - `owner`: The account which previously approved for a transfer of at least `amount` and
       * from which the asset balance will be withdrawn.
       * - `destination`: The account to which the asset balance of `amount` will be transferred.
       * - `amount`: The amount of assets to transfer.
       * 
       * Emits `TransferredApproved` on success.
       * 
       * Weight: `O(1)`
       **/
      transferApproved: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, destination: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress, MultiAddress, Compact<u128>]>;
      /**
       * Move some assets from the sender account to another, keeping the sender account alive.
       * 
       * Origin must be Signed.
       * 
       * - `id`: The identifier of the asset to have some amount transferred.
       * - `target`: The account to be credited.
       * - `amount`: The amount by which the sender's balance of assets should be reduced and
       * `target`'s balance increased. The amount actually transferred may be slightly greater in
       * the case that the transfer would otherwise take the sender balance above zero but below
       * the minimum balance. Must be greater than zero.
       * 
       * Emits `Transferred` with the actual amount transferred. If this takes the source balance
       * to below the minimum for the asset, then the amount transferred is increased to take it
       * to zero.
       * 
       * Weight: `O(1)`
       * Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
       * `target`.
       **/
      transferKeepAlive: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress, Compact<u128>]>;
      /**
       * Change the Owner of an asset.
       * 
       * Origin must be Signed and the sender should be the Owner of the asset `id`.
       * 
       * - `id`: The identifier of the asset.
       * - `owner`: The new Owner of this asset.
       * 
       * Emits `OwnerChanged`.
       * 
       * Weight: `O(1)`
       **/
      transferOwnership: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    preimage: {
      /**
       * Ensure that the bulk of pre-images is upgraded.
       * 
       * The caller pays no fee if at least 90% of pre-images were successfully updated.
       **/
      ensureUpdated: AugmentedSubmittable<(hashes: Vec<H256> | (H256 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<H256>]>;
      /**
       * Register a preimage on-chain.
       * 
       * If the preimage was previously requested, no fees or deposits are taken for providing
       * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
       **/
      notePreimage: AugmentedSubmittable<(bytes: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Request a preimage be uploaded to the chain without paying any fees or deposits.
       * 
       * If the preimage requests has already been provided on-chain, we unreserve any deposit
       * a user may have paid, and take the control of the preimage out of their hands.
       **/
      requestPreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Clear an unrequested preimage from the runtime storage.
       * 
       * If `len` is provided, then it will be a much cheaper operation.
       * 
       * - `hash`: The hash of the preimage to be removed from the store.
       * - `len`: The length of the preimage of `hash`.
       **/
      unnotePreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Clear a previously made request for a preimage.
       * 
       * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
       **/
      unrequestPreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    proxy: {
      /**
       * Register a proxy account for the sender that is able to make calls on its behalf.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `proxy`: The account that the `caller` would like to make a proxy.
       * - `proxy_type`: The permissions allowed for this proxy account.
       * - `delay`: The announcement period required of the initial proxy. Will generally be
       * zero.
       **/
      addProxy: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: AssetHubKusamaRuntimeProxyType | 'Any' | 'NonTransfer' | 'CancelProxy' | 'Assets' | 'AssetOwner' | 'AssetManager' | 'Collator' | 'Governance' | 'Staking' | 'NominationPools' | 'Auction' | 'ParaRegistration' | 'Society' | 'Spokesperson' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, AssetHubKusamaRuntimeProxyType, u32]>;
      /**
       * Publish the hash of a proxy-call that will be made in the future.
       * 
       * This must be called some number of blocks before the corresponding `proxy` is attempted
       * if the delay associated with the proxy relationship is greater than zero.
       * 
       * No more than `MaxPending` announcements may be made at any one time.
       * 
       * This will take a deposit of `AnnouncementDepositFactor` as well as
       * `AnnouncementDepositBase` if there are no other pending announcements.
       * 
       * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
       * 
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `call_hash`: The hash of the call to be made by the `real` account.
       **/
      announce: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
      /**
       * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
       * initialize it with a proxy of `proxy_type` for `origin` sender.
       * 
       * Requires a `Signed` origin.
       * 
       * - `proxy_type`: The type of the proxy that the sender will be registered as over the
       * new account. This will almost always be the most permissive `ProxyType` possible to
       * allow for maximum flexibility.
       * - `index`: A disambiguation index, in case this is called multiple times in the same
       * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
       * want to use `0`.
       * - `delay`: The announcement period required of the initial proxy. Will generally be
       * zero.
       * 
       * Fails with `Duplicate` if this has already been called in this transaction, from the
       * same sender, with the same parameters.
       * 
       * Fails if there are insufficient funds to pay for deposit.
       **/
      createPure: AugmentedSubmittable<(proxyType: AssetHubKusamaRuntimeProxyType | 'Any' | 'NonTransfer' | 'CancelProxy' | 'Assets' | 'AssetOwner' | 'AssetManager' | 'Collator' | 'Governance' | 'Staking' | 'NominationPools' | 'Auction' | 'ParaRegistration' | 'Society' | 'Spokesperson' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array, index: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetHubKusamaRuntimeProxyType, u32, u16]>;
      /**
       * Removes a previously spawned pure proxy.
       * 
       * WARNING: **All access to this account will be lost.** Any funds held in it will be
       * inaccessible.
       * 
       * Requires a `Signed` origin, and the sender account must have been created by a call to
       * `create_pure` with corresponding parameters.
       * 
       * - `spawner`: The account that originally called `create_pure` to create this account.
       * - `index`: The disambiguation index originally passed to `create_pure`. Probably `0`.
       * - `proxy_type`: The proxy type originally passed to `create_pure`.
       * - `height`: The height of the chain when the call to `create_pure` was processed.
       * - `ext_index`: The extrinsic index in which the call to `create_pure` was processed.
       * 
       * Fails with `NoPermission` in case the caller is not a previously created pure
       * account whose `create_pure` call has corresponding parameters.
       **/
      killPure: AugmentedSubmittable<(spawner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: AssetHubKusamaRuntimeProxyType | 'Any' | 'NonTransfer' | 'CancelProxy' | 'Assets' | 'AssetOwner' | 'AssetManager' | 'Collator' | 'Governance' | 'Staking' | 'NominationPools' | 'Auction' | 'ParaRegistration' | 'Society' | 'Spokesperson' | number | Uint8Array, index: u16 | AnyNumber | Uint8Array, height: Compact<u32> | AnyNumber | Uint8Array, extIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, AssetHubKusamaRuntimeProxyType, u16, Compact<u32>, Compact<u32>]>;
      /**
       * Poke / Adjust deposits made for proxies and announcements based on current values.
       * This can be used by accounts to possibly lower their locked amount.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * The transaction fee is waived if the deposit amount has changed.
       * 
       * Emits `DepositPoked` if successful.
       **/
      pokeDeposit: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Dispatch the given `call` from an account that the sender is authorised for through
       * `add_proxy`.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
       * - `call`: The call to be made by the `real` account.
       **/
      proxy: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, forceProxyType: Option<AssetHubKusamaRuntimeProxyType> | null | Uint8Array | AssetHubKusamaRuntimeProxyType | 'Any' | 'NonTransfer' | 'CancelProxy' | 'Assets' | 'AssetOwner' | 'AssetManager' | 'Collator' | 'Governance' | 'Staking' | 'NominationPools' | 'Auction' | 'ParaRegistration' | 'Society' | 'Spokesperson' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Option<AssetHubKusamaRuntimeProxyType>, Call]>;
      /**
       * Dispatch the given `call` from an account that the sender is authorized for through
       * `add_proxy`.
       * 
       * Removes any corresponding announcement(s).
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
       * - `call`: The call to be made by the `real` account.
       **/
      proxyAnnounced: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, forceProxyType: Option<AssetHubKusamaRuntimeProxyType> | null | Uint8Array | AssetHubKusamaRuntimeProxyType | 'Any' | 'NonTransfer' | 'CancelProxy' | 'Assets' | 'AssetOwner' | 'AssetManager' | 'Collator' | 'Governance' | 'Staking' | 'NominationPools' | 'Auction' | 'ParaRegistration' | 'Society' | 'Spokesperson' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Option<AssetHubKusamaRuntimeProxyType>, Call]>;
      /**
       * Remove the given announcement of a delegate.
       * 
       * May be called by a target (proxied) account to remove a call that one of their delegates
       * (`delegate`) has announced they want to execute. The deposit is returned.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `delegate`: The account that previously announced the call.
       * - `call_hash`: The hash of the call to be made.
       **/
      rejectAnnouncement: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
      /**
       * Remove a given announcement.
       * 
       * May be called by a proxy account to remove a call they previously announced and return
       * the deposit.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `call_hash`: The hash of the call to be made by the `real` account.
       **/
      removeAnnouncement: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
      /**
       * Unregister all proxy accounts for the sender.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * WARNING: This may be called on accounts created by `create_pure`, however if done, then
       * the unreserved fees will be inaccessible. **All access to this account will be lost.**
       **/
      removeProxies: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Unregister a proxy account for the sender.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `proxy`: The account that the `caller` would like to remove as a proxy.
       * - `proxy_type`: The permissions currently enabled for the removed proxy account.
       **/
      removeProxy: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: AssetHubKusamaRuntimeProxyType | 'Any' | 'NonTransfer' | 'CancelProxy' | 'Assets' | 'AssetOwner' | 'AssetManager' | 'Collator' | 'Governance' | 'Staking' | 'NominationPools' | 'Auction' | 'ParaRegistration' | 'Society' | 'Spokesperson' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, AssetHubKusamaRuntimeProxyType, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    recovery: {
      /**
       * Send a call through a recovered account.
       * 
       * The dispatch origin for this call must be _Signed_ and registered to
       * be able to make calls on behalf of the recovered account.
       * 
       * Parameters:
       * - `account`: The recovered account you want to make a call on-behalf-of.
       * - `call`: The call you want to make with the recovered account.
       **/
      asRecovered: AugmentedSubmittable<(account: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Call]>;
      /**
       * Cancel the ability to use `as_recovered` for `account`.
       * 
       * The dispatch origin for this call must be _Signed_ and registered to
       * be able to make calls on behalf of the recovered account.
       * 
       * Parameters:
       * - `account`: The recovered account you are able to call on-behalf-of.
       **/
      cancelRecovered: AugmentedSubmittable<(account: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Allow a successful rescuer to claim their recovered account.
       * 
       * The dispatch origin for this call must be _Signed_ and must be a "rescuer"
       * who has successfully completed the account recovery process: collected
       * `threshold` or more vouches, waited `delay_period` blocks since initiation.
       * 
       * Parameters:
       * - `account`: The lost account that you want to claim has been successfully recovered by
       * you.
       **/
      claimRecovery: AugmentedSubmittable<(account: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * As the controller of a recoverable account, close an active recovery
       * process for your account.
       * 
       * Payment: By calling this function, the recoverable account will receive
       * the recovery deposit `RecoveryDeposit` placed by the rescuer.
       * 
       * The dispatch origin for this call must be _Signed_ and must be a
       * recoverable account with an active recovery process for it.
       * 
       * Parameters:
       * - `rescuer`: The account trying to rescue this recoverable account.
       **/
      closeRecovery: AugmentedSubmittable<(rescuer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Create a recovery configuration for your account. This makes your account recoverable.
       * 
       * Payment: `ConfigDepositBase` + `FriendDepositFactor` * #_of_friends balance
       * will be reserved for storing the recovery configuration. This deposit is returned
       * in full when the user calls `remove_recovery`.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `friends`: A list of friends you trust to vouch for recovery attempts. Should be
       * ordered and contain no duplicate values.
       * - `threshold`: The number of friends that must vouch for a recovery attempt before the
       * account can be recovered. Should be less than or equal to the length of the list of
       * friends.
       * - `delay_period`: The number of blocks after a recovery attempt is initialized that
       * needs to pass before the account can be recovered.
       **/
      createRecovery: AugmentedSubmittable<(friends: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], threshold: u16 | AnyNumber | Uint8Array, delayPeriod: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, u16, u32]>;
      /**
       * Initiate the process for recovering a recoverable account.
       * 
       * Payment: `RecoveryDeposit` balance will be reserved for initiating the
       * recovery process. This deposit will always be repatriated to the account
       * trying to be recovered. See `close_recovery`.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `account`: The lost account that you want to recover. This account needs to be
       * recoverable (i.e. have a recovery configuration).
       **/
      initiateRecovery: AugmentedSubmittable<(account: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Poke deposits for recovery configurations and / or active recoveries.
       * 
       * This can be used by accounts to possibly lower their locked amount.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `maybe_account`: Optional recoverable account for which you have an active recovery
       * and want to adjust the deposit for the active recovery.
       * 
       * This function checks both recovery configuration deposit and active recovery deposits
       * of the caller:
       * - If the caller has created a recovery configuration, checks and adjusts its deposit
       * - If the caller has initiated any active recoveries, and provides the account in
       * `maybe_account`, checks and adjusts those deposits
       * 
       * If any deposit is updated, the difference will be reserved/unreserved from the caller's
       * account.
       * 
       * The transaction is made free if any deposit is updated and paid otherwise.
       * 
       * Emits `DepositPoked` if any deposit is updated.
       * Multiple events may be emitted in case both types of deposits are updated.
       **/
      pokeDeposit: AugmentedSubmittable<(maybeAccount: Option<MultiAddress> | null | Uint8Array | MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string) => SubmittableExtrinsic<ApiType>, [Option<MultiAddress>]>;
      /**
       * Remove the recovery process for your account. Recovered accounts are still accessible.
       * 
       * NOTE: The user must make sure to call `close_recovery` on all active
       * recovery attempts before calling this function else it will fail.
       * 
       * Payment: By calling this function the recoverable account will unreserve
       * their recovery configuration deposit.
       * (`ConfigDepositBase` + `FriendDepositFactor` * #_of_friends)
       * 
       * The dispatch origin for this call must be _Signed_ and must be a
       * recoverable account (i.e. has a recovery configuration).
       **/
      removeRecovery: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Allow ROOT to bypass the recovery process and set a rescuer account
       * for a lost account directly.
       * 
       * The dispatch origin for this call must be _ROOT_.
       * 
       * Parameters:
       * - `lost`: The "lost account" to be recovered.
       * - `rescuer`: The "rescuer account" which can call as the lost account.
       **/
      setRecovered: AugmentedSubmittable<(lost: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, rescuer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress]>;
      /**
       * Allow a "friend" of a recoverable account to vouch for an active recovery
       * process for that account.
       * 
       * The dispatch origin for this call must be _Signed_ and must be a "friend"
       * for the recoverable account.
       * 
       * Parameters:
       * - `lost`: The lost account that you want to recover.
       * - `rescuer`: The account trying to rescue the lost account that you want to vouch for.
       * 
       * The combination of these two parameters must point to an active recovery
       * process.
       **/
      vouchRecovery: AugmentedSubmittable<(lost: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, rescuer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    referenda: {
      /**
       * Cancel an ongoing referendum.
       * 
       * - `origin`: must be the `CancelOrigin`.
       * - `index`: The index of the referendum to be cancelled.
       * 
       * Emits `Cancelled`.
       **/
      cancel: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Cancel an ongoing referendum and slash the deposits.
       * 
       * - `origin`: must be the `KillOrigin`.
       * - `index`: The index of the referendum to be cancelled.
       * 
       * Emits `Killed` and `DepositSlashed`.
       **/
      kill: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Advance a referendum onto its next logical state. Only used internally.
       * 
       * - `origin`: must be `Root`.
       * - `index`: the referendum to be advanced.
       **/
      nudgeReferendum: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Advance a track onto its next logical state. Only used internally.
       * 
       * - `origin`: must be `Root`.
       * - `track`: the track to be advanced.
       * 
       * Action item for when there is now one fewer referendum in the deciding phase and the
       * `DecidingCount` is not yet updated. This means that we should either:
       * - begin deciding another referendum (and leave `DecidingCount` alone); or
       * - decrement `DecidingCount`.
       **/
      oneFewerDeciding: AugmentedSubmittable<(track: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16]>;
      /**
       * Post the Decision Deposit for a referendum.
       * 
       * - `origin`: must be `Signed` and the account must have funds available for the
       * referendum's track's Decision Deposit.
       * - `index`: The index of the submitted referendum whose Decision Deposit is yet to be
       * posted.
       * 
       * Emits `DecisionDepositPlaced`.
       **/
      placeDecisionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Refund the Decision Deposit for a closed referendum back to the depositor.
       * 
       * - `origin`: must be `Signed` or `Root`.
       * - `index`: The index of a closed referendum whose Decision Deposit has not yet been
       * refunded.
       * 
       * Emits `DecisionDepositRefunded`.
       **/
      refundDecisionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Refund the Submission Deposit for a closed referendum back to the depositor.
       * 
       * - `origin`: must be `Signed` or `Root`.
       * - `index`: The index of a closed referendum whose Submission Deposit has not yet been
       * refunded.
       * 
       * Emits `SubmissionDepositRefunded`.
       **/
      refundSubmissionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set or clear metadata of a referendum.
       * 
       * Parameters:
       * - `origin`: Must be `Signed` by a creator of a referendum or by anyone to clear a
       * metadata of a finished referendum.
       * - `index`:  The index of a referendum to set or clear metadata for.
       * - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
       **/
      setMetadata: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array, maybeHash: Option<H256> | null | Uint8Array | H256 | string) => SubmittableExtrinsic<ApiType>, [u32, Option<H256>]>;
      /**
       * Propose a referendum on a privileged action.
       * 
       * - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
       * available.
       * - `proposal_origin`: The origin from which the proposal should be executed.
       * - `proposal`: The proposal.
       * - `enactment_moment`: The moment that the proposal should be enacted.
       * 
       * Emits `Submitted`.
       **/
      submit: AugmentedSubmittable<(proposalOrigin: AssetHubKusamaRuntimeOriginCaller | { system: any } | { PolkadotXcm: any } | { CumulusXcm: any } | { Origins: any } | string | Uint8Array, proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array, enactmentMoment: FrameSupportScheduleDispatchTime | { At: any } | { After: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetHubKusamaRuntimeOriginCaller, FrameSupportPreimagesBounded, FrameSupportScheduleDispatchTime]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    remoteProxyRelayChain: {
      /**
       * Register a given remote proxy proof in the current [`dispatch_context`].
       * 
       * The registered remote proof can then be used later in the same context to execute a
       * remote proxy call. This is for example useful when having a multisig operation. The
       * multisig call can use [`Self::remote_proxy_with_registered_proof`] to get an approval by
       * the members of the multisig. The final execution of the multisig call should be at least
       * a batch of `register_remote_proxy_proof` and the multisig call that uses
       * `remote_proxy_with_registered_proof`. This way the final approver can use a recent proof
       * to prove the existence of the remote proxy. Otherwise it would require the multisig
       * members to approve the call in [`Config::MaxStorageRootsToKeep`] amount of time.
       * 
       * It is supported to register multiple proofs, but the proofs need to be consumed in the
       * reverse order as they were registered. Basically this means last in, first out.
       * 
       * The [`dispatch_context`] spans the entire lifetime of a transaction and every call in
       * the transaction gets access to the same context.
       * 
       * # Example
       * 
       * ```ignore
       * batch([
       * register_remote_proxy_proof,
       * as_multisig(remote_proxy_with_registered_proof(transfer))
       * ])
       * ```
       * 
       * As `proofs` can not be verified indefinitely (the time the storage roots are stored is
       * limited) this function provides the possibility to provide a "fresh proof" at time of
       * dispatch. As in the example above, this could be useful for multisig operation that
       * depend on multiple members to approve a certain action, which can take multiple days.
       **/
      registerRemoteProxyProof: AugmentedSubmittable<(proof: PalletRemoteProxyRemoteProxyProof | { RelayChain: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletRemoteProxyRemoteProxyProof]>;
      /**
       * Dispatch the given `call` from an account that the sender is authorised on a remote
       * chain.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
       * - `call`: The call to be made by the `real` account.
       * - `proof`: The proof from the remote chain about the existence of the proxy.
       **/
      remoteProxy: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, forceProxyType: Option<AssetHubKusamaRuntimeProxyType> | null | Uint8Array | AssetHubKusamaRuntimeProxyType | 'Any' | 'NonTransfer' | 'CancelProxy' | 'Assets' | 'AssetOwner' | 'AssetManager' | 'Collator' | 'Governance' | 'Staking' | 'NominationPools' | 'Auction' | 'ParaRegistration' | 'Society' | 'Spokesperson' | number, call: Call | IMethod | string | Uint8Array, proof: PalletRemoteProxyRemoteProxyProof | { RelayChain: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Option<AssetHubKusamaRuntimeProxyType>, Call, PalletRemoteProxyRemoteProxyProof]>;
      /**
       * Dispatch the given `call` from an account that the sender is authorised on a remote
       * chain.
       * 
       * The dispatch origin for this call must be _Signed_. The difference to
       * [`Self::remote_proxy`] is that the proof nees to registered before using
       * [`Self::register_remote_proxy_proof`] (see for more information).
       * 
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
       * - `call`: The call to be made by the `real` account.
       **/
      remoteProxyWithRegisteredProof: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, forceProxyType: Option<AssetHubKusamaRuntimeProxyType> | null | Uint8Array | AssetHubKusamaRuntimeProxyType | 'Any' | 'NonTransfer' | 'CancelProxy' | 'Assets' | 'AssetOwner' | 'AssetManager' | 'Collator' | 'Governance' | 'Staking' | 'NominationPools' | 'Auction' | 'ParaRegistration' | 'Society' | 'Spokesperson' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Option<AssetHubKusamaRuntimeProxyType>, Call]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    revive: {
      /**
       * Makes a call to an account, optionally transferring some balance.
       * 
       * # Parameters
       * 
       * * `dest`: Address of the contract to call.
       * * `value`: The balance to transfer from the `origin` to `dest`.
       * * `gas_limit`: The gas limit enforced when executing the constructor.
       * * `storage_deposit_limit`: The maximum amount of balance that can be charged from the
       * caller to pay for the storage consumed.
       * * `data`: The input data to pass to the contract.
       * 
       * * If the account is a smart-contract account, the associated code will be
       * executed and any value will be transferred.
       * * If the account is a regular account, any value will be transferred.
       * * If no account exists and the call value is not less than `existential_deposit`,
       * a regular account will be created and any value will be transferred.
       **/
      call: AugmentedSubmittable<(dest: H160 | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array, gasLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array, storageDepositLimit: Compact<u128> | AnyNumber | Uint8Array, data: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H160, Compact<u128>, SpWeightsWeightV2Weight, Compact<u128>, Bytes]>;
      /**
       * Dispatch an `call` with the origin set to the callers fallback address.
       * 
       * Every `AccountId32` can control its corresponding fallback account. The fallback account
       * is the `AccountId20` with the last 12 bytes set to `0xEE`. This is essentially a
       * recovery function in case an `AccountId20` was used without creating a mapping first.
       **/
      dispatchAsFallbackAccount: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
      /**
       * Same as [`Self::call`], but intended to be dispatched **only**
       * by an EVM transaction through the EVM compatibility layer.
       **/
      ethCall: AugmentedSubmittable<(dest: H160 | string | Uint8Array, value: U256 | AnyNumber | Uint8Array, gasLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array, storageDepositLimit: Compact<u128> | AnyNumber | Uint8Array, data: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H160, U256, SpWeightsWeightV2Weight, Compact<u128>, Bytes]>;
      /**
       * Same as [`Self::instantiate_with_code`], but intended to be dispatched **only**
       * by an EVM transaction through the EVM compatibility layer.
       * 
       * Calling this dispatchable ensures that the origin's nonce is bumped only once,
       * via the `CheckNonce` transaction extension. In contrast, [`Self::instantiate_with_code`]
       * also bumps the nonce after contract instantiation, since it may be invoked multiple
       * times within a batch call transaction.
       **/
      ethInstantiateWithCode: AugmentedSubmittable<(value: U256 | AnyNumber | Uint8Array, gasLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array, storageDepositLimit: Compact<u128> | AnyNumber | Uint8Array, code: Bytes | string | Uint8Array, data: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U256, SpWeightsWeightV2Weight, Compact<u128>, Bytes, Bytes]>;
      /**
       * A raw EVM transaction, typically dispatched by an Ethereum JSON-RPC server.
       * 
       * # Parameters
       * 
       * * `payload`: The encoded [`crate::evm::TransactionSigned`].
       * * `gas_limit`: The gas limit enforced during contract execution.
       * * `storage_deposit_limit`: The maximum balance that can be charged to the caller for
       * storage usage.
       * 
       * # Note
       * 
       * This call cannot be dispatched directly; attempting to do so will result in a failed
       * transaction. It serves as a wrapper for an Ethereum transaction. When submitted, the
       * runtime converts it into a [`sp_runtime::generic::CheckedExtrinsic`] by recovering the
       * signer and validating the transaction.
       **/
      ethTransact: AugmentedSubmittable<(payload: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Instantiates a contract from a previously deployed vm binary.
       * 
       * This function is identical to [`Self::instantiate_with_code`] but without the
       * code deployment step. Instead, the `code_hash` of an on-chain deployed vm binary
       * must be supplied.
       **/
      instantiate: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, gasLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array, storageDepositLimit: Compact<u128> | AnyNumber | Uint8Array, codeHash: H256 | string | Uint8Array, data: Bytes | string | Uint8Array, salt: Option<U8aFixed> | null | Uint8Array | U8aFixed | string) => SubmittableExtrinsic<ApiType>, [Compact<u128>, SpWeightsWeightV2Weight, Compact<u128>, H256, Bytes, Option<U8aFixed>]>;
      /**
       * Instantiates a new contract from the supplied `code` optionally transferring
       * some balance.
       * 
       * This dispatchable has the same effect as calling [`Self::upload_code`] +
       * [`Self::instantiate`]. Bundling them together provides efficiency gains. Please
       * also check the documentation of [`Self::upload_code`].
       * 
       * # Parameters
       * 
       * * `value`: The balance to transfer from the `origin` to the newly created contract.
       * * `gas_limit`: The gas limit enforced when executing the constructor.
       * * `storage_deposit_limit`: The maximum amount of balance that can be charged/reserved
       * from the caller to pay for the storage consumed.
       * * `code`: The contract code to deploy in raw bytes.
       * * `data`: The input data to pass to the contract constructor.
       * * `salt`: Used for the address derivation. If `Some` is supplied then `CREATE2`
       * semantics are used. If `None` then `CRATE1` is used.
       * 
       * 
       * Instantiation is executed as follows:
       * 
       * - The supplied `code` is deployed, and a `code_hash` is created for that code.
       * - If the `code_hash` already exists on the chain the underlying `code` will be shared.
       * - The destination address is computed based on the sender, code_hash and the salt.
       * - The smart-contract account is created at the computed address.
       * - The `value` is transferred to the new account.
       * - The `deploy` function is executed in the context of the newly-created account.
       **/
      instantiateWithCode: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, gasLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array, storageDepositLimit: Compact<u128> | AnyNumber | Uint8Array, code: Bytes | string | Uint8Array, data: Bytes | string | Uint8Array, salt: Option<U8aFixed> | null | Uint8Array | U8aFixed | string) => SubmittableExtrinsic<ApiType>, [Compact<u128>, SpWeightsWeightV2Weight, Compact<u128>, Bytes, Bytes, Option<U8aFixed>]>;
      /**
       * Register the callers account id so that it can be used in contract interactions.
       * 
       * This will error if the origin is already mapped or is a eth native `Address20`. It will
       * take a deposit that can be released by calling [`Self::unmap_account`].
       **/
      mapAccount: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Remove the code stored under `code_hash` and refund the deposit to its owner.
       * 
       * A code can only be removed by its original uploader (its owner) and only if it is
       * not used by any contract.
       **/
      removeCode: AugmentedSubmittable<(codeHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Privileged function that changes the code of an existing contract.
       * 
       * This takes care of updating refcounts and all other necessary operations. Returns
       * an error if either the `code_hash` or `dest` do not exist.
       * 
       * # Note
       * 
       * This does **not** change the address of the contract in question. This means
       * that the contract address is no longer derived from its code hash after calling
       * this dispatchable.
       **/
      setCode: AugmentedSubmittable<(dest: H160 | string | Uint8Array, codeHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H160, H256]>;
      /**
       * Unregister the callers account id in order to free the deposit.
       * 
       * There is no reason to ever call this function other than freeing up the deposit.
       * This is only useful when the account should no longer be used.
       **/
      unmapAccount: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Upload new `code` without instantiating a contract from it.
       * 
       * If the code does not already exist a deposit is reserved from the caller
       * and unreserved only when [`Self::remove_code`] is called. The size of the reserve
       * depends on the size of the supplied `code`.
       * 
       * # Note
       * 
       * Anyone can instantiate a contract from any uploaded code and thus prevent its removal.
       * To avoid this situation a constructor could employ access control so that it can
       * only be instantiated by permissioned entities. The same is true when uploading
       * through [`Self::instantiate_with_code`].
       **/
      uploadCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array, storageDepositLimit: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, Compact<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    scheduler: {
      /**
       * Cancel an anonymously scheduled task.
       **/
      cancel: AugmentedSubmittable<(when: u32 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Cancel a named scheduled task.
       **/
      cancelNamed: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed]>;
      /**
       * Removes the retry configuration of a task.
       **/
      cancelRetry: AugmentedSubmittable<(task: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => SubmittableExtrinsic<ApiType>, [ITuple<[u32, u32]>]>;
      /**
       * Cancel the retry configuration of a named task.
       **/
      cancelRetryNamed: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed]>;
      /**
       * Anonymously schedule a task.
       **/
      schedule: AugmentedSubmittable<(when: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * Anonymously schedule a task after a delay.
       **/
      scheduleAfter: AugmentedSubmittable<(after: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * Schedule a named task.
       **/
      scheduleNamed: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array, when: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed, u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * Schedule a named task after a delay.
       **/
      scheduleNamedAfter: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array, after: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed, u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * Set a retry configuration for a task so that, in case its scheduled run fails, it will
       * be retried after `period` blocks, for a total amount of `retries` retries or until it
       * succeeds.
       * 
       * Tasks which need to be scheduled for a retry are still subject to weight metering and
       * agenda space, same as a regular task. If a periodic task fails, it will be scheduled
       * normally while the task is retrying.
       * 
       * Tasks scheduled as a result of a retry for a periodic task are unnamed, non-periodic
       * clones of the original task. Their retry configuration will be derived from the
       * original task's configuration, but will have a lower value for `remaining` than the
       * original `total_retries`.
       **/
      setRetry: AugmentedSubmittable<(task: ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], retries: u8 | AnyNumber | Uint8Array, period: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ITuple<[u32, u32]>, u8, u32]>;
      /**
       * Set a retry configuration for a named task so that, in case its scheduled run fails, it
       * will be retried after `period` blocks, for a total amount of `retries` retries or until
       * it succeeds.
       * 
       * Tasks which need to be scheduled for a retry are still subject to weight metering and
       * agenda space, same as a regular task. If a periodic task fails, it will be scheduled
       * normally while the task is retrying.
       * 
       * Tasks scheduled as a result of a retry for a periodic task are unnamed, non-periodic
       * clones of the original task. Their retry configuration will be derived from the
       * original task's configuration, but will have a lower value for `remaining` than the
       * original `total_retries`.
       **/
      setRetryNamed: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array, retries: u8 | AnyNumber | Uint8Array, period: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed, u8, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    session: {
      /**
       * Removes any session key(s) of the function caller.
       * 
       * This doesn't take effect until the next session.
       * 
       * The dispatch origin of this function must be Signed and the account must be either be
       * convertible to a validator ID using the chain's typical addressing system (this usually
       * means being a controller account) or directly convertible into a validator ID (which
       * usually means being a stash account).
       * 
       * ## Complexity
       * - `O(1)` in number of key types. Actual cost depends on the number of length of
       * `T::Keys::key_ids()` which is fixed.
       **/
      purgeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Sets the session key(s) of the function caller to `keys`.
       * Allows an account to set its session key prior to becoming a validator.
       * This doesn't take effect until the next session.
       * 
       * The dispatch origin of this function must be signed.
       * 
       * ## Complexity
       * - `O(1)`. Actual cost depends on the number of length of `T::Keys::key_ids()` which is
       * fixed.
       **/
      setKeys: AugmentedSubmittable<(keys: AssetHubKusamaRuntimeSessionKeys | { aura?: any } | string | Uint8Array, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetHubKusamaRuntimeSessionKeys, Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    society: {
      /**
       * Transform an approved candidate into a member. Callable only by the Signed origin of the
       * Founder, only after the period for voting has ended and only when the candidate is not
       * clearly rejected.
       **/
      bestowMembership: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * A user outside of the society can make a bid for entry.
       * 
       * Payment: The group's Candidate Deposit will be reserved for making a bid. It is returned
       * when the bid becomes a member, or if the bid calls `unbid`.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `value`: A one time payment the bid would like to receive when joining the society.
       **/
      bid: AugmentedSubmittable<(value: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Transform an approved candidate into a member. Callable only by the
       * the candidate, and only after the period for voting has ended.
       **/
      claimMembership: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Remove up to `max` stale votes for the given `candidate`.
       * 
       * May be called by any Signed origin, but only after the candidate's candidacy is ended.
       **/
      cleanupCandidacy: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array, max: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
      /**
       * Remove up to `max` stale votes for the defender in the given `challenge_round`.
       * 
       * May be called by any Signed origin, but only after the challenge round is ended.
       **/
      cleanupChallenge: AugmentedSubmittable<(challengeRound: u32 | AnyNumber | Uint8Array, max: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * As a member, vote on the defender.
       * 
       * The dispatch origin for this call must be _Signed_ and a member.
       * 
       * Parameters:
       * - `approve`: A boolean which says if the candidate should be
       * approved (`true`) or rejected (`false`).
       **/
      defenderVote: AugmentedSubmittable<(approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [bool]>;
      /**
       * Dissolve the society and remove all members.
       * 
       * The dispatch origin for this call must be Signed, and the signing account must be both
       * the `Founder` and the `Head`. This implies that it may only be done when there is one
       * member.
       **/
      dissolve: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Remove a `candidate`'s failed application from the society. Callable by any
       * signed origin but only at the end of the subsequent round and only for
       * a candidate with more rejections than approvals.
       * 
       * The bid deposit is lost and the voucher is banned.
       **/
      dropCandidate: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Found the society.
       * 
       * This is done as a discrete action in order to allow for the
       * pallet to be included into a running chain and can only be done once.
       * 
       * The dispatch origin for this call must be from the _FounderSetOrigin_.
       * 
       * Parameters:
       * - `founder` - The first member and head of the newly founded society.
       * - `max_members` - The initial max number of members for the society.
       * - `max_intake` - The maximum number of candidates per intake period.
       * - `max_strikes`: The maximum number of strikes a member may get before they become
       * suspended and may only be reinstated by the founder.
       * - `candidate_deposit`: The deposit required to make a bid for membership of the group.
       * - `rules` - The rules of this society concerning membership.
       * 
       * Complexity: O(1)
       **/
      foundSociety: AugmentedSubmittable<(founder: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, maxMembers: u32 | AnyNumber | Uint8Array, maxIntake: u32 | AnyNumber | Uint8Array, maxStrikes: u32 | AnyNumber | Uint8Array, candidateDeposit: u128 | AnyNumber | Uint8Array, rules: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32, u32, u32, u128, Bytes]>;
      /**
       * Allow suspension judgement origin to make judgement on a suspended member.
       * 
       * If a suspended member is forgiven, we simply add them back as a member, not affecting
       * any of the existing storage items for that member.
       * 
       * If a suspended member is rejected, remove all associated storage items, including
       * their payouts, and remove any vouched bids they currently have.
       * 
       * The dispatch origin for this call must be Signed from the Founder.
       * 
       * Parameters:
       * - `who` - The suspended member to be judged.
       * - `forgive` - A boolean representing whether the suspension judgement origin forgives
       * (`true`) or rejects (`false`) a suspended member.
       **/
      judgeSuspendedMember: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, forgive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, bool]>;
      /**
       * Remove the candidate's application from the society. Callable only by the Signed origin
       * of the Founder, only after the period for voting has ended, and only when they do not
       * have a clear approval.
       * 
       * Any bid deposit is lost and voucher is banned.
       **/
      kickCandidate: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Transfer the first matured payout for the sender and remove it from the records.
       * 
       * NOTE: This extrinsic needs to be called multiple times to claim multiple matured
       * payouts.
       * 
       * Payment: The member will receive a payment equal to their first matured
       * payout to their free balance.
       * 
       * The dispatch origin for this call must be _Signed_ and a member with
       * payouts remaining.
       **/
      payout: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Poke the deposit reserved when bidding.
       * 
       * The dispatch origin for this call must be _Signed_ and must be the bidder.
       * 
       * The transaction fee is waived if the deposit is changed after poking/reconsideration.
       * 
       * Emits `DepositPoked` if successful.
       **/
      pokeDeposit: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Punish the skeptic with a strike if they did not vote on a candidate. Callable by the
       * candidate.
       **/
      punishSkeptic: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Remove the candidate's application from the society. Callable only by the candidate.
       * 
       * Any bid deposit is lost and voucher is banned.
       **/
      resignCandidacy: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Change the maximum number of members in society and the maximum number of new candidates
       * in a single intake period.
       * 
       * The dispatch origin for this call must be Signed by the Founder.
       * 
       * Parameters:
       * - `max_members` - The maximum number of members for the society. This must be no less
       * than the current number of members.
       * - `max_intake` - The maximum number of candidates per intake period.
       * - `max_strikes`: The maximum number of strikes a member may get before they become
       * suspended and may only be reinstated by the founder.
       * - `candidate_deposit`: The deposit required to make a bid for membership of the group.
       **/
      setParameters: AugmentedSubmittable<(maxMembers: u32 | AnyNumber | Uint8Array, maxIntake: u32 | AnyNumber | Uint8Array, maxStrikes: u32 | AnyNumber | Uint8Array, candidateDeposit: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32, u128]>;
      /**
       * A bidder can remove their bid for entry into society.
       * By doing so, they will have their candidate deposit returned or
       * they will unvouch their voucher.
       * 
       * Payment: The bid deposit is unreserved if the user made a bid.
       * 
       * The dispatch origin for this call must be _Signed_ and a bidder.
       **/
      unbid: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * As a vouching member, unvouch a bid. This only works while vouched user is
       * only a bidder (and not a candidate).
       * 
       * The dispatch origin for this call must be _Signed_ and a vouching member.
       * 
       * Parameters:
       * - `pos`: Position in the `Bids` vector of the bid who should be unvouched.
       **/
      unvouch: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * As a member, vote on a candidate.
       * 
       * The dispatch origin for this call must be _Signed_ and a member.
       * 
       * Parameters:
       * - `candidate`: The candidate that the member would like to bid on.
       * - `approve`: A boolean which says if the candidate should be approved (`true`) or
       * rejected (`false`).
       **/
      vote: AugmentedSubmittable<(candidate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, bool]>;
      /**
       * As a member, vouch for someone to join society by placing a bid on their behalf.
       * 
       * There is no deposit required to vouch for a new bid, but a member can only vouch for
       * one bid at a time. If the bid becomes a suspended candidate and ultimately rejected by
       * the suspension judgement origin, the member will be banned from vouching again.
       * 
       * As a vouching member, you can claim a tip if the candidate is accepted. This tip will
       * be paid as a portion of the reward the member will receive for joining the society.
       * 
       * The dispatch origin for this call must be _Signed_ and a member.
       * 
       * Parameters:
       * - `who`: The user who you would like to vouch for.
       * - `value`: The total reward to be paid between you and the candidate if they become
       * a member in the society.
       * - `tip`: Your cut of the total `value` payout when the candidate is inducted into
       * the society. Tips larger than `value` will be saturated upon payout.
       **/
      vouch: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: u128 | AnyNumber | Uint8Array, tip: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128, u128]>;
      /**
       * Repay the payment previously given to the member with the signed origin, remove any
       * pending payments, and elevate them from rank 0 to rank 1.
       **/
      waiveRepay: AugmentedSubmittable<(amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    staking: {
      /**
       * Manually and permissionlessly applies a deferred slash for a given era.
       * 
       * Normally, slashes are automatically applied shortly after the start of the `slash_era`.
       * The automatic application of slashes is handled by the pallet's internal logic, and it
       * tries to apply one slash page per block of the era.
       * If for some reason, one era is not enough for applying all slash pages, the remaining
       * slashes need to be manually (permissionlessly) applied.
       * 
       * For a given era x, if at era x+1, slashes are still unapplied, all withdrawals get
       * blocked, and these need to be manually applied by calling this function.
       * This function exists as a **fallback mechanism** for this extreme situation, but we
       * never expect to encounter this in normal scenarios.
       * 
       * The parameters for this call can be queried by looking at the `UnappliedSlashes` storage
       * for eras older than the active era.
       * 
       * ## Parameters
       * - `slash_era`: The staking era in which the slash was originally scheduled.
       * - `slash_key`: A unique identifier for the slash, represented as a tuple:
       * - `stash`: The stash account of the validator being slashed.
       * - `slash_fraction`: The fraction of the stake that was slashed.
       * - `page_index`: The index of the exposure page being processed.
       * 
       * ## Behavior
       * - The function is **permissionless**—anyone can call it.
       * - The `slash_era` **must be the current era or a past era**.
       * If it is in the future, the
       * call fails with `EraNotStarted`.
       * - The fee is waived if the slash is successfully applied.
       * 
       * ## Future Improvement
       * - Implement an **off-chain worker (OCW) task** to automatically apply slashes when there
       * is unused block space, improving efficiency.
       **/
      applySlash: AugmentedSubmittable<(slashEra: u32 | AnyNumber | Uint8Array, slashKey: ITuple<[AccountId32, Perbill, u32]> | [AccountId32 | string | Uint8Array, Perbill | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => SubmittableExtrinsic<ApiType>, [u32, ITuple<[AccountId32, Perbill, u32]>]>;
      /**
       * Take the origin account as a stash and lock up `value` of its balance. `controller` will
       * be the account that controls it.
       * 
       * `value` must be more than the `minimum_balance` specified by `T::Currency`.
       * 
       * The dispatch origin for this call must be _Signed_ by the stash account.
       * 
       * Emits `Bonded`.
       * 
       * NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
       * unless the `origin` falls below _existential deposit_ (or equal to 0) and gets removed
       * as dust.
       **/
      bond: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, payee: PalletStakingAsyncRewardDestination | { Staked: any } | { Stash: any } | { Controller: any } | { Account: any } | { None: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, PalletStakingAsyncRewardDestination]>;
      /**
       * Add some extra amount that have appeared in the stash `free_balance` into the balance up
       * for staking.
       * 
       * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
       * 
       * Use this if there are additional funds in your stash account that you wish to bond.
       * Unlike [`bond`](Self::bond) or [`unbond`](Self::unbond) this function does not impose
       * any limitation on the amount that can be added.
       * 
       * Emits `Bonded`.
       **/
      bondExtra: AugmentedSubmittable<(maxAdditional: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
      /**
       * Cancels scheduled slashes for a given era before they are applied.
       * 
       * This function allows `T::AdminOrigin` to cancel pending slashes for specified validators
       * in a given era. The cancelled slashes are stored and will be checked when applying
       * slashes.
       * 
       * ## Parameters
       * - `era`: The staking era for which slashes should be cancelled. This is the era where
       * the slash would be applied, not the era in which the offence was committed.
       * - `validator_slashes`: A list of validator stash accounts and their slash fractions to
       * be cancelled.
       **/
      cancelDeferredSlash: AugmentedSubmittable<(era: u32 | AnyNumber | Uint8Array, validatorSlashes: Vec<ITuple<[AccountId32, Perbill]>> | ([AccountId32 | string | Uint8Array, Perbill | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [u32, Vec<ITuple<[AccountId32, Perbill]>>]>;
      /**
       * Declare no desire to either validate or nominate.
       * 
       * Effects will be felt at the beginning of the next era.
       * 
       * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
       * 
       * ## Complexity
       * - Independent of the arguments. Insignificant complexity.
       * - Contains one read.
       * - Writes are limited to the `origin` account key.
       **/
      chill: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Declare a `controller` to stop participating as either a validator or nominator.
       * 
       * Effects will be felt at the beginning of the next era.
       * 
       * The dispatch origin for this call must be _Signed_, but can be called by anyone.
       * 
       * If the caller is the same as the controller being targeted, then no further checks are
       * enforced, and this function behaves just like `chill`.
       * 
       * If the caller is different than the controller being targeted, the following conditions
       * must be met:
       * 
       * * `controller` must belong to a nominator who has become non-decodable,
       * 
       * Or:
       * 
       * * A `ChillThreshold` must be set and checked which defines how close to the max
       * nominators or validators we must reach before users can start chilling one-another.
       * * A `MaxNominatorCount` and `MaxValidatorCount` must be set which is used to determine
       * how close we are to the threshold.
       * * A `MinNominatorBond` and `MinValidatorBond` must be set and checked, which determines
       * if this is a person that should be chilled because they have not met the threshold
       * bond required.
       * 
       * This can be helpful if bond requirements are updated, and we need to remove old users
       * who do not satisfy these requirements.
       **/
      chillOther: AugmentedSubmittable<(stash: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Updates a batch of controller accounts to their corresponding stash account if they are
       * not the same. Ignores any controller accounts that do not exist, and does not operate if
       * the stash and controller are already the same.
       * 
       * Effects will be felt instantly (as soon as this function is completed successfully).
       * 
       * The dispatch origin must be `T::AdminOrigin`.
       **/
      deprecateControllerBatch: AugmentedSubmittable<(controllers: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * Force a validator to have at least the minimum commission. This will not affect a
       * validator who already has a commission greater than or equal to the minimum. Any account
       * can call this.
       **/
      forceApplyMinCommission: AugmentedSubmittable<(validatorStash: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Force there to be a new era at the end of the next session. After this, it will be
       * reset to normal (non-forced) behaviour.
       * 
       * The dispatch origin must be Root.
       * 
       * # Warning
       * 
       * The election process starts multiple blocks before the end of the era.
       * If this is called just before a new era is triggered, the election process may not
       * have enough blocks to get a result.
       **/
      forceNewEra: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Force there to be a new era at the end of sessions indefinitely.
       * 
       * The dispatch origin must be Root.
       * 
       * # Warning
       * 
       * The election process starts multiple blocks before the end of the era.
       * If this is called just before a new era is triggered, the election process may not
       * have enough blocks to get a result.
       **/
      forceNewEraAlways: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Force there to be no new eras indefinitely.
       * 
       * The dispatch origin must be Root.
       * 
       * # Warning
       * 
       * The election process starts multiple blocks before the end of the era.
       * Thus the election process may be ongoing when this is called. In this case the
       * election will continue until the next era is triggered.
       **/
      forceNoEras: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Force a current staker to become completely unstaked, immediately.
       * 
       * The dispatch origin must be Root.
       * ## Parameters
       * 
       * - `stash`: The stash account to be unstaked.
       * - `num_slashing_spans`: **Deprecated**. This parameter is retained for backward
       * compatibility. It no longer has any effect.
       **/
      forceUnstake: AugmentedSubmittable<(stash: AccountId32 | string | Uint8Array, numSlashingSpans: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
      /**
       * Increments the ideal number of validators up to maximum of
       * `T::MaxValidatorSet`.
       * 
       * The dispatch origin must be Root.
       **/
      increaseValidatorCount: AugmentedSubmittable<(additional: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Remove the given nominations from the calling validator.
       * 
       * Effects will be felt at the beginning of the next era.
       * 
       * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
       * 
       * - `who`: A list of nominator stash accounts who are nominating this validator which
       * should no longer be nominating this validator.
       * 
       * Note: Making this call only makes sense if you first set the validator preferences to
       * block any further nominations.
       **/
      kick: AugmentedSubmittable<(who: Vec<MultiAddress> | (MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<MultiAddress>]>;
      /**
       * Migrates permissionlessly a stash from locks to holds.
       * 
       * This removes the old lock on the stake and creates a hold on it atomically. If all
       * stake cannot be held, the best effort is made to hold as much as possible. The remaining
       * stake is removed from the ledger.
       * 
       * The fee is waived if the migration is successful.
       **/
      migrateCurrency: AugmentedSubmittable<(stash: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Declare the desire to nominate `targets` for the origin controller.
       * 
       * Effects will be felt at the beginning of the next era.
       * 
       * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
       **/
      nominate: AugmentedSubmittable<(targets: Vec<MultiAddress> | (MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<MultiAddress>]>;
      /**
       * Pay out next page of the stakers behind a validator for the given era.
       * 
       * - `validator_stash` is the stash account of the validator.
       * - `era` may be any era between `[current_era - history_depth; current_era]`.
       * 
       * The origin of this call must be _Signed_. Any account can call this function, even if
       * it is not one of the stakers.
       * 
       * The reward payout could be paged in case there are too many nominators backing the
       * `validator_stash`. This call will payout unpaid pages in an ascending order. To claim a
       * specific page, use `payout_stakers_by_page`.`
       * 
       * If all pages are claimed, it returns an error `InvalidPage`.
       **/
      payoutStakers: AugmentedSubmittable<(validatorStash: AccountId32 | string | Uint8Array, era: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
      /**
       * Pay out a page of the stakers behind a validator for the given era and page.
       * 
       * - `validator_stash` is the stash account of the validator.
       * - `era` may be any era between `[current_era - history_depth; current_era]`.
       * - `page` is the page index of nominators to pay out with value between 0 and
       * `num_nominators / T::MaxExposurePageSize`.
       * 
       * The origin of this call must be _Signed_. Any account can call this function, even if
       * it is not one of the stakers.
       * 
       * If a validator has more than [`Config::MaxExposurePageSize`] nominators backing
       * them, then the list of nominators is paged, with each page being capped at
       * [`Config::MaxExposurePageSize`.] If a validator has more than one page of nominators,
       * the call needs to be made for each page separately in order for all the nominators
       * backing a validator to receive the reward. The nominators are not sorted across pages
       * and so it should not be assumed the highest staker would be on the topmost page and vice
       * versa. If rewards are not claimed in [`Config::HistoryDepth`] eras, they are lost.
       **/
      payoutStakersByPage: AugmentedSubmittable<(validatorStash: AccountId32 | string | Uint8Array, era: u32 | AnyNumber | Uint8Array, page: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32, u32]>;
      /**
       * Perform one step of era pruning to prevent PoV size exhaustion from unbounded deletions.
       * 
       * This extrinsic enables permissionless lazy pruning of era data by performing
       * incremental deletion of storage items. Each call processes a limited number
       * of items based on available block weight to avoid exceeding block limits.
       * 
       * Returns `Pays::No` when work is performed to incentivize regular maintenance.
       * Anyone can call this to help maintain the chain's storage health.
       * 
       * The era must be eligible for pruning (older than HistoryDepth + 1).
       * Check `EraPruningState` storage to see if an era needs pruning before calling.
       **/
      pruneEraStep: AugmentedSubmittable<(era: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Remove all data structures concerning a staker/stash once it is at a state where it can
       * be considered `dust` in the staking system. The requirements are:
       * 
       * 1. the `total_balance` of the stash is below minimum bond.
       * 2. or, the `ledger.total` of the stash is below minimum bond.
       * 3. or, existential deposit is zero and either `total_balance` or `ledger.total` is zero.
       * 
       * The former can happen in cases like a slash; the latter when a fully unbonded account
       * is still receiving staking rewards in `RewardDestination::Staked`.
       * 
       * It can be called by anyone, as long as `stash` meets the above requirements.
       * 
       * Refunds the transaction fees upon successful execution.
       * 
       * ## Parameters
       * 
       * - `stash`: The stash account to be reaped.
       * - `num_slashing_spans`: **Deprecated**. This parameter is retained for backward
       * compatibility. It no longer has any effect.
       **/
      reapStash: AugmentedSubmittable<(stash: AccountId32 | string | Uint8Array, numSlashingSpans: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
      /**
       * Rebond a portion of the stash scheduled to be unlocked.
       * 
       * The dispatch origin must be signed by the controller.
       **/
      rebond: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
      /**
       * Restores the state of a ledger which is in an inconsistent state.
       * 
       * The requirements to restore a ledger are the following:
       * * The stash is bonded; or
       * * The stash is not bonded but it has a staking lock left behind; or
       * * If the stash has an associated ledger and its state is inconsistent; or
       * * If the ledger is not corrupted *but* its staking lock is out of sync.
       * 
       * The `maybe_*` input parameters will overwrite the corresponding data and metadata of the
       * ledger associated with the stash. If the input parameters are not set, the ledger will
       * be reset values from on-chain state.
       **/
      restoreLedger: AugmentedSubmittable<(stash: AccountId32 | string | Uint8Array, maybeController: Option<AccountId32> | null | Uint8Array | AccountId32 | string, maybeTotal: Option<u128> | null | Uint8Array | u128 | AnyNumber, maybeUnlocking: Option<Vec<PalletStakingAsyncLedgerUnlockChunk>> | null | Uint8Array | Vec<PalletStakingAsyncLedgerUnlockChunk> | (PalletStakingAsyncLedgerUnlockChunk | { value?: any; era?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [AccountId32, Option<AccountId32>, Option<u128>, Option<Vec<PalletStakingAsyncLedgerUnlockChunk>>]>;
      /**
       * Scale up the ideal number of validators by a factor up to maximum of
       * `T::MaxValidatorSet`.
       * 
       * The dispatch origin must be Root.
       **/
      scaleValidatorCount: AugmentedSubmittable<(factor: Percent | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Percent]>;
      /**
       * (Re-)sets the controller of a stash to the stash itself. This function previously
       * accepted a `controller` argument to set the controller to an account other than the
       * stash itself. This functionality has now been removed, now only setting the controller
       * to the stash, if it is not already.
       * 
       * Effects will be felt instantly (as soon as this function is completed successfully).
       * 
       * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
       **/
      setController: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Set the validators who cannot be slashed (if any).
       * 
       * The dispatch origin must be Root.
       **/
      setInvulnerables: AugmentedSubmittable<(invulnerables: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * Sets the minimum amount of commission that each validators must maintain.
       * 
       * This call has lower privilege requirements than `set_staking_config` and can be called
       * by the `T::AdminOrigin`. Root can always call this.
       **/
      setMinCommission: AugmentedSubmittable<(updated: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Perbill]>;
      /**
       * (Re-)set the payment target for a controller.
       * 
       * Effects will be felt instantly (as soon as this function is completed successfully).
       * 
       * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
       **/
      setPayee: AugmentedSubmittable<(payee: PalletStakingAsyncRewardDestination | { Staked: any } | { Stash: any } | { Controller: any } | { Account: any } | { None: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletStakingAsyncRewardDestination]>;
      /**
       * Update the various staking configurations .
       * 
       * * `min_nominator_bond`: The minimum active bond needed to be a nominator.
       * * `min_validator_bond`: The minimum active bond needed to be a validator.
       * * `max_nominator_count`: The max number of users who can be a nominator at once. When
       * set to `None`, no limit is enforced.
       * * `max_validator_count`: The max number of users who can be a validator at once. When
       * set to `None`, no limit is enforced.
       * * `chill_threshold`: The ratio of `max_nominator_count` or `max_validator_count` which
       * should be filled in order for the `chill_other` transaction to work.
       * * `min_commission`: The minimum amount of commission that each validators must maintain.
       * This is checked only upon calling `validate`. Existing validators are not affected.
       * 
       * RuntimeOrigin must be Root to call this function.
       * 
       * NOTE: Existing nominators and validators will not be affected by this update.
       * to kick people under the new limits, `chill_other` should be called.
       **/
      setStakingConfigs: AugmentedSubmittable<(minNominatorBond: PalletStakingAsyncPalletConfigOpU128 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, minValidatorBond: PalletStakingAsyncPalletConfigOpU128 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, maxNominatorCount: PalletStakingAsyncPalletConfigOpU32 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, maxValidatorCount: PalletStakingAsyncPalletConfigOpU32 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, chillThreshold: PalletStakingAsyncPalletConfigOpPercent | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, minCommission: PalletStakingAsyncPalletConfigOpPerbill | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, maxStakedRewards: PalletStakingAsyncPalletConfigOpPercent | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletStakingAsyncPalletConfigOpU128, PalletStakingAsyncPalletConfigOpU128, PalletStakingAsyncPalletConfigOpU32, PalletStakingAsyncPalletConfigOpU32, PalletStakingAsyncPalletConfigOpPercent, PalletStakingAsyncPalletConfigOpPerbill, PalletStakingAsyncPalletConfigOpPercent]>;
      /**
       * Sets the ideal number of validators.
       * 
       * The dispatch origin must be Root.
       **/
      setValidatorCount: AugmentedSubmittable<(updated: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Schedule a portion of the stash to be unlocked ready for transfer out after the bond
       * period ends. If this leaves an amount actively bonded less than
       * [`asset::existential_deposit`], then it is increased to the full amount.
       * 
       * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
       * 
       * Once the unlock period is done, you can call `withdraw_unbonded` to actually move
       * the funds out of management ready for transfer.
       * 
       * No more than a limited number of unlocking chunks (see `MaxUnlockingChunks`)
       * can co-exists at the same time. If there are no unlocking chunks slots available
       * [`Call::withdraw_unbonded`] is called to remove some of the chunks (if possible).
       * 
       * If a user encounters the `InsufficientBond` error when calling this extrinsic,
       * they should call `chill` first in order to free up their bonded funds.
       * 
       * Emits `Unbonded`.
       * 
       * See also [`Call::withdraw_unbonded`].
       **/
      unbond: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
      /**
       * Migrates an account's `RewardDestination::Controller` to
       * `RewardDestination::Account(controller)`.
       * 
       * Effects will be felt instantly (as soon as this function is completed successfully).
       * 
       * This will waive the transaction fee if the `payee` is successfully migrated.
       **/
      updatePayee: AugmentedSubmittable<(controller: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Declare the desire to validate for the origin controller.
       * 
       * Effects will be felt at the beginning of the next era.
       * 
       * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
       **/
      validate: AugmentedSubmittable<(prefs: PalletStakingAsyncValidatorPrefs | { commission?: any; blocked?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletStakingAsyncValidatorPrefs]>;
      /**
       * Remove any stake that has been fully unbonded and is ready for withdrawal.
       * 
       * Stake is considered fully unbonded once [`Config::BondingDuration`] has elapsed since
       * the unbonding was initiated. In rare cases—such as when offences for the unbonded era
       * have been reported but not yet processed—withdrawal is restricted to eras for which
       * all offences have been processed.
       * 
       * The unlocked stake will be returned as free balance in the stash account.
       * 
       * The dispatch origin for this call must be _Signed_ by the controller.
       * 
       * Emits `Withdrawn`.
       * 
       * See also [`Call::unbond`].
       * 
       * ## Parameters
       * 
       * - `num_slashing_spans`: **Deprecated**. Retained only for backward compatibility; this
       * parameter has no effect.
       **/
      withdrawUnbonded: AugmentedSubmittable<(numSlashingSpans: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    stakingRcClient: {
      /**
       * Called to report one or more new offenses on the relay chain.
       **/
      relayNewOffence: AugmentedSubmittable<(slashSession: u32 | AnyNumber | Uint8Array, offences: Vec<PalletStakingAsyncRcClientOffence> | (PalletStakingAsyncRcClientOffence | { offender?: any; reporters?: any; slashFraction?: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u32, Vec<PalletStakingAsyncRcClientOffence>]>;
      /**
       * Called to indicate the start of a new session on the relay chain.
       **/
      relaySessionReport: AugmentedSubmittable<(report: PalletStakingAsyncRcClientSessionReport | { endIndex?: any; validatorPoints?: any; activationTimestamp?: any; leftover?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletStakingAsyncRcClientSessionReport]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    stateTrieMigration: {
      /**
       * Continue the migration for the given `limits`.
       * 
       * The dispatch origin of this call can be any signed account.
       * 
       * This transaction has NO MONETARY INCENTIVES. calling it will not reward anyone. Albeit,
       * Upon successful execution, the transaction fee is returned.
       * 
       * The (potentially over-estimated) of the byte length of all the data read must be
       * provided for up-front fee-payment and weighing. In essence, the caller is guaranteeing
       * that executing the current `MigrationTask` with the given `limits` will not exceed
       * `real_size_upper` bytes of read data.
       * 
       * The `witness_task` is merely a helper to prevent the caller from being slashed or
       * generally trigger a migration that they do not intend. This parameter is just a message
       * from caller, saying that they believed `witness_task` was the last state of the
       * migration, and they only wish for their transaction to do anything, if this assumption
       * holds. In case `witness_task` does not match, the transaction fails.
       * 
       * Based on the documentation of [`MigrationTask::migrate_until_exhaustion`], the
       * recommended way of doing this is to pass a `limit` that only bounds `count`, as the
       * `size` limit can always be overwritten.
       **/
      continueMigrate: AugmentedSubmittable<(limits: PalletStateTrieMigrationMigrationLimits | { size_?: any; item?: any } | string | Uint8Array, realSizeUpper: u32 | AnyNumber | Uint8Array, witnessTask: PalletStateTrieMigrationMigrationTask | { progressTop?: any; progressChild?: any; size_?: any; topItems?: any; childItems?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletStateTrieMigrationMigrationLimits, u32, PalletStateTrieMigrationMigrationTask]>;
      /**
       * Control the automatic migration.
       * 
       * The dispatch origin of this call must be [`Config::ControlOrigin`].
       **/
      controlAutoMigration: AugmentedSubmittable<(maybeConfig: Option<PalletStateTrieMigrationMigrationLimits> | null | Uint8Array | PalletStateTrieMigrationMigrationLimits | { size_?: any; item?: any } | string) => SubmittableExtrinsic<ApiType>, [Option<PalletStateTrieMigrationMigrationLimits>]>;
      /**
       * Forcefully set the progress the running migration.
       * 
       * This is only useful in one case: the next key to migrate is too big to be migrated with
       * a signed account, in a parachain context, and we simply want to skip it. A reasonable
       * example of this would be `:code:`, which is both very expensive to migrate, and commonly
       * used, so probably it is already migrated.
       * 
       * In case you mess things up, you can also, in principle, use this to reset the migration
       * process.
       **/
      forceSetProgress: AugmentedSubmittable<(progressTop: PalletStateTrieMigrationProgress | { ToStart: any } | { LastKey: any } | { Complete: any } | string | Uint8Array, progressChild: PalletStateTrieMigrationProgress | { ToStart: any } | { LastKey: any } | { Complete: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletStateTrieMigrationProgress, PalletStateTrieMigrationProgress]>;
      /**
       * Migrate the list of child keys by iterating each of them one by one.
       * 
       * All of the given child keys must be present under one `child_root`.
       * 
       * This does not affect the global migration process tracker ([`MigrationProcess`]), and
       * should only be used in case any keys are leftover due to a bug.
       **/
      migrateCustomChild: AugmentedSubmittable<(root: Bytes | string | Uint8Array, childKeys: Vec<Bytes> | (Bytes | string | Uint8Array)[], totalSize: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, Vec<Bytes>, u32]>;
      /**
       * Migrate the list of top keys by iterating each of them one by one.
       * 
       * This does not affect the global migration process tracker ([`MigrationProcess`]), and
       * should only be used in case any keys are leftover due to a bug.
       **/
      migrateCustomTop: AugmentedSubmittable<(keys: Vec<Bytes> | (Bytes | string | Uint8Array)[], witnessSize: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<Bytes>, u32]>;
      /**
       * Set the maximum limit of the signed migration.
       **/
      setSignedMaxLimits: AugmentedSubmittable<(limits: PalletStateTrieMigrationMigrationLimits | { size_?: any; item?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletStateTrieMigrationMigrationLimits]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    system: {
      /**
       * Provide the preimage (runtime binary) `code` for an upgrade that has been authorized.
       * 
       * If the authorization required a version check, this call will ensure the spec name
       * remains unchanged and that the spec version has increased.
       * 
       * Depending on the runtime's `OnSetCode` configuration, this function may directly apply
       * the new `code` in the same block or attempt to schedule the upgrade.
       * 
       * All origins are allowed.
       **/
      applyAuthorizedUpgrade: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
       * later.
       * 
       * This call requires Root origin.
       **/
      authorizeUpgrade: AugmentedSubmittable<(codeHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
       * later.
       * 
       * WARNING: This authorizes an upgrade that will take place without any safety checks, for
       * example that the spec name remains the same and that the version number increases. Not
       * recommended for normal use. Use `authorize_upgrade` instead.
       * 
       * This call requires Root origin.
       **/
      authorizeUpgradeWithoutChecks: AugmentedSubmittable<(codeHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      doTask: AugmentedSubmittable<(task: AssetHubKusamaRuntimeRuntimeTask | null) => SubmittableExtrinsic<ApiType>, [AssetHubKusamaRuntimeRuntimeTask]>;
      /**
       * Kill all storage items with a key that starts with the given prefix.
       * 
       * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
       * the prefix we are removing to accurately calculate the weight of this function.
       **/
      killPrefix: AugmentedSubmittable<(prefix: Bytes | string | Uint8Array, subkeys: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, u32]>;
      /**
       * Kill some items from storage.
       **/
      killStorage: AugmentedSubmittable<(keys: Vec<Bytes> | (Bytes | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Bytes>]>;
      /**
       * Make some on-chain remark.
       * 
       * Can be executed by every `origin`.
       **/
      remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Make some on-chain remark and emit event.
       **/
      remarkWithEvent: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new runtime code.
       **/
      setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new runtime code without doing any checks of the given `code`.
       * 
       * Note that runtime upgrades will not run if this is called with a not-increasing spec
       * version!
       **/
      setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the number of pages in the WebAssembly environment's heap.
       **/
      setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      /**
       * Set some items of storage.
       **/
      setStorage: AugmentedSubmittable<(items: Vec<ITuple<[Bytes, Bytes]>> | ([Bytes | string | Uint8Array, Bytes | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[Bytes, Bytes]>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    timestamp: {
      /**
       * Set the current time.
       * 
       * This call should be invoked exactly once per block. It will panic at the finalization
       * phase, if this call hasn't been invoked by that time.
       * 
       * The timestamp should be greater than the previous one by the amount specified by
       * [`Config::MinimumPeriod`].
       * 
       * The dispatch origin for this call must be _None_.
       * 
       * This dispatch class is _Mandatory_ to ensure it gets executed in the block. Be aware
       * that changing the complexity of this call could result exhausting the resources in a
       * block to execute any other calls.
       * 
       * ## Complexity
       * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
       * - 1 storage read and 1 storage mutation (codec `O(1)` because of `DidUpdate::take` in
       * `on_finalize`)
       * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
       **/
      set: AugmentedSubmittable<(now: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u64>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    toPolkadotXcmRouter: {
      /**
       * Notification about congested bridge queue.
       **/
      reportBridgeStatus: AugmentedSubmittable<(bridgeId: H256 | string | Uint8Array, isCongested: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, bool]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    treasury: {
      /**
       * Check the status of the spend and remove it from the storage if processed.
       * 
       * ## Dispatch Origin
       * 
       * Must be signed.
       * 
       * ## Details
       * 
       * The status check is a prerequisite for retrying a failed payout.
       * If a spend has either succeeded or expired, it is removed from the storage by this
       * function. In such instances, transaction fees are refunded.
       * 
       * ### Parameters
       * - `index`: The spend index.
       * 
       * ## Events
       * 
       * Emits [`Event::PaymentFailed`] if the spend payout has failed.
       * Emits [`Event::SpendProcessed`] if the spend payout has succeed.
       **/
      checkStatus: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Claim a spend.
       * 
       * ## Dispatch Origin
       * 
       * Must be signed
       * 
       * ## Details
       * 
       * Spends must be claimed within some temporal bounds. A spend may be claimed within one
       * [`Config::PayoutPeriod`] from the `valid_from` block.
       * In case of a payout failure, the spend status must be updated with the `check_status`
       * dispatchable before retrying with the current function.
       * 
       * ### Parameters
       * - `index`: The spend index.
       * 
       * ## Events
       * 
       * Emits [`Event::Paid`] if successful.
       **/
      payout: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Force a previously approved proposal to be removed from the approval queue.
       * 
       * ## Dispatch Origin
       * 
       * Must be [`Config::RejectOrigin`].
       * 
       * ## Details
       * 
       * The original deposit will no longer be returned.
       * 
       * ### Parameters
       * - `proposal_id`: The index of a proposal
       * 
       * ### Complexity
       * - O(A) where `A` is the number of approvals
       * 
       * ### Errors
       * - [`Error::ProposalNotApproved`]: The `proposal_id` supplied was not found in the
       * approval queue, i.e., the proposal has not been approved. This could also mean the
       * proposal does not exist altogether, thus there is no way it would have been approved
       * in the first place.
       **/
      removeApproval: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Propose and approve a spend of treasury funds.
       * 
       * ## Dispatch Origin
       * 
       * Must be [`Config::SpendOrigin`] with the `Success` value being at least
       * `amount` of `asset_kind` in the native asset. The amount of `asset_kind` is converted
       * for assertion using the [`Config::BalanceConverter`].
       * 
       * ## Details
       * 
       * Create an approved spend for transferring a specific `amount` of `asset_kind` to a
       * designated beneficiary. The spend must be claimed using the `payout` dispatchable within
       * the [`Config::PayoutPeriod`].
       * 
       * ### Parameters
       * - `asset_kind`: An indicator of the specific asset class to be spent.
       * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
       * - `beneficiary`: The beneficiary of the spend.
       * - `valid_from`: The block number from which the spend can be claimed. It can refer to
       * the past if the resulting spend has not yet expired according to the
       * [`Config::PayoutPeriod`]. If `None`, the spend can be claimed immediately after
       * approval.
       * 
       * ## Events
       * 
       * Emits [`Event::AssetSpendApproved`] if successful.
       **/
      spend: AugmentedSubmittable<(assetKind: PolkadotRuntimeCommonImplsVersionedLocatableAsset | { V3: any } | { V4: any } | { V5: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array, beneficiary: ParachainsCommonPayVersionedLocatableAccount | { V4: any } | { V5: any } | string | Uint8Array, validFrom: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [PolkadotRuntimeCommonImplsVersionedLocatableAsset, Compact<u128>, ParachainsCommonPayVersionedLocatableAccount, Option<u32>]>;
      /**
       * Propose and approve a spend of treasury funds.
       * 
       * ## Dispatch Origin
       * 
       * Must be [`Config::SpendOrigin`] with the `Success` value being at least `amount`.
       * 
       * ### Details
       * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
       * beneficiary.
       * 
       * ### Parameters
       * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
       * - `beneficiary`: The destination account for the transfer.
       * 
       * ## Events
       * 
       * Emits [`Event::SpendApproved`] if successful.
       **/
      spendLocal: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress]>;
      /**
       * Void previously approved spend.
       * 
       * ## Dispatch Origin
       * 
       * Must be [`Config::RejectOrigin`].
       * 
       * ## Details
       * 
       * A spend void is only possible if the payout has not been attempted yet.
       * 
       * ### Parameters
       * - `index`: The spend index.
       * 
       * ## Events
       * 
       * Emits [`Event::AssetSpendVoided`] if successful.
       **/
      voidSpend: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    uniques: {
      /**
       * Approve an item to be transferred by a delegated third-party account.
       * 
       * The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be
       * either the owner of the `item` or the admin of the collection.
       * 
       * - `collection`: The collection of the item to be approved for delegated transfer.
       * - `item`: The item of the item to be approved for delegated transfer.
       * - `delegate`: The account to delegate permission to transfer the item.
       * 
       * Important NOTE: The `approved` account gets reset after each transfer.
       * 
       * Emits `ApprovedTransfer` on success.
       * 
       * Weight: `O(1)`
       **/
      approveTransfer: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array, delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, MultiAddress]>;
      /**
       * Destroy a single item.
       * 
       * Origin must be Signed and the signing account must be either:
       * - the Admin of the `collection`;
       * - the Owner of the `item`;
       * 
       * - `collection`: The collection of the item to be burned.
       * - `item`: The item of the item to be burned.
       * - `check_owner`: If `Some` then the operation will fail with `WrongOwner` unless the
       * item is owned by this value.
       * 
       * Emits `Burned` with the actual amount burned.
       * 
       * Weight: `O(1)`
       * Modes: `check_owner.is_some()`.
       **/
      burn: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array, checkOwner: Option<MultiAddress> | null | Uint8Array | MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string) => SubmittableExtrinsic<ApiType>, [u32, u32, Option<MultiAddress>]>;
      /**
       * Allows to buy an item if it's up for sale.
       * 
       * Origin must be Signed and must not be the owner of the `item`.
       * 
       * - `collection`: The collection of the item.
       * - `item`: The item the sender wants to buy.
       * - `bid_price`: The price the sender is willing to pay.
       * 
       * Emits `ItemBought` on success.
       **/
      buyItem: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array, bidPrice: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u128]>;
      /**
       * Cancel the prior approval for the transfer of an item by a delegate.
       * 
       * Origin must be either:
       * - the `Force` origin;
       * - `Signed` with the signer being the Admin of the `collection`;
       * - `Signed` with the signer being the Owner of the `item`;
       * 
       * Arguments:
       * - `collection`: The collection of the item of whose approval will be cancelled.
       * - `item`: The item of the item of whose approval will be cancelled.
       * - `maybe_check_delegate`: If `Some` will ensure that the given account is the one to
       * which permission of transfer is delegated.
       * 
       * Emits `ApprovalCancelled` on success.
       * 
       * Weight: `O(1)`
       **/
      cancelApproval: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array, maybeCheckDelegate: Option<MultiAddress> | null | Uint8Array | MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string) => SubmittableExtrinsic<ApiType>, [u32, u32, Option<MultiAddress>]>;
      /**
       * Clear an attribute for a collection or item.
       * 
       * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
       * `collection`.
       * 
       * Any deposit is freed for the collection's owner.
       * 
       * - `collection`: The identifier of the collection whose item's metadata to clear.
       * - `maybe_item`: The identifier of the item whose metadata to clear.
       * - `key`: The key of the attribute.
       * 
       * Emits `AttributeCleared`.
       * 
       * Weight: `O(1)`
       **/
      clearAttribute: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, maybeItem: Option<u32> | null | Uint8Array | u32 | AnyNumber, key: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<u32>, Bytes]>;
      /**
       * Clear the metadata for a collection.
       * 
       * Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
       * the `collection`.
       * 
       * Any deposit is freed for the collection's owner.
       * 
       * - `collection`: The identifier of the collection whose metadata to clear.
       * 
       * Emits `CollectionMetadataCleared`.
       * 
       * Weight: `O(1)`
       **/
      clearCollectionMetadata: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Clear the metadata for an item.
       * 
       * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
       * `item`.
       * 
       * Any deposit is freed for the collection's owner.
       * 
       * - `collection`: The identifier of the collection whose item's metadata to clear.
       * - `item`: The identifier of the item whose metadata to clear.
       * 
       * Emits `MetadataCleared`.
       * 
       * Weight: `O(1)`
       **/
      clearMetadata: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Issue a new collection of non-fungible items from a public origin.
       * 
       * This new collection has no items initially and its owner is the origin.
       * 
       * The origin must conform to the configured `CreateOrigin` and have sufficient funds free.
       * 
       * `ItemDeposit` funds of sender are reserved.
       * 
       * Parameters:
       * - `collection`: The identifier of the new collection. This must not be currently in use.
       * - `admin`: The admin of this collection. The admin is the initial address of each
       * member of the collection's admin team.
       * 
       * Emits `Created` event when successful.
       * 
       * Weight: `O(1)`
       **/
      create: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, admin: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress]>;
      /**
       * Destroy a collection of fungible items.
       * 
       * The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the
       * owner of the `collection`.
       * 
       * - `collection`: The identifier of the collection to be destroyed.
       * - `witness`: Information on the items minted in the collection. This must be
       * correct.
       * 
       * Emits `Destroyed` event when successful.
       * 
       * Weight: `O(n + m)` where:
       * - `n = witness.items`
       * - `m = witness.item_metadatas`
       * - `a = witness.attributes`
       **/
      destroy: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, witness: PalletUniquesDestroyWitness | { items?: any; itemMetadatas?: any; attributes?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, PalletUniquesDestroyWitness]>;
      /**
       * Issue a new collection of non-fungible items from a privileged origin.
       * 
       * This new collection has no items initially.
       * 
       * The origin must conform to `ForceOrigin`.
       * 
       * Unlike `create`, no funds are reserved.
       * 
       * - `collection`: The identifier of the new item. This must not be currently in use.
       * - `owner`: The owner of this collection of items. The owner has full superuser
       * permissions
       * over this item, but may later change and configure the permissions using
       * `transfer_ownership` and `set_team`.
       * 
       * Emits `ForceCreated` event when successful.
       * 
       * Weight: `O(1)`
       **/
      forceCreate: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, freeHolding: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress, bool]>;
      /**
       * Alter the attributes of a given item.
       * 
       * Origin must be `ForceOrigin`.
       * 
       * - `collection`: The identifier of the item.
       * - `owner`: The new Owner of this item.
       * - `issuer`: The new Issuer of this item.
       * - `admin`: The new Admin of this item.
       * - `freezer`: The new Freezer of this item.
       * - `free_holding`: Whether a deposit is taken for holding an item of this collection.
       * - `is_frozen`: Whether this collection is frozen except for permissioned/admin
       * instructions.
       * 
       * Emits `ItemStatusChanged` with the identity of the item.
       * 
       * Weight: `O(1)`
       **/
      forceItemStatus: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, issuer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, admin: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, freezer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, freeHolding: bool | boolean | Uint8Array, isFrozen: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress, MultiAddress, MultiAddress, MultiAddress, bool, bool]>;
      /**
       * Disallow further unprivileged transfer of an item.
       * 
       * Origin must be Signed and the sender should be the Freezer of the `collection`.
       * 
       * - `collection`: The collection of the item to be frozen.
       * - `item`: The item of the item to be frozen.
       * 
       * Emits `Frozen`.
       * 
       * Weight: `O(1)`
       **/
      freeze: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Disallow further unprivileged transfers for a whole collection.
       * 
       * Origin must be Signed and the sender should be the Freezer of the `collection`.
       * 
       * - `collection`: The collection to be frozen.
       * 
       * Emits `CollectionFrozen`.
       * 
       * Weight: `O(1)`
       **/
      freezeCollection: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Mint an item of a particular collection.
       * 
       * The origin must be Signed and the sender must be the Issuer of the `collection`.
       * 
       * - `collection`: The collection of the item to be minted.
       * - `item`: The item value of the item to be minted.
       * - `beneficiary`: The initial owner of the minted item.
       * 
       * Emits `Issued` event when successful.
       * 
       * Weight: `O(1)`
       **/
      mint: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, MultiAddress]>;
      /**
       * Reevaluate the deposits on some items.
       * 
       * Origin must be Signed and the sender should be the Owner of the `collection`.
       * 
       * - `collection`: The collection to be frozen.
       * - `items`: The items of the collection whose deposits will be reevaluated.
       * 
       * NOTE: This exists as a best-effort function. Any items which are unknown or
       * in the case that the owner account does not have reservable funds to pay for a
       * deposit increase are ignored. Generally the owner isn't going to call this on items
       * whose existing deposit is less than the refreshed deposit as it would only cost them,
       * so it's of little consequence.
       * 
       * It will still return an error in the case that the collection is unknown of the signer
       * is not permitted to call it.
       * 
       * Weight: `O(items.len())`
       **/
      redeposit: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, items: Vec<u32> | (u32 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u32, Vec<u32>]>;
      /**
       * Set (or reset) the acceptance of ownership for a particular account.
       * 
       * Origin must be `Signed` and if `maybe_collection` is `Some`, then the signer must have a
       * provider reference.
       * 
       * - `maybe_collection`: The identifier of the collection whose ownership the signer is
       * willing to accept, or if `None`, an indication that the signer is willing to accept no
       * ownership transferal.
       * 
       * Emits `OwnershipAcceptanceChanged`.
       **/
      setAcceptOwnership: AugmentedSubmittable<(maybeCollection: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Option<u32>]>;
      /**
       * Set an attribute for a collection or item.
       * 
       * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
       * `collection`.
       * 
       * If the origin is Signed, then funds of signer are reserved according to the formula:
       * `MetadataDepositBase + DepositPerByte * (key.len + value.len)` taking into
       * account any already reserved funds.
       * 
       * - `collection`: The identifier of the collection whose item's metadata to set.
       * - `maybe_item`: The identifier of the item whose metadata to set.
       * - `key`: The key of the attribute.
       * - `value`: The value to which to set the attribute.
       * 
       * Emits `AttributeSet`.
       * 
       * Weight: `O(1)`
       **/
      setAttribute: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, maybeItem: Option<u32> | null | Uint8Array | u32 | AnyNumber, key: Bytes | string | Uint8Array, value: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<u32>, Bytes, Bytes]>;
      /**
       * Set the maximum amount of items a collection could have.
       * 
       * Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
       * the `collection`.
       * 
       * Note: This function can only succeed once per collection.
       * 
       * - `collection`: The identifier of the collection to change.
       * - `max_supply`: The maximum amount of items a collection could have.
       * 
       * Emits `CollectionMaxSupplySet` event when successful.
       **/
      setCollectionMaxSupply: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, maxSupply: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Set the metadata for a collection.
       * 
       * Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
       * the `collection`.
       * 
       * If the origin is `Signed`, then funds of signer are reserved according to the formula:
       * `MetadataDepositBase + DepositPerByte * data.len` taking into
       * account any already reserved funds.
       * 
       * - `collection`: The identifier of the item whose metadata to update.
       * - `data`: The general information of this item. Limited in length by `StringLimit`.
       * - `is_frozen`: Whether the metadata should be frozen against further changes.
       * 
       * Emits `CollectionMetadataSet`.
       * 
       * Weight: `O(1)`
       **/
      setCollectionMetadata: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, data: Bytes | string | Uint8Array, isFrozen: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Bytes, bool]>;
      /**
       * Set the metadata for an item.
       * 
       * Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
       * `collection`.
       * 
       * If the origin is Signed, then funds of signer are reserved according to the formula:
       * `MetadataDepositBase + DepositPerByte * data.len` taking into
       * account any already reserved funds.
       * 
       * - `collection`: The identifier of the collection whose item's metadata to set.
       * - `item`: The identifier of the item whose metadata to set.
       * - `data`: The general information of this item. Limited in length by `StringLimit`.
       * - `is_frozen`: Whether the metadata should be frozen against further changes.
       * 
       * Emits `MetadataSet`.
       * 
       * Weight: `O(1)`
       **/
      setMetadata: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array, data: Bytes | string | Uint8Array, isFrozen: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, Bytes, bool]>;
      /**
       * Set (or reset) the price for an item.
       * 
       * Origin must be Signed and must be the owner of the asset `item`.
       * 
       * - `collection`: The collection of the item.
       * - `item`: The item to set the price for.
       * - `price`: The price for the item. Pass `None`, to reset the price.
       * - `buyer`: Restricts the buy operation to a specific account.
       * 
       * Emits `ItemPriceSet` on success if the price is not `None`.
       * Emits `ItemPriceRemoved` on success if the price is `None`.
       **/
      setPrice: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array, price: Option<u128> | null | Uint8Array | u128 | AnyNumber, whitelistedBuyer: Option<MultiAddress> | null | Uint8Array | MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string) => SubmittableExtrinsic<ApiType>, [u32, u32, Option<u128>, Option<MultiAddress>]>;
      /**
       * Change the Issuer, Admin and Freezer of a collection.
       * 
       * Origin must be Signed and the sender should be the Owner of the `collection`.
       * 
       * - `collection`: The collection whose team should be changed.
       * - `issuer`: The new Issuer of this collection.
       * - `admin`: The new Admin of this collection.
       * - `freezer`: The new Freezer of this collection.
       * 
       * Emits `TeamChanged`.
       * 
       * Weight: `O(1)`
       **/
      setTeam: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, issuer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, admin: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, freezer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress, MultiAddress, MultiAddress]>;
      /**
       * Re-allow unprivileged transfer of an item.
       * 
       * Origin must be Signed and the sender should be the Freezer of the `collection`.
       * 
       * - `collection`: The collection of the item to be thawed.
       * - `item`: The item of the item to be thawed.
       * 
       * Emits `Thawed`.
       * 
       * Weight: `O(1)`
       **/
      thaw: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Re-allow unprivileged transfers for a whole collection.
       * 
       * Origin must be Signed and the sender should be the Admin of the `collection`.
       * 
       * - `collection`: The collection to be thawed.
       * 
       * Emits `CollectionThawed`.
       * 
       * Weight: `O(1)`
       **/
      thawCollection: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Move an item from the sender account to another.
       * 
       * This resets the approved account of the item.
       * 
       * Origin must be Signed and the signing account must be either:
       * - the Admin of the `collection`;
       * - the Owner of the `item`;
       * - the approved delegate for the `item` (in this case, the approval is reset).
       * 
       * Arguments:
       * - `collection`: The collection of the item to be transferred.
       * - `item`: The item of the item to be transferred.
       * - `dest`: The account to receive ownership of the item.
       * 
       * Emits `Transferred`.
       * 
       * Weight: `O(1)`
       **/
      transfer: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, item: u32 | AnyNumber | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, MultiAddress]>;
      /**
       * Change the Owner of a collection.
       * 
       * Origin must be Signed and the sender should be the Owner of the `collection`.
       * 
       * - `collection`: The collection whose owner should be changed.
       * - `owner`: The new Owner of this collection. They must have called
       * `set_accept_ownership` with `collection` in order for this operation to succeed.
       * 
       * Emits `OwnerChanged`.
       * 
       * Weight: `O(1)`
       **/
      transferOwnership: AugmentedSubmittable<(collection: u32 | AnyNumber | Uint8Array, newOwner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    utility: {
      /**
       * Send a call through an indexed pseudonym of the sender.
       * 
       * Filter from origin are passed along. The call will be dispatched with an origin which
       * use the same filter as the origin of this call.
       * 
       * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
       * because you expect `proxy` to have been used prior in the call stack and you do not want
       * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
       * in the Multisig pallet instead.
       * 
       * NOTE: Prior to version *12, this was called `as_limited_sub`.
       * 
       * The dispatch origin for this call must be _Signed_.
       **/
      asDerivative: AugmentedSubmittable<(index: u16 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Call]>;
      /**
       * Send a batch of dispatch calls.
       * 
       * May be called from any origin except `None`.
       * 
       * - `calls`: The calls to be dispatched from the same origin. The number of call must not
       * exceed the constant: `batched_calls_limit` (available in constant metadata).
       * 
       * If origin is root then the calls are dispatched without checking origin filter. (This
       * includes bypassing `frame_system::Config::BaseCallFilter`).
       * 
       * ## Complexity
       * - O(C) where C is the number of calls to be batched.
       * 
       * This will return `Ok` in all circumstances. To determine the success of the batch, an
       * event is deposited. If a call failed and the batch was interrupted, then the
       * `BatchInterrupted` event is deposited, along with the number of successful calls made
       * and the error of the failed call. If all were successful, then the `BatchCompleted`
       * event is deposited.
       **/
      batch: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * Send a batch of dispatch calls and atomically execute them.
       * The whole transaction will rollback and fail if any of the calls failed.
       * 
       * May be called from any origin except `None`.
       * 
       * - `calls`: The calls to be dispatched from the same origin. The number of call must not
       * exceed the constant: `batched_calls_limit` (available in constant metadata).
       * 
       * If origin is root then the calls are dispatched without checking origin filter. (This
       * includes bypassing `frame_system::Config::BaseCallFilter`).
       * 
       * ## Complexity
       * - O(C) where C is the number of calls to be batched.
       **/
      batchAll: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * Dispatches a function call with a provided origin.
       * 
       * The dispatch origin for this call must be _Root_.
       * 
       * ## Complexity
       * - O(1).
       **/
      dispatchAs: AugmentedSubmittable<(asOrigin: AssetHubKusamaRuntimeOriginCaller | { system: any } | { PolkadotXcm: any } | { CumulusXcm: any } | { Origins: any } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetHubKusamaRuntimeOriginCaller, Call]>;
      /**
       * Dispatches a function call with a provided origin.
       * 
       * Almost the same as [`Pallet::dispatch_as`] but forwards any error of the inner call.
       * 
       * The dispatch origin for this call must be _Root_.
       **/
      dispatchAsFallible: AugmentedSubmittable<(asOrigin: AssetHubKusamaRuntimeOriginCaller | { system: any } | { PolkadotXcm: any } | { CumulusXcm: any } | { Origins: any } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetHubKusamaRuntimeOriginCaller, Call]>;
      /**
       * Send a batch of dispatch calls.
       * Unlike `batch`, it allows errors and won't interrupt.
       * 
       * May be called from any origin except `None`.
       * 
       * - `calls`: The calls to be dispatched from the same origin. The number of call must not
       * exceed the constant: `batched_calls_limit` (available in constant metadata).
       * 
       * If origin is root then the calls are dispatch without checking origin filter. (This
       * includes bypassing `frame_system::Config::BaseCallFilter`).
       * 
       * ## Complexity
       * - O(C) where C is the number of calls to be batched.
       **/
      forceBatch: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * Dispatch a fallback call in the event the main call fails to execute.
       * May be called from any origin except `None`.
       * 
       * This function first attempts to dispatch the `main` call.
       * If the `main` call fails, the `fallback` is attemted.
       * if the fallback is successfully dispatched, the weights of both calls
       * are accumulated and an event containing the main call error is deposited.
       * 
       * In the event of a fallback failure the whole call fails
       * with the weights returned.
       * 
       * - `main`: The main call to be dispatched. This is the primary action to execute.
       * - `fallback`: The fallback call to be dispatched in case the `main` call fails.
       * 
       * ## Dispatch Logic
       * - If the origin is `root`, both the main and fallback calls are executed without
       * applying any origin filters.
       * - If the origin is not `root`, the origin filter is applied to both the `main` and
       * `fallback` calls.
       * 
       * ## Use Case
       * - Some use cases might involve submitting a `batch` type call in either main, fallback
       * or both.
       **/
      ifElse: AugmentedSubmittable<(main: Call | IMethod | string | Uint8Array, fallback: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, Call]>;
      /**
       * Dispatch a function call with a specified weight.
       * 
       * This function does not check the weight of the call, and instead allows the
       * Root origin to specify the weight of the call.
       * 
       * The dispatch origin for this call must be _Root_.
       **/
      withWeight: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array, weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    vesting: {
      /**
       * Force remove a vesting schedule
       * 
       * The dispatch origin for this call must be _Root_.
       * 
       * - `target`: An account that has a vesting schedule
       * - `schedule_index`: The vesting schedule index that should be removed
       **/
      forceRemoveVestingSchedule: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, scheduleIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32]>;
      /**
       * Force a vested transfer.
       * 
       * The dispatch origin for this call must be _Root_.
       * 
       * - `source`: The account whose funds should be transferred.
       * - `target`: The account that should be transferred the vested funds.
       * - `schedule`: The vesting schedule attached to the transfer.
       * 
       * Emits `VestingCreated`.
       * 
       * NOTE: This will unlock all schedules through the current block.
       * 
       * ## Complexity
       * - `O(1)`.
       **/
      forceVestedTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, schedule: PalletVestingVestingInfo | { locked?: any; perBlock?: any; startingBlock?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, PalletVestingVestingInfo]>;
      /**
       * Merge two vesting schedules together, creating a new vesting schedule that unlocks over
       * the highest possible start and end blocks. If both schedules have already started the
       * current block will be used as the schedule start; with the caveat that if one schedule
       * is finished by the current block, the other will be treated as the new merged schedule,
       * unmodified.
       * 
       * NOTE: If `schedule1_index == schedule2_index` this is a no-op.
       * NOTE: This will unlock all schedules through the current block prior to merging.
       * NOTE: If both schedules have ended by the current block, no new schedule will be created
       * and both will be removed.
       * 
       * Merged schedule attributes:
       * - `starting_block`: `MAX(schedule1.starting_block, scheduled2.starting_block,
       * current_block)`.
       * - `ending_block`: `MAX(schedule1.ending_block, schedule2.ending_block)`.
       * - `locked`: `schedule1.locked_at(current_block) + schedule2.locked_at(current_block)`.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `schedule1_index`: index of the first schedule to merge.
       * - `schedule2_index`: index of the second schedule to merge.
       **/
      mergeSchedules: AugmentedSubmittable<(schedule1Index: u32 | AnyNumber | Uint8Array, schedule2Index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Unlock any vested funds of the sender account.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have funds still
       * locked under this pallet.
       * 
       * Emits either `VestingCompleted` or `VestingUpdated`.
       * 
       * ## Complexity
       * - `O(1)`.
       **/
      vest: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Create a vested transfer.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `target`: The account receiving the vested funds.
       * - `schedule`: The vesting schedule attached to the transfer.
       * 
       * Emits `VestingCreated`.
       * 
       * NOTE: This will unlock all schedules through the current block.
       * 
       * ## Complexity
       * - `O(1)`.
       **/
      vestedTransfer: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, schedule: PalletVestingVestingInfo | { locked?: any; perBlock?: any; startingBlock?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, PalletVestingVestingInfo]>;
      /**
       * Unlock any vested funds of a `target` account.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `target`: The account whose vested funds should be unlocked. Must have funds still
       * locked under this pallet.
       * 
       * Emits either `VestingCompleted` or `VestingUpdated`.
       * 
       * ## Complexity
       * - `O(1)`.
       **/
      vestOther: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    voterList: {
      /**
       * Move the caller's Id directly in front of `lighter`.
       * 
       * The dispatch origin for this call must be _Signed_ and can only be called by the Id of
       * the account going in front of `lighter`. Fee is payed by the origin under all
       * circumstances.
       * 
       * Only works if:
       * 
       * - both nodes are within the same bag,
       * - and `origin` has a greater `Score` than `lighter`.
       **/
      putInFrontOf: AugmentedSubmittable<(lighter: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Same as [`Pallet::put_in_front_of`], but it can be called by anyone.
       * 
       * Fee is paid by the origin under all circumstances.
       **/
      putInFrontOfOther: AugmentedSubmittable<(heavier: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, lighter: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress]>;
      /**
       * Declare that some `dislocated` account has, through rewards or penalties, sufficiently
       * changed its score that it should properly fall into a different bag than its current
       * one.
       * 
       * Anyone can call this function about any potentially dislocated account.
       * 
       * Will always update the stored score of `dislocated` to the correct score, based on
       * `ScoreProvider`.
       * 
       * If `dislocated` does not exists, it returns an error.
       **/
      rebag: AugmentedSubmittable<(dislocated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    whitelist: {
      dispatchWhitelistedCall: AugmentedSubmittable<(callHash: H256 | string | Uint8Array, callEncodedLen: u32 | AnyNumber | Uint8Array, callWeightWitness: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, u32, SpWeightsWeightV2Weight]>;
      dispatchWhitelistedCallWithPreimage: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
      removeWhitelistedCall: AugmentedSubmittable<(callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      whitelistCall: AugmentedSubmittable<(callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    xcmpQueue: {
      /**
       * Resumes all XCM executions for the XCMP queue.
       * 
       * Note that this function doesn't change the status of the in/out bound channels.
       * 
       * - `origin`: Must pass `ControllerOrigin`.
       **/
      resumeXcmExecution: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
       * 
       * - `origin`: Must pass `ControllerOrigin`.
       **/
      suspendXcmExecution: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Overwrites the number of pages which must be in the queue after which we drop any
       * further messages from the channel.
       * 
       * - `origin`: Must pass `Root`.
       * - `new`: Desired value for `QueueConfigData.drop_threshold`
       **/
      updateDropThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Overwrites the number of pages which the queue must be reduced to before it signals
       * that message sending may recommence after it has been suspended.
       * 
       * - `origin`: Must pass `Root`.
       * - `new`: Desired value for `QueueConfigData.resume_threshold`
       **/
      updateResumeThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Overwrites the number of pages which must be in the queue for the other side to be
       * told to suspend their sending.
       * 
       * - `origin`: Must pass `Root`.
       * - `new`: Desired value for `QueueConfigData.suspend_value`
       **/
      updateSuspendThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
  } // AugmentedSubmittables
} // declare module

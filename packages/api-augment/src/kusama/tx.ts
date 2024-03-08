// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/submittable';

import type { ApiTypes, AugmentedSubmittable, SubmittableExtrinsic, SubmittableExtrinsicFunction } from '@polkadot/api-base/types';
import type { Data } from '@polkadot/types';
import type { Bytes, Compact, Option, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types';
import type { EthereumAddress } from '@polkadot/types/interfaces/eth';
import type { AccountId32, Call, H256, MultiAddress, Perbill, Percent, Perquintill } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportPreimagesBounded, FrameSupportScheduleDispatchTime, PalletBalancesAdjustmentDirection, PalletBrokerCoretimeInterfaceCoreAssignment, PalletConvictionVotingConviction, PalletConvictionVotingVoteAccountVote, PalletElectionProviderMultiPhaseRawSolution, PalletElectionProviderMultiPhaseSolutionOrSnapshotSize, PalletIdentityJudgement, PalletIdentityLegacyIdentityInfo, PalletMultisigTimepoint, PalletNominationPoolsBondExtra, PalletNominationPoolsClaimPermission, PalletNominationPoolsCommissionChangeRate, PalletNominationPoolsCommissionClaimPermission, PalletNominationPoolsConfigOpAccountId32, PalletNominationPoolsConfigOpPerbill, PalletNominationPoolsConfigOpU128, PalletNominationPoolsConfigOpU32, PalletNominationPoolsPoolState, PalletStakingPalletConfigOpPerbill, PalletStakingPalletConfigOpPercent, PalletStakingPalletConfigOpU128, PalletStakingPalletConfigOpU32, PalletStakingRewardDestination, PalletStakingValidatorPrefs, PalletStateTrieMigrationMigrationLimits, PalletStateTrieMigrationMigrationTask, PalletStateTrieMigrationProgress, PalletVestingVestingInfo, PolkadotParachainPrimitivesPrimitivesHrmpChannelId, PolkadotPrimitivesV6AsyncBackingAsyncBackingParams, PolkadotPrimitivesV6ExecutorParams, PolkadotPrimitivesV6InherentData, PolkadotPrimitivesV6PvfCheckStatement, PolkadotPrimitivesV6SlashingDisputeProof, PolkadotPrimitivesV6ValidatorAppSignature, PolkadotPrimitivesVstagingApprovalVotingParams, PolkadotRuntimeCommonClaimsEcdsaSignature, PolkadotRuntimeCommonClaimsStatementKind, PolkadotRuntimeCommonImplsVersionedLocatableAsset, PolkadotRuntimeParachainsInclusionAggregateMessageOrigin, SpConsensusBabeDigestsNextConfigDescriptor, SpConsensusBeefyEquivocationProof, SpConsensusGrandpaEquivocationProof, SpConsensusSlotsEquivocationProof, SpNposElectionsElectionScore, SpNposElectionsSupport, SpRuntimeMultiSignature, SpRuntimeMultiSigner, SpSessionMembershipProof, SpWeightsWeightV2Weight, StagingKusamaRuntimeOriginCaller, StagingKusamaRuntimeProxyType, StagingKusamaRuntimeSessionKeys, StagingXcmV4Location, XcmV3WeightLimit, XcmVersionedAssets, XcmVersionedLocation, XcmVersionedXcm } from '@polkadot/types/lookup';

export type __AugmentedSubmittable = AugmentedSubmittable<() => unknown>;
export type __SubmittableExtrinsic<ApiType extends ApiTypes> = SubmittableExtrinsic<ApiType>;
export type __SubmittableExtrinsicFunction<ApiType extends ApiTypes> = SubmittableExtrinsicFunction<ApiType>;

declare module '@polkadot/api-base/types/submittable' {
  interface AugmentedSubmittables<ApiType extends ApiTypes> {
    assetRate: {
      /**
       * See [`Pallet::create`].
       **/
      create: AugmentedSubmittable<(assetKind: PolkadotRuntimeCommonImplsVersionedLocatableAsset | { V3: any } | { V4: any } | string | Uint8Array, rate: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PolkadotRuntimeCommonImplsVersionedLocatableAsset, u128]>;
      /**
       * See [`Pallet::remove`].
       **/
      remove: AugmentedSubmittable<(assetKind: PolkadotRuntimeCommonImplsVersionedLocatableAsset | { V3: any } | { V4: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PolkadotRuntimeCommonImplsVersionedLocatableAsset]>;
      /**
       * See [`Pallet::update`].
       **/
      update: AugmentedSubmittable<(assetKind: PolkadotRuntimeCommonImplsVersionedLocatableAsset | { V3: any } | { V4: any } | string | Uint8Array, rate: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PolkadotRuntimeCommonImplsVersionedLocatableAsset, u128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    auctions: {
      /**
       * See [`Pallet::bid`].
       **/
      bid: AugmentedSubmittable<(para: Compact<u32> | AnyNumber | Uint8Array, auctionIndex: Compact<u32> | AnyNumber | Uint8Array, firstSlot: Compact<u32> | AnyNumber | Uint8Array, lastSlot: Compact<u32> | AnyNumber | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>, Compact<u32>, Compact<u32>, Compact<u128>]>;
      /**
       * See [`Pallet::cancel_auction`].
       **/
      cancelAuction: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::new_auction`].
       **/
      newAuction: AugmentedSubmittable<(duration: Compact<u32> | AnyNumber | Uint8Array, leasePeriodIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    babe: {
      /**
       * See [`Pallet::plan_config_change`].
       **/
      planConfigChange: AugmentedSubmittable<(config: SpConsensusBabeDigestsNextConfigDescriptor | { V1: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpConsensusBabeDigestsNextConfigDescriptor]>;
      /**
       * See [`Pallet::report_equivocation`].
       **/
      reportEquivocation: AugmentedSubmittable<(equivocationProof: SpConsensusSlotsEquivocationProof | { offender?: any; slot?: any; firstHeader?: any; secondHeader?: any } | string | Uint8Array, keyOwnerProof: SpSessionMembershipProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpConsensusSlotsEquivocationProof, SpSessionMembershipProof]>;
      /**
       * See [`Pallet::report_equivocation_unsigned`].
       **/
      reportEquivocationUnsigned: AugmentedSubmittable<(equivocationProof: SpConsensusSlotsEquivocationProof | { offender?: any; slot?: any; firstHeader?: any; secondHeader?: any } | string | Uint8Array, keyOwnerProof: SpSessionMembershipProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpConsensusSlotsEquivocationProof, SpSessionMembershipProof]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    balances: {
      /**
       * See [`Pallet::force_adjust_total_issuance`].
       **/
      forceAdjustTotalIssuance: AugmentedSubmittable<(direction: PalletBalancesAdjustmentDirection | 'Increase' | 'Decrease' | number | Uint8Array, delta: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletBalancesAdjustmentDirection, Compact<u128>]>;
      /**
       * See [`Pallet::force_set_balance`].
       **/
      forceSetBalance: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::force_transfer`].
       **/
      forceTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::force_unreserve`].
       **/
      forceUnreserve: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128]>;
      /**
       * See [`Pallet::transfer_all`].
       **/
      transferAll: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, bool]>;
      /**
       * See [`Pallet::transfer_allow_death`].
       **/
      transferAllowDeath: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::transfer_keep_alive`].
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::upgrade_accounts`].
       **/
      upgradeAccounts: AugmentedSubmittable<(who: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    beefy: {
      /**
       * See [`Pallet::report_equivocation`].
       **/
      reportEquivocation: AugmentedSubmittable<(equivocationProof: SpConsensusBeefyEquivocationProof | { first?: any; second?: any } | string | Uint8Array, keyOwnerProof: SpSessionMembershipProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpConsensusBeefyEquivocationProof, SpSessionMembershipProof]>;
      /**
       * See [`Pallet::report_equivocation_unsigned`].
       **/
      reportEquivocationUnsigned: AugmentedSubmittable<(equivocationProof: SpConsensusBeefyEquivocationProof | { first?: any; second?: any } | string | Uint8Array, keyOwnerProof: SpSessionMembershipProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpConsensusBeefyEquivocationProof, SpSessionMembershipProof]>;
      /**
       * See [`Pallet::set_new_genesis`].
       **/
      setNewGenesis: AugmentedSubmittable<(delayInBlocks: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    bounties: {
      /**
       * See [`Pallet::accept_curator`].
       **/
      acceptCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::approve_bounty`].
       **/
      approveBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::award_bounty`].
       **/
      awardBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
      /**
       * See [`Pallet::claim_bounty`].
       **/
      claimBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::close_bounty`].
       **/
      closeBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::extend_bounty_expiry`].
       **/
      extendBountyExpiry: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Bytes]>;
      /**
       * See [`Pallet::propose_bounty`].
       **/
      proposeBounty: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, description: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Bytes]>;
      /**
       * See [`Pallet::propose_curator`].
       **/
      proposeCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, curator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::unassign_curator`].
       **/
      unassignCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    childBounties: {
      /**
       * See [`Pallet::accept_curator`].
       **/
      acceptCurator: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>]>;
      /**
       * See [`Pallet::add_child_bounty`].
       **/
      addChildBounty: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array, description: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>, Bytes]>;
      /**
       * See [`Pallet::award_child_bounty`].
       **/
      awardChildBounty: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>, MultiAddress]>;
      /**
       * See [`Pallet::claim_child_bounty`].
       **/
      claimChildBounty: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>]>;
      /**
       * See [`Pallet::close_child_bounty`].
       **/
      closeChildBounty: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>]>;
      /**
       * See [`Pallet::propose_curator`].
       **/
      proposeCurator: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array, curator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>, MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::unassign_curator`].
       **/
      unassignCurator: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    claims: {
      /**
       * See [`Pallet::attest`].
       **/
      attest: AugmentedSubmittable<(statement: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::claim`].
       **/
      claim: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array, ethereumSignature: PolkadotRuntimeCommonClaimsEcdsaSignature | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, PolkadotRuntimeCommonClaimsEcdsaSignature]>;
      /**
       * See [`Pallet::claim_attest`].
       **/
      claimAttest: AugmentedSubmittable<(dest: AccountId32 | string | Uint8Array, ethereumSignature: PolkadotRuntimeCommonClaimsEcdsaSignature | string | Uint8Array, statement: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, PolkadotRuntimeCommonClaimsEcdsaSignature, Bytes]>;
      /**
       * See [`Pallet::mint_claim`].
       **/
      mintClaim: AugmentedSubmittable<(who: EthereumAddress | string | Uint8Array, value: u128 | AnyNumber | Uint8Array, vestingSchedule: Option<ITuple<[u128, u128, u32]>> | null | Uint8Array | ITuple<[u128, u128, u32]> | [u128 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], statement: Option<PolkadotRuntimeCommonClaimsStatementKind> | null | Uint8Array | PolkadotRuntimeCommonClaimsStatementKind | 'Regular' | 'Saft' | number) => SubmittableExtrinsic<ApiType>, [EthereumAddress, u128, Option<ITuple<[u128, u128, u32]>>, Option<PolkadotRuntimeCommonClaimsStatementKind>]>;
      /**
       * See [`Pallet::move_claim`].
       **/
      moveClaim: AugmentedSubmittable<(old: EthereumAddress | string | Uint8Array, updated: EthereumAddress | string | Uint8Array, maybePreclaim: Option<AccountId32> | null | Uint8Array | AccountId32 | string) => SubmittableExtrinsic<ApiType>, [EthereumAddress, EthereumAddress, Option<AccountId32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    configuration: {
      /**
       * See [`Pallet::set_approval_voting_params`].
       **/
      setApprovalVotingParams: AugmentedSubmittable<(updated: PolkadotPrimitivesVstagingApprovalVotingParams | { maxApprovalCoalesceCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PolkadotPrimitivesVstagingApprovalVotingParams]>;
      /**
       * See [`Pallet::set_async_backing_params`].
       **/
      setAsyncBackingParams: AugmentedSubmittable<(updated: PolkadotPrimitivesV6AsyncBackingAsyncBackingParams | { maxCandidateDepth?: any; allowedAncestryLen?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PolkadotPrimitivesV6AsyncBackingAsyncBackingParams]>;
      /**
       * See [`Pallet::set_bypass_consistency_check`].
       **/
      setBypassConsistencyCheck: AugmentedSubmittable<(updated: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [bool]>;
      /**
       * See [`Pallet::set_code_retention_period`].
       **/
      setCodeRetentionPeriod: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_coretime_cores`].
       **/
      setCoretimeCores: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_dispute_period`].
       **/
      setDisputePeriod: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_dispute_post_conclusion_acceptance_period`].
       **/
      setDisputePostConclusionAcceptancePeriod: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_executor_params`].
       **/
      setExecutorParams: AugmentedSubmittable<(updated: PolkadotPrimitivesV6ExecutorParams) => SubmittableExtrinsic<ApiType>, [PolkadotPrimitivesV6ExecutorParams]>;
      /**
       * See [`Pallet::set_group_rotation_frequency`].
       **/
      setGroupRotationFrequency: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_hrmp_channel_max_capacity`].
       **/
      setHrmpChannelMaxCapacity: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_hrmp_channel_max_message_size`].
       **/
      setHrmpChannelMaxMessageSize: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_hrmp_channel_max_total_size`].
       **/
      setHrmpChannelMaxTotalSize: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_hrmp_max_message_num_per_candidate`].
       **/
      setHrmpMaxMessageNumPerCandidate: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_hrmp_max_parachain_inbound_channels`].
       **/
      setHrmpMaxParachainInboundChannels: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_hrmp_max_parachain_outbound_channels`].
       **/
      setHrmpMaxParachainOutboundChannels: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_hrmp_open_request_ttl`].
       **/
      setHrmpOpenRequestTtl: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_hrmp_recipient_deposit`].
       **/
      setHrmpRecipientDeposit: AugmentedSubmittable<(updated: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::set_hrmp_sender_deposit`].
       **/
      setHrmpSenderDeposit: AugmentedSubmittable<(updated: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::set_max_code_size`].
       **/
      setMaxCodeSize: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_max_downward_message_size`].
       **/
      setMaxDownwardMessageSize: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_max_head_data_size`].
       **/
      setMaxHeadDataSize: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_max_pov_size`].
       **/
      setMaxPovSize: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_max_upward_message_num_per_candidate`].
       **/
      setMaxUpwardMessageNumPerCandidate: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_max_upward_message_size`].
       **/
      setMaxUpwardMessageSize: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_max_upward_queue_count`].
       **/
      setMaxUpwardQueueCount: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_max_upward_queue_size`].
       **/
      setMaxUpwardQueueSize: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_max_validators`].
       **/
      setMaxValidators: AugmentedSubmittable<(updated: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Option<u32>]>;
      /**
       * See [`Pallet::set_max_validators_per_core`].
       **/
      setMaxValidatorsPerCore: AugmentedSubmittable<(updated: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Option<u32>]>;
      /**
       * See [`Pallet::set_minimum_backing_votes`].
       **/
      setMinimumBackingVotes: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_minimum_validation_upgrade_delay`].
       **/
      setMinimumValidationUpgradeDelay: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_n_delay_tranches`].
       **/
      setNDelayTranches: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_needed_approvals`].
       **/
      setNeededApprovals: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_node_feature`].
       **/
      setNodeFeature: AugmentedSubmittable<(index: u8 | AnyNumber | Uint8Array, value: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u8, bool]>;
      /**
       * See [`Pallet::set_no_show_slots`].
       **/
      setNoShowSlots: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_on_demand_base_fee`].
       **/
      setOnDemandBaseFee: AugmentedSubmittable<(updated: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::set_on_demand_fee_variability`].
       **/
      setOnDemandFeeVariability: AugmentedSubmittable<(updated: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Perbill]>;
      /**
       * See [`Pallet::set_on_demand_queue_max_size`].
       **/
      setOnDemandQueueMaxSize: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_on_demand_retries`].
       **/
      setOnDemandRetries: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_on_demand_target_queue_utilization`].
       **/
      setOnDemandTargetQueueUtilization: AugmentedSubmittable<(updated: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Perbill]>;
      /**
       * See [`Pallet::set_on_demand_ttl`].
       **/
      setOnDemandTtl: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_paras_availability_period`].
       **/
      setParasAvailabilityPeriod: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_pvf_voting_ttl`].
       **/
      setPvfVotingTtl: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_relay_vrf_modulo_samples`].
       **/
      setRelayVrfModuloSamples: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_scheduling_lookahead`].
       **/
      setSchedulingLookahead: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_validation_upgrade_cooldown`].
       **/
      setValidationUpgradeCooldown: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_validation_upgrade_delay`].
       **/
      setValidationUpgradeDelay: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_zeroth_delay_tranche_width`].
       **/
      setZerothDelayTrancheWidth: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    convictionVoting: {
      /**
       * See [`Pallet::delegate`].
       **/
      delegate: AugmentedSubmittable<(clazz: u16 | AnyNumber | Uint8Array, to: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, conviction: PalletConvictionVotingConviction | 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x' | number | Uint8Array, balance: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, MultiAddress, PalletConvictionVotingConviction, u128]>;
      /**
       * See [`Pallet::remove_other_vote`].
       **/
      removeOtherVote: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, clazz: u16 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u16, u32]>;
      /**
       * See [`Pallet::remove_vote`].
       **/
      removeVote: AugmentedSubmittable<(clazz: Option<u16> | null | Uint8Array | u16 | AnyNumber, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<u16>, u32]>;
      /**
       * See [`Pallet::undelegate`].
       **/
      undelegate: AugmentedSubmittable<(clazz: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16]>;
      /**
       * See [`Pallet::unlock`].
       **/
      unlock: AugmentedSubmittable<(clazz: u16 | AnyNumber | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, MultiAddress]>;
      /**
       * See [`Pallet::vote`].
       **/
      vote: AugmentedSubmittable<(pollIndex: Compact<u32> | AnyNumber | Uint8Array, vote: PalletConvictionVotingVoteAccountVote | { Standard: any } | { Split: any } | { SplitAbstain: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, PalletConvictionVotingVoteAccountVote]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    coretime: {
      /**
       * See [`Pallet::assign_core`].
       **/
      assignCore: AugmentedSubmittable<(core: u16 | AnyNumber | Uint8Array, begin: u32 | AnyNumber | Uint8Array, assignment: Vec<ITuple<[PalletBrokerCoretimeInterfaceCoreAssignment, u16]>> | ([PalletBrokerCoretimeInterfaceCoreAssignment | { Idle: any } | { Pool: any } | { Task: any } | string | Uint8Array, u16 | AnyNumber | Uint8Array])[], endHint: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [u16, u32, Vec<ITuple<[PalletBrokerCoretimeInterfaceCoreAssignment, u16]>>, Option<u32>]>;
      /**
       * See [`Pallet::request_core_count`].
       **/
      requestCoreCount: AugmentedSubmittable<(count: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    crowdloan: {
      /**
       * See [`Pallet::add_memo`].
       **/
      addMemo: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array, memo: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Bytes]>;
      /**
       * See [`Pallet::contribute`].
       **/
      contribute: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array, signature: Option<SpRuntimeMultiSignature> | null | Uint8Array | SpRuntimeMultiSignature | { Ed25519: any } | { Sr25519: any } | { Ecdsa: any } | string) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>, Option<SpRuntimeMultiSignature>]>;
      /**
       * See [`Pallet::contribute_all`].
       **/
      contributeAll: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, signature: Option<SpRuntimeMultiSignature> | null | Uint8Array | SpRuntimeMultiSignature | { Ed25519: any } | { Sr25519: any } | { Ecdsa: any } | string) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Option<SpRuntimeMultiSignature>]>;
      /**
       * See [`Pallet::create`].
       **/
      create: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, cap: Compact<u128> | AnyNumber | Uint8Array, firstPeriod: Compact<u32> | AnyNumber | Uint8Array, lastPeriod: Compact<u32> | AnyNumber | Uint8Array, end: Compact<u32> | AnyNumber | Uint8Array, verifier: Option<SpRuntimeMultiSigner> | null | Uint8Array | SpRuntimeMultiSigner | { Ed25519: any } | { Sr25519: any } | { Ecdsa: any } | string) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>, Compact<u32>, Compact<u32>, Compact<u32>, Option<SpRuntimeMultiSigner>]>;
      /**
       * See [`Pallet::dissolve`].
       **/
      dissolve: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::edit`].
       **/
      edit: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, cap: Compact<u128> | AnyNumber | Uint8Array, firstPeriod: Compact<u32> | AnyNumber | Uint8Array, lastPeriod: Compact<u32> | AnyNumber | Uint8Array, end: Compact<u32> | AnyNumber | Uint8Array, verifier: Option<SpRuntimeMultiSigner> | null | Uint8Array | SpRuntimeMultiSigner | { Ed25519: any } | { Sr25519: any } | { Ecdsa: any } | string) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>, Compact<u32>, Compact<u32>, Compact<u32>, Option<SpRuntimeMultiSigner>]>;
      /**
       * See [`Pallet::poke`].
       **/
      poke: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::refund`].
       **/
      refund: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::withdraw`].
       **/
      withdraw: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Compact<u32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    electionProviderMultiPhase: {
      /**
       * See [`Pallet::governance_fallback`].
       **/
      governanceFallback: AugmentedSubmittable<(maybeMaxVoters: Option<u32> | null | Uint8Array | u32 | AnyNumber, maybeMaxTargets: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Option<u32>, Option<u32>]>;
      /**
       * See [`Pallet::set_emergency_election_result`].
       **/
      setEmergencyElectionResult: AugmentedSubmittable<(supports: Vec<ITuple<[AccountId32, SpNposElectionsSupport]>> | ([AccountId32 | string | Uint8Array, SpNposElectionsSupport | { total?: any; voters?: any } | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[AccountId32, SpNposElectionsSupport]>>]>;
      /**
       * See [`Pallet::set_minimum_untrusted_score`].
       **/
      setMinimumUntrustedScore: AugmentedSubmittable<(maybeNextScore: Option<SpNposElectionsElectionScore> | null | Uint8Array | SpNposElectionsElectionScore | { minimalStake?: any; sumStake?: any; sumStakeSquared?: any } | string) => SubmittableExtrinsic<ApiType>, [Option<SpNposElectionsElectionScore>]>;
      /**
       * See [`Pallet::submit`].
       **/
      submit: AugmentedSubmittable<(rawSolution: PalletElectionProviderMultiPhaseRawSolution | { solution?: any; score?: any; round?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletElectionProviderMultiPhaseRawSolution]>;
      /**
       * See [`Pallet::submit_unsigned`].
       **/
      submitUnsigned: AugmentedSubmittable<(rawSolution: PalletElectionProviderMultiPhaseRawSolution | { solution?: any; score?: any; round?: any } | string | Uint8Array, witness: PalletElectionProviderMultiPhaseSolutionOrSnapshotSize | { voters?: any; targets?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletElectionProviderMultiPhaseRawSolution, PalletElectionProviderMultiPhaseSolutionOrSnapshotSize]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    fastUnstake: {
      /**
       * See [`Pallet::control`].
       **/
      control: AugmentedSubmittable<(erasToCheck: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::deregister`].
       **/
      deregister: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::register_fast_unstake`].
       **/
      registerFastUnstake: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    fellowshipCollective: {
      /**
       * See [`Pallet::add_member`].
       **/
      addMember: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::cleanup_poll`].
       **/
      cleanupPoll: AugmentedSubmittable<(pollIndex: u32 | AnyNumber | Uint8Array, max: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * See [`Pallet::demote_member`].
       **/
      demoteMember: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::exchange_member`].
       **/
      exchangeMember: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, newWho: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress]>;
      /**
       * See [`Pallet::promote_member`].
       **/
      promoteMember: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::remove_member`].
       **/
      removeMember: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, minRank: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u16]>;
      /**
       * See [`Pallet::vote`].
       **/
      vote: AugmentedSubmittable<(poll: u32 | AnyNumber | Uint8Array, aye: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, bool]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    fellowshipReferenda: {
      /**
       * See [`Pallet::cancel`].
       **/
      cancel: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::kill`].
       **/
      kill: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::nudge_referendum`].
       **/
      nudgeReferendum: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::one_fewer_deciding`].
       **/
      oneFewerDeciding: AugmentedSubmittable<(track: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16]>;
      /**
       * See [`Pallet::place_decision_deposit`].
       **/
      placeDecisionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::refund_decision_deposit`].
       **/
      refundDecisionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::refund_submission_deposit`].
       **/
      refundSubmissionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_metadata`].
       **/
      setMetadata: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array, maybeHash: Option<H256> | null | Uint8Array | H256 | string) => SubmittableExtrinsic<ApiType>, [u32, Option<H256>]>;
      /**
       * See [`Pallet::submit`].
       **/
      submit: AugmentedSubmittable<(proposalOrigin: StagingKusamaRuntimeOriginCaller | { system: any } | { Void: any } | { Origins: any } | { ParachainsOrigin: any } | { XcmPallet: any } | string | Uint8Array, proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array, enactmentMoment: FrameSupportScheduleDispatchTime | { At: any } | { After: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingKusamaRuntimeOriginCaller, FrameSupportPreimagesBounded, FrameSupportScheduleDispatchTime]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    grandpa: {
      /**
       * See [`Pallet::note_stalled`].
       **/
      noteStalled: AugmentedSubmittable<(delay: u32 | AnyNumber | Uint8Array, bestFinalizedBlockNumber: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * See [`Pallet::report_equivocation`].
       **/
      reportEquivocation: AugmentedSubmittable<(equivocationProof: SpConsensusGrandpaEquivocationProof | { setId?: any; equivocation?: any } | string | Uint8Array, keyOwnerProof: SpSessionMembershipProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpConsensusGrandpaEquivocationProof, SpSessionMembershipProof]>;
      /**
       * See [`Pallet::report_equivocation_unsigned`].
       **/
      reportEquivocationUnsigned: AugmentedSubmittable<(equivocationProof: SpConsensusGrandpaEquivocationProof | { setId?: any; equivocation?: any } | string | Uint8Array, keyOwnerProof: SpSessionMembershipProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpConsensusGrandpaEquivocationProof, SpSessionMembershipProof]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    hrmp: {
      /**
       * See [`Pallet::establish_system_channel`].
       **/
      establishSystemChannel: AugmentedSubmittable<(sender: u32 | AnyNumber | Uint8Array, recipient: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * See [`Pallet::force_clean_hrmp`].
       **/
      forceCleanHrmp: AugmentedSubmittable<(para: u32 | AnyNumber | Uint8Array, numInbound: u32 | AnyNumber | Uint8Array, numOutbound: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32]>;
      /**
       * See [`Pallet::force_open_hrmp_channel`].
       **/
      forceOpenHrmpChannel: AugmentedSubmittable<(sender: u32 | AnyNumber | Uint8Array, recipient: u32 | AnyNumber | Uint8Array, maxCapacity: u32 | AnyNumber | Uint8Array, maxMessageSize: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32, u32]>;
      /**
       * See [`Pallet::force_process_hrmp_close`].
       **/
      forceProcessHrmpClose: AugmentedSubmittable<(channels: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::force_process_hrmp_open`].
       **/
      forceProcessHrmpOpen: AugmentedSubmittable<(channels: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::hrmp_accept_open_channel`].
       **/
      hrmpAcceptOpenChannel: AugmentedSubmittable<(sender: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::hrmp_cancel_open_request`].
       **/
      hrmpCancelOpenRequest: AugmentedSubmittable<(channelId: PolkadotParachainPrimitivesPrimitivesHrmpChannelId | { sender?: any; recipient?: any } | string | Uint8Array, openRequests: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PolkadotParachainPrimitivesPrimitivesHrmpChannelId, u32]>;
      /**
       * See [`Pallet::hrmp_close_channel`].
       **/
      hrmpCloseChannel: AugmentedSubmittable<(channelId: PolkadotParachainPrimitivesPrimitivesHrmpChannelId | { sender?: any; recipient?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PolkadotParachainPrimitivesPrimitivesHrmpChannelId]>;
      /**
       * See [`Pallet::hrmp_init_open_channel`].
       **/
      hrmpInitOpenChannel: AugmentedSubmittable<(recipient: u32 | AnyNumber | Uint8Array, proposedMaxCapacity: u32 | AnyNumber | Uint8Array, proposedMaxMessageSize: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32]>;
      /**
       * See [`Pallet::poke_channel_deposits`].
       **/
      pokeChannelDeposits: AugmentedSubmittable<(sender: u32 | AnyNumber | Uint8Array, recipient: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    identity: {
      /**
       * See [`Pallet::accept_username`].
       **/
      acceptUsername: AugmentedSubmittable<(username: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::add_registrar`].
       **/
      addRegistrar: AugmentedSubmittable<(account: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::add_sub`].
       **/
      addSub: AugmentedSubmittable<(sub: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, data: Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Data]>;
      /**
       * See [`Pallet::add_username_authority`].
       **/
      addUsernameAuthority: AugmentedSubmittable<(authority: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, suffix: Bytes | string | Uint8Array, allocation: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Bytes, u32]>;
      /**
       * See [`Pallet::cancel_request`].
       **/
      cancelRequest: AugmentedSubmittable<(regIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::clear_identity`].
       **/
      clearIdentity: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::kill_identity`].
       **/
      killIdentity: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::provide_judgement`].
       **/
      provideJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, judgement: PalletIdentityJudgement | { Unknown: any } | { FeePaid: any } | { Reasonable: any } | { KnownGood: any } | { OutOfDate: any } | { LowQuality: any } | { Erroneous: any } | string | Uint8Array, identity: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, PalletIdentityJudgement, H256]>;
      /**
       * See [`Pallet::quit_sub`].
       **/
      quitSub: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::remove_dangling_username`].
       **/
      removeDanglingUsername: AugmentedSubmittable<(username: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::remove_expired_approval`].
       **/
      removeExpiredApproval: AugmentedSubmittable<(username: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::remove_sub`].
       **/
      removeSub: AugmentedSubmittable<(sub: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::remove_username_authority`].
       **/
      removeUsernameAuthority: AugmentedSubmittable<(authority: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::rename_sub`].
       **/
      renameSub: AugmentedSubmittable<(sub: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, data: Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Data]>;
      /**
       * See [`Pallet::request_judgement`].
       **/
      requestJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, maxFee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
      /**
       * See [`Pallet::set_account_id`].
       **/
      setAccountId: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
      /**
       * See [`Pallet::set_fee`].
       **/
      setFee: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
      /**
       * See [`Pallet::set_fields`].
       **/
      setFields: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fields: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, u64]>;
      /**
       * See [`Pallet::set_identity`].
       **/
      setIdentity: AugmentedSubmittable<(info: PalletIdentityLegacyIdentityInfo | { additional?: any; display?: any; legal?: any; web?: any; riot?: any; email?: any; pgpFingerprint?: any; image?: any; twitter?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletIdentityLegacyIdentityInfo]>;
      /**
       * See [`Pallet::set_primary_username`].
       **/
      setPrimaryUsername: AugmentedSubmittable<(username: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::set_subs`].
       **/
      setSubs: AugmentedSubmittable<(subs: Vec<ITuple<[AccountId32, Data]>> | ([AccountId32 | string | Uint8Array, Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[AccountId32, Data]>>]>;
      /**
       * See [`Pallet::set_username_for`].
       **/
      setUsernameFor: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, username: Bytes | string | Uint8Array, signature: Option<SpRuntimeMultiSignature> | null | Uint8Array | SpRuntimeMultiSignature | { Ed25519: any } | { Sr25519: any } | { Ecdsa: any } | string) => SubmittableExtrinsic<ApiType>, [MultiAddress, Bytes, Option<SpRuntimeMultiSignature>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    indices: {
      /**
       * See [`Pallet::claim`].
       **/
      claim: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::force_transfer`].
       **/
      forceTransfer: AugmentedSubmittable<(updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, index: u32 | AnyNumber | Uint8Array, freeze: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32, bool]>;
      /**
       * See [`Pallet::free`].
       **/
      free: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::freeze`].
       **/
      freeze: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::transfer`].
       **/
      transfer: AugmentedSubmittable<(updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    initializer: {
      /**
       * See [`Pallet::force_approve`].
       **/
      forceApprove: AugmentedSubmittable<(upTo: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    messageQueue: {
      /**
       * See [`Pallet::execute_overweight`].
       **/
      executeOverweight: AugmentedSubmittable<(messageOrigin: PolkadotRuntimeParachainsInclusionAggregateMessageOrigin | { Ump: any } | string | Uint8Array, page: u32 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array, weightLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PolkadotRuntimeParachainsInclusionAggregateMessageOrigin, u32, u32, SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::reap_page`].
       **/
      reapPage: AugmentedSubmittable<(messageOrigin: PolkadotRuntimeParachainsInclusionAggregateMessageOrigin | { Ump: any } | string | Uint8Array, pageIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PolkadotRuntimeParachainsInclusionAggregateMessageOrigin, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    multisig: {
      /**
       * See [`Pallet::approve_as_multi`].
       **/
      approveAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], maybeTimepoint: Option<PalletMultisigTimepoint> | null | Uint8Array | PalletMultisigTimepoint | { height?: any; index?: any } | string, callHash: U8aFixed | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, U8aFixed, SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::as_multi`].
       **/
      asMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], maybeTimepoint: Option<PalletMultisigTimepoint> | null | Uint8Array | PalletMultisigTimepoint | { height?: any; index?: any } | string, call: Call | IMethod | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, Call, SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::as_multi_threshold_1`].
       **/
      asMultiThreshold1: AugmentedSubmittable<(otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Call]>;
      /**
       * See [`Pallet::cancel_as_multi`].
       **/
      cancelAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], timepoint: PalletMultisigTimepoint | { height?: any; index?: any } | string | Uint8Array, callHash: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, PalletMultisigTimepoint, U8aFixed]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    nis: {
      /**
       * See [`Pallet::communify`].
       **/
      communify: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::fund_deficit`].
       **/
      fundDeficit: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::place_bid`].
       **/
      placeBid: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, duration: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, u32]>;
      /**
       * See [`Pallet::privatize`].
       **/
      privatize: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::retract_bid`].
       **/
      retractBid: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, duration: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, u32]>;
      /**
       * See [`Pallet::thaw_communal`].
       **/
      thawCommunal: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::thaw_private`].
       **/
      thawPrivate: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, maybeProportion: Option<Perquintill> | null | Uint8Array | Perquintill | AnyNumber) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Option<Perquintill>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    nisCounterpartBalances: {
      /**
       * See [`Pallet::force_adjust_total_issuance`].
       **/
      forceAdjustTotalIssuance: AugmentedSubmittable<(direction: PalletBalancesAdjustmentDirection | 'Increase' | 'Decrease' | number | Uint8Array, delta: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletBalancesAdjustmentDirection, Compact<u128>]>;
      /**
       * See [`Pallet::force_set_balance`].
       **/
      forceSetBalance: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::force_transfer`].
       **/
      forceTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::force_unreserve`].
       **/
      forceUnreserve: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128]>;
      /**
       * See [`Pallet::transfer_all`].
       **/
      transferAll: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, bool]>;
      /**
       * See [`Pallet::transfer_allow_death`].
       **/
      transferAllowDeath: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::transfer_keep_alive`].
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::upgrade_accounts`].
       **/
      upgradeAccounts: AugmentedSubmittable<(who: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    nominationPools: {
      /**
       * See [`Pallet::adjust_pool_deposit`].
       **/
      adjustPoolDeposit: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::bond_extra`].
       **/
      bondExtra: AugmentedSubmittable<(extra: PalletNominationPoolsBondExtra | { FreeBalance: any } | { Rewards: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletNominationPoolsBondExtra]>;
      /**
       * See [`Pallet::bond_extra_other`].
       **/
      bondExtraOther: AugmentedSubmittable<(member: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, extra: PalletNominationPoolsBondExtra | { FreeBalance: any } | { Rewards: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, PalletNominationPoolsBondExtra]>;
      /**
       * See [`Pallet::chill`].
       **/
      chill: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::claim_commission`].
       **/
      claimCommission: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::claim_payout`].
       **/
      claimPayout: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::claim_payout_other`].
       **/
      claimPayoutOther: AugmentedSubmittable<(other: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * See [`Pallet::create`].
       **/
      create: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, root: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, nominator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, bouncer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress, MultiAddress, MultiAddress]>;
      /**
       * See [`Pallet::create_with_pool_id`].
       **/
      createWithPoolId: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, root: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, nominator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, bouncer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, poolId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress, MultiAddress, MultiAddress, u32]>;
      /**
       * See [`Pallet::join`].
       **/
      join: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, poolId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, u32]>;
      /**
       * See [`Pallet::nominate`].
       **/
      nominate: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, validators: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u32, Vec<AccountId32>]>;
      /**
       * See [`Pallet::pool_withdraw_unbonded`].
       **/
      poolWithdrawUnbonded: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, numSlashingSpans: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * See [`Pallet::set_claim_permission`].
       **/
      setClaimPermission: AugmentedSubmittable<(permission: PalletNominationPoolsClaimPermission | 'Permissioned' | 'PermissionlessCompound' | 'PermissionlessWithdraw' | 'PermissionlessAll' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletNominationPoolsClaimPermission]>;
      /**
       * See [`Pallet::set_commission`].
       **/
      setCommission: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, newCommission: Option<ITuple<[Perbill, AccountId32]>> | null | Uint8Array | ITuple<[Perbill, AccountId32]> | [Perbill | AnyNumber | Uint8Array, AccountId32 | string | Uint8Array]) => SubmittableExtrinsic<ApiType>, [u32, Option<ITuple<[Perbill, AccountId32]>>]>;
      /**
       * See [`Pallet::set_commission_change_rate`].
       **/
      setCommissionChangeRate: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, changeRate: PalletNominationPoolsCommissionChangeRate | { maxIncrease?: any; minDelay?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, PalletNominationPoolsCommissionChangeRate]>;
      /**
       * See [`Pallet::set_commission_claim_permission`].
       **/
      setCommissionClaimPermission: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, permission: Option<PalletNominationPoolsCommissionClaimPermission> | null | Uint8Array | PalletNominationPoolsCommissionClaimPermission | { Permissionless: any } | { Account: any } | string) => SubmittableExtrinsic<ApiType>, [u32, Option<PalletNominationPoolsCommissionClaimPermission>]>;
      /**
       * See [`Pallet::set_commission_max`].
       **/
      setCommissionMax: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, maxCommission: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Perbill]>;
      /**
       * See [`Pallet::set_configs`].
       **/
      setConfigs: AugmentedSubmittable<(minJoinBond: PalletNominationPoolsConfigOpU128 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, minCreateBond: PalletNominationPoolsConfigOpU128 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, maxPools: PalletNominationPoolsConfigOpU32 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, maxMembers: PalletNominationPoolsConfigOpU32 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, maxMembersPerPool: PalletNominationPoolsConfigOpU32 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, globalMaxCommission: PalletNominationPoolsConfigOpPerbill | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletNominationPoolsConfigOpU128, PalletNominationPoolsConfigOpU128, PalletNominationPoolsConfigOpU32, PalletNominationPoolsConfigOpU32, PalletNominationPoolsConfigOpU32, PalletNominationPoolsConfigOpPerbill]>;
      /**
       * See [`Pallet::set_metadata`].
       **/
      setMetadata: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, metadata: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Bytes]>;
      /**
       * See [`Pallet::set_state`].
       **/
      setState: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, state: PalletNominationPoolsPoolState | 'Open' | 'Blocked' | 'Destroying' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, PalletNominationPoolsPoolState]>;
      /**
       * See [`Pallet::unbond`].
       **/
      unbond: AugmentedSubmittable<(memberAccount: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, unbondingPoints: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::update_roles`].
       **/
      updateRoles: AugmentedSubmittable<(poolId: u32 | AnyNumber | Uint8Array, newRoot: PalletNominationPoolsConfigOpAccountId32 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, newNominator: PalletNominationPoolsConfigOpAccountId32 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, newBouncer: PalletNominationPoolsConfigOpAccountId32 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, PalletNominationPoolsConfigOpAccountId32, PalletNominationPoolsConfigOpAccountId32, PalletNominationPoolsConfigOpAccountId32]>;
      /**
       * See [`Pallet::withdraw_unbonded`].
       **/
      withdrawUnbonded: AugmentedSubmittable<(memberAccount: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, numSlashingSpans: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    onDemandAssignmentProvider: {
      /**
       * See [`Pallet::place_order_allow_death`].
       **/
      placeOrderAllowDeath: AugmentedSubmittable<(maxAmount: u128 | AnyNumber | Uint8Array, paraId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u32]>;
      /**
       * See [`Pallet::place_order_keep_alive`].
       **/
      placeOrderKeepAlive: AugmentedSubmittable<(maxAmount: u128 | AnyNumber | Uint8Array, paraId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    paraInclusion: {
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    paraInherent: {
      /**
       * See [`Pallet::enter`].
       **/
      enter: AugmentedSubmittable<(data: PolkadotPrimitivesV6InherentData | { bitfields?: any; backedCandidates?: any; disputes?: any; parentHeader?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PolkadotPrimitivesV6InherentData]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    paras: {
      /**
       * See [`Pallet::add_trusted_validation_code`].
       **/
      addTrustedValidationCode: AugmentedSubmittable<(validationCode: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::force_note_new_head`].
       **/
      forceNoteNewHead: AugmentedSubmittable<(para: u32 | AnyNumber | Uint8Array, newHead: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Bytes]>;
      /**
       * See [`Pallet::force_queue_action`].
       **/
      forceQueueAction: AugmentedSubmittable<(para: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::force_schedule_code_upgrade`].
       **/
      forceScheduleCodeUpgrade: AugmentedSubmittable<(para: u32 | AnyNumber | Uint8Array, newCode: Bytes | string | Uint8Array, relayParentNumber: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Bytes, u32]>;
      /**
       * See [`Pallet::force_set_current_code`].
       **/
      forceSetCurrentCode: AugmentedSubmittable<(para: u32 | AnyNumber | Uint8Array, newCode: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Bytes]>;
      /**
       * See [`Pallet::force_set_current_head`].
       **/
      forceSetCurrentHead: AugmentedSubmittable<(para: u32 | AnyNumber | Uint8Array, newHead: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Bytes]>;
      /**
       * See [`Pallet::force_set_most_recent_context`].
       **/
      forceSetMostRecentContext: AugmentedSubmittable<(para: u32 | AnyNumber | Uint8Array, context: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * See [`Pallet::include_pvf_check_statement`].
       **/
      includePvfCheckStatement: AugmentedSubmittable<(stmt: PolkadotPrimitivesV6PvfCheckStatement | { accept?: any; subject?: any; sessionIndex?: any; validatorIndex?: any } | string | Uint8Array, signature: PolkadotPrimitivesV6ValidatorAppSignature | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PolkadotPrimitivesV6PvfCheckStatement, PolkadotPrimitivesV6ValidatorAppSignature]>;
      /**
       * See [`Pallet::poke_unused_validation_code`].
       **/
      pokeUnusedValidationCode: AugmentedSubmittable<(validationCodeHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    parasDisputes: {
      /**
       * See [`Pallet::force_unfreeze`].
       **/
      forceUnfreeze: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    parasShared: {
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    parasSlashing: {
      /**
       * See [`Pallet::report_dispute_lost_unsigned`].
       **/
      reportDisputeLostUnsigned: AugmentedSubmittable<(disputeProof: PolkadotPrimitivesV6SlashingDisputeProof | { timeSlot?: any; kind?: any; validatorIndex?: any; validatorId?: any } | string | Uint8Array, keyOwnerProof: SpSessionMembershipProof | { session?: any; trieNodes?: any; validatorCount?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PolkadotPrimitivesV6SlashingDisputeProof, SpSessionMembershipProof]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    preimage: {
      /**
       * See [`Pallet::ensure_updated`].
       **/
      ensureUpdated: AugmentedSubmittable<(hashes: Vec<H256> | (H256 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<H256>]>;
      /**
       * See [`Pallet::note_preimage`].
       **/
      notePreimage: AugmentedSubmittable<(bytes: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::request_preimage`].
       **/
      requestPreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::unnote_preimage`].
       **/
      unnotePreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::unrequest_preimage`].
       **/
      unrequestPreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    proxy: {
      /**
       * See [`Pallet::add_proxy`].
       **/
      addProxy: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: StagingKusamaRuntimeProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | 'IdentityJudgement' | 'CancelProxy' | 'Auction' | 'Society' | 'NominationPools' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, StagingKusamaRuntimeProxyType, u32]>;
      /**
       * See [`Pallet::announce`].
       **/
      announce: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
      /**
       * See [`Pallet::create_pure`].
       **/
      createPure: AugmentedSubmittable<(proxyType: StagingKusamaRuntimeProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | 'IdentityJudgement' | 'CancelProxy' | 'Auction' | 'Society' | 'NominationPools' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array, index: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingKusamaRuntimeProxyType, u32, u16]>;
      /**
       * See [`Pallet::kill_pure`].
       **/
      killPure: AugmentedSubmittable<(spawner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: StagingKusamaRuntimeProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | 'IdentityJudgement' | 'CancelProxy' | 'Auction' | 'Society' | 'NominationPools' | number | Uint8Array, index: u16 | AnyNumber | Uint8Array, height: Compact<u32> | AnyNumber | Uint8Array, extIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, StagingKusamaRuntimeProxyType, u16, Compact<u32>, Compact<u32>]>;
      /**
       * See [`Pallet::proxy`].
       **/
      proxy: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, forceProxyType: Option<StagingKusamaRuntimeProxyType> | null | Uint8Array | StagingKusamaRuntimeProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | 'IdentityJudgement' | 'CancelProxy' | 'Auction' | 'Society' | 'NominationPools' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Option<StagingKusamaRuntimeProxyType>, Call]>;
      /**
       * See [`Pallet::proxy_announced`].
       **/
      proxyAnnounced: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, forceProxyType: Option<StagingKusamaRuntimeProxyType> | null | Uint8Array | StagingKusamaRuntimeProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | 'IdentityJudgement' | 'CancelProxy' | 'Auction' | 'Society' | 'NominationPools' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Option<StagingKusamaRuntimeProxyType>, Call]>;
      /**
       * See [`Pallet::reject_announcement`].
       **/
      rejectAnnouncement: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
      /**
       * See [`Pallet::remove_announcement`].
       **/
      removeAnnouncement: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
      /**
       * See [`Pallet::remove_proxies`].
       **/
      removeProxies: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::remove_proxy`].
       **/
      removeProxy: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: StagingKusamaRuntimeProxyType | 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | 'IdentityJudgement' | 'CancelProxy' | 'Auction' | 'Society' | 'NominationPools' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, StagingKusamaRuntimeProxyType, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    recovery: {
      /**
       * See [`Pallet::as_recovered`].
       **/
      asRecovered: AugmentedSubmittable<(account: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Call]>;
      /**
       * See [`Pallet::cancel_recovered`].
       **/
      cancelRecovered: AugmentedSubmittable<(account: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::claim_recovery`].
       **/
      claimRecovery: AugmentedSubmittable<(account: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::close_recovery`].
       **/
      closeRecovery: AugmentedSubmittable<(rescuer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::create_recovery`].
       **/
      createRecovery: AugmentedSubmittable<(friends: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], threshold: u16 | AnyNumber | Uint8Array, delayPeriod: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, u16, u32]>;
      /**
       * See [`Pallet::initiate_recovery`].
       **/
      initiateRecovery: AugmentedSubmittable<(account: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::remove_recovery`].
       **/
      removeRecovery: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::set_recovered`].
       **/
      setRecovered: AugmentedSubmittable<(lost: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, rescuer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress]>;
      /**
       * See [`Pallet::vouch_recovery`].
       **/
      vouchRecovery: AugmentedSubmittable<(lost: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, rescuer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    referenda: {
      /**
       * See [`Pallet::cancel`].
       **/
      cancel: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::kill`].
       **/
      kill: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::nudge_referendum`].
       **/
      nudgeReferendum: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::one_fewer_deciding`].
       **/
      oneFewerDeciding: AugmentedSubmittable<(track: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16]>;
      /**
       * See [`Pallet::place_decision_deposit`].
       **/
      placeDecisionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::refund_decision_deposit`].
       **/
      refundDecisionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::refund_submission_deposit`].
       **/
      refundSubmissionDeposit: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_metadata`].
       **/
      setMetadata: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array, maybeHash: Option<H256> | null | Uint8Array | H256 | string) => SubmittableExtrinsic<ApiType>, [u32, Option<H256>]>;
      /**
       * See [`Pallet::submit`].
       **/
      submit: AugmentedSubmittable<(proposalOrigin: StagingKusamaRuntimeOriginCaller | { system: any } | { Void: any } | { Origins: any } | { ParachainsOrigin: any } | { XcmPallet: any } | string | Uint8Array, proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array, enactmentMoment: FrameSupportScheduleDispatchTime | { At: any } | { After: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingKusamaRuntimeOriginCaller, FrameSupportPreimagesBounded, FrameSupportScheduleDispatchTime]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    registrar: {
      /**
       * See [`Pallet::add_lock`].
       **/
      addLock: AugmentedSubmittable<(para: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::deregister`].
       **/
      deregister: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::force_register`].
       **/
      forceRegister: AugmentedSubmittable<(who: AccountId32 | string | Uint8Array, deposit: u128 | AnyNumber | Uint8Array, id: u32 | AnyNumber | Uint8Array, genesisHead: Bytes | string | Uint8Array, validationCode: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u128, u32, Bytes, Bytes]>;
      /**
       * See [`Pallet::register`].
       **/
      register: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, genesisHead: Bytes | string | Uint8Array, validationCode: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Bytes, Bytes]>;
      /**
       * See [`Pallet::remove_lock`].
       **/
      removeLock: AugmentedSubmittable<(para: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::reserve`].
       **/
      reserve: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::schedule_code_upgrade`].
       **/
      scheduleCodeUpgrade: AugmentedSubmittable<(para: u32 | AnyNumber | Uint8Array, newCode: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Bytes]>;
      /**
       * See [`Pallet::set_current_head`].
       **/
      setCurrentHead: AugmentedSubmittable<(para: u32 | AnyNumber | Uint8Array, newHead: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Bytes]>;
      /**
       * See [`Pallet::swap`].
       **/
      swap: AugmentedSubmittable<(id: u32 | AnyNumber | Uint8Array, other: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    scheduler: {
      /**
       * See [`Pallet::cancel`].
       **/
      cancel: AugmentedSubmittable<(when: u32 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * See [`Pallet::cancel_named`].
       **/
      cancelNamed: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed]>;
      /**
       * See [`Pallet::schedule`].
       **/
      schedule: AugmentedSubmittable<(when: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * See [`Pallet::schedule_after`].
       **/
      scheduleAfter: AugmentedSubmittable<(after: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * See [`Pallet::schedule_named`].
       **/
      scheduleNamed: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array, when: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed, u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * See [`Pallet::schedule_named_after`].
       **/
      scheduleNamedAfter: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array, after: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed, u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    session: {
      /**
       * See [`Pallet::purge_keys`].
       **/
      purgeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::set_keys`].
       **/
      setKeys: AugmentedSubmittable<(keys: StagingKusamaRuntimeSessionKeys | { grandpa?: any; babe?: any; paraValidator?: any; paraAssignment?: any; authorityDiscovery?: any; beefy?: any } | string | Uint8Array, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingKusamaRuntimeSessionKeys, Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    slots: {
      /**
       * See [`Pallet::clear_all_leases`].
       **/
      clearAllLeases: AugmentedSubmittable<(para: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::force_lease`].
       **/
      forceLease: AugmentedSubmittable<(para: u32 | AnyNumber | Uint8Array, leaser: AccountId32 | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, periodBegin: u32 | AnyNumber | Uint8Array, periodCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, AccountId32, u128, u32, u32]>;
      /**
       * See [`Pallet::trigger_onboard`].
       **/
      triggerOnboard: AugmentedSubmittable<(para: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    society: {
      /**
       * See [`Pallet::bestow_membership`].
       **/
      bestowMembership: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * See [`Pallet::bid`].
       **/
      bid: AugmentedSubmittable<(value: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::claim_membership`].
       **/
      claimMembership: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::cleanup_candidacy`].
       **/
      cleanupCandidacy: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array, max: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
      /**
       * See [`Pallet::cleanup_challenge`].
       **/
      cleanupChallenge: AugmentedSubmittable<(challengeRound: u32 | AnyNumber | Uint8Array, max: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * See [`Pallet::defender_vote`].
       **/
      defenderVote: AugmentedSubmittable<(approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [bool]>;
      /**
       * See [`Pallet::dissolve`].
       **/
      dissolve: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::drop_candidate`].
       **/
      dropCandidate: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * See [`Pallet::found_society`].
       **/
      foundSociety: AugmentedSubmittable<(founder: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, maxMembers: u32 | AnyNumber | Uint8Array, maxIntake: u32 | AnyNumber | Uint8Array, maxStrikes: u32 | AnyNumber | Uint8Array, candidateDeposit: u128 | AnyNumber | Uint8Array, rules: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32, u32, u32, u128, Bytes]>;
      /**
       * See [`Pallet::judge_suspended_member`].
       **/
      judgeSuspendedMember: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, forgive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, bool]>;
      /**
       * See [`Pallet::kick_candidate`].
       **/
      kickCandidate: AugmentedSubmittable<(candidate: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * See [`Pallet::payout`].
       **/
      payout: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::punish_skeptic`].
       **/
      punishSkeptic: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::resign_candidacy`].
       **/
      resignCandidacy: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::set_parameters`].
       **/
      setParameters: AugmentedSubmittable<(maxMembers: u32 | AnyNumber | Uint8Array, maxIntake: u32 | AnyNumber | Uint8Array, maxStrikes: u32 | AnyNumber | Uint8Array, candidateDeposit: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32, u32, u128]>;
      /**
       * See [`Pallet::unbid`].
       **/
      unbid: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::unvouch`].
       **/
      unvouch: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::vote`].
       **/
      vote: AugmentedSubmittable<(candidate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, bool]>;
      /**
       * See [`Pallet::vouch`].
       **/
      vouch: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: u128 | AnyNumber | Uint8Array, tip: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128, u128]>;
      /**
       * See [`Pallet::waive_repay`].
       **/
      waiveRepay: AugmentedSubmittable<(amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    staking: {
      /**
       * See [`Pallet::bond`].
       **/
      bond: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, payee: PalletStakingRewardDestination | { Staked: any } | { Stash: any } | { Controller: any } | { Account: any } | { None: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, PalletStakingRewardDestination]>;
      /**
       * See [`Pallet::bond_extra`].
       **/
      bondExtra: AugmentedSubmittable<(maxAdditional: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
      /**
       * See [`Pallet::cancel_deferred_slash`].
       **/
      cancelDeferredSlash: AugmentedSubmittable<(era: u32 | AnyNumber | Uint8Array, slashIndices: Vec<u32> | (u32 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [u32, Vec<u32>]>;
      /**
       * See [`Pallet::chill`].
       **/
      chill: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::chill_other`].
       **/
      chillOther: AugmentedSubmittable<(stash: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * See [`Pallet::deprecate_controller_batch`].
       **/
      deprecateControllerBatch: AugmentedSubmittable<(controllers: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * See [`Pallet::force_apply_min_commission`].
       **/
      forceApplyMinCommission: AugmentedSubmittable<(validatorStash: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * See [`Pallet::force_new_era`].
       **/
      forceNewEra: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::force_new_era_always`].
       **/
      forceNewEraAlways: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::force_no_eras`].
       **/
      forceNoEras: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::force_unstake`].
       **/
      forceUnstake: AugmentedSubmittable<(stash: AccountId32 | string | Uint8Array, numSlashingSpans: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
      /**
       * See [`Pallet::increase_validator_count`].
       **/
      increaseValidatorCount: AugmentedSubmittable<(additional: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::kick`].
       **/
      kick: AugmentedSubmittable<(who: Vec<MultiAddress> | (MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<MultiAddress>]>;
      /**
       * See [`Pallet::nominate`].
       **/
      nominate: AugmentedSubmittable<(targets: Vec<MultiAddress> | (MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<MultiAddress>]>;
      /**
       * See [`Pallet::payout_stakers`].
       **/
      payoutStakers: AugmentedSubmittable<(validatorStash: AccountId32 | string | Uint8Array, era: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
      /**
       * See [`Pallet::payout_stakers_by_page`].
       **/
      payoutStakersByPage: AugmentedSubmittable<(validatorStash: AccountId32 | string | Uint8Array, era: u32 | AnyNumber | Uint8Array, page: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32, u32]>;
      /**
       * See [`Pallet::reap_stash`].
       **/
      reapStash: AugmentedSubmittable<(stash: AccountId32 | string | Uint8Array, numSlashingSpans: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, u32]>;
      /**
       * See [`Pallet::rebond`].
       **/
      rebond: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
      /**
       * See [`Pallet::scale_validator_count`].
       **/
      scaleValidatorCount: AugmentedSubmittable<(factor: Percent | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Percent]>;
      /**
       * See [`Pallet::set_controller`].
       **/
      setController: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::set_invulnerables`].
       **/
      setInvulnerables: AugmentedSubmittable<(invulnerables: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * See [`Pallet::set_min_commission`].
       **/
      setMinCommission: AugmentedSubmittable<(updated: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Perbill]>;
      /**
       * See [`Pallet::set_payee`].
       **/
      setPayee: AugmentedSubmittable<(payee: PalletStakingRewardDestination | { Staked: any } | { Stash: any } | { Controller: any } | { Account: any } | { None: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletStakingRewardDestination]>;
      /**
       * See [`Pallet::set_staking_configs`].
       **/
      setStakingConfigs: AugmentedSubmittable<(minNominatorBond: PalletStakingPalletConfigOpU128 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, minValidatorBond: PalletStakingPalletConfigOpU128 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, maxNominatorCount: PalletStakingPalletConfigOpU32 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, maxValidatorCount: PalletStakingPalletConfigOpU32 | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, chillThreshold: PalletStakingPalletConfigOpPercent | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array, minCommission: PalletStakingPalletConfigOpPerbill | { Noop: any } | { Set: any } | { Remove: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletStakingPalletConfigOpU128, PalletStakingPalletConfigOpU128, PalletStakingPalletConfigOpU32, PalletStakingPalletConfigOpU32, PalletStakingPalletConfigOpPercent, PalletStakingPalletConfigOpPerbill]>;
      /**
       * See [`Pallet::set_validator_count`].
       **/
      setValidatorCount: AugmentedSubmittable<(updated: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::unbond`].
       **/
      unbond: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>]>;
      /**
       * See [`Pallet::update_payee`].
       **/
      updatePayee: AugmentedSubmittable<(controller: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * See [`Pallet::validate`].
       **/
      validate: AugmentedSubmittable<(prefs: PalletStakingValidatorPrefs | { commission?: any; blocked?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletStakingValidatorPrefs]>;
      /**
       * See [`Pallet::withdraw_unbonded`].
       **/
      withdrawUnbonded: AugmentedSubmittable<(numSlashingSpans: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    stateTrieMigration: {
      /**
       * See [`Pallet::continue_migrate`].
       **/
      continueMigrate: AugmentedSubmittable<(limits: PalletStateTrieMigrationMigrationLimits | { size_?: any; item?: any } | string | Uint8Array, realSizeUpper: u32 | AnyNumber | Uint8Array, witnessTask: PalletStateTrieMigrationMigrationTask | { progressTop?: any; progressChild?: any; size_?: any; topItems?: any; childItems?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletStateTrieMigrationMigrationLimits, u32, PalletStateTrieMigrationMigrationTask]>;
      /**
       * See [`Pallet::control_auto_migration`].
       **/
      controlAutoMigration: AugmentedSubmittable<(maybeConfig: Option<PalletStateTrieMigrationMigrationLimits> | null | Uint8Array | PalletStateTrieMigrationMigrationLimits | { size_?: any; item?: any } | string) => SubmittableExtrinsic<ApiType>, [Option<PalletStateTrieMigrationMigrationLimits>]>;
      /**
       * See [`Pallet::force_set_progress`].
       **/
      forceSetProgress: AugmentedSubmittable<(progressTop: PalletStateTrieMigrationProgress | { ToStart: any } | { LastKey: any } | { Complete: any } | string | Uint8Array, progressChild: PalletStateTrieMigrationProgress | { ToStart: any } | { LastKey: any } | { Complete: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletStateTrieMigrationProgress, PalletStateTrieMigrationProgress]>;
      /**
       * See [`Pallet::migrate_custom_child`].
       **/
      migrateCustomChild: AugmentedSubmittable<(root: Bytes | string | Uint8Array, childKeys: Vec<Bytes> | (Bytes | string | Uint8Array)[], totalSize: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, Vec<Bytes>, u32]>;
      /**
       * See [`Pallet::migrate_custom_top`].
       **/
      migrateCustomTop: AugmentedSubmittable<(keys: Vec<Bytes> | (Bytes | string | Uint8Array)[], witnessSize: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<Bytes>, u32]>;
      /**
       * See [`Pallet::set_signed_max_limits`].
       **/
      setSignedMaxLimits: AugmentedSubmittable<(limits: PalletStateTrieMigrationMigrationLimits | { size_?: any; item?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletStateTrieMigrationMigrationLimits]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    system: {
      /**
       * See [`Pallet::apply_authorized_upgrade`].
       **/
      applyAuthorizedUpgrade: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::authorize_upgrade`].
       **/
      authorizeUpgrade: AugmentedSubmittable<(codeHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::authorize_upgrade_without_checks`].
       **/
      authorizeUpgradeWithoutChecks: AugmentedSubmittable<(codeHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::kill_prefix`].
       **/
      killPrefix: AugmentedSubmittable<(prefix: Bytes | string | Uint8Array, subkeys: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, u32]>;
      /**
       * See [`Pallet::kill_storage`].
       **/
      killStorage: AugmentedSubmittable<(keys: Vec<Bytes> | (Bytes | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Bytes>]>;
      /**
       * See [`Pallet::remark`].
       **/
      remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::remark_with_event`].
       **/
      remarkWithEvent: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::set_code`].
       **/
      setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::set_code_without_checks`].
       **/
      setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::set_heap_pages`].
       **/
      setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      /**
       * See [`Pallet::set_storage`].
       **/
      setStorage: AugmentedSubmittable<(items: Vec<ITuple<[Bytes, Bytes]>> | ([Bytes | string | Uint8Array, Bytes | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[Bytes, Bytes]>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    timestamp: {
      /**
       * See [`Pallet::set`].
       **/
      set: AugmentedSubmittable<(now: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u64>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    treasury: {
      /**
       * See [`Pallet::approve_proposal`].
       **/
      approveProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::check_status`].
       **/
      checkStatus: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::payout`].
       **/
      payout: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::propose_spend`].
       **/
      proposeSpend: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress]>;
      /**
       * See [`Pallet::reject_proposal`].
       **/
      rejectProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::remove_approval`].
       **/
      removeApproval: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::spend`].
       **/
      spend: AugmentedSubmittable<(assetKind: PolkadotRuntimeCommonImplsVersionedLocatableAsset | { V3: any } | { V4: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array, beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, validFrom: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [PolkadotRuntimeCommonImplsVersionedLocatableAsset, Compact<u128>, XcmVersionedLocation, Option<u32>]>;
      /**
       * See [`Pallet::spend_local`].
       **/
      spendLocal: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress]>;
      /**
       * See [`Pallet::void_spend`].
       **/
      voidSpend: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    utility: {
      /**
       * See [`Pallet::as_derivative`].
       **/
      asDerivative: AugmentedSubmittable<(index: u16 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Call]>;
      /**
       * See [`Pallet::batch`].
       **/
      batch: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * See [`Pallet::batch_all`].
       **/
      batchAll: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * See [`Pallet::dispatch_as`].
       **/
      dispatchAs: AugmentedSubmittable<(asOrigin: StagingKusamaRuntimeOriginCaller | { system: any } | { Void: any } | { Origins: any } | { ParachainsOrigin: any } | { XcmPallet: any } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingKusamaRuntimeOriginCaller, Call]>;
      /**
       * See [`Pallet::force_batch`].
       **/
      forceBatch: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * See [`Pallet::with_weight`].
       **/
      withWeight: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array, weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    vesting: {
      /**
       * See [`Pallet::force_remove_vesting_schedule`].
       **/
      forceRemoveVestingSchedule: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, scheduleIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32]>;
      /**
       * See [`Pallet::force_vested_transfer`].
       **/
      forceVestedTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, schedule: PalletVestingVestingInfo | { locked?: any; perBlock?: any; startingBlock?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, PalletVestingVestingInfo]>;
      /**
       * See [`Pallet::merge_schedules`].
       **/
      mergeSchedules: AugmentedSubmittable<(schedule1Index: u32 | AnyNumber | Uint8Array, schedule2Index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * See [`Pallet::vest`].
       **/
      vest: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::vested_transfer`].
       **/
      vestedTransfer: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, schedule: PalletVestingVestingInfo | { locked?: any; perBlock?: any; startingBlock?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, PalletVestingVestingInfo]>;
      /**
       * See [`Pallet::vest_other`].
       **/
      vestOther: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    voterList: {
      /**
       * See [`Pallet::put_in_front_of`].
       **/
      putInFrontOf: AugmentedSubmittable<(lighter: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::put_in_front_of_other`].
       **/
      putInFrontOfOther: AugmentedSubmittable<(heavier: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, lighter: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress]>;
      /**
       * See [`Pallet::rebag`].
       **/
      rebag: AugmentedSubmittable<(dislocated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    whitelist: {
      /**
       * See [`Pallet::dispatch_whitelisted_call`].
       **/
      dispatchWhitelistedCall: AugmentedSubmittable<(callHash: H256 | string | Uint8Array, callEncodedLen: u32 | AnyNumber | Uint8Array, callWeightWitness: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, u32, SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::dispatch_whitelisted_call_with_preimage`].
       **/
      dispatchWhitelistedCallWithPreimage: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
      /**
       * See [`Pallet::remove_whitelisted_call`].
       **/
      removeWhitelistedCall: AugmentedSubmittable<(callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::whitelist_call`].
       **/
      whitelistCall: AugmentedSubmittable<(callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    xcmPallet: {
      /**
       * See [`Pallet::claim_assets`].
       **/
      claimAssets: AugmentedSubmittable<(assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedAssets, XcmVersionedLocation]>;
      /**
       * See [`Pallet::execute`].
       **/
      execute: AugmentedSubmittable<(message: XcmVersionedXcm | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedXcm, SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::force_default_xcm_version`].
       **/
      forceDefaultXcmVersion: AugmentedSubmittable<(maybeXcmVersion: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Option<u32>]>;
      /**
       * See [`Pallet::force_subscribe_version_notify`].
       **/
      forceSubscribeVersionNotify: AugmentedSubmittable<(location: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation]>;
      /**
       * See [`Pallet::force_suspension`].
       **/
      forceSuspension: AugmentedSubmittable<(suspended: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [bool]>;
      /**
       * See [`Pallet::force_unsubscribe_version_notify`].
       **/
      forceUnsubscribeVersionNotify: AugmentedSubmittable<(location: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation]>;
      /**
       * See [`Pallet::force_xcm_version`].
       **/
      forceXcmVersion: AugmentedSubmittable<(location: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, version: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, u32]>;
      /**
       * See [`Pallet::limited_reserve_transfer_assets`].
       **/
      limitedReserveTransferAssets: AugmentedSubmittable<(dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, XcmVersionedLocation, XcmVersionedAssets, u32, XcmV3WeightLimit]>;
      /**
       * See [`Pallet::limited_teleport_assets`].
       **/
      limitedTeleportAssets: AugmentedSubmittable<(dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, XcmVersionedLocation, XcmVersionedAssets, u32, XcmV3WeightLimit]>;
      /**
       * See [`Pallet::reserve_transfer_assets`].
       **/
      reserveTransferAssets: AugmentedSubmittable<(dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, XcmVersionedLocation, XcmVersionedAssets, u32]>;
      /**
       * See [`Pallet::send`].
       **/
      send: AugmentedSubmittable<(dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, message: XcmVersionedXcm | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, XcmVersionedXcm]>;
      /**
       * See [`Pallet::teleport_assets`].
       **/
      teleportAssets: AugmentedSubmittable<(dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, XcmVersionedLocation, XcmVersionedAssets, u32]>;
      /**
       * See [`Pallet::transfer_assets`].
       **/
      transferAssets: AugmentedSubmittable<(dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, XcmVersionedLocation, XcmVersionedAssets, u32, XcmV3WeightLimit]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
  } // AugmentedSubmittables
} // declare module

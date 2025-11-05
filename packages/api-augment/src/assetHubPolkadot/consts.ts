// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/consts';

import type { ApiTypes, AugmentedConst } from '@polkadot/api-base/types';
import type { Bytes, Option, Vec, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { Codec, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Perbill, Permill } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportPalletId, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, PalletReferendaTrackDetails, SpVersionRuntimeVersion, SpWeightsRuntimeDbWeight, SpWeightsWeightV2Weight, StagingXcmV5Junctions, StagingXcmV5Location } from '@polkadot/types/lookup';

export type __AugmentedConst<ApiType extends ApiTypes> = AugmentedConst<ApiType>;

declare module '@polkadot/api-base/types/consts' {
  interface AugmentedConsts<ApiType extends ApiTypes> {
    assetConversion: {
      /**
       * A fee to withdraw the liquidity.
       **/
      liquidityWithdrawalFee: Permill & AugmentedConst<ApiType>;
      /**
       * A % the liquidity providers will take of every swap. Represents 10ths of a percent.
       **/
      lpFee: u32 & AugmentedConst<ApiType>;
      /**
       * The max number of hops in a swap.
       **/
      maxSwapPathLength: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum LP token amount that could be minted. Ameliorates rounding errors.
       **/
      mintMinLiquidity: u128 & AugmentedConst<ApiType>;
      /**
       * The pallet's id, used for deriving its sovereign account ID.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * A one-time fee to setup the pool.
       **/
      poolSetupFee: u128 & AugmentedConst<ApiType>;
      /**
       * Asset class from [`Config::Assets`] used to pay the [`Config::PoolSetupFee`].
       **/
      poolSetupFeeAsset: StagingXcmV5Location & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    assets: {
      /**
       * The amount of funds that must be reserved when creating a new approval.
       **/
      approvalDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of funds that must be reserved for a non-provider asset account to be
       * maintained.
       **/
      assetAccountDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved for an asset.
       **/
      assetDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved when adding metadata to your asset.
       **/
      metadataDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The additional funds that must be reserved for the number of bytes you store in your
       * metadata.
       **/
      metadataDepositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * Max number of items to destroy per `destroy_accounts` and `destroy_approvals` call.
       * 
       * Must be configured to result in a weight that makes each call fit in a block.
       **/
      removeItemsLimit: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of a name or symbol stored on-chain.
       **/
      stringLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    aura: {
      /**
       * The slot duration Aura should run with, expressed in milliseconds.
       * The effective value of this type should not change while the chain is running.
       * 
       * For backwards compatibility either use [`MinimumPeriodTimesTwo`] or a const.
       **/
      slotDuration: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    balances: {
      /**
       * The minimum amount required to keep an account open. MUST BE GREATER THAN ZERO!
       * 
       * If you *really* need it to be zero, you can enable the feature `insecure_zero_ed` for
       * this pallet. However, you do so at your own risk: this will open up a major DoS vector.
       * In case you have multiple sources of provider references, you may also get unexpected
       * behaviour if you set this to zero.
       * 
       * Bottom line: Do yourself a favour and make it at least one!
       **/
      existentialDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum number of individual freeze locks that can exist on an account at any time.
       **/
      maxFreezes: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of locks that should exist on an account.
       * Not strictly enforced, but used for weight estimation.
       * 
       * Use of locks is deprecated in favour of freezes. See `https://github.com/paritytech/substrate/pull/12951/`
       **/
      maxLocks: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of named reserves that can exist on an account.
       * 
       * Use of reserves is deprecated in favour of holds. See `https://github.com/paritytech/substrate/pull/12951/`
       **/
      maxReserves: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    bounties: {
      /**
       * The amount held on deposit for placing a bounty proposal.
       **/
      bountyDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The delay period for which a bounty beneficiary need to wait before claim the payout.
       **/
      bountyDepositPayoutDelay: u32 & AugmentedConst<ApiType>;
      /**
       * The time limit for a curator to act before a bounty expires.
       * 
       * The period that starts when a curator is approved, during which they must execute or
       * update the bounty via `extend_bounty_expiry`. If missed, the bounty expires, and the
       * curator may be slashed. If `BlockNumberFor::MAX`, bounties stay active indefinitely,
       * removing the need for `extend_bounty_expiry`.
       **/
      bountyUpdatePeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum value for a bounty.
       **/
      bountyValueMinimum: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum amount of funds that should be placed in a deposit for making a proposal.
       **/
      curatorDepositMax: Option<u128> & AugmentedConst<ApiType>;
      /**
       * Minimum amount of funds that should be placed in a deposit for making a proposal.
       **/
      curatorDepositMin: Option<u128> & AugmentedConst<ApiType>;
      /**
       * The curator deposit is calculated as a percentage of the curator fee.
       * 
       * This deposit has optional upper and lower bounds with `CuratorDepositMax` and
       * `CuratorDepositMin`.
       **/
      curatorDepositMultiplier: Permill & AugmentedConst<ApiType>;
      /**
       * The amount held on deposit per byte within the tip report reason or bounty description.
       **/
      dataDepositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum acceptable reason length.
       * 
       * Benchmarks depend on this value, be sure to update weights file when changing this value
       **/
      maximumReasonLength: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    childBounties: {
      /**
       * Minimum value for a child-bounty.
       **/
      childBountyValueMinimum: u128 & AugmentedConst<ApiType>;
      /**
       * Maximum number of child bounties that can be added to a parent bounty.
       **/
      maxActiveChildBountyCount: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    claims: {
      prefix: Bytes & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    collatorSelection: {
      kickThreshold: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum number of candidates that we should have.
       * 
       * This does not take into account the invulnerables.
       **/
      maxCandidates: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum number of invulnerables.
       **/
      maxInvulnerables: u32 & AugmentedConst<ApiType>;
      /**
       * Minimum number eligible collators. Should always be greater than zero. This includes
       * Invulnerable collators. This ensures that there will always be one collator who can
       * produce a block.
       **/
      minEligibleCollators: u32 & AugmentedConst<ApiType>;
      /**
       * Gets this pallet's derived pot account.
       **/
      potAccount: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Account Identifier from which the internal Pot is generated.
       **/
      potId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    convictionVoting: {
      /**
       * The maximum number of concurrent votes an account may have.
       * 
       * Also used to compute weight, an overly large value can lead to extrinsics with large
       * weight estimation: see `delegate` for instance.
       **/
      maxVotes: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum period of vote locking.
       * 
       * It should be no shorter than enactment period to ensure that in the case of an approval,
       * those successful voters are locked into the consequences that their votes entail.
       **/
      voteLockingPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    delegatedStaking: {
      /**
       * Injected identifier for the pallet.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Fraction of the slash that is rewarded to the caller of pending slash to the agent.
       **/
      slashRewardFraction: Perbill & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    foreignAssets: {
      /**
       * The amount of funds that must be reserved when creating a new approval.
       **/
      approvalDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of funds that must be reserved for a non-provider asset account to be
       * maintained.
       **/
      assetAccountDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved for an asset.
       **/
      assetDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved when adding metadata to your asset.
       **/
      metadataDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The additional funds that must be reserved for the number of bytes you store in your
       * metadata.
       **/
      metadataDepositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * Max number of items to destroy per `destroy_accounts` and `destroy_approvals` call.
       * 
       * Must be configured to result in a weight that makes each call fit in a block.
       **/
      removeItemsLimit: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of a name or symbol stored on-chain.
       **/
      stringLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    indices: {
      /**
       * The deposit needed for reserving an index.
       **/
      deposit: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    messageQueue: {
      /**
       * The size of the page; this implies the maximum message size which can be sent.
       * 
       * A good value depends on the expected message sizes, their weights, the weight that is
       * available for processing them and the maximal needed message size. The maximal message
       * size is slightly lower than this as defined by [`MaxMessageLenOf`].
       **/
      heapSize: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of weight (if any) to be used from remaining weight `on_idle` which
       * should be provided to the message queue for servicing enqueued items `on_idle`.
       * Useful for parachains to process messages at the same block they are received.
       * 
       * If `None`, it will not call `ServiceQueues::service_queues` in `on_idle`.
       **/
      idleMaxServiceWeight: Option<SpWeightsWeightV2Weight> & AugmentedConst<ApiType>;
      /**
       * The maximum number of stale pages (i.e. of overweight messages) allowed before culling
       * can happen. Once there are more stale pages than this, then historical pages may be
       * dropped, even if they contain unprocessed overweight messages.
       **/
      maxStale: u32 & AugmentedConst<ApiType>;
      /**
       * The amount of weight (if any) which should be provided to the message queue for
       * servicing enqueued items `on_initialize`.
       * 
       * This may be legitimately `None` in the case that you will call
       * `ServiceQueues::service_queues` manually or set [`Self::IdleMaxServiceWeight`] to have
       * it run in `on_idle`.
       **/
      serviceWeight: Option<SpWeightsWeightV2Weight> & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    multiBlockElection: {
      /**
       * The number of pages.
       * 
       * The snapshot is created with this many keys in the storage map.
       * 
       * The solutions may contain at MOST this many pages, but less pages are acceptable as
       * well.
       **/
      pages: u32 & AugmentedConst<ApiType>;
      /**
       * Duration of the signed phase.
       **/
      signedPhase: u32 & AugmentedConst<ApiType>;
      /**
       * Duration of the singed validation phase.
       * 
       * The duration of this should not be less than `T::Pages`, and there is no point in it
       * being more than `SignedPhase::MaxSubmission::get() * T::Pages`. TODO: integrity test for
       * it.
       **/
      signedValidationPhase: u32 & AugmentedConst<ApiType>;
      /**
       * The number of snapshot targets to fetch per block.
       **/
      targetSnapshotPerBlock: u32 & AugmentedConst<ApiType>;
      /**
       * Duration of the unsigned phase.
       **/
      unsignedPhase: u32 & AugmentedConst<ApiType>;
      /**
       * The number of snapshot voters to fetch per block.
       **/
      voterSnapshotPerBlock: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    multiBlockElectionVerifier: {
      /**
       * Maximum number of backers, per winner, per page.
       **/
      maxBackersPerWinner: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum number of backers, per winner, among all pages of an election.
       * 
       * This can only be checked at the very final step of verification.
       * 
       * NOTE: at the moment, we don't check this, and it is in place for future compatibility.
       **/
      maxBackersPerWinnerFinal: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum number of supports (aka. winners/validators/targets) that can be represented in
       * a page of results.
       **/
      maxWinnersPerPage: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum amount of improvement to the solution score that defines a solution as
       * "better".
       **/
      solutionImprovementThreshold: Perbill & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    multisig: {
      /**
       * The base amount of currency needed to reserve for creating a multisig execution or to
       * store a dispatch call for later.
       * 
       * This is held for an additional storage item whose value size is
       * `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
       * `32 + sizeof(AccountId)` bytes.
       **/
      depositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per unit threshold when creating a multisig execution.
       * 
       * This is held for adding 32 bytes more into a pre-existing storage value.
       **/
      depositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of signatories allowed in the multisig.
       **/
      maxSignatories: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    nfts: {
      /**
       * The maximum approvals an item could have.
       **/
      approvalsLimit: u32 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved when adding an attribute to an item.
       **/
      attributeDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved for collection.
       **/
      collectionDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The additional funds that must be reserved for the number of bytes store in metadata,
       * either "normal" metadata or attribute metadata.
       **/
      depositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * Disables some of pallet's features.
       **/
      features: u64 & AugmentedConst<ApiType>;
      /**
       * The maximum attributes approvals an item could have.
       **/
      itemAttributesApprovalsLimit: u32 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved for an item.
       **/
      itemDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum length of an attribute key.
       **/
      keyLimit: u32 & AugmentedConst<ApiType>;
      /**
       * The max number of attributes a user could set per call.
       **/
      maxAttributesPerCall: u32 & AugmentedConst<ApiType>;
      /**
       * The max duration in blocks for deadlines.
       **/
      maxDeadlineDuration: u32 & AugmentedConst<ApiType>;
      /**
       * The max number of tips a user could send.
       **/
      maxTips: u32 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved when adding metadata to your item.
       **/
      metadataDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum length of data stored on-chain.
       **/
      stringLimit: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of an attribute value.
       **/
      valueLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    nominationPools: {
      /**
       * The maximum pool points-to-balance ratio that an `open` pool can have.
       * 
       * This is important in the event slashing takes place and the pool's points-to-balance
       * ratio becomes disproportional.
       * 
       * Moreover, this relates to the `RewardCounter` type as well, as the arithmetic operations
       * are a function of number of points, and by setting this value to e.g. 10, you ensure
       * that the total number of points in the system are at most 10 times the total_issuance of
       * the chain, in the absolute worse case.
       * 
       * For a value of 10, the threshold would be a pool points-to-balance ratio of 10:1.
       * Such a scenario would also be the equivalent of the pool being 90% slashed.
       **/
      maxPointsToBalance: u8 & AugmentedConst<ApiType>;
      /**
       * The maximum number of simultaneous unbonding chunks that can exist per member.
       **/
      maxUnbonding: u32 & AugmentedConst<ApiType>;
      /**
       * The nomination pool's pallet id.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    parachainSystem: {
      /**
       * Returns the parachain ID we are running with.
       **/
      selfParaId: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    polkadotXcm: {
      /**
       * The latest supported version that we advertise. Generally just set it to
       * `pallet_xcm::CurrentXcmVersion`.
       **/
      advertisedXcmVersion: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of local XCM locks that a single account may have.
       **/
      maxLockers: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of consumers a single remote lock may have.
       **/
      maxRemoteLockConsumers: u32 & AugmentedConst<ApiType>;
      /**
       * This chain's Universal Location.
       **/
      universalLocation: StagingXcmV5Junctions & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    poolAssets: {
      /**
       * The amount of funds that must be reserved when creating a new approval.
       **/
      approvalDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of funds that must be reserved for a non-provider asset account to be
       * maintained.
       **/
      assetAccountDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved for an asset.
       **/
      assetDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved when adding metadata to your asset.
       **/
      metadataDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The additional funds that must be reserved for the number of bytes you store in your
       * metadata.
       **/
      metadataDepositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * Max number of items to destroy per `destroy_accounts` and `destroy_approvals` call.
       * 
       * Must be configured to result in a weight that makes each call fit in a block.
       **/
      removeItemsLimit: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of a name or symbol stored on-chain.
       **/
      stringLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    proxy: {
      /**
       * The base amount of currency needed to reserve for creating an announcement.
       * 
       * This is held when a new storage item holding a `Balance` is created (typically 16
       * bytes).
       **/
      announcementDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per announcement made.
       * 
       * This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
       * into a pre-existing storage value.
       **/
      announcementDepositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of time-delayed announcements that are allowed to be pending.
       **/
      maxPending: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum amount of proxies allowed for a single account.
       **/
      maxProxies: u32 & AugmentedConst<ApiType>;
      /**
       * The base amount of currency needed to reserve for creating a proxy.
       * 
       * This is held for an additional storage item whose value size is
       * `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
       **/
      proxyDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The amount of currency needed per proxy added.
       * 
       * This is held for adding 32 bytes plus an instance of `ProxyType` more into a
       * pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
       * into account `32 + proxy_type.encode().len()` bytes of data.
       **/
      proxyDepositFactor: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    referenda: {
      /**
       * Quantization level for the referendum wakeup scheduler. A higher number will result in
       * fewer storage reads/writes needed for smaller voters, but also result in delays to the
       * automatic referendum status changes. Explicit servicing instructions are unaffected.
       **/
      alarmInterval: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum size of the referendum queue for a single track.
       **/
      maxQueued: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum amount to be used as a deposit for a public referendum proposal.
       **/
      submissionDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * A list of tracks.
       * 
       * Note: if the tracks are dynamic, the value in the static metadata might be inaccurate.
       **/
      tracks: Vec<ITuple<[u16, PalletReferendaTrackDetails]>> & AugmentedConst<ApiType>;
      /**
       * The number of blocks after submission that a referendum must begin being decided by.
       * Once this passes, then anyone may cancel the referendum.
       **/
      undecidingTimeout: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    scheduler: {
      /**
       * The maximum weight that may be scheduled per block for any dispatchables.
       **/
      maximumWeight: SpWeightsWeightV2Weight & AugmentedConst<ApiType>;
      /**
       * The maximum number of scheduled calls in the queue for a single block.
       * 
       * NOTE:
       * + Dependent pallets' benchmarks might require a higher limit for the setting. Set a
       * higher limit under `runtime-benchmarks` feature.
       **/
      maxScheduledPerBlock: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    session: {
      /**
       * The amount to be held when setting keys.
       **/
      keyDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    staking: {
      /**
       * Number of eras that staked funds must remain bonded for.
       **/
      bondingDuration: u32 & AugmentedConst<ApiType>;
      /**
       * Number of eras to keep in history.
       * 
       * Following information is kept for eras in `[current_era -
       * HistoryDepth, current_era]`: `ErasValidatorPrefs`, `ErasValidatorReward`,
       * `ErasRewardPoints`, `ErasTotalStake`, `ClaimedRewards`,
       * `ErasStakersPaged`, `ErasStakersOverview`.
       * 
       * Must be more than the number of eras delayed by session.
       * I.e. active era must always be in history. I.e. `active_era >
       * current_era - history_depth` must be guaranteed.
       * 
       * If migrating an existing pallet from storage value to config value,
       * this should be set to same value or greater as in storage.
       **/
      historyDepth: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum allowed era duration in milliseconds.
       * 
       * This provides a defensive upper bound to cap the effective era duration, preventing
       * excessively long eras from causing runaway inflation (e.g., due to bugs). If the actual
       * era duration exceeds this value, it will be clamped to this maximum.
       * 
       * Example: For an ideal era duration of 24 hours (86,400,000 ms),
       * this can be set to 604,800,000 ms (7 days).
       **/
      maxEraDuration: u64 & AugmentedConst<ApiType>;
      /**
       * The maximum size of each `T::ExposurePage`.
       * 
       * An `ExposurePage` is weakly bounded to a maximum of `MaxExposurePageSize`
       * nominators.
       * 
       * For older non-paged exposure, a reward payout was restricted to the top
       * `MaxExposurePageSize` nominators. This is to limit the i/o cost for the
       * nominator payout.
       * 
       * Note: `MaxExposurePageSize` is used to bound `ClaimedRewards` and is unsafe to
       * reduce without handling it in a migration.
       **/
      maxExposurePageSize: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum number of invulnerable validators.
       **/
      maxInvulnerables: u32 & AugmentedConst<ApiType>;
      /**
       * Maximum number of storage items that can be pruned in a single call.
       * 
       * This controls how many storage items can be deleted in each call to `prune_era_step`.
       * This should be set to a conservative value (e.g., 100-500 items) to ensure pruning
       * doesn't consume too much block space. The actual weight is determined by benchmarks.
       **/
      maxPruningItems: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of `unlocking` chunks a [`StakingLedger`] can
       * have. Effectively determines how many unique eras a staker may be
       * unbonding in.
       * 
       * Note: `MaxUnlockingChunks` is used as the upper bound for the
       * `BoundedVec` item `StakingLedger.unlocking`. Setting this value
       * lower than the existing value can lead to inconsistencies in the
       * `StakingLedger` and will need to be handled properly in a runtime
       * migration. The test `reducing_max_unlocking_chunks_abrupt` shows
       * this effect.
       **/
      maxUnlockingChunks: u32 & AugmentedConst<ApiType>;
      /**
       * The absolute maximum of winner validators this pallet should return.
       * 
       * As this pallet supports multi-block election, the set of winner validators *per
       * election* is bounded by this type.
       **/
      maxValidatorSet: u32 & AugmentedConst<ApiType>;
      /**
       * Number of sessions before the end of an era when the election for the next era will
       * start.
       * 
       * - This determines how many sessions **before** the last session of the era the staking
       * election process should begin.
       * - The value is bounded between **1** (election starts at the beginning of the last
       * session) and `SessionsPerEra` (election starts at the beginning of the first session
       * of the era).
       * 
       * ### Example:
       * - If `SessionsPerEra = 6` and `PlanningEraOffset = 1`, the election starts at the
       * beginning of session `6 - 1 = 5`.
       * - If `PlanningEraOffset = 6`, the election starts at the beginning of session `6 - 6 =
       * 0`, meaning it starts at the very beginning of the era.
       **/
      planningEraOffset: u32 & AugmentedConst<ApiType>;
      /**
       * Number of sessions per era, as per the preferences of the **relay chain**.
       **/
      sessionsPerEra: u32 & AugmentedConst<ApiType>;
      /**
       * Number of eras that slashes are deferred by, after computation.
       * 
       * This should be less than the bonding duration. Set to 0 if slashes
       * should be applied immediately, without opportunity for intervention.
       **/
      slashDeferDuration: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    stateTrieMigration: {
      /**
       * Maximal number of bytes that a key can have.
       * 
       * FRAME itself does not limit the key length.
       * The concrete value must therefore depend on your storage usage.
       * A [`frame_support::storage::StorageNMap`] for example can have an arbitrary number of
       * keys which are then hashed and concatenated, resulting in arbitrarily long keys.
       * 
       * Use the *state migration RPC* to retrieve the length of the longest key in your
       * storage: <https://github.com/paritytech/substrate/issues/11642>
       * 
       * The migration will halt with a `Halted` event if this value is too small.
       * Since there is no real penalty from over-estimating, it is advised to use a large
       * value. The default is 512 byte.
       * 
       * Some key lengths for reference:
       * - [`frame_support::storage::StorageValue`]: 32 byte
       * - [`frame_support::storage::StorageMap`]: 64 byte
       * - [`frame_support::storage::StorageDoubleMap`]: 96 byte
       * 
       * For more info see
       * <https://www.shawntabrizi.com/blog/substrate/querying-substrate-storage-via-rpc/>
       **/
      maxKeyLen: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    system: {
      /**
       * Maximum number of block number to block hash mappings to keep (oldest pruned first).
       **/
      blockHashCount: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of a block (in bytes).
       **/
      blockLength: FrameSystemLimitsBlockLength & AugmentedConst<ApiType>;
      /**
       * Block & extrinsics weights: base values and limits.
       **/
      blockWeights: FrameSystemLimitsBlockWeights & AugmentedConst<ApiType>;
      /**
       * The weight of runtime database operations the runtime can invoke.
       **/
      dbWeight: SpWeightsRuntimeDbWeight & AugmentedConst<ApiType>;
      /**
       * The designated SS58 prefix of this chain.
       * 
       * This replaces the "ss58Format" property declared in the chain spec. Reason is
       * that the runtime should know about the prefix in order to make use of it as
       * an identifier of the chain.
       **/
      ss58Prefix: u16 & AugmentedConst<ApiType>;
      /**
       * Get the chain's in-code version.
       **/
      version: SpVersionRuntimeVersion & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    timestamp: {
      /**
       * The minimum period between blocks.
       * 
       * Be aware that this is different to the *expected* period that the block production
       * apparatus provides. Your chosen consensus system will generally work with this to
       * determine a sensible block time. For example, in the Aura pallet it will be double this
       * period on default settings.
       **/
      minimumPeriod: u64 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    transactionPayment: {
      /**
       * A fee multiplier for `Operational` extrinsics to compute "virtual tip" to boost their
       * `priority`
       * 
       * This value is multiplied by the `final_fee` to obtain a "virtual tip" that is later
       * added to a tip component in regular `priority` calculations.
       * It means that a `Normal` transaction can front-run a similarly-sized `Operational`
       * extrinsic (with no tip), by including a tip value greater than the virtual tip.
       * 
       * ```rust,ignore
       * // For `Normal`
       * let priority = priority_calc(tip);
       * 
       * // For `Operational`
       * let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
       * let priority = priority_calc(tip + virtual_tip);
       * ```
       * 
       * Note that since we use `final_fee` the multiplier applies also to the regular `tip`
       * sent with the transaction. So, not only does the transaction get a priority bump based
       * on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
       * transactions.
       **/
      operationalFeeMultiplier: u8 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    treasury: {
      /**
       * Percentage of spare funds (if any) that are burnt per spend period.
       **/
      burn: Permill & AugmentedConst<ApiType>;
      /**
       * DEPRECATED: associated with `spend_local` call and will be removed in May 2025.
       * Refer to <https://github.com/paritytech/polkadot-sdk/pull/5961> for migration to `spend`.
       * 
       * The maximum number of approvals that can wait in the spending queue.
       * 
       * NOTE: This parameter is also used within the Bounties Pallet extension if enabled.
       **/
      maxApprovals: u32 & AugmentedConst<ApiType>;
      /**
       * The treasury's pallet id, used for deriving its sovereign account ID.
       **/
      palletId: FrameSupportPalletId & AugmentedConst<ApiType>;
      /**
       * The period during which an approved treasury spend has to be claimed.
       **/
      payoutPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Gets this pallet's derived pot account.
       **/
      potAccount: AccountId32 & AugmentedConst<ApiType>;
      /**
       * Period between successive spends.
       **/
      spendPeriod: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    uniques: {
      /**
       * The basic amount of funds that must be reserved when adding an attribute to an item.
       **/
      attributeDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved for collection.
       **/
      collectionDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The additional funds that must be reserved for the number of bytes store in metadata,
       * either "normal" metadata or attribute metadata.
       **/
      depositPerByte: u128 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved for an item.
       **/
      itemDeposit: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum length of an attribute key.
       **/
      keyLimit: u32 & AugmentedConst<ApiType>;
      /**
       * The basic amount of funds that must be reserved when adding metadata to your item.
       **/
      metadataDepositBase: u128 & AugmentedConst<ApiType>;
      /**
       * The maximum length of data stored on-chain.
       **/
      stringLimit: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum length of an attribute value.
       **/
      valueLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    utility: {
      /**
       * The limit on the number of batched calls.
       **/
      batchedCallsLimit: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    vesting: {
      maxVestingSchedules: u32 & AugmentedConst<ApiType>;
      /**
       * The minimum amount transferred to call `vested_transfer`.
       **/
      minVestedTransfer: u128 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    voterList: {
      /**
       * The list of thresholds separating the various bags.
       * 
       * Ids are separated into unsorted bags according to their score. This specifies the
       * thresholds separating the bags. An id's bag is the largest bag for which the id's score
       * is less than or equal to its upper threshold.
       * 
       * When ids are iterated, higher bags are iterated completely before lower bags. This means
       * that iteration is _semi-sorted_: ids of higher score tend to come before ids of lower
       * score, but peer ids within a particular bag are sorted in insertion order.
       * 
       * # Expressing the constant
       * 
       * This constant must be sorted in strictly increasing order. Duplicate items are not
       * permitted.
       * 
       * There is an implied upper limit of `Score::MAX`; that value does not need to be
       * specified within the bag. For any two threshold lists, if one ends with
       * `Score::MAX`, the other one does not, and they are otherwise equal, the two
       * lists will behave identically.
       * 
       * # Calculation
       * 
       * It is recommended to generate the set of thresholds in a geometric series, such that
       * there exists some constant ratio such that `threshold[k + 1] == (threshold[k] *
       * constant_ratio).max(threshold[k] + 1)` for all `k`.
       * 
       * The helpers in the `/utils/frame/generate-bags` module can simplify this calculation.
       * 
       * # Examples
       * 
       * - If `BagThresholds::get().is_empty()`, then all ids are put into the same bag, and
       * iteration is strictly in insertion order.
       * - If `BagThresholds::get().len() == 64`, and the thresholds are determined according to
       * the procedure given above, then the constant ratio is equal to 2.
       * - If `BagThresholds::get().len() == 200`, and the thresholds are determined according to
       * the procedure given above, then the constant ratio is approximately equal to 1.248.
       * - If the threshold list begins `[1, 2, 3, ...]`, then an id with score 0 or 1 will fall
       * into bag 0, an id with score 2 will fall into bag 1, etc.
       * 
       * # Migration
       * 
       * In the event that this list ever changes, a copy of the old bags list must be retained.
       * With that `List::migrate` can be called, which will perform the appropriate migration.
       **/
      bagThresholds: Vec<u64> & AugmentedConst<ApiType>;
      /**
       * Maximum number of accounts that may be re-bagged automatically in `on_idle`.
       * 
       * A value of `0` (obtained by configuring `type MaxAutoRebagPerBlock = ();`) disables
       * the feature.
       **/
      maxAutoRebagPerBlock: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
    xcmpQueue: {
      /**
       * Maximal number of outbound XCMP channels that can have messages queued at the same time.
       * 
       * If this is reached, then no further messages can be sent to channels that do not yet
       * have a message queued. This should be set to the expected maximum of outbound channels
       * which is determined by [`Self::ChannelInfo`]. It is important to set this large enough,
       * since otherwise the congestion control protocol will not work as intended and messages
       * may be dropped. This value increases the PoV and should therefore not be picked too
       * high. Governance needs to pay attention to not open more channels than this value.
       **/
      maxActiveOutboundChannels: u32 & AugmentedConst<ApiType>;
      /**
       * The maximum number of inbound XCMP channels that can be suspended simultaneously.
       * 
       * Any further channel suspensions will fail and messages may get dropped without further
       * notice. Choosing a high value (1000) is okay; the trade-off that is described in
       * [`InboundXcmpSuspended`] still applies at that scale.
       **/
      maxInboundSuspended: u32 & AugmentedConst<ApiType>;
      /**
       * The maximal page size for HRMP message pages.
       * 
       * A lower limit can be set dynamically, but this is the hard-limit for the PoV worst case
       * benchmarking. The limit for the size of a message is slightly below this, since some
       * overhead is incurred for encoding the format.
       **/
      maxPageSize: u32 & AugmentedConst<ApiType>;
      /**
       * Generic const
       **/
      [key: string]: Codec;
    };
  } // AugmentedConsts
} // declare module

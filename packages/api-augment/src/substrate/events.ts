// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/events';

import type { ApiTypes, AugmentedEvent } from '@polkadot/api-base/types';
import type { Bytes, Null, Option, Result, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H160, H256, Perbill, Permill, Perquintill } from '@polkadot/types/interfaces/runtime';
import type { FrameSupportDispatchPostDispatchInfo, FrameSupportMessagesProcessMessageError, FrameSupportPreimagesBounded, FrameSupportTokensFungibleUnionOfNativeOrWithId, FrameSupportTokensMiscBalanceStatus, FrameSystemDispatchEventInfo, KitchensinkRuntimeOriginCaller, KitchensinkRuntimeProxyType, KitchensinkRuntimeRuntimeParametersKey, KitchensinkRuntimeRuntimeParametersValue, PalletAllianceCid, PalletAllianceUnscrupulousItem, PalletBrokerCoretimeInterfaceCoreAssignment, PalletBrokerRegionId, PalletBrokerScheduleItem, PalletContractsOrigin, PalletConvictionVotingTally, PalletConvictionVotingVoteAccountVote, PalletCoreFellowshipParamsTypeU128, PalletCoreFellowshipWish, PalletDemocracyMetadataOwner, PalletDemocracyVoteAccountVote, PalletDemocracyVoteThreshold, PalletElectionProviderMultiPhaseElectionCompute, PalletElectionProviderMultiPhasePhase, PalletImOnlineSr25519AppSr25519Public, PalletMultisigTimepoint, PalletNftsAttributeNamespace, PalletNftsPalletAttributes, PalletNftsPriceWithDirection, PalletNominationPoolsClaimPermission, PalletNominationPoolsCommissionChangeRate, PalletNominationPoolsCommissionClaimPermission, PalletNominationPoolsPoolState, PalletProxyDepositKind, PalletRankedCollectiveTally, PalletRankedCollectiveVoteRecord, PalletSafeModeExitReason, PalletSocietyGroupParams, PalletStakingForcing, PalletStakingRewardDestination, PalletStakingValidatorPrefs, PalletStateTrieMigrationError, PalletStateTrieMigrationMigrationCompute, SpConsensusGrandpaAppPublic, SpNposElectionsElectionScore, SpRuntimeDispatchError, SpRuntimeDispatchErrorWithPostInfo, SpStatementStoreStatement, SpWeightsWeightV2Weight } from '@polkadot/types/lookup';

export type __AugmentedEvent<ApiType extends ApiTypes> = AugmentedEvent<ApiType>;

declare module '@polkadot/api-base/types/events' {
  interface AugmentedEvents<ApiType extends ApiTypes> {
    alliance: {
      /**
       * Alliance disbanded. Includes number deleted members and unreserved deposits.
       **/
      AllianceDisbanded: AugmentedEvent<ApiType, [fellowMembers: u32, allyMembers: u32, unreserved: u32], { fellowMembers: u32, allyMembers: u32, unreserved: u32 }>;
      /**
       * An ally has been elevated to Fellow.
       **/
      AllyElevated: AugmentedEvent<ApiType, [ally: AccountId32], { ally: AccountId32 }>;
      /**
       * A new announcement has been proposed.
       **/
      Announced: AugmentedEvent<ApiType, [announcement: PalletAllianceCid], { announcement: PalletAllianceCid }>;
      /**
       * An on-chain announcement has been removed.
       **/
      AnnouncementRemoved: AugmentedEvent<ApiType, [announcement: PalletAllianceCid], { announcement: PalletAllianceCid }>;
      /**
       * A Fellow abdicated their voting rights. They are now an Ally.
       **/
      FellowAbdicated: AugmentedEvent<ApiType, [fellow: AccountId32], { fellow: AccountId32 }>;
      /**
       * A member has been kicked out with its deposit slashed.
       **/
      MemberKicked: AugmentedEvent<ApiType, [member: AccountId32, slashed: Option<u128>], { member: AccountId32, slashed: Option<u128> }>;
      /**
       * A member has retired with its deposit unreserved.
       **/
      MemberRetired: AugmentedEvent<ApiType, [member: AccountId32, unreserved: Option<u128>], { member: AccountId32, unreserved: Option<u128> }>;
      /**
       * A member gave retirement notice and their retirement period started.
       **/
      MemberRetirementPeriodStarted: AugmentedEvent<ApiType, [member: AccountId32], { member: AccountId32 }>;
      /**
       * Some accounts have been initialized as members (fellows/allies).
       **/
      MembersInitialized: AugmentedEvent<ApiType, [fellows: Vec<AccountId32>, allies: Vec<AccountId32>], { fellows: Vec<AccountId32>, allies: Vec<AccountId32> }>;
      /**
       * An account has been added as an Ally and reserved its deposit.
       **/
      NewAllyJoined: AugmentedEvent<ApiType, [ally: AccountId32, nominator: Option<AccountId32>, reserved: Option<u128>], { ally: AccountId32, nominator: Option<AccountId32>, reserved: Option<u128> }>;
      /**
       * A new rule has been set.
       **/
      NewRuleSet: AugmentedEvent<ApiType, [rule: PalletAllianceCid], { rule: PalletAllianceCid }>;
      /**
       * Accounts or websites have been added into the list of unscrupulous items.
       **/
      UnscrupulousItemAdded: AugmentedEvent<ApiType, [items: Vec<PalletAllianceUnscrupulousItem>], { items: Vec<PalletAllianceUnscrupulousItem> }>;
      /**
       * Accounts or websites have been removed from the list of unscrupulous items.
       **/
      UnscrupulousItemRemoved: AugmentedEvent<ApiType, [items: Vec<PalletAllianceUnscrupulousItem>], { items: Vec<PalletAllianceUnscrupulousItem> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    allianceMotion: {
      /**
       * A motion was approved by the required threshold.
       **/
      Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       **/
      Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256, yes: u32, no: u32 }>;
      /**
       * A motion was not approved by the required threshold.
       **/
      Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       **/
      Executed: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A proposal was killed.
       **/
      Killed: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       **/
      MemberExecuted: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * Some cost for storing a proposal was burned.
       **/
      ProposalCostBurned: AugmentedEvent<ApiType, [proposalHash: H256, who: AccountId32], { proposalHash: H256, who: AccountId32 }>;
      /**
       * Some cost for storing a proposal was released.
       **/
      ProposalCostReleased: AugmentedEvent<ApiType, [proposalHash: H256, who: AccountId32], { proposalHash: H256, who: AccountId32 }>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       **/
      Proposed: AugmentedEvent<ApiType, [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32], { account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32 }>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       **/
      Voted: AugmentedEvent<ApiType, [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32], { account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    assetConversion: {
      /**
       * A successful call of the `AddLiquidity` extrinsic will create this event.
       **/
      LiquidityAdded: AugmentedEvent<ApiType, [who: AccountId32, mintTo: AccountId32, poolId: ITuple<[FrameSupportTokensFungibleUnionOfNativeOrWithId, FrameSupportTokensFungibleUnionOfNativeOrWithId]>, amount1Provided: u128, amount2Provided: u128, lpToken: u32, lpTokenMinted: u128], { who: AccountId32, mintTo: AccountId32, poolId: ITuple<[FrameSupportTokensFungibleUnionOfNativeOrWithId, FrameSupportTokensFungibleUnionOfNativeOrWithId]>, amount1Provided: u128, amount2Provided: u128, lpToken: u32, lpTokenMinted: u128 }>;
      /**
       * A successful call of the `RemoveLiquidity` extrinsic will create this event.
       **/
      LiquidityRemoved: AugmentedEvent<ApiType, [who: AccountId32, withdrawTo: AccountId32, poolId: ITuple<[FrameSupportTokensFungibleUnionOfNativeOrWithId, FrameSupportTokensFungibleUnionOfNativeOrWithId]>, amount1: u128, amount2: u128, lpToken: u32, lpTokenBurned: u128, withdrawalFee: Permill], { who: AccountId32, withdrawTo: AccountId32, poolId: ITuple<[FrameSupportTokensFungibleUnionOfNativeOrWithId, FrameSupportTokensFungibleUnionOfNativeOrWithId]>, amount1: u128, amount2: u128, lpToken: u32, lpTokenBurned: u128, withdrawalFee: Permill }>;
      /**
       * A successful call of the `CreatePool` extrinsic will create this event.
       **/
      PoolCreated: AugmentedEvent<ApiType, [creator: AccountId32, poolId: ITuple<[FrameSupportTokensFungibleUnionOfNativeOrWithId, FrameSupportTokensFungibleUnionOfNativeOrWithId]>, poolAccount: AccountId32, lpToken: u32], { creator: AccountId32, poolId: ITuple<[FrameSupportTokensFungibleUnionOfNativeOrWithId, FrameSupportTokensFungibleUnionOfNativeOrWithId]>, poolAccount: AccountId32, lpToken: u32 }>;
      /**
       * Assets have been converted from one to another.
       **/
      SwapCreditExecuted: AugmentedEvent<ApiType, [amountIn: u128, amountOut: u128, path: Vec<ITuple<[FrameSupportTokensFungibleUnionOfNativeOrWithId, u128]>>], { amountIn: u128, amountOut: u128, path: Vec<ITuple<[FrameSupportTokensFungibleUnionOfNativeOrWithId, u128]>> }>;
      /**
       * Assets have been converted from one to another. Both `SwapExactTokenForToken`
       * and `SwapTokenForExactToken` will generate this event.
       **/
      SwapExecuted: AugmentedEvent<ApiType, [who: AccountId32, sendTo: AccountId32, amountIn: u128, amountOut: u128, path: Vec<ITuple<[FrameSupportTokensFungibleUnionOfNativeOrWithId, u128]>>], { who: AccountId32, sendTo: AccountId32, amountIn: u128, amountOut: u128, path: Vec<ITuple<[FrameSupportTokensFungibleUnionOfNativeOrWithId, u128]>> }>;
      /**
       * Pool has been touched in order to fulfill operational requirements.
       **/
      Touched: AugmentedEvent<ApiType, [poolId: ITuple<[FrameSupportTokensFungibleUnionOfNativeOrWithId, FrameSupportTokensFungibleUnionOfNativeOrWithId]>, who: AccountId32], { poolId: ITuple<[FrameSupportTokensFungibleUnionOfNativeOrWithId, FrameSupportTokensFungibleUnionOfNativeOrWithId]>, who: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    assetConversionMigration: {
      /**
       * Indicates that a pool has been migrated to the new account ID.
       **/
      MigratedToNewAccount: AugmentedEvent<ApiType, [poolId: ITuple<[FrameSupportTokensFungibleUnionOfNativeOrWithId, FrameSupportTokensFungibleUnionOfNativeOrWithId]>, priorAccount: AccountId32, newAccount: AccountId32], { poolId: ITuple<[FrameSupportTokensFungibleUnionOfNativeOrWithId, FrameSupportTokensFungibleUnionOfNativeOrWithId]>, priorAccount: AccountId32, newAccount: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    assetConversionTxPayment: {
      /**
       * A swap of the refund in native currency back to asset failed.
       **/
      AssetRefundFailed: AugmentedEvent<ApiType, [nativeAmountKept: u128], { nativeAmountKept: u128 }>;
      /**
       * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
       * has been paid by `who` in an asset `asset_id`.
       **/
      AssetTxFeePaid: AugmentedEvent<ApiType, [who: AccountId32, actualFee: u128, tip: u128, assetId: FrameSupportTokensFungibleUnionOfNativeOrWithId], { who: AccountId32, actualFee: u128, tip: u128, assetId: FrameSupportTokensFungibleUnionOfNativeOrWithId }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    assetRate: {
      AssetRateCreated: AugmentedEvent<ApiType, [assetKind: FrameSupportTokensFungibleUnionOfNativeOrWithId, rate: u128], { assetKind: FrameSupportTokensFungibleUnionOfNativeOrWithId, rate: u128 }>;
      AssetRateRemoved: AugmentedEvent<ApiType, [assetKind: FrameSupportTokensFungibleUnionOfNativeOrWithId], { assetKind: FrameSupportTokensFungibleUnionOfNativeOrWithId }>;
      AssetRateUpdated: AugmentedEvent<ApiType, [assetKind: FrameSupportTokensFungibleUnionOfNativeOrWithId, old: u128, new_: u128], { assetKind: FrameSupportTokensFungibleUnionOfNativeOrWithId, old: u128, new_: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    assetRewards: {
      /**
       * A pool admin was modified.
       **/
      PoolAdminModified: AugmentedEvent<ApiType, [poolId: u32, newAdmin: AccountId32], { poolId: u32, newAdmin: AccountId32 }>;
      /**
       * A pool information was cleared after it's completion.
       **/
      PoolCleanedUp: AugmentedEvent<ApiType, [poolId: u32], { poolId: u32 }>;
      /**
       * A new reward pool was created.
       **/
      PoolCreated: AugmentedEvent<ApiType, [creator: AccountId32, poolId: u32, stakedAssetId: FrameSupportTokensFungibleUnionOfNativeOrWithId, rewardAssetId: FrameSupportTokensFungibleUnionOfNativeOrWithId, rewardRatePerBlock: u128, expiryBlock: u32, admin: AccountId32], { creator: AccountId32, poolId: u32, stakedAssetId: FrameSupportTokensFungibleUnionOfNativeOrWithId, rewardAssetId: FrameSupportTokensFungibleUnionOfNativeOrWithId, rewardRatePerBlock: u128, expiryBlock: u32, admin: AccountId32 }>;
      /**
       * A pool expiry block was modified by the admin.
       **/
      PoolExpiryBlockModified: AugmentedEvent<ApiType, [poolId: u32, newExpiryBlock: u32], { poolId: u32, newExpiryBlock: u32 }>;
      /**
       * A pool reward rate was modified by the admin.
       **/
      PoolRewardRateModified: AugmentedEvent<ApiType, [poolId: u32, newRewardRatePerBlock: u128], { poolId: u32, newRewardRatePerBlock: u128 }>;
      /**
       * An account harvested some rewards.
       **/
      RewardsHarvested: AugmentedEvent<ApiType, [caller: AccountId32, staker: AccountId32, poolId: u32, amount: u128], { caller: AccountId32, staker: AccountId32, poolId: u32, amount: u128 }>;
      /**
       * An account staked some tokens in a pool.
       **/
      Staked: AugmentedEvent<ApiType, [staker: AccountId32, poolId: u32, amount: u128], { staker: AccountId32, poolId: u32, amount: u128 }>;
      /**
       * An account unstaked some tokens from a pool.
       **/
      Unstaked: AugmentedEvent<ApiType, [caller: AccountId32, staker: AccountId32, poolId: u32, amount: u128], { caller: AccountId32, staker: AccountId32, poolId: u32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    assets: {
      /**
       * Accounts were destroyed for given asset.
       **/
      AccountsDestroyed: AugmentedEvent<ApiType, [assetId: u32, accountsDestroyed: u32, accountsRemaining: u32], { assetId: u32, accountsDestroyed: u32, accountsRemaining: u32 }>;
      /**
       * An approval for account `delegate` was cancelled by `owner`.
       **/
      ApprovalCancelled: AugmentedEvent<ApiType, [assetId: u32, owner: AccountId32, delegate: AccountId32], { assetId: u32, owner: AccountId32, delegate: AccountId32 }>;
      /**
       * Approvals were destroyed for given asset.
       **/
      ApprovalsDestroyed: AugmentedEvent<ApiType, [assetId: u32, approvalsDestroyed: u32, approvalsRemaining: u32], { assetId: u32, approvalsDestroyed: u32, approvalsRemaining: u32 }>;
      /**
       * (Additional) funds have been approved for transfer to a destination account.
       **/
      ApprovedTransfer: AugmentedEvent<ApiType, [assetId: u32, source: AccountId32, delegate: AccountId32, amount: u128], { assetId: u32, source: AccountId32, delegate: AccountId32, amount: u128 }>;
      /**
       * Some asset `asset_id` was frozen.
       **/
      AssetFrozen: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
      /**
       * The min_balance of an asset has been updated by the asset owner.
       **/
      AssetMinBalanceChanged: AugmentedEvent<ApiType, [assetId: u32, newMinBalance: u128], { assetId: u32, newMinBalance: u128 }>;
      /**
       * An asset has had its attributes changed by the `Force` origin.
       **/
      AssetStatusChanged: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
      /**
       * Some asset `asset_id` was thawed.
       **/
      AssetThawed: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
      /**
       * Some account `who` was blocked.
       **/
      Blocked: AugmentedEvent<ApiType, [assetId: u32, who: AccountId32], { assetId: u32, who: AccountId32 }>;
      /**
       * Some assets were destroyed.
       **/
      Burned: AugmentedEvent<ApiType, [assetId: u32, owner: AccountId32, balance: u128], { assetId: u32, owner: AccountId32, balance: u128 }>;
      /**
       * Some asset class was created.
       **/
      Created: AugmentedEvent<ApiType, [assetId: u32, creator: AccountId32, owner: AccountId32], { assetId: u32, creator: AccountId32, owner: AccountId32 }>;
      /**
       * Some assets were deposited (e.g. for transaction fees).
       **/
      Deposited: AugmentedEvent<ApiType, [assetId: u32, who: AccountId32, amount: u128], { assetId: u32, who: AccountId32, amount: u128 }>;
      /**
       * An asset class was destroyed.
       **/
      Destroyed: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
      /**
       * An asset class is in the process of being destroyed.
       **/
      DestructionStarted: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
      /**
       * Some asset class was force-created.
       **/
      ForceCreated: AugmentedEvent<ApiType, [assetId: u32, owner: AccountId32], { assetId: u32, owner: AccountId32 }>;
      /**
       * Some account `who` was frozen.
       **/
      Frozen: AugmentedEvent<ApiType, [assetId: u32, who: AccountId32], { assetId: u32, who: AccountId32 }>;
      /**
       * Some assets were issued.
       **/
      Issued: AugmentedEvent<ApiType, [assetId: u32, owner: AccountId32, amount: u128], { assetId: u32, owner: AccountId32, amount: u128 }>;
      /**
       * Metadata has been cleared for an asset.
       **/
      MetadataCleared: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
      /**
       * New metadata has been set for an asset.
       **/
      MetadataSet: AugmentedEvent<ApiType, [assetId: u32, name: Bytes, symbol_: Bytes, decimals: u8, isFrozen: bool], { assetId: u32, name: Bytes, symbol: Bytes, decimals: u8, isFrozen: bool }>;
      /**
       * The owner changed.
       **/
      OwnerChanged: AugmentedEvent<ApiType, [assetId: u32, owner: AccountId32], { assetId: u32, owner: AccountId32 }>;
      /**
       * The management team changed.
       **/
      TeamChanged: AugmentedEvent<ApiType, [assetId: u32, issuer: AccountId32, admin: AccountId32, freezer: AccountId32], { assetId: u32, issuer: AccountId32, admin: AccountId32, freezer: AccountId32 }>;
      /**
       * Some account `who` was thawed.
       **/
      Thawed: AugmentedEvent<ApiType, [assetId: u32, who: AccountId32], { assetId: u32, who: AccountId32 }>;
      /**
       * Some account `who` was created with a deposit from `depositor`.
       **/
      Touched: AugmentedEvent<ApiType, [assetId: u32, who: AccountId32, depositor: AccountId32], { assetId: u32, who: AccountId32, depositor: AccountId32 }>;
      /**
       * Some assets were transferred.
       **/
      Transferred: AugmentedEvent<ApiType, [assetId: u32, from: AccountId32, to: AccountId32, amount: u128], { assetId: u32, from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * An `amount` was transferred in its entirety from `owner` to `destination` by
       * the approved `delegate`.
       **/
      TransferredApproved: AugmentedEvent<ApiType, [assetId: u32, owner: AccountId32, delegate: AccountId32, destination: AccountId32, amount: u128], { assetId: u32, owner: AccountId32, delegate: AccountId32, destination: AccountId32, amount: u128 }>;
      /**
       * Some assets were withdrawn from the account (e.g. for transaction fees).
       **/
      Withdrawn: AugmentedEvent<ApiType, [assetId: u32, who: AccountId32, amount: u128], { assetId: u32, who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    assetsFreezer: {
      Frozen: AugmentedEvent<ApiType, [who: AccountId32, assetId: u32, amount: u128], { who: AccountId32, assetId: u32, amount: u128 }>;
      Thawed: AugmentedEvent<ApiType, [who: AccountId32, assetId: u32, amount: u128], { who: AccountId32, assetId: u32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    balances: {
      /**
       * A balance was set by root.
       **/
      BalanceSet: AugmentedEvent<ApiType, [who: AccountId32, free: u128], { who: AccountId32, free: u128 }>;
      /**
       * Some amount was burned from an account.
       **/
      Burned: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was deposited (e.g. for transaction fees).
       **/
      Deposit: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss.
       **/
      DustLost: AugmentedEvent<ApiType, [account: AccountId32, amount: u128], { account: AccountId32, amount: u128 }>;
      /**
       * An account was created with some free balance.
       **/
      Endowed: AugmentedEvent<ApiType, [account: AccountId32, freeBalance: u128], { account: AccountId32, freeBalance: u128 }>;
      /**
       * Some balance was frozen.
       **/
      Frozen: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Total issuance was increased by `amount`, creating a credit to be balanced.
       **/
      Issued: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
      /**
       * Some balance was locked.
       **/
      Locked: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was minted into an account.
       **/
      Minted: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Total issuance was decreased by `amount`, creating a debt to be balanced.
       **/
      Rescinded: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
      /**
       * Some balance was reserved (moved from free to reserved).
       **/
      Reserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus], { from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus }>;
      /**
       * Some amount was restored into an account.
       **/
      Restored: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was removed from the account (e.g. for misbehavior).
       **/
      Slashed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was suspended from an account (it can be restored later).
       **/
      Suspended: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was thawed.
       **/
      Thawed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * The `TotalIssuance` was forcefully changed.
       **/
      TotalIssuanceForced: AugmentedEvent<ApiType, [old: u128, new_: u128], { old: u128, new_: u128 }>;
      /**
       * Transfer succeeded.
       **/
      Transfer: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128], { from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * Some balance was unlocked.
       **/
      Unlocked: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       **/
      Unreserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * An account was upgraded.
       **/
      Upgraded: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * Some amount was withdrawn from the account (e.g. for transaction fees).
       **/
      Withdraw: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    bounties: {
      /**
       * A bounty is approved.
       **/
      BountyApproved: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty is awarded to a beneficiary.
       **/
      BountyAwarded: AugmentedEvent<ApiType, [index: u32, beneficiary: AccountId32], { index: u32, beneficiary: AccountId32 }>;
      /**
       * A bounty proposal is funded and became active.
       **/
      BountyBecameActive: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty is cancelled.
       **/
      BountyCanceled: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty is claimed by beneficiary.
       **/
      BountyClaimed: AugmentedEvent<ApiType, [index: u32, payout: u128, beneficiary: AccountId32], { index: u32, payout: u128, beneficiary: AccountId32 }>;
      /**
       * A bounty expiry is extended.
       **/
      BountyExtended: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * New bounty proposal.
       **/
      BountyProposed: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty proposal was rejected; funds were slashed.
       **/
      BountyRejected: AugmentedEvent<ApiType, [index: u32, bond: u128], { index: u32, bond: u128 }>;
      /**
       * A bounty curator is accepted.
       **/
      CuratorAccepted: AugmentedEvent<ApiType, [bountyId: u32, curator: AccountId32], { bountyId: u32, curator: AccountId32 }>;
      /**
       * A bounty curator is proposed.
       **/
      CuratorProposed: AugmentedEvent<ApiType, [bountyId: u32, curator: AccountId32], { bountyId: u32, curator: AccountId32 }>;
      /**
       * A bounty curator is unassigned.
       **/
      CuratorUnassigned: AugmentedEvent<ApiType, [bountyId: u32], { bountyId: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    broker: {
      /**
       * A Region has been assigned to a particular task.
       **/
      Assigned: AugmentedEvent<ApiType, [regionId: PalletBrokerRegionId, duration: u32, task: u32], { regionId: PalletBrokerRegionId, duration: u32, task: u32 }>;
      /**
       * An assignment has been removed from the workplan.
       **/
      AssignmentRemoved: AugmentedEvent<ApiType, [regionId: PalletBrokerRegionId], { regionId: PalletBrokerRegionId }>;
      AutoRenewalDisabled: AugmentedEvent<ApiType, [core: u16, task: u32], { core: u16, task: u32 }>;
      AutoRenewalEnabled: AugmentedEvent<ApiType, [core: u16, task: u32], { core: u16, task: u32 }>;
      /**
       * Failed to auto-renew a core, likely due to the payer account not being sufficiently
       * funded.
       **/
      AutoRenewalFailed: AugmentedEvent<ApiType, [core: u16, payer: Option<AccountId32>], { core: u16, payer: Option<AccountId32> }>;
      /**
       * The auto-renewal limit has been reached upon renewing cores.
       * 
       * This should never happen, given that enable_auto_renew checks for this before enabling
       * auto-renewal.
       **/
      AutoRenewalLimitReached: AugmentedEvent<ApiType, []>;
      /**
       * Some historical Instantaneous Core Pool Revenue is ready for payout claims.
       **/
      ClaimsReady: AugmentedEvent<ApiType, [when: u32, systemPayout: u128, privatePayout: u128], { when: u32, systemPayout: u128, privatePayout: u128 }>;
      /**
       * Some historical Instantaneous Core Pool contribution record has been dropped.
       **/
      ContributionDropped: AugmentedEvent<ApiType, [regionId: PalletBrokerRegionId], { regionId: PalletBrokerRegionId }>;
      /**
       * A Core has been assigned to one or more tasks and/or the Pool on the Relay-chain.
       **/
      CoreAssigned: AugmentedEvent<ApiType, [core: u16, when: u32, assignment: Vec<ITuple<[PalletBrokerCoretimeInterfaceCoreAssignment, u16]>>], { core: u16, when: u32, assignment: Vec<ITuple<[PalletBrokerCoretimeInterfaceCoreAssignment, u16]>> }>;
      /**
       * The number of cores available for scheduling has changed.
       **/
      CoreCountChanged: AugmentedEvent<ApiType, [coreCount: u16], { coreCount: u16 }>;
      /**
       * A new number of cores has been requested.
       **/
      CoreCountRequested: AugmentedEvent<ApiType, [coreCount: u16], { coreCount: u16 }>;
      /**
       * Some Instantaneous Coretime Pool credit has been purchased.
       **/
      CreditPurchased: AugmentedEvent<ApiType, [who: AccountId32, beneficiary: AccountId32, amount: u128], { who: AccountId32, beneficiary: AccountId32, amount: u128 }>;
      /**
       * Some historical Instantaneous Core Pool payment record has been dropped.
       **/
      HistoryDropped: AugmentedEvent<ApiType, [when: u32, revenue: u128], { when: u32, revenue: u128 }>;
      /**
       * Some historical Instantaneous Core Pool payment record has been ignored because the
       * timeslice was already known. Governance may need to intervene.
       **/
      HistoryIgnored: AugmentedEvent<ApiType, [when: u32, revenue: u128], { when: u32, revenue: u128 }>;
      /**
       * Some historical Instantaneous Core Pool payment record has been initialized.
       **/
      HistoryInitialized: AugmentedEvent<ApiType, [when: u32, privatePoolSize: u32, systemPoolSize: u32], { when: u32, privatePoolSize: u32, systemPoolSize: u32 }>;
      /**
       * A Region has been converted into two overlapping Regions each of lesser regularity.
       **/
      Interlaced: AugmentedEvent<ApiType, [oldRegionId: PalletBrokerRegionId, newRegionIds: ITuple<[PalletBrokerRegionId, PalletBrokerRegionId]>], { oldRegionId: PalletBrokerRegionId, newRegionIds: ITuple<[PalletBrokerRegionId, PalletBrokerRegionId]> }>;
      /**
       * A new lease has been created.
       **/
      Leased: AugmentedEvent<ApiType, [task: u32, until: u32], { task: u32, until: u32 }>;
      /**
       * A lease is about to end.
       **/
      LeaseEnding: AugmentedEvent<ApiType, [task: u32, when: u32], { task: u32, when: u32 }>;
      /**
       * A lease has been removed.
       **/
      LeaseRemoved: AugmentedEvent<ApiType, [task: u32], { task: u32 }>;
      /**
       * A Region has been split into two non-overlapping Regions.
       **/
      Partitioned: AugmentedEvent<ApiType, [oldRegionId: PalletBrokerRegionId, newRegionIds: ITuple<[PalletBrokerRegionId, PalletBrokerRegionId]>], { oldRegionId: PalletBrokerRegionId, newRegionIds: ITuple<[PalletBrokerRegionId, PalletBrokerRegionId]> }>;
      /**
       * A Region has been added to the Instantaneous Coretime Pool.
       **/
      Pooled: AugmentedEvent<ApiType, [regionId: PalletBrokerRegionId, duration: u32], { regionId: PalletBrokerRegionId, duration: u32 }>;
      /**
       * Some historical Instantaneous Core Pool payment record has been dropped.
       **/
      PotentialRenewalDropped: AugmentedEvent<ApiType, [when: u32, core: u16], { when: u32, core: u16 }>;
      /**
       * A Region of Bulk Coretime has been purchased.
       **/
      Purchased: AugmentedEvent<ApiType, [who: AccountId32, regionId: PalletBrokerRegionId, price: u128, duration: u32], { who: AccountId32, regionId: PalletBrokerRegionId, price: u128, duration: u32 }>;
      /**
       * A Region has been dropped due to being out of date.
       **/
      RegionDropped: AugmentedEvent<ApiType, [regionId: PalletBrokerRegionId, duration: u32], { regionId: PalletBrokerRegionId, duration: u32 }>;
      /**
       * The workload of a core has become renewable.
       **/
      Renewable: AugmentedEvent<ApiType, [core: u16, price: u128, begin: u32, workload: Vec<PalletBrokerScheduleItem>], { core: u16, price: u128, begin: u32, workload: Vec<PalletBrokerScheduleItem> }>;
      /**
       * A workload has been renewed.
       **/
      Renewed: AugmentedEvent<ApiType, [who: AccountId32, price: u128, oldCore: u16, core: u16, begin: u32, duration: u32, workload: Vec<PalletBrokerScheduleItem>], { who: AccountId32, price: u128, oldCore: u16, core: u16, begin: u32, duration: u32, workload: Vec<PalletBrokerScheduleItem> }>;
      /**
       * A reservation for a workload has been cancelled.
       **/
      ReservationCancelled: AugmentedEvent<ApiType, [index: u32, workload: Vec<PalletBrokerScheduleItem>], { index: u32, workload: Vec<PalletBrokerScheduleItem> }>;
      /**
       * There is a new reservation for a workload.
       **/
      ReservationMade: AugmentedEvent<ApiType, [index: u32, workload: Vec<PalletBrokerScheduleItem>], { index: u32, workload: Vec<PalletBrokerScheduleItem> }>;
      /**
       * The act of claiming revenue has begun.
       **/
      RevenueClaimBegun: AugmentedEvent<ApiType, [region: PalletBrokerRegionId, maxTimeslices: u32], { region: PalletBrokerRegionId, maxTimeslices: u32 }>;
      /**
       * A particular timeslice has a non-zero claim.
       **/
      RevenueClaimItem: AugmentedEvent<ApiType, [when: u32, amount: u128], { when: u32, amount: u128 }>;
      /**
       * A revenue claim has (possibly only in part) been paid.
       **/
      RevenueClaimPaid: AugmentedEvent<ApiType, [who: AccountId32, amount: u128, next: Option<PalletBrokerRegionId>], { who: AccountId32, amount: u128, next: Option<PalletBrokerRegionId> }>;
      /**
       * A new sale has been initialized.
       **/
      SaleInitialized: AugmentedEvent<ApiType, [saleStart: u32, leadinLength: u32, startPrice: u128, endPrice: u128, regionBegin: u32, regionEnd: u32, idealCoresSold: u16, coresOffered: u16], { saleStart: u32, leadinLength: u32, startPrice: u128, endPrice: u128, regionBegin: u32, regionEnd: u32, idealCoresSold: u16, coresOffered: u16 }>;
      /**
       * The sale rotation has been started and a new sale is imminent.
       **/
      SalesStarted: AugmentedEvent<ApiType, [price: u128, coreCount: u16], { price: u128, coreCount: u16 }>;
      /**
       * Ownership of a Region has been transferred.
       **/
      Transferred: AugmentedEvent<ApiType, [regionId: PalletBrokerRegionId, duration: u32, oldOwner: Option<AccountId32>, owner: Option<AccountId32>], { regionId: PalletBrokerRegionId, duration: u32, oldOwner: Option<AccountId32>, owner: Option<AccountId32> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    childBounties: {
      /**
       * A child-bounty is added.
       **/
      Added: AugmentedEvent<ApiType, [index: u32, childIndex: u32], { index: u32, childIndex: u32 }>;
      /**
       * A child-bounty is awarded to a beneficiary.
       **/
      Awarded: AugmentedEvent<ApiType, [index: u32, childIndex: u32, beneficiary: AccountId32], { index: u32, childIndex: u32, beneficiary: AccountId32 }>;
      /**
       * A child-bounty is cancelled.
       **/
      Canceled: AugmentedEvent<ApiType, [index: u32, childIndex: u32], { index: u32, childIndex: u32 }>;
      /**
       * A child-bounty is claimed by beneficiary.
       **/
      Claimed: AugmentedEvent<ApiType, [index: u32, childIndex: u32, payout: u128, beneficiary: AccountId32], { index: u32, childIndex: u32, payout: u128, beneficiary: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    contracts: {
      /**
       * A contract was called either by a plain account or another contract.
       * 
       * # Note
       * 
       * Please keep in mind that like all events this is only emitted for successful
       * calls. This is because on failure all storage changes including events are
       * rolled back.
       **/
      Called: AugmentedEvent<ApiType, [caller: PalletContractsOrigin, contract: AccountId32], { caller: PalletContractsOrigin, contract: AccountId32 }>;
      /**
       * A code with the specified hash was removed.
       **/
      CodeRemoved: AugmentedEvent<ApiType, [codeHash: H256, depositReleased: u128, remover: AccountId32], { codeHash: H256, depositReleased: u128, remover: AccountId32 }>;
      /**
       * Code with the specified hash has been stored.
       **/
      CodeStored: AugmentedEvent<ApiType, [codeHash: H256, depositHeld: u128, uploader: AccountId32], { codeHash: H256, depositHeld: u128, uploader: AccountId32 }>;
      /**
       * A contract's code was updated.
       **/
      ContractCodeUpdated: AugmentedEvent<ApiType, [contract: AccountId32, newCodeHash: H256, oldCodeHash: H256], { contract: AccountId32, newCodeHash: H256, oldCodeHash: H256 }>;
      /**
       * A custom event emitted by the contract.
       **/
      ContractEmitted: AugmentedEvent<ApiType, [contract: AccountId32, data: Bytes], { contract: AccountId32, data: Bytes }>;
      /**
       * A contract delegate called a code hash.
       * 
       * # Note
       * 
       * Please keep in mind that like all events this is only emitted for successful
       * calls. This is because on failure all storage changes including events are
       * rolled back.
       **/
      DelegateCalled: AugmentedEvent<ApiType, [contract: AccountId32, codeHash: H256], { contract: AccountId32, codeHash: H256 }>;
      /**
       * Contract deployed by address at the specified address.
       **/
      Instantiated: AugmentedEvent<ApiType, [deployer: AccountId32, contract: AccountId32], { deployer: AccountId32, contract: AccountId32 }>;
      /**
       * Some funds have been transferred and held as storage deposit.
       **/
      StorageDepositTransferredAndHeld: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128], { from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * Some storage deposit funds have been transferred and released.
       **/
      StorageDepositTransferredAndReleased: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128], { from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * Contract has been removed.
       * 
       * # Note
       * 
       * The only way for a contract to be removed and emitting this event is by calling
       * `seal_terminate`.
       **/
      Terminated: AugmentedEvent<ApiType, [contract: AccountId32, beneficiary: AccountId32], { contract: AccountId32, beneficiary: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    convictionVoting: {
      /**
       * An account has delegated their vote to another account. \[who, target\]
       **/
      Delegated: AugmentedEvent<ApiType, [AccountId32, AccountId32]>;
      /**
       * An \[account\] has cancelled a previous delegation operation.
       **/
      Undelegated: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * An account has voted
       **/
      Voted: AugmentedEvent<ApiType, [who: AccountId32, vote: PalletConvictionVotingVoteAccountVote], { who: AccountId32, vote: PalletConvictionVotingVoteAccountVote }>;
      /**
       * A vote has been removed
       **/
      VoteRemoved: AugmentedEvent<ApiType, [who: AccountId32, vote: PalletConvictionVotingVoteAccountVote], { who: AccountId32, vote: PalletConvictionVotingVoteAccountVote }>;
      /**
       * The lockup period of a conviction vote expired, and the funds have been unlocked.
       **/
      VoteUnlocked: AugmentedEvent<ApiType, [who: AccountId32, class_: u16], { who: AccountId32, class: u16 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    coreFellowship: {
      /**
       * Member activity flag has been set.
       **/
      ActiveChanged: AugmentedEvent<ApiType, [who: AccountId32, isActive: bool], { who: AccountId32, isActive: bool }>;
      /**
       * Member has been demoted to the given (non-zero) rank.
       **/
      Demoted: AugmentedEvent<ApiType, [who: AccountId32, toRank: u16], { who: AccountId32, toRank: u16 }>;
      /**
       * Some submitted evidence was judged and removed. There may or may not have been a change
       * to the rank, but in any case, `last_proof` is reset.
       **/
      EvidenceJudged: AugmentedEvent<ApiType, [who: AccountId32, wish: PalletCoreFellowshipWish, evidence: Bytes, oldRank: u16, newRank: Option<u16>], { who: AccountId32, wish: PalletCoreFellowshipWish, evidence: Bytes, oldRank: u16, newRank: Option<u16> }>;
      /**
       * Pre-ranked account has been inducted at their current rank.
       **/
      Imported: AugmentedEvent<ApiType, [who: AccountId32, rank: u16], { who: AccountId32, rank: u16 }>;
      /**
       * Member has begun being tracked in this pallet.
       **/
      Inducted: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * Member has been removed from being tracked in this pallet (i.e. because rank is now
       * zero).
       **/
      Offboarded: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * Parameters for the pallet have changed.
       **/
      ParamsChanged: AugmentedEvent<ApiType, [params: PalletCoreFellowshipParamsTypeU128], { params: PalletCoreFellowshipParamsTypeU128 }>;
      /**
       * Member has been promoted to the given rank.
       **/
      Promoted: AugmentedEvent<ApiType, [who: AccountId32, toRank: u16], { who: AccountId32, toRank: u16 }>;
      /**
       * Member has been proven at their current rank, postponing auto-demotion.
       **/
      Proven: AugmentedEvent<ApiType, [who: AccountId32, atRank: u16], { who: AccountId32, atRank: u16 }>;
      /**
       * Member has stated evidence of their efforts their request for rank.
       **/
      Requested: AugmentedEvent<ApiType, [who: AccountId32, wish: PalletCoreFellowshipWish], { who: AccountId32, wish: PalletCoreFellowshipWish }>;
      /**
       * A member had its AccountId swapped.
       **/
      Swapped: AugmentedEvent<ApiType, [who: AccountId32, newWho: AccountId32], { who: AccountId32, newWho: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    council: {
      /**
       * A motion was approved by the required threshold.
       **/
      Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       **/
      Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256, yes: u32, no: u32 }>;
      /**
       * A motion was not approved by the required threshold.
       **/
      Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       **/
      Executed: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A proposal was killed.
       **/
      Killed: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       **/
      MemberExecuted: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * Some cost for storing a proposal was burned.
       **/
      ProposalCostBurned: AugmentedEvent<ApiType, [proposalHash: H256, who: AccountId32], { proposalHash: H256, who: AccountId32 }>;
      /**
       * Some cost for storing a proposal was released.
       **/
      ProposalCostReleased: AugmentedEvent<ApiType, [proposalHash: H256, who: AccountId32], { proposalHash: H256, who: AccountId32 }>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       **/
      Proposed: AugmentedEvent<ApiType, [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32], { account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32 }>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       **/
      Voted: AugmentedEvent<ApiType, [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32], { account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    delegatedStaking: {
      /**
       * Funds delegated by a delegator.
       **/
      Delegated: AugmentedEvent<ApiType, [agent: AccountId32, delegator: AccountId32, amount: u128], { agent: AccountId32, delegator: AccountId32, amount: u128 }>;
      /**
       * Unclaimed delegation funds migrated to delegator.
       **/
      MigratedDelegation: AugmentedEvent<ApiType, [agent: AccountId32, delegator: AccountId32, amount: u128], { agent: AccountId32, delegator: AccountId32, amount: u128 }>;
      /**
       * Funds released to a delegator.
       **/
      Released: AugmentedEvent<ApiType, [agent: AccountId32, delegator: AccountId32, amount: u128], { agent: AccountId32, delegator: AccountId32, amount: u128 }>;
      /**
       * Funds slashed from a delegator.
       **/
      Slashed: AugmentedEvent<ApiType, [agent: AccountId32, delegator: AccountId32, amount: u128], { agent: AccountId32, delegator: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    democracy: {
      /**
       * A proposal_hash has been blacklisted permanently.
       **/
      Blacklisted: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A referendum has been cancelled.
       **/
      Cancelled: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /**
       * An account has delegated their vote to another account.
       **/
      Delegated: AugmentedEvent<ApiType, [who: AccountId32, target: AccountId32], { who: AccountId32, target: AccountId32 }>;
      /**
       * An external proposal has been tabled.
       **/
      ExternalTabled: AugmentedEvent<ApiType, []>;
      /**
       * Metadata for a proposal or a referendum has been cleared.
       **/
      MetadataCleared: AugmentedEvent<ApiType, [owner: PalletDemocracyMetadataOwner, hash_: H256], { owner: PalletDemocracyMetadataOwner, hash_: H256 }>;
      /**
       * Metadata for a proposal or a referendum has been set.
       **/
      MetadataSet: AugmentedEvent<ApiType, [owner: PalletDemocracyMetadataOwner, hash_: H256], { owner: PalletDemocracyMetadataOwner, hash_: H256 }>;
      /**
       * Metadata has been transferred to new owner.
       **/
      MetadataTransferred: AugmentedEvent<ApiType, [prevOwner: PalletDemocracyMetadataOwner, owner: PalletDemocracyMetadataOwner, hash_: H256], { prevOwner: PalletDemocracyMetadataOwner, owner: PalletDemocracyMetadataOwner, hash_: H256 }>;
      /**
       * A proposal has been rejected by referendum.
       **/
      NotPassed: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /**
       * A proposal has been approved by referendum.
       **/
      Passed: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /**
       * A proposal got canceled.
       **/
      ProposalCanceled: AugmentedEvent<ApiType, [propIndex: u32], { propIndex: u32 }>;
      /**
       * A motion has been proposed by a public account.
       **/
      Proposed: AugmentedEvent<ApiType, [proposalIndex: u32, deposit: u128], { proposalIndex: u32, deposit: u128 }>;
      /**
       * An account has seconded a proposal
       **/
      Seconded: AugmentedEvent<ApiType, [seconder: AccountId32, propIndex: u32], { seconder: AccountId32, propIndex: u32 }>;
      /**
       * A referendum has begun.
       **/
      Started: AugmentedEvent<ApiType, [refIndex: u32, threshold: PalletDemocracyVoteThreshold], { refIndex: u32, threshold: PalletDemocracyVoteThreshold }>;
      /**
       * A public proposal has been tabled for referendum vote.
       **/
      Tabled: AugmentedEvent<ApiType, [proposalIndex: u32, deposit: u128], { proposalIndex: u32, deposit: u128 }>;
      /**
       * An account has cancelled a previous delegation operation.
       **/
      Undelegated: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * An external proposal has been vetoed.
       **/
      Vetoed: AugmentedEvent<ApiType, [who: AccountId32, proposalHash: H256, until: u32], { who: AccountId32, proposalHash: H256, until: u32 }>;
      /**
       * An account has voted in a referendum
       **/
      Voted: AugmentedEvent<ApiType, [voter: AccountId32, refIndex: u32, vote: PalletDemocracyVoteAccountVote], { voter: AccountId32, refIndex: u32, vote: PalletDemocracyVoteAccountVote }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    electionProviderMultiPhase: {
      /**
       * An election failed.
       * 
       * Not much can be said about which computes failed in the process.
       **/
      ElectionFailed: AugmentedEvent<ApiType, []>;
      /**
       * The election has been finalized, with the given computation and score.
       **/
      ElectionFinalized: AugmentedEvent<ApiType, [compute: PalletElectionProviderMultiPhaseElectionCompute, score: SpNposElectionsElectionScore], { compute: PalletElectionProviderMultiPhaseElectionCompute, score: SpNposElectionsElectionScore }>;
      /**
       * There was a phase transition in a given round.
       **/
      PhaseTransitioned: AugmentedEvent<ApiType, [from: PalletElectionProviderMultiPhasePhase, to: PalletElectionProviderMultiPhasePhase, round: u32], { from: PalletElectionProviderMultiPhasePhase, to: PalletElectionProviderMultiPhasePhase, round: u32 }>;
      /**
       * An account has been rewarded for their signed submission being finalized.
       **/
      Rewarded: AugmentedEvent<ApiType, [account: AccountId32, value: u128], { account: AccountId32, value: u128 }>;
      /**
       * An account has been slashed for submitting an invalid signed submission.
       **/
      Slashed: AugmentedEvent<ApiType, [account: AccountId32, value: u128], { account: AccountId32, value: u128 }>;
      /**
       * A solution was stored with the given compute.
       * 
       * The `origin` indicates the origin of the solution. If `origin` is `Some(AccountId)`,
       * the stored solution was submitted in the signed phase by a miner with the `AccountId`.
       * Otherwise, the solution was stored either during the unsigned phase or by
       * `T::ForceOrigin`. The `bool` is `true` when a previous solution was ejected to make
       * room for this one.
       **/
      SolutionStored: AugmentedEvent<ApiType, [compute: PalletElectionProviderMultiPhaseElectionCompute, origin: Option<AccountId32>, prevEjected: bool], { compute: PalletElectionProviderMultiPhaseElectionCompute, origin: Option<AccountId32>, prevEjected: bool }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    elections: {
      /**
       * A candidate was slashed by amount due to failing to obtain a seat as member or
       * runner-up.
       * 
       * Note that old members and runners-up are also candidates.
       **/
      CandidateSlashed: AugmentedEvent<ApiType, [candidate: AccountId32, amount: u128], { candidate: AccountId32, amount: u128 }>;
      /**
       * Internal error happened while trying to perform election.
       **/
      ElectionError: AugmentedEvent<ApiType, []>;
      /**
       * No (or not enough) candidates existed for this round. This is different from
       * `NewTerm(\[\])`. See the description of `NewTerm`.
       **/
      EmptyTerm: AugmentedEvent<ApiType, []>;
      /**
       * A member has been removed. This should always be followed by either `NewTerm` or
       * `EmptyTerm`.
       **/
      MemberKicked: AugmentedEvent<ApiType, [member: AccountId32], { member: AccountId32 }>;
      /**
       * A new term with new_members. This indicates that enough candidates existed to run
       * the election, not that enough have been elected. The inner value must be examined
       * for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
       * slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
       * begin with.
       **/
      NewTerm: AugmentedEvent<ApiType, [newMembers: Vec<ITuple<[AccountId32, u128]>>], { newMembers: Vec<ITuple<[AccountId32, u128]>> }>;
      /**
       * Someone has renounced their candidacy.
       **/
      Renounced: AugmentedEvent<ApiType, [candidate: AccountId32], { candidate: AccountId32 }>;
      /**
       * A seat holder was slashed by amount by being forcefully removed from the set.
       **/
      SeatHolderSlashed: AugmentedEvent<ApiType, [seatHolder: AccountId32, amount: u128], { seatHolder: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    fastUnstake: {
      /**
       * A batch was partially checked for the given eras, but the process did not finish.
       **/
      BatchChecked: AugmentedEvent<ApiType, [eras: Vec<u32>], { eras: Vec<u32> }>;
      /**
       * A batch of a given size was terminated.
       * 
       * This is always follows by a number of `Unstaked` or `Slashed` events, marking the end
       * of the batch. A new batch will be created upon next block.
       **/
      BatchFinished: AugmentedEvent<ApiType, [size_: u32], { size_: u32 }>;
      /**
       * An internal error happened. Operations will be paused now.
       **/
      InternalError: AugmentedEvent<ApiType, []>;
      /**
       * A staker was slashed for requesting fast-unstake whilst being exposed.
       **/
      Slashed: AugmentedEvent<ApiType, [stash: AccountId32, amount: u128], { stash: AccountId32, amount: u128 }>;
      /**
       * A staker was unstaked.
       **/
      Unstaked: AugmentedEvent<ApiType, [stash: AccountId32, result: Result<Null, SpRuntimeDispatchError>], { stash: AccountId32, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    glutton: {
      /**
       * The block length limit has been updated.
       **/
      BlockLengthLimitSet: AugmentedEvent<ApiType, [blockLength: u64], { blockLength: u64 }>;
      /**
       * The computation limit has been updated.
       **/
      ComputationLimitSet: AugmentedEvent<ApiType, [compute: u64], { compute: u64 }>;
      /**
       * The pallet has been (re)initialized.
       **/
      PalletInitialized: AugmentedEvent<ApiType, [reinit: bool], { reinit: bool }>;
      /**
       * The storage limit has been updated.
       **/
      StorageLimitSet: AugmentedEvent<ApiType, [storage: u64], { storage: u64 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    grandpa: {
      /**
       * New authority set has been applied.
       **/
      NewAuthorities: AugmentedEvent<ApiType, [authoritySet: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>], { authoritySet: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>> }>;
      /**
       * Current authority set has been paused.
       **/
      Paused: AugmentedEvent<ApiType, []>;
      /**
       * Current authority set has been resumed.
       **/
      Resumed: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    identity: {
      /**
       * A username authority was added.
       **/
      AuthorityAdded: AugmentedEvent<ApiType, [authority: AccountId32], { authority: AccountId32 }>;
      /**
       * A username authority was removed.
       **/
      AuthorityRemoved: AugmentedEvent<ApiType, [authority: AccountId32], { authority: AccountId32 }>;
      /**
       * A dangling username (as in, a username corresponding to an account that has removed its
       * identity) has been removed.
       **/
      DanglingUsernameRemoved: AugmentedEvent<ApiType, [who: AccountId32, username: Bytes], { who: AccountId32, username: Bytes }>;
      /**
       * A name was cleared, and the given balance returned.
       **/
      IdentityCleared: AugmentedEvent<ApiType, [who: AccountId32, deposit: u128], { who: AccountId32, deposit: u128 }>;
      /**
       * A name was removed and the given balance slashed.
       **/
      IdentityKilled: AugmentedEvent<ApiType, [who: AccountId32, deposit: u128], { who: AccountId32, deposit: u128 }>;
      /**
       * A name was set or reset (which will remove all judgements).
       **/
      IdentitySet: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * A judgement was given by a registrar.
       **/
      JudgementGiven: AugmentedEvent<ApiType, [target: AccountId32, registrarIndex: u32], { target: AccountId32, registrarIndex: u32 }>;
      /**
       * A judgement was asked from a registrar.
       **/
      JudgementRequested: AugmentedEvent<ApiType, [who: AccountId32, registrarIndex: u32], { who: AccountId32, registrarIndex: u32 }>;
      /**
       * A judgement request was retracted.
       **/
      JudgementUnrequested: AugmentedEvent<ApiType, [who: AccountId32, registrarIndex: u32], { who: AccountId32, registrarIndex: u32 }>;
      /**
       * A queued username passed its expiration without being claimed and was removed.
       **/
      PreapprovalExpired: AugmentedEvent<ApiType, [whose: AccountId32], { whose: AccountId32 }>;
      /**
       * A username was set as a primary and can be looked up from `who`.
       **/
      PrimaryUsernameSet: AugmentedEvent<ApiType, [who: AccountId32, username: Bytes], { who: AccountId32, username: Bytes }>;
      /**
       * A registrar was added.
       **/
      RegistrarAdded: AugmentedEvent<ApiType, [registrarIndex: u32], { registrarIndex: u32 }>;
      /**
       * An account's sub-identities were set (in bulk).
       **/
      SubIdentitiesSet: AugmentedEvent<ApiType, [main: AccountId32, numberOfSubs: u32, newDeposit: u128], { main: AccountId32, numberOfSubs: u32, newDeposit: u128 }>;
      /**
       * A sub-identity was added to an identity and the deposit paid.
       **/
      SubIdentityAdded: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * A sub-identity was removed from an identity and the deposit freed.
       **/
      SubIdentityRemoved: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * A given sub-account's associated name was changed by its super-identity.
       **/
      SubIdentityRenamed: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32], { sub: AccountId32, main: AccountId32 }>;
      /**
       * A sub-identity was cleared, and the given deposit repatriated from the
       * main identity account to the sub-identity account.
       **/
      SubIdentityRevoked: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * A username has been killed.
       **/
      UsernameKilled: AugmentedEvent<ApiType, [username: Bytes], { username: Bytes }>;
      /**
       * A username was queued, but `who` must accept it prior to `expiration`.
       **/
      UsernameQueued: AugmentedEvent<ApiType, [who: AccountId32, username: Bytes, expiration: u32], { who: AccountId32, username: Bytes, expiration: u32 }>;
      /**
       * A username has been removed.
       **/
      UsernameRemoved: AugmentedEvent<ApiType, [username: Bytes], { username: Bytes }>;
      /**
       * A username was set for `who`.
       **/
      UsernameSet: AugmentedEvent<ApiType, [who: AccountId32, username: Bytes], { who: AccountId32, username: Bytes }>;
      /**
       * A username has been unbound.
       **/
      UsernameUnbound: AugmentedEvent<ApiType, [username: Bytes], { username: Bytes }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    imOnline: {
      /**
       * At the end of the session, no offence was committed.
       **/
      AllGood: AugmentedEvent<ApiType, []>;
      /**
       * A new heartbeat was received from `AuthorityId`.
       **/
      HeartbeatReceived: AugmentedEvent<ApiType, [authorityId: PalletImOnlineSr25519AppSr25519Public], { authorityId: PalletImOnlineSr25519AppSr25519Public }>;
      /**
       * At the end of the session, at least one validator was found to be offline.
       **/
      SomeOffline: AugmentedEvent<ApiType, [offline: Vec<ITuple<[AccountId32, Null]>>], { offline: Vec<ITuple<[AccountId32, Null]>> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    indices: {
      /**
       * A deposit to reserve an index has been poked/reconsidered.
       **/
      DepositPoked: AugmentedEvent<ApiType, [who: AccountId32, index: u32, oldDeposit: u128, newDeposit: u128], { who: AccountId32, index: u32, oldDeposit: u128, newDeposit: u128 }>;
      /**
       * A account index was assigned.
       **/
      IndexAssigned: AugmentedEvent<ApiType, [who: AccountId32, index: u32], { who: AccountId32, index: u32 }>;
      /**
       * A account index has been freed up (unassigned).
       **/
      IndexFreed: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A account index has been frozen to its current account ID.
       **/
      IndexFrozen: AugmentedEvent<ApiType, [index: u32, who: AccountId32], { index: u32, who: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    lottery: {
      /**
       * A new set of calls have been set!
       **/
      CallsUpdated: AugmentedEvent<ApiType, []>;
      /**
       * A lottery has been started!
       **/
      LotteryStarted: AugmentedEvent<ApiType, []>;
      /**
       * A ticket has been bought!
       **/
      TicketBought: AugmentedEvent<ApiType, [who: AccountId32, callIndex: ITuple<[u8, u8]>], { who: AccountId32, callIndex: ITuple<[u8, u8]> }>;
      /**
       * A winner has been chosen!
       **/
      Winner: AugmentedEvent<ApiType, [winner: AccountId32, lotteryBalance: u128], { winner: AccountId32, lotteryBalance: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    messageQueue: {
      /**
       * Message placed in overweight queue.
       **/
      OverweightEnqueued: AugmentedEvent<ApiType, [id: U8aFixed, origin: u32, pageIndex: u32, messageIndex: u32], { id: U8aFixed, origin: u32, pageIndex: u32, messageIndex: u32 }>;
      /**
       * This page was reaped.
       **/
      PageReaped: AugmentedEvent<ApiType, [origin: u32, index: u32], { origin: u32, index: u32 }>;
      /**
       * Message is processed.
       **/
      Processed: AugmentedEvent<ApiType, [id: H256, origin: u32, weightUsed: SpWeightsWeightV2Weight, success: bool], { id: H256, origin: u32, weightUsed: SpWeightsWeightV2Weight, success: bool }>;
      /**
       * Message discarded due to an error in the `MessageProcessor` (usually a format error).
       **/
      ProcessingFailed: AugmentedEvent<ApiType, [id: H256, origin: u32, error: FrameSupportMessagesProcessMessageError], { id: H256, origin: u32, error: FrameSupportMessagesProcessMessageError }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    metaTx: {
      /**
       * A meta transaction has been dispatched.
       * 
       * Contains the dispatch result of the meta transaction along with post-dispatch
       * information.
       **/
      Dispatched: AugmentedEvent<ApiType, [result: Result<FrameSupportDispatchPostDispatchInfo, SpRuntimeDispatchErrorWithPostInfo>], { result: Result<FrameSupportDispatchPostDispatchInfo, SpRuntimeDispatchErrorWithPostInfo> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    multiBlockMigrations: {
      /**
       * The set of historical migrations has been cleared.
       **/
      HistoricCleared: AugmentedEvent<ApiType, [nextCursor: Option<Bytes>], { nextCursor: Option<Bytes> }>;
      /**
       * A migration progressed.
       **/
      MigrationAdvanced: AugmentedEvent<ApiType, [index: u32, took: u32], { index: u32, took: u32 }>;
      /**
       * A Migration completed.
       **/
      MigrationCompleted: AugmentedEvent<ApiType, [index: u32, took: u32], { index: u32, took: u32 }>;
      /**
       * A Migration failed.
       * 
       * This implies that the whole upgrade failed and governance intervention is required.
       **/
      MigrationFailed: AugmentedEvent<ApiType, [index: u32, took: u32], { index: u32, took: u32 }>;
      /**
       * A migration was skipped since it was already executed in the past.
       **/
      MigrationSkipped: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * The current runtime upgrade completed.
       * 
       * This implies that all of its migrations completed successfully as well.
       **/
      UpgradeCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Runtime upgrade failed.
       * 
       * This is very bad and will require governance intervention.
       **/
      UpgradeFailed: AugmentedEvent<ApiType, []>;
      /**
       * A Runtime upgrade started.
       * 
       * Its end is indicated by `UpgradeCompleted` or `UpgradeFailed`.
       **/
      UpgradeStarted: AugmentedEvent<ApiType, [migrations: u32], { migrations: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    multisig: {
      /**
       * The deposit for a multisig operation has been updated/poked.
       **/
      DepositPoked: AugmentedEvent<ApiType, [who: AccountId32, callHash: U8aFixed, oldDeposit: u128, newDeposit: u128], { who: AccountId32, callHash: U8aFixed, oldDeposit: u128, newDeposit: u128 }>;
      /**
       * A multisig operation has been approved by someone.
       **/
      MultisigApproval: AugmentedEvent<ApiType, [approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed], { approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * A multisig operation has been cancelled.
       **/
      MultisigCancelled: AugmentedEvent<ApiType, [cancelling: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed], { cancelling: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * A multisig operation has been executed.
       **/
      MultisigExecuted: AugmentedEvent<ApiType, [approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed, result: Result<Null, SpRuntimeDispatchError>], { approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A new multisig operation has begun.
       **/
      NewMultisig: AugmentedEvent<ApiType, [approving: AccountId32, multisig: AccountId32, callHash: U8aFixed], { approving: AccountId32, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    nftFractionalization: {
      /**
       * An NFT was successfully fractionalized.
       **/
      NftFractionalized: AugmentedEvent<ApiType, [nftCollection: u32, nft: u32, fractions: u128, asset: u32, beneficiary: AccountId32], { nftCollection: u32, nft: u32, fractions: u128, asset: u32, beneficiary: AccountId32 }>;
      /**
       * An NFT was successfully returned back.
       **/
      NftUnified: AugmentedEvent<ApiType, [nftCollection: u32, nft: u32, asset: u32, beneficiary: AccountId32], { nftCollection: u32, nft: u32, asset: u32, beneficiary: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    nfts: {
      /**
       * All approvals of an item got cancelled.
       **/
      AllApprovalsCancelled: AugmentedEvent<ApiType, [collection: u32, item: u32, owner: AccountId32], { collection: u32, item: u32, owner: AccountId32 }>;
      /**
       * An approval for a `delegate` account to transfer the `item` of an item
       * `collection` was cancelled by its `owner`.
       **/
      ApprovalCancelled: AugmentedEvent<ApiType, [collection: u32, item: u32, owner: AccountId32, delegate: AccountId32], { collection: u32, item: u32, owner: AccountId32, delegate: AccountId32 }>;
      /**
       * Attribute metadata has been cleared for a `collection` or `item`.
       **/
      AttributeCleared: AugmentedEvent<ApiType, [collection: u32, maybeItem: Option<u32>, key: Bytes, namespace: PalletNftsAttributeNamespace], { collection: u32, maybeItem: Option<u32>, key: Bytes, namespace: PalletNftsAttributeNamespace }>;
      /**
       * New attribute metadata has been set for a `collection` or `item`.
       **/
      AttributeSet: AugmentedEvent<ApiType, [collection: u32, maybeItem: Option<u32>, key: Bytes, value: Bytes, namespace: PalletNftsAttributeNamespace], { collection: u32, maybeItem: Option<u32>, key: Bytes, value: Bytes, namespace: PalletNftsAttributeNamespace }>;
      /**
       * An `item` was destroyed.
       **/
      Burned: AugmentedEvent<ApiType, [collection: u32, item: u32, owner: AccountId32], { collection: u32, item: u32, owner: AccountId32 }>;
      /**
       * A `collection` has had its config changed by the `Force` origin.
       **/
      CollectionConfigChanged: AugmentedEvent<ApiType, [collection: u32], { collection: u32 }>;
      /**
       * Some `collection` was locked.
       **/
      CollectionLocked: AugmentedEvent<ApiType, [collection: u32], { collection: u32 }>;
      /**
       * Max supply has been set for a collection.
       **/
      CollectionMaxSupplySet: AugmentedEvent<ApiType, [collection: u32, maxSupply: u32], { collection: u32, maxSupply: u32 }>;
      /**
       * Metadata has been cleared for a `collection`.
       **/
      CollectionMetadataCleared: AugmentedEvent<ApiType, [collection: u32], { collection: u32 }>;
      /**
       * New metadata has been set for a `collection`.
       **/
      CollectionMetadataSet: AugmentedEvent<ApiType, [collection: u32, data: Bytes], { collection: u32, data: Bytes }>;
      /**
       * Mint settings for a collection had changed.
       **/
      CollectionMintSettingsUpdated: AugmentedEvent<ApiType, [collection: u32], { collection: u32 }>;
      /**
       * A `collection` was created.
       **/
      Created: AugmentedEvent<ApiType, [collection: u32, creator: AccountId32, owner: AccountId32], { collection: u32, creator: AccountId32, owner: AccountId32 }>;
      /**
       * A `collection` was destroyed.
       **/
      Destroyed: AugmentedEvent<ApiType, [collection: u32], { collection: u32 }>;
      /**
       * A `collection` was force-created.
       **/
      ForceCreated: AugmentedEvent<ApiType, [collection: u32, owner: AccountId32], { collection: u32, owner: AccountId32 }>;
      /**
       * An `item` was issued.
       **/
      Issued: AugmentedEvent<ApiType, [collection: u32, item: u32, owner: AccountId32], { collection: u32, item: u32, owner: AccountId32 }>;
      /**
       * A new approval to modify item attributes was added.
       **/
      ItemAttributesApprovalAdded: AugmentedEvent<ApiType, [collection: u32, item: u32, delegate: AccountId32], { collection: u32, item: u32, delegate: AccountId32 }>;
      /**
       * A new approval to modify item attributes was removed.
       **/
      ItemAttributesApprovalRemoved: AugmentedEvent<ApiType, [collection: u32, item: u32, delegate: AccountId32], { collection: u32, item: u32, delegate: AccountId32 }>;
      /**
       * An item was bought.
       **/
      ItemBought: AugmentedEvent<ApiType, [collection: u32, item: u32, price: u128, seller: AccountId32, buyer: AccountId32], { collection: u32, item: u32, price: u128, seller: AccountId32, buyer: AccountId32 }>;
      /**
       * Metadata has been cleared for an item.
       **/
      ItemMetadataCleared: AugmentedEvent<ApiType, [collection: u32, item: u32], { collection: u32, item: u32 }>;
      /**
       * New metadata has been set for an item.
       **/
      ItemMetadataSet: AugmentedEvent<ApiType, [collection: u32, item: u32, data: Bytes], { collection: u32, item: u32, data: Bytes }>;
      /**
       * The price for the item was removed.
       **/
      ItemPriceRemoved: AugmentedEvent<ApiType, [collection: u32, item: u32], { collection: u32, item: u32 }>;
      /**
       * The price was set for the item.
       **/
      ItemPriceSet: AugmentedEvent<ApiType, [collection: u32, item: u32, price: u128, whitelistedBuyer: Option<AccountId32>], { collection: u32, item: u32, price: u128, whitelistedBuyer: Option<AccountId32> }>;
      /**
       * `item` metadata or attributes were locked.
       **/
      ItemPropertiesLocked: AugmentedEvent<ApiType, [collection: u32, item: u32, lockMetadata: bool, lockAttributes: bool], { collection: u32, item: u32, lockMetadata: bool, lockAttributes: bool }>;
      /**
       * An `item` became non-transferable.
       **/
      ItemTransferLocked: AugmentedEvent<ApiType, [collection: u32, item: u32], { collection: u32, item: u32 }>;
      /**
       * An `item` became transferable.
       **/
      ItemTransferUnlocked: AugmentedEvent<ApiType, [collection: u32, item: u32], { collection: u32, item: u32 }>;
      /**
       * Event gets emitted when the `NextCollectionId` gets incremented.
       **/
      NextCollectionIdIncremented: AugmentedEvent<ApiType, [nextId: Option<u32>], { nextId: Option<u32> }>;
      /**
       * The owner changed.
       **/
      OwnerChanged: AugmentedEvent<ApiType, [collection: u32, newOwner: AccountId32], { collection: u32, newOwner: AccountId32 }>;
      /**
       * Ownership acceptance has changed for an account.
       **/
      OwnershipAcceptanceChanged: AugmentedEvent<ApiType, [who: AccountId32, maybeCollection: Option<u32>], { who: AccountId32, maybeCollection: Option<u32> }>;
      /**
       * A new attribute in the `Pallet` namespace was set for the `collection` or an `item`
       * within that `collection`.
       **/
      PalletAttributeSet: AugmentedEvent<ApiType, [collection: u32, item: Option<u32>, attribute: PalletNftsPalletAttributes, value: Bytes], { collection: u32, item: Option<u32>, attribute: PalletNftsPalletAttributes, value: Bytes }>;
      /**
       * New attributes have been set for an `item` of the `collection`.
       **/
      PreSignedAttributesSet: AugmentedEvent<ApiType, [collection: u32, item: u32, namespace: PalletNftsAttributeNamespace], { collection: u32, item: u32, namespace: PalletNftsAttributeNamespace }>;
      /**
       * The deposit for a set of `item`s within a `collection` has been updated.
       **/
      Redeposited: AugmentedEvent<ApiType, [collection: u32, successfulItems: Vec<u32>], { collection: u32, successfulItems: Vec<u32> }>;
      /**
       * The swap was cancelled.
       **/
      SwapCancelled: AugmentedEvent<ApiType, [offeredCollection: u32, offeredItem: u32, desiredCollection: u32, desiredItem: Option<u32>, price: Option<PalletNftsPriceWithDirection>, deadline: u32], { offeredCollection: u32, offeredItem: u32, desiredCollection: u32, desiredItem: Option<u32>, price: Option<PalletNftsPriceWithDirection>, deadline: u32 }>;
      /**
       * The swap has been claimed.
       **/
      SwapClaimed: AugmentedEvent<ApiType, [sentCollection: u32, sentItem: u32, sentItemOwner: AccountId32, receivedCollection: u32, receivedItem: u32, receivedItemOwner: AccountId32, price: Option<PalletNftsPriceWithDirection>, deadline: u32], { sentCollection: u32, sentItem: u32, sentItemOwner: AccountId32, receivedCollection: u32, receivedItem: u32, receivedItemOwner: AccountId32, price: Option<PalletNftsPriceWithDirection>, deadline: u32 }>;
      /**
       * An `item` swap intent was created.
       **/
      SwapCreated: AugmentedEvent<ApiType, [offeredCollection: u32, offeredItem: u32, desiredCollection: u32, desiredItem: Option<u32>, price: Option<PalletNftsPriceWithDirection>, deadline: u32], { offeredCollection: u32, offeredItem: u32, desiredCollection: u32, desiredItem: Option<u32>, price: Option<PalletNftsPriceWithDirection>, deadline: u32 }>;
      /**
       * The management team changed.
       **/
      TeamChanged: AugmentedEvent<ApiType, [collection: u32, issuer: Option<AccountId32>, admin: Option<AccountId32>, freezer: Option<AccountId32>], { collection: u32, issuer: Option<AccountId32>, admin: Option<AccountId32>, freezer: Option<AccountId32> }>;
      /**
       * A tip was sent.
       **/
      TipSent: AugmentedEvent<ApiType, [collection: u32, item: u32, sender: AccountId32, receiver: AccountId32, amount: u128], { collection: u32, item: u32, sender: AccountId32, receiver: AccountId32, amount: u128 }>;
      /**
       * An `item` of a `collection` has been approved by the `owner` for transfer by
       * a `delegate`.
       **/
      TransferApproved: AugmentedEvent<ApiType, [collection: u32, item: u32, owner: AccountId32, delegate: AccountId32, deadline: Option<u32>], { collection: u32, item: u32, owner: AccountId32, delegate: AccountId32, deadline: Option<u32> }>;
      /**
       * An `item` was transferred.
       **/
      Transferred: AugmentedEvent<ApiType, [collection: u32, item: u32, from: AccountId32, to: AccountId32], { collection: u32, item: u32, from: AccountId32, to: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    nis: {
      /**
       * A bid was dropped from a queue because of another, more substantial, bid was present.
       **/
      BidDropped: AugmentedEvent<ApiType, [who: AccountId32, amount: u128, duration: u32], { who: AccountId32, amount: u128, duration: u32 }>;
      /**
       * A bid was successfully placed.
       **/
      BidPlaced: AugmentedEvent<ApiType, [who: AccountId32, amount: u128, duration: u32], { who: AccountId32, amount: u128, duration: u32 }>;
      /**
       * A bid was successfully removed (before being accepted).
       **/
      BidRetracted: AugmentedEvent<ApiType, [who: AccountId32, amount: u128, duration: u32], { who: AccountId32, amount: u128, duration: u32 }>;
      /**
       * An automatic funding of the deficit was made.
       **/
      Funded: AugmentedEvent<ApiType, [deficit: u128], { deficit: u128 }>;
      /**
       * A bid was accepted. The balance may not be released until expiry.
       **/
      Issued: AugmentedEvent<ApiType, [index: u32, expiry: u32, who: AccountId32, proportion: Perquintill, amount: u128], { index: u32, expiry: u32, who: AccountId32, proportion: Perquintill, amount: u128 }>;
      /**
       * An receipt has been (at least partially) thawed.
       **/
      Thawed: AugmentedEvent<ApiType, [index: u32, who: AccountId32, proportion: Perquintill, amount: u128, dropped: bool], { index: u32, who: AccountId32, proportion: Perquintill, amount: u128, dropped: bool }>;
      /**
       * A receipt was transferred.
       **/
      Transferred: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, index: u32], { from: AccountId32, to: AccountId32, index: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    nominationPools: {
      /**
       * A member has became bonded in a pool.
       **/
      Bonded: AugmentedEvent<ApiType, [member: AccountId32, poolId: u32, bonded: u128, joined: bool], { member: AccountId32, poolId: u32, bonded: u128, joined: bool }>;
      /**
       * A pool has been created.
       **/
      Created: AugmentedEvent<ApiType, [depositor: AccountId32, poolId: u32], { depositor: AccountId32, poolId: u32 }>;
      /**
       * A pool has been destroyed.
       **/
      Destroyed: AugmentedEvent<ApiType, [poolId: u32], { poolId: u32 }>;
      /**
       * Global parameters regulating nomination pools have been updated.
       **/
      GlobalParamsUpdated: AugmentedEvent<ApiType, [minJoinBond: u128, minCreateBond: u128, maxPools: Option<u32>, maxMembers: Option<u32>, maxMembersPerPool: Option<u32>, globalMaxCommission: Option<Perbill>], { minJoinBond: u128, minCreateBond: u128, maxPools: Option<u32>, maxMembers: Option<u32>, maxMembersPerPool: Option<u32>, globalMaxCommission: Option<Perbill> }>;
      /**
       * A pool member's claim permission has been updated.
       **/
      MemberClaimPermissionUpdated: AugmentedEvent<ApiType, [member: AccountId32, permission: PalletNominationPoolsClaimPermission], { member: AccountId32, permission: PalletNominationPoolsClaimPermission }>;
      /**
       * A member has been removed from a pool.
       * 
       * The removal can be voluntary (withdrawn all unbonded funds) or involuntary (kicked).
       * Any funds that are still delegated (i.e. dangling delegation) are released and are
       * represented by `released_balance`.
       **/
      MemberRemoved: AugmentedEvent<ApiType, [poolId: u32, member: AccountId32, releasedBalance: u128], { poolId: u32, member: AccountId32, releasedBalance: u128 }>;
      /**
       * A pool's metadata was updated.
       **/
      MetadataUpdated: AugmentedEvent<ApiType, [poolId: u32, caller: AccountId32], { poolId: u32, caller: AccountId32 }>;
      /**
       * Topped up deficit in frozen ED of the reward pool.
       **/
      MinBalanceDeficitAdjusted: AugmentedEvent<ApiType, [poolId: u32, amount: u128], { poolId: u32, amount: u128 }>;
      /**
       * Claimed excess frozen ED of af the reward pool.
       **/
      MinBalanceExcessAdjusted: AugmentedEvent<ApiType, [poolId: u32, amount: u128], { poolId: u32, amount: u128 }>;
      /**
       * A payout has been made to a member.
       **/
      PaidOut: AugmentedEvent<ApiType, [member: AccountId32, poolId: u32, payout: u128], { member: AccountId32, poolId: u32, payout: u128 }>;
      /**
       * A pool's commission `change_rate` has been changed.
       **/
      PoolCommissionChangeRateUpdated: AugmentedEvent<ApiType, [poolId: u32, changeRate: PalletNominationPoolsCommissionChangeRate], { poolId: u32, changeRate: PalletNominationPoolsCommissionChangeRate }>;
      /**
       * Pool commission has been claimed.
       **/
      PoolCommissionClaimed: AugmentedEvent<ApiType, [poolId: u32, commission: u128], { poolId: u32, commission: u128 }>;
      /**
       * Pool commission claim permission has been updated.
       **/
      PoolCommissionClaimPermissionUpdated: AugmentedEvent<ApiType, [poolId: u32, permission: Option<PalletNominationPoolsCommissionClaimPermission>], { poolId: u32, permission: Option<PalletNominationPoolsCommissionClaimPermission> }>;
      /**
       * A pool's commission setting has been changed.
       **/
      PoolCommissionUpdated: AugmentedEvent<ApiType, [poolId: u32, current: Option<ITuple<[Perbill, AccountId32]>>], { poolId: u32, current: Option<ITuple<[Perbill, AccountId32]>> }>;
      /**
       * A pool's maximum commission setting has been changed.
       **/
      PoolMaxCommissionUpdated: AugmentedEvent<ApiType, [poolId: u32, maxCommission: Perbill], { poolId: u32, maxCommission: Perbill }>;
      /**
       * A pool's nominating account (or the pool's root account) has nominated a validator set
       * on behalf of the pool.
       **/
      PoolNominationMade: AugmentedEvent<ApiType, [poolId: u32, caller: AccountId32], { poolId: u32, caller: AccountId32 }>;
      /**
       * The pool is chilled i.e. no longer nominating.
       **/
      PoolNominatorChilled: AugmentedEvent<ApiType, [poolId: u32, caller: AccountId32], { poolId: u32, caller: AccountId32 }>;
      /**
       * The active balance of pool `pool_id` has been slashed to `balance`.
       **/
      PoolSlashed: AugmentedEvent<ApiType, [poolId: u32, balance: u128], { poolId: u32, balance: u128 }>;
      /**
       * The roles of a pool have been updated to the given new roles. Note that the depositor
       * can never change.
       **/
      RolesUpdated: AugmentedEvent<ApiType, [root: Option<AccountId32>, bouncer: Option<AccountId32>, nominator: Option<AccountId32>], { root: Option<AccountId32>, bouncer: Option<AccountId32>, nominator: Option<AccountId32> }>;
      /**
       * The state of a pool has changed
       **/
      StateChanged: AugmentedEvent<ApiType, [poolId: u32, newState: PalletNominationPoolsPoolState], { poolId: u32, newState: PalletNominationPoolsPoolState }>;
      /**
       * A member has unbonded from their pool.
       * 
       * - `balance` is the corresponding balance of the number of points that has been
       * requested to be unbonded (the argument of the `unbond` transaction) from the bonded
       * pool.
       * - `points` is the number of points that are issued as a result of `balance` being
       * dissolved into the corresponding unbonding pool.
       * - `era` is the era in which the balance will be unbonded.
       * In the absence of slashing, these values will match. In the presence of slashing, the
       * number of points that are issued in the unbonding pool will be less than the amount
       * requested to be unbonded.
       **/
      Unbonded: AugmentedEvent<ApiType, [member: AccountId32, poolId: u32, balance: u128, points: u128, era: u32], { member: AccountId32, poolId: u32, balance: u128, points: u128, era: u32 }>;
      /**
       * The unbond pool at `era` of pool `pool_id` has been slashed to `balance`.
       **/
      UnbondingPoolSlashed: AugmentedEvent<ApiType, [poolId: u32, era: u32, balance: u128], { poolId: u32, era: u32, balance: u128 }>;
      /**
       * A member has withdrawn from their pool.
       * 
       * The given number of `points` have been dissolved in return of `balance`.
       * 
       * Similar to `Unbonded` event, in the absence of slashing, the ratio of point to balance
       * will be 1.
       **/
      Withdrawn: AugmentedEvent<ApiType, [member: AccountId32, poolId: u32, balance: u128, points: u128], { member: AccountId32, poolId: u32, balance: u128, points: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    offences: {
      /**
       * There is an offence reported of the given `kind` happened at the `session_index` and
       * (kind-specific) time slot. This event is not deposited for duplicate slashes.
       * \[kind, timeslot\].
       **/
      Offence: AugmentedEvent<ApiType, [kind: U8aFixed, timeslot: Bytes], { kind: U8aFixed, timeslot: Bytes }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    parameters: {
      /**
       * A Parameter was set.
       * 
       * Is also emitted when the value was not changed.
       **/
      Updated: AugmentedEvent<ApiType, [key: KitchensinkRuntimeRuntimeParametersKey, oldValue: Option<KitchensinkRuntimeRuntimeParametersValue>, newValue: Option<KitchensinkRuntimeRuntimeParametersValue>], { key: KitchensinkRuntimeRuntimeParametersKey, oldValue: Option<KitchensinkRuntimeRuntimeParametersValue>, newValue: Option<KitchensinkRuntimeRuntimeParametersValue> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    poolAssets: {
      /**
       * Accounts were destroyed for given asset.
       **/
      AccountsDestroyed: AugmentedEvent<ApiType, [assetId: u32, accountsDestroyed: u32, accountsRemaining: u32], { assetId: u32, accountsDestroyed: u32, accountsRemaining: u32 }>;
      /**
       * An approval for account `delegate` was cancelled by `owner`.
       **/
      ApprovalCancelled: AugmentedEvent<ApiType, [assetId: u32, owner: AccountId32, delegate: AccountId32], { assetId: u32, owner: AccountId32, delegate: AccountId32 }>;
      /**
       * Approvals were destroyed for given asset.
       **/
      ApprovalsDestroyed: AugmentedEvent<ApiType, [assetId: u32, approvalsDestroyed: u32, approvalsRemaining: u32], { assetId: u32, approvalsDestroyed: u32, approvalsRemaining: u32 }>;
      /**
       * (Additional) funds have been approved for transfer to a destination account.
       **/
      ApprovedTransfer: AugmentedEvent<ApiType, [assetId: u32, source: AccountId32, delegate: AccountId32, amount: u128], { assetId: u32, source: AccountId32, delegate: AccountId32, amount: u128 }>;
      /**
       * Some asset `asset_id` was frozen.
       **/
      AssetFrozen: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
      /**
       * The min_balance of an asset has been updated by the asset owner.
       **/
      AssetMinBalanceChanged: AugmentedEvent<ApiType, [assetId: u32, newMinBalance: u128], { assetId: u32, newMinBalance: u128 }>;
      /**
       * An asset has had its attributes changed by the `Force` origin.
       **/
      AssetStatusChanged: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
      /**
       * Some asset `asset_id` was thawed.
       **/
      AssetThawed: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
      /**
       * Some account `who` was blocked.
       **/
      Blocked: AugmentedEvent<ApiType, [assetId: u32, who: AccountId32], { assetId: u32, who: AccountId32 }>;
      /**
       * Some assets were destroyed.
       **/
      Burned: AugmentedEvent<ApiType, [assetId: u32, owner: AccountId32, balance: u128], { assetId: u32, owner: AccountId32, balance: u128 }>;
      /**
       * Some asset class was created.
       **/
      Created: AugmentedEvent<ApiType, [assetId: u32, creator: AccountId32, owner: AccountId32], { assetId: u32, creator: AccountId32, owner: AccountId32 }>;
      /**
       * Some assets were deposited (e.g. for transaction fees).
       **/
      Deposited: AugmentedEvent<ApiType, [assetId: u32, who: AccountId32, amount: u128], { assetId: u32, who: AccountId32, amount: u128 }>;
      /**
       * An asset class was destroyed.
       **/
      Destroyed: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
      /**
       * An asset class is in the process of being destroyed.
       **/
      DestructionStarted: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
      /**
       * Some asset class was force-created.
       **/
      ForceCreated: AugmentedEvent<ApiType, [assetId: u32, owner: AccountId32], { assetId: u32, owner: AccountId32 }>;
      /**
       * Some account `who` was frozen.
       **/
      Frozen: AugmentedEvent<ApiType, [assetId: u32, who: AccountId32], { assetId: u32, who: AccountId32 }>;
      /**
       * Some assets were issued.
       **/
      Issued: AugmentedEvent<ApiType, [assetId: u32, owner: AccountId32, amount: u128], { assetId: u32, owner: AccountId32, amount: u128 }>;
      /**
       * Metadata has been cleared for an asset.
       **/
      MetadataCleared: AugmentedEvent<ApiType, [assetId: u32], { assetId: u32 }>;
      /**
       * New metadata has been set for an asset.
       **/
      MetadataSet: AugmentedEvent<ApiType, [assetId: u32, name: Bytes, symbol_: Bytes, decimals: u8, isFrozen: bool], { assetId: u32, name: Bytes, symbol: Bytes, decimals: u8, isFrozen: bool }>;
      /**
       * The owner changed.
       **/
      OwnerChanged: AugmentedEvent<ApiType, [assetId: u32, owner: AccountId32], { assetId: u32, owner: AccountId32 }>;
      /**
       * The management team changed.
       **/
      TeamChanged: AugmentedEvent<ApiType, [assetId: u32, issuer: AccountId32, admin: AccountId32, freezer: AccountId32], { assetId: u32, issuer: AccountId32, admin: AccountId32, freezer: AccountId32 }>;
      /**
       * Some account `who` was thawed.
       **/
      Thawed: AugmentedEvent<ApiType, [assetId: u32, who: AccountId32], { assetId: u32, who: AccountId32 }>;
      /**
       * Some account `who` was created with a deposit from `depositor`.
       **/
      Touched: AugmentedEvent<ApiType, [assetId: u32, who: AccountId32, depositor: AccountId32], { assetId: u32, who: AccountId32, depositor: AccountId32 }>;
      /**
       * Some assets were transferred.
       **/
      Transferred: AugmentedEvent<ApiType, [assetId: u32, from: AccountId32, to: AccountId32, amount: u128], { assetId: u32, from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * An `amount` was transferred in its entirety from `owner` to `destination` by
       * the approved `delegate`.
       **/
      TransferredApproved: AugmentedEvent<ApiType, [assetId: u32, owner: AccountId32, delegate: AccountId32, destination: AccountId32, amount: u128], { assetId: u32, owner: AccountId32, delegate: AccountId32, destination: AccountId32, amount: u128 }>;
      /**
       * Some assets were withdrawn from the account (e.g. for transaction fees).
       **/
      Withdrawn: AugmentedEvent<ApiType, [assetId: u32, who: AccountId32, amount: u128], { assetId: u32, who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    pov: {
      TestEvent: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    preimage: {
      /**
       * A preimage has ben cleared.
       **/
      Cleared: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * A preimage has been noted.
       **/
      Noted: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * A preimage has been requested.
       **/
      Requested: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    proxy: {
      /**
       * An announcement was placed to make a call in the future.
       **/
      Announced: AugmentedEvent<ApiType, [real: AccountId32, proxy: AccountId32, callHash: H256], { real: AccountId32, proxy: AccountId32, callHash: H256 }>;
      /**
       * A deposit stored for proxies or announcements was poked / updated.
       **/
      DepositPoked: AugmentedEvent<ApiType, [who: AccountId32, kind: PalletProxyDepositKind, oldDeposit: u128, newDeposit: u128], { who: AccountId32, kind: PalletProxyDepositKind, oldDeposit: u128, newDeposit: u128 }>;
      /**
       * A proxy was added.
       **/
      ProxyAdded: AugmentedEvent<ApiType, [delegator: AccountId32, delegatee: AccountId32, proxyType: KitchensinkRuntimeProxyType, delay: u32], { delegator: AccountId32, delegatee: AccountId32, proxyType: KitchensinkRuntimeProxyType, delay: u32 }>;
      /**
       * A proxy was executed correctly, with the given.
       **/
      ProxyExecuted: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A proxy was removed.
       **/
      ProxyRemoved: AugmentedEvent<ApiType, [delegator: AccountId32, delegatee: AccountId32, proxyType: KitchensinkRuntimeProxyType, delay: u32], { delegator: AccountId32, delegatee: AccountId32, proxyType: KitchensinkRuntimeProxyType, delay: u32 }>;
      /**
       * A pure account has been created by new proxy with given
       * disambiguation index and proxy type.
       **/
      PureCreated: AugmentedEvent<ApiType, [pure: AccountId32, who: AccountId32, proxyType: KitchensinkRuntimeProxyType, disambiguationIndex: u16], { pure: AccountId32, who: AccountId32, proxyType: KitchensinkRuntimeProxyType, disambiguationIndex: u16 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    rankedCollective: {
      /**
       * A member `who` has been added.
       **/
      MemberAdded: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * The member `who` had their `AccountId` changed to `new_who`.
       **/
      MemberExchanged: AugmentedEvent<ApiType, [who: AccountId32, newWho: AccountId32], { who: AccountId32, newWho: AccountId32 }>;
      /**
       * The member `who` of given `rank` has been removed from the collective.
       **/
      MemberRemoved: AugmentedEvent<ApiType, [who: AccountId32, rank: u16], { who: AccountId32, rank: u16 }>;
      /**
       * The member `who`se rank has been changed to the given `rank`.
       **/
      RankChanged: AugmentedEvent<ApiType, [who: AccountId32, rank: u16], { who: AccountId32, rank: u16 }>;
      /**
       * The member `who` has voted for the `poll` with the given `vote` leading to an updated
       * `tally`.
       **/
      Voted: AugmentedEvent<ApiType, [who: AccountId32, poll: u32, vote: PalletRankedCollectiveVoteRecord, tally: PalletRankedCollectiveTally], { who: AccountId32, poll: u32, vote: PalletRankedCollectiveVoteRecord, tally: PalletRankedCollectiveTally }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    rankedPolls: {
      /**
       * A referendum has been approved and its proposal has been scheduled.
       **/
      Approved: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A referendum has been cancelled.
       **/
      Cancelled: AugmentedEvent<ApiType, [index: u32, tally: PalletRankedCollectiveTally], { index: u32, tally: PalletRankedCollectiveTally }>;
      ConfirmAborted: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A referendum has ended its confirmation phase and is ready for approval.
       **/
      Confirmed: AugmentedEvent<ApiType, [index: u32, tally: PalletRankedCollectiveTally], { index: u32, tally: PalletRankedCollectiveTally }>;
      ConfirmStarted: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * The decision deposit has been placed.
       **/
      DecisionDepositPlaced: AugmentedEvent<ApiType, [index: u32, who: AccountId32, amount: u128], { index: u32, who: AccountId32, amount: u128 }>;
      /**
       * The decision deposit has been refunded.
       **/
      DecisionDepositRefunded: AugmentedEvent<ApiType, [index: u32, who: AccountId32, amount: u128], { index: u32, who: AccountId32, amount: u128 }>;
      /**
       * A referendum has moved into the deciding phase.
       **/
      DecisionStarted: AugmentedEvent<ApiType, [index: u32, track: u16, proposal: FrameSupportPreimagesBounded, tally: PalletRankedCollectiveTally], { index: u32, track: u16, proposal: FrameSupportPreimagesBounded, tally: PalletRankedCollectiveTally }>;
      /**
       * A deposit has been slashed.
       **/
      DepositSlashed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * A referendum has been killed.
       **/
      Killed: AugmentedEvent<ApiType, [index: u32, tally: PalletRankedCollectiveTally], { index: u32, tally: PalletRankedCollectiveTally }>;
      /**
       * Metadata for a referendum has been cleared.
       **/
      MetadataCleared: AugmentedEvent<ApiType, [index: u32, hash_: H256], { index: u32, hash_: H256 }>;
      /**
       * Metadata for a referendum has been set.
       **/
      MetadataSet: AugmentedEvent<ApiType, [index: u32, hash_: H256], { index: u32, hash_: H256 }>;
      /**
       * A proposal has been rejected by referendum.
       **/
      Rejected: AugmentedEvent<ApiType, [index: u32, tally: PalletRankedCollectiveTally], { index: u32, tally: PalletRankedCollectiveTally }>;
      /**
       * The submission deposit has been refunded.
       **/
      SubmissionDepositRefunded: AugmentedEvent<ApiType, [index: u32, who: AccountId32, amount: u128], { index: u32, who: AccountId32, amount: u128 }>;
      /**
       * A referendum has been submitted.
       **/
      Submitted: AugmentedEvent<ApiType, [index: u32, track: u16, proposal: FrameSupportPreimagesBounded], { index: u32, track: u16, proposal: FrameSupportPreimagesBounded }>;
      /**
       * A referendum has been timed out without being decided.
       **/
      TimedOut: AugmentedEvent<ApiType, [index: u32, tally: PalletRankedCollectiveTally], { index: u32, tally: PalletRankedCollectiveTally }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    recovery: {
      /**
       * Lost account has been successfully recovered by rescuer account.
       **/
      AccountRecovered: AugmentedEvent<ApiType, [lostAccount: AccountId32, rescuerAccount: AccountId32], { lostAccount: AccountId32, rescuerAccount: AccountId32 }>;
      /**
       * A recovery process for lost account by rescuer account has been closed.
       **/
      RecoveryClosed: AugmentedEvent<ApiType, [lostAccount: AccountId32, rescuerAccount: AccountId32], { lostAccount: AccountId32, rescuerAccount: AccountId32 }>;
      /**
       * A recovery process has been set up for an account.
       **/
      RecoveryCreated: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * A recovery process has been initiated for lost account by rescuer account.
       **/
      RecoveryInitiated: AugmentedEvent<ApiType, [lostAccount: AccountId32, rescuerAccount: AccountId32], { lostAccount: AccountId32, rescuerAccount: AccountId32 }>;
      /**
       * A recovery process has been removed for an account.
       **/
      RecoveryRemoved: AugmentedEvent<ApiType, [lostAccount: AccountId32], { lostAccount: AccountId32 }>;
      /**
       * A recovery process for lost account by rescuer account has been vouched for by sender.
       **/
      RecoveryVouched: AugmentedEvent<ApiType, [lostAccount: AccountId32, rescuerAccount: AccountId32, sender: AccountId32], { lostAccount: AccountId32, rescuerAccount: AccountId32, sender: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    referenda: {
      /**
       * A referendum has been approved and its proposal has been scheduled.
       **/
      Approved: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A referendum has been cancelled.
       **/
      Cancelled: AugmentedEvent<ApiType, [index: u32, tally: PalletConvictionVotingTally], { index: u32, tally: PalletConvictionVotingTally }>;
      ConfirmAborted: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A referendum has ended its confirmation phase and is ready for approval.
       **/
      Confirmed: AugmentedEvent<ApiType, [index: u32, tally: PalletConvictionVotingTally], { index: u32, tally: PalletConvictionVotingTally }>;
      ConfirmStarted: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * The decision deposit has been placed.
       **/
      DecisionDepositPlaced: AugmentedEvent<ApiType, [index: u32, who: AccountId32, amount: u128], { index: u32, who: AccountId32, amount: u128 }>;
      /**
       * The decision deposit has been refunded.
       **/
      DecisionDepositRefunded: AugmentedEvent<ApiType, [index: u32, who: AccountId32, amount: u128], { index: u32, who: AccountId32, amount: u128 }>;
      /**
       * A referendum has moved into the deciding phase.
       **/
      DecisionStarted: AugmentedEvent<ApiType, [index: u32, track: u16, proposal: FrameSupportPreimagesBounded, tally: PalletConvictionVotingTally], { index: u32, track: u16, proposal: FrameSupportPreimagesBounded, tally: PalletConvictionVotingTally }>;
      /**
       * A deposit has been slashed.
       **/
      DepositSlashed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * A referendum has been killed.
       **/
      Killed: AugmentedEvent<ApiType, [index: u32, tally: PalletConvictionVotingTally], { index: u32, tally: PalletConvictionVotingTally }>;
      /**
       * Metadata for a referendum has been cleared.
       **/
      MetadataCleared: AugmentedEvent<ApiType, [index: u32, hash_: H256], { index: u32, hash_: H256 }>;
      /**
       * Metadata for a referendum has been set.
       **/
      MetadataSet: AugmentedEvent<ApiType, [index: u32, hash_: H256], { index: u32, hash_: H256 }>;
      /**
       * A proposal has been rejected by referendum.
       **/
      Rejected: AugmentedEvent<ApiType, [index: u32, tally: PalletConvictionVotingTally], { index: u32, tally: PalletConvictionVotingTally }>;
      /**
       * The submission deposit has been refunded.
       **/
      SubmissionDepositRefunded: AugmentedEvent<ApiType, [index: u32, who: AccountId32, amount: u128], { index: u32, who: AccountId32, amount: u128 }>;
      /**
       * A referendum has been submitted.
       **/
      Submitted: AugmentedEvent<ApiType, [index: u32, track: u16, proposal: FrameSupportPreimagesBounded], { index: u32, track: u16, proposal: FrameSupportPreimagesBounded }>;
      /**
       * A referendum has been timed out without being decided.
       **/
      TimedOut: AugmentedEvent<ApiType, [index: u32, tally: PalletConvictionVotingTally], { index: u32, tally: PalletConvictionVotingTally }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    remark: {
      /**
       * Stored data off chain.
       **/
      Stored: AugmentedEvent<ApiType, [sender: AccountId32, contentHash: H256], { sender: AccountId32, contentHash: H256 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    revive: {
      /**
       * A custom event emitted by the contract.
       **/
      ContractEmitted: AugmentedEvent<ApiType, [contract: H160, data: Bytes, topics: Vec<H256>], { contract: H160, data: Bytes, topics: Vec<H256> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    rootTesting: {
      /**
       * Event dispatched when the trigger_defensive extrinsic is called.
       **/
      DefensiveTestCall: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    safeMode: {
      /**
       * Could not hold funds for entering or extending the safe-mode.
       * 
       * This error comes from the underlying `Currency`.
       **/
      CannotDeposit: AugmentedEvent<ApiType, []>;
      /**
       * Could not release funds for entering or extending the safe-mode.
       * 
       * This error comes from the underlying `Currency`.
       **/
      CannotRelease: AugmentedEvent<ApiType, []>;
      /**
       * An account reserved funds for either entering or extending the safe-mode.
       **/
      DepositPlaced: AugmentedEvent<ApiType, [account: AccountId32, amount: u128], { account: AccountId32, amount: u128 }>;
      /**
       * An account had a reserve released that was reserved.
       **/
      DepositReleased: AugmentedEvent<ApiType, [account: AccountId32, amount: u128], { account: AccountId32, amount: u128 }>;
      /**
       * An account had reserve slashed that was reserved.
       **/
      DepositSlashed: AugmentedEvent<ApiType, [account: AccountId32, amount: u128], { account: AccountId32, amount: u128 }>;
      /**
       * The safe-mode was entered until inclusively this block.
       **/
      Entered: AugmentedEvent<ApiType, [until: u32], { until: u32 }>;
      /**
       * Exited the safe-mode for a specific reason.
       **/
      Exited: AugmentedEvent<ApiType, [reason: PalletSafeModeExitReason], { reason: PalletSafeModeExitReason }>;
      /**
       * The safe-mode was extended until inclusively this block.
       **/
      Extended: AugmentedEvent<ApiType, [until: u32], { until: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    salary: {
      /**
       * The next cycle begins.
       **/
      CycleStarted: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A member is inducted into the payroll.
       **/
      Inducted: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * A payment happened.
       **/
      Paid: AugmentedEvent<ApiType, [who: AccountId32, beneficiary: AccountId32, amount: u128, id: Null], { who: AccountId32, beneficiary: AccountId32, amount: u128, id: Null }>;
      /**
       * A member registered for a payout.
       **/
      Registered: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * A member swapped their account.
       **/
      Swapped: AugmentedEvent<ApiType, [who: AccountId32, newWho: AccountId32], { who: AccountId32, newWho: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    scheduler: {
      /**
       * Agenda is incomplete from `when`.
       **/
      AgendaIncomplete: AugmentedEvent<ApiType, [when: u32], { when: u32 }>;
      /**
       * The call for the provided hash was not found so the task has been aborted.
       **/
      CallUnavailable: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * Canceled some task.
       **/
      Canceled: AugmentedEvent<ApiType, [when: u32, index: u32], { when: u32, index: u32 }>;
      /**
       * Dispatched some task.
       **/
      Dispatched: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>, result: Result<Null, SpRuntimeDispatchError>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed>, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * The given task was unable to be renewed since the agenda is full at that block.
       **/
      PeriodicFailed: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * The given task can never be executed since it is overweight.
       **/
      PermanentlyOverweight: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * Cancel a retry configuration for some task.
       **/
      RetryCancelled: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * The given task was unable to be retried since the agenda is full at that block or there
       * was not enough weight to reschedule it.
       **/
      RetryFailed: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * Set a retry configuration for some task.
       **/
      RetrySet: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>, period: u32, retries: u8], { task: ITuple<[u32, u32]>, id: Option<U8aFixed>, period: u32, retries: u8 }>;
      /**
       * Scheduled some task.
       **/
      Scheduled: AugmentedEvent<ApiType, [when: u32, index: u32], { when: u32, index: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    session: {
      /**
       * New session has happened. Note that the argument is the session index, not the
       * block number as the type might suggest.
       **/
      NewSession: AugmentedEvent<ApiType, [sessionIndex: u32], { sessionIndex: u32 }>;
      /**
       * Validator has been disabled.
       **/
      ValidatorDisabled: AugmentedEvent<ApiType, [validator: AccountId32], { validator: AccountId32 }>;
      /**
       * Validator has been re-enabled.
       **/
      ValidatorReenabled: AugmentedEvent<ApiType, [validator: AccountId32], { validator: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    skipFeelessPayment: {
      /**
       * A transaction fee was skipped.
       **/
      FeeSkipped: AugmentedEvent<ApiType, [origin: KitchensinkRuntimeOriginCaller], { origin: KitchensinkRuntimeOriginCaller }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    society: {
      /**
       * A candidate was dropped (due to an excess of bids in the system).
       **/
      AutoUnbid: AugmentedEvent<ApiType, [candidate: AccountId32], { candidate: AccountId32 }>;
      /**
       * A membership bid just happened. The given account is the candidate's ID and their offer
       * is the second.
       **/
      Bid: AugmentedEvent<ApiType, [candidateId: AccountId32, offer: u128], { candidateId: AccountId32, offer: u128 }>;
      /**
       * A candidate has been suspended
       **/
      CandidateSuspended: AugmentedEvent<ApiType, [candidate: AccountId32], { candidate: AccountId32 }>;
      /**
       * A member has been challenged
       **/
      Challenged: AugmentedEvent<ApiType, [member: AccountId32], { member: AccountId32 }>;
      /**
       * A vote has been placed for a defending member
       **/
      DefenderVote: AugmentedEvent<ApiType, [voter: AccountId32, vote: bool], { voter: AccountId32, vote: bool }>;
      /**
       * Some funds were deposited into the society account.
       **/
      Deposit: AugmentedEvent<ApiType, [value: u128], { value: u128 }>;
      /**
       * A \[member\] got elevated to \[rank\].
       **/
      Elevated: AugmentedEvent<ApiType, [member: AccountId32, rank: u32], { member: AccountId32, rank: u32 }>;
      /**
       * The society is founded by the given identity.
       **/
      Founded: AugmentedEvent<ApiType, [founder: AccountId32], { founder: AccountId32 }>;
      /**
       * A group of candidates have been inducted. The batch's primary is the first value, the
       * batch in full is the second.
       **/
      Inducted: AugmentedEvent<ApiType, [primary: AccountId32, candidates: Vec<AccountId32>], { primary: AccountId32, candidates: Vec<AccountId32> }>;
      /**
       * A member has been suspended
       **/
      MemberSuspended: AugmentedEvent<ApiType, [member: AccountId32], { member: AccountId32 }>;
      /**
       * A new set of \[params\] has been set for the group.
       **/
      NewParams: AugmentedEvent<ApiType, [params: PalletSocietyGroupParams], { params: PalletSocietyGroupParams }>;
      /**
       * A suspended member has been judged.
       **/
      SuspendedMemberJudgement: AugmentedEvent<ApiType, [who: AccountId32, judged: bool], { who: AccountId32, judged: bool }>;
      /**
       * A candidate was dropped (by their request).
       **/
      Unbid: AugmentedEvent<ApiType, [candidate: AccountId32], { candidate: AccountId32 }>;
      /**
       * Society is unfounded.
       **/
      Unfounded: AugmentedEvent<ApiType, [founder: AccountId32], { founder: AccountId32 }>;
      /**
       * A candidate was dropped (by request of who vouched for them).
       **/
      Unvouch: AugmentedEvent<ApiType, [candidate: AccountId32], { candidate: AccountId32 }>;
      /**
       * A vote has been placed
       **/
      Vote: AugmentedEvent<ApiType, [candidate: AccountId32, voter: AccountId32, vote: bool], { candidate: AccountId32, voter: AccountId32, vote: bool }>;
      /**
       * A membership bid just happened by vouching. The given account is the candidate's ID and
       * their offer is the second. The vouching party is the third.
       **/
      Vouch: AugmentedEvent<ApiType, [candidateId: AccountId32, offer: u128, vouching: AccountId32], { candidateId: AccountId32, offer: u128, vouching: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    staking: {
      /**
       * An account has bonded this amount. \[stash, amount\]
       * 
       * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
       * it will not be emitted for staking rewards when they are added to stake.
       **/
      Bonded: AugmentedEvent<ApiType, [stash: AccountId32, amount: u128], { stash: AccountId32, amount: u128 }>;
      /**
       * An account has stopped participating as either a validator or nominator.
       **/
      Chilled: AugmentedEvent<ApiType, [stash: AccountId32], { stash: AccountId32 }>;
      /**
       * Report of a controller batch deprecation.
       **/
      ControllerBatchDeprecated: AugmentedEvent<ApiType, [failures: u32], { failures: u32 }>;
      /**
       * Staking balance migrated from locks to holds, with any balance that could not be held
       * is force withdrawn.
       **/
      CurrencyMigrated: AugmentedEvent<ApiType, [stash: AccountId32, forceWithdraw: u128], { stash: AccountId32, forceWithdraw: u128 }>;
      /**
       * The era payout has been set; the first balance is the validator-payout; the second is
       * the remainder from the maximum amount of reward.
       **/
      EraPaid: AugmentedEvent<ApiType, [eraIndex: u32, validatorPayout: u128, remainder: u128], { eraIndex: u32, validatorPayout: u128, remainder: u128 }>;
      /**
       * A new force era mode was set.
       **/
      ForceEra: AugmentedEvent<ApiType, [mode: PalletStakingForcing], { mode: PalletStakingForcing }>;
      /**
       * A nominator has been kicked from a validator.
       **/
      Kicked: AugmentedEvent<ApiType, [nominator: AccountId32, stash: AccountId32], { nominator: AccountId32, stash: AccountId32 }>;
      /**
       * An old slashing report from a prior era was discarded because it could
       * not be processed.
       **/
      OldSlashingReportDiscarded: AugmentedEvent<ApiType, [sessionIndex: u32], { sessionIndex: u32 }>;
      /**
       * A Page of stakers rewards are getting paid. `next` is `None` if all pages are claimed.
       **/
      PayoutStarted: AugmentedEvent<ApiType, [eraIndex: u32, validatorStash: AccountId32, page: u32, next: Option<u32>], { eraIndex: u32, validatorStash: AccountId32, page: u32, next: Option<u32> }>;
      /**
       * The nominator has been rewarded by this amount to this destination.
       **/
      Rewarded: AugmentedEvent<ApiType, [stash: AccountId32, dest: PalletStakingRewardDestination, amount: u128], { stash: AccountId32, dest: PalletStakingRewardDestination, amount: u128 }>;
      /**
       * A staker (validator or nominator) has been slashed by the given amount.
       **/
      Slashed: AugmentedEvent<ApiType, [staker: AccountId32, amount: u128], { staker: AccountId32, amount: u128 }>;
      /**
       * A slash for the given validator, for the given percentage of their stake, at the given
       * era as been reported.
       **/
      SlashReported: AugmentedEvent<ApiType, [validator: AccountId32, fraction: Perbill, slashEra: u32], { validator: AccountId32, fraction: Perbill, slashEra: u32 }>;
      /**
       * Targets size limit reached.
       **/
      SnapshotTargetsSizeExceeded: AugmentedEvent<ApiType, [size_: u32], { size_: u32 }>;
      /**
       * Voters size limit reached.
       **/
      SnapshotVotersSizeExceeded: AugmentedEvent<ApiType, [size_: u32], { size_: u32 }>;
      /**
       * A new set of stakers was elected.
       **/
      StakersElected: AugmentedEvent<ApiType, []>;
      /**
       * The election failed. No new era is planned.
       **/
      StakingElectionFailed: AugmentedEvent<ApiType, []>;
      /**
       * An account has unbonded this amount.
       **/
      Unbonded: AugmentedEvent<ApiType, [stash: AccountId32, amount: u128], { stash: AccountId32, amount: u128 }>;
      /**
       * A validator has set their preferences.
       **/
      ValidatorPrefsSet: AugmentedEvent<ApiType, [stash: AccountId32, prefs: PalletStakingValidatorPrefs], { stash: AccountId32, prefs: PalletStakingValidatorPrefs }>;
      /**
       * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
       * from the unlocking queue.
       **/
      Withdrawn: AugmentedEvent<ApiType, [stash: AccountId32, amount: u128], { stash: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    statement: {
      /**
       * A new statement is submitted
       **/
      NewStatement: AugmentedEvent<ApiType, [account: AccountId32, statement: SpStatementStoreStatement], { account: AccountId32, statement: SpStatementStoreStatement }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    stateTrieMigration: {
      /**
       * The auto migration task finished.
       **/
      AutoMigrationFinished: AugmentedEvent<ApiType, []>;
      /**
       * Migration got halted due to an error or miss-configuration.
       **/
      Halted: AugmentedEvent<ApiType, [error: PalletStateTrieMigrationError], { error: PalletStateTrieMigrationError }>;
      /**
       * Given number of `(top, child)` keys were migrated respectively, with the given
       * `compute`.
       **/
      Migrated: AugmentedEvent<ApiType, [top: u32, child: u32, compute: PalletStateTrieMigrationMigrationCompute], { top: u32, child: u32, compute: PalletStateTrieMigrationMigrationCompute }>;
      /**
       * Some account got slashed by the given amount.
       **/
      Slashed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    sudo: {
      /**
       * The sudo key has been updated.
       **/
      KeyChanged: AugmentedEvent<ApiType, [old: Option<AccountId32>, new_: AccountId32], { old: Option<AccountId32>, new_: AccountId32 }>;
      /**
       * The key was permanently removed.
       **/
      KeyRemoved: AugmentedEvent<ApiType, []>;
      /**
       * A sudo call just took place.
       **/
      Sudid: AugmentedEvent<ApiType, [sudoResult: Result<Null, SpRuntimeDispatchError>], { sudoResult: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A [sudo_as](Pallet::sudo_as) call just took place.
       **/
      SudoAsDone: AugmentedEvent<ApiType, [sudoResult: Result<Null, SpRuntimeDispatchError>], { sudoResult: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed.
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSystemDispatchEventInfo], { dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSystemDispatchEventInfo }>;
      /**
       * An extrinsic completed successfully.
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [dispatchInfo: FrameSystemDispatchEventInfo], { dispatchInfo: FrameSystemDispatchEventInfo }>;
      /**
       * An account was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * A new account was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * An invalid authorized upgrade was rejected while trying to apply it.
       **/
      RejectedInvalidAuthorizedUpgrade: AugmentedEvent<ApiType, [codeHash: H256, error: SpRuntimeDispatchError], { codeHash: H256, error: SpRuntimeDispatchError }>;
      /**
       * On on-chain remark happened.
       **/
      Remarked: AugmentedEvent<ApiType, [sender: AccountId32, hash_: H256], { sender: AccountId32, hash_: H256 }>;
      /**
       * An upgrade was authorized.
       **/
      UpgradeAuthorized: AugmentedEvent<ApiType, [codeHash: H256, checkVersion: bool], { codeHash: H256, checkVersion: bool }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    technicalCommittee: {
      /**
       * A motion was approved by the required threshold.
       **/
      Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       **/
      Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256, yes: u32, no: u32 }>;
      /**
       * A motion was not approved by the required threshold.
       **/
      Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       **/
      Executed: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A proposal was killed.
       **/
      Killed: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       **/
      MemberExecuted: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * Some cost for storing a proposal was burned.
       **/
      ProposalCostBurned: AugmentedEvent<ApiType, [proposalHash: H256, who: AccountId32], { proposalHash: H256, who: AccountId32 }>;
      /**
       * Some cost for storing a proposal was released.
       **/
      ProposalCostReleased: AugmentedEvent<ApiType, [proposalHash: H256, who: AccountId32], { proposalHash: H256, who: AccountId32 }>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       **/
      Proposed: AugmentedEvent<ApiType, [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32], { account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32 }>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       **/
      Voted: AugmentedEvent<ApiType, [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32], { account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    technicalMembership: {
      /**
       * Phantom member, never used.
       **/
      Dummy: AugmentedEvent<ApiType, []>;
      /**
       * One of the members' keys changed.
       **/
      KeyChanged: AugmentedEvent<ApiType, []>;
      /**
       * The given member was added; see the transaction for who.
       **/
      MemberAdded: AugmentedEvent<ApiType, []>;
      /**
       * The given member was removed; see the transaction for who.
       **/
      MemberRemoved: AugmentedEvent<ApiType, []>;
      /**
       * The membership was reset; see the transaction for who the new set is.
       **/
      MembersReset: AugmentedEvent<ApiType, []>;
      /**
       * Two members were swapped; see the transaction for who.
       **/
      MembersSwapped: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    tips: {
      /**
       * A new tip suggestion has been opened.
       **/
      NewTip: AugmentedEvent<ApiType, [tipHash: H256], { tipHash: H256 }>;
      /**
       * A tip suggestion has been closed.
       **/
      TipClosed: AugmentedEvent<ApiType, [tipHash: H256, who: AccountId32, payout: u128], { tipHash: H256, who: AccountId32, payout: u128 }>;
      /**
       * A tip suggestion has reached threshold and is closing.
       **/
      TipClosing: AugmentedEvent<ApiType, [tipHash: H256], { tipHash: H256 }>;
      /**
       * A tip suggestion has been retracted.
       **/
      TipRetracted: AugmentedEvent<ApiType, [tipHash: H256], { tipHash: H256 }>;
      /**
       * A tip suggestion has been slashed.
       **/
      TipSlashed: AugmentedEvent<ApiType, [tipHash: H256, finder: AccountId32, deposit: u128], { tipHash: H256, finder: AccountId32, deposit: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    transactionPayment: {
      /**
       * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
       * has been paid by `who`.
       **/
      TransactionFeePaid: AugmentedEvent<ApiType, [who: AccountId32, actualFee: u128, tip: u128], { who: AccountId32, actualFee: u128, tip: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    transactionStorage: {
      /**
       * Storage proof was successfully checked.
       **/
      ProofChecked: AugmentedEvent<ApiType, []>;
      /**
       * Renewed data under specified index.
       **/
      Renewed: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * Stored data under specified index.
       **/
      Stored: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    treasury: {
      /**
       * A new asset spend proposal has been approved.
       **/
      AssetSpendApproved: AugmentedEvent<ApiType, [index: u32, assetKind: FrameSupportTokensFungibleUnionOfNativeOrWithId, amount: u128, beneficiary: AccountId32, validFrom: u32, expireAt: u32], { index: u32, assetKind: FrameSupportTokensFungibleUnionOfNativeOrWithId, amount: u128, beneficiary: AccountId32, validFrom: u32, expireAt: u32 }>;
      /**
       * An approved spend was voided.
       **/
      AssetSpendVoided: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * Some funds have been allocated.
       **/
      Awarded: AugmentedEvent<ApiType, [proposalIndex: u32, award: u128, account: AccountId32], { proposalIndex: u32, award: u128, account: AccountId32 }>;
      /**
       * Some of our funds have been burnt.
       **/
      Burnt: AugmentedEvent<ApiType, [burntFunds: u128], { burntFunds: u128 }>;
      /**
       * Some funds have been deposited.
       **/
      Deposit: AugmentedEvent<ApiType, [value: u128], { value: u128 }>;
      /**
       * A payment happened.
       **/
      Paid: AugmentedEvent<ApiType, [index: u32, paymentId: Null], { index: u32, paymentId: Null }>;
      /**
       * A payment failed and can be retried.
       **/
      PaymentFailed: AugmentedEvent<ApiType, [index: u32, paymentId: Null], { index: u32, paymentId: Null }>;
      /**
       * Spending has finished; this is the amount that rolls over until next spend.
       **/
      Rollover: AugmentedEvent<ApiType, [rolloverBalance: u128], { rolloverBalance: u128 }>;
      /**
       * A new spend proposal has been approved.
       **/
      SpendApproved: AugmentedEvent<ApiType, [proposalIndex: u32, amount: u128, beneficiary: AccountId32], { proposalIndex: u32, amount: u128, beneficiary: AccountId32 }>;
      /**
       * We have ended a spend period and will now allocate funds.
       **/
      Spending: AugmentedEvent<ApiType, [budgetRemaining: u128], { budgetRemaining: u128 }>;
      /**
       * A spend was processed and removed from the storage. It might have been successfully
       * paid or it may have expired.
       **/
      SpendProcessed: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * The inactive funds of the pallet have been updated.
       **/
      UpdatedInactive: AugmentedEvent<ApiType, [reactivated: u128, deactivated: u128], { reactivated: u128, deactivated: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    txPause: {
      /**
       * This pallet, or a specific call is now paused.
       **/
      CallPaused: AugmentedEvent<ApiType, [fullName: ITuple<[Bytes, Bytes]>], { fullName: ITuple<[Bytes, Bytes]> }>;
      /**
       * This pallet, or a specific call is now unpaused.
       **/
      CallUnpaused: AugmentedEvent<ApiType, [fullName: ITuple<[Bytes, Bytes]>], { fullName: ITuple<[Bytes, Bytes]> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    uniques: {
      /**
       * An approval for a `delegate` account to transfer the `item` of an item
       * `collection` was cancelled by its `owner`.
       **/
      ApprovalCancelled: AugmentedEvent<ApiType, [collection: u32, item: u32, owner: AccountId32, delegate: AccountId32], { collection: u32, item: u32, owner: AccountId32, delegate: AccountId32 }>;
      /**
       * An `item` of a `collection` has been approved by the `owner` for transfer by
       * a `delegate`.
       **/
      ApprovedTransfer: AugmentedEvent<ApiType, [collection: u32, item: u32, owner: AccountId32, delegate: AccountId32], { collection: u32, item: u32, owner: AccountId32, delegate: AccountId32 }>;
      /**
       * Attribute metadata has been cleared for a `collection` or `item`.
       **/
      AttributeCleared: AugmentedEvent<ApiType, [collection: u32, maybeItem: Option<u32>, key: Bytes], { collection: u32, maybeItem: Option<u32>, key: Bytes }>;
      /**
       * New attribute metadata has been set for a `collection` or `item`.
       **/
      AttributeSet: AugmentedEvent<ApiType, [collection: u32, maybeItem: Option<u32>, key: Bytes, value: Bytes], { collection: u32, maybeItem: Option<u32>, key: Bytes, value: Bytes }>;
      /**
       * An `item` was destroyed.
       **/
      Burned: AugmentedEvent<ApiType, [collection: u32, item: u32, owner: AccountId32], { collection: u32, item: u32, owner: AccountId32 }>;
      /**
       * Some `collection` was frozen.
       **/
      CollectionFrozen: AugmentedEvent<ApiType, [collection: u32], { collection: u32 }>;
      /**
       * Max supply has been set for a collection.
       **/
      CollectionMaxSupplySet: AugmentedEvent<ApiType, [collection: u32, maxSupply: u32], { collection: u32, maxSupply: u32 }>;
      /**
       * Metadata has been cleared for a `collection`.
       **/
      CollectionMetadataCleared: AugmentedEvent<ApiType, [collection: u32], { collection: u32 }>;
      /**
       * New metadata has been set for a `collection`.
       **/
      CollectionMetadataSet: AugmentedEvent<ApiType, [collection: u32, data: Bytes, isFrozen: bool], { collection: u32, data: Bytes, isFrozen: bool }>;
      /**
       * Some `collection` was thawed.
       **/
      CollectionThawed: AugmentedEvent<ApiType, [collection: u32], { collection: u32 }>;
      /**
       * A `collection` was created.
       **/
      Created: AugmentedEvent<ApiType, [collection: u32, creator: AccountId32, owner: AccountId32], { collection: u32, creator: AccountId32, owner: AccountId32 }>;
      /**
       * A `collection` was destroyed.
       **/
      Destroyed: AugmentedEvent<ApiType, [collection: u32], { collection: u32 }>;
      /**
       * A `collection` was force-created.
       **/
      ForceCreated: AugmentedEvent<ApiType, [collection: u32, owner: AccountId32], { collection: u32, owner: AccountId32 }>;
      /**
       * Some `item` was frozen.
       **/
      Frozen: AugmentedEvent<ApiType, [collection: u32, item: u32], { collection: u32, item: u32 }>;
      /**
       * An `item` was issued.
       **/
      Issued: AugmentedEvent<ApiType, [collection: u32, item: u32, owner: AccountId32], { collection: u32, item: u32, owner: AccountId32 }>;
      /**
       * An item was bought.
       **/
      ItemBought: AugmentedEvent<ApiType, [collection: u32, item: u32, price: u128, seller: AccountId32, buyer: AccountId32], { collection: u32, item: u32, price: u128, seller: AccountId32, buyer: AccountId32 }>;
      /**
       * The price for the instance was removed.
       **/
      ItemPriceRemoved: AugmentedEvent<ApiType, [collection: u32, item: u32], { collection: u32, item: u32 }>;
      /**
       * The price was set for the instance.
       **/
      ItemPriceSet: AugmentedEvent<ApiType, [collection: u32, item: u32, price: u128, whitelistedBuyer: Option<AccountId32>], { collection: u32, item: u32, price: u128, whitelistedBuyer: Option<AccountId32> }>;
      /**
       * A `collection` has had its attributes changed by the `Force` origin.
       **/
      ItemStatusChanged: AugmentedEvent<ApiType, [collection: u32], { collection: u32 }>;
      /**
       * Metadata has been cleared for an item.
       **/
      MetadataCleared: AugmentedEvent<ApiType, [collection: u32, item: u32], { collection: u32, item: u32 }>;
      /**
       * New metadata has been set for an item.
       **/
      MetadataSet: AugmentedEvent<ApiType, [collection: u32, item: u32, data: Bytes, isFrozen: bool], { collection: u32, item: u32, data: Bytes, isFrozen: bool }>;
      /**
       * The owner changed.
       **/
      OwnerChanged: AugmentedEvent<ApiType, [collection: u32, newOwner: AccountId32], { collection: u32, newOwner: AccountId32 }>;
      /**
       * Ownership acceptance has changed for an account.
       **/
      OwnershipAcceptanceChanged: AugmentedEvent<ApiType, [who: AccountId32, maybeCollection: Option<u32>], { who: AccountId32, maybeCollection: Option<u32> }>;
      /**
       * Metadata has been cleared for an item.
       **/
      Redeposited: AugmentedEvent<ApiType, [collection: u32, successfulItems: Vec<u32>], { collection: u32, successfulItems: Vec<u32> }>;
      /**
       * The management team changed.
       **/
      TeamChanged: AugmentedEvent<ApiType, [collection: u32, issuer: AccountId32, admin: AccountId32, freezer: AccountId32], { collection: u32, issuer: AccountId32, admin: AccountId32, freezer: AccountId32 }>;
      /**
       * Some `item` was thawed.
       **/
      Thawed: AugmentedEvent<ApiType, [collection: u32, item: u32], { collection: u32, item: u32 }>;
      /**
       * An `item` was transferred.
       **/
      Transferred: AugmentedEvent<ApiType, [collection: u32, item: u32, from: AccountId32, to: AccountId32], { collection: u32, item: u32, from: AccountId32, to: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    utility: {
      /**
       * Batch of dispatches completed fully with no error.
       **/
      BatchCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches completed but has errors.
       **/
      BatchCompletedWithErrors: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
       * well as the error.
       **/
      BatchInterrupted: AugmentedEvent<ApiType, [index: u32, error: SpRuntimeDispatchError], { index: u32, error: SpRuntimeDispatchError }>;
      /**
       * A call was dispatched.
       **/
      DispatchedAs: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * The fallback call was dispatched.
       **/
      IfElseFallbackCalled: AugmentedEvent<ApiType, [mainError: SpRuntimeDispatchError], { mainError: SpRuntimeDispatchError }>;
      /**
       * Main call was dispatched.
       **/
      IfElseMainSuccess: AugmentedEvent<ApiType, []>;
      /**
       * A single item within a Batch of dispatches has completed with no error.
       **/
      ItemCompleted: AugmentedEvent<ApiType, []>;
      /**
       * A single item within a Batch of dispatches has completed with error.
       **/
      ItemFailed: AugmentedEvent<ApiType, [error: SpRuntimeDispatchError], { error: SpRuntimeDispatchError }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    vesting: {
      /**
       * An \[account\] has become fully vested.
       **/
      VestingCompleted: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * The amount vested has been updated. This could indicate a change in funds available.
       * The balance given is the amount which is left unvested (and thus locked).
       **/
      VestingUpdated: AugmentedEvent<ApiType, [account: AccountId32, unvested: u128], { account: AccountId32, unvested: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    voterList: {
      /**
       * Moved an account from one bag to another.
       **/
      Rebagged: AugmentedEvent<ApiType, [who: AccountId32, from: u64, to: u64], { who: AccountId32, from: u64, to: u64 }>;
      /**
       * Updated the score of some account to the given amount.
       **/
      ScoreUpdated: AugmentedEvent<ApiType, [who: AccountId32, newScore: u64], { who: AccountId32, newScore: u64 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    whitelist: {
      CallWhitelisted: AugmentedEvent<ApiType, [callHash: H256], { callHash: H256 }>;
      WhitelistedCallDispatched: AugmentedEvent<ApiType, [callHash: H256, result: Result<FrameSupportDispatchPostDispatchInfo, SpRuntimeDispatchErrorWithPostInfo>], { callHash: H256, result: Result<FrameSupportDispatchPostDispatchInfo, SpRuntimeDispatchErrorWithPostInfo> }>;
      WhitelistedCallRemoved: AugmentedEvent<ApiType, [callHash: H256], { callHash: H256 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
  } // AugmentedEvents
} // declare module

// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/events';

import type { ApiTypes, AugmentedEvent } from '@polkadot/api-base/types';
import type { Bytes, Null, Option, Result, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, H256, Permill } from '@polkadot/types/interfaces/runtime';
import type { AssetHubPolkadotRuntimeProxyType, CumulusPrimitivesCoreAggregateMessageOrigin, FrameSupportMessagesProcessMessageError, FrameSupportTokensMiscBalanceStatus, FrameSystemDispatchEventInfo, PalletMultisigTimepoint, PalletNftsAttributeNamespace, PalletNftsPalletAttributes, PalletNftsPriceWithDirection, PalletStateTrieMigrationError, PalletStateTrieMigrationMigrationCompute, SpRuntimeDispatchError, SpWeightsWeightV2Weight, StagingXcmV4Location, StagingXcmV5AssetAssets, StagingXcmV5Location, StagingXcmV5Response, StagingXcmV5TraitsOutcome, StagingXcmV5Xcm, XcmV5TraitsError, XcmVersionedAssets, XcmVersionedLocation } from '@polkadot/types/lookup';

export type __AugmentedEvent<ApiType extends ApiTypes> = AugmentedEvent<ApiType>;

declare module '@polkadot/api-base/types/events' {
  interface AugmentedEvents<ApiType extends ApiTypes> {
    assetConversion: {
      /**
       * A successful call of the `AddLiquidity` extrinsic will create this event.
       **/
      LiquidityAdded: AugmentedEvent<ApiType, [who: AccountId32, mintTo: AccountId32, poolId: ITuple<[StagingXcmV4Location, StagingXcmV4Location]>, amount1Provided: u128, amount2Provided: u128, lpToken: u32, lpTokenMinted: u128], { who: AccountId32, mintTo: AccountId32, poolId: ITuple<[StagingXcmV4Location, StagingXcmV4Location]>, amount1Provided: u128, amount2Provided: u128, lpToken: u32, lpTokenMinted: u128 }>;
      /**
       * A successful call of the `RemoveLiquidity` extrinsic will create this event.
       **/
      LiquidityRemoved: AugmentedEvent<ApiType, [who: AccountId32, withdrawTo: AccountId32, poolId: ITuple<[StagingXcmV4Location, StagingXcmV4Location]>, amount1: u128, amount2: u128, lpToken: u32, lpTokenBurned: u128, withdrawalFee: Permill], { who: AccountId32, withdrawTo: AccountId32, poolId: ITuple<[StagingXcmV4Location, StagingXcmV4Location]>, amount1: u128, amount2: u128, lpToken: u32, lpTokenBurned: u128, withdrawalFee: Permill }>;
      /**
       * A successful call of the `CreatePool` extrinsic will create this event.
       **/
      PoolCreated: AugmentedEvent<ApiType, [creator: AccountId32, poolId: ITuple<[StagingXcmV4Location, StagingXcmV4Location]>, poolAccount: AccountId32, lpToken: u32], { creator: AccountId32, poolId: ITuple<[StagingXcmV4Location, StagingXcmV4Location]>, poolAccount: AccountId32, lpToken: u32 }>;
      /**
       * Assets have been converted from one to another.
       **/
      SwapCreditExecuted: AugmentedEvent<ApiType, [amountIn: u128, amountOut: u128, path: Vec<ITuple<[StagingXcmV4Location, u128]>>], { amountIn: u128, amountOut: u128, path: Vec<ITuple<[StagingXcmV4Location, u128]>> }>;
      /**
       * Assets have been converted from one to another. Both `SwapExactTokenForToken`
       * and `SwapTokenForExactToken` will generate this event.
       **/
      SwapExecuted: AugmentedEvent<ApiType, [who: AccountId32, sendTo: AccountId32, amountIn: u128, amountOut: u128, path: Vec<ITuple<[StagingXcmV4Location, u128]>>], { who: AccountId32, sendTo: AccountId32, amountIn: u128, amountOut: u128, path: Vec<ITuple<[StagingXcmV4Location, u128]>> }>;
      /**
       * Pool has been touched in order to fulfill operational requirements.
       **/
      Touched: AugmentedEvent<ApiType, [poolId: ITuple<[StagingXcmV4Location, StagingXcmV4Location]>, who: AccountId32], { poolId: ITuple<[StagingXcmV4Location, StagingXcmV4Location]>, who: AccountId32 }>;
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
    assetTxPayment: {
      /**
       * A swap of the refund in native currency back to asset failed.
       **/
      AssetRefundFailed: AugmentedEvent<ApiType, [nativeAmountKept: u128], { nativeAmountKept: u128 }>;
      /**
       * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
       * has been paid by `who` in an asset `asset_id`.
       **/
      AssetTxFeePaid: AugmentedEvent<ApiType, [who: AccountId32, actualFee: u128, tip: u128, assetId: StagingXcmV4Location], { who: AccountId32, actualFee: u128, tip: u128, assetId: StagingXcmV4Location }>;
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
    collatorSelection: {
      /**
       * A new candidate joined.
       **/
      CandidateAdded: AugmentedEvent<ApiType, [accountId: AccountId32, deposit: u128], { accountId: AccountId32, deposit: u128 }>;
      /**
       * Bond of a candidate updated.
       **/
      CandidateBondUpdated: AugmentedEvent<ApiType, [accountId: AccountId32, deposit: u128], { accountId: AccountId32, deposit: u128 }>;
      /**
       * A candidate was removed.
       **/
      CandidateRemoved: AugmentedEvent<ApiType, [accountId: AccountId32], { accountId: AccountId32 }>;
      /**
       * An account was replaced in the candidate list by another one.
       **/
      CandidateReplaced: AugmentedEvent<ApiType, [old: AccountId32, new_: AccountId32, deposit: u128], { old: AccountId32, new_: AccountId32, deposit: u128 }>;
      /**
       * An account was unable to be added to the Invulnerables because they did not have keys
       * registered. Other Invulnerables may have been set.
       **/
      InvalidInvulnerableSkipped: AugmentedEvent<ApiType, [accountId: AccountId32], { accountId: AccountId32 }>;
      /**
       * A new Invulnerable was added.
       **/
      InvulnerableAdded: AugmentedEvent<ApiType, [accountId: AccountId32], { accountId: AccountId32 }>;
      /**
       * An Invulnerable was removed.
       **/
      InvulnerableRemoved: AugmentedEvent<ApiType, [accountId: AccountId32], { accountId: AccountId32 }>;
      /**
       * The candidacy bond was set.
       **/
      NewCandidacyBond: AugmentedEvent<ApiType, [bondAmount: u128], { bondAmount: u128 }>;
      /**
       * The number of desired candidates was set.
       **/
      NewDesiredCandidates: AugmentedEvent<ApiType, [desiredCandidates: u32], { desiredCandidates: u32 }>;
      /**
       * New Invulnerables were set.
       **/
      NewInvulnerables: AugmentedEvent<ApiType, [invulnerables: Vec<AccountId32>], { invulnerables: Vec<AccountId32> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    cumulusXcm: {
      /**
       * Downward message executed with the given outcome.
       * \[ id, outcome \]
       **/
      ExecutedDownward: AugmentedEvent<ApiType, [U8aFixed, StagingXcmV5TraitsOutcome]>;
      /**
       * Downward message is invalid XCM.
       * \[ id \]
       **/
      InvalidFormat: AugmentedEvent<ApiType, [U8aFixed]>;
      /**
       * Downward message is unsupported version of XCM.
       * \[ id \]
       **/
      UnsupportedVersion: AugmentedEvent<ApiType, [U8aFixed]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    foreignAssets: {
      /**
       * Accounts were destroyed for given asset.
       **/
      AccountsDestroyed: AugmentedEvent<ApiType, [assetId: StagingXcmV4Location, accountsDestroyed: u32, accountsRemaining: u32], { assetId: StagingXcmV4Location, accountsDestroyed: u32, accountsRemaining: u32 }>;
      /**
       * An approval for account `delegate` was cancelled by `owner`.
       **/
      ApprovalCancelled: AugmentedEvent<ApiType, [assetId: StagingXcmV4Location, owner: AccountId32, delegate: AccountId32], { assetId: StagingXcmV4Location, owner: AccountId32, delegate: AccountId32 }>;
      /**
       * Approvals were destroyed for given asset.
       **/
      ApprovalsDestroyed: AugmentedEvent<ApiType, [assetId: StagingXcmV4Location, approvalsDestroyed: u32, approvalsRemaining: u32], { assetId: StagingXcmV4Location, approvalsDestroyed: u32, approvalsRemaining: u32 }>;
      /**
       * (Additional) funds have been approved for transfer to a destination account.
       **/
      ApprovedTransfer: AugmentedEvent<ApiType, [assetId: StagingXcmV4Location, source: AccountId32, delegate: AccountId32, amount: u128], { assetId: StagingXcmV4Location, source: AccountId32, delegate: AccountId32, amount: u128 }>;
      /**
       * Some asset `asset_id` was frozen.
       **/
      AssetFrozen: AugmentedEvent<ApiType, [assetId: StagingXcmV4Location], { assetId: StagingXcmV4Location }>;
      /**
       * The min_balance of an asset has been updated by the asset owner.
       **/
      AssetMinBalanceChanged: AugmentedEvent<ApiType, [assetId: StagingXcmV4Location, newMinBalance: u128], { assetId: StagingXcmV4Location, newMinBalance: u128 }>;
      /**
       * An asset has had its attributes changed by the `Force` origin.
       **/
      AssetStatusChanged: AugmentedEvent<ApiType, [assetId: StagingXcmV4Location], { assetId: StagingXcmV4Location }>;
      /**
       * Some asset `asset_id` was thawed.
       **/
      AssetThawed: AugmentedEvent<ApiType, [assetId: StagingXcmV4Location], { assetId: StagingXcmV4Location }>;
      /**
       * Some account `who` was blocked.
       **/
      Blocked: AugmentedEvent<ApiType, [assetId: StagingXcmV4Location, who: AccountId32], { assetId: StagingXcmV4Location, who: AccountId32 }>;
      /**
       * Some assets were destroyed.
       **/
      Burned: AugmentedEvent<ApiType, [assetId: StagingXcmV4Location, owner: AccountId32, balance: u128], { assetId: StagingXcmV4Location, owner: AccountId32, balance: u128 }>;
      /**
       * Some asset class was created.
       **/
      Created: AugmentedEvent<ApiType, [assetId: StagingXcmV4Location, creator: AccountId32, owner: AccountId32], { assetId: StagingXcmV4Location, creator: AccountId32, owner: AccountId32 }>;
      /**
       * Some assets were deposited (e.g. for transaction fees).
       **/
      Deposited: AugmentedEvent<ApiType, [assetId: StagingXcmV4Location, who: AccountId32, amount: u128], { assetId: StagingXcmV4Location, who: AccountId32, amount: u128 }>;
      /**
       * An asset class was destroyed.
       **/
      Destroyed: AugmentedEvent<ApiType, [assetId: StagingXcmV4Location], { assetId: StagingXcmV4Location }>;
      /**
       * An asset class is in the process of being destroyed.
       **/
      DestructionStarted: AugmentedEvent<ApiType, [assetId: StagingXcmV4Location], { assetId: StagingXcmV4Location }>;
      /**
       * Some asset class was force-created.
       **/
      ForceCreated: AugmentedEvent<ApiType, [assetId: StagingXcmV4Location, owner: AccountId32], { assetId: StagingXcmV4Location, owner: AccountId32 }>;
      /**
       * Some account `who` was frozen.
       **/
      Frozen: AugmentedEvent<ApiType, [assetId: StagingXcmV4Location, who: AccountId32], { assetId: StagingXcmV4Location, who: AccountId32 }>;
      /**
       * Some assets were issued.
       **/
      Issued: AugmentedEvent<ApiType, [assetId: StagingXcmV4Location, owner: AccountId32, amount: u128], { assetId: StagingXcmV4Location, owner: AccountId32, amount: u128 }>;
      /**
       * Metadata has been cleared for an asset.
       **/
      MetadataCleared: AugmentedEvent<ApiType, [assetId: StagingXcmV4Location], { assetId: StagingXcmV4Location }>;
      /**
       * New metadata has been set for an asset.
       **/
      MetadataSet: AugmentedEvent<ApiType, [assetId: StagingXcmV4Location, name: Bytes, symbol_: Bytes, decimals: u8, isFrozen: bool], { assetId: StagingXcmV4Location, name: Bytes, symbol: Bytes, decimals: u8, isFrozen: bool }>;
      /**
       * The owner changed.
       **/
      OwnerChanged: AugmentedEvent<ApiType, [assetId: StagingXcmV4Location, owner: AccountId32], { assetId: StagingXcmV4Location, owner: AccountId32 }>;
      /**
       * The management team changed.
       **/
      TeamChanged: AugmentedEvent<ApiType, [assetId: StagingXcmV4Location, issuer: AccountId32, admin: AccountId32, freezer: AccountId32], { assetId: StagingXcmV4Location, issuer: AccountId32, admin: AccountId32, freezer: AccountId32 }>;
      /**
       * Some account `who` was thawed.
       **/
      Thawed: AugmentedEvent<ApiType, [assetId: StagingXcmV4Location, who: AccountId32], { assetId: StagingXcmV4Location, who: AccountId32 }>;
      /**
       * Some account `who` was created with a deposit from `depositor`.
       **/
      Touched: AugmentedEvent<ApiType, [assetId: StagingXcmV4Location, who: AccountId32, depositor: AccountId32], { assetId: StagingXcmV4Location, who: AccountId32, depositor: AccountId32 }>;
      /**
       * Some assets were transferred.
       **/
      Transferred: AugmentedEvent<ApiType, [assetId: StagingXcmV4Location, from: AccountId32, to: AccountId32, amount: u128], { assetId: StagingXcmV4Location, from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * An `amount` was transferred in its entirety from `owner` to `destination` by
       * the approved `delegate`.
       **/
      TransferredApproved: AugmentedEvent<ApiType, [assetId: StagingXcmV4Location, owner: AccountId32, delegate: AccountId32, destination: AccountId32, amount: u128], { assetId: StagingXcmV4Location, owner: AccountId32, delegate: AccountId32, destination: AccountId32, amount: u128 }>;
      /**
       * Some assets were withdrawn from the account (e.g. for transaction fees).
       **/
      Withdrawn: AugmentedEvent<ApiType, [assetId: StagingXcmV4Location, who: AccountId32, amount: u128], { assetId: StagingXcmV4Location, who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    messageQueue: {
      /**
       * Message placed in overweight queue.
       **/
      OverweightEnqueued: AugmentedEvent<ApiType, [id: U8aFixed, origin: CumulusPrimitivesCoreAggregateMessageOrigin, pageIndex: u32, messageIndex: u32], { id: U8aFixed, origin: CumulusPrimitivesCoreAggregateMessageOrigin, pageIndex: u32, messageIndex: u32 }>;
      /**
       * This page was reaped.
       **/
      PageReaped: AugmentedEvent<ApiType, [origin: CumulusPrimitivesCoreAggregateMessageOrigin, index: u32], { origin: CumulusPrimitivesCoreAggregateMessageOrigin, index: u32 }>;
      /**
       * Message is processed.
       **/
      Processed: AugmentedEvent<ApiType, [id: H256, origin: CumulusPrimitivesCoreAggregateMessageOrigin, weightUsed: SpWeightsWeightV2Weight, success: bool], { id: H256, origin: CumulusPrimitivesCoreAggregateMessageOrigin, weightUsed: SpWeightsWeightV2Weight, success: bool }>;
      /**
       * Message discarded due to an error in the `MessageProcessor` (usually a format error).
       **/
      ProcessingFailed: AugmentedEvent<ApiType, [id: H256, origin: CumulusPrimitivesCoreAggregateMessageOrigin, error: FrameSupportMessagesProcessMessageError], { id: H256, origin: CumulusPrimitivesCoreAggregateMessageOrigin, error: FrameSupportMessagesProcessMessageError }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    multisig: {
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
    parachainSystem: {
      /**
       * Downward messages were processed using the given weight.
       **/
      DownwardMessagesProcessed: AugmentedEvent<ApiType, [weightUsed: SpWeightsWeightV2Weight, dmqHead: H256], { weightUsed: SpWeightsWeightV2Weight, dmqHead: H256 }>;
      /**
       * Some downward messages have been received and will be processed.
       **/
      DownwardMessagesReceived: AugmentedEvent<ApiType, [count: u32], { count: u32 }>;
      /**
       * An upward message was sent to the relay chain.
       **/
      UpwardMessageSent: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>], { messageHash: Option<U8aFixed> }>;
      /**
       * The validation function was applied as of the contained relay chain block number.
       **/
      ValidationFunctionApplied: AugmentedEvent<ApiType, [relayChainBlockNum: u32], { relayChainBlockNum: u32 }>;
      /**
       * The relay-chain aborted the upgrade process.
       **/
      ValidationFunctionDiscarded: AugmentedEvent<ApiType, []>;
      /**
       * The validation function has been scheduled to apply.
       **/
      ValidationFunctionStored: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    polkadotXcm: {
      /**
       * Some assets have been claimed from an asset trap
       **/
      AssetsClaimed: AugmentedEvent<ApiType, [hash_: H256, origin: StagingXcmV5Location, assets: XcmVersionedAssets], { hash_: H256, origin: StagingXcmV5Location, assets: XcmVersionedAssets }>;
      /**
       * Some assets have been placed in an asset trap.
       **/
      AssetsTrapped: AugmentedEvent<ApiType, [hash_: H256, origin: StagingXcmV5Location, assets: XcmVersionedAssets], { hash_: H256, origin: StagingXcmV5Location, assets: XcmVersionedAssets }>;
      /**
       * Execution of an XCM message was attempted.
       **/
      Attempted: AugmentedEvent<ApiType, [outcome: StagingXcmV5TraitsOutcome], { outcome: StagingXcmV5TraitsOutcome }>;
      /**
       * Fees were paid from a location for an operation (often for using `SendXcm`).
       **/
      FeesPaid: AugmentedEvent<ApiType, [paying: StagingXcmV5Location, fees: StagingXcmV5AssetAssets], { paying: StagingXcmV5Location, fees: StagingXcmV5AssetAssets }>;
      /**
       * Expected query response has been received but the querier location of the response does
       * not match the expected. The query remains registered for a later, valid, response to
       * be received and acted upon.
       **/
      InvalidQuerier: AugmentedEvent<ApiType, [origin: StagingXcmV5Location, queryId: u64, expectedQuerier: StagingXcmV5Location, maybeActualQuerier: Option<StagingXcmV5Location>], { origin: StagingXcmV5Location, queryId: u64, expectedQuerier: StagingXcmV5Location, maybeActualQuerier: Option<StagingXcmV5Location> }>;
      /**
       * Expected query response has been received but the expected querier location placed in
       * storage by this runtime previously cannot be decoded. The query remains registered.
       * 
       * This is unexpected (since a location placed in storage in a previously executing
       * runtime should be readable prior to query timeout) and dangerous since the possibly
       * valid response will be dropped. Manual governance intervention is probably going to be
       * needed.
       **/
      InvalidQuerierVersion: AugmentedEvent<ApiType, [origin: StagingXcmV5Location, queryId: u64], { origin: StagingXcmV5Location, queryId: u64 }>;
      /**
       * Expected query response has been received but the origin location of the response does
       * not match that expected. The query remains registered for a later, valid, response to
       * be received and acted upon.
       **/
      InvalidResponder: AugmentedEvent<ApiType, [origin: StagingXcmV5Location, queryId: u64, expectedLocation: Option<StagingXcmV5Location>], { origin: StagingXcmV5Location, queryId: u64, expectedLocation: Option<StagingXcmV5Location> }>;
      /**
       * Expected query response has been received but the expected origin location placed in
       * storage by this runtime previously cannot be decoded. The query remains registered.
       * 
       * This is unexpected (since a location placed in storage in a previously executing
       * runtime should be readable prior to query timeout) and dangerous since the possibly
       * valid response will be dropped. Manual governance intervention is probably going to be
       * needed.
       **/
      InvalidResponderVersion: AugmentedEvent<ApiType, [origin: StagingXcmV5Location, queryId: u64], { origin: StagingXcmV5Location, queryId: u64 }>;
      /**
       * Query response has been received and query is removed. The registered notification has
       * been dispatched and executed successfully.
       **/
      Notified: AugmentedEvent<ApiType, [queryId: u64, palletIndex: u8, callIndex: u8], { queryId: u64, palletIndex: u8, callIndex: u8 }>;
      /**
       * Query response has been received and query is removed. The dispatch was unable to be
       * decoded into a `Call`; this might be due to dispatch function having a signature which
       * is not `(origin, QueryId, Response)`.
       **/
      NotifyDecodeFailed: AugmentedEvent<ApiType, [queryId: u64, palletIndex: u8, callIndex: u8], { queryId: u64, palletIndex: u8, callIndex: u8 }>;
      /**
       * Query response has been received and query is removed. There was a general error with
       * dispatching the notification call.
       **/
      NotifyDispatchError: AugmentedEvent<ApiType, [queryId: u64, palletIndex: u8, callIndex: u8], { queryId: u64, palletIndex: u8, callIndex: u8 }>;
      /**
       * Query response has been received and query is removed. The registered notification
       * could not be dispatched because the dispatch weight is greater than the maximum weight
       * originally budgeted by this runtime for the query result.
       **/
      NotifyOverweight: AugmentedEvent<ApiType, [queryId: u64, palletIndex: u8, callIndex: u8, actualWeight: SpWeightsWeightV2Weight, maxBudgetedWeight: SpWeightsWeightV2Weight], { queryId: u64, palletIndex: u8, callIndex: u8, actualWeight: SpWeightsWeightV2Weight, maxBudgetedWeight: SpWeightsWeightV2Weight }>;
      /**
       * A given location which had a version change subscription was dropped owing to an error
       * migrating the location to our new XCM format.
       **/
      NotifyTargetMigrationFail: AugmentedEvent<ApiType, [location: XcmVersionedLocation, queryId: u64], { location: XcmVersionedLocation, queryId: u64 }>;
      /**
       * A given location which had a version change subscription was dropped owing to an error
       * sending the notification to it.
       **/
      NotifyTargetSendFail: AugmentedEvent<ApiType, [location: StagingXcmV5Location, queryId: u64, error: XcmV5TraitsError], { location: StagingXcmV5Location, queryId: u64, error: XcmV5TraitsError }>;
      /**
       * Query response has been received and is ready for taking with `take_response`. There is
       * no registered notification call.
       **/
      ResponseReady: AugmentedEvent<ApiType, [queryId: u64, response: StagingXcmV5Response], { queryId: u64, response: StagingXcmV5Response }>;
      /**
       * Received query response has been read and removed.
       **/
      ResponseTaken: AugmentedEvent<ApiType, [queryId: u64], { queryId: u64 }>;
      /**
       * A XCM message was sent.
       **/
      Sent: AugmentedEvent<ApiType, [origin: StagingXcmV5Location, destination: StagingXcmV5Location, message: StagingXcmV5Xcm, messageId: U8aFixed], { origin: StagingXcmV5Location, destination: StagingXcmV5Location, message: StagingXcmV5Xcm, messageId: U8aFixed }>;
      /**
       * The supported version of a location has been changed. This might be through an
       * automatic notification or a manual intervention.
       **/
      SupportedVersionChanged: AugmentedEvent<ApiType, [location: StagingXcmV5Location, version: u32], { location: StagingXcmV5Location, version: u32 }>;
      /**
       * Query response received which does not match a registered query. This may be because a
       * matching query was never registered, it may be because it is a duplicate response, or
       * because the query timed out.
       **/
      UnexpectedResponse: AugmentedEvent<ApiType, [origin: StagingXcmV5Location, queryId: u64], { origin: StagingXcmV5Location, queryId: u64 }>;
      /**
       * An XCM version change notification message has been attempted to be sent.
       * 
       * The cost of sending it (borne by the chain) is included.
       **/
      VersionChangeNotified: AugmentedEvent<ApiType, [destination: StagingXcmV5Location, result: u32, cost: StagingXcmV5AssetAssets, messageId: U8aFixed], { destination: StagingXcmV5Location, result: u32, cost: StagingXcmV5AssetAssets, messageId: U8aFixed }>;
      /**
       * A XCM version migration finished.
       **/
      VersionMigrationFinished: AugmentedEvent<ApiType, [version: u32], { version: u32 }>;
      /**
       * We have requested that a remote chain send us XCM version change notifications.
       **/
      VersionNotifyRequested: AugmentedEvent<ApiType, [destination: StagingXcmV5Location, cost: StagingXcmV5AssetAssets, messageId: U8aFixed], { destination: StagingXcmV5Location, cost: StagingXcmV5AssetAssets, messageId: U8aFixed }>;
      /**
       * A remote has requested XCM version change notification from us and we have honored it.
       * A version information message is sent to them and its cost is included.
       **/
      VersionNotifyStarted: AugmentedEvent<ApiType, [destination: StagingXcmV5Location, cost: StagingXcmV5AssetAssets, messageId: U8aFixed], { destination: StagingXcmV5Location, cost: StagingXcmV5AssetAssets, messageId: U8aFixed }>;
      /**
       * We have requested that a remote chain stops sending us XCM version change
       * notifications.
       **/
      VersionNotifyUnrequested: AugmentedEvent<ApiType, [destination: StagingXcmV5Location, cost: StagingXcmV5AssetAssets, messageId: U8aFixed], { destination: StagingXcmV5Location, cost: StagingXcmV5AssetAssets, messageId: U8aFixed }>;
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
    proxy: {
      /**
       * An announcement was placed to make a call in the future.
       **/
      Announced: AugmentedEvent<ApiType, [real: AccountId32, proxy: AccountId32, callHash: H256], { real: AccountId32, proxy: AccountId32, callHash: H256 }>;
      /**
       * A proxy was added.
       **/
      ProxyAdded: AugmentedEvent<ApiType, [delegator: AccountId32, delegatee: AccountId32, proxyType: AssetHubPolkadotRuntimeProxyType, delay: u32], { delegator: AccountId32, delegatee: AccountId32, proxyType: AssetHubPolkadotRuntimeProxyType, delay: u32 }>;
      /**
       * A proxy was executed correctly, with the given.
       **/
      ProxyExecuted: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A proxy was removed.
       **/
      ProxyRemoved: AugmentedEvent<ApiType, [delegator: AccountId32, delegatee: AccountId32, proxyType: AssetHubPolkadotRuntimeProxyType, delay: u32], { delegator: AccountId32, delegatee: AccountId32, proxyType: AssetHubPolkadotRuntimeProxyType, delay: u32 }>;
      /**
       * A pure account has been created by new proxy with given
       * disambiguation index and proxy type.
       **/
      PureCreated: AugmentedEvent<ApiType, [pure: AccountId32, who: AccountId32, proxyType: AssetHubPolkadotRuntimeProxyType, disambiguationIndex: u16], { pure: AccountId32, who: AccountId32, proxyType: AssetHubPolkadotRuntimeProxyType, disambiguationIndex: u16 }>;
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
    toKusamaXcmRouter: {
      /**
       * Delivery fee factor has been decreased.
       **/
      DeliveryFeeFactorDecreased: AugmentedEvent<ApiType, [newValue: u128], { newValue: u128 }>;
      /**
       * Delivery fee factor has been increased.
       **/
      DeliveryFeeFactorIncreased: AugmentedEvent<ApiType, [newValue: u128], { newValue: u128 }>;
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
    xcmpQueue: {
      /**
       * An HRMP message was sent to a sibling parachain.
       **/
      XcmpMessageSent: AugmentedEvent<ApiType, [messageHash: U8aFixed], { messageHash: U8aFixed }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
  } // AugmentedEvents
} // declare module

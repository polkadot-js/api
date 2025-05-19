// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/submittable';

import type { ApiTypes, AugmentedSubmittable, SubmittableExtrinsic, SubmittableExtrinsicFunction } from '@polkadot/api-base/types';
import type { Bytes, Compact, Option, U8aFixed, Vec, bool, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H256, MultiAddress } from '@polkadot/types/interfaces/runtime';
import type { AssetHubPolkadotRuntimeOriginCaller, AssetHubPolkadotRuntimeProxyType, AssetHubPolkadotRuntimeSessionKeys, CumulusPrimitivesCoreAggregateMessageOrigin, CumulusPrimitivesParachainInherentParachainInherentData, PalletBalancesAdjustmentDirection, PalletMultisigTimepoint, PalletNftsAttributeNamespace, PalletNftsCancelAttributesApprovalWitness, PalletNftsCollectionConfig, PalletNftsDestroyWitness, PalletNftsItemConfig, PalletNftsItemTip, PalletNftsMintSettings, PalletNftsMintWitness, PalletNftsPreSignedAttributes, PalletNftsPreSignedMint, PalletNftsPriceWithDirection, PalletUniquesDestroyWitness, PalletVestingVestingInfo, SpRuntimeMultiSignature, SpWeightsWeightV2Weight, StagingXcmExecutorAssetTransferTransferType, StagingXcmV4Location, XcmV3WeightLimit, XcmVersionedAssetId, XcmVersionedAssets, XcmVersionedLocation, XcmVersionedXcm } from '@polkadot/types/lookup';

export type __AugmentedSubmittable = AugmentedSubmittable<() => unknown>;
export type __SubmittableExtrinsic<ApiType extends ApiTypes> = SubmittableExtrinsic<ApiType>;
export type __SubmittableExtrinsicFunction<ApiType extends ApiTypes> = SubmittableExtrinsicFunction<ApiType>;

declare module '@polkadot/api-base/types/submittable' {
  interface AugmentedSubmittables<ApiType extends ApiTypes> {
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
      addLiquidity: AugmentedSubmittable<(asset1: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, asset2: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, amount1Desired: u128 | AnyNumber | Uint8Array, amount2Desired: u128 | AnyNumber | Uint8Array, amount1Min: u128 | AnyNumber | Uint8Array, amount2Min: u128 | AnyNumber | Uint8Array, mintTo: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, StagingXcmV4Location, u128, u128, u128, u128, AccountId32]>;
      /**
       * Creates an empty liquidity pool and an associated new `lp_token` asset
       * (the id of which is returned in the `Event::PoolCreated` event).
       * 
       * Once a pool is created, someone may [`Pallet::add_liquidity`] to it.
       **/
      createPool: AugmentedSubmittable<(asset1: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, asset2: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, StagingXcmV4Location]>;
      /**
       * Allows you to remove liquidity by providing the `lp_token_burn` tokens that will be
       * burned in the process. With the usage of `amount1_min_receive`/`amount2_min_receive`
       * it's possible to control the min amount of returned tokens you're happy with.
       **/
      removeLiquidity: AugmentedSubmittable<(asset1: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, asset2: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, lpTokenBurn: u128 | AnyNumber | Uint8Array, amount1MinReceive: u128 | AnyNumber | Uint8Array, amount2MinReceive: u128 | AnyNumber | Uint8Array, withdrawTo: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, StagingXcmV4Location, u128, u128, u128, AccountId32]>;
      /**
       * Swap the exact amount of `asset1` into `asset2`.
       * `amount_out_min` param allows you to specify the min amount of the `asset2`
       * you're happy to receive.
       * 
       * [`AssetConversionApi::quote_price_exact_tokens_for_tokens`] runtime call can be called
       * for a quote.
       **/
      swapExactTokensForTokens: AugmentedSubmittable<(path: Vec<StagingXcmV4Location> | (StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array)[], amountIn: u128 | AnyNumber | Uint8Array, amountOutMin: u128 | AnyNumber | Uint8Array, sendTo: AccountId32 | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<StagingXcmV4Location>, u128, u128, AccountId32, bool]>;
      /**
       * Swap any amount of `asset1` to get the exact amount of `asset2`.
       * `amount_in_max` param allows to specify the max amount of the `asset1`
       * you're happy to provide.
       * 
       * [`AssetConversionApi::quote_price_tokens_for_exact_tokens`] runtime call can be called
       * for a quote.
       **/
      swapTokensForExactTokens: AugmentedSubmittable<(path: Vec<StagingXcmV4Location> | (StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array)[], amountOut: u128 | AnyNumber | Uint8Array, amountInMax: u128 | AnyNumber | Uint8Array, sendTo: AccountId32 | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<StagingXcmV4Location>, u128, u128, AccountId32, bool]>;
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
      touch: AugmentedSubmittable<(asset1: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, asset2: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, StagingXcmV4Location]>;
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
      approveTransfer: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, MultiAddress, Compact<u128>]>;
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
      block: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, MultiAddress]>;
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
      burn: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, MultiAddress, Compact<u128>]>;
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
      cancelApproval: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, MultiAddress]>;
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
      clearMetadata: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location]>;
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
      create: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, admin: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, minBalance: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, MultiAddress, u128]>;
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
      destroyAccounts: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location]>;
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
      destroyApprovals: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location]>;
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
      finishDestroy: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location]>;
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
      forceAssetStatus: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, issuer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, admin: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, freezer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, minBalance: Compact<u128> | AnyNumber | Uint8Array, isSufficient: bool | boolean | Uint8Array, isFrozen: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, MultiAddress, MultiAddress, MultiAddress, MultiAddress, Compact<u128>, bool, bool]>;
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
      forceCancelApproval: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, MultiAddress, MultiAddress]>;
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
      forceClearMetadata: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location]>;
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
      forceCreate: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, isSufficient: bool | boolean | Uint8Array, minBalance: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, MultiAddress, bool, Compact<u128>]>;
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
      forceSetMetadata: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, name: Bytes | string | Uint8Array, symbol: Bytes | string | Uint8Array, decimals: u8 | AnyNumber | Uint8Array, isFrozen: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, Bytes, Bytes, u8, bool]>;
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
      forceTransfer: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, MultiAddress, MultiAddress, Compact<u128>]>;
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
      freeze: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, MultiAddress]>;
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
      freezeAsset: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location]>;
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
      mint: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, MultiAddress, Compact<u128>]>;
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
       * Emits `Refunded` event when successful.
       **/
      refund: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, allowBurn: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, bool]>;
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
       * Emits `Refunded` event when successful.
       **/
      refundOther: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, MultiAddress]>;
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
      setMetadata: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, name: Bytes | string | Uint8Array, symbol: Bytes | string | Uint8Array, decimals: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, Bytes, Bytes, u8]>;
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
      setMinBalance: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, minBalance: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, u128]>;
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
      setTeam: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, issuer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, admin: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, freezer: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, MultiAddress, MultiAddress, MultiAddress]>;
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
       **/
      startDestroy: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location]>;
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
      thaw: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, MultiAddress]>;
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
      thawAsset: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location]>;
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
      touch: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location]>;
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
      touchOther: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, MultiAddress]>;
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
      transfer: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, MultiAddress, Compact<u128>]>;
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
      transferAll: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, MultiAddress, bool]>;
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
      transferApproved: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, destination: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, MultiAddress, MultiAddress, Compact<u128>]>;
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
      transferKeepAlive: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, MultiAddress, Compact<u128>]>;
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
      transferOwnership: AugmentedSubmittable<(id: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, owner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, MultiAddress]>;
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
      setValidationData: AugmentedSubmittable<(data: CumulusPrimitivesParachainInherentParachainInherentData | { validationData?: any; relayChainState?: any; downwardMessages?: any; horizontalMessages?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CumulusPrimitivesParachainInherentParachainInherentData]>;
      sudoSendUpwardMessage: AugmentedSubmittable<(message: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    polkadotXcm: {
      /**
       * Claims assets trapped on this pallet because of leftover assets during XCM execution.
       * 
       * - `origin`: Anyone can call this extrinsic.
       * - `assets`: The exact assets that were trapped. Use the version to specify what version
       * was the latest when they were trapped.
       * - `beneficiary`: The location/account where the claimed assets will be deposited.
       **/
      claimAssets: AugmentedSubmittable<(assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedAssets, XcmVersionedLocation]>;
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
      execute: AugmentedSubmittable<(message: XcmVersionedXcm | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedXcm, SpWeightsWeightV2Weight]>;
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
      forceSubscribeVersionNotify: AugmentedSubmittable<(location: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation]>;
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
      forceUnsubscribeVersionNotify: AugmentedSubmittable<(location: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation]>;
      /**
       * Extoll that a particular destination can be communicated with through a particular
       * version of XCM.
       * 
       * - `origin`: Must be an origin specified by AdminOrigin.
       * - `location`: The destination that is being described.
       * - `xcm_version`: The latest version of XCM that `location` supports.
       **/
      forceXcmVersion: AugmentedSubmittable<(location: StagingXcmV4Location | { parents?: any; interior?: any } | string | Uint8Array, version: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV4Location, u32]>;
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
      limitedReserveTransferAssets: AugmentedSubmittable<(dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, XcmVersionedLocation, XcmVersionedAssets, u32, XcmV3WeightLimit]>;
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
      limitedTeleportAssets: AugmentedSubmittable<(dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, XcmVersionedLocation, XcmVersionedAssets, u32, XcmV3WeightLimit]>;
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
      reserveTransferAssets: AugmentedSubmittable<(dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, XcmVersionedLocation, XcmVersionedAssets, u32]>;
      send: AugmentedSubmittable<(dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, message: XcmVersionedXcm | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, XcmVersionedXcm]>;
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
      teleportAssets: AugmentedSubmittable<(dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, XcmVersionedLocation, XcmVersionedAssets, u32]>;
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
      transferAssets: AugmentedSubmittable<(dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, beneficiary: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, XcmVersionedLocation, XcmVersionedAssets, u32, XcmV3WeightLimit]>;
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
      transferAssetsUsingTypeAndThen: AugmentedSubmittable<(dest: XcmVersionedLocation | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, assets: XcmVersionedAssets | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, assetsTransferType: StagingXcmExecutorAssetTransferTransferType | { Teleport: any } | { LocalReserve: any } | { DestinationReserve: any } | { RemoteReserve: any } | string | Uint8Array, remoteFeesId: XcmVersionedAssetId | { V3: any } | { V4: any } | string | Uint8Array, feesTransferType: StagingXcmExecutorAssetTransferTransferType | { Teleport: any } | { LocalReserve: any } | { DestinationReserve: any } | { RemoteReserve: any } | string | Uint8Array, customXcmOnDest: XcmVersionedXcm | { V2: any } | { V3: any } | { V4: any } | string | Uint8Array, weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedLocation, XcmVersionedAssets, StagingXcmExecutorAssetTransferTransferType, XcmVersionedAssetId, StagingXcmExecutorAssetTransferTransferType, XcmVersionedXcm, XcmV3WeightLimit]>;
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
      addProxy: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: AssetHubPolkadotRuntimeProxyType | 'Any' | 'NonTransfer' | 'CancelProxy' | 'Assets' | 'AssetOwner' | 'AssetManager' | 'Collator' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, AssetHubPolkadotRuntimeProxyType, u32]>;
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
      createPure: AugmentedSubmittable<(proxyType: AssetHubPolkadotRuntimeProxyType | 'Any' | 'NonTransfer' | 'CancelProxy' | 'Assets' | 'AssetOwner' | 'AssetManager' | 'Collator' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array, index: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetHubPolkadotRuntimeProxyType, u32, u16]>;
      /**
       * Removes a previously spawned pure proxy.
       * 
       * WARNING: **All access to this account will be lost.** Any funds held in it will be
       * inaccessible.
       * 
       * Requires a `Signed` origin, and the sender account must have been created by a call to
       * `pure` with corresponding parameters.
       * 
       * - `spawner`: The account that originally called `pure` to create this account.
       * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
       * - `proxy_type`: The proxy type originally passed to `pure`.
       * - `height`: The height of the chain when the call to `pure` was processed.
       * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
       * 
       * Fails with `NoPermission` in case the caller is not a previously created pure
       * account whose `pure` call has corresponding parameters.
       **/
      killPure: AugmentedSubmittable<(spawner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: AssetHubPolkadotRuntimeProxyType | 'Any' | 'NonTransfer' | 'CancelProxy' | 'Assets' | 'AssetOwner' | 'AssetManager' | 'Collator' | number | Uint8Array, index: u16 | AnyNumber | Uint8Array, height: Compact<u32> | AnyNumber | Uint8Array, extIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, AssetHubPolkadotRuntimeProxyType, u16, Compact<u32>, Compact<u32>]>;
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
      proxy: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, forceProxyType: Option<AssetHubPolkadotRuntimeProxyType> | null | Uint8Array | AssetHubPolkadotRuntimeProxyType | 'Any' | 'NonTransfer' | 'CancelProxy' | 'Assets' | 'AssetOwner' | 'AssetManager' | 'Collator' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Option<AssetHubPolkadotRuntimeProxyType>, Call]>;
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
      proxyAnnounced: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, forceProxyType: Option<AssetHubPolkadotRuntimeProxyType> | null | Uint8Array | AssetHubPolkadotRuntimeProxyType | 'Any' | 'NonTransfer' | 'CancelProxy' | 'Assets' | 'AssetOwner' | 'AssetManager' | 'Collator' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Option<AssetHubPolkadotRuntimeProxyType>, Call]>;
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
       * WARNING: This may be called on accounts created by `pure`, however if done, then
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
      removeProxy: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: AssetHubPolkadotRuntimeProxyType | 'Any' | 'NonTransfer' | 'CancelProxy' | 'Assets' | 'AssetOwner' | 'AssetManager' | 'Collator' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, AssetHubPolkadotRuntimeProxyType, u32]>;
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
      setKeys: AugmentedSubmittable<(keys: AssetHubPolkadotRuntimeSessionKeys | { aura?: any } | string | Uint8Array, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetHubPolkadotRuntimeSessionKeys, Bytes]>;
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
    toKusamaXcmRouter: {
      /**
       * Notification about congested bridge queue.
       **/
      reportBridgeStatus: AugmentedSubmittable<(bridgeId: H256 | string | Uint8Array, isCongested: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, bool]>;
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
      dispatchAs: AugmentedSubmittable<(asOrigin: AssetHubPolkadotRuntimeOriginCaller | { system: any } | { Void: any } | { PolkadotXcm: any } | { CumulusXcm: any } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AssetHubPolkadotRuntimeOriginCaller, Call]>;
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

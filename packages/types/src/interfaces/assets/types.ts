// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Compact, Struct, bool, u32, u64, u8 } from '@polkadot/types';
import type { AccountId, BalanceOf } from '@polkadot/types/interfaces/runtime';

/** @name AssetBalance */
export interface AssetBalance extends Struct {
  readonly balance: TAssetBalance;
  readonly isFrozen: bool;
  readonly sufficient: bool;
}

/** @name AssetBalanceTo265 */
export interface AssetBalanceTo265 extends Struct {
  readonly balance: TAssetBalance;
  readonly isFrozen: bool;
  readonly isZombie: bool;
}

/** @name AssetDetails */
export interface AssetDetails extends Struct {
  readonly owner: AccountId;
  readonly issuer: AccountId;
  readonly admin: AccountId;
  readonly freezer: AccountId;
  readonly supply: TAssetBalance;
  readonly deposit: TAssetDepositBalance;
  readonly minBalance: TAssetBalance;
  readonly isSufficient: bool;
  readonly accounts: u32;
  readonly sufficients: u32;
  readonly approvals: u32;
  readonly isFrozen: bool;
}

/** @name AssetDetailsTo265 */
export interface AssetDetailsTo265 extends Struct {
  readonly owner: AccountId;
  readonly issuer: AccountId;
  readonly admin: AccountId;
  readonly freezer: AccountId;
  readonly supply: TAssetBalance;
  readonly deposit: TAssetDepositBalance;
  readonly maxZombies: u32;
  readonly minBalance: TAssetBalance;
  readonly zombies: u32;
  readonly accounts: u32;
}

/** @name AssetMetadata */
export interface AssetMetadata extends Struct {
  readonly deposit: TAssetDepositBalance;
  readonly name: Bytes;
  readonly symbol: Bytes;
  readonly decimals: u8;
}

/** @name DestroyWitness */
export interface DestroyWitness extends Struct {
  readonly accounts: Compact<u32>;
  readonly sufficients: Compact<u32>;
  readonly approvals: Compact<u32>;
}

/** @name TAssetBalance */
export interface TAssetBalance extends u64 {}

/** @name TAssetDepositBalance */
export interface TAssetDepositBalance extends BalanceOf {}

export type PHANTOM_ASSETS = 'assets';

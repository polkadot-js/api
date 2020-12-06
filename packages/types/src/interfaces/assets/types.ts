// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, bool, u32 } from '@polkadot/types';
import type { AccountId, Balance, BalanceOf } from '@polkadot/types/interfaces/runtime';

/** @name AssetBalance */
export interface AssetBalance extends Struct {
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
  readonly maxZombies: u32;
  readonly minBalance: TAssetBalance;
  readonly zombies: u32;
  readonly accounts: u32;
}

/** @name TAssetBalance */
export interface TAssetBalance extends Balance {}

/** @name TAssetDepositBalance */
export interface TAssetDepositBalance extends BalanceOf {}

export type PHANTOM_ASSETS = 'assets';

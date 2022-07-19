// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Compact, Option, Struct, bool, u32 } from '@polkadot/types-codec';
import type { AccountId, Balance } from '@polkadot/types/interfaces/runtime';

/** @name CollectionDetails */
export interface CollectionDetails extends Struct {
  readonly owner: AccountId;
  readonly issuer: AccountId;
  readonly admin: AccountId;
  readonly freezer: AccountId;
  readonly totalDeposit: DepositBalance;
  readonly freeHolding: bool;
  readonly items: u32;
  readonly itemMetadatas: u32;
  readonly attributes: u32;
  readonly isFrozen: bool;
}

/** @name CollectionId */
export interface CollectionId extends u32 {}

/** @name CollectionMetadata */
export interface CollectionMetadata extends Struct {
  readonly deposit: DepositBalance;
  readonly data: Bytes;
  readonly isFrozen: bool;
}

/** @name DepositBalance */
export interface DepositBalance extends Balance {}

/** @name DepositBalanceOf */
export interface DepositBalanceOf extends Balance {}

/** @name DestroyWitness */
export interface DestroyWitness extends Struct {
  readonly items: Compact<u32>;
  readonly itemMetadatas: Compact<u32>;
  readonly attributes: Compact<u32>;
}

/** @name ItemDetails */
export interface ItemDetails extends Struct {
  readonly owner: AccountId;
  readonly approved: Option<AccountId>;
  readonly isFrozen: bool;
  readonly deposit: DepositBalance;
}

/** @name ItemId */
export interface ItemId extends u32 {}

/** @name ItemMetadata */
export interface ItemMetadata extends Struct {
  readonly deposit: DepositBalance;
  readonly data: Bytes;
  readonly isFrozen: bool;
}

/** @name ItemPrice */
export interface ItemPrice extends Balance {}

export type PHANTOM_UNIQUES = 'uniques';

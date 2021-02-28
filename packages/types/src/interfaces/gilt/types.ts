// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, u32 } from '@polkadot/types';
import type { AccountId, Balance, BlockNumber, Perquintill } from '@polkadot/types/interfaces/runtime';

/** @name ActiveGilt */
export interface ActiveGilt extends Struct {
  readonly proportion: Perquintill;
  readonly amount: Balance;
  readonly who: AccountId;
  readonly expiry: BlockNumber;
}

/** @name ActiveGiltsTotal */
export interface ActiveGiltsTotal extends Struct {
  readonly frozen: Balance;
  readonly proportion: Perquintill;
  readonly index: ActiveIndex;
  readonly target: Perquintill;
}

/** @name ActiveIndex */
export interface ActiveIndex extends u32 {}

/** @name GiltBid */
export interface GiltBid extends Struct {
  readonly amount: Balance;
  readonly who: AccountId;
}

export type PHANTOM_GILT = 'gilt';

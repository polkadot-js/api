// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Struct, Vec, u256 } from '@polkadot/types';
import type { H160, H256 } from '@polkadot/types/interfaces/runtime';

/** @name Account */
export interface Account extends Struct {
  readonly nonce: u256;
  readonly balance: u256;
}

/** @name Log */
export interface Log extends Struct {
  readonly address: H160;
  readonly topics: Vec<H256>;
  readonly data: Bytes;
}

/** @name Vicinity */
export interface Vicinity extends Struct {
  readonly gasPrice: u256;
  readonly origin: H160;
}

export type PHANTOM_EVM = 'evm';

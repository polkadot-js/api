// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, Vec } from '@polkadot/types/codec';
import type { Bytes, U256 } from '@polkadot/types/primitive';
import type { H160, H256 } from '@polkadot/types/interfaces/runtime';

/** @name Account */
export interface Account extends Struct {
  readonly nonce: U256;
  readonly balance: U256;
}

/** @name Log */
export interface Log extends Struct {
  readonly address: H160;
  readonly topics: Vec<H256>;
  readonly data: Bytes;
}

export type PHANTOM_EVM = 'evm';

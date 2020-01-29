// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Struct, Vec } from '@polkadot/types/codec';
import { Bytes, H160, H256, U256 } from '@polkadot/types/primitive';

/** Struct */
export interface Account extends Struct {
  /** U256 */
  readonly nonce: U256;
  /** U256 */
  readonly balance: U256;
}

/** Struct */
export interface Log extends Struct {
  /** H160 */
  readonly address: H160;
  /** Vec<H256> */
  readonly topics: Vec<H256>;
  /** Bytes */
  readonly data: Bytes;
}

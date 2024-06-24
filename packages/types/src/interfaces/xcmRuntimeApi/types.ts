// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Struct, Text, u16 } from '@polkadot/types-codec';

/** @name Account */
export interface Account extends Struct {
  readonly id: Bytes;
  readonly ss58: Ss58;
}

/** @name Error */
export interface Error extends Enum {
  readonly isUnsupported: boolean;
  readonly type: 'Unsupported';
}

/** @name Ss58 */
export interface Ss58 extends Struct {
  readonly address: Text;
  readonly version: u16;
}

export type PHANTOM_XCMRUNTIMEAPI = 'xcmRuntimeApi';

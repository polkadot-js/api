// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, Text, Vec, u32 } from '@polkadot/types-codec';

/** @name RpcMethods */
export interface RpcMethods extends Struct {
  readonly version: u32;
  readonly methods: Vec<Text>;
}

export type PHANTOM_RPC = 'rpc';

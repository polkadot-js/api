// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Struct } from '@polkadot/types/codec';
import { u64 } from '@polkadot/types/primitive';

/** @name RawAuraPreDigest */
export interface RawAuraPreDigest extends Struct {
  readonly slotNumber: u64;
}

export type PHANTOM_AURA = 'aura';

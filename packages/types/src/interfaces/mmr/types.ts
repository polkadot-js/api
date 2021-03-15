// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Struct } from '@polkadot/types';
import type { BlockHash } from '@polkadot/types/interfaces/chain';

/** @name MmrLeafProof */
export interface MmrLeafProof extends Struct {
  readonly lockHash: BlockHash;
  readonly leaf: Bytes;
  readonly proof: Bytes;
}

export type PHANTOM_MMR = 'mmr';

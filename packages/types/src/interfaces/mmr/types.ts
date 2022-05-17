// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Struct } from '@polkadot/types-codec';
import type { BlockHash } from '@polkadot/types/interfaces/chain';

/** @name MmrLeafBatchProof */
export interface MmrLeafBatchProof extends Struct {
  readonly blockHash: BlockHash;
  readonly leaves: Bytes;
  readonly proof: Bytes;
}

/** @name MmrLeafProof */
export interface MmrLeafProof extends Struct {
  readonly blockHash: BlockHash;
  readonly leaf: Bytes;
  readonly proof: Bytes;
}

export type PHANTOM_MMR = 'mmr';

// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Struct, Vec } from '@polkadot/types/codec';
import { CandidateReceipt, ParaId } from '@polkadot/types/interfaces/parachains';
import { AccountId, BlockNumber, H256, Hash } from '@polkadot/types/interfaces/runtime';
import { SessionIndex } from '@polkadot/types/interfaces/session';

/** @name BlockAttestations */
export interface BlockAttestations extends Struct {
  readonly receipt: CandidateReceipt;
  readonly valid: Vec<AccountId>;
  readonly invalid: Vec<AccountId>;
}

/** @name IncludedBlocks */
export interface IncludedBlocks extends Struct {
  readonly actualNumber: BlockNumber;
  readonly session: SessionIndex;
  readonly randomSeed: H256;
  readonly activeParachains: Vec<ParaId>;
  readonly paraBlocks: Vec<Hash>;
}

/** @name MoreAttestations */
export interface MoreAttestations extends Struct {}

export type PHANTOM_ATTESTATIONS = 'attestations';

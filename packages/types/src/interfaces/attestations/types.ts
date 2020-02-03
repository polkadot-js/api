// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Struct, Vec } from '@polkadot/types/codec';
import { H256 } from '@polkadot/types/primitive';
import { AccountId, BlockNumber, Hash } from '@polkadot/types/interfaces/runtime';
import { SessionIndex } from '@polkadot/types/interfaces/session';
import { CandidateReceipt, ParaId } from '@polkadot/types/interfaces/parachains';

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

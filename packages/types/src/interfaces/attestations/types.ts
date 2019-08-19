// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Struct, Vec } from '../../codec';
import { H256 } from '../../primitive';
import { AccountId, BlockNumber, Hash } from '../runtime';
import { SessionIndex } from '../session';
import { CandidateReceipt, ParaId } from '../parachains';

/** Struct */
export interface BlockAttestations extends Struct {
  /** CandidateReceipt */
  readonly receipt: CandidateReceipt;
  /** Vec<AccountId> */
  readonly valid: Vec<AccountId>;
  /** Vec<AccountId> */
  readonly invalid: Vec<AccountId>;
}

/** Struct */
export interface IncludedBlocks extends Struct {
  /** BlockNumber */
  readonly actualNumber: BlockNumber;
  /** SessionIndex */
  readonly session: SessionIndex;
  /** H256 */
  readonly randomSeed: H256;
  /** Vec<ParaId> */
  readonly activeParachains: Vec<ParaId>;
  /** Vec<Hash> */
  readonly paraBlocks: Vec<Hash>;
}

/** Struct */
export interface MoreAttestations extends Struct {}

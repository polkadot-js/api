// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Enum, Struct } from '@polkadot/types/codec';
import { u32 } from '@polkadot/types/primitive';
import { BlockNumber, Call, Hash } from '@polkadot/types/interfaces/runtime';
import { VoteThreshold } from '@polkadot/types/interfaces/elections';

/** Enum */
export interface Conviction extends Enum {
  /** 0:: None */
  readonly isNone: boolean;
  /** 1:: Locked1x */
  readonly isLocked1X: boolean;
  /** 2:: Locked2x */
  readonly isLocked2X: boolean;
  /** 3:: Locked3x */
  readonly isLocked3X: boolean;
  /** 4:: Locked4x */
  readonly isLocked4X: boolean;
  /** 5:: Locked5x */
  readonly isLocked5X: boolean;
  /** 6:: Locked6x */
  readonly isLocked6X: boolean;
}

/** u32 */
export interface PropIndex extends u32 {}

/** Call */
export interface Proposal extends Call {}

/** u32 */
export interface ReferendumIndex extends u32 {}

/** Struct */
export interface ReferendumInfo extends Struct {
  /** BlockNumber */
  readonly end: BlockNumber;
  /** Hash */
  readonly proposalHash: Hash;
  /** VoteThreshold */
  readonly threshold: VoteThreshold;
  /** BlockNumber */
  readonly delay: BlockNumber;
}

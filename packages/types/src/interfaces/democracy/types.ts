// Auto-generated via `yarn build:interfaces`, do not edit

import { Enum, Struct } from '../../codec';
import { u32 } from '../../primitive';
import { BlockNumber, Call } from '../runtime';
import { VoteThreshold } from '../elections';

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
}

/** u32 */
export type PropIndex = u32;

/** Call */
export type Proposal = Call;

/** u32 */
export type ReferendumIndex = u32;

/** Struct */
export interface ReferendumInfo extends Struct {
  /** BlockNumber */
  readonly end: BlockNumber;
  /** Proposal */
  readonly proposal: Proposal;
  /** VoteThreshold */
  readonly threshold: VoteThreshold;
  /** BlockNumber */
  readonly delay: BlockNumber;
}

/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Enum, Struct } from '../../codec';
import { Method, u32 } from '../../primitive';
import { BlockNumber, VoteThreshold } from '../../type';

export interface Conviction extends Enum {
  /**
   * @description 0:: None
   */
  readonly isNone: boolean;
  /**
   * @description 1:: Locked1x
   */
  readonly isLocked1x: boolean;
  /**
   * @description 2:: Locked2x
   */
  readonly isLocked2x: boolean;
  /**
   * @description 3:: Locked3x
   */
  readonly isLocked3x: boolean;
  /**
   * @description 4:: Locked4x
   */
  readonly isLocked4x: boolean;
  /**
   * @description 5:: Locked5x
   */
  readonly isLocked5x: boolean;
}

export interface PropIndex extends u32 {}

export interface Proposal extends Method {}

export interface ReferendumIndex extends u32 {}

export interface ReferendumInfo extends Struct {
  readonly end: BlockNumber;
  readonly proposal: Proposal;
  readonly threshold: VoteThreshold;
  readonly delay: BlockNumber;
}

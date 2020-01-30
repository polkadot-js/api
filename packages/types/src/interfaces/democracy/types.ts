// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Enum, Struct } from '@polkadot/types/codec';
import { u32 } from '@polkadot/types/primitive';
import { BlockNumber, Call, Hash } from '@polkadot/types/interfaces/runtime';
import { VoteThreshold } from '@polkadot/types/interfaces/elections';

/**
 * @name Conviction
 * @description extends [[Enum]]
 */
export interface Conviction extends Enum {
  readonly isNone: boolean;
  readonly isLocked1X: boolean;
  readonly isLocked2X: boolean;
  readonly isLocked3X: boolean;
  readonly isLocked4X: boolean;
  readonly isLocked5X: boolean;
  readonly isLocked6X: boolean;
}

/**
 * @name PropIndex
 * @description extends [[u32]]
 */
export interface PropIndex extends u32 {}

/**
 * @name Proposal
 * @description extends [[Call]]
 */
export interface Proposal extends Call {}

/**
 * @name ReferendumIndex
 * @description extends [[u32]]
 */
export interface ReferendumIndex extends u32 {}

/**
 * @name ReferendumInfo
 * @description extends [[Struct]]
 */
export interface ReferendumInfo extends Struct {
  readonly end: BlockNumber;
  readonly proposalHash: Hash;
  readonly threshold: VoteThreshold;
  readonly delay: BlockNumber;
}

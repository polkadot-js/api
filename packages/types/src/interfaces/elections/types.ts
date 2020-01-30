// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Enum, Struct } from '@polkadot/types/codec';
import { GenericVote, u32 } from '@polkadot/types/primitive';
import { Balance } from '@polkadot/types/interfaces/runtime';

/**
 * @name ApprovalFlag
 * @description extends [[u32]]
 */
export interface ApprovalFlag extends u32 {}

/**
 * @name SetIndex
 * @description extends [[u32]]
 */
export interface SetIndex extends u32 {}

/**
 * @name Vote
 * @description extends [[GenericVote]]
 */
export interface Vote extends GenericVote {}

/**
 * @name VoteIndex
 * @description extends [[u32]]
 */
export interface VoteIndex extends u32 {}

/**
 * @name VoterInfo
 * @description extends [[Struct]]
 */
export interface VoterInfo extends Struct {
  readonly lastActive: VoteIndex;
  readonly lastWin: VoteIndex;
  readonly pot: Balance;
  readonly stake: Balance;
}

/**
 * @name VoteThreshold
 * @description extends [[Enum]]
 */
export interface VoteThreshold extends Enum {
  readonly isSupermajorityapproval: boolean;
  readonly isSupermajorityrejection: boolean;
  readonly isSimplemajority: boolean;
}

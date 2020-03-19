// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Enum, Struct } from '@polkadot/types/codec';
import { GenericVote } from '@polkadot/types/generic';
import { u32 } from '@polkadot/types/primitive';
import { Balance } from '@polkadot/types/interfaces/runtime';

/** @name ApprovalFlag */
export interface ApprovalFlag extends u32 {}

/** @name SetIndex */
export interface SetIndex extends u32 {}

/** @name Vote */
export interface Vote extends GenericVote {}

/** @name VoteIndex */
export interface VoteIndex extends u32 {}

/** @name VoterInfo */
export interface VoterInfo extends Struct {
  readonly lastActive: VoteIndex;
  readonly lastWin: VoteIndex;
  readonly pot: Balance;
  readonly stake: Balance;
}

/** @name VoteThreshold */
export interface VoteThreshold extends Enum {
  readonly isSupermajorityapproval: boolean;
  readonly isSupermajorityrejection: boolean;
  readonly isSimplemajority: boolean;
}

export type PHANTOM_ELECTIONS = 'elections';

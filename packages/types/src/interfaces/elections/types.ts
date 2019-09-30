// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Enum, Struct } from '@polkadot/types/codec';
import { GenericVote, u32 } from '@polkadot/types/primitive';
import { Balance } from '@polkadot/types/interfaces/runtime';

/** u32 */
export interface ApprovalFlag extends u32 {}

/** u32 */
export interface SetIndex extends u32 {}

/** GenericVote */
export interface Vote extends GenericVote {}

/** u32 */
export interface VoteIndex extends u32 {}

/** Struct */
export interface VoterInfo extends Struct {
  /** VoteIndex */
  readonly lastActive: VoteIndex;
  /** VoteIndex */
  readonly lastWin: VoteIndex;
  /** Balance */
  readonly pot: Balance;
  /** Balance */
  readonly stake: Balance;
}

/** Enum */
export interface VoteThreshold extends Enum {
  /** 0:: Supermajorityapproval */
  readonly isSupermajorityapproval: boolean;
  /** 1:: Supermajorityrejection */
  readonly isSupermajorityrejection: boolean;
  /** 2:: Simplemajority */
  readonly isSimplemajority: boolean;
}

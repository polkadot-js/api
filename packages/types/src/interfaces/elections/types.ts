// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Enum, Struct } from '../../codec';
import { GenericVote, u32 } from '../../primitive';
import { Balance } from '../runtime';

/** u32 */
export type ApprovalFlag = u32;

/** u32 */
export type SetIndex = u32;

/** GenericVote */
export type Vote = GenericVote;

/** u32 */
export type VoteIndex = u32;

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

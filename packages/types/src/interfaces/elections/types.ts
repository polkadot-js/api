// Auto-generated via `yarn build:interfaces`, do not edit

import { Enum, Struct } from '../../codec';
import { u32 } from '../../primitive';
import { Balance } from '../runtime';

/** u32 */
export type ApprovalFlag = u32;

/** u32 */
export type SetIndex = u32;

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
  /** 0:: Super majority approval */
  readonly isSuperMajorityApproval: boolean;
  /** 1:: Super majority rejection */
  readonly isSuperMajorityRejection: boolean;
  /** 2:: Simple majority */
  readonly isSimpleMajority: boolean;
}

// Auto-generated via `yarn build:interfaces`, do not edit

import { Compact, Enum, Option, Struct, Vec } from '../../codec';
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

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    ApprovalFlag: ApprovalFlag;
    'Compact<ApprovalFlag>': Compact<ApprovalFlag>;
    'Option<ApprovalFlag>': Option<ApprovalFlag>;
    'Vec<ApprovalFlag>': Vec<ApprovalFlag>;
    SetIndex: SetIndex;
    'Compact<SetIndex>': Compact<SetIndex>;
    'Option<SetIndex>': Option<SetIndex>;
    'Vec<SetIndex>': Vec<SetIndex>;
    VoteIndex: VoteIndex;
    'Compact<VoteIndex>': Compact<VoteIndex>;
    'Option<VoteIndex>': Option<VoteIndex>;
    'Vec<VoteIndex>': Vec<VoteIndex>;
    VoterInfo: VoterInfo;
    'Option<VoterInfo>': Option<VoterInfo>;
    'Vec<VoterInfo>': Vec<VoterInfo>;
    VoteThreshold: VoteThreshold;
    'Option<VoteThreshold>': Option<VoteThreshold>;
    'Vec<VoteThreshold>': Vec<VoteThreshold>;
  }
}

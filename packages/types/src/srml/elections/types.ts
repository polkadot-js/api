/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Enum, Struct } from '../../codec';
import { Balance, u32 } from '../../primitive';

export interface ApprovalFlag extends u32 {}

export interface SetIndex extends u32 {}

export interface VoteIndex extends u32 {}

export interface VoterInfo extends Struct {
  readonly lastActive: VoteIndex;
  readonly lastWin: VoteIndex;
  readonly pot: Balance;
  readonly stake: Balance;
}

export interface VoteThreshold extends Enum {
  /**
   * @description 0:: Super majority approval
   */
  readonly isSuperMajorityApproval: boolean;
  /**
   * @description 1:: Super majority rejection
   */
  readonly isSuperMajorityRejection: boolean;
  /**
   * @description 2:: Simple majority
   */
  readonly isSimpleMajority: boolean;
}

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    ApprovalFlag: ApprovalFlag;
    'Compact<ApprovalFlag>': Compact<ApprovalFlag>;
    'Option<ApprovalFlag>': Option<ApprovalFlag>;
    'Vec<ApprovalFlag>': Vector<ApprovalFlag>;
    SetIndex: SetIndex;
    'Compact<SetIndex>': Compact<SetIndex>;
    'Option<SetIndex>': Option<SetIndex>;
    'Vec<SetIndex>': Vector<SetIndex>;
    VoteIndex: VoteIndex;
    'Compact<VoteIndex>': Compact<VoteIndex>;
    'Option<VoteIndex>': Option<VoteIndex>;
    'Vec<VoteIndex>': Vector<VoteIndex>;
    VoterInfo: VoterInfo;
    'Option<VoterInfo>': Option<VoterInfo>;
    'Vec<VoterInfo>': Vector<VoterInfo>;
    VoteThreshold: VoteThreshold;
    'Option<VoteThreshold>': Option<VoteThreshold>;
    'Vec<VoteThreshold>': Vector<VoteThreshold>;
  }
}

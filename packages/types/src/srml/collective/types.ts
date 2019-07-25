// Auto-generated via `yarn build:srmlTs`, do not edit

import { Compact, Option, Struct, Vec } from '../../codec';
import { AccountId, u32, u64 } from '../../primitive';

/** u64 */
export type MemberCount = u64;

/** u32 */
export type ProposalIndex = u32;

/** Struct */
export interface Votes extends Struct {
  /** ProposalIndex */
  readonly index: ProposalIndex;
  /** MemberCount */
  readonly threshold: MemberCount;
  /** Vec<AccountId> */
  readonly ayes: Vec<AccountId>;
  /** Vec<AccountId> */
  readonly nays: Vec<AccountId>;
}

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    MemberCount: MemberCount;
    'Compact<MemberCount>': Compact<MemberCount>;
    'Option<MemberCount>': Option<MemberCount>;
    'Vec<MemberCount>': Vec<MemberCount>;
    ProposalIndex: ProposalIndex;
    'Compact<ProposalIndex>': Compact<ProposalIndex>;
    'Option<ProposalIndex>': Option<ProposalIndex>;
    'Vec<ProposalIndex>': Vec<ProposalIndex>;
    Votes: Votes;
    'Option<Votes>': Option<Votes>;
    'Vec<Votes>': Vec<Votes>;
  }
}

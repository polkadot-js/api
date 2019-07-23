/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Struct, Vector } from '../../codec';
import { AccountId, u32, u64 } from '../../primitive';

export interface MemberCount extends u64 {}

export interface ProposalIndex extends u32 {}

export interface Votes extends Struct {
  readonly index: ProposalIndex;
  readonly threshold: MemberCount;
  readonly ayes: Vector<AccountId>;
  readonly nays: Vector<AccountId>;
}

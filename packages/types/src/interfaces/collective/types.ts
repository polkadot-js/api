// Auto-generated via `yarn build:interfaces`, do not edit

import { Struct, Vec } from '../../codec';
import { u32, u64 } from '../../primitive';
import { AccountId } from '../runtime';

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

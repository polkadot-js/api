// Auto-generated via `yarn build:interfaces`, do not edit

import { Struct, Vec } from '../../codec';
import { u32 } from '../../primitive';
import { AccountId } from '../runtime';

/** u32 */
export type MemberCount = u32;

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

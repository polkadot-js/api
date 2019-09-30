// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Struct, Vec } from '@polkadot/types/codec';
import { u32 } from '@polkadot/types/primitive';
import { AccountId } from '@polkadot/types/interfaces/runtime';

/** u32 */
export interface MemberCount extends u32 {}

/** u32 */
export interface ProposalIndex extends u32 {}

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

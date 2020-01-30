// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Struct, Vec } from '@polkadot/types/codec';
import { u32 } from '@polkadot/types/primitive';
import { AccountId } from '@polkadot/types/interfaces/runtime';

/**
 * @name MemberCount
 * @description extends [[u32]]
 */
export interface MemberCount extends u32 {}

/**
 * @name ProposalIndex
 * @description extends [[u32]]
 */
export interface ProposalIndex extends u32 {}

/**
 * @name Votes
 * @description extends [[Struct]]
 */
export interface Votes extends Struct {
  readonly index: ProposalIndex;
  readonly threshold: MemberCount;
  readonly ayes: Vec<AccountId>;
  readonly nays: Vec<AccountId>;
}

// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Struct, Vec, u32 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId, BlockNumber } from '@polkadot/types/interfaces/runtime';

/** @name CollectiveOrigin */
export interface CollectiveOrigin extends Enum {
  readonly isMembers: boolean;
  readonly asMembers: ITuple<[MemberCount, MemberCount]>;
  readonly isMember: boolean;
  readonly asMember: AccountId;
  readonly type: 'Members' | 'Member';
}

/** @name MemberCount */
export interface MemberCount extends u32 {}

/** @name ProposalIndex */
export interface ProposalIndex extends u32 {}

/** @name Votes */
export interface Votes extends Struct {
  readonly index: ProposalIndex;
  readonly threshold: MemberCount;
  readonly ayes: Vec<AccountId>;
  readonly nays: Vec<AccountId>;
  readonly end: BlockNumber;
}

/** @name VotesTo230 */
export interface VotesTo230 extends Struct {
  readonly index: ProposalIndex;
  readonly threshold: MemberCount;
  readonly ayes: Vec<AccountId>;
  readonly nays: Vec<AccountId>;
}

export type PHANTOM_COLLECTIVE = 'collective';

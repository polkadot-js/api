// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { ITuple } from '@polkadot/types/types';
import { Enum, Struct, Vec } from '@polkadot/types/codec';
import { u32 } from '@polkadot/types/primitive';
import { AccountId, BlockNumber } from '@polkadot/types/interfaces/runtime';

/** @name CollectiveOrigin */
export interface CollectiveOrigin extends Enum {
  readonly isMembers: boolean;
  readonly asMembers: ITuple<[MemberCount, MemberCount]>;
  readonly isMember: boolean;
  readonly asMember: AccountId;
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

// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Enum, Struct } from '@polkadot/types/codec';
import { u32 } from '@polkadot/types/primitive';
import { VoteThreshold } from '@polkadot/types/interfaces/elections';
import { AccountId, BlockNumber, Call, Hash } from '@polkadot/types/interfaces/runtime';

/** @name Conviction */
export interface Conviction extends Enum {
  readonly isNone: boolean;
  readonly isLocked1X: boolean;
  readonly isLocked2X: boolean;
  readonly isLocked3X: boolean;
  readonly isLocked4X: boolean;
  readonly isLocked5X: boolean;
  readonly isLocked6X: boolean;
}

/** @name PropIndex */
export interface PropIndex extends u32 {}

/** @name Proposal */
export interface Proposal extends Call {}

/** @name ProxyState */
export interface ProxyState extends Struct {
  readonly Open: AccountId;
  readonly Active: AccountId;
}

/** @name ReferendumIndex */
export interface ReferendumIndex extends u32 {}

/** @name ReferendumInfo */
export interface ReferendumInfo extends Struct {
  readonly end: BlockNumber;
  readonly proposalHash: Hash;
  readonly threshold: VoteThreshold;
  readonly delay: BlockNumber;
}

export type PHANTOM_DEMOCRACY = 'democracy';

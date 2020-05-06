// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { ITuple } from '@polkadot/types/types';
import { Enum, Struct, Vec } from '@polkadot/types/codec';
import { u64 } from '@polkadot/types/primitive';
import { AuthorityId } from '@polkadot/types/interfaces/consensus';
import { AuthoritySignature } from '@polkadot/types/interfaces/imOnline';
import { BlockNumber, Hash } from '@polkadot/types/interfaces/runtime';
import { MembershipProof } from '@polkadot/types/interfaces/session';

/** @name AuthorityIndex */
export interface AuthorityIndex extends u64 {}

/** @name AuthorityList */
export interface AuthorityList extends Vec<NextAuthority> {}

/** @name AuthorityWeight */
export interface AuthorityWeight extends u64 {}

/** @name Equivocation */
export interface Equivocation extends Enum {
  readonly isPrevote: boolean;
  readonly asPrevote: GrandpaEquivocation;
  readonly isPrecommit: boolean;
  readonly asPrecommit: GrandpaEquivocation;
}

/** @name EquivocationProof */
export interface EquivocationProof extends Struct {
  readonly setId: SetId;
  readonly equivocation: Equivocation;
}

/** @name GrandpaEquivocation */
export interface GrandpaEquivocation extends Struct {
  readonly roundNumber: u64;
  readonly identity: AuthorityId;
  readonly first: ITuple<[GrandpaPrevote, AuthoritySignature]>;
  readonly second: ITuple<[GrandpaPrevote, AuthoritySignature]>;
}

/** @name GrandpaPrevote */
export interface GrandpaPrevote extends Struct {
  readonly targetHash: Hash;
  readonly targetNumber: BlockNumber;
}

/** @name KeyOwnerProof */
export interface KeyOwnerProof extends MembershipProof {}

/** @name NextAuthority */
export interface NextAuthority extends ITuple<[AuthorityId, AuthorityWeight]> {}

/** @name PendingPause */
export interface PendingPause extends Struct {
  readonly scheduledAt: BlockNumber;
  readonly delay: BlockNumber;
}

/** @name PendingResume */
export interface PendingResume extends Struct {
  readonly scheduledAt: BlockNumber;
  readonly delay: BlockNumber;
}

/** @name SetId */
export interface SetId extends u64 {}

/** @name StoredPendingChange */
export interface StoredPendingChange extends Struct {
  readonly scheduledAt: BlockNumber;
  readonly delay: BlockNumber;
  readonly nextAuthorities: AuthorityList;
}

/** @name StoredState */
export interface StoredState extends Enum {
  readonly isLive: boolean;
  readonly isPendingPause: boolean;
  readonly asPendingPause: PendingPause;
  readonly isPaused: boolean;
  readonly isPendingResume: boolean;
  readonly asPendingResume: PendingResume;
}

export type PHANTOM_GRANDPA = 'grandpa';

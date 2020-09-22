// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { ITuple } from '@polkadot/types/types';
import { BTreeSet, Enum, Struct, Vec } from '@polkadot/types/codec';
import { Bytes, u32, u64 } from '@polkadot/types/primitive';
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

/** @name EncodedFinalityProofs */
export interface EncodedFinalityProofs extends Bytes {}

/** @name GrandpaEquivocation */
export interface GrandpaEquivocation extends Enum {
  readonly isPrevote: boolean;
  readonly asPrevote: GrandpaEquivocationValue;
  readonly isPrecommit: boolean;
  readonly asPrecommit: GrandpaEquivocationValue;
}

/** @name GrandpaEquivocationProof */
export interface GrandpaEquivocationProof extends Struct {
  readonly setId: SetId;
  readonly equivocation: GrandpaEquivocation;
}

/** @name GrandpaEquivocationValue */
export interface GrandpaEquivocationValue extends Struct {
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

/** @name JustificationNotification */
export interface JustificationNotification extends Bytes {}

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

/** @name Precommits */
export interface Precommits extends Struct {
  readonly currentWeight: u32;
  readonly missing: BTreeSet<AuthorityId>;
}

/** @name Prevotes */
export interface Prevotes extends Struct {
  readonly currentWeight: u32;
  readonly missing: BTreeSet<AuthorityId>;
}

/** @name ReportedRoundStates */
export interface ReportedRoundStates extends Struct {
  readonly setId: u32;
  readonly best: RoundState;
  readonly background: Vec<RoundState>;
}

/** @name RoundState */
export interface RoundState extends Struct {
  readonly round: u32;
  readonly totalWeight: u32;
  readonly thresholdWeight: u32;
  readonly prevotes: Prevotes;
  readonly precommits: Precommits;
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

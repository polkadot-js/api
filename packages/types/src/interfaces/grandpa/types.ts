// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { BTreeSet, Bytes, Enum, Option, Struct, U64, Vec, u32, u64 } from '@polkadot/types';
  import type { BlockHash } from '@polkadot/types/interfaces/chain';
  import type { AuthorityId } from '@polkadot/types/interfaces/consensus';
  import type { AuthoritySignature } from '@polkadot/types/interfaces/imOnline';
  import type { BlockNumber, Hash, Header } from '@polkadot/types/interfaces/runtime';
  import type { MembershipProof } from '@polkadot/types/interfaces/session';
  import type { ITuple } from '@polkadot/types/types';

/** @name AuthorityIndex */
export interface AuthorityIndex extends u64 {}

/** @name AuthorityList */
export interface AuthorityList extends Vec<NextAuthority> {}

/** @name AuthoritySet */
export interface AuthoritySet extends Struct {
  readonly currentAuthorities: AuthorityList;
  readonly setId: u64;
  readonly pendingStandardChanges: ForkTreePendingChange;
  readonly pendingForcedChanges: Vec<PendingChange>;
  readonly authoritySetChanges: AuthoritySetChanges;
}

/** @name AuthoritySetChange */
export interface AuthoritySetChange extends ITuple<[U64, BlockNumber]> {}

/** @name AuthoritySetChanges */
export interface AuthoritySetChanges extends Vec<AuthoritySetChange> {}

/** @name AuthorityWeight */
export interface AuthorityWeight extends u64 {}

/** @name DelayKind */
export interface DelayKind extends Enum {
  readonly isFinalized: boolean;
  readonly isBest: boolean;
  readonly asBest: DelayKindBest;
}

/** @name DelayKindBest */
export interface DelayKindBest extends Struct {
  readonly medianLastFinalized: BlockNumber;
}

/** @name EncodedFinalityProofs */
export interface EncodedFinalityProofs extends Bytes {}

/** @name ForkTreePendingChange */
export interface ForkTreePendingChange extends Struct {
  readonly roots: Vec<ForkTreePendingChangeNode>;
  readonly bestFinalizedNumber: Option<BlockNumber>;
}

/** @name ForkTreePendingChangeNode */
export interface ForkTreePendingChangeNode extends Struct {
  readonly hash: BlockHash;
  readonly number: BlockNumber;
  readonly data: PendingChange;
  readonly children: Vec<ForkTreePendingChangeNode>;
}

/** @name GrandpaCommit */
export interface GrandpaCommit extends Struct {
  readonly targetHash: BlockHash;
  readonly targetNumber: BlockNumber;
  readonly precommits: Vec<GrandpaSignedPrecommit>;
}

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

/** @name GrandpaJustification */
export interface GrandpaJustification extends Struct {
  readonly round: u64;
  readonly commit: GrandpaCommit;
  readonly votesAncestries: Vec<Header>;
}

/** @name GrandpaPrecommit */
export interface GrandpaPrecommit extends Struct {
  readonly targetHash: BlockHash;
  readonly targetNumber: BlockNumber;
}

/** @name GrandpaPrevote */
export interface GrandpaPrevote extends Struct {
  readonly targetHash: Hash;
  readonly targetNumber: BlockNumber;
}

/** @name GrandpaSignedPrecommit */
export interface GrandpaSignedPrecommit extends Struct {
  readonly precommit: GrandpaPrecommit;
  readonly signature: AuthoritySignature;
  readonly id: AuthorityId;
}

/** @name JustificationNotification */
export interface JustificationNotification extends Bytes {}

/** @name KeyOwnerProof */
export interface KeyOwnerProof extends MembershipProof {}

/** @name NextAuthority */
export interface NextAuthority extends ITuple<[AuthorityId, AuthorityWeight]> {}

/** @name PendingChange */
export interface PendingChange extends Struct {
  readonly nextAuthorities: AuthorityList;
  readonly delay: BlockNumber;
  readonly canonHeight: BlockNumber;
  readonly canonHash: BlockHash;
  readonly delayKind: DelayKind;
}

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

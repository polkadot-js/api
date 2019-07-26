// Auto-generated via `yarn build:srmlTs`, do not edit

import { Codec } from '../../types';
import { Compact, Enum, Option, Struct, Vec } from '../../codec';
import { u64 } from '../../primitive';
import { BlockNumber } from '../runtime/types';
import { AuthorityId } from '../consensus/types';

/** u64 */
export type AuthorityWeight = u64;

/** [AuthorityId, u64] & Codec */
export type NextAuthority = [AuthorityId, u64] & Codec;

/** Struct */
export interface PendingPause extends Struct {
  /** BlockNumber */
  readonly scheduledAt: BlockNumber;
  /** BlockNumber */
  readonly delay: BlockNumber;
}

/** Struct */
export interface PendingResume extends Struct {
  /** BlockNumber */
  readonly scheduledAt: BlockNumber;
  /** BlockNumber */
  readonly delay: BlockNumber;
}

/** Struct */
export interface StoredPendingChange extends Struct {
  /** BlockNumber */
  readonly scheduledAt: BlockNumber;
  /** BlockNumber */
  readonly delay: BlockNumber;
  /** Vec<NextAuthority> */
  readonly nextAuthorities: Vec<NextAuthority>;
}

/** Enum */
export interface StoredState extends Enum {
  /** 0:: Live */
  readonly isLive: boolean;
  /** 1:: PendingPause(PendingPause) */
  readonly isPendingPause: boolean;
  /** PendingPause */
  readonly asPendingPause: PendingPause;
  /** 2:: Paused */
  readonly isPaused: boolean;
  /** 3:: PendingResume(PendingResume) */
  readonly isPendingResume: boolean;
  /** PendingResume */
  readonly asPendingResume: PendingResume;
}

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    AuthorityWeight: AuthorityWeight;
    'Compact<AuthorityWeight>': Compact<AuthorityWeight>;
    'Option<AuthorityWeight>': Option<AuthorityWeight>;
    'Vec<AuthorityWeight>': Vec<AuthorityWeight>;
    NextAuthority: NextAuthority;
    'Option<NextAuthority>': Option<NextAuthority>;
    'Vec<NextAuthority>': Vec<NextAuthority>;
    PendingPause: PendingPause;
    'Option<PendingPause>': Option<PendingPause>;
    'Vec<PendingPause>': Vec<PendingPause>;
    PendingResume: PendingResume;
    'Option<PendingResume>': Option<PendingResume>;
    'Vec<PendingResume>': Vec<PendingResume>;
    StoredPendingChange: StoredPendingChange;
    'Option<StoredPendingChange>': Option<StoredPendingChange>;
    'Vec<StoredPendingChange>': Vec<StoredPendingChange>;
    StoredState: StoredState;
    'Option<StoredState>': Option<StoredState>;
    'Vec<StoredState>': Vec<StoredState>;
  }
}

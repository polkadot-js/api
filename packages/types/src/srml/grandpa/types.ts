/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Codec } from '../../types';
import { Compact, Enum, Option, Struct, Vector } from '../../codec';
import { u64 } from '../../primitive';
import { BlockNumber } from '../runtime/types';
import { AuthorityId } from '../consensus/types';

export interface AuthorityWeight extends u64 {}

type _NextAuthority = [AuthorityId, u64];
export interface NextAuthority extends Codec, _NextAuthority {}

export interface PendingPause extends Struct {
  readonly scheduledAt: BlockNumber;
  readonly delay: BlockNumber;
}

export interface PendingResume extends Struct {
  readonly scheduledAt: BlockNumber;
  readonly delay: BlockNumber;
}

export interface StoredPendingChange extends Struct {
  readonly scheduledAt: BlockNumber;
  readonly delay: BlockNumber;
  readonly nextAuthorities: Vector<NextAuthority>;
}

export interface StoredState extends Enum {
  /**
   * @description 0:: Live
   */
  readonly isLive: boolean;
  /**
   * @description 1:: PendingPause(PendingPause)
   */
  readonly isPendingPause: boolean;
  readonly asPendingPause: PendingPause;
  /**
   * @description 2:: Paused
   */
  readonly isPaused: boolean;
  /**
   * @description 3:: PendingResume(PendingResume)
   */
  readonly isPendingResume: boolean;
  readonly asPendingResume: PendingResume;
}

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    AuthorityWeight: AuthorityWeight;
    'Compact<AuthorityWeight>': Compact<AuthorityWeight>;
    'Option<AuthorityWeight>': Option<AuthorityWeight>;
    'Vec<AuthorityWeight>': Vector<AuthorityWeight>;
    NextAuthority: NextAuthority;
    'Option<NextAuthority>': Option<NextAuthority>;
    'Vec<NextAuthority>': Vector<NextAuthority>;
    PendingPause: PendingPause;
    'Option<PendingPause>': Option<PendingPause>;
    'Vec<PendingPause>': Vector<PendingPause>;
    PendingResume: PendingResume;
    'Option<PendingResume>': Option<PendingResume>;
    'Vec<PendingResume>': Vector<PendingResume>;
    StoredPendingChange: StoredPendingChange;
    'Option<StoredPendingChange>': Option<StoredPendingChange>;
    'Vec<StoredPendingChange>': Vector<StoredPendingChange>;
    StoredState: StoredState;
    'Option<StoredState>': Option<StoredState>;
    'Vec<StoredState>': Vector<StoredState>;
  }
}

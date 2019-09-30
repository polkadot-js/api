// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ITuple } from '@polkadot/types/types';
import { Enum, Struct, Vec } from '@polkadot/types/codec';
import { u64 } from '@polkadot/types/primitive';
import { BlockNumber } from '@polkadot/types/interfaces/runtime';
import { AuthorityId } from '@polkadot/types/interfaces/consensus';

/** u64 */
export interface AuthorityWeight extends u64 {}

/** ITuple<[AuthorityId, u64]> */
export interface NextAuthority extends ITuple<[AuthorityId, u64]> {}

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

/** u64 */
export interface SetId extends u64 {}

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

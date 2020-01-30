// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ITuple } from '@polkadot/types/types';
import { Enum, Struct, Vec } from '@polkadot/types/codec';
import { u64 } from '@polkadot/types/primitive';
import { BlockNumber } from '@polkadot/types/interfaces/runtime';
import { AuthorityId } from '@polkadot/types/interfaces/consensus';

/**
 * @name AuthorityIndex
 * @description extends [[u64]]
 */
export interface AuthorityIndex extends u64 {}

/**
 * @name AuthorityList
 * @description extends [[Vec<NextAuthority>]]
 */
export interface AuthorityList extends Vec<NextAuthority> {}

/**
 * @name AuthorityWeight
 * @description extends [[u64]]
 */
export interface AuthorityWeight extends u64 {}

/**
 * @name NextAuthority
 * @description extends [[ITuple<[AuthorityId, AuthorityWeight]>]]
 */
export interface NextAuthority extends ITuple<[AuthorityId, AuthorityWeight]> {}

/**
 * @name PendingPause
 * @description extends [[Struct]]
 */
export interface PendingPause extends Struct {
  readonly scheduledAt: BlockNumber;
  readonly delay: BlockNumber;
}

/**
 * @name PendingResume
 * @description extends [[Struct]]
 */
export interface PendingResume extends Struct {
  readonly scheduledAt: BlockNumber;
  readonly delay: BlockNumber;
}

/**
 * @name SetId
 * @description extends [[u64]]
 */
export interface SetId extends u64 {}

/**
 * @name StoredPendingChange
 * @description extends [[Struct]]
 */
export interface StoredPendingChange extends Struct {
  readonly scheduledAt: BlockNumber;
  readonly delay: BlockNumber;
  readonly nextAuthorities: AuthorityList;
}

/**
 * @name StoredState
 * @description extends [[Enum]]
 */
export interface StoredState extends Enum {
  readonly isLive: boolean;
  readonly isPendingPause: boolean;
  readonly asPendingPause: PendingPause;
  readonly isPaused: boolean;
  readonly isPendingResume: boolean;
  readonly asPendingResume: PendingResume;
}

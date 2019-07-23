/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Codec } from '../../types';
import { Enum, Struct, Vector } from '../../codec';
import { u64 } from '../../primitive';
import { BlockNumber } from '../../type';
import { SessionKey } from '../session/types';

export interface AuthorityWeight extends u64 {}

type _NextAuthority = [SessionKey, u64];
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

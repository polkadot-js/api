// Auto-generated via `yarn build:interfaces`, do not edit

import { Codec } from '../../types';
import { Enum, Struct, Vec } from '../../codec';
import { Bytes, GenericEvent, u32 } from '../../primitive';
import { Digest, Hash } from '../runtime';

/** Digest */
export type DigestOf = Digest;

/** GenericEvent */
export type Event = GenericEvent;

/** Uint8Array & Codec */
export type EventId = Uint8Array & Codec;

/** u32 */
export type EventIndex = u32;

/** Struct */
export interface EventRecord extends Struct {
  /** Phase */
  readonly phase: Phase;
  /** Event */
  readonly event: Event;
  /** Vec<Hash> */
  readonly topics: Vec<Hash>;
}

/** Struct */
export interface EventRecord0to76 extends Struct {
  /** Phase */
  readonly phase: Phase;
  /** Event */
  readonly event: Event;
}

/** Bytes */
export type Key = Bytes;

/** Enum */
export interface Phase extends Enum {
  /** 0:: ApplyExtrinsic(u32) */
  readonly isApplyExtrinsic: boolean;
  /** u32 */
  readonly asApplyExtrinsic: u32;
  /** 1:: Finalization */
  readonly isFinalization: boolean;
}

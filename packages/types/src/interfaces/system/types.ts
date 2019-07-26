// Auto-generated via `yarn build:interfaces`, do not edit

import { Enum, Struct, Vec } from '../../codec';
import { Bytes, Digest, Event, u32, u8 } from '../../primitive';
import { Hash } from '../runtime';

/** Digest */
export type DigestOf = Digest;

/** Vec<u8> */
export type EventId = Vec<u8>;

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

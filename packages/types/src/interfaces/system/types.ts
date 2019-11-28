// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Codec } from '@polkadot/types/types';
import { Enum, Option, Struct, Vec } from '@polkadot/types/codec';
import { Bytes, GenericEvent, u32, u8 } from '@polkadot/types/primitive';
import { Digest, Hash } from '@polkadot/types/interfaces/runtime';

/** Digest */
export interface DigestOf extends Digest {}

/** Struct */
export interface DispatchError extends Struct {
  /** Option<u8> */
  readonly module: Option<u8>;
  /** u8 */
  readonly error: u8;
}

/** GenericEvent */
export interface Event extends GenericEvent {}

/** Uint8Array, Codec */
export interface EventId extends Uint8Array, Codec {}

/** u32 */
export interface EventIndex extends u32 {}

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
export interface EventRecordTo76 extends Struct {
  /** Phase */
  readonly phase: Phase;
  /** Event */
  readonly event: Event;
}

/** Bytes */
export interface Key extends Bytes {}

/** Enum */
export interface Phase extends Enum {
  /** 0:: ApplyExtrinsic(u32) */
  readonly isApplyExtrinsic: boolean;
  /** u32 */
  readonly asApplyExtrinsic: u32;
  /** 1:: Finalization */
  readonly isFinalization: boolean;
}

// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Codec } from '@polkadot/types/types';
import { Enum, Option, Result, Struct, Vec } from '@polkadot/types/codec';
import { Bytes, GenericEvent, Null, Text, u32, u8 } from '@polkadot/types/primitive';
import { Digest, Hash } from '@polkadot/types/interfaces/runtime';

/** Digest */
export interface DigestOf extends Digest {}

/** Enum */
export interface DispatchError extends Enum {
  /** 0:: Other */
  readonly isOther: boolean;
  /** 1:: CannotLookup */
  readonly isCannotLookup: boolean;
  /** 2:: BadOrigin */
  readonly isBadOrigin: boolean;
  /** 3:: Module(DispatchErrorModule) */
  readonly isModule: boolean;
  /** DispatchErrorModule */
  readonly asModule: DispatchErrorModule;
}

/** Struct */
export interface DispatchErrorModule extends Struct {
  /** u8 */
  readonly index: u8;
  /** u8 */
  readonly error: u8;
}

/** Struct */
export interface DispatchErrorTo198 extends Struct {
  /** Option<u8> */
  readonly module: Option<u8>;
  /** u8 */
  readonly error: u8;
}

/** Result<Null, DispatchError> */
export interface DispatchResult extends Result<Null, DispatchError> {
  /** Error:: (DispatchError) */
  readonly isError: boolean;
  /** DispatchError */
  readonly asError: DispatchError;
  /** Ok::  */
  readonly isOk: boolean;
}

/** DispatchResult */
export interface DispatchResultOf extends DispatchResult {}

/** Result<Null, Text> */
export interface DispatchResultTo198 extends Result<Null, Text> {
  /** Error:: (Text) */
  readonly isError: boolean;
  /** Text */
  readonly asError: Text;
  /** Ok::  */
  readonly isOk: boolean;
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

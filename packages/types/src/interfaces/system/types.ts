// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Codec, ITuple } from '@polkadot/types/types';
import { Enum, Option, Result, Struct, Vec } from '@polkadot/types/codec';
import { Bytes, GenericEvent, Text, u32, u8 } from '@polkadot/types/primitive';
import { Digest, Hash } from '@polkadot/types/interfaces/runtime';

/**
 * @name DigestOf
 * @description extends [[Digest]]
 */
export interface DigestOf extends Digest {}

/**
 * @name DispatchError
 * @description extends [[Enum]]
 */
export interface DispatchError extends Enum {
  readonly isOther: boolean;
  readonly isCannotLookup: boolean;
  readonly isBadOrigin: boolean;
  readonly isModule: boolean;
  readonly asModule: DispatchErrorModule;
}

/**
 * @name DispatchErrorModule
 * @description extends [[Struct]]
 */
export interface DispatchErrorModule extends Struct {
  readonly index: u8;
  readonly error: u8;
}

/**
 * @name DispatchErrorTo198
 * @description extends [[Struct]]
 */
export interface DispatchErrorTo198 extends Struct {
  readonly module: Option<u8>;
  readonly error: u8;
}

/**
 * @name DispatchResult
 * @description extends [[Result<ITuple<[]>, DispatchError>]]
 */
export interface DispatchResult extends Result<ITuple<[]>, DispatchError> {
  readonly isError: boolean;
  readonly asError: DispatchError;
  readonly isOk: boolean;
  readonly asOk: ITuple<[]>;
}

/**
 * @name DispatchResultOf
 * @description extends [[DispatchResult]]
 */
export interface DispatchResultOf extends DispatchResult {}

/**
 * @name DispatchResultTo198
 * @description extends [[Result<ITuple<[]>, Text>]]
 */
export interface DispatchResultTo198 extends Result<ITuple<[]>, Text> {
  readonly isError: boolean;
  readonly asError: Text;
  readonly isOk: boolean;
  readonly asOk: ITuple<[]>;
}

/**
 * @name Event
 * @description extends [[GenericEvent]]
 */
export interface Event extends GenericEvent {}

/**
 * @name EventId
 * @description extends [[Uint8Array, Codec]]
 */
export interface EventId extends Uint8Array, Codec {}

/**
 * @name EventIndex
 * @description extends [[u32]]
 */
export interface EventIndex extends u32 {}

/**
 * @name EventRecord
 * @description extends [[Struct]]
 */
export interface EventRecord extends Struct {
  readonly phase: Phase;
  readonly event: Event;
  readonly topics: Vec<Hash>;
}

/**
 * @name EventRecordTo76
 * @description extends [[Struct]]
 */
export interface EventRecordTo76 extends Struct {
  readonly phase: Phase;
  readonly event: Event;
}

/**
 * @name Key
 * @description extends [[Bytes]]
 */
export interface Key extends Bytes {}

/**
 * @name Phase
 * @description extends [[Enum]]
 */
export interface Phase extends Enum {
  readonly isApplyExtrinsic: boolean;
  readonly asApplyExtrinsic: u32;
  readonly isFinalization: boolean;
}

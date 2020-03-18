// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ITuple } from '@polkadot/types/types';
import { Compact, Enum, Option, Result, Struct, U8aFixed, Vec } from '@polkadot/types/codec';
import { GenericEvent } from '@polkadot/types/generic';
import { Bytes, Text, u32, u8 } from '@polkadot/types/primitive';
import { AccountData } from '@polkadot/types/interfaces/balances';
import { Digest, Hash, Index } from '@polkadot/types/interfaces/runtime';

/** @name AccountInfo */
export interface AccountInfo extends Struct {
  readonly nonce: Index;
  readonly refcount: RefCount;
  readonly data: AccountData;
}

/** @name DigestOf */
export interface DigestOf extends Digest {}

/** @name DispatchError */
export interface DispatchError extends Enum {
  readonly isOther: boolean;
  readonly isCannotLookup: boolean;
  readonly isBadOrigin: boolean;
  readonly isModule: boolean;
  readonly asModule: DispatchErrorModule;
}

/** @name DispatchErrorModule */
export interface DispatchErrorModule extends Struct {
  readonly index: u8;
  readonly error: u8;
}

/** @name DispatchErrorTo198 */
export interface DispatchErrorTo198 extends Struct {
  readonly module: Option<u8>;
  readonly error: u8;
}

/** @name DispatchResult */
export interface DispatchResult extends Result<ITuple<[]>, DispatchError> {
  readonly isError: boolean;
  readonly asError: DispatchError;
  readonly isOk: boolean;
  readonly asOk: ITuple<[]>;
}

/** @name DispatchResultOf */
export interface DispatchResultOf extends DispatchResult {}

/** @name DispatchResultTo198 */
export interface DispatchResultTo198 extends Result<ITuple<[]>, Text> {
  readonly isError: boolean;
  readonly asError: Text;
  readonly isOk: boolean;
  readonly asOk: ITuple<[]>;
}

/** @name Event */
export interface Event extends GenericEvent {}

/** @name EventId */
export interface EventId extends U8aFixed {}

/** @name EventIndex */
export interface EventIndex extends u32 {}

/** @name EventRecord */
export interface EventRecord extends Struct {
  readonly phase: Phase;
  readonly event: Event;
  readonly topics: Vec<Hash>;
}

/** @name EventRecordTo76 */
export interface EventRecordTo76 extends Struct {
  readonly phase: Phase;
  readonly event: Event;
}

/** @name Key */
export interface Key extends Bytes {}

/** @name LastRuntimeUpgradeInfo */
export interface LastRuntimeUpgradeInfo extends Struct {
  readonly specVersion: Compact<u32>;
  readonly specName: Text;
}

/** @name Phase */
export interface Phase extends Enum {
  readonly isApplyExtrinsic: boolean;
  readonly asApplyExtrinsic: u32;
  readonly isFinalization: boolean;
  readonly isInitialization: boolean;
}

/** @name RefCount */
export interface RefCount extends u8 {}

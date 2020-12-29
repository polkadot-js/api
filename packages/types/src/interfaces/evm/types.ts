// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Struct, Text, Vec, u256 } from '@polkadot/types';
import type { H160, H256 } from '@polkadot/types/interfaces/runtime';

/** @name EvmAccount */
export interface EvmAccount extends Struct {
  readonly nonce: u256;
  readonly balance: u256;
}

/** @name EvmLog */
export interface EvmLog extends Struct {
  readonly address: H160;
  readonly topics: Vec<H256>;
  readonly data: Bytes;
}

/** @name EvmVicinity */
export interface EvmVicinity extends Struct {
  readonly gasPrice: u256;
  readonly origin: H160;
}

/** @name ExitError */
export interface ExitError extends Enum {
  readonly isStackUnderflow: boolean;
  readonly isStackOverflow: boolean;
  readonly isInvalidJump: boolean;
  readonly isInvalidRange: boolean;
  readonly isDesignatedInvalid: boolean;
  readonly isCallTooDeep: boolean;
  readonly isCreateCollision: boolean;
  readonly isCreateContractLimit: boolean;
  readonly isOutOfOffset: boolean;
  readonly isOutOfGas: boolean;
  readonly isOutOfFund: boolean;
  readonly isPcUnderflow: boolean;
  readonly isCreateEmpty: boolean;
  readonly isOther: boolean;
  readonly asOther: Text;
}

/** @name ExitFatal */
export interface ExitFatal extends Enum {
  readonly isNotSupported: boolean;
  readonly isUnhandledInterrupt: boolean;
  readonly isCallErrorAsFatal: boolean;
  readonly asCallErrorAsFatal: ExitError;
  readonly isOther: boolean;
  readonly asOther: Text;
}

/** @name ExitReason */
export interface ExitReason extends Enum {
  readonly isSucceed: boolean;
  readonly asSucceed: ExitSucceed;
  readonly isError: boolean;
  readonly asError: ExitError;
  readonly isRevert: boolean;
  readonly asRevert: ExitRevert;
  readonly isFatal: boolean;
  readonly asFatal: ExitFatal;
}

/** @name ExitRevert */
export interface ExitRevert extends Enum {
  readonly isReverted: boolean;
}

/** @name ExitSucceed */
export interface ExitSucceed extends Enum {
  readonly isStopped: boolean;
  readonly isReturned: boolean;
  readonly isSuicided: boolean;
}

export type PHANTOM_EVM = 'evm';

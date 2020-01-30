// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Set, Struct } from '@polkadot/types/codec';
import { Balance, BlockNumber, LockIdentifier } from '@polkadot/types/interfaces/runtime';

/**
 * @name BalanceLock
 * @description extends [[Struct]]
 */
export interface BalanceLock extends Struct {
  readonly id: LockIdentifier;
  readonly amount: Balance;
  readonly until: BlockNumber;
  readonly reasons: WithdrawReasons;
}

/**
 * @name VestingSchedule
 * @description extends [[Struct]]
 */
export interface VestingSchedule extends Struct {
  readonly offset: Balance;
  readonly perBlock: Balance;
  readonly startingBlock: BlockNumber;
}

/**
 * @name WithdrawReasons
 * @description extends [[Set]]
 */
export interface WithdrawReasons extends Set {
  readonly isTransactionPayment: boolean;
  readonly isTransfer: boolean;
  readonly isReserve: boolean;
  readonly isFee: boolean;
  readonly isTip: boolean;
}

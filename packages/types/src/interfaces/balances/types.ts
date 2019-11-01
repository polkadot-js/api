// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Set, Struct } from '@polkadot/types/codec';
import { Balance, BlockNumber, LockIdentifier } from '@polkadot/types/interfaces/runtime';

/** Struct */
export interface BalanceLock extends Struct {
  /** LockIdentifier */
  readonly id: LockIdentifier;
  /** Balance */
  readonly amount: Balance;
  /** BlockNumber */
  readonly until: BlockNumber;
  /** WithdrawReasons */
  readonly reasons: WithdrawReasons;
}

/** Struct */
export interface VestingSchedule extends Struct {
  /** Balance */
  readonly offset: Balance;
  /** Balance */
  readonly perBlock: Balance;
  /** BlockNumber */
  readonly startingBlock: BlockNumber;
}

/** Set */
export interface WithdrawReasons extends Set {
  /** boolean */
  readonly isTransactionPayment: boolean;
  /** boolean */
  readonly isTransfer: boolean;
  /** boolean */
  readonly isReserve: boolean;
  /** boolean */
  readonly isFee: boolean;
  /** boolean */
  readonly isTip: boolean;
}

/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Set, Struct } from '../../codec';
import { Balance, BlockNumber, LockIdentifier } from '../runtime/types';

export interface BalanceLock extends Struct {
  readonly id: LockIdentifier;
  readonly amount: Balance;
  readonly until: BlockNumber;
  readonly reasons: WithdrawReasons;
}

export interface VestingSchedule extends Struct {
  readonly offset: Balance;
  readonly perBlock: Balance;
}

export interface WithdrawReasons extends Set {
  readonly isTransactionPayment: boolean;
  readonly isTransfer: boolean;
  readonly isReserve: boolean;
  readonly isFee: boolean;
}

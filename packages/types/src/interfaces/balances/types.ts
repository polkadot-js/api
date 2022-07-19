// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Set, Struct, U8aFixed } from '@polkadot/types-codec';
import type { Balance, BlockNumber, LockIdentifier } from '@polkadot/types/interfaces/runtime';

/** @name AccountData */
export interface AccountData extends Struct {
  readonly free: Balance;
  readonly reserved: Balance;
  readonly miscFrozen: Balance;
  readonly feeFrozen: Balance;
}

/** @name BalanceLock */
export interface BalanceLock extends Struct {
  readonly id: LockIdentifier;
  readonly amount: Balance;
  readonly reasons: Reasons;
}

/** @name BalanceLockTo212 */
export interface BalanceLockTo212 extends Struct {
  readonly id: LockIdentifier;
  readonly amount: Balance;
  readonly until: BlockNumber;
  readonly reasons: WithdrawReasons;
}

/** @name BalanceStatus */
export interface BalanceStatus extends Enum {
  readonly isFree: boolean;
  readonly isReserved: boolean;
  readonly type: 'Free' | 'Reserved';
}

/** @name Reasons */
export interface Reasons extends Enum {
  readonly isFee: boolean;
  readonly isMisc: boolean;
  readonly isAll: boolean;
  readonly type: 'Fee' | 'Misc' | 'All';
}

/** @name ReserveData */
export interface ReserveData extends Struct {
  readonly id: ReserveIdentifier;
  readonly amount: Balance;
}

/** @name ReserveIdentifier */
export interface ReserveIdentifier extends U8aFixed {}

/** @name VestingSchedule */
export interface VestingSchedule extends Struct {
  readonly offset: Balance;
  readonly perBlock: Balance;
  readonly startingBlock: BlockNumber;
}

/** @name WithdrawReasons */
export interface WithdrawReasons extends Set {
  readonly isTransactionPayment: boolean;
  readonly isTransfer: boolean;
  readonly isReserve: boolean;
  readonly isFee: boolean;
  readonly isTip: boolean;
}

export type PHANTOM_BALANCES = 'balances';

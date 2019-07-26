// Auto-generated via `yarn build:interfaces`, do not edit

import { Option, Set, Struct, Vec } from '../../codec';
import { Balance, BlockNumber, LockIdentifier } from '../runtime';

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
}

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    VestingSchedule: VestingSchedule;
    'Option<VestingSchedule>': Option<VestingSchedule>;
    'Vec<VestingSchedule>': Vec<VestingSchedule>;
    WithdrawReasons: WithdrawReasons;
    'Option<WithdrawReasons>': Option<WithdrawReasons>;
    'Vec<WithdrawReasons>': Vec<WithdrawReasons>;
    BalanceLock: BalanceLock;
    'Option<BalanceLock>': Option<BalanceLock>;
    'Vec<BalanceLock>': Vec<BalanceLock>;
  }
}

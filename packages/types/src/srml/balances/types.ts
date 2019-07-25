/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Struct } from '../../codec';
import { Balance } from '../../primitive';
import { BlockNumber, WithdrawReasons } from '../../type';
import { LockIdentifier } from '../runtime/types';

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

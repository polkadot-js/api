// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Struct, Vec } from '@polkadot/types/codec';
import { u16 } from '@polkadot/types/primitive';
import { AccountId, Balance, BlockNumber } from '@polkadot/types/interfaces/runtime';

/**
 * @name ActiveRecovery
 * @description extends [[Struct]]
 */
export interface ActiveRecovery extends Struct {
  readonly created: BlockNumber;
  readonly deposit: Balance;
  readonly friends: Vec<AccountId>;
}

/**
 * @name RecoveryConfig
 * @description extends [[Struct]]
 */
export interface RecoveryConfig extends Struct {
  readonly delayPeriod: BlockNumber;
  readonly deposit: Balance;
  readonly friends: Vec<AccountId>;
  readonly threshold: u16;
}

// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Struct, Vec } from '@polkadot/types/codec';
import { u16 } from '@polkadot/types/primitive';
import { AccountId, Balance, BlockNumber } from '@polkadot/types/interfaces/runtime';

/** @name ActiveRecovery */
export interface ActiveRecovery extends Struct {
  readonly created: BlockNumber;
  readonly deposit: Balance;
  readonly friends: Vec<AccountId>;
}

/** @name RecoveryConfig */
export interface RecoveryConfig extends Struct {
  readonly delayPeriod: BlockNumber;
  readonly deposit: Balance;
  readonly friends: Vec<AccountId>;
  readonly threshold: u16;
}

export type PHANTOM_RECOVERY = 'recovery';

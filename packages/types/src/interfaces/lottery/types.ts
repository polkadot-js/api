// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, bool, u8 } from '@polkadot/types';
  import type { Balance, BlockNumber } from '@polkadot/types/interfaces/runtime';
  import type { ITuple } from '@polkadot/types/types';

/** @name CallIndex */
export interface CallIndex extends ITuple<[u8, u8]> {}

/** @name LotteryConfig */
export interface LotteryConfig extends Struct {
  readonly price: Balance;
  readonly start: BlockNumber;
  readonly length: BlockNumber;
  readonly delay: BlockNumber;
  readonly repeat: bool;
}

export type PHANTOM_LOTTERY = 'lottery';

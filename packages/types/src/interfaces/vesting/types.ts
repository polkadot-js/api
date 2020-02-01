// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Struct } from '@polkadot/types/codec';
import { Balance, BlockNumber } from '@polkadot/types/interfaces/runtime';

/** @name VestingInfo */
export interface VestingInfo extends Struct {
  readonly locked: Balance;
  readonly perBllock: Balance;
  readonly startingBlock: BlockNumber;
}

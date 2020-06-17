// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Struct } from '@polkadot/types/codec';
import { bool, u8 } from '@polkadot/types/primitive';
import { Balance, Perbill } from '@polkadot/types/interfaces/runtime';

/** @name WeightToFeeCoefficient */
export interface WeightToFeeCoefficient extends Struct {
  readonly coeffInteger: Balance;
  readonly coeffFrac: Perbill;
  readonly negative: bool;
  readonly degree: u8;
}

export type PHANTOM_SUPPORT = 'support';

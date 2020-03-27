// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Struct } from '@polkadot/types/codec';
import { Balance, DispatchClass, Weight } from '@polkadot/types/interfaces/runtime';

/** @name RuntimeDispatchInfo */
export interface RuntimeDispatchInfo extends Struct {
  readonly weight: Weight;
  readonly class: DispatchClass;
  readonly partialFee: Balance;
}

export type PHANTOM_PAYMENT = 'payment';

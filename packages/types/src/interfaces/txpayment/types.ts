// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Enum } from '@polkadot/types/codec';
import { Fixed128 } from '@polkadot/types/interfaces/runtime';

/** @name Multiplier */
export interface Multiplier extends Fixed128 {}

/** @name PaymentReleases */
export interface PaymentReleases extends Enum {
  readonly isV1Ancient: boolean;
  readonly isV2: boolean;
}

export type PHANTOM_TXPAYMENT = 'txpayment';

// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum } from '@polkadot/types-codec';

/** @name FungiblesAccessError */
export interface FungiblesAccessError extends Enum {
  readonly isAssetIdConversionFailed: boolean;
  readonly isAmountToBalanceConversionFailed: boolean;
  readonly type: 'AssetIdConversionFailed' | 'AmountToBalanceConversionFailed';
}

export type PHANTOM_FUNGIBLES = 'fungibles';

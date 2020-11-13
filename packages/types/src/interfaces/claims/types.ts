// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum } from '@polkadot/types';
import type { H160 } from '@polkadot/types/interfaces/runtime';

/** @name EthereumAddress */
export interface EthereumAddress extends H160 {}

/** @name StatementKind */
export interface StatementKind extends Enum {
  readonly isRegular: boolean;
  readonly isSaft: boolean;
}

export type PHANTOM_CLAIMS = 'claims';

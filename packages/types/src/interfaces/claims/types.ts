// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum } from '@polkadot/types-codec';

/** @name StatementKind */
export interface StatementKind extends Enum {
  readonly isRegular: boolean;
  readonly isSaft: boolean;
  readonly type: 'Regular' | 'Saft';
}

export type PHANTOM_CLAIMS = 'claims';

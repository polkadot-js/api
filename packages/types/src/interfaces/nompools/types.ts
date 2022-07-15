// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum } from '@polkadot/types-codec';

/** @name NpApiError */
export interface NpApiError extends Enum {
  readonly isMemberNotFound: boolean;
  readonly isOverflowInPendingRewards: boolean;
  readonly type: 'MemberNotFound' | 'OverflowInPendingRewards';
}

export type PHANTOM_NOMPOOLS = 'nompools';

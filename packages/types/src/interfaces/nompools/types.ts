// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, u32 } from '@polkadot/types-codec';

/** @name NpApiError */
export interface NpApiError extends Enum {
  readonly isMemberNotFound: boolean;
  readonly isOverflowInPendingRewards: boolean;
  readonly type: 'MemberNotFound' | 'OverflowInPendingRewards';
}

/** @name NpPoolId */
export interface NpPoolId extends u32 {}

export type PHANTOM_NOMPOOLS = 'nompools';

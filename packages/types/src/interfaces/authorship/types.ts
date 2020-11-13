// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Option } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { AccountId, BlockNumber, Hash } from '@polkadot/types/interfaces/runtime';

/** @name UncleEntryItem */
export interface UncleEntryItem extends Enum {
  readonly isInclusionHeight: boolean;
  readonly asInclusionHeight: BlockNumber;
  readonly isUncle: boolean;
  readonly asUncle: ITuple<[Hash, Option<AccountId>]>;
}

export type PHANTOM_AUTHORSHIP = 'authorship';

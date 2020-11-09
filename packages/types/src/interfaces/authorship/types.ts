// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Enum, Option } from '@polkadot/types/codec';
import { ITuple } from '@polkadot/types/types';
import { AccountId, BlockNumber, Hash } from '@polkadot/types/interfaces/runtime';

/** @name UncleEntryItem */
export interface UncleEntryItem extends Enum {
  readonly isInclusionHeight: boolean;
  readonly asInclusionHeight: BlockNumber;
  readonly isUncle: boolean;
  readonly asUncle: ITuple<[Hash, Option<AccountId>]>;
}

export type PHANTOM_AUTHORSHIP = 'authorship';

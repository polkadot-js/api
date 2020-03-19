// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { ITuple } from '@polkadot/types/types';
import { Enum, Option } from '@polkadot/types/codec';
import { AccountId, BlockNumber, Hash } from '@polkadot/types/interfaces/runtime';

/** @name UncleEntryItem */
export interface UncleEntryItem extends Enum {
  readonly isInclusionHeight: boolean;
  readonly asInclusionHeight: BlockNumber;
  readonly isUncle: boolean;
  readonly asUncle: ITuple<[Hash, Option<AccountId>]>;
}

export type PHANTOM_AUTHORSHIP = 'authorship';

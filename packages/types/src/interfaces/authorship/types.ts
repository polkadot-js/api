// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ITuple } from '@polkadot/types/types';
import { Enum, Option } from '@polkadot/types/codec';
import { AccountId, BlockNumber, Hash } from '@polkadot/types/interfaces/runtime';

/** @name InclusionHeight */
export interface InclusionHeight extends BlockNumber {}

/** @name Uncle */
export interface Uncle extends ITuple<[Hash, Option<AccountId>]> {}

/** @name UncleEntryItem */
export interface UncleEntryItem extends Enum {
  readonly isInclusionHeight: boolean;
  readonly asInclusionHeight: InclusionHeight;
  readonly isUncle: boolean;
  readonly asUncle: Uncle;
}

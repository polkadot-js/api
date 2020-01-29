// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ITuple } from '@polkadot/types/types';
import { Enum, Option } from '@polkadot/types/codec';
import { AccountId, BlockNumber, Hash } from '@polkadot/types/interfaces/runtime';

/** BlockNumber */
export interface InclusionHeight extends BlockNumber {}

/** ITuple<[Hash, Option<AccountId>]> */
export interface Uncle extends ITuple<[Hash, Option<AccountId>]> {}

/** Enum */
export interface UncleEntryItem extends Enum {
  /** 0:: InclusionHeight(InclusionHeight) */
  readonly isInclusionHeight: boolean;
  /** InclusionHeight */
  readonly asInclusionHeight: InclusionHeight;
  /** 1:: Uncle(Uncle) */
  readonly isUncle: boolean;
  /** Uncle */
  readonly asUncle: Uncle;
}

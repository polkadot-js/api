// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ITuple } from '../../types';
import { Enum, Option } from '../../codec';
import { AccountId, BlockNumber, Hash } from '../runtime';

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

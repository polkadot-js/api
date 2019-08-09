// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Codec } from '../../types';
import { Enum, Option } from '../../codec';
import { AccountId, BlockNumber, Hash } from '../runtime';

/** BlockNumber */
export type InclusionHeight = BlockNumber;

/** [Hash, Option<AccountId>] & Codec */
export type Uncle = [Hash, Option<AccountId>] & Codec;

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

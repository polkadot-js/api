/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Codec } from '../../types';
import { Enum, Option } from '../../codec';
import { AccountId, Hash } from '../../primitive';
import { BlockNumber } from '../../type';

export interface InclusionHeight extends BlockNumber {}

type _Uncle = [Hash, Option<AccountId>];
export interface Uncle extends Codec, _Uncle {}

export interface UncleEntryItem extends Enum {
  /**
   * @description 0:: InclusionHeight(InclusionHeight)
   */
  readonly isInclusionHeight: boolean;
  readonly asInclusionHeight: InclusionHeight;
  /**
   * @description 1:: Uncle(Uncle)
   */
  readonly isUncle: boolean;
  readonly asUncle: Uncle;
}

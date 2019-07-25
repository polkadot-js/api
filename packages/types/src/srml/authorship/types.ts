/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Codec } from '../../types';
import { Enum, Option, Vec } from '../../codec';
import { AccountId } from '../../primitive';
import { BlockNumber, Hash } from '../runtime/types';

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

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    InclusionHeight: InclusionHeight;
    'Option<InclusionHeight>': Option<InclusionHeight>;
    'Vec<InclusionHeight>': Vec<InclusionHeight>;
    Uncle: Uncle;
    'Option<Uncle>': Option<Uncle>;
    'Vec<Uncle>': Vec<Uncle>;
    UncleEntryItem: UncleEntryItem;
    'Option<UncleEntryItem>': Option<UncleEntryItem>;
    'Vec<UncleEntryItem>': Vec<UncleEntryItem>;
  }
}

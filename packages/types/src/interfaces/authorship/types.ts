// Auto-generated via `yarn build:interfaces`, do not edit

import { Codec } from '../../types';
import { Enum, Option, Vec } from '../../codec';
import { AccountId } from '../../primitive';
import { BlockNumber, Hash } from '../runtime';

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

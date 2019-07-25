/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Compact, Option, Vector } from '../../codec';
import { u64 } from '../../primitive';

export interface BabeWeight extends u64 {}

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    BabeWeight: BabeWeight;
    'Compact<BabeWeight>': Compact<BabeWeight>;
    'Option<BabeWeight>': Option<BabeWeight>;
    'Vec<BabeWeight>': Vector<BabeWeight>;
  }
}

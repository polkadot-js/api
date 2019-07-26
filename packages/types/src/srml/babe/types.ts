// Auto-generated via `yarn build:srmlTs`, do not edit

import { Compact, Option, Vec } from '../../codec';
import { u64 } from '../../primitive';

/** u64 */
export type BabeWeight = u64;

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    BabeWeight: BabeWeight;
    'Compact<BabeWeight>': Compact<BabeWeight>;
    'Option<BabeWeight>': Option<BabeWeight>;
    'Vec<BabeWeight>': Vec<BabeWeight>;
  }
}

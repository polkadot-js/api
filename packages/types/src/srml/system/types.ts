/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Option, Vector } from '../../codec';
import { Bytes } from '../../primitive';

export interface Key extends Bytes {}

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    Key: Key;
    'Option<Key>': Option<Key>;
    'Vec<Key>': Vector<Key>;
  }
}

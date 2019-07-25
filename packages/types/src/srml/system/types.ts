/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Option, Vec } from '../../codec';
import { Bytes, Digest } from '../../primitive';

export interface DigestOf extends Digest {}

export interface Key extends Bytes {}

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    DigestOf: DigestOf;
    'Option<DigestOf>': Option<DigestOf>;
    'Vec<DigestOf>': Vec<DigestOf>;
    Key: Key;
    'Option<Key>': Option<Key>;
    'Vec<Key>': Vec<Key>;
  }
}

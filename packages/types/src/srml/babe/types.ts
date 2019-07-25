/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { u64 } from '../../primitive';

export interface BabeWeight extends u64 {}

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    BabeWeight: BabeWeight;
  }
}

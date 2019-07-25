/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { u32 } from '../../primitive';
import { SessionKeys } from '../runtime/types';

export interface Keys extends SessionKeys {}

export interface SessionIndex extends u32 {}

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    SessionIndex: SessionIndex;
    Keys: Keys;
  }
}

/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { u32 } from '../../primitive';
import { SessionKeys } from '../runtime/types';

export interface Keys extends SessionKeys {}

export interface SessionIndex extends u32 {}

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    SessionIndex: SessionIndex;
    'Compact<SessionIndex>': Compact<SessionIndex>;
    'Option<SessionIndex>': Option<SessionIndex>;
    'Vec<SessionIndex>': Vector<SessionIndex>;
    Keys: Keys;
    'Option<Keys>': Option<Keys>;
    'Vec<Keys>': Vector<Keys>;
  }
}

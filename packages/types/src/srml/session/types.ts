// Auto-generated via `yarn build:srmlTs`, do not edit

import { Compact, Option, Vec } from '../../codec';
import { u32 } from '../../primitive';
import { SessionKeys } from '../runtime/types';

/** SessionKeys */
export type Keys = SessionKeys;

/** u32 */
export type SessionIndex = u32;

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    SessionIndex: SessionIndex;
    'Compact<SessionIndex>': Compact<SessionIndex>;
    'Option<SessionIndex>': Option<SessionIndex>;
    'Vec<SessionIndex>': Vec<SessionIndex>;
    Keys: Keys;
    'Option<Keys>': Option<Keys>;
    'Vec<Keys>': Vec<Keys>;
  }
}

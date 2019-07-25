/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Option, Vec } from '../../codec';
import { AccountId } from '../../primitive';

export interface AuthorityId extends AccountId {}

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    AuthorityId: AuthorityId;
    'Option<AuthorityId>': Option<AuthorityId>;
    'Vec<AuthorityId>': Vec<AuthorityId>;
  }
}

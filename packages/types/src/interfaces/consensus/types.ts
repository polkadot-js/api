// Auto-generated via `yarn build:interfaces`, do not edit

import { Option, Vec } from '../../codec';
import { AccountId } from '../../primitive';

/** AccountId */
export type AuthorityId = AccountId;

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    AuthorityId: AuthorityId;
    'Option<AuthorityId>': Option<AuthorityId>;
    'Vec<AuthorityId>': Vec<AuthorityId>;
  }
}

/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Compact, Option, Struct, Vector } from '../../codec';
import { AccountId, Bytes, u32, u8 } from '../../primitive';

export interface Justification extends Bytes {}

export interface KeyTypeId extends u32 {}

export interface LockIdentifier extends Vector<u8> {}

export interface SessionKeys extends Struct {
  readonly ed25519: AccountId;
}

export interface ValidatorId extends AccountId {}

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    Justification: Justification;
    'Option<Justification>': Option<Justification>;
    'Vec<Justification>': Vector<Justification>;
    KeyTypeId: KeyTypeId;
    'Compact<KeyTypeId>': Compact<KeyTypeId>;
    'Option<KeyTypeId>': Option<KeyTypeId>;
    'Vec<KeyTypeId>': Vector<KeyTypeId>;
    LockIdentifier: LockIdentifier;
    'Option<LockIdentifier>': Option<LockIdentifier>;
    'Vec<LockIdentifier>': Vector<LockIdentifier>;
    SessionKeys: SessionKeys;
    'Option<SessionKeys>': Option<SessionKeys>;
    'Vec<SessionKeys>': Vector<SessionKeys>;
    ValidatorId: ValidatorId;
    'Option<ValidatorId>': Option<ValidatorId>;
    'Vec<ValidatorId>': Vector<ValidatorId>;
  }
}

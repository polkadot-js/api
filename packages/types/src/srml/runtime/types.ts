/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Struct, Vector } from '../../codec';
import { AccountId, Bytes, u32, u8 } from '../../primitive';

export interface Justification extends Bytes {}

export interface KeyTypeId extends u32 {}

export interface LockIdentifier extends Vector<u8> {}

export interface SessionKeys extends Struct {
  readonly ed25519: AccountId;
}

export interface ValidatorId extends AccountId {}

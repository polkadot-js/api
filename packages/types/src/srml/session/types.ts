/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Struct, Vector } from '../../codec';
import { u32 } from '../../primitive';
import { AuthorityId } from '../../type';

export interface EraRewards extends Struct {
  readonly total: u32;
  readonly rewards: Vector<u32>;
}

export interface Keys extends SessionKeys {}

export interface KeyTypeId extends u32 {}

export interface SessionIndex extends u32 {}

export interface SessionKey extends AuthorityId {}

export interface SessionKeys extends Struct {
  readonly ed25519: SessionKey;
}

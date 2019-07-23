/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Struct } from '../../codec';
import { u32 } from '../../primitive';
import { AuthorityId } from '../../type';

export interface Keys extends SessionKeys {}

export interface SessionIndex extends u32 {}

export interface SessionKey extends AuthorityId {}

export interface SessionKeys extends Struct {
  readonly ed25519: SessionKey;
}

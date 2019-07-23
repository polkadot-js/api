/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Struct } from '../../codec';
import { AccountId, Bytes } from '../../primitive';

export interface Justification extends Bytes {}

export interface SessionKeys extends Struct {
  readonly ed25519: AccountId;
}

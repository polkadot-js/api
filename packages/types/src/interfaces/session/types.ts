// Auto-generated via `yarn build:interfaces`, do not edit

import { Struct } from '../../codec';
import { u32 } from '../../primitive';
import { AccountId } from '../runtime';

/** Struct */
export interface Keys extends Struct {
  /** AccountId */
  readonly ed25519: AccountId;
  /** AccountId */
  readonly sr25519: AccountId;
}

/** u32 */
export type SessionIndex = u32;

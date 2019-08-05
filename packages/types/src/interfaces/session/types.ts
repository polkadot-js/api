// Auto-generated via `yarn build:interfaces`, do not edit

import { Struct } from '../../codec';
import { u32 } from '../../primitive';
import { AccountId } from '../runtime';

/** Struct */
export interface Keys extends Struct {
  /** AccountId */
  readonly grandpa: AccountId;
  /** AccountId */
  readonly babe: AccountId;
  /** AccountId */
  readonly imOnline: AccountId;
}

/** u32 */
export type SessionIndex = u32;

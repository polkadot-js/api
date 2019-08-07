// Auto-generated via `yarn build:interfaces`, do not edit

import { Struct } from '../../codec';
import { u32 } from '../../primitive';
import { AccountId } from '../runtime';

/** SessionKeysSubstrate */
export type Keys = SessionKeysSubstrate;

/** u32 */
export type SessionIndex = u32;

/** Struct */
export interface SessionKeysPolkadot extends Struct {
  /** AccountId */
  readonly grandpa: AccountId;
  /** AccountId */
  readonly babe: AccountId;
  /** AccountId */
  readonly imOnline: AccountId;
}

/** Struct */
export interface SessionKeysSubstrate extends Struct {
  /** AccountId */
  readonly grandpa: AccountId;
  /** AccountId */
  readonly babe: AccountId;
  /** AccountId */
  readonly imOnline: AccountId;
}

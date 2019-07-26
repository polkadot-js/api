// Auto-generated via `yarn build:interfaces`, do not edit

import { Enum, Struct } from '../../codec';
import { AccountId, Bytes, Null, i8, u32, u64 } from '../../primitive';
import { Balance } from '../runtime';

/** Struct */
export interface AccountInfo extends Struct {
  /** Bytes */
  readonly trieId: Bytes;
  /** u64 */
  readonly currentMemStored: u64;
}

/** Balance */
export type Amount = Balance;

/** u32 */
export type AssetOf = u32;

/** Null */
export type InherentOfflineReport = Null;

/** i8 */
export type LockPeriods = i8;

/** Enum */
export interface NewAccountOutcome extends Enum {
  /** 0:: NoHint */
  readonly isNoHint: boolean;
  /** 1:: GoodHint */
  readonly isGoodHint: boolean;
  /** 2:: BadHint */
  readonly isBadHint: boolean;
}

/** Bytes */
export type OpaqueKey = Bytes;

/** AccountId */
export type SessionKey = AccountId;

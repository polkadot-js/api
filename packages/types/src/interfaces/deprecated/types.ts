// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ITuple } from '@polkadot/types/types';
import { Enum, Struct } from '@polkadot/types/codec';
import { Bytes, i8, u32, u64 } from '@polkadot/types/primitive';
import { AccountId, Balance } from '@polkadot/types/interfaces/runtime';

/**
 * @name AccountInfo
 * @description extends [[Struct]]
 */
export interface AccountInfo extends Struct {
  readonly trieId: Bytes;
  readonly currentMemStored: u64;
}

/**
 * @name Amount
 * @description extends [[Balance]]
 */
export interface Amount extends Balance {}

/**
 * @name AssetOf
 * @description extends [[u32]]
 */
export interface AssetOf extends u32 {}

/**
 * @name InherentOfflineReport
 * @description extends [[ITuple<[]>]]
 */
export interface InherentOfflineReport extends ITuple<[]> {}

/**
 * @name LockPeriods
 * @description extends [[i8]]
 */
export interface LockPeriods extends i8 {}

/**
 * @name NewAccountOutcome
 * @description extends [[Enum]]
 */
export interface NewAccountOutcome extends Enum {
  readonly isNoHint: boolean;
  readonly isGoodHint: boolean;
  readonly isBadHint: boolean;
}

/**
 * @name OpaqueKey
 * @description extends [[Bytes]]
 */
export interface OpaqueKey extends Bytes {}

/**
 * @name SessionKey
 * @description extends [[AccountId]]
 */
export interface SessionKey extends AccountId {}

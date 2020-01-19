// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ITuple } from '@polkadot/types/types';
import { Enum, Struct } from '@polkadot/types/codec';
import { Bytes, i8, u32, u64 } from '@polkadot/types/primitive';
import { AccountId, Balance } from '@polkadot/types/interfaces/runtime';

/** Struct */
export interface AccountInfo extends Struct {
  /** Bytes */
  readonly trieId: Bytes;
  /** u64 */
  readonly currentMemStored: u64;
}

/** Balance */
export interface Amount extends Balance {}

/** u32 */
export interface AssetOf extends u32 {}

/** ITuple<[]> */
export interface InherentOfflineReport extends ITuple<[]> {}

/** i8 */
export interface LockPeriods extends i8 {}

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
export interface OpaqueKey extends Bytes {}

/** AccountId */
export interface SessionKey extends AccountId {}

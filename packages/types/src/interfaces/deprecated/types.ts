// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ITuple } from '@polkadot/types/types';
import { Enum, Struct } from '@polkadot/types/codec';
import { Bytes, i8, u32, u64 } from '@polkadot/types/primitive';
import { AccountId, Balance } from '@polkadot/types/interfaces/runtime';

/** @name Amount */
export interface Amount extends Balance {}

/** @name AssetOf */
export interface AssetOf extends u32 {}

/** @name ContractAccountInfo */
export interface ContractAccountInfo extends Struct {
  readonly trieId: Bytes;
  readonly currentMemStored: u64;
}

/** @name InherentOfflineReport */
export interface InherentOfflineReport extends ITuple<[]> {}

/** @name LockPeriods */
export interface LockPeriods extends i8 {}

/** @name NewAccountOutcome */
export interface NewAccountOutcome extends Enum {
  readonly isNoHint: boolean;
  readonly isGoodHint: boolean;
  readonly isBadHint: boolean;
}

/** @name OpaqueKey */
export interface OpaqueKey extends Bytes {}

/** @name SessionKey */
export interface SessionKey extends AccountId {}

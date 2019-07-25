/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Enum, Struct } from '../../codec';
import { AccountId, Bytes, Null, i8, u32, u64 } from '../../primitive';
import { Balance } from '../runtime/types';

export interface AccountInfo extends Struct {
  readonly trieId: Bytes;
  readonly currentMemStored: u64;
}

export interface Amount extends Balance {}

export interface AssetOf extends u32 {}

export interface InherentOfflineReport extends Null {}

export interface LockPeriods extends i8 {}

export interface NewAccountOutcome extends Enum {
  /**
   * @description 0:: NoHint
   */
  readonly isNoHint: boolean;
  /**
   * @description 1:: GoodHint
   */
  readonly isGoodHint: boolean;
  /**
   * @description 2:: BadHint
   */
  readonly isBadHint: boolean;
}

export interface OpaqueKey extends Bytes {}

export interface SessionKey extends AccountId {}

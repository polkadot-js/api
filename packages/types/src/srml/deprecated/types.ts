/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Compact, Enum, Option, Struct, Vector } from '../../codec';
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

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    NewAccountOutcome: NewAccountOutcome;
    'Option<NewAccountOutcome>': Option<NewAccountOutcome>;
    'Vec<NewAccountOutcome>': Vector<NewAccountOutcome>;
    Amount: Amount;
    'Option<Amount>': Option<Amount>;
    'Vec<Amount>': Vector<Amount>;
    AssetOf: AssetOf;
    'Compact<AssetOf>': Compact<AssetOf>;
    'Option<AssetOf>': Option<AssetOf>;
    'Vec<AssetOf>': Vector<AssetOf>;
    AccountInfo: AccountInfo;
    'Option<AccountInfo>': Option<AccountInfo>;
    'Vec<AccountInfo>': Vector<AccountInfo>;
    LockPeriods: LockPeriods;
    'Compact<LockPeriods>': Compact<LockPeriods>;
    'Option<LockPeriods>': Option<LockPeriods>;
    'Vec<LockPeriods>': Vector<LockPeriods>;
    InherentOfflineReport: InherentOfflineReport;
    'Option<InherentOfflineReport>': Option<InherentOfflineReport>;
    'Vec<InherentOfflineReport>': Vector<InherentOfflineReport>;
    SessionKey: SessionKey;
    'Option<SessionKey>': Option<SessionKey>;
    'Vec<SessionKey>': Vector<SessionKey>;
    OpaqueKey: OpaqueKey;
    'Option<OpaqueKey>': Option<OpaqueKey>;
    'Vec<OpaqueKey>': Vector<OpaqueKey>;
  }
}

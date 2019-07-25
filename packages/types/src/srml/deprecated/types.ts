/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Compact, Enum, Option, Vector } from '../../codec';
import { AccountId, Balance, Bytes, Null, i8, u32 } from '../../primitive';

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
    'Compact<Amount>': Compact<Amount>;
    'Option<Amount>': Option<Amount>;
    'Vec<Amount>': Vector<Amount>;
    AssetOf: AssetOf;
    'Compact<AssetOf>': Compact<AssetOf>;
    'Option<AssetOf>': Option<AssetOf>;
    'Vec<AssetOf>': Vector<AssetOf>;
    LockPeriods: LockPeriods;
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

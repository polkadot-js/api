// Auto-generated via `yarn build:interfaces`, do not edit

import { Compact, Enum, Option, Struct, Vec } from '../../codec';
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

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    NewAccountOutcome: NewAccountOutcome;
    'Option<NewAccountOutcome>': Option<NewAccountOutcome>;
    'Vec<NewAccountOutcome>': Vec<NewAccountOutcome>;
    Amount: Amount;
    'Option<Amount>': Option<Amount>;
    'Vec<Amount>': Vec<Amount>;
    AssetOf: AssetOf;
    'Compact<AssetOf>': Compact<AssetOf>;
    'Option<AssetOf>': Option<AssetOf>;
    'Vec<AssetOf>': Vec<AssetOf>;
    AccountInfo: AccountInfo;
    'Option<AccountInfo>': Option<AccountInfo>;
    'Vec<AccountInfo>': Vec<AccountInfo>;
    LockPeriods: LockPeriods;
    'Option<LockPeriods>': Option<LockPeriods>;
    'Vec<LockPeriods>': Vec<LockPeriods>;
    InherentOfflineReport: InherentOfflineReport;
    'Option<InherentOfflineReport>': Option<InherentOfflineReport>;
    'Vec<InherentOfflineReport>': Vec<InherentOfflineReport>;
    SessionKey: SessionKey;
    'Option<SessionKey>': Option<SessionKey>;
    'Vec<SessionKey>': Vec<SessionKey>;
    OpaqueKey: OpaqueKey;
    'Option<OpaqueKey>': Option<OpaqueKey>;
    'Vec<OpaqueKey>': Vec<OpaqueKey>;
  }
}

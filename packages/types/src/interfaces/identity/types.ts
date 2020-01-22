// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ITuple } from '@polkadot/types/types';
import { Enum, Option, Struct, Vec } from '@polkadot/types/codec';
import { Data, H160, IdentityFields, u32 } from '@polkadot/types/primitive';
import { AccountId, Balance } from '@polkadot/types/interfaces/runtime';

/** Struct */
export interface IdentityInfo extends Struct {
  /** Vec<IdentityInfoAdditional> */
  readonly additional: Vec<IdentityInfoAdditional>;
  /** Data */
  readonly display: Data;
  /** Data */
  readonly legal: Data;
  /** Data */
  readonly web: Data;
  /** Data */
  readonly riot: Data;
  /** Data */
  readonly email: Data;
  /** Option<H160> */
  readonly pgpFingerprint: Option<H160>;
  /** Data */
  readonly image: Data;
  /** Data */
  readonly twitter: Data;
}

/** ITuple<[Data, Data]> */
export interface IdentityInfoAdditional extends ITuple<[Data, Data]> {}

/** Enum */
export interface IdentityJudgement extends Enum {
  /** 0:: Unknown */
  readonly isUnknown: boolean;
  /** 1:: FeePaid(Balance) */
  readonly isFeePaid: boolean;
  /** Balance */
  readonly asFeePaid: Balance;
  /** 2:: Reasonable */
  readonly isReasonable: boolean;
  /** 3:: KnownGood */
  readonly isKnownGood: boolean;
  /** 4:: OutOfDate */
  readonly isOutOfDate: boolean;
  /** 5:: LowQuality */
  readonly isLowQuality: boolean;
  /** 6:: Erroneous */
  readonly isErroneous: boolean;
}

/** u32 */
export interface RegistrarIndex extends u32 {}

/** Struct */
export interface RegistrarInfo extends Struct {
  /** AccountId */
  readonly account: AccountId;
  /** Balance */
  readonly fee: Balance;
  /** IdentityFields */
  readonly fields: IdentityFields;
}

/** Struct */
export interface Registration extends Struct {
  /** Vec<RegistrationJudgement> */
  readonly judgements: Vec<RegistrationJudgement>;
  /** Balance */
  readonly deposit: Balance;
  /** IdentityInfo */
  readonly info: IdentityInfo;
}

/** ITuple<[RegistrarIndex, IdentityJudgement]> */
export interface RegistrationJudgement extends ITuple<[RegistrarIndex, IdentityJudgement]> {}

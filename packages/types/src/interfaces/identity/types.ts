// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ITuple } from '@polkadot/types/types';
import { Enum, Option, Set, Struct, Vec } from '@polkadot/types/codec';
import { Bytes, H160, H256, u32 } from '@polkadot/types/primitive';
import { AccountId, Balance } from '@polkadot/types/interfaces/runtime';

/** Enum */
export interface Data extends Enum {
  /** 0:: None */
  readonly isNone: boolean;
  /** 1:: Raw(Bytes) */
  readonly isRaw: boolean;
  /** Bytes */
  readonly asRaw: Bytes;
  /** 2:: BlakeTwo256(H256) */
  readonly isBlakeTwo256: boolean;
  /** H256 */
  readonly asBlakeTwo256: H256;
  /** 3:: Sha256(H256) */
  readonly isSha256: boolean;
  /** H256 */
  readonly asSha256: H256;
  /** 4:: Keccak256(H256) */
  readonly isKeccak256: boolean;
  /** H256 */
  readonly asKeccak256: H256;
  /** 5:: ShaThree256(H256) */
  readonly isShaThree256: boolean;
  /** H256 */
  readonly asShaThree256: H256;
}

/** Set */
export interface IdentityFields extends Set {
  /** boolean */
  readonly isDisplay: boolean;
  /** boolean */
  readonly isLegal: boolean;
  /** boolean */
  readonly isWeb: boolean;
  /** boolean */
  readonly isRiot: boolean;
  /** boolean */
  readonly isEmail: boolean;
  /** boolean */
  readonly isPgpFingerprint: boolean;
  /** boolean */
  readonly isImage: boolean;
}

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
}

/** ITuple<[Data, Data]> */
export interface IdentityInfoAdditional extends ITuple<[Data, Data]> {}

/** Enum */
export interface Judgement extends Enum {
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

/** ITuple<[RegistrarIndex, Judgement]> */
export interface RegistrationJudgement extends ITuple<[RegistrarIndex, Judgement]> {}

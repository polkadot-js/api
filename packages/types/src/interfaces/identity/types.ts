// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Data } from '@polkadot/types';
import type { Enum, Option, Set, Struct, Vec, u32 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId, Balance, H160 } from '@polkadot/types/interfaces/runtime';

/** @name IdentityFields */
export interface IdentityFields extends Set {
  readonly isDisplay: boolean;
  readonly isLegal: boolean;
  readonly isWeb: boolean;
  readonly isRiot: boolean;
  readonly isEmail: boolean;
  readonly isPgpFingerprint: boolean;
  readonly isImage: boolean;
  readonly isTwitter: boolean;
}

/** @name IdentityInfo */
export interface IdentityInfo extends Struct {
  readonly additional: Vec<IdentityInfoAdditional>;
  readonly display: Data;
  readonly legal: Data;
  readonly web: Data;
  readonly riot: Data;
  readonly email: Data;
  readonly pgpFingerprint: Option<H160>;
  readonly image: Data;
  readonly twitter: Data;
}

/** @name IdentityInfoAdditional */
export interface IdentityInfoAdditional extends ITuple<[Data, Data]> {}

/** @name IdentityInfoTo198 */
export interface IdentityInfoTo198 extends Struct {
  readonly additional: Vec<IdentityInfoAdditional>;
  readonly display: Data;
  readonly legal: Data;
  readonly web: Data;
  readonly riot: Data;
  readonly email: Data;
  readonly pgpFingerprint: Option<H160>;
  readonly image: Data;
}

/** @name IdentityJudgement */
export interface IdentityJudgement extends Enum {
  readonly isUnknown: boolean;
  readonly isFeePaid: boolean;
  readonly asFeePaid: Balance;
  readonly isReasonable: boolean;
  readonly isKnownGood: boolean;
  readonly isOutOfDate: boolean;
  readonly isLowQuality: boolean;
  readonly isErroneous: boolean;
  readonly type: 'Unknown' | 'FeePaid' | 'Reasonable' | 'KnownGood' | 'OutOfDate' | 'LowQuality' | 'Erroneous';
}

/** @name RegistrarIndex */
export interface RegistrarIndex extends u32 {}

/** @name RegistrarInfo */
export interface RegistrarInfo extends Struct {
  readonly account: AccountId;
  readonly fee: Balance;
  readonly fields: IdentityFields;
}

/** @name Registration */
export interface Registration extends Struct {
  readonly judgements: Vec<RegistrationJudgement>;
  readonly deposit: Balance;
  readonly info: IdentityInfo;
}

/** @name RegistrationJudgement */
export interface RegistrationJudgement extends ITuple<[RegistrarIndex, IdentityJudgement]> {}

/** @name RegistrationTo198 */
export interface RegistrationTo198 extends Struct {
  readonly judgements: Vec<RegistrationJudgement>;
  readonly deposit: Balance;
  readonly info: IdentityInfoTo198;
}

export type PHANTOM_IDENTITY = 'identity';

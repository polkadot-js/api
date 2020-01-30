// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ITuple } from '@polkadot/types/types';
import { Enum, Option, Struct, Vec } from '@polkadot/types/codec';
import { Data, H160, IdentityFields, u32 } from '@polkadot/types/primitive';
import { AccountId, Balance } from '@polkadot/types/interfaces/runtime';

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

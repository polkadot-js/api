// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ITuple } from '@polkadot/types/types';
import { Enum, Option, Struct, Vec } from '@polkadot/types/codec';
import { Data, H160, IdentityFields, u32 } from '@polkadot/types/primitive';
import { AccountId, Balance } from '@polkadot/types/interfaces/runtime';

/**
 * @name IdentityInfo
 * @description extends [[Struct]]
 */
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

/**
 * @name IdentityInfoAdditional
 * @description extends [[ITuple<[Data, Data]>]]
 */
export interface IdentityInfoAdditional extends ITuple<[Data, Data]> {}

/**
 * @name IdentityJudgement
 * @description extends [[Enum]]
 */
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

/**
 * @name RegistrarIndex
 * @description extends [[u32]]
 */
export interface RegistrarIndex extends u32 {}

/**
 * @name RegistrarInfo
 * @description extends [[Struct]]
 */
export interface RegistrarInfo extends Struct {
  readonly account: AccountId;
  readonly fee: Balance;
  readonly fields: IdentityFields;
}

/**
 * @name Registration
 * @description extends [[Struct]]
 */
export interface Registration extends Struct {
  readonly judgements: Vec<RegistrationJudgement>;
  readonly deposit: Balance;
  readonly info: IdentityInfo;
}

/**
 * @name RegistrationJudgement
 * @description extends [[ITuple<[RegistrarIndex, IdentityJudgement]>]]
 */
export interface RegistrationJudgement extends ITuple<[RegistrarIndex, IdentityJudgement]> {}

// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ITuple } from '@polkadot/types/types';
import { u32 } from '@polkadot/types/primitive';
import { AccountId, ValidatorId } from '@polkadot/types/interfaces/runtime';
import { Exposure } from '@polkadot/types/interfaces/staking';

/** Exposure */
export interface FullIdentification extends Exposure {}

/** ITuple<[ValidatorId, FullIdentification]> */
export interface IdentificationTuple extends ITuple<[ValidatorId, FullIdentification]> {}

/** SessionKeysSubstrate */
export interface Keys extends SessionKeysSubstrate {}

/** u32 */
export interface SessionIndex extends u32 {}

/** ITuple<[AccountId, AccountId, AccountId]> */
export interface SessionKeys3 extends ITuple<[AccountId, AccountId, AccountId]> {}

/** ITuple<[AccountId, AccountId, AccountId, AccountId]> */
export interface SessionKeys4 extends ITuple<[AccountId, AccountId, AccountId, AccountId]> {}

/** ITuple<[AccountId, AccountId, AccountId, AccountId, AccountId]> */
export interface SessionKeys5 extends ITuple<[AccountId, AccountId, AccountId, AccountId, AccountId]> {}

/** SessionKeys4 */
export interface SessionKeysPolkadot extends SessionKeys4 {}

/** SessionKeys4 */
export interface SessionKeysSubstrate extends SessionKeys4 {}

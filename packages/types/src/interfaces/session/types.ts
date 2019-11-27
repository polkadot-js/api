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

/** SessionKeys4 */
export interface Keys extends SessionKeys4 {}

/** u32 */
export interface SessionIndex extends u32 {}

/** AccountId */
export interface SessionKeys1 extends AccountId {}

/** ITuple<[AccountId, AccountId]> */
export interface SessionKeys2 extends ITuple<[AccountId, AccountId]> {}

/** ITuple<[AccountId, AccountId, AccountId]> */
export interface SessionKeys3 extends ITuple<[AccountId, AccountId, AccountId]> {}

/** ITuple<[AccountId, AccountId, AccountId, AccountId]> */
export interface SessionKeys4 extends ITuple<[AccountId, AccountId, AccountId, AccountId]> {}

/** ITuple<[AccountId, AccountId, AccountId, AccountId, AccountId]> */
export interface SessionKeys5 extends ITuple<[AccountId, AccountId, AccountId, AccountId, AccountId]> {}

/** ITuple<[AccountId, AccountId, AccountId, AccountId, AccountId, AccountId]> */
export interface SessionKeys6 extends ITuple<[AccountId, AccountId, AccountId, AccountId, AccountId, AccountId]> {}

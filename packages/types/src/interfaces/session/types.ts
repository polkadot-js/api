// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ITuple } from '@polkadot/types/types';
import { u32 } from '@polkadot/types/primitive';
import { AccountId, ValidatorId } from '@polkadot/types/interfaces/runtime';
import { Exposure } from '@polkadot/types/interfaces/staking';

/**
 * @name FullIdentification
 * @description extends [[Exposure]]
 */
export interface FullIdentification extends Exposure {}

/**
 * @name IdentificationTuple
 * @description extends [[ITuple<[ValidatorId, FullIdentification]>]]
 */
export interface IdentificationTuple extends ITuple<[ValidatorId, FullIdentification]> {}

/**
 * @name Keys
 * @description extends [[SessionKeys4]]
 */
export interface Keys extends SessionKeys4 {}

/**
 * @name SessionIndex
 * @description extends [[u32]]
 */
export interface SessionIndex extends u32 {}

/**
 * @name SessionKeys1
 * @description extends [[AccountId]]
 */
export interface SessionKeys1 extends AccountId {}

/**
 * @name SessionKeys2
 * @description extends [[ITuple<[AccountId, AccountId]>]]
 */
export interface SessionKeys2 extends ITuple<[AccountId, AccountId]> {}

/**
 * @name SessionKeys3
 * @description extends [[ITuple<[AccountId, AccountId, AccountId]>]]
 */
export interface SessionKeys3 extends ITuple<[AccountId, AccountId, AccountId]> {}

/**
 * @name SessionKeys4
 * @description extends [[ITuple<[AccountId, AccountId, AccountId, AccountId]>]]
 */
export interface SessionKeys4 extends ITuple<[AccountId, AccountId, AccountId, AccountId]> {}

/**
 * @name SessionKeys5
 * @description extends [[ITuple<[AccountId, AccountId, AccountId, AccountId, AccountId]>]]
 */
export interface SessionKeys5 extends ITuple<[AccountId, AccountId, AccountId, AccountId, AccountId]> {}

/**
 * @name SessionKeys6
 * @description extends [[ITuple<[AccountId, AccountId, AccountId, AccountId, AccountId, AccountId]>]]
 */
export interface SessionKeys6 extends ITuple<[AccountId, AccountId, AccountId, AccountId, AccountId, AccountId]> {}

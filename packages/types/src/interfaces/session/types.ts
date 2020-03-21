// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { ITuple } from '@polkadot/types/types';
import type { u32 } from '@polkadot/types/primitive';
import type { AccountId, ValidatorId } from '@polkadot/types/interfaces/runtime';
import type { Exposure } from '@polkadot/types/interfaces/staking';

/** @name FullIdentification */
export interface FullIdentification extends Exposure {}

/** @name IdentificationTuple */
export interface IdentificationTuple extends ITuple<[ValidatorId, FullIdentification]> {}

/** @name Keys */
export interface Keys extends SessionKeys4 {}

/** @name SessionIndex */
export interface SessionIndex extends u32 {}

/** @name SessionKeys1 */
export interface SessionKeys1 extends AccountId {}

/** @name SessionKeys2 */
export interface SessionKeys2 extends ITuple<[AccountId, AccountId]> {}

/** @name SessionKeys3 */
export interface SessionKeys3 extends ITuple<[AccountId, AccountId, AccountId]> {}

/** @name SessionKeys4 */
export interface SessionKeys4 extends ITuple<[AccountId, AccountId, AccountId, AccountId]> {}

/** @name SessionKeys5 */
export interface SessionKeys5 extends ITuple<[AccountId, AccountId, AccountId, AccountId, AccountId]> {}

/** @name SessionKeys6 */
export interface SessionKeys6 extends ITuple<[AccountId, AccountId, AccountId, AccountId, AccountId, AccountId]> {}

export type PHANTOM_SESSION = 'session';

// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { ITuple } from '@polkadot/types/types';
import { Struct, Vec } from '@polkadot/types/codec';
import { Bytes, u32 } from '@polkadot/types/primitive';
import { AccountId, ValidatorId } from '@polkadot/types/interfaces/runtime';
import { Exposure } from '@polkadot/types/interfaces/staking';

/** @name FullIdentification */
export interface FullIdentification extends Exposure {}

/** @name IdentificationTuple */
export interface IdentificationTuple extends ITuple<[ValidatorId, FullIdentification]> {}

/** @name Keys */
export interface Keys extends SessionKeys4 {}

/** @name MembershipProof */
export interface MembershipProof extends Struct {
  readonly session: SessionIndex;
  readonly trieNodes: Vec<Bytes>;
  readonly validatorCount: ValidatorCount;
}

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

/** @name ValidatorCount */
export interface ValidatorCount extends u32 {}

export type PHANTOM_SESSION = 'session';

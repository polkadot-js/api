// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Struct, U8aFixed, Vec, u32 } from '@polkadot/types';
import type { AccountId, ValidatorId } from '@polkadot/types/interfaces/runtime';
import type { Exposure } from '@polkadot/types/interfaces/staking';
import type { ITuple } from '@polkadot/types/types';

/** @name BeefyKey */
export interface BeefyKey extends U8aFixed {}

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

/** @name SessionKeys10 */
export interface SessionKeys10 extends ITuple<[AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId]> {}

/** @name SessionKeys10B */
export interface SessionKeys10B extends ITuple<[AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey]> {}

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

/** @name SessionKeys6B */
export interface SessionKeys6B extends ITuple<[AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey]> {}

/** @name SessionKeys7 */
export interface SessionKeys7 extends ITuple<[AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId]> {}

/** @name SessionKeys7B */
export interface SessionKeys7B extends ITuple<[AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey]> {}

/** @name SessionKeys8 */
export interface SessionKeys8 extends ITuple<[AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId]> {}

/** @name SessionKeys8B */
export interface SessionKeys8B extends ITuple<[AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey]> {}

/** @name SessionKeys9 */
export interface SessionKeys9 extends ITuple<[AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId]> {}

/** @name SessionKeys9B */
export interface SessionKeys9B extends ITuple<[AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey]> {}

/** @name ValidatorCount */
export interface ValidatorCount extends u32 {}

export type PHANTOM_SESSION = 'session';

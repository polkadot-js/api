// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { ITuple } from '../../types';
import { u32 } from '../../primitive';
import { AccountId, ValidatorId } from '../runtime';
import { Exposure } from '../staking';

/** Exposure */
export interface FullIdentification extends Exposure {}

/** ITuple<[ValidatorId, FullIdentification]> */
export interface IdentificationTuple extends ITuple<[ValidatorId, FullIdentification]> {}

/** SessionKeysSubstrate */
export interface Keys extends SessionKeysSubstrate {}

/** u32 */
export interface SessionIndex extends u32 {}

/** ITuple<[AccountId, AccountId, AccountId, AccountId]> */
export interface SessionKeysPolkadot extends ITuple<[AccountId, AccountId, AccountId, AccountId]> {}

/** ITuple<[AccountId, AccountId, AccountId]> */
export interface SessionKeysSubstrate extends ITuple<[AccountId, AccountId, AccountId]> {}

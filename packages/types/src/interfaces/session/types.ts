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

/** ITuple<[AccountId, AccountId, AccountId, AccountId]> */
export interface SessionKeysPolkadot extends ITuple<[AccountId, AccountId, AccountId, AccountId]> {}

/** ITuple<[AccountId, AccountId, AccountId]> */
export interface SessionKeysSubstrate extends ITuple<[AccountId, AccountId, AccountId]> {}

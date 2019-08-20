// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Codec } from '../../types';
import { u32 } from '../../primitive';
import { AccountId, ValidatorId } from '../runtime';
import { Exposure } from '../staking';

/** Exposure */
export type FullIdentification = Exposure;

/** [ValidatorId, FullIdentification] & Codec */
export type IdentificationTuple = [ValidatorId, FullIdentification] & Codec;

/** SessionKeysSubstrate */
export type Keys = SessionKeysSubstrate;

/** u32 */
export type SessionIndex = u32;

/** [AccountId, AccountId, AccountId, AccountId] & Codec */
export type SessionKeysPolkadot = [AccountId, AccountId, AccountId, AccountId] & Codec;

/** [AccountId, AccountId, AccountId] & Codec */
export type SessionKeysSubstrate = [AccountId, AccountId, AccountId] & Codec;

// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Codec } from '../../types';
import { u32 } from '../../primitive';
import { AccountId } from '../runtime';

/** SessionKeysSubstrate */
export type Keys = SessionKeysSubstrate;

/** u32 */
export type SessionIndex = u32;

/** [AccountId, AccountId, AccountId, AccountId] & Codec */
export type SessionKeysPolkadot = [AccountId, AccountId, AccountId, AccountId] & Codec;

/** [AccountId, AccountId, AccountId] & Codec */
export type SessionKeysSubstrate = [AccountId, AccountId, AccountId] & Codec;

// Auto-generated via `yarn build:interfaces`, do not edit

import { Codec } from '../../types';
import { Struct, Vec } from '../../codec';
import { AccountId, Bytes, Fixed64, H256, H512, Null, StorageKey, u128, u32, u64, u8 } from '../../primitive';

/** AccountId */
export type AccountIdOf = AccountId;

/** u128 */
export type Balance = u128;

/** Balance */
export type BalanceOf = Balance;

/** u64 */
export type BlockNumber = u64;

/** Signature */
export type Ed25519Signature = Signature;

/** H256 */
export type Hash = H256;

/** u64 */
export type Index = u64;

/** Bytes */
export type Justification = Bytes;

/** u32 */
export type KeyTypeId = u32;

/** [StorageKey, StorageData] & Codec */
export type KeyValue = [StorageKey, StorageData] & Codec;

/** Vec<u8> */
export type LockIdentifier = Vec<u8>;

/** u32 */
export type Perbill = u32;

/** u32 */
export type Permill = u32;

/** Null */
export type Phantom = Null;

/** Struct */
export interface SessionKeys extends Struct {
  /** AccountId */
  readonly ed25519: AccountId;
}

/** H512 */
export type Signature = H512;

/** Signature */
export type Sr25519Signature = Signature;

/** Bytes */
export type StorageData = Bytes;

/** AccountId */
export type ValidatorId = AccountId;

/** u32 */
export type Weight = u32;

/** Fixed64 */
export type WeightMultiplier = Fixed64;

// Auto-generated via `yarn build:srmlTs`, do not edit

import { Codec } from '../../types';
import { Compact, Option, Struct, Vec } from '../../codec';
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

declare module '@polkadot/types/interfaceRegistry' {
  export interface InterfaceRegistry {
    AccountIdOf: AccountIdOf;
    'Option<AccountIdOf>': Option<AccountIdOf>;
    'Vec<AccountIdOf>': Vec<AccountIdOf>;
    Balance: Balance;
    'Compact<Balance>': Compact<Balance>;
    'Option<Balance>': Option<Balance>;
    'Vec<Balance>': Vec<Balance>;
    BalanceOf: BalanceOf;
    'Option<BalanceOf>': Option<BalanceOf>;
    'Vec<BalanceOf>': Vec<BalanceOf>;
    BlockNumber: BlockNumber;
    'Compact<BlockNumber>': Compact<BlockNumber>;
    'Option<BlockNumber>': Option<BlockNumber>;
    'Vec<BlockNumber>': Vec<BlockNumber>;
    Hash: Hash;
    'Option<Hash>': Option<Hash>;
    'Vec<Hash>': Vec<Hash>;
    Justification: Justification;
    'Option<Justification>': Option<Justification>;
    'Vec<Justification>': Vec<Justification>;
    KeyTypeId: KeyTypeId;
    'Compact<KeyTypeId>': Compact<KeyTypeId>;
    'Option<KeyTypeId>': Option<KeyTypeId>;
    'Vec<KeyTypeId>': Vec<KeyTypeId>;
    LockIdentifier: LockIdentifier;
    'Option<LockIdentifier>': Option<LockIdentifier>;
    'Vec<LockIdentifier>': Vec<LockIdentifier>;
    Index: Index;
    'Compact<Index>': Compact<Index>;
    'Option<Index>': Option<Index>;
    'Vec<Index>': Vec<Index>;
    Perbill: Perbill;
    'Compact<Perbill>': Compact<Perbill>;
    'Option<Perbill>': Option<Perbill>;
    'Vec<Perbill>': Vec<Perbill>;
    Permill: Permill;
    'Compact<Permill>': Compact<Permill>;
    'Option<Permill>': Option<Permill>;
    'Vec<Permill>': Vec<Permill>;
    Phantom: Phantom;
    'Option<Phantom>': Option<Phantom>;
    'Vec<Phantom>': Vec<Phantom>;
    SessionKeys: SessionKeys;
    'Option<SessionKeys>': Option<SessionKeys>;
    'Vec<SessionKeys>': Vec<SessionKeys>;
    Signature: Signature;
    'Option<Signature>': Option<Signature>;
    'Vec<Signature>': Vec<Signature>;
    Ed25519Signature: Ed25519Signature;
    'Option<Ed25519Signature>': Option<Ed25519Signature>;
    'Vec<Ed25519Signature>': Vec<Ed25519Signature>;
    Sr25519Signature: Sr25519Signature;
    'Option<Sr25519Signature>': Option<Sr25519Signature>;
    'Vec<Sr25519Signature>': Vec<Sr25519Signature>;
    StorageData: StorageData;
    'Option<StorageData>': Option<StorageData>;
    'Vec<StorageData>': Vec<StorageData>;
    KeyValue: KeyValue;
    'Option<KeyValue>': Option<KeyValue>;
    'Vec<KeyValue>': Vec<KeyValue>;
    ValidatorId: ValidatorId;
    'Option<ValidatorId>': Option<ValidatorId>;
    'Vec<ValidatorId>': Vec<ValidatorId>;
    Weight: Weight;
    'Compact<Weight>': Compact<Weight>;
    'Option<Weight>': Option<Weight>;
    'Vec<Weight>': Vec<Weight>;
    WeightMultiplier: WeightMultiplier;
    'Option<WeightMultiplier>': Option<WeightMultiplier>;
    'Vec<WeightMultiplier>': Vec<WeightMultiplier>;
  }
}

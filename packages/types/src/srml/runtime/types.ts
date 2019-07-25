/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Compact, Option, Struct, Vec } from '../../codec';
import { AccountId, Bytes, Fixed64, H256, H512, Null, u128, u32, u64, u8 } from '../../primitive';

export interface AccountIdOf extends AccountId {}

export interface Balance extends u128 {}

export interface BalanceOf extends Balance {}

export interface BlockNumber extends u64 {}

export interface Ed25519Signature extends Signature {}

export interface Hash extends H256 {}

export interface Index extends u64 {}

export interface Justification extends Bytes {}

export interface KeyTypeId extends u32 {}

export interface LockIdentifier extends Vec<u8> {}

export interface Perbill extends u32 {}

export interface Permill extends u32 {}

export interface Phantom extends Null {}

export interface SessionKeys extends Struct {
  readonly ed25519: AccountId;
}

export interface Signature extends H512 {}

export interface Sr25519Signature extends Signature {}

export interface ValidatorId extends AccountId {}

export interface Weight extends u32 {}

export interface WeightMultiplier extends Fixed64 {}

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
    ValidatorId: ValidatorId;
    'Option<ValidatorId>': Option<ValidatorId>;
    'Vec<ValidatorId>': Vec<ValidatorId>;
    Weight: Weight;
    'Compact<Weight>': Compact<Weight>;
    'Option<Weight>': Option<Weight>;
    'Vec<Weight>': Vec<Weight>;
    WeightMultiplier: WeightMultiplier;
    'Compact<WeightMultiplier>': Compact<WeightMultiplier>;
    'Option<WeightMultiplier>': Option<WeightMultiplier>;
    'Vec<WeightMultiplier>': Vec<WeightMultiplier>;
  }
}

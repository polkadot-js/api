/* eslint-disable @typescript-eslint/no-empty-interface */
// Auto-generated via `yarn build:srmlTs`, do not edit

import { Compact, Option, Struct, Vector } from '../../codec';
import { AccountId, Bytes, Fixed64, H256, H512, u128, u32, u64, u8 } from '../../primitive';

export interface AccountIdOf extends AccountId {}

export interface Balance extends u128 {}

export interface BalanceOf extends Balance {}

export interface BlockNumber extends u64 {}

export interface Ed25519Signature extends Signature {}

export interface Hash extends H256 {}

export interface Index extends u64 {}

export interface Justification extends Bytes {}

export interface KeyTypeId extends u32 {}

export interface LockIdentifier extends Vector<u8> {}

export interface Perbill extends u32 {}

export interface Permill extends u32 {}

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
    'Vec<AccountIdOf>': Vector<AccountIdOf>;
    Balance: Balance;
    'Compact<Balance>': Compact<Balance>;
    'Option<Balance>': Option<Balance>;
    'Vec<Balance>': Vector<Balance>;
    BalanceOf: BalanceOf;
    'Option<BalanceOf>': Option<BalanceOf>;
    'Vec<BalanceOf>': Vector<BalanceOf>;
    BlockNumber: BlockNumber;
    'Compact<BlockNumber>': Compact<BlockNumber>;
    'Option<BlockNumber>': Option<BlockNumber>;
    'Vec<BlockNumber>': Vector<BlockNumber>;
    Hash: Hash;
    'Option<Hash>': Option<Hash>;
    'Vec<Hash>': Vector<Hash>;
    Justification: Justification;
    'Option<Justification>': Option<Justification>;
    'Vec<Justification>': Vector<Justification>;
    KeyTypeId: KeyTypeId;
    'Compact<KeyTypeId>': Compact<KeyTypeId>;
    'Option<KeyTypeId>': Option<KeyTypeId>;
    'Vec<KeyTypeId>': Vector<KeyTypeId>;
    LockIdentifier: LockIdentifier;
    'Option<LockIdentifier>': Option<LockIdentifier>;
    'Vec<LockIdentifier>': Vector<LockIdentifier>;
    Index: Index;
    'Compact<Index>': Compact<Index>;
    'Option<Index>': Option<Index>;
    'Vec<Index>': Vector<Index>;
    Perbill: Perbill;
    'Compact<Perbill>': Compact<Perbill>;
    'Option<Perbill>': Option<Perbill>;
    'Vec<Perbill>': Vector<Perbill>;
    Permill: Permill;
    'Compact<Permill>': Compact<Permill>;
    'Option<Permill>': Option<Permill>;
    'Vec<Permill>': Vector<Permill>;
    SessionKeys: SessionKeys;
    'Option<SessionKeys>': Option<SessionKeys>;
    'Vec<SessionKeys>': Vector<SessionKeys>;
    Signature: Signature;
    'Option<Signature>': Option<Signature>;
    'Vec<Signature>': Vector<Signature>;
    Ed25519Signature: Ed25519Signature;
    'Option<Ed25519Signature>': Option<Ed25519Signature>;
    'Vec<Ed25519Signature>': Vector<Ed25519Signature>;
    Sr25519Signature: Sr25519Signature;
    'Option<Sr25519Signature>': Option<Sr25519Signature>;
    'Vec<Sr25519Signature>': Vector<Sr25519Signature>;
    ValidatorId: ValidatorId;
    'Option<ValidatorId>': Option<ValidatorId>;
    'Vec<ValidatorId>': Vector<ValidatorId>;
    Weight: Weight;
    'Compact<Weight>': Compact<Weight>;
    'Option<Weight>': Option<Weight>;
    'Vec<Weight>': Vector<Weight>;
    WeightMultiplier: WeightMultiplier;
    'Compact<WeightMultiplier>': Compact<WeightMultiplier>;
    'Option<WeightMultiplier>': Option<WeightMultiplier>;
    'Vec<WeightMultiplier>': Vector<WeightMultiplier>;
  }
}

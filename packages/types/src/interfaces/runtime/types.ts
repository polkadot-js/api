// Auto-generated via `yarn build:interfaces`, do not edit

import { Codec } from '../../types';
import { Compact, Option, Struct, Vec } from '../../codec';
import { AccountId, Bytes, Fixed64, GenericBlock, GenericConsensusEngineId, GenericDigest, GenericDigestItem, H256, H512, Null, StorageKey, u128, u32, u64, u8 } from '../../primitive';

/** AccountId */
export type AccountIdOf = AccountId;

/** u128 */
export type Balance = u128;

/** Balance */
export type BalanceOf = Balance;

/** GenericBlock */
export type Block = GenericBlock;

/** u64 */
export type BlockNumber = u64;

/** [ConsensusEngineId, Bytes] & Codec */
export type Consensus = [ConsensusEngineId, Bytes] & Codec;

/** GenericConsensusEngineId */
export type ConsensusEngineId = GenericConsensusEngineId;

/** GenericDigest */
export type Digest = GenericDigest;

/** GenericDigestItem */
export type DigestItem = GenericDigestItem;

/** Signature */
export type Ed25519Signature = Signature;

/** H256 */
export type Hash = H256;

/** Struct */
export interface Header extends Struct {
  /** Hash */
  readonly parentHash: Hash;
  /** Compact<BlockNumber> */
  readonly number: Compact<BlockNumber>;
  /** Hash */
  readonly stateRoot: Hash;
  /** Hash */
  readonly extrinsicsRoot: Hash;
  /** Digest */
  readonly digest: Digest;
}

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

/** [ConsensusEngineId, Bytes] & Codec */
export type PreRuntime = [ConsensusEngineId, Bytes] & Codec;

/** [ConsensusEngineId, Bytes] & Codec */
export type Seal = [ConsensusEngineId, Bytes] & Codec;

/** [u64, Signature] & Codec */
export type SealV0 = [u64, Signature] & Codec;

/** Struct */
export interface SessionKeys extends Struct {
  /** AccountId */
  readonly ed25519: AccountId;
}

/** H512 */
export type Signature = H512;

/** Struct */
export interface SignedBlock extends Struct {
  /** Block */
  readonly block: Block;
  /** Justification */
  readonly justification: Justification;
}

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
    ConsensusEngineId: ConsensusEngineId;
    'Compact<ConsensusEngineId>': Compact<ConsensusEngineId>;
    'Option<ConsensusEngineId>': Option<ConsensusEngineId>;
    'Vec<ConsensusEngineId>': Vec<ConsensusEngineId>;
    PreRuntime: PreRuntime;
    'Option<PreRuntime>': Option<PreRuntime>;
    'Vec<PreRuntime>': Vec<PreRuntime>;
    SealV0: SealV0;
    'Option<SealV0>': Option<SealV0>;
    'Vec<SealV0>': Vec<SealV0>;
    Seal: Seal;
    'Option<Seal>': Option<Seal>;
    'Vec<Seal>': Vec<Seal>;
    Consensus: Consensus;
    'Option<Consensus>': Option<Consensus>;
    'Vec<Consensus>': Vec<Consensus>;
    DigestItem: DigestItem;
    'Option<DigestItem>': Option<DigestItem>;
    'Vec<DigestItem>': Vec<DigestItem>;
    Digest: Digest;
    'Option<Digest>': Option<Digest>;
    'Vec<Digest>': Vec<Digest>;
    Hash: Hash;
    'Option<Hash>': Option<Hash>;
    'Vec<Hash>': Vec<Hash>;
    Header: Header;
    'Option<Header>': Option<Header>;
    'Vec<Header>': Vec<Header>;
    Justification: Justification;
    'Option<Justification>': Option<Justification>;
    'Vec<Justification>': Vec<Justification>;
    Block: Block;
    'Option<Block>': Option<Block>;
    'Vec<Block>': Vec<Block>;
    SignedBlock: SignedBlock;
    'Option<SignedBlock>': Option<SignedBlock>;
    'Vec<SignedBlock>': Vec<SignedBlock>;
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

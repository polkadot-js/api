// Auto-generated via `yarn build:interfaces`, do not edit

import { Codec } from '../../types';
import { Compact, Struct, Vec } from '../../codec';
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

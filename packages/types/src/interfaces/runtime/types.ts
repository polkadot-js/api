// Auto-generated via `yarn build:interfaces`, do not edit

import { Codec } from '../../types';
import { Compact, Struct, Vec } from '../../codec';
import { Bytes, Fixed64, GenericAccountId, GenericAccountIndex, GenericAddress, GenericBlock, GenericCall, GenericConsensusEngineId, GenericDigest, GenericDigestItem, GenericExtrinsic, GenericExtrinsicEra, GenericExtrinsicPayload, GenericImmortalEra, GenericMortalEra, GenericOrigin, H256, H512, Null, StorageKey, u128, u32, u64, u8 } from '../../primitive';

/** GenericAccountId */
export type AccountId = GenericAccountId;

/** AccountId */
export type AccountIdOf = AccountId;

/** GenericAccountIndex */
export type AccountIndex = GenericAccountIndex;

/** GenericAddress */
export type Address = GenericAddress;

/** u32 */
export type AssetId = u32;

/** u128 */
export type Balance = u128;

/** Balance */
export type BalanceOf = Balance;

/** GenericBlock */
export type Block = GenericBlock;

/** u64 */
export type BlockNumber = u64;

/** GenericCall */
export type Call = GenericCall;

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

/** GenericExtrinsic */
export type Extrinsic = GenericExtrinsic;

/** GenericExtrinsicEra */
export type ExtrinsicEra = GenericExtrinsicEra;

/** GenericExtrinsicPayload */
export type ExtrinsicPayload = GenericExtrinsicPayload;

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

/** GenericImmortalEra */
export type ImmortalEra = GenericImmortalEra;

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

/** u64 */
export type Moment = u64;

/** GenericMortalEra */
export type MortalEra = GenericMortalEra;

/** GenericOrigin */
export type Origin = GenericOrigin;

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

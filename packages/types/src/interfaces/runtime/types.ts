// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Codec } from '../../types';
import { Compact, Struct } from '../../codec';
import { Bytes, Fixed64, GenericAccountId, GenericAccountIndex, GenericAddress, GenericBlock, GenericCall, GenericConsensusEngineId, GenericDigest, GenericDigestItem, GenericExtrinsic, GenericExtrinsicEra, GenericExtrinsicPayload, GenericExtrinsicPayloadUnknown, GenericExtrinsicPayloadV1, GenericExtrinsicPayloadV2, GenericExtrinsicPayloadV3, GenericExtrinsicUnknown, GenericExtrinsicV1, GenericExtrinsicV2, GenericExtrinsicV3, GenericImmortalEra, GenericMortalEra, GenericOrigin, GenericSignerPayload, H256, H512, Null, StorageData, StorageKey, u128, u32, u64 } from '../../primitive';

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

/** u32 */
export type BlockNumber = u32;

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

/** GenericExtrinsicPayloadUnknown */
export type ExtrinsicPayloadUnknown = GenericExtrinsicPayloadUnknown;

/** GenericExtrinsicPayloadV1 */
export type ExtrinsicPayloadV1 = GenericExtrinsicPayloadV1;

/** GenericExtrinsicPayloadV2 */
export type ExtrinsicPayloadV2 = GenericExtrinsicPayloadV2;

/** GenericExtrinsicPayloadV3 */
export type ExtrinsicPayloadV3 = GenericExtrinsicPayloadV3;

/** GenericExtrinsicUnknown */
export type ExtrinsicUnknown = GenericExtrinsicUnknown;

/** GenericExtrinsicV1 */
export type ExtrinsicV1 = GenericExtrinsicV1;

/** GenericExtrinsicV2 */
export type ExtrinsicV2 = GenericExtrinsicV2;

/** GenericExtrinsicV3 */
export type ExtrinsicV3 = GenericExtrinsicV3;

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

/** u32 */
export type Index = u32;

/** Bytes */
export type Justification = Bytes;

/** u32 */
export type KeyTypeId = u32;

/** [StorageKey, StorageData] & Codec */
export type KeyValue = [StorageKey, StorageData] & Codec;

/** Uint8Array & Codec */
export type LockIdentifier = Uint8Array & Codec;

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

/** Null */
export type PhantomData = Null;

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

/** GenericSignerPayload */
export type SignerPayload = GenericSignerPayload;

/** Signature */
export type Sr25519Signature = Signature;

/** AccountId */
export type ValidatorId = AccountId;

/** u32 */
export type Weight = u32;

/** Fixed64 */
export type WeightMultiplier = Fixed64;

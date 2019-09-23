// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Codec, ITuple } from '../../types';
import { Compact, Struct } from '../../codec';
import { Bytes, Fixed64, GenericAccountId, GenericAccountIndex, GenericAddress, GenericBlock, GenericCall, GenericConsensusEngineId, GenericDigest, GenericDigestItem, GenericExtrinsic, GenericExtrinsicEra, GenericExtrinsicPayload, GenericExtrinsicPayloadUnknown, GenericExtrinsicPayloadV1, GenericExtrinsicPayloadV2, GenericExtrinsicPayloadV3, GenericExtrinsicUnknown, GenericExtrinsicV1, GenericExtrinsicV2, GenericExtrinsicV3, GenericImmortalEra, GenericMortalEra, GenericOrigin, GenericSignerPayload, H256, H512, Null, StorageData, StorageKey, u128, u32, u64 } from '../../primitive';

/** GenericAccountId */
export interface AccountId extends GenericAccountId {}

/** AccountId */
export interface AccountIdOf extends AccountId {}

/** GenericAccountIndex */
export interface AccountIndex extends GenericAccountIndex {}

/** GenericAddress */
export interface Address extends GenericAddress {}

/** u32 */
export interface AssetId extends u32 {}

/** u128 */
export interface Balance extends u128 {}

/** Balance */
export interface BalanceOf extends Balance {}

/** GenericBlock */
export interface Block extends GenericBlock {}

/** u32 */
export interface BlockNumber extends u32 {}

/** GenericCall */
export interface Call extends GenericCall {}

/** ITuple<[ConsensusEngineId, Bytes]> */
export interface Consensus extends ITuple<[ConsensusEngineId, Bytes]> {}

/** GenericConsensusEngineId */
export interface ConsensusEngineId extends GenericConsensusEngineId {}

/** GenericDigest */
export interface Digest extends GenericDigest {}

/** GenericDigestItem */
export interface DigestItem extends GenericDigestItem {}

/** Signature */
export interface Ed25519Signature extends Signature {}

/** GenericExtrinsic */
export interface Extrinsic extends GenericExtrinsic {}

/** GenericExtrinsicEra */
export interface ExtrinsicEra extends GenericExtrinsicEra {}

/** GenericExtrinsicPayload */
export interface ExtrinsicPayload extends GenericExtrinsicPayload {}

/** GenericExtrinsicPayloadUnknown */
export interface ExtrinsicPayloadUnknown extends GenericExtrinsicPayloadUnknown {}

/** GenericExtrinsicPayloadV1 */
export interface ExtrinsicPayloadV1 extends GenericExtrinsicPayloadV1 {}

/** GenericExtrinsicPayloadV2 */
export interface ExtrinsicPayloadV2 extends GenericExtrinsicPayloadV2 {}

/** GenericExtrinsicPayloadV3 */
export interface ExtrinsicPayloadV3 extends GenericExtrinsicPayloadV3 {}

/** GenericExtrinsicUnknown */
export interface ExtrinsicUnknown extends GenericExtrinsicUnknown {}

/** GenericExtrinsicV1 */
export interface ExtrinsicV1 extends GenericExtrinsicV1 {}

/** GenericExtrinsicV2 */
export interface ExtrinsicV2 extends GenericExtrinsicV2 {}

/** GenericExtrinsicV3 */
export interface ExtrinsicV3 extends GenericExtrinsicV3 {}

/** H256 */
export interface Hash extends H256 {}

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
export interface ImmortalEra extends GenericImmortalEra {}

/** u32 */
export interface Index extends u32 {}

/** Bytes */
export interface Justification extends Bytes {}

/** u32 */
export interface KeyTypeId extends u32 {}

/** ITuple<[StorageKey, StorageData]> */
export interface KeyValue extends ITuple<[StorageKey, StorageData]> {}

/** Uint8Array, Codec */
export interface LockIdentifier extends Uint8Array, Codec {}

/** u64 */
export interface Moment extends u64 {}

/** GenericMortalEra */
export interface MortalEra extends GenericMortalEra {}

/** GenericOrigin */
export interface Origin extends GenericOrigin {}

/** u32 */
export interface Perbill extends u32 {}

/** u32 */
export interface Permill extends u32 {}

/** Null */
export interface Phantom extends Null {}

/** Null */
export interface PhantomData extends Null {}

/** ITuple<[ConsensusEngineId, Bytes]> */
export interface PreRuntime extends ITuple<[ConsensusEngineId, Bytes]> {}

/** ITuple<[ConsensusEngineId, Bytes]> */
export interface Seal extends ITuple<[ConsensusEngineId, Bytes]> {}

/** ITuple<[u64, Signature]> */
export interface SealV0 extends ITuple<[u64, Signature]> {}

/** H512 */
export interface Signature extends H512 {}

/** Struct */
export interface SignedBlock extends Struct {
  /** Block */
  readonly block: Block;
  /** Justification */
  readonly justification: Justification;
}

/** GenericSignerPayload */
export interface SignerPayload extends GenericSignerPayload {}

/** Signature */
export interface Sr25519Signature extends Signature {}

/** AccountId */
export interface ValidatorId extends AccountId {}

/** u32 */
export interface Weight extends u32 {}

/** Fixed64 */
export interface WeightMultiplier extends Fixed64 {}

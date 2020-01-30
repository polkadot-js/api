// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Codec, ITuple } from '@polkadot/types/types';
import { Compact, Enum, Struct } from '@polkadot/types/codec';
import { Bytes, Fixed64, GenericAccountId, GenericAccountIndex, GenericAddress, GenericBlock, GenericCall, GenericConsensusEngineId, GenericDigest, GenericDigestItem, GenericExtrinsic, GenericExtrinsicEra, GenericExtrinsicPayload, GenericExtrinsicPayloadUnknown, GenericExtrinsicPayloadV1, GenericExtrinsicPayloadV2, GenericExtrinsicPayloadV3, GenericExtrinsicPayloadV4, GenericExtrinsicUnknown, GenericExtrinsicV1, GenericExtrinsicV2, GenericExtrinsicV3, GenericExtrinsicV4, GenericImmortalEra, GenericMortalEra, GenericOrigin, GenericSignerPayload, H256, H512, Null, StorageData, StorageKey, bool, u128, u32, u64, u8 } from '@polkadot/types/primitive';

/**
 * @name AccountId
 * @description extends [[GenericAccountId]]
 */
export interface AccountId extends GenericAccountId {}

/**
 * @name AccountIdOf
 * @description extends [[AccountId]]
 */
export interface AccountIdOf extends AccountId {}

/**
 * @name AccountIndex
 * @description extends [[GenericAccountIndex]]
 */
export interface AccountIndex extends GenericAccountIndex {}

/**
 * @name Address
 * @description extends [[GenericAddress]]
 */
export interface Address extends GenericAddress {}

/**
 * @name AssetId
 * @description extends [[u32]]
 */
export interface AssetId extends u32 {}

/**
 * @name Balance
 * @description extends [[u128]]
 */
export interface Balance extends u128 {}

/**
 * @name BalanceOf
 * @description extends [[Balance]]
 */
export interface BalanceOf extends Balance {}

/**
 * @name Block
 * @description extends [[GenericBlock]]
 */
export interface Block extends GenericBlock {}

/**
 * @name BlockNumber
 * @description extends [[u32]]
 */
export interface BlockNumber extends u32 {}

/**
 * @name Call
 * @description extends [[GenericCall]]
 */
export interface Call extends GenericCall {}

/**
 * @name ChangesTrieConfiguration
 * @description extends [[Struct]]
 */
export interface ChangesTrieConfiguration extends Struct {
  readonly digestInterval: u32;
  readonly digestLevels: u32;
}

/**
 * @name Consensus
 * @description extends [[ITuple<[ConsensusEngineId, Bytes]>]]
 */
export interface Consensus extends ITuple<[ConsensusEngineId, Bytes]> {}

/**
 * @name ConsensusEngineId
 * @description extends [[GenericConsensusEngineId]]
 */
export interface ConsensusEngineId extends GenericConsensusEngineId {}

/**
 * @name Digest
 * @description extends [[GenericDigest]]
 */
export interface Digest extends GenericDigest {}

/**
 * @name DigestItem
 * @description extends [[GenericDigestItem]]
 */
export interface DigestItem extends GenericDigestItem {}

/**
 * @name DispatchClass
 * @description extends [[Enum]]
 */
export interface DispatchClass extends Enum {
  readonly isNormal: boolean;
  readonly isOperational: boolean;
}

/**
 * @name DispatchInfo
 * @description extends [[Struct]]
 */
export interface DispatchInfo extends Struct {
  readonly weight: Weight;
  readonly class: DispatchClass;
  readonly paysFee: bool;
}

/**
 * @name DispatchInfoTo190
 * @description extends [[Struct]]
 */
export interface DispatchInfoTo190 extends Struct {
  readonly weight: Weight;
  readonly class: DispatchClass;
}

/**
 * @name EcdsaSignature
 * @description extends [[Uint8Array, Codec]]
 */
export interface EcdsaSignature extends Uint8Array, Codec {}

/**
 * @name Ed25519Signature
 * @description extends [[Signature]]
 */
export interface Ed25519Signature extends Signature {}

/**
 * @name Extrinsic
 * @description extends [[GenericExtrinsic]]
 */
export interface Extrinsic extends GenericExtrinsic {}

/**
 * @name ExtrinsicEra
 * @description extends [[GenericExtrinsicEra]]
 */
export interface ExtrinsicEra extends GenericExtrinsicEra {}

/**
 * @name ExtrinsicPayload
 * @description extends [[GenericExtrinsicPayload]]
 */
export interface ExtrinsicPayload extends GenericExtrinsicPayload {}

/**
 * @name ExtrinsicPayloadUnknown
 * @description extends [[GenericExtrinsicPayloadUnknown]]
 */
export interface ExtrinsicPayloadUnknown extends GenericExtrinsicPayloadUnknown {}

/**
 * @name ExtrinsicPayloadV1
 * @description extends [[GenericExtrinsicPayloadV1]]
 */
export interface ExtrinsicPayloadV1 extends GenericExtrinsicPayloadV1 {}

/**
 * @name ExtrinsicPayloadV2
 * @description extends [[GenericExtrinsicPayloadV2]]
 */
export interface ExtrinsicPayloadV2 extends GenericExtrinsicPayloadV2 {}

/**
 * @name ExtrinsicPayloadV3
 * @description extends [[GenericExtrinsicPayloadV3]]
 */
export interface ExtrinsicPayloadV3 extends GenericExtrinsicPayloadV3 {}

/**
 * @name ExtrinsicPayloadV4
 * @description extends [[GenericExtrinsicPayloadV4]]
 */
export interface ExtrinsicPayloadV4 extends GenericExtrinsicPayloadV4 {}

/**
 * @name ExtrinsicUnknown
 * @description extends [[GenericExtrinsicUnknown]]
 */
export interface ExtrinsicUnknown extends GenericExtrinsicUnknown {}

/**
 * @name ExtrinsicV1
 * @description extends [[GenericExtrinsicV1]]
 */
export interface ExtrinsicV1 extends GenericExtrinsicV1 {}

/**
 * @name ExtrinsicV2
 * @description extends [[GenericExtrinsicV2]]
 */
export interface ExtrinsicV2 extends GenericExtrinsicV2 {}

/**
 * @name ExtrinsicV3
 * @description extends [[GenericExtrinsicV3]]
 */
export interface ExtrinsicV3 extends GenericExtrinsicV3 {}

/**
 * @name ExtrinsicV4
 * @description extends [[GenericExtrinsicV4]]
 */
export interface ExtrinsicV4 extends GenericExtrinsicV4 {}

/**
 * @name Hash
 * @description extends [[H256]]
 */
export interface Hash extends H256 {}

/**
 * @name Header
 * @description extends [[Struct]]
 */
export interface Header extends Struct {
  readonly parentHash: Hash;
  readonly number: Compact<BlockNumber>;
  readonly stateRoot: Hash;
  readonly extrinsicsRoot: Hash;
  readonly digest: Digest;
}

/**
 * @name ImmortalEra
 * @description extends [[GenericImmortalEra]]
 */
export interface ImmortalEra extends GenericImmortalEra {}

/**
 * @name Index
 * @description extends [[u32]]
 */
export interface Index extends u32 {}

/**
 * @name Justification
 * @description extends [[Bytes]]
 */
export interface Justification extends Bytes {}

/**
 * @name KeyTypeId
 * @description extends [[u32]]
 */
export interface KeyTypeId extends u32 {}

/**
 * @name KeyValue
 * @description extends [[ITuple<[StorageKey, StorageData]>]]
 */
export interface KeyValue extends ITuple<[StorageKey, StorageData]> {}

/**
 * @name LockIdentifier
 * @description extends [[Uint8Array, Codec]]
 */
export interface LockIdentifier extends Uint8Array, Codec {}

/**
 * @name Moment
 * @description extends [[u64]]
 */
export interface Moment extends u64 {}

/**
 * @name MortalEra
 * @description extends [[GenericMortalEra]]
 */
export interface MortalEra extends GenericMortalEra {}

/**
 * @name MultiSignature
 * @description extends [[Enum]]
 */
export interface MultiSignature extends Enum {
  readonly isEd25519: boolean;
  readonly asEd25519: Ed25519Signature;
  readonly isSr25519: boolean;
  readonly asSr25519: Sr25519Signature;
  readonly isEcdsa: boolean;
  readonly asEcdsa: EcdsaSignature;
}

/**
 * @name Origin
 * @description extends [[GenericOrigin]]
 */
export interface Origin extends GenericOrigin {}

/**
 * @name Perbill
 * @description extends [[u32]]
 */
export interface Perbill extends u32 {}

/**
 * @name Percent
 * @description extends [[u8]]
 */
export interface Percent extends u8 {}

/**
 * @name Permill
 * @description extends [[u32]]
 */
export interface Permill extends u32 {}

/**
 * @name Perquintill
 * @description extends [[u64]]
 */
export interface Perquintill extends u64 {}

/**
 * @name Phantom
 * @description extends [[Null]]
 */
export interface Phantom extends Null {}

/**
 * @name PhantomData
 * @description extends [[Null]]
 */
export interface PhantomData extends Null {}

/**
 * @name PreRuntime
 * @description extends [[ITuple<[ConsensusEngineId, Bytes]>]]
 */
export interface PreRuntime extends ITuple<[ConsensusEngineId, Bytes]> {}

/**
 * @name Seal
 * @description extends [[ITuple<[ConsensusEngineId, Bytes]>]]
 */
export interface Seal extends ITuple<[ConsensusEngineId, Bytes]> {}

/**
 * @name SealV0
 * @description extends [[ITuple<[u64, Signature]>]]
 */
export interface SealV0 extends ITuple<[u64, Signature]> {}

/**
 * @name Signature
 * @description extends [[H512]]
 */
export interface Signature extends H512 {}

/**
 * @name SignedBlock
 * @description extends [[Struct]]
 */
export interface SignedBlock extends Struct {
  readonly block: Block;
  readonly justification: Justification;
}

/**
 * @name SignerPayload
 * @description extends [[GenericSignerPayload]]
 */
export interface SignerPayload extends GenericSignerPayload {}

/**
 * @name Sr25519Signature
 * @description extends [[Signature]]
 */
export interface Sr25519Signature extends Signature {}

/**
 * @name ValidatorId
 * @description extends [[AccountId]]
 */
export interface ValidatorId extends AccountId {}

/**
 * @name Weight
 * @description extends [[u32]]
 */
export interface Weight extends u32 {}

/**
 * @name WeightMultiplier
 * @description extends [[Fixed64]]
 */
export interface WeightMultiplier extends Fixed64 {}

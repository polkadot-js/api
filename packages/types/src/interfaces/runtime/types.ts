// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Codec, ITuple } from '@polkadot/types/types';
import { Compact, Enum, Struct } from '@polkadot/types/codec';
import { Bytes, Fixed64, GenericAccountId, GenericAccountIndex, GenericAddress, GenericBlock, GenericCall, GenericConsensusEngineId, GenericDigest, GenericDigestItem, GenericExtrinsic, GenericExtrinsicEra, GenericExtrinsicPayload, GenericExtrinsicPayloadUnknown, GenericExtrinsicPayloadV1, GenericExtrinsicPayloadV2, GenericExtrinsicPayloadV3, GenericExtrinsicPayloadV4, GenericExtrinsicSignatureV1, GenericExtrinsicSignatureV2, GenericExtrinsicSignatureV3, GenericExtrinsicSignatureV4, GenericExtrinsicUnknown, GenericExtrinsicV1, GenericExtrinsicV2, GenericExtrinsicV3, GenericExtrinsicV4, GenericImmortalEra, GenericMortalEra, GenericOrigin, GenericSignerPayload, H256, H512, Null, StorageData, StorageKey, bool, u128, u32, u64, u8 } from '@polkadot/types/primitive';

/** @name AccountId */
export interface AccountId extends GenericAccountId {}

/** @name AccountIdOf */
export interface AccountIdOf extends AccountId {}

/** @name AccountIndex */
export interface AccountIndex extends GenericAccountIndex {}

/** @name Address */
export interface Address extends GenericAddress {}

/** @name AssetId */
export interface AssetId extends u32 {}

/** @name Balance */
export interface Balance extends u128 {}

/** @name BalanceOf */
export interface BalanceOf extends Balance {}

/** @name Block */
export interface Block extends GenericBlock {}

/** @name BlockNumber */
export interface BlockNumber extends u32 {}

/** @name Call */
export interface Call extends GenericCall {}

/** @name ChangesTrieConfiguration */
export interface ChangesTrieConfiguration extends Struct {
  readonly digestInterval: u32;
  readonly digestLevels: u32;
}

/** @name Consensus */
export interface Consensus extends ITuple<[ConsensusEngineId, Bytes]> {}

/** @name ConsensusEngineId */
export interface ConsensusEngineId extends GenericConsensusEngineId {}

/** @name Digest */
export interface Digest extends GenericDigest {}

/** @name DigestItem */
export interface DigestItem extends GenericDigestItem {}

/** @name DispatchClass */
export interface DispatchClass extends Enum {
  readonly isNormal: boolean;
  readonly isOperational: boolean;
}

/** @name DispatchInfo */
export interface DispatchInfo extends Struct {
  readonly weight: Weight;
  readonly class: DispatchClass;
  readonly paysFee: bool;
}

/** @name DispatchInfoTo190 */
export interface DispatchInfoTo190 extends Struct {
  readonly weight: Weight;
  readonly class: DispatchClass;
}

/** @name EcdsaSignature */
export interface EcdsaSignature extends Uint8Array, Codec {}

/** @name Ed25519Signature */
export interface Ed25519Signature extends Signature {}

/** @name Extrinsic */
export interface Extrinsic extends GenericExtrinsic {}

/** @name ExtrinsicEra */
export interface ExtrinsicEra extends GenericExtrinsicEra {}

/** @name ExtrinsicPayload */
export interface ExtrinsicPayload extends GenericExtrinsicPayload {}

/** @name ExtrinsicPayloadUnknown */
export interface ExtrinsicPayloadUnknown extends GenericExtrinsicPayloadUnknown {}

/** @name ExtrinsicPayloadV1 */
export interface ExtrinsicPayloadV1 extends GenericExtrinsicPayloadV1 {}

/** @name ExtrinsicPayloadV2 */
export interface ExtrinsicPayloadV2 extends GenericExtrinsicPayloadV2 {}

/** @name ExtrinsicPayloadV3 */
export interface ExtrinsicPayloadV3 extends GenericExtrinsicPayloadV3 {}

/** @name ExtrinsicPayloadV4 */
export interface ExtrinsicPayloadV4 extends GenericExtrinsicPayloadV4 {}

/** @name ExtrinsicSignatureV1 */
export interface ExtrinsicSignatureV1 extends GenericExtrinsicSignatureV1 {}

/** @name ExtrinsicSignatureV2 */
export interface ExtrinsicSignatureV2 extends GenericExtrinsicSignatureV2 {}

/** @name ExtrinsicSignatureV3 */
export interface ExtrinsicSignatureV3 extends GenericExtrinsicSignatureV3 {}

/** @name ExtrinsicSignatureV4 */
export interface ExtrinsicSignatureV4 extends GenericExtrinsicSignatureV4 {}

/** @name ExtrinsicUnknown */
export interface ExtrinsicUnknown extends GenericExtrinsicUnknown {}

/** @name ExtrinsicV1 */
export interface ExtrinsicV1 extends GenericExtrinsicV1 {}

/** @name ExtrinsicV2 */
export interface ExtrinsicV2 extends GenericExtrinsicV2 {}

/** @name ExtrinsicV3 */
export interface ExtrinsicV3 extends GenericExtrinsicV3 {}

/** @name ExtrinsicV4 */
export interface ExtrinsicV4 extends GenericExtrinsicV4 {}

/** @name Hash */
export interface Hash extends H256 {}

/** @name Header */
export interface Header extends Struct {
  readonly parentHash: Hash;
  readonly number: Compact<BlockNumber>;
  readonly stateRoot: Hash;
  readonly extrinsicsRoot: Hash;
  readonly digest: Digest;
}

/** @name ImmortalEra */
export interface ImmortalEra extends GenericImmortalEra {}

/** @name Index */
export interface Index extends u32 {}

/** @name Justification */
export interface Justification extends Bytes {}

/** @name KeyTypeId */
export interface KeyTypeId extends u32 {}

/** @name KeyValue */
export interface KeyValue extends ITuple<[StorageKey, StorageData]> {}

/** @name LockIdentifier */
export interface LockIdentifier extends Uint8Array, Codec {}

/** @name LookupSource */
export interface LookupSource extends Address {}

/** @name LookupTarget */
export interface LookupTarget extends AccountId {}

/** @name Moment */
export interface Moment extends u64 {}

/** @name MortalEra */
export interface MortalEra extends GenericMortalEra {}

/** @name MultiSignature */
export interface MultiSignature extends Enum {
  readonly isEd25519: boolean;
  readonly asEd25519: Ed25519Signature;
  readonly isSr25519: boolean;
  readonly asSr25519: Sr25519Signature;
  readonly isEcdsa: boolean;
  readonly asEcdsa: EcdsaSignature;
}

/** @name Origin */
export interface Origin extends GenericOrigin {}

/** @name Perbill */
export interface Perbill extends u32 {}

/** @name Percent */
export interface Percent extends u8 {}

/** @name Permill */
export interface Permill extends u32 {}

/** @name Perquintill */
export interface Perquintill extends u64 {}

/** @name Phantom */
export interface Phantom extends Null {}

/** @name PhantomData */
export interface PhantomData extends Null {}

/** @name PreRuntime */
export interface PreRuntime extends ITuple<[ConsensusEngineId, Bytes]> {}

/** @name Seal */
export interface Seal extends ITuple<[ConsensusEngineId, Bytes]> {}

/** @name SealV0 */
export interface SealV0 extends ITuple<[u64, Signature]> {}

/** @name Signature */
export interface Signature extends H512 {}

/** @name SignedBlock */
export interface SignedBlock extends Struct {
  readonly block: Block;
  readonly justification: Justification;
}

/** @name SignerPayload */
export interface SignerPayload extends GenericSignerPayload {}

/** @name Sr25519Signature */
export interface Sr25519Signature extends Signature {}

/** @name ValidatorId */
export interface ValidatorId extends AccountId {}

/** @name Weight */
export interface Weight extends u32 {}

/** @name WeightMultiplier */
export interface WeightMultiplier extends Fixed64 {}

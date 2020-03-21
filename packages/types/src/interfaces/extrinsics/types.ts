// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import { Enum, U8aFixed } from '@polkadot/types/codec';
import { GenericExtrinsic, GenericExtrinsicEra, GenericExtrinsicPayload, GenericExtrinsicPayloadUnknown, GenericExtrinsicPayloadV1, GenericExtrinsicPayloadV2, GenericExtrinsicPayloadV3, GenericExtrinsicPayloadV4, GenericExtrinsicSignatureV1, GenericExtrinsicSignatureV2, GenericExtrinsicSignatureV3, GenericExtrinsicSignatureV4, GenericExtrinsicUnknown, GenericExtrinsicV1, GenericExtrinsicV2, GenericExtrinsicV3, GenericExtrinsicV4, GenericImmortalEra, GenericMortalEra, GenericSignerPayload } from '@polkadot/types/extrinsic';
import { H512 } from '@polkadot/types/interfaces/runtime';

/** @name EcdsaSignature */
export interface EcdsaSignature extends U8aFixed {}

/** @name Ed25519Signature */
export interface Ed25519Signature extends H512 {}

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

/** @name ImmortalEra */
export interface ImmortalEra extends GenericImmortalEra {}

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

/** @name Signature */
export interface Signature extends H512 {}

/** @name SignerPayload */
export interface SignerPayload extends GenericSignerPayload {}

/** @name Sr25519Signature */
export interface Sr25519Signature extends H512 {}

export type PHANTOM_EXTRINSICS = 'extrinsics';

// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { GenericExtrinsic, GenericExtrinsicEra, GenericExtrinsicPayload, GenericExtrinsicPayloadUnknown, GenericExtrinsicPayloadV4, GenericExtrinsicPayloadV5, GenericExtrinsicSignatureV4, GenericExtrinsicSignatureV5, GenericExtrinsicUnknown, GenericExtrinsicV4, GenericExtrinsicV5, GenericImmortalEra, GenericMortalEra, GenericSignerPayload } from '@polkadot/types';
import type { Enum, Struct, Text, U8aFixed, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { H512, MultiAddress } from '@polkadot/types/interfaces/runtime';
import type { SiLookupTypeId } from '@polkadot/types/interfaces/scaleInfo';

/** @name AnySignature */
export interface AnySignature extends H512 {}

/** @name EcdsaSignature */
export interface EcdsaSignature extends U8aFixed {}

/** @name Ed25519Signature */
export interface Ed25519Signature extends H512 {}

/** @name Era */
export interface Era extends ExtrinsicEra {}

/** @name Extension */
export interface Extension extends TransactionExtension {}

/** @name ExtensionVersion */
export interface ExtensionVersion extends u8 {}

/** @name Extrinsic */
export interface Extrinsic extends GenericExtrinsic {}

/** @name ExtrinsicEra */
export interface ExtrinsicEra extends GenericExtrinsicEra {}

/** @name ExtrinsicPayload */
export interface ExtrinsicPayload extends GenericExtrinsicPayload {}

/** @name ExtrinsicPayloadUnknown */
export interface ExtrinsicPayloadUnknown extends GenericExtrinsicPayloadUnknown {}

/** @name ExtrinsicPayloadV4 */
export interface ExtrinsicPayloadV4 extends GenericExtrinsicPayloadV4 {}

/** @name ExtrinsicPayloadV5 */
export interface ExtrinsicPayloadV5 extends GenericExtrinsicPayloadV5 {}

/** @name ExtrinsicSignature */
export interface ExtrinsicSignature extends MultiSignature {}

/** @name ExtrinsicSignatureV4 */
export interface ExtrinsicSignatureV4 extends GenericExtrinsicSignatureV4 {}

/** @name ExtrinsicSignatureV5 */
export interface ExtrinsicSignatureV5 extends GenericExtrinsicSignatureV5 {}

/** @name ExtrinsicUnknown */
export interface ExtrinsicUnknown extends GenericExtrinsicUnknown {}

/** @name ExtrinsicV4 */
export interface ExtrinsicV4 extends GenericExtrinsicV4 {}

/** @name ExtrinsicV5 */
export interface ExtrinsicV5 extends GenericExtrinsicV5 {}

/** @name ExtrinsicVersion */
export interface ExtrinsicVersion extends u8 {}

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
  readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
}

/** @name Preamble */
export interface Preamble extends Enum {
  readonly isBare: boolean;
  readonly asBare: ExtrinsicVersion;
  readonly isSigned: boolean;
  readonly asSigned: ITuple<[MultiAddress, GenericExtrinsicSignatureV4, ExtensionVersion, Extension, ExtrinsicVersion]>;
  readonly isGeneral: boolean;
  readonly asGeneral: ITuple<[ExtensionVersion, Extension]>;
  readonly type: 'Bare' | 'Signed' | 'General';
}

/** @name Signature */
export interface Signature extends H512 {}

/** @name SignerPayload */
export interface SignerPayload extends GenericSignerPayload {}

/** @name Sr25519Signature */
export interface Sr25519Signature extends H512 {}

/** @name TransactionExtension */
export interface TransactionExtension extends Struct {
  readonly identifier: Text;
  readonly type: SiLookupTypeId;
  readonly Implicit: SiLookupTypeId;
}

export type PHANTOM_EXTRINSICS = 'extrinsics';

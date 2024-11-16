// Copyright 2017-2024 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MultiLocation } from '@polkadot/types/interfaces';
import type { HexString } from '@polkadot/util/types';
import type { EcdsaSignature, Ed25519Signature, ExtrinsicEra, ExtrinsicSignature, Sr25519Signature } from '../../interfaces/extrinsics/index.js';
import type { Address, Call, Hash } from '../../interfaces/runtime/index.js';
import type { ExtrinsicPayloadValue, ICompact, IExtrinsicSignature, IKeyringPair, INumber, IOption, Registry, SignatureOptions } from '../../types/index.js';
import type { ExtrinsicSignatureOptions } from '../types.js';

import { Struct } from '@polkadot/types-codec';
import { objectProperties, objectSpread } from '@polkadot/util';

import { EMPTY_U8A, IMMORTAL_ERA } from '../constants.js';
import { GenericExtrinsicPayloadV5 } from './ExtrinsicPayload.js';

/**
 * @name GenericExtrinsicSignatureV5
 * @description
 * A container for the [[Signature]] associated with a specific [[Extrinsic]]
 */
export class GenericExtrinsicSignatureV5 extends Struct implements IExtrinsicSignature {
  #signKeys: string[];

  constructor (registry: Registry, value?: GenericExtrinsicSignatureV5 | Uint8Array, { isSigned }: ExtrinsicSignatureOptions = {}) {
    const signTypes = registry.getSignedExtensionTypes();

    super(
      registry,
      objectSpread(
        // eslint-disable-next-line sort-keys
        { signer: 'Address', signature: 'ExtrinsicSignature', transactionExtensionVersion: 'u8' },
        signTypes
      ),
      GenericExtrinsicSignatureV5.decodeExtrinsicSignature(value, isSigned)
    );

    this.#signKeys = Object.keys(signTypes);

    objectProperties(this, this.#signKeys, (k) => this.get(k));
  }

  /** @internal */
  public static decodeExtrinsicSignature (value?: GenericExtrinsicSignatureV5 | Uint8Array, isSigned = false): GenericExtrinsicSignatureV5 | Uint8Array {
    if (!value) {
      return EMPTY_U8A;
    } else if (value instanceof GenericExtrinsicSignatureV5) {
      return value;
    }

    return isSigned
      ? value
      : EMPTY_U8A;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public override get encodedLength (): number {
    return this.isSigned
      ? super.encodedLength
      : 0;
  }

  /**
   * @description `true` if the signature is valid
   */
  public get isSigned (): boolean {
    return !this.signature.isEmpty;
  }

  /**
   * @description The [[ExtrinsicEra]] (mortal or immortal) this signature applies to
   */
  public get era (): ExtrinsicEra {
    return this.getT('era');
  }

  /**
   * @description The [[Index]] for the signature
   */
  public get nonce (): ICompact<INumber> {
    return this.getT('nonce');
  }

  /**
   * @description The actual [[EcdsaSignature]], [[Ed25519Signature]] or [[Sr25519Signature]]
   */
  public get signature (): EcdsaSignature | Ed25519Signature | Sr25519Signature {
    // the second case here is when we don't have an enum signature, treat as raw
    return (this.multiSignature.value || this.multiSignature) as Sr25519Signature;
  }

  /**
   * @description The raw [[ExtrinsicSignature]]
   */
  public get multiSignature (): ExtrinsicSignature {
    return this.getT('signature');
  }

  /**
   * @description The [[Address]] that signed
   */
  public get signer (): Address {
    return this.getT('signer');
  }

  /**
   * @description The [[Balance]] tip
   */
  public get tip (): ICompact<INumber> {
    return this.getT('tip');
  }

  /**
   * @description The [[u32]] or [[MultiLocation]] assetId
   */
  public get assetId (): IOption<INumber | MultiLocation> {
    return this.getT('assetId');
  }

  /**
   * @description the [[u32]] mode
   */
  public get mode (): INumber {
    return this.getT('mode');
  }

  /**
   * @description The (optional)  [[Hash]] for the metadata proof
   */
  public get metadataHash (): IOption<Hash> {
    return this.getT('metadataHash');
  }

  /**
   * @description The [[u8]] for the TransactionExtension version
   */
  public get transactionExtensionVersion (): INumber {
    return this.getT('transactionExtensionVersion');
  }

  /**
   * [Disabled for ExtrinsicV5]
   */
  protected _injectSignature (_signer: Address, _signature: ExtrinsicSignature, _payload: GenericExtrinsicPayloadV5): IExtrinsicSignature {
    throw new Error('Extrinsic: ExtrinsicV5 does not include signing support');
  }

  /**
   * @description Adds a raw signature
   *
   * [Disabled for ExtrinsicV5]
   */
  public addSignature (_signer: Address | Uint8Array | string, _signature: Uint8Array | HexString, _payload: ExtrinsicPayloadValue | Uint8Array | HexString): IExtrinsicSignature {
    throw new Error('Extrinsic: ExtrinsicV5 does not include signing support');
  }

  /**
   * @description Creates a payload from the supplied options
   */
  public createPayload (method: Call, options: SignatureOptions): GenericExtrinsicPayloadV5 {
    const { era, runtimeVersion: { specVersion, transactionVersion } } = options;

    return new GenericExtrinsicPayloadV5(this.registry, objectSpread<ExtrinsicPayloadValue>({}, options, {
      era: era || IMMORTAL_ERA,
      method: method.toHex(),
      specVersion,
      transactionVersion
    }));
  }

  /**
   * @description Generate a payload and applies the signature from a keypair
   *
   * [Disabled for ExtrinsicV5]
   */
  public sign (_method: Call, _account: IKeyringPair, _options: SignatureOptions): IExtrinsicSignature {
    throw new Error('Extrinsic: ExtrinsicV5 does not include signing support');
  }

  /**
   * @description Generate a payload and applies a fake signature
   *
   * [Disabled for ExtrinsicV5]
   */
  public signFake (_method: Call, _address: Address | Uint8Array | string, _options: SignatureOptions): IExtrinsicSignature {
    throw new Error('Extrinsic: ExtrinsicV5 does not include signing support');
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public override toU8a (isBare?: boolean): Uint8Array {
    return this.isSigned
      ? super.toU8a(isBare)
      : EMPTY_U8A;
  }
}

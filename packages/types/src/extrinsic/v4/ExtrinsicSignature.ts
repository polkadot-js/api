// Copyright 2017-2020 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { EcdsaSignature, Ed25519Signature, ExtrinsicEra, MultiSignature, Sr25519Signature } from '../../interfaces/extrinsics';
import { Address, Balance, Call, Index } from '../../interfaces/runtime';
import { ExtrinsicPayloadValue, IExtrinsicSignature, IKeyringPair, Registry, SignatureOptions } from '../../types';
import { ExtrinsicSignatureOptions } from '../types';

import { u8aConcat } from '@polkadot/util';

import Compact from '../../codec/Compact';
import Struct from '../../codec/Struct';
import { EMPTY_U8A, IMMORTAL_ERA } from '../constants';
import ExtrinsicPayloadV4 from './ExtrinsicPayload';

/**
 * @name GenericExtrinsicSignatureV4
 * @description
 * A container for the [[Signature]] associated with a specific [[Extrinsic]]
 */
export default class ExtrinsicSignatureV4 extends Struct implements IExtrinsicSignature {
  constructor (registry: Registry, value: ExtrinsicSignatureV4 | Uint8Array | undefined, { isSigned }: ExtrinsicSignatureOptions = {}) {
    super(registry, {
      signer: 'Address',
      // eslint-disable-next-line sort-keys
      signature: 'MultiSignature',
      ...registry.getSignedExtensionTypes()
    }, ExtrinsicSignatureV4.decodeExtrinsicSignature(value, isSigned));
  }

  /** @internal */
  public static decodeExtrinsicSignature (value: ExtrinsicSignatureV4 | Uint8Array | undefined, isSigned = false): ExtrinsicSignatureV4 | Uint8Array {
    if (!value) {
      return EMPTY_U8A;
    } else if (value instanceof ExtrinsicSignatureV4) {
      return value;
    }

    return isSigned
      ? value
      : EMPTY_U8A;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
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
    return this.get('era') as ExtrinsicEra;
  }

  /**
   * @description The [[Index]] for the signature
   */
  public get nonce (): Compact<Index> {
    return this.get('nonce') as Compact<Index>;
  }

  /**
   * @description The actual [[EcdsaSignature]], [[Ed25519Signature]] or [[Sr25519Signature]]
   */
  public get signature (): EcdsaSignature | Ed25519Signature | Sr25519Signature {
    return this.multiSignature.value as Sr25519Signature;
  }

  /**
   * @description The raw [[MultiSignature]]
   */
  public get multiSignature (): MultiSignature {
    return this.get('signature') as MultiSignature;
  }

  /**
   * @description The [[Address]] that signed
   */
  public get signer (): Address {
    return this.get('signer') as Address;
  }

  /**
   * @description The [[Balance]] tip
   */
  public get tip (): Compact<Balance> {
    return this.get('tip') as Compact<Balance>;
  }

  protected _injectSignature (signer: Address, signature: MultiSignature, { era, nonce, tip }: ExtrinsicPayloadV4): IExtrinsicSignature {
    this.set('era', era);
    this.set('nonce', nonce);
    this.set('signer', signer);
    this.set('signature', signature);
    this.set('tip', tip);

    return this;
  }

  /**
   * @description Adds a raw signature
   */
  public addSignature (signer: Address | Uint8Array | string, signature: Uint8Array | string, payload: ExtrinsicPayloadValue | Uint8Array | string): IExtrinsicSignature {
    return this._injectSignature(
      this.registry.createType('Address', signer),
      this.registry.createType('MultiSignature', signature),
      new ExtrinsicPayloadV4(this.registry, payload)
    );
  }

  /**
   * @description Creates a payload from the supplied options
   */
  public createPayload (method: Call, { blockHash, era, genesisHash, nonce, runtimeVersion: { specVersion, transactionVersion }, tip }: SignatureOptions): ExtrinsicPayloadV4 {
    return new ExtrinsicPayloadV4(this.registry, {
      blockHash,
      era: era || IMMORTAL_ERA,
      genesisHash,
      method: method.toHex(),
      nonce,
      specVersion,
      tip: tip || 0,
      transactionVersion: transactionVersion || 0
    });
  }

  /**
   * @description Generate a payload and applies the signature from a keypair
   */
  public sign (method: Call, account: IKeyringPair, options: SignatureOptions): IExtrinsicSignature {
    const signer = this.registry.createType('Address', account.addressRaw);
    const payload = this.createPayload(method, options);
    const signature = this.registry.createType('MultiSignature', payload.sign(account));

    return this._injectSignature(signer, signature, payload);
  }

  /**
   * @description Generate a payload and applies a fake signature
   */
  public signFake (method: Call, address: Address | Uint8Array | string, options: SignatureOptions): IExtrinsicSignature {
    const signer = this.registry.createType('Address', address);
    const payload = this.createPayload(method, options);
    const signature = this.registry.createType('MultiSignature', u8aConcat(new Uint8Array([1]), new Uint8Array(64).fill(0x42)));

    return this._injectSignature(signer, signature, payload);
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public toU8a (isBare?: boolean): Uint8Array {
    return this.isSigned
      ? super.toU8a(isBare)
      : EMPTY_U8A;
  }
}

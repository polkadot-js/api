// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ExtrinsicEra, Signature } from '../../interfaces/extrinsics';
import { Address, Balance, Call, Index } from '../../interfaces/runtime';
import { ExtrinsicPayloadValue, IExtrinsicSignature, IKeyringPair, Registry, SignatureOptions } from '../../types';
import { ExtrinsicSignatureOptions } from '../types';

import Compact from '../../codec/Compact';
import Struct from '../../codec/Struct';
import { EMPTY_U8A, IMMORTAL_ERA } from '../constants';
import ExtrinsicPayloadV1 from './ExtrinsicPayload';

/**
 * @name GenericExtrinsicSignatureV1
 * @description
 * A container for the [[Signature]] associated with a specific [[Extrinsic]]
 */
export default class ExtrinsicSignatureV1 extends Struct implements IExtrinsicSignature {
  // Signature Information.
  //   1/3/5/9/33 bytes: The signing account identity, in Address format
  //   64 bytes: The sr25519/ed25519 signature of the Signing Payload
  //   1-8 bytes: The Compact<Nonce> of the signing account
  //   1/2 bytes: The Transaction Era
  constructor (registry: Registry, value?: ExtrinsicSignatureV1 | Uint8Array, { isSigned }: ExtrinsicSignatureOptions = {}) {
    super(registry, {
      signer: 'Address',
      // eslint-disable-next-line sort-keys
      signature: 'Signature',
      // eslint-disable-next-line sort-keys
      nonce: 'Compact<Index>',
      // eslint-disable-next-line sort-keys
      era: 'ExtrinsicEra'
    }, ExtrinsicSignatureV1.decodeExtrinsicSignature(value, isSigned));
  }

  /** @internal */
  public static decodeExtrinsicSignature (value: ExtrinsicSignatureV1 | Uint8Array | undefined, isSigned = false): ExtrinsicSignatureV1 | Uint8Array {
    if (!value) {
      return EMPTY_U8A;
    } else if (value instanceof ExtrinsicSignatureV1) {
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
   * @description The actual [[Signature]] hash
   */
  public get signature (): Signature {
    return this.get('signature') as Signature;
  }

  /**
   * @description The [[Address]] that signed
   */
  public get signer (): Address {
    return this.get('signer') as Address;
  }

  /**
   * @description Forwards compat
   */
  public get tip (): Compact<Balance> {
    return this.registry.createType('Compact<Balance>', 0);
  }

  private _injectSignature (signer: Address, signature: Signature, { era, nonce }: ExtrinsicPayloadV1): IExtrinsicSignature {
    this.set('era', era);
    this.set('nonce', nonce);
    this.set('signer', signer);
    this.set('signature', signature);

    return this;
  }

  /**
   * @description Adds a raw signature
   */
  public addSignature (signer: Address | Uint8Array | string, signature: Uint8Array | string, payload: ExtrinsicPayloadValue | Uint8Array | string): IExtrinsicSignature {
    return this._injectSignature(
      this.registry.createType('Address', signer),
      this.registry.createType('Signature', signature),
      new ExtrinsicPayloadV1(this.registry, payload)
    );
  }

  /**
   * @description Creates a payload from the supplied options
   */
  public createPayload (method: Call, { blockHash, era, genesisHash, nonce }: SignatureOptions): ExtrinsicPayloadV1 {
    return new ExtrinsicPayloadV1(this.registry, {
      blockHash,
      era: era || IMMORTAL_ERA,
      genesisHash,
      method: method.toHex(),
      nonce,
      specVersion: 0, // unused for v1, added for compat
      tip: 0
    });
  }

  /**
   * @description Generate a payload and applies the signature from a keypair
   */
  public sign (method: Call, account: IKeyringPair, options: SignatureOptions): IExtrinsicSignature {
    const signer = this.registry.createType('Address', account.publicKey);
    const payload = this.createPayload(method, options);
    const signature = this.registry.createType('Signature', payload.sign(account));

    return this._injectSignature(signer, signature, payload);
  }

  /**
   * @description Generate a payload and applies a fake signature
   */
  public signFake (method: Call, address: Address | Uint8Array | string, options: SignatureOptions): IExtrinsicSignature {
    const signer = this.registry.createType('Address', address);
    const payload = this.createPayload(method, options);
    const signature = this.registry.createType('Signature', new Uint8Array(64).fill(0x42));

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

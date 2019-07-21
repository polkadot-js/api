// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { IExtrinsicSignature, IKeyringPair, SignatureOptions } from '../../../types';

import Struct from '../../../codec/Struct';
import Address from '../../Address';
import Balance from '../../Balance';
import Method from '../../Method';
import Signature from '../../Signature';
import Nonce from '../../../type/NonceCompact';
import ExtrinsicEra from '../ExtrinsicEra';
import SignaturePayload from './SignaturePayload';
import { BIT_SIGNED, EMPTY_U8A, IMMORTAL_ERA } from '../constants';

/**
 * @name ExtrinsicSignature
 * @description
 * A container for the [[Signature]] associated with a specific [[Extrinsic]]
 */
export default class ExtrinsicSignatureV1 extends Struct implements IExtrinsicSignature {
  // Signature Information.
  //   1/3/5/9/33 bytes: The signing account identity, in Address format
  //   64 bytes: The sr25519/ed25519 signature of the Signing Payload
  //   1-8 bytes: The Compact<Nonce> of the signing account
  //   1/2 bytes: The Transaction Era
  public constructor (value?: Uint8Array) {
    super({
      signer: Address,
      signature: Signature,
      nonce: Nonce,
      era: ExtrinsicEra
    }, ExtrinsicSignatureV1.decodeExtrinsicSignature(value));
  }

  public static decodeExtrinsicSignature (value?: Uint8Array): Uint8Array {
    if (!value) {
      return EMPTY_U8A;
    }

    return (value[0] & BIT_SIGNED) === BIT_SIGNED
      ? value.subarray(1)
      : EMPTY_U8A;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array (This includes the version/signature information, although not contained, it is passed in as part of the decoding)
   */
  public get encodedLength (): number {
    return 1 + (this.isSigned ? super.encodedLength : 0);
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
   * @description The [[ExtrinsicEra]] (mortal or immortal) this signature applies to
   */
  public set era (era: ExtrinsicEra) {
    this.set('era', era);
  }

  /**
   * @description The [[Nonce]] for the signature
   */
  public get nonce (): Nonce {
    return this.get('nonce') as Nonce;
  }

  /**
   * @description The actuall [[Signature]] hash
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
  public get tip (): Balance {
    return new Balance(0);
  }

  private injectSignature (signer: Address, signature: Signature, { era, nonce }: SignaturePayload): IExtrinsicSignature {
    this.set('era', era);
    this.set('nonce', nonce);
    this.set('signer', signer);
    this.set('signature', signature);

    return this;
  }

  /**
   * @description Adds a raw signature
   */
  public addSignature (signer: Address | Uint8Array | string, signature: Uint8Array | string, payload: Uint8Array | string): IExtrinsicSignature {
    return this.injectSignature(
      new Address(signer),
      new Signature(signature),
      new SignaturePayload(payload)
    );
  }

  /**
   * @description Generate a payload and pplies the signature from a keypair
   */
  public sign (method: Method, account: IKeyringPair, { blockHash, era, nonce }: SignatureOptions): IExtrinsicSignature {
    const signer = new Address(account.publicKey);
    const payload = new SignaturePayload({
      nonce,
      method: method.toU8a(),
      era: era || this.era || IMMORTAL_ERA,
      blockHash
    });
    const signature = new Signature(payload.sign(account));

    return this.injectSignature(signer, signature, payload);
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public toU8a (isBare?: boolean): Uint8Array {
    return this.isSigned
      ? super.toU8a(isBare)
      : new Uint8Array();
  }
}

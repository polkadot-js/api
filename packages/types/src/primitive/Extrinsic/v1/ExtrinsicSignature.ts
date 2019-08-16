// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Address, Balance, Index, Signature } from '../../../interfaces/runtime';
import { ExtrinsicPayloadValue, IExtrinsicSignature, IKeyringPair, SignatureOptions } from '../../../types';
import { ExtrinsicSignatureOptions } from '../types';

import { createType } from '../../../codec/create';
import Compact from '../../../codec/Compact';
import Struct from '../../../codec/Struct';
import Call from '../../Generic/Call';
import ExtrinsicEra from '../ExtrinsicEra';
import { EMPTY_U8A, IMMORTAL_ERA } from '../constants';
import ExtrinsicPayloadV1 from './ExtrinsicPayload';

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
  public constructor (value?: ExtrinsicSignatureV1 | Uint8Array, { isSigned }: ExtrinsicSignatureOptions = {}) {
    super({
      signer: 'Address',
      signature: 'Signature',
      nonce: 'Compact<Index>',
      era: ExtrinsicEra
    }, ExtrinsicSignatureV1.decodeExtrinsicSignature(value, isSigned));
  }

  public static decodeExtrinsicSignature (value: ExtrinsicSignatureV1 | Uint8Array | undefined, isSigned: boolean = false): ExtrinsicSignatureV1 | Uint8Array {
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
  public get tip (): Compact<Balance> {
    return createType('Compact<Balance>', 0);
  }

  private injectSignature (signer: Address, signature: Signature, { era, nonce }: ExtrinsicPayloadV1): IExtrinsicSignature {
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
    return this.injectSignature(
      createType('Address', signer),
      createType('Signature', signature),
      new ExtrinsicPayloadV1(payload)
    );
  }

  /**
   * @description Generate a payload and pplies the signature from a keypair
   */
  public sign (method: Call, account: IKeyringPair, { blockHash, era, genesisHash, nonce }: SignatureOptions): IExtrinsicSignature {
    const signer = createType('Address', account.publicKey);
    const payload = new ExtrinsicPayloadV1({
      blockHash,
      era: era || IMMORTAL_ERA,
      genesisHash,
      method: method.toHex(),
      nonce,
      tip: 0
    });
    const signature = createType('Signature', payload.sign(account));

    return this.injectSignature(signer, signature, payload);
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

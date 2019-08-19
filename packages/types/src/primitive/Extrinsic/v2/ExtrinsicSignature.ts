// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Address, Balance, Call, ExtrinsicEra, Index, Signature } from '../../../interfaces/runtime';
import { ExtrinsicPayloadValue, IExtrinsicSignature, IKeyringPair, SignatureOptions } from '../../../types';
import { ExtrinsicSignatureOptions } from '../types';

import { createType } from '../../../codec/create';
import Compact from '../../../codec/Compact';
import Struct from '../../../codec/Struct';
import { EMPTY_U8A, IMMORTAL_ERA } from '../constants';
import ExtrinsicPayloadV2 from './ExtrinsicPayload';

/**
 * @name ExtrinsicSignature
 * @description
 * A container for the [[Signature]] associated with a specific [[Extrinsic]]
 */
export default class ExtrinsicSignatureV2 extends Struct implements IExtrinsicSignature {
  public constructor (value: ExtrinsicSignatureV2 | Uint8Array | undefined, { isSigned }: ExtrinsicSignatureOptions = {}) {
    super({
      signer: 'Address',
      signature: 'Signature',
      era: 'ExtrinsicEra',
      nonce: 'Compact<Index>',
      tip: 'Compact<Balance>'
    }, ExtrinsicSignatureV2.decodeExtrinsicSignature(value, isSigned));
  }

  public static decodeExtrinsicSignature (value: ExtrinsicSignatureV2 | Uint8Array | undefined, isSigned: boolean = false): ExtrinsicSignatureV2 | Uint8Array {
    if (!value) {
      return EMPTY_U8A;
    } else if (value instanceof ExtrinsicSignatureV2) {
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
   * @description The [[Balance]] tip
   */
  public get tip (): Compact<Balance> {
    return this.get('tip') as Compact<Balance>;
  }

  protected injectSignature (signer: Address, signature: Signature, { era, nonce, tip }: ExtrinsicPayloadV2): IExtrinsicSignature {
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
    return this.injectSignature(
      createType('Address', signer),
      createType('Signature', signature),
      new ExtrinsicPayloadV2(payload)
    );
  }

  /**
   * @description Generate a payload and pplies the signature from a keypair
   */
  public sign (method: Call, account: IKeyringPair, { blockHash, era, genesisHash, nonce, tip }: SignatureOptions): IExtrinsicSignature {
    const signer = createType('Address', account.publicKey);
    const payload = new ExtrinsicPayloadV2({
      blockHash,
      era: era || IMMORTAL_ERA,
      genesisHash,
      method: method.toHex(),
      nonce,
      specVersion: 0, // unused for v2
      tip: tip || 0
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

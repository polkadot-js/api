// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Address, Balance, Index, Signature } from '../../../interfaces/runtime';
import { ExtrinsicPayloadValue, IExtrinsicSignature, IKeyringPair, SignatureOptions } from '../../../types';
import { ExtrinsicSignatureOptions } from '../types';

import createType, { ClassOf } from '../../../codec/createType';
import Compact from '../../../codec/Compact';
import Struct from '../../../codec/Struct';
import Call from '../../Generic/Call';
import ExtrinsicEra from '../ExtrinsicEra';
import ExtrinsicPayload from './ExtrinsicPayload';
import { EMPTY_U8A, IMMORTAL_ERA } from '../constants';
import ExtrinsicExtra from './ExtrinsicExtra';

/**
 * @name ExtrinsicSignatureV3
 * @description
 * A container for the [[Signature]] associated with a specific [[Extrinsic]]
 */
export default class ExtrinsicSignatureV3 extends Struct implements IExtrinsicSignature {
  public constructor (value: ExtrinsicSignatureV3 | Uint8Array | undefined, { isSigned }: ExtrinsicSignatureOptions = {}) {
    super({
      signer: ClassOf('Address'),
      signature: ClassOf('Signature'),
      extra: ExtrinsicExtra
    }, ExtrinsicSignatureV3.decodeExtrinsicSignature(value, isSigned));
  }

  public static decodeExtrinsicSignature (value: ExtrinsicSignatureV3 | Uint8Array | undefined, isSigned: boolean = false): ExtrinsicSignatureV3 | Uint8Array {
    if (!value) {
      return EMPTY_U8A;
    } else if (value instanceof ExtrinsicSignatureV3) {
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
   * @description Returns the extra extrinsic info
   */
  public get extra (): ExtrinsicExtra {
    return this.get('extra') as ExtrinsicExtra;
  }

  /**
   * @description The [[ExtrinsicEra]] (mortal or immortal) this signature applies to
   */
  public get era (): ExtrinsicEra {
    return this.extra.era;
  }

  /**
   * @description The [[Index]] for the signature
   */
  public get nonce (): Compact<Index> {
    return this.extra.nonce;
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
    return this.extra.tip;
  }

  private injectSignature (signer: Address, signature: Signature, { era, nonce, tip }: ExtrinsicPayload): IExtrinsicSignature {
    this.extra.set('era', era);
    this.extra.set('nonce', nonce);
    this.extra.set('tip', tip);

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
      new ExtrinsicPayload(payload)
    );
  }

  /**
   * @description Generate a payload and pplies the signature from a keypair
   */
  public sign (method: Call, account: IKeyringPair, { blockHash, era, genesisHash, nonce, tip }: SignatureOptions): IExtrinsicSignature {
    const signer = createType('Address', account.publicKey);
    const payload = new ExtrinsicPayload({
      blockHash,
      era: era || IMMORTAL_ERA,
      genesisHash,
      method: method.toU8a(),
      nonce,
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

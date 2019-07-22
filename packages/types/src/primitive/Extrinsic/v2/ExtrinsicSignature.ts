// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ExtrinsicPayloadValue, IExtrinsicSignature, IKeyringPair, SignatureOptions } from '../../../types';

import Struct from '../../../codec/Struct';
import Address from '../../Address';
import BalanceCompact from '../../BalanceCompact';
import Method from '../../Method';
import Signature from '../../Signature';
import ExtrinsicEra from '../ExtrinsicEra';
import NonceCompact from '../../../type/NonceCompact';
import SignaturePayload from './SignaturePayload';
import { EMPTY_U8A, IMMORTAL_ERA } from '../constants';
import ExtrinsicExtra from './ExtrinsicExtra';

interface ExtrinsicSignatureV2Options {
  isSigned?: boolean;
}

/**
 * @name ExtrinsicSignature
 * @description
 * A container for the [[Signature]] associated with a specific [[Extrinsic]]
 */
export default class ExtrinsicSignatureV2 extends Struct implements IExtrinsicSignature {
  public constructor (value: ExtrinsicSignatureV2 | Uint8Array | undefined, { isSigned }: ExtrinsicSignatureV2Options = {}) {
    super({
      signer: Address,
      signature: Signature,
      extra: ExtrinsicExtra
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
   * @description The [[NonceCompact]] for the signature
   */
  public get nonce (): NonceCompact {
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
  public get tip (): BalanceCompact {
    return this.extra.tip;
  }

  private injectSignature (signer: Address, signature: Signature, { era, nonce, tip }: SignaturePayload): IExtrinsicSignature {
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
      new Address(signer),
      new Signature(signature),
      new SignaturePayload(payload)
    );
  }

  /**
   * @description Generate a payload and pplies the signature from a keypair
   */
  public sign (method: Method, account: IKeyringPair, { blockHash, era, nonce, tip }: SignatureOptions): IExtrinsicSignature {
    const signer = new Address(account.publicKey);
    const payload = new SignaturePayload({
      blockHash,
      era: era || IMMORTAL_ERA,
      method: method.toU8a(),
      nonce,
      tip: tip || 0
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

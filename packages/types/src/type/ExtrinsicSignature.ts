// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber, IExtrinsicSignature, IKeyringPair, SignatureOptions } from '../types';

import Struct from '../codec/Struct';
import Address from '../primitive/Address';
import Method from '../primitive/Method';
import U8 from '../primitive/U8';
import RuntimeVersion from '../rpc/RuntimeVersion';
import ExtrinsicEra from './ExtrinsicEra';
import Nonce from './NonceCompact';
import Signature from './Signature';
import SignaturePayload from './SignaturePayload';

export const IMMORTAL_ERA = new Uint8Array([0]);

const BIT_SIGNED = 0b10000000;
const BIT_UNSIGNED = 0;
const BIT_VERSION = 0b0000001;

/**
 * @name ExtrinsicSignature
 * @description
 * A container for the [[Signature]] associated with a specific [[Extrinsic]]
 */
export default class ExtrinsicSignature extends Struct implements IExtrinsicSignature {
  // Signature Information.
  //   1 byte version: BIT_VERSION | (isSigned ? BIT_SIGNED : BIT_UNSIGNED)
  //   1/3/5/9/33 bytes: The signing account identity, in Address format
  //   64 bytes: The sr25519/ed25519 signature of the Signing Payload
  //   1-8 bytes: The Compact<Nonce> of the signing account
  //   1/2 bytes: The Transaction Era
  constructor (value?: Uint8Array) {
    super({
      version: U8,
      signer: Address,
      signature: Signature,
      nonce: Nonce,
      era: ExtrinsicEra
    }, ExtrinsicSignature.decodeExtrinsicSignature(value));
  }

  static decodeExtrinsicSignature (value?: Uint8Array): object | Uint8Array {
    if (!value) {
      return {
        // we always explicitly set the unsigned version
        version: BIT_VERSION | BIT_UNSIGNED
      };
    }

    const version = value[0];

    // only decode the full Uint8Array if we have the signed indicator,
    // alternatively only return the version (default for others)
    return (version & BIT_SIGNED) === BIT_SIGNED
      ? value
      : { version };
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength (): number {
    return this.isSigned
      ? super.encodedLength
      : 1;
  }

  /**
   * @description `true` if the signature is valid
   */
  get isSigned (): boolean {
    return (this.version & BIT_SIGNED) === BIT_SIGNED;
  }

  /**
   * @description The [[ExtrinsicEra]] (mortal or immortal) this signature applies to
   */
  get era (): ExtrinsicEra {
    return this.get('era') as ExtrinsicEra;
  }

  /**
   * @description The [[Nonce]] for the signature
   */
  get nonce (): Nonce {
    return this.get('nonce') as Nonce;
  }

  /**
   * @description The actuall [[Signature]] hash
   */
  get signature (): Signature {
    return this.get('signature') as Signature;
  }

  /**
   * @description The [[Address]] that signed
   */
  get signer (): Address {
    return this.get('signer') as Address;
  }

  /**
   * @description The encoded version for the signature
   */
  get version (): number {
    // Version Information.
    // 1 byte: version information:
    // - 7 low bits: version identifier (should be 0b0000001).
    // - 1 high bit: signed flag: 1 if this is a transaction (e.g. contains a signature).
    return (this.get('version') as U8).toNumber();
  }

  /**
   * @description The [[ExtrinsicEra]] (mortal or immortal) this signature applies to
   */
  set era (era: ExtrinsicEra) {
    this.set('era', era);
  }

  private injectSignature (signature: Signature, signer: Address, nonce: Nonce, era: ExtrinsicEra): ExtrinsicSignature {
    this.set('era', era);
    this.set('nonce', nonce);
    this.set('signer', signer);
    this.set('signature', signature);
    this.set('version', new U8(BIT_VERSION | BIT_SIGNED));

    return this;
  }

  /**
   * @description Adds a raw signature
   */
  addSignature (_signer: Address | Uint8Array | string, _signature: Uint8Array | string, _nonce: AnyNumber, _era: Uint8Array | ExtrinsicEra = IMMORTAL_ERA): ExtrinsicSignature {
    const signer = new Address(_signer);
    const nonce = new Nonce(_nonce);
    const era = new ExtrinsicEra(_era);
    const signature = new Signature(_signature);

    return this.injectSignature(signature, signer, nonce, era);
  }

  /**
   * @description Generate a payload and pplies the signature from a keypair
   */
  sign (method: Method, account: IKeyringPair, { blockHash, era, nonce, version }: SignatureOptions): ExtrinsicSignature {
    const signer = new Address(account.publicKey);
    const signingPayload = new SignaturePayload({
      nonce,
      method,
      era: era || this.era || IMMORTAL_ERA,
      blockHash
    });
    const signature = new Signature(signingPayload.sign(account, version as RuntimeVersion));

    return this.injectSignature(signature, signer, signingPayload.nonce, signingPayload.era);
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a (isBare?: boolean): Uint8Array {
    return this.isSigned
      ? super.toU8a(isBare)
      : new Uint8Array([this.version]);
  }
}

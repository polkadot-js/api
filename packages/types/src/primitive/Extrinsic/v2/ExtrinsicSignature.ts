// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyNumber, IExtrinsicEra, IExtrinsicSignature, IKeyringPair, SignatureOptions } from '../../../types';

import Struct from '../../../codec/Struct';
import Address from '../../Address';
import Balance from '../../Balance';
import Method from '../../Method';
import Signature from '../../Signature';
import U8 from '../../U8';
import RuntimeVersion from '../../../rpc/RuntimeVersion';
import ExtrinsicEra from '../ExtrinsicEra';
import Nonce from '../../../type/NonceCompact';
import SignaturePayload from '../v1/SignaturePayload';

export const IMMORTAL_ERA = new Uint8Array([0]);

const BIT_SIGNED = 0b10000000;
const BIT_UNSIGNED = 0;
const BIT_VERSION = 0b0000001;

/**
 * @name ExtrinsicSignature
 * @description
 * A container for the [[Signature]] associated with a specific [[Extrinsic]]
 */
export default class ExtrinsicSignatureV2 extends Struct implements IExtrinsicSignature {
  // Signature Information.
  //   1 byte version: BIT_VERSION | (isSigned ? BIT_SIGNED : BIT_UNSIGNED)
  //   1/3/5/9/33 bytes: The signing account identity, in Address format
  //   64 bytes: The sr25519/ed25519 signature of the Signing Payload
  //   1-8 bytes: The Compact<Nonce> of the signing account
  //   1/2 bytes: The Transaction Era
  public constructor (value?: Uint8Array) {
    super({
      version: U8,
      signer: Address,
      signature: Signature,
      nonce: Nonce,
      tip: Balance,
      era: ExtrinsicEra
    }, ExtrinsicSignatureV2.decodeExtrinsicSignature(value));
  }

  public static decodeExtrinsicSignature (value?: Uint8Array): object | Uint8Array {
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
  public get encodedLength (): number {
    return this.isSigned
      ? super.encodedLength
      : 1;
  }

  /**
   * @description `true` if the signature is valid
   */
  public get isSigned (): boolean {
    return (this.version & BIT_SIGNED) === BIT_SIGNED;
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
   * @description The [[Balance]] tip
   */
  public get tip (): Balance {
    return this.get('tip') as Balance;
  }

  /**
   * @description The encoded version for the signature
   */
  public get version (): number {
    // Version Information.
    // 1 byte: version information:
    // - 7 low bits: version identifier (should be 0b0000001).
    // - 1 high bit: signed flag: 1 if this is a transaction (e.g. contains a signature).
    return (this.get('version') as U8).toNumber();
  }

  private injectSignature ({ era, nonce, signer, signature }: { signature: Signature; signer: Address; nonce: Nonce; era: ExtrinsicEra }): IExtrinsicSignature {
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
  public addSignature (_signer: Address | Uint8Array | string, _signature: Uint8Array | string, _nonce: AnyNumber, _era: Uint8Array | IExtrinsicEra): IExtrinsicSignature {
    const signer = new Address(_signer);
    const nonce = new Nonce(_nonce);
    const era = new ExtrinsicEra(_era);
    const signature = new Signature(_signature);

    return this.injectSignature({ signature, signer, nonce, era });
  }

  /**
   * @description Generate a payload and pplies the signature from a keypair
   */
  public sign (method: Method, account: IKeyringPair, { blockHash, era, nonce, version }: SignatureOptions): IExtrinsicSignature {
    const signer = new Address(account.publicKey);
    const signingPayload = new SignaturePayload({
      nonce,
      method,
      era: era || this.era || IMMORTAL_ERA,
      blockHash
    });
    const signature = new Signature(signingPayload.sign(account, version as RuntimeVersion));

    return this.injectSignature({
      era: signingPayload.era,
      nonce: signingPayload.nonce,
      signature,
      signer
    });
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public toU8a (isBare?: boolean): Uint8Array {
    return this.isSigned
      ? super.toU8a(isBare)
      : new Uint8Array([this.version]);
  }
}

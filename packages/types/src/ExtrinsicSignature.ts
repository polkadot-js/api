// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { KeyringPair } from '@polkadot/keyring/types';
import { AnyNumber, AnyU8a } from './types';

import { isU8a, u8aConcat } from '@polkadot/util';

import Struct from './codec/Struct';
import Address from './Address';
import ExtrinsicEra from './ExtrinsicEra';
import Method from './Method';
import Nonce from './Nonce';
import Signature from './Signature';
import SignaturePayload from './SignaturePayload';

type ExtrinsicSignatureValue = {
  signer?: AnyU8a | Address,
  signature?: AnyU8a
  nonce?: AnyNumber,
  era?: AnyU8a
};

export const IMMORTAL_ERA = new Uint8Array([0]);

const BIT_SIGNED = 0b10000000;
const BIT_UNSIGNED = 0;
const BIT_VERSION = 0b0000001;
const EMPTY_U8A = new Uint8Array();

/**
 * @name ExtrinsicSignature
 * @description
 * A container for the [[Signature]] associated with a specific [[Extrinsic]]
 */
export default class ExtrinsicSignature extends Struct {
  // Signature Information.
  //   1/3/5/9/33 bytes: The signing account identity, in Address format
  //   64 bytes: The Ed25519 signature of the Signing Payload
  //   8 bytes: The Transaction Index of the signing account
  //   1/2 bytes: The Transaction Era
  constructor (value?: ExtrinsicSignatureValue | Uint8Array) {
    super({
      signer: Address,
      signature: Signature,
      nonce: Nonce,
      era: ExtrinsicEra
    }, ExtrinsicSignature.decodeExtrinsicSignature(value));
  }

  static decodeExtrinsicSignature (value: ExtrinsicSignature | ExtrinsicSignatureValue | AnyU8a | undefined): object | Uint8Array {
    if (!value) {
      return {};
    } else if (isU8a(value)) {
      const version = value[0];

      if ((version & BIT_SIGNED) === BIT_SIGNED) {
        return value.subarray(1);
      } else {
        return {};
      }
    }

    return value as any;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength (): number {
    // version has 1 byte, signature takes the rest
    return 1 + (
      this.isSigned
        ? super.encodedLength
        : 0
    );
  }

  /**
   * @description `true` if the signature is valid
   */
  get isSigned (): boolean {
    return this.signature.length !== 0;
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
    return BIT_VERSION | (
      this.isSigned
        ? BIT_SIGNED
        : BIT_UNSIGNED
    );
  }

  private injectSignature (signature: Signature, signer: Address, nonce: Nonce, era: ExtrinsicEra): ExtrinsicSignature {
    this.set('era', era);
    this.set('nonce', nonce);
    this.set('signer', signer);
    this.set('signature', signature);

    return this;
  }

  /**
   * @description Adds a raw signature
   */
  addSignature (_signer: Address | Uint8Array, _signature: Uint8Array, _nonce: AnyNumber, _era: Uint8Array = IMMORTAL_ERA): ExtrinsicSignature {
    const signer = new Address(_signer);
    const nonce = new Nonce(_nonce);
    const era = new ExtrinsicEra(_era);
    const signature = new Signature(_signature);

    return this.injectSignature(signature, signer, nonce, era);
  }

  /**
   * @description Generate a payload and pplies the signature from a keypair
   */
  sign (method: Method, signerPair: KeyringPair, nonce: AnyNumber, blockHash: AnyU8a, era: Uint8Array = IMMORTAL_ERA): ExtrinsicSignature {
    const signer = new Address(signerPair.publicKey());
    const signingPayload = new SignaturePayload({
      nonce,
      method,
      era,
      blockHash
    });
    const signature = new Signature(signingPayload.sign(signerPair));

    return this.injectSignature(signature, signer, signingPayload.nonce, signingPayload.era);
  }

  /**
   * @description Encodes the value as a Uint8Array as per the parity-codec specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a (isBare?: boolean): Uint8Array {
    return u8aConcat(
      new Uint8Array([this.version]),
      this.isSigned
        ? super.toU8a(isBare)
        : EMPTY_U8A
    );
  }
}

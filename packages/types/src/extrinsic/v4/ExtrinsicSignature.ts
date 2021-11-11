// Copyright 2017-2021 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { EcdsaSignature, Ed25519Signature, ExtrinsicEra, ExtrinsicSignature, Sr25519Signature } from '../../interfaces/extrinsics';
import type { Address, Balance, Call, Index } from '../../interfaces/runtime';
import type { ExtrinsicPayloadValue, IExtrinsicSignature, IKeyringPair, Registry, SignatureOptions } from '../../types';
import type { ExtrinsicSignatureOptions } from '../types';

import { assert, isU8a, isUndefined, objectProperties, objectSpread, stringify, u8aToHex } from '@polkadot/util';

import { Compact } from '../../codec/Compact';
import { Struct } from '../../codec/Struct';
import { EMPTY_U8A, IMMORTAL_ERA } from '../constants';
import { GenericExtrinsicPayloadV4 } from './ExtrinsicPayload';

function toAddress (registry: Registry, address: Address | Uint8Array | string): Address {
  return registry.createType('Address', isU8a(address) ? u8aToHex(address) : address);
}

/**
 * @name GenericExtrinsicSignatureV4
 * @description
 * A container for the [[Signature]] associated with a specific [[Extrinsic]]
 */
export class GenericExtrinsicSignatureV4 extends Struct implements IExtrinsicSignature {
  #signKeys: string[];

  constructor (registry: Registry, value?: GenericExtrinsicSignatureV4 | Uint8Array, { isSigned }: ExtrinsicSignatureOptions = {}) {
    const signTypes = registry.getSignedExtensionTypes();

    super(
      registry,
      objectSpread(
        // eslint-disable-next-line sort-keys
        { signer: 'Address', signature: 'ExtrinsicSignature' },
        signTypes
      ),
      GenericExtrinsicSignatureV4.decodeExtrinsicSignature(value, isSigned)
    );

    this.#signKeys = Object.keys(signTypes);

    objectProperties(this, this.#signKeys, (k) => this.get(k));
  }

  /** @internal */
  public static decodeExtrinsicSignature (value?: GenericExtrinsicSignatureV4 | Uint8Array, isSigned = false): GenericExtrinsicSignatureV4 | Uint8Array {
    if (!value) {
      return EMPTY_U8A;
    } else if (value instanceof GenericExtrinsicSignatureV4) {
      return value;
    }

    return isSigned
      ? value
      : EMPTY_U8A;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public override get encodedLength (): number {
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
    // the second case here is when we don't have an enum signature, treat as raw
    return (this.multiSignature.value || this.multiSignature) as Sr25519Signature;
  }

  /**
   * @description The raw [[ExtrinsicSignature]]
   */
  public get multiSignature (): ExtrinsicSignature {
    return this.get('signature') as ExtrinsicSignature;
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

  protected _injectSignature (signer: Address, signature: ExtrinsicSignature, payload: GenericExtrinsicPayloadV4): IExtrinsicSignature {
    // use the fields exposed to guide the getters
    for (let i = 0; i < this.#signKeys.length; i++) {
      const k = this.#signKeys[i];
      const v = payload.get(k);

      if (!isUndefined(v)) {
        this.set(k, v);
      }
    }

    // additional fields (exposed in struct itself)
    this.set('signer', signer);
    this.set('signature', signature);

    return this;
  }

  /**
   * @description Adds a raw signature
   */
  public addSignature (signer: Address | Uint8Array | string, signature: Uint8Array | HexString, payload: ExtrinsicPayloadValue | Uint8Array | HexString): IExtrinsicSignature {
    return this._injectSignature(
      toAddress(this.registry, signer),
      this.registry.createType('ExtrinsicSignature', signature),
      new GenericExtrinsicPayloadV4(this.registry, payload)
    );
  }

  /**
   * @description Creates a payload from the supplied options
   */
  public createPayload (method: Call, options: SignatureOptions): GenericExtrinsicPayloadV4 {
    const { era, runtimeVersion: { specVersion, transactionVersion } } = options;

    return new GenericExtrinsicPayloadV4(this.registry, objectSpread<ExtrinsicPayloadValue>({}, options, {
      era: era || IMMORTAL_ERA,
      method: method.toHex(),
      specVersion,
      transactionVersion
    }));
  }

  /**
   * @description Generate a payload and applies the signature from a keypair
   */
  public sign (method: Call, account: IKeyringPair, options: SignatureOptions): IExtrinsicSignature {
    assert(account && account.addressRaw, () => `Expected a valid keypair for signing, found ${stringify(account)}`);

    const signer = toAddress(this.registry, account.addressRaw);
    const payload = this.createPayload(method, options);
    const signature = this.registry.createType('ExtrinsicSignature', payload.sign(account));

    return this._injectSignature(signer, signature, payload);
  }

  /**
   * @description Generate a payload and applies a fake signature
   */
  public signFake (method: Call, address: Address | Uint8Array | string, options: SignatureOptions): IExtrinsicSignature {
    assert(address, () => `Expected a valid address for signing, found ${stringify(address)}`);

    const signer = toAddress(this.registry, address);
    const payload = this.createPayload(method, options);
    const signature = this.registry.createType('ExtrinsicSignature');

    return this._injectSignature(signer, signature, payload);
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public override toU8a (isBare?: boolean): Uint8Array {
    return this.isSigned
      ? super.toU8a(isBare)
      : EMPTY_U8A;
  }
}
